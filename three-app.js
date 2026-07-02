import * as THREE from 'https://esm.sh/three@0.150.1';
import { OrbitControls } from 'https://esm.sh/three@0.150.1/examples/jsm/controls/OrbitControls.js';

// Application State
let scene, camera, renderer, controls;
let activeSceneIndex = 0;

// Groups for states
let groupWelcome, groupDispatch, groupConsult, groupSample, groupDelivery, groupPortalLock, groupDashboardData, groupStaffBriefcase, groupDoctorCross;
let allGroups = [];
let opacities = [1, 0, 0, 0, 0, 0, 0, 0, 0];
let targetOpacities = [1, 0, 0, 0, 0, 0, 0, 0, 0];

// Animation references
const clock = new THREE.Clock();
let welcomeOuterSphere, welcomeInnerWire;
let dispatchRouteLine, dispatchNursePulse, mapGrid;
let consultGlassTablet, consultOscilloscope;
let dnaLeftStrand, dnaRightStrand, dnaRungs;
let deliveryBottle, deliveryLiquidParticles = [];
let portalShield;
let staffBriefcase;
let doctorCross, doctorCrossOrbits = [];

// Cameras & Targets configuration
const cameraConfigs = [
    { pos: new THREE.Vector3(0, 0.5, 7.5), target: new THREE.Vector3(0, 0, 0) },      // 0: Welcome (Centered)
    { pos: new THREE.Vector3(5, 5, 7), target: new THREE.Vector3(0, 0, 0) },          // 1: Dispatch (High angle)
    { pos: new THREE.Vector3(-3.5, 1.5, 5.5), target: new THREE.Vector3(0, 0.5, 0) }, // 2: Consult (Side angle)
    { pos: new THREE.Vector3(0, 0.2, 5.5), target: new THREE.Vector3(0, 0, 0) },      // 3: DNA (Close-up)
    { pos: new THREE.Vector3(3.5, 0.8, 5.5), target: new THREE.Vector3(0, 0, 0) },    // 4: Delivery (Angled bottle)
    { pos: new THREE.Vector3(0, 0, 6.5), target: new THREE.Vector3(0, 0, 0) },        // 5: Sign In (Shield)
    { pos: new THREE.Vector3(-3, 2.5, 5), target: new THREE.Vector3(0, 0, 0) },       // 6: Patient Dashboard (Data helix)
    { pos: new THREE.Vector3(3.5, 2.5, 5.5), target: new THREE.Vector3(0, -0.2, 0) }, // 7: Staff Board (Briefcase)
    { pos: new THREE.Vector3(-4, 0.5, 5), target: new THREE.Vector3(0, 0.5, 0) }       // 8: Doctor Board (Doctor Cross)
];

let cameraTargetPos = cameraConfigs[0].pos.clone();
let cameraTargetLookAt = cameraConfigs[0].target.clone();

// Minimal Clinical Theme Palette
const CLINIC_COLORS = {
    teal: 0x0d9488,
    tealDark: 0x0f766e,
    tealGlow: 0x119488,
    white: 0xf3f4f6,
    gray: 0x4b5563,
    darkBg: 0x080c14,
    blue: 0x2563eb
};

// Materials Factory
const MaterialFactory = {
    glass: (color = CLINIC_COLORS.teal, opacity = 0.2) => new THREE.MeshPhysicalMaterial({
        color: color,
        transparent: true,
        opacity: opacity,
        roughness: 0.1,
        metalness: 0.1,
        transmission: 0.95,
        thickness: 0.8,
        clearcoat: 1.0,
        depthWrite: false
    }),
    wireframe: (color = CLINIC_COLORS.teal) => new THREE.MeshBasicMaterial({
        color: color,
        wireframe: true,
        transparent: true,
        opacity: 0.3
    }),
    solidMed: (color = CLINIC_COLORS.white) => new THREE.MeshPhysicalMaterial({
        color: color,
        roughness: 0.4,
        metalness: 0.2,
        transparent: true
    }),
    glowingLine: (color = CLINIC_COLORS.teal, opacity = 0.8) => new THREE.LineBasicMaterial({
        color: color,
        transparent: true,
        opacity: opacity,
        linewidth: 1.5
    })
};

// Initialize WebGL Application
function init() {
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas) return;

    // Build scene
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(CLINIC_COLORS.darkBg, 0.12);

    // Build camera
    camera = new THREE.PerspectiveCamera(40, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.copy(cameraTargetPos);

    // Build renderer
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 12;
    controls.minDistance = 3;
    controls.target.copy(cameraTargetLookAt);

    // Clean lights
    const lightAmbient = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(lightAmbient);

    const lightDirectTeal = new THREE.DirectionalLight(CLINIC_COLORS.teal, 1.8);
    lightDirectTeal.position.set(5, 10, 5);
    scene.add(lightDirectTeal);

    const lightDirectWhite = new THREE.DirectionalLight(CLINIC_COLORS.white, 1.2);
    lightDirectWhite.position.set(-5, -5, -3);
    scene.add(lightDirectWhite);

    const spotLight = new THREE.SpotLight(CLINIC_COLORS.tealGlow, 3, 12, Math.PI / 6, 0.5, 1);
    spotLight.position.set(0, 5, 0);
    scene.add(spotLight);

    // Setup Scenes
    createSceneWelcome();
    createSceneDispatch();
    createSceneConsult();
    createSceneSample();
    createSceneDelivery();
    createScenePortalLock();
    createSceneDashboardData();
    createSceneStaffBriefcase();
    createSceneDoctorCross();

    allGroups = [
        groupWelcome,
        groupDispatch,
        groupConsult,
        groupSample,
        groupDelivery,
        groupPortalLock,
        groupDashboardData,
        groupStaffBriefcase,
        groupDoctorCross
    ];

    // Initial opacity bindings
    allGroups.forEach((g, i) => applyOpacities(g, opacities[i]));

    // Resize
    window.addEventListener('resize', onWindowResize);
    
    // Scene buttons hook
    bindUIButtons();

    // Start
    animateLoop();
}

// Opacity setter
function applyOpacities(group, val) {
    group.traverse((child) => {
        if (child.isMesh && child.material) {
            child.material.transparent = true;
            child.material.opacity = val * (child.userData.baseOpacity || 1.0);
        }
        if (child.isPoints && child.material) {
            child.material.transparent = true;
            child.material.opacity = val * (child.userData.baseOpacity || 1.0);
        }
        if (child.isLine && child.material) {
            child.material.transparent = true;
            child.material.opacity = val * (child.userData.baseOpacity || 1.0);
        }
    });
}

// ----------------------------------------------------
// SCENE 0: Welcome Sphere (Professional Glass & Data grid)
// ----------------------------------------------------
function createSceneWelcome() {
    groupWelcome = new THREE.Group();
    scene.add(groupWelcome);

    // Ground Grid Helper
    const baseGrid = new THREE.GridHelper(8, 16, CLINIC_COLORS.teal, CLINIC_COLORS.gray);
    baseGrid.position.y = -1.8;
    baseGrid.material.transparent = true;
    baseGrid.material.opacity = 0.2;
    groupWelcome.add(baseGrid);

    // Outer Glass Sphere
    const sphereGeo = new THREE.SphereGeometry(1.6, 64, 64);
    const glassMat = MaterialFactory.glass(CLINIC_COLORS.teal, 0.15);
    welcomeOuterSphere = new THREE.Mesh(sphereGeo, glassMat);
    groupWelcome.add(welcomeOuterSphere);

    // Inner wireframe sphere
    const wireGeo = new THREE.SphereGeometry(1.3, 24, 24);
    const wireMat = MaterialFactory.wireframe(CLINIC_COLORS.teal);
    welcomeInnerWire = new THREE.Mesh(wireGeo, wireMat);
    welcomeInnerWire.userData.baseOpacity = 0.45;
    groupWelcome.add(welcomeInnerWire);

    // Floating micro data points
    const pointCount = 300;
    const pGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(pointCount * 3);
    for (let i = 0; i < pointCount; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = 1.35 + Math.random() * 0.2;
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
        color: CLINIC_COLORS.white,
        size: 0.03,
        transparent: true,
        opacity: 0.6
    });
    const points = new THREE.Points(pGeo, pMat);
    points.userData.baseOpacity = 0.6;
    groupWelcome.add(points);
}

// ----------------------------------------------------
// SCENE 1: Dispatch (Minimal Route wireframe)
// ----------------------------------------------------
function createSceneDispatch() {
    groupDispatch = new THREE.Group();
    scene.add(groupDispatch);

    mapGrid = new THREE.GridHelper(10, 20, CLINIC_COLORS.teal, 0x1e293b);
    mapGrid.position.y = -1.5;
    mapGrid.material.transparent = true;
    mapGrid.material.opacity = 0.25;
    groupDispatch.add(mapGrid);

    // Hospital Block (Glass monolith)
    const monolithGeo = new THREE.BoxGeometry(0.8, 2.2, 0.8);
    const glassMonolithMat = MaterialFactory.glass(CLINIC_COLORS.teal, 0.2);
    const hospital = new THREE.Mesh(monolithGeo, glassMonolithMat);
    hospital.position.set(-3.5, -0.4, -1.5);
    groupDispatch.add(hospital);

    // Patient House (Glass block)
    const houseGeo = new THREE.BoxGeometry(1.2, 1.0, 1.2);
    const glassHouseMat = MaterialFactory.glass(CLINIC_COLORS.teal, 0.15);
    const house = new THREE.Mesh(houseGeo, glassHouseMat);
    house.position.set(3.0, -1.0, 1.5);
    groupDispatch.add(house);

    // Thin outline
    const houseEdges = new THREE.EdgesGeometry(houseGeo);
    const lineMat = MaterialFactory.glowingLine(CLINIC_COLORS.teal, 0.5);
    const houseOutline = new THREE.LineSegments(houseEdges, lineMat);
    houseOutline.position.copy(house.position);
    groupDispatch.add(houseOutline);

    const monoEdges = new THREE.EdgesGeometry(monolithGeo);
    const monoOutline = new THREE.LineSegments(monoEdges, lineMat);
    monoOutline.position.copy(hospital.position);
    groupDispatch.add(monoOutline);

    // Route path
    const startPoint = new THREE.Vector3(-3.5, -0.4, -1.5);
    const controlPoint1 = new THREE.Vector3(-1.0, 1.0, -0.5);
    const controlPoint2 = new THREE.Vector3(1.0, 0.5, 0.5);
    const endPoint = new THREE.Vector3(3.0, -1.0, 1.5);

    const curve = new THREE.CatmullRomCurve3([startPoint, controlPoint1, controlPoint2, endPoint]);
    const points = curve.getPoints(60);
    const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
    
    dispatchRouteLine = new THREE.Line(lineGeo, MaterialFactory.glowingLine(CLINIC_COLORS.teal, 0.6));
    groupDispatch.add(dispatchRouteLine);

    // Dispatch pulse
    const pulseGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const pulseMat = new THREE.MeshBasicMaterial({ color: CLINIC_COLORS.white });
    dispatchNursePulse = new THREE.Mesh(pulseGeo, pulseMat);
    dispatchNursePulse.userData.baseOpacity = 1.0;
    groupDispatch.add(dispatchNursePulse);
}

// ----------------------------------------------------
// SCENE 2: Video Consultation Screen
// ----------------------------------------------------
function createSceneConsult() {
    groupConsult = new THREE.Group();
    scene.add(groupConsult);

    const glassTabletGeo = new THREE.BoxGeometry(3.6, 2.2, 0.05);
    const glassTabletMat = MaterialFactory.glass(CLINIC_COLORS.teal, 0.08);
    consultGlassTablet = new THREE.Mesh(glassTabletGeo, glassTabletMat);
    groupConsult.add(consultGlassTablet);

    const borderGeo = new THREE.BoxGeometry(3.62, 2.22, 0.06);
    const edges = new THREE.EdgesGeometry(borderGeo);
    const lineMat = MaterialFactory.glowingLine(CLINIC_COLORS.teal, 0.4);
    const frame = new THREE.LineSegments(edges, lineMat);
    groupConsult.add(frame);

    const markGeo = new THREE.PlaneGeometry(3.2, 1.8);
    const markWireMat = MaterialFactory.wireframe(CLINIC_COLORS.teal);
    markWireMat.opacity = 0.06;
    const markerGrid = new THREE.Mesh(markGeo, markWireMat);
    markerGrid.position.z = 0.02;
    groupConsult.add(markerGrid);

    consultOscilloscope = new THREE.Group();
    for (let i = 0; i < 4; i++) {
        const ringGeo = new THREE.RingGeometry(1.6 + i * 0.4, 1.62 + i * 0.4, 64);
        const ringMat = new THREE.MeshBasicMaterial({
            color: CLINIC_COLORS.teal,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.3 - i * 0.07
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2;
        consultOscilloscope.add(ring);
    }
    groupConsult.add(consultOscilloscope);
}

// ----------------------------------------------------
// SCENE 3: Laboratory DNA Helix
// ----------------------------------------------------
function createSceneSample() {
    groupSample = new THREE.Group();
    scene.add(groupSample);

    const length = 3.6;
    const steps = 30;
    const radius = 0.8;
    const helixTurns = 2.0;

    dnaLeftStrand = new THREE.Group();
    dnaRightStrand = new THREE.Group();
    dnaRungs = new THREE.Group();

    groupSample.add(dnaLeftStrand);
    groupSample.add(dnaRightStrand);
    groupSample.add(dnaRungs);

    const sphereGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const rungGeo = new THREE.CylinderGeometry(0.015, 0.015, 1, 8);

    const glassNodeMat = MaterialFactory.glass(CLINIC_COLORS.teal, 0.6);
    glassNodeMat.roughness = 0.05;
    glassNodeMat.metalness = 0.8;

    const whiteNodeMat = MaterialFactory.solidMed(CLINIC_COLORS.white);
    const rungMat = MaterialFactory.solidMed(CLINIC_COLORS.gray);
    rungMat.opacity = 0.3;

    for (let i = 0; i < steps; i++) {
        const t = i / steps;
        const angle = t * helixTurns * 2.0 * Math.PI;
        const y = (t - 0.5) * length;

        const xA = Math.cos(angle) * radius;
        const zA = Math.sin(angle) * radius;
        const nodeA = new THREE.Mesh(sphereGeo, glassNodeMat);
        nodeA.position.set(xA, y, zA);
        dnaLeftStrand.add(nodeA);

        const xB = Math.cos(angle + Math.PI) * radius;
        const zB = Math.sin(angle + Math.PI) * radius;
        const nodeB = new THREE.Mesh(sphereGeo, whiteNodeMat);
        nodeB.position.set(xB, y, zB);
        dnaRightStrand.add(nodeB);

        const rung = new THREE.Mesh(rungGeo, rungMat);
        rung.position.set((xA + xB) / 2, y, (zA + zB) / 2);
        rung.scale.set(1, radius * 2, 1);
        rung.quaternion.setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            new THREE.Vector3(xA - xB, 0, zA - zB).normalize()
        );
        dnaRungs.add(rung);
    }
}

// ----------------------------------------------------
// SCENE 4: Apothecary Delivery Vial
// ----------------------------------------------------
function createSceneDelivery() {
    groupDelivery = new THREE.Group();
    scene.add(groupDelivery);

    deliveryBottle = new THREE.Group();
    
    const bodyGeo = new THREE.CylinderGeometry(0.7, 0.7, 1.8, 32);
    const bottleGlassMat = MaterialFactory.glass(CLINIC_COLORS.teal, 0.12);
    bottleGlassMat.transmission = 0.98;
    bottleGlassMat.roughness = 0.05;
    bottleGlassMat.thickness = 0.5;

    const vialBody = new THREE.Mesh(bodyGeo, bottleGlassMat);
    deliveryBottle.add(vialBody);

    const neckGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.4, 32);
    const vialNeck = new THREE.Mesh(neckGeo, bottleGlassMat);
    vialNeck.position.y = 1.1;
    deliveryBottle.add(vialNeck);

    const lipGeo = new THREE.TorusGeometry(0.35, 0.06, 16, 32);
    const vialLip = new THREE.Mesh(lipGeo, bottleGlassMat);
    vialLip.rotation.x = Math.PI / 2;
    vialLip.position.y = 1.3;
    deliveryBottle.add(vialLip);

    const capGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.25, 32);
    const capMat = MaterialFactory.solidMed(CLINIC_COLORS.white);
    capMat.metalness = 0.9;
    capMat.roughness = 0.1;
    const vialCap = new THREE.Mesh(capGeo, capMat);
    vialCap.position.y = 1.4;
    deliveryBottle.add(vialCap);

    groupDelivery.add(deliveryBottle);

    const medicineCount = 18;
    const medGeo = new THREE.SphereGeometry(0.08, 8, 8);
    const medMat = new THREE.MeshBasicMaterial({ color: CLINIC_COLORS.white });

    for (let i = 0; i < medicineCount; i++) {
        const sphere = new THREE.Mesh(medGeo, medMat);
        const r = Math.random() * 0.45;
        const theta = Math.random() * Math.PI * 2;
        sphere.position.x = Math.cos(theta) * r;
        sphere.position.y = (Math.random() - 0.5) * 1.3;
        sphere.position.z = Math.sin(theta) * r;
        sphere.userData = {
            speed: 0.5 + Math.random() * 1.0,
            amplitude: 0.05 + Math.random() * 0.08,
            initialY: sphere.position.y
        };
        deliveryLiquidParticles.push(sphere);
        deliveryBottle.add(sphere);
    }
    
    deliveryBottle.position.set(0, -0.2, 0);
    deliveryBottle.rotation.x = Math.PI / 8;
    deliveryBottle.rotation.z = -Math.PI / 12;
}

// ----------------------------------------------------
// SCENE 5: Portal Lock (Sign In Screen)
// ----------------------------------------------------
function createScenePortalLock() {
    groupPortalLock = new THREE.Group();
    scene.add(groupPortalLock);

    portalShield = new THREE.Group();

    const innerRing = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.03, 16, 64), MaterialFactory.solidMed(CLINIC_COLORS.white));
    const outerRing = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.02, 16, 64), MaterialFactory.glass(CLINIC_COLORS.teal, 0.4));
    portalShield.add(innerRing);
    portalShield.add(outerRing);

    const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.22, 0.06), MaterialFactory.solidMed(CLINIC_COLORS.white));
    const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.8, 0.06), MaterialFactory.solidMed(CLINIC_COLORS.white));
    portalShield.add(crossH);
    portalShield.add(crossV);

    groupPortalLock.add(portalShield);
}

// ----------------------------------------------------
// SCENE 6: Dashboard Data Sphere
// ----------------------------------------------------
function createSceneDashboardData() {
    groupDashboardData = new THREE.Group();
    scene.add(groupDashboardData);

    const dataWire1 = new THREE.Mesh(new THREE.IcosahedronGeometry(1.5, 1), MaterialFactory.wireframe(CLINIC_COLORS.teal));
    const dataWire2 = new THREE.Mesh(new THREE.IcosahedronGeometry(1.0, 1), MaterialFactory.wireframe(CLINIC_COLORS.white));
    dataWire1.userData.baseOpacity = 0.25;
    dataWire2.userData.baseOpacity = 0.35;
    
    groupDashboardData.add(dataWire1);
    groupDashboardData.add(dataWire2);
}

// ----------------------------------------------------
// SCENE 7: Staff Briefcase (Medical Dispatch Box)
// ----------------------------------------------------
function createSceneStaffBriefcase() {
    groupStaffBriefcase = new THREE.Group();
    scene.add(groupStaffBriefcase);

    staffBriefcase = new THREE.Group();

    // Briefcase shell (thin box)
    const boxGeo = new THREE.BoxGeometry(2.4, 1.8, 0.7);
    const boxMat = MaterialFactory.glass(CLINIC_COLORS.teal, 0.15);
    const boxMesh = new THREE.Mesh(boxGeo, boxMat);
    staffBriefcase.add(boxMesh);

    // Edge lines
    const borderGeo = new THREE.BoxGeometry(2.42, 1.82, 0.72);
    const edges = new THREE.EdgesGeometry(borderGeo);
    const borderLine = new THREE.LineSegments(edges, MaterialFactory.glowingLine(CLINIC_COLORS.white, 0.5));
    staffBriefcase.add(borderLine);

    // Handle
    const handleGeo = new THREE.TorusGeometry(0.3, 0.05, 8, 24, Math.PI);
    const handleMat = MaterialFactory.solidMed(CLINIC_COLORS.white);
    const handle = new THREE.Mesh(handleGeo, handleMat);
    handle.position.set(0, 0.9, 0);
    staffBriefcase.add(handle);

    // Latches
    const latchGeo = new THREE.BoxGeometry(0.15, 0.15, 0.1);
    const latchL = new THREE.Mesh(latchGeo, handleMat);
    const latchR = new THREE.Mesh(latchGeo, handleMat);
    latchL.position.set(-0.7, 0.8, 0.35);
    latchR.position.set(0.7, 0.8, 0.35);
    staffBriefcase.add(latchL);
    staffBriefcase.add(latchR);

    staffBriefcase.position.set(0, -0.2, 0);
    groupStaffBriefcase.add(staffBriefcase);
}

// ----------------------------------------------------
// SCENE 8: Doctor Cross (Interactive Physician symbol)
// ----------------------------------------------------
function createSceneDoctorCross() {
    groupDoctorCross = new THREE.Group();
    scene.add(groupDoctorCross);

    doctorCross = new THREE.Group();

    // Floating Glass Cross
    const crossH = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.5, 0.4), MaterialFactory.glass(CLINIC_COLORS.teal, 0.2));
    const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.6, 0.4), MaterialFactory.glass(CLINIC_COLORS.teal, 0.2));
    doctorCross.add(crossH);
    doctorCross.add(crossV);

    const wireH = new THREE.LineSegments(new THREE.EdgesGeometry(crossH.geometry), MaterialFactory.glowingLine(CLINIC_COLORS.white, 0.6));
    const wireV = new THREE.LineSegments(new THREE.EdgesGeometry(crossV.geometry), MaterialFactory.glowingLine(CLINIC_COLORS.white, 0.6));
    doctorCross.add(wireH);
    doctorCross.add(wireV);

    groupDoctorCross.add(doctorCross);

    // Holographic Orbit Rings
    for (let i = 0; i < 2; i++) {
        const ringGeo = new THREE.TorusGeometry(1.5, 0.02, 8, 64);
        const ringMat = new THREE.MeshBasicMaterial({
            color: CLINIC_COLORS.teal,
            transparent: true,
            opacity: 0.4
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2;
        ring.rotation.y = (i === 0 ? Math.PI / 6 : -Math.PI / 6);
        groupDoctorCross.add(ring);
        doctorCrossOrbits.push(ring);
    }
}

// ----------------------------------------------------
// GLOBAL TRANSITIONS
// ----------------------------------------------------
window.transitionToStep = function(sceneIndex) {
    if (sceneIndex < 0 || sceneIndex >= cameraConfigs.length) return;
    
    activeSceneIndex = sceneIndex;

    cameraTargetPos.copy(cameraConfigs[sceneIndex].pos);
    cameraTargetLookAt.copy(cameraConfigs[sceneIndex].target);

    // Update opacity target states
    for (let i = 0; i < targetOpacities.length; i++) {
        targetOpacities[i] = (i === sceneIndex) ? 1.0 : 0.0;
    }

    const titleEl = document.getElementById('three-scene-title');
    if (titleEl) {
        const titles = [
            "Overview: Neural Health Sphere",
            "Phase 01: Dispatch Route Mapping",
            "Phase 02: Virtual Consult Screen",
            "Phase 03: Laboratory DNA Helices",
            "Phase 04: Translucent Apothecary",
            "Authentication: Secure Shield Portal",
            "Patient Hub: Operational Health Grid",
            "Field Logistics: Operational Dispatch Kit",
            "Diagnostics Hub: Telemetry Medical Cross"
        ];
        titleEl.textContent = titles[sceneIndex] || "VitalsFlow Engine";
    }

    const buttons = document.querySelectorAll('.three-node-btn');
    buttons.forEach((btn, idx) => {
        if (idx === sceneIndex) btn.classList.add('active');
        else btn.classList.remove('active');
    });
};

function bindUIButtons() {
    const buttons = document.querySelectorAll('.three-node-btn');
    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(e.target.getAttribute('data-scene'));
            window.transitionToStep(idx);
            if (window.syncHTMLToStep) {
                window.syncHTMLToStep(idx);
            }
        });
    });
}

// ----------------------------------------------------
// RUN LOOPS
// ----------------------------------------------------
function onWindowResize() {
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas) return;

    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
}

function animateLoop() {
    requestAnimationFrame(animateLoop);

    const elapsedTime = clock.getElapsedTime();

    camera.position.lerp(cameraTargetPos, 0.045);
    controls.target.lerp(cameraTargetLookAt, 0.045);
    controls.update();

    for (let i = 0; i < allGroups.length; i++) {
        if (Math.abs(opacities[i] - targetOpacities[i]) > 0.002) {
            opacities[i] = THREE.MathUtils.lerp(opacities[i], targetOpacities[i], 0.065);
            applyOpacities(allGroups[i], opacities[i]);
            allGroups[i].visible = (opacities[i] > 0.005);
        }
    }

    // Animations

    if (groupWelcome.visible) {
        welcomeOuterSphere.rotation.y = elapsedTime * 0.08;
        welcomeInnerWire.rotation.y = -elapsedTime * 0.12;
    }

    if (groupDispatch.visible) {
        const t = (elapsedTime * 0.16) % 1.0;
        const pathPositions = dispatchRouteLine.geometry.attributes.position.array;
        const totalPoints = pathPositions.length / 3;
        const targetPointIdx = Math.floor(t * totalPoints);
        
        if (targetPointIdx < totalPoints) {
            dispatchNursePulse.position.set(
                pathPositions[targetPointIdx * 3],
                pathPositions[targetPointIdx * 3 + 1],
                pathPositions[targetPointIdx * 3 + 2]
            );
        }
    }

    if (groupConsult.visible) {
        consultGlassTablet.position.y = Math.sin(elapsedTime * 1.5) * 0.06;
        consultOscilloscope.children.forEach((ring, idx) => {
            const baseScale = 1.0 + Math.sin(elapsedTime * 2.0 - idx * 0.5) * 0.06;
            ring.scale.set(baseScale, baseScale, 1.0);
        });
    }

    if (groupSample.visible) {
        dnaLeftStrand.rotation.y = elapsedTime * 0.28;
        dnaRightStrand.rotation.y = elapsedTime * 0.28;
        dnaRungs.rotation.y = elapsedTime * 0.28;
    }

    if (groupDelivery.visible) {
        deliveryBottle.rotation.y = elapsedTime * 0.35;
        deliveryLiquidParticles.forEach((part) => {
            part.position.y = part.userData.initialY + Math.sin(elapsedTime * part.userData.speed) * part.userData.amplitude;
        });
    }

    if (groupPortalLock.visible) {
        portalShield.rotation.y = elapsedTime * 0.3;
    }

    if (groupDashboardData.visible) {
        groupDashboardData.children[0].rotation.y = elapsedTime * 0.15;
        groupDashboardData.children[1].rotation.y = -elapsedTime * 0.25;
    }

    if (groupStaffBriefcase.visible) {
        staffBriefcase.rotation.y = elapsedTime * 0.35;
        staffBriefcase.position.y = -0.2 + Math.sin(elapsedTime * 0.8) * 0.08;
    }

    if (groupDoctorCross.visible) {
        doctorCross.rotation.y = elapsedTime * 0.25;
        doctorCross.position.y = Math.sin(elapsedTime * 0.8) * 0.08;
        doctorCrossOrbits.forEach((ring, idx) => {
            ring.rotation.z = (idx === 0 ? elapsedTime * 0.5 : -elapsedTime * 0.5);
        });
    }

    renderer.render(scene, camera);
}

init();
