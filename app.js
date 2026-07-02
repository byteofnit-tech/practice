// Multi-Patient Mock Database
let PATIENTS_DB = {
    eleanor: {
        id: "eleanor",
        name: "Eleanor Vance",
        zip: "10001",
        vitals: {
            bp: "118/76",
            hr: "68",
            spo2: "99",
            temp: "98.6",
            status: "Normal",
            timestamp: "Initial profile registry."
        },
        diagnosis: {
            status: "Optimal / Normal",
            notes: "No diagnoses recorded. Awaiting clinical consultation review.",
            prescriptions: "No active pharmacy prescriptions authorized."
        },
        reports: {
            cbc: {
                title: "Complete Blood Count (CBC)",
                released: true,
                date: "June 28, 2026",
                status: "Normal",
                statusClass: "normal",
                metrics: [
                    { name: "White Blood Cells (WBC)", val: "6.4", unit: "k/uL", range: "4.5 - 11.0", pct: 50, flag: "" },
                    { name: "Red Blood Cells (RBC)", val: "4.82", unit: "M/uL", range: "4.30 - 5.90", pct: 45, flag: "" },
                    { name: "Hemoglobin (HGB)", val: "14.2", unit: "g/dL", range: "13.5 - 17.5", pct: 40, flag: "" },
                    { name: "Platelet Count (PLT)", val: "280", unit: "k/uL", range: "150 - 450", pct: 60, flag: "" }
                ]
            },
            thyroid: {
                title: "Thyroid Function Panel (TSH)",
                released: true,
                date: "June 15, 2026",
                status: "Normal",
                statusClass: "normal",
                metrics: [
                    { name: "Thyroid Stimulating Hormone (TSH)", val: "2.40", unit: "uIU/mL", range: "0.40 - 4.50", pct: 48, flag: "" },
                    { name: "Free Thyroxine (T4)", val: "1.2", unit: "ng/dL", range: "0.8 - 1.8", pct: 55, flag: "" }
                ]
            },
            lipid: {
                title: "Lipid Profile (Cholesterol)",
                released: true,
                date: "May 12, 2026",
                status: "Review Needed",
                statusClass: "warning",
                metrics: [
                    { name: "Total Cholesterol", val: "242", unit: "mg/dL", range: "< 200", pct: 85, flag: "H" },
                    { name: "Triglycerides", val: "165", unit: "mg/dL", range: "< 150", pct: 75, flag: "H" },
                    { name: "HDL (Good Cholesterol)", val: "38", unit: "mg/dL", range: "> 40", pct: 25, flag: "L" },
                    { name: "LDL (Bad Cholesterol)", val: "171", unit: "mg/dL", range: "< 100", pct: 90, flag: "H" }
                ]
            }
        }
    },
    john: {
        id: "john",
        name: "John Doe",
        zip: "90210",
        vitals: {
            bp: "122/80",
            hr: "70",
            spo2: "98",
            temp: "98.4",
            status: "Normal",
            timestamp: "Routine physical scan."
        },
        diagnosis: {
            status: "Optimal / Normal",
            notes: "Cardiorespiratory metrics normal. Excellent vascular conditioning.",
            prescriptions: "No active pharmacy prescriptions authorized."
        },
        reports: {
            cbc: {
                title: "Complete Blood Count (CBC)",
                released: true,
                date: "June 25, 2026",
                status: "Normal",
                statusClass: "normal",
                metrics: [
                    { name: "White Blood Cells (WBC)", val: "5.8", unit: "k/uL", range: "4.5 - 11.0", pct: 45, flag: "" },
                    { name: "Red Blood Cells (RBC)", val: "4.95", unit: "M/uL", range: "4.30 - 5.90", pct: 48, flag: "" },
                    { name: "Hemoglobin (HGB)", val: "15.0", unit: "g/dL", range: "13.5 - 17.5", pct: 50, flag: "" },
                    { name: "Platelet Count (PLT)", val: "260", unit: "k/uL", range: "150 - 450", pct: 55, flag: "" }
                ]
            },
            thyroid: {
                title: "Thyroid Function Panel (TSH)",
                released: true,
                date: "May 20, 2026",
                status: "Normal",
                statusClass: "normal",
                metrics: [
                    { name: "Thyroid Stimulating Hormone (TSH)", val: "1.85", unit: "uIU/mL", range: "0.40 - 4.50", pct: 35, flag: "" },
                    { name: "Free Thyroxine (T4)", val: "1.1", unit: "ng/dL", range: "0.8 - 1.8", pct: 45, flag: "" }
                ]
            },
            lipid: {
                title: "Lipid Profile (Cholesterol)",
                released: true,
                date: "May 10, 2026",
                status: "Normal",
                statusClass: "normal",
                metrics: [
                    { name: "Total Cholesterol", val: "185", unit: "mg/dL", range: "< 200", pct: 60, flag: "" },
                    { name: "Triglycerides", val: "120", unit: "mg/dL", range: "< 150", pct: 55, flag: "" },
                    { name: "HDL (Good Cholesterol)", val: "52", unit: "mg/dL", range: "> 40", pct: 65, flag: "" },
                    { name: "LDL (Bad Cholesterol)", val: "94", unit: "mg/dL", range: "< 100", pct: 45, flag: "" }
                ]
            }
        }
    },
    marcus: {
        id: "marcus",
        name: "Marcus Aurelius",
        zip: "75001",
        vitals: {
            bp: "148/94",
            hr: "96",
            spo2: "96",
            temp: "101.8",
            status: "Warning",
            timestamp: "Awaiting active physician assessment."
        },
        diagnosis: {
            status: "Active Treatment Required",
            notes: "Patient reports systemic chills and fatigue. In-home vitals reveal moderate pyrexia. Heart rate elevated at rest.",
            prescriptions: "Paracetamol 650mg QDS PRN for fever."
        },
        reports: {
            cbc: {
                title: "Complete Blood Count (CBC)",
                released: true,
                date: "June 28, 2026",
                status: "Review Needed",
                statusClass: "warning",
                metrics: [
                    { name: "White Blood Cells (WBC)", val: "14.2", unit: "k/uL", range: "4.5 - 11.0", pct: 95, flag: "H" },
                    { name: "Red Blood Cells (RBC)", val: "4.40", unit: "M/uL", range: "4.30 - 5.90", pct: 30, flag: "" },
                    { name: "Hemoglobin (HGB)", val: "13.6", unit: "g/dL", range: "13.5 - 17.5", pct: 32, flag: "" },
                    { name: "Platelet Count (PLT)", val: "310", unit: "k/uL", range: "150 - 450", pct: 68, flag: "" }
                ]
            },
            thyroid: {
                title: "Thyroid Function Panel (TSH)",
                released: false,
                date: "Pending Upload",
                status: "Pending",
                statusClass: "pending",
                metrics: [
                    { name: "Thyroid Stimulating Hormone (TSH)", val: "0.0", unit: "uIU/mL", range: "0.40 - 4.50", pct: 0, flag: "" },
                    { name: "Free Thyroxine (T4)", val: "0.0", unit: "ng/dL", range: "0.8 - 1.8", pct: 0, flag: "" }
                ]
            },
            lipid: {
                title: "Lipid Profile (Cholesterol)",
                released: false,
                date: "Pending Upload",
                status: "Pending",
                statusClass: "pending",
                metrics: [
                    { name: "Total Cholesterol", val: "0", unit: "mg/dL", range: "< 200", pct: 0, flag: "" },
                    { name: "Triglycerides", val: "0", unit: "mg/dL", range: "< 150", pct: 0, flag: "" },
                    { name: "HDL (Good Cholesterol)", val: "0", unit: "mg/dL", range: "> 40", pct: 0, flag: "" },
                    { name: "LDL (Bad Cholesterol)", val: "0", unit: "mg/dL", range: "< 100", pct: 0, flag: "" }
                ]
            }
        }
    }
};

// Global App States
let activeRole = "patient";
let currentOnboardingStep = 0;
let authStates = {
    patient: false,
    staff: false,
    doctor: false
};

// Selected Patient IDs for portal workflows
let activePatientId = "eleanor";
let activeDocFilter = "all";

// DOM View Containers
const viewOnboarding = document.getElementById('view-onboarding');
const viewSignIn = document.getElementById('view-signin');
const viewDashboard = document.getElementById('view-dashboard');
const viewStaff = document.getElementById('view-staff');
const viewDoctor = document.getElementById('view-doctor');
const allViews = [viewOnboarding, viewSignIn, viewDashboard, viewStaff, viewDoctor];

// Header Navigation Links
const navBrand = document.getElementById('nav-brand');
const btnNavOnboarding = document.getElementById('btn-nav-onboarding');
const btnNavSignIn = document.getElementById('btn-nav-signin');
const btnNavPatientDashboard = document.getElementById('btn-nav-patient-dashboard');
const btnNavStaffBoard = document.getElementById('btn-nav-staff-board');
const btnNavDoctorBoard = document.getElementById('btn-nav-doctor-board');

// Sign-In Form Elements
const signinForm = document.getElementById('signin-form');
const authTabs = document.querySelectorAll('.auth-role-tab');
const loginEmail = document.getElementById('login-email');
const loginEmailLabel = document.getElementById('login-email-label');
const signinDesc = document.getElementById('signin-desc');
const btnAuthSubmit = document.getElementById('btn-auth-submit');
const linkSwitchOnboarding = document.getElementById('link-switch-onboarding');

// Onboarding Elements
const regNameInput = document.getElementById('reg-name');
const regZipInput = document.getElementById('reg-zip');
const successMessageText = document.getElementById('success-message');
const btnSuccessLogin = document.getElementById('btn-success-login');
const btnStepPrev = document.getElementById('btn-step-prev');
const btnStepNext = document.getElementById('btn-step-next');
const onboardingProgress = document.getElementById('onboarding-progress');
const stepperNodes = document.querySelectorAll('.stepper-node');
const onboardingSteps = document.querySelectorAll('.onboarding-step');

// Patient Dashboard Elements
const dashboardWelcomeName = document.getElementById('dashboard-welcome-name');
const dashBP = document.getElementById('dash-bp');
const dashBPStatus = document.getElementById('dash-bp-status');
const dashHR = document.getElementById('dash-hr');
const dashHRStatus = document.getElementById('dash-hr-status');
const dashSpO2 = document.getElementById('dash-spo2');
const dashSpO2Status = document.getElementById('dash-spo2-status');
const dashPatientStatus = document.getElementById('dash-patient-status');
const dashDiagnosisText = document.getElementById('dash-diagnosis-text');
const dashPrescriptionsText = document.getElementById('dash-prescriptions-text');
const reportsListBody = document.getElementById('reports-list-body');

// Staff Portal Elements
const staffPatientListContainer = document.getElementById('staff-patient-list-container');
const staffVisitWorkspace = document.getElementById('staff-visit-workspace');
const staffQueueBody = document.getElementById('staff-queue-body');
const btnStaffBackToList = document.getElementById('btn-staff-back-to-list');

const staffPatientNameLabel = document.getElementById('staff-patient-name-label');
const staffPatientZipLabel = document.getElementById('staff-patient-zip-label');
const staffVitalsForm = document.getElementById('staff-vitals-form');
const staffBPValSys = document.getElementById('staff-bp-sys');
const staffBPValDia = document.getElementById('staff-bp-dia');
const staffHRVal = document.getElementById('staff-hr');
const staffSpO2Val = document.getElementById('staff-spo2');
const staffTempVal = document.getElementById('staff-temp');
const staffSampleStatus = document.getElementById('staff-sample-status');
const btnStaffSubmitReport = document.getElementById('btn-staff-submit-report');
const staffChecklistState = { cbc: false, thyroid: false, lipid: false };

// Doctor Portal Elements
const doctorPatientListContainer = document.getElementById('doctor-patient-list-container');
const doctorWorkspaceContainer = document.getElementById('doctor-workspace-container');
const docPatientRegistryBody = document.getElementById('doctor-patient-registry-body');
const btnDoctorBackToList = document.getElementById('btn-doctor-back-to-list');
const docFilterBtns = document.querySelectorAll('.doc-filter-btn');

const docActivePatientHeader = document.getElementById('doc-active-patient-header');
const docViewBP = document.getElementById('doctor-workspace-container').querySelector('#doc-view-bp');
const docViewHR = document.getElementById('doctor-workspace-container').querySelector('#doc-view-hr');
const docViewTemp = document.getElementById('doctor-workspace-container').querySelector('#doc-view-temp');
const docVitalsTimestamp = document.getElementById('doctor-workspace-container').querySelector('#doc-vitals-timestamp');
const docDiagnosisInput = document.getElementById('doc-diagnosis-input');
const docPatientStatusSelect = document.getElementById('doc-patient-status-select');
const docPrescriptionsInput = document.getElementById('doc-prescriptions-input');
const docReportSelect = document.getElementById('doc-report-select');
const docMetricInputsArea = document.getElementById('doc-metric-inputs-area');
const btnDocPublish = document.getElementById('btn-doc-publish');
const docTemplateSelect = document.getElementById('doc-template-select');

// Consult Simulation Elements
let isCallConnected = false;
let callTimeInterval = null;
let callDurationSeconds = 0;
const btnToggleConsult = document.getElementById('btn-toggle-consult');
const consultTimer = document.querySelector('.consult-timer');
const waveRings = document.querySelectorAll('.wave-ring');

// Modal Elements
const reportModal = document.getElementById('report-modal');
const btnCloseReportModal = document.getElementById('btn-close-report-modal');
const modalReportTitle = document.getElementById('modal-report-title');
const modalReportDate = document.getElementById('modal-report-date');
const modalReportStatus = document.getElementById('modal-report-status');
const resultsTableBody = document.getElementById('results-table-body');

// Onboarding checklist elements
const onboardingChecklistState = { 1: false, 2: false, 3: false };

// ----------------------------------------------------
// BOOTSTRAP INITIALIZATION
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Event router
    btnNavOnboarding.addEventListener('click', () => switchView('onboarding'));
    btnNavSignIn.addEventListener('click', () => switchView('signin'));
    btnNavPatientDashboard.addEventListener('click', () => switchView('patient-dashboard'));
    btnNavStaffBoard.addEventListener('click', () => switchView('staff-board'));
    btnNavDoctorBoard.addEventListener('click', () => switchView('doctor-board'));
    navBrand.addEventListener('click', (e) => {
        e.preventDefault();
        switchView('onboarding');
    });

    // 2. Sign In Tabs & Forms
    authTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            authTabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            activeRole = e.target.getAttribute('data-role');
            updateSignInRoleUI();
        });
    });

    signinForm.addEventListener('submit', handleSignIn);
    
    linkSwitchOnboarding.addEventListener('click', (e) => {
        e.preventDefault();
        switchView('onboarding');
    });

    // Logout buttons
    document.getElementById('btn-patient-logout').addEventListener('click', () => handleLogout('patient'));
    document.getElementById('btn-staff-logout').addEventListener('click', () => handleLogout('staff'));
    document.getElementById('btn-doctor-logout').addEventListener('click', () => handleLogout('doctor'));

    // 3. Onboarding Actions
    btnStepNext.addEventListener('click', advanceOnboarding);
    btnStepPrev.addEventListener('click', regressOnboarding);
    btnSuccessLogin.addEventListener('click', () => {
        activeRole = "patient";
        authTabs.forEach(t => {
            if(t.getAttribute('data-role') === 'patient') t.classList.add('active');
            else t.classList.remove('active');
        });
        updateSignInRoleUI();
        loginEmail.value = (PATIENTS_DB[activePatientId].name.toLowerCase().replace(/\s+/g, '') + "@vitalsflow.com");
        switchView('signin');
    });

    // Consult call simulation
    if (btnToggleConsult) {
        btnToggleConsult.addEventListener('click', toggleClinicalCall);
    }

    // Onboarding checklist bind
    window.toggleDashboardCheck = function(itemId) {
        onboardingChecklistState[itemId] = !onboardingChecklistState[itemId];
        const el = document.getElementById(`check-item-${itemId}`);
        if (el) {
            if (onboardingChecklistState[itemId]) el.classList.add('checked');
            else el.classList.remove('checked');
        }
    };

    // Close Modal
    if (btnCloseReportModal) {
        btnCloseReportModal.addEventListener('click', () => {
            reportModal.classList.remove('active');
        });
    }

    // Zip input restriction
    if (regZipInput) {
        regZipInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }

    // 4. Staff Board actions
    btnStaffBackToList.addEventListener('click', () => {
        staffVisitWorkspace.style.display = 'none';
        staffPatientListContainer.style.display = 'block';
        renderStaffQueueTable();
    });
    btnStaffSubmitReport.addEventListener('click', handleStaffReportSubmission);

    // 5. Doctor Board actions
    btnDoctorBackToList.addEventListener('click', () => {
        doctorWorkspaceContainer.style.display = 'none';
        doctorPatientListContainer.style.display = 'block';
        renderDoctorRegistryTable();
    });
    
    docFilterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            docFilterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            activeDocFilter = e.target.getAttribute('data-filter');
            renderDoctorRegistryTable();
        });
    });

    docReportSelect.addEventListener('change', updateDoctorMetricFields);
    docTemplateSelect.addEventListener('change', applyDiagnosisTemplate);
    btnDocPublish.addEventListener('click', handleDoctorPublish);

    // Sync three app step navigation hook
    window.syncHTMLToStep = function(stepIdx) {
        if (stepIdx >= 0 && stepIdx < 5) {
            currentOnboardingStep = stepIdx;
            updateOnboardingUI();
        }
    };

    updateOnboardingUI();
});

// ----------------------------------------------------
// VIEW ROUTER
// ----------------------------------------------------
function switchView(viewName) {
    allViews.forEach(v => v.classList.remove('active'));
    btnNavOnboarding.classList.remove('active');
    btnNavSignIn.classList.remove('active');
    btnNavPatientDashboard.classList.remove('active');
    btnNavStaffBoard.classList.remove('active');
    btnNavDoctorBoard.classList.remove('active');

    if (viewName === 'onboarding') {
        viewOnboarding.classList.add('active');
        btnNavOnboarding.classList.add('active');
        if (window.transitionToStep) {
            window.transitionToStep(Math.min(currentOnboardingStep, 4));
        }
    } 
    else if (viewName === 'signin') {
        viewSignIn.classList.add('active');
        btnNavSignIn.classList.add('active');
        if (window.transitionToStep) {
            window.transitionToStep(5);
        }
    } 
    else if (viewName === 'patient-dashboard') {
        if (authStates.patient) {
            viewDashboard.classList.add('active');
            btnNavPatientDashboard.classList.add('active');
            populatePatientDashboardUI();
            if (window.transitionToStep) {
                window.transitionToStep(6);
            }
        }
    } 
    else if (viewName === 'staff-board') {
        if (authStates.staff) {
            viewStaff.classList.add('active');
            btnNavStaffBoard.classList.add('active');
            // Reset to lists subview
            staffVisitWorkspace.style.display = 'none';
            staffPatientListContainer.style.display = 'block';
            renderStaffQueueTable();
            if (window.transitionToStep) {
                window.transitionToStep(7);
            }
        }
    } 
    else if (viewName === 'doctor-board') {
        if (authStates.doctor) {
            viewDoctor.classList.add('active');
            btnNavDoctorBoard.classList.add('active');
            // Reset to lists subview
            doctorWorkspaceContainer.style.display = 'none';
            doctorPatientListContainer.style.display = 'block';
            renderDoctorRegistryTable();
            if (window.transitionToStep) {
                window.transitionToStep(8);
            }
        }
    }
}

// ----------------------------------------------------
// SIGN IN ROLE MANIPULATOR
// ----------------------------------------------------
function updateSignInRoleUI() {
    signinForm.reset();
    if (activeRole === 'patient') {
        loginEmailLabel.textContent = "Patient Email Address";
        loginEmail.placeholder = "e.g. eleanor@vance.com";
        signinDesc.textContent = "Enter your medical ID credentials below to view clinical metrics, schedule visits, and access lab reports.";
    } 
    else if (activeRole === 'staff') {
        loginEmailLabel.textContent = "Field Staff Clinical ID";
        loginEmail.placeholder = "e.g. staff@vitalsflow.com";
        signinDesc.textContent = "Sign in to your practitioner workspace to upload patient vitals and log diagnostic sample transit status.";
    } 
    else if (activeRole === 'doctor') {
        loginEmailLabel.textContent = "Physician Security Email";
        loginEmail.placeholder = "e.g. doctor@vitalsflow.com";
        signinDesc.textContent = "Authenticate credentials to review field files, record clinical diagnoses, and authorize laboratory reports.";
    }
}

function handleSignIn(e) {
    e.preventDefault();
    const email = loginEmail.value.trim().toLowerCase();
    
    btnAuthSubmit.disabled = true;
    btnAuthSubmit.textContent = "Authenticating secure keys...";

    setTimeout(() => {
        btnAuthSubmit.disabled = false;
        btnAuthSubmit.textContent = "Access Granted";

        if (activeRole === 'patient') {
            authStates.patient = true;
            btnNavPatientDashboard.removeAttribute('disabled');
            btnNavPatientDashboard.classList.remove('locked');
            
            // Map email prefix to match db entry
            const prefix = email.split('@')[0];
            if (PATIENTS_DB[prefix]) {
                activePatientId = prefix;
            } else {
                // If it is a new custom patient onboarded
                let found = Object.keys(PATIENTS_DB).find(k => PATIENTS_DB[k].name.toLowerCase().replace(/\s+/g, '') === prefix);
                if (found) activePatientId = found;
                else activePatientId = "eleanor"; // Fallback
            }
            switchView('patient-dashboard');
        } 
        else if (activeRole === 'staff') {
            authStates.staff = true;
            btnNavStaffBoard.removeAttribute('disabled');
            btnNavStaffBoard.classList.remove('locked');
            switchView('staff-board');
        } 
        else if (activeRole === 'doctor') {
            authStates.doctor = true;
            btnNavDoctorBoard.removeAttribute('disabled');
            btnNavDoctorBoard.classList.remove('locked');
            switchView('doctor-board');
        }
    }, 1000);
}

function handleLogout(role) {
    authStates[role] = false;
    if (role === 'patient') {
        btnNavPatientDashboard.setAttribute('disabled', 'true');
        btnNavPatientDashboard.classList.add('locked');
    } else if (role === 'staff') {
        btnNavStaffBoard.setAttribute('disabled', 'true');
        btnNavStaffBoard.classList.add('locked');
    } else if (role === 'doctor') {
        btnNavDoctorBoard.setAttribute('disabled', 'true');
        btnNavDoctorBoard.classList.add('locked');
    }
    switchView('signin');
}

// ----------------------------------------------------
// ONBOARDING HANDLERS
// ----------------------------------------------------
function updateOnboardingUI() {
    onboardingSteps.forEach((step, idx) => {
        if (idx === currentOnboardingStep) step.classList.add('active');
        else step.classList.remove('active');
    });

    stepperNodes.forEach((node, idx) => {
        if (idx < currentOnboardingStep) {
            node.classList.add('completed');
            node.classList.remove('active');
            node.innerHTML = '&#10003;';
        } else if (idx === currentOnboardingStep) {
            node.classList.add('active');
            node.classList.remove('completed');
            node.innerHTML = (idx + 1).toString().padStart(2, '0');
        } else {
            node.classList.remove('active', 'completed');
            node.innerHTML = (idx + 1).toString().padStart(2, '0');
        }
    });

    const progressPct = currentOnboardingStep === 5 ? 100 : (currentOnboardingStep / 4) * 100;
    onboardingProgress.style.width = `${progressPct}%`;

    if (currentOnboardingStep === 0) {
        btnStepPrev.disabled = true;
        btnStepNext.textContent = "Next Step";
    } else if (currentOnboardingStep === 4) {
        btnStepPrev.disabled = false;
        btnStepNext.textContent = "Submit Onboarding";
    } else if (currentOnboardingStep === 5) {
        document.getElementById('onboarding-footer').style.display = 'none';
        
        const regName = regNameInput.value.trim() || "Eleanor Vance";
        const regZip = regZipInput.value.trim() || "10001";
        const customKey = regName.toLowerCase().replace(/\s+/g, '');
        
        // Dynamically insert user in PATIENTS_DB
        PATIENTS_DB[customKey] = {
            id: customKey,
            name: regName,
            zip: regZip,
            vitals: {
                bp: "120/80",
                hr: "72",
                spo2: "98",
                temp: "98.6",
                status: "Normal",
                timestamp: "Onboarded verification check."
            },
            diagnosis: {
                status: "Optimal / Normal",
                notes: "Onboard registration complete. Vitals optimal.",
                prescriptions: "No active prescriptions."
            },
            reports: JSON.parse(JSON.stringify(PATIENTS_DB.eleanor.reports)) // clone template reports
        };
        
        activePatientId = customKey;

        successMessageText.innerHTML = `
            Authentication ID profile for <strong>${regName}</strong> has been successfully authorized. 
            VitalsFlow home visits have been cleared for ZIP area code <strong>${regZip}</strong>. You may now access your patient portal.
        `;
    } else {
        btnStepPrev.disabled = false;
        btnStepNext.textContent = "Next Step";
    }

    if (window.transitionToStep) {
        window.transitionToStep(Math.min(currentOnboardingStep, 4));
    }
}

function advanceOnboarding() {
    if (validateOnboardingStep(currentOnboardingStep)) {
        if (currentOnboardingStep < 5) {
            currentOnboardingStep++;
            updateOnboardingUI();
        }
    }
}

function regressOnboarding() {
    if (currentOnboardingStep > 0) {
        currentOnboardingStep--;
        updateOnboardingUI();
    }
}

function validateOnboardingStep(stepIdx) {
    if (stepIdx === 0) {
        const nameVal = regNameInput.value.trim();
        const zipVal = regZipInput.value.trim();
        if (!nameVal) {
            alert("Practitioner entry: Patient Full Name field cannot remain blank.");
            regNameInput.focus();
            return false;
        }
        if (!zipVal || zipVal.length < 5) {
            alert("Practitioner entry: Enter a valid 5-digit ZIP code to confirm dispatch coverage.");
            regZipInput.focus();
            return false;
        }
    }
    return true;
}

// ----------------------------------------------------
// CLINICAL VIDEO CALL SIMULATION
// ----------------------------------------------------
function toggleClinicalCall() {
    if (!isCallConnected) {
        isCallConnected = true;
        btnToggleConsult.classList.add('active');
        btnToggleConsult.querySelector('span').textContent = "Disconnect Call";
        waveRings.forEach(ring => ring.classList.add('active'));
        
        callDurationSeconds = 0;
        consultTimer.textContent = "Dialing physician...";

        setTimeout(() => {
            if (isCallConnected) {
                consultTimer.textContent = "00:00 - Live feed active";
                callTimeInterval = setInterval(() => {
                    callDurationSeconds++;
                    const min = Math.floor(callDurationSeconds / 60).toString().padStart(2, '0');
                    const sec = (callDurationSeconds % 60).toString().padStart(2, '0');
                    consultTimer.textContent = `${min}:${sec} - Live feed active`;
                }, 1000);
            }
        }, 1500);
    } else {
        isCallConnected = false;
        btnToggleConsult.classList.remove('active');
        btnToggleConsult.querySelector('span').textContent = "Establish Video Link";
        waveRings.forEach(ring => ring.classList.remove('active'));
        
        clearInterval(callTimeInterval);
        consultTimer.textContent = "Disconnected";
    }
}

// ----------------------------------------------------
// PATIENT PORTAL UI POPULATION
// ----------------------------------------------------
function populatePatientDashboardUI() {
    const patient = PATIENTS_DB[activePatientId] || PATIENTS_DB.eleanor;
    
    dashboardWelcomeName.innerHTML = `Patient ID: ${patient.name}`;
    
    dashBP.innerHTML = `${patient.vitals.bp} <span class="vital-unit">mmHg</span>`;
    dashBPStatus.textContent = patient.vitals.status;
    dashBPStatus.className = `vital-status ${patient.vitals.status.toLowerCase() === 'normal' ? 'optimal' : 'warning'}`;
    
    dashHR.innerHTML = `${patient.vitals.hr} <span class="vital-unit">bpm</span>`;
    dashHRStatus.textContent = parseInt(patient.vitals.hr) > 100 ? 'Elevated' : 'Normal';
    dashHRStatus.className = `vital-status ${parseInt(patient.vitals.hr) > 100 ? 'warning' : 'optimal'}`;

    dashSpO2.innerHTML = `${patient.vitals.spo2} <span class="vital-unit">%</span>`;
    dashSpO2Status.textContent = parseInt(patient.vitals.spo2) < 95 ? 'Low Oxygen' : 'Excellent';
    dashSpO2Status.className = `vital-status ${parseInt(patient.vitals.spo2) < 95 ? 'warning' : 'optimal'}`;

    dashPatientStatus.textContent = patient.diagnosis.status;
    
    let statusClass = "normal";
    if (patient.diagnosis.status === 'Under Observation') statusClass = "warning";
    else if (patient.diagnosis.status === 'Active Treatment Required') statusClass = "danger";
    
    dashPatientStatus.className = `assess-val-badge ${statusClass}`;
    dashDiagnosisText.textContent = patient.diagnosis.notes;
    dashPrescriptionsText.textContent = patient.diagnosis.prescriptions;

    // Reports list
    reportsListBody.innerHTML = '';
    Object.keys(patient.reports).forEach(key => {
        const report = patient.reports[key];
        const tr = document.createElement('tr');
        tr.className = "report-row-clickable";
        tr.setAttribute('data-report', key);
        
        let statusBadge = `<span class="report-status-badge normal">Released</span>`;
        if (report.status === 'Review Needed') {
            statusBadge = `<span class="report-status-badge warning">Review Needed</span>`;
        } else if (report.status === 'Pending') {
            statusBadge = `<span class="report-status-badge pending">Pending Upload</span>`;
        }

        tr.innerHTML = `
            <td><strong>${report.title}</strong></td>
            <td>${report.date}</td>
            <td>${statusBadge}</td>
        `;
        
        tr.addEventListener('click', () => {
            if (report.status !== 'Pending') {
                openReportMetricsModal(key);
            } else {
                alert("Diagnostic report is pending physician input and laboratory release.");
            }
        });
        
        reportsListBody.appendChild(tr);
    });
}

// ----------------------------------------------------
// STAFF PORTAL CONTROLLER
// ----------------------------------------------------
function renderStaffQueueTable() {
    staffQueueBody.innerHTML = '';
    
    Object.keys(PATIENTS_DB).forEach(key => {
        const patient = PATIENTS_DB[key];
        const tr = document.createElement('tr');
        
        // Simulating different statuses
        let statusBadge = `<span class="report-status-badge pending">Scheduled Today</span>`;
        if (patient.vitals.timestamp !== "Initial profile registry." && patient.vitals.timestamp !== "Routine physical scan.") {
            statusBadge = `<span class="report-status-badge normal">Vitals Recorded</span>`;
        }

        tr.innerHTML = `
            <td><strong>${patient.name}</strong></td>
            <td>ZIP ${patient.zip}</td>
            <td>${statusBadge}</td>
            <td>
                <button class="btn btn-secondary" onclick="openStaffVisitWorkspace('${key}')" style="padding:0.45rem 0.85rem; font-size:0.75rem;">
                    Record Visit
                </button>
            </td>
        `;
        staffQueueBody.appendChild(tr);
    });
}

window.openStaffVisitWorkspace = function(patientId) {
    activePatientId = patientId;
    const patient = PATIENTS_DB[patientId];
    
    staffPatientListContainer.style.display = 'none';
    staffVisitWorkspace.style.display = 'block';
    
    // Header labels
    staffPatientNameLabel.textContent = patient.name;
    staffPatientZipLabel.textContent = `Assigned Coverage: ZIP ${patient.zip}`;
    
    // Pre-fill inputs
    const bpParts = patient.vitals.bp.split('/');
    staffBPValSys.value = bpParts[0] || "";
    staffBPValDia.value = bpParts[1] || "";
    staffHRVal.value = patient.vitals.hr || "";
    staffSpO2Val.value = patient.vitals.spo2 || "";
    staffTempVal.value = patient.vitals.temp || "";

    // Reset checklist HTML tags
    Object.keys(staffChecklistState).forEach(key => {
        staffChecklistState[key] = false;
        const el = document.getElementById(`staff-chk-${key}`);
        if(el) el.classList.remove('checked');
    });
};

window.toggleStaffDrawCheck = function(testKey) {
    staffChecklistState[testKey] = !staffChecklistState[testKey];
    const el = document.getElementById(`staff-chk-${testKey}`);
    if (el) {
        if (staffChecklistState[testKey]) el.classList.add('checked');
        else el.classList.remove('checked');
    }
};

function handleStaffReportSubmission() {
    const sys = parseInt(staffBPValSys.value);
    const dia = parseInt(staffBPValDia.value);
    const hr = parseInt(staffHRVal.value);
    const spo2 = parseInt(staffSpO2Val.value);
    const temp = parseFloat(staffTempVal.value);

    if (!sys || !dia || !hr || !spo2 || !temp) {
        alert("Clinical validation error: Please enter all patient vital readings before submitting.");
        return;
    }

    const patient = PATIENTS_DB[activePatientId];

    // Save vitals
    patient.vitals.bp = `${sys}/${dia}`;
    patient.vitals.hr = hr.toString();
    patient.vitals.spo2 = spo2.toString();
    patient.vitals.temp = temp.toString();
    
    if (sys > 135 || dia > 88 || hr > 100 || spo2 < 95 || temp > 100.4) {
        patient.vitals.status = "Warning";
    } else {
        patient.vitals.status = "Normal";
    }
    
    patient.vitals.timestamp = `Recorded by field nurse Jenkins on June 29, 2026.`;

    // Flag target reports as pending upload by lab
    Object.keys(staffChecklistState).forEach(key => {
        if (staffChecklistState[key]) {
            patient.reports[key].status = "Pending";
            patient.reports[key].statusClass = "pending";
            patient.reports[key].date = "In Lab Analysis";
        }
    });

    alert(`Field visit report for ${patient.name} submitted successfully. Vitals file saved.`);
    
    // Return to list view
    staffVisitWorkspace.style.display = 'none';
    staffPatientListContainer.style.display = 'block';
    renderStaffQueueTable();
}

// ----------------------------------------------------
// PHYSICIAN BOARD CONTROLLER
// ----------------------------------------------------
function renderDoctorRegistryTable() {
    docPatientRegistryBody.innerHTML = '';
    
    Object.keys(PATIENTS_DB).forEach(key => {
        const patient = PATIENTS_DB[key];
        
        // Filter logic
        if (activeDocFilter !== 'all' && patient.diagnosis.status !== activeDocFilter) {
            return;
        }

        let statusClass = "normal";
        if (patient.diagnosis.status === 'Under Observation') statusClass = "warning";
        else if (patient.diagnosis.status === 'Active Treatment Required') statusClass = "danger";

        const tempFloat = parseFloat(patient.vitals.temp);
        const tempText = tempFloat > 100.4 ? `<span style="color:#ef4444; font-weight:600;">${patient.vitals.temp}°F (Fever)</span>` : `${patient.vitals.temp}°F`;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${patient.name}</strong></td>
            <td>ZIP ${patient.zip}</td>
            <td>BP: ${patient.vitals.bp} | HR: ${patient.vitals.hr} | Temp: ${tempText}</td>
            <td><span class="assess-val-badge ${statusClass}">${patient.diagnosis.status}</span></td>
            <td>
                <button class="btn btn-primary" onclick="openDoctorWorkspace('${key}')" style="padding:0.45rem 0.85rem; font-size:0.75rem;">
                    Review File
                </button>
            </td>
        `;
        docPatientRegistryBody.appendChild(tr);
    });
}

window.openDoctorWorkspace = function(patientId) {
    activePatientId = patientId;
    const patient = PATIENTS_DB[patientId];

    doctorPatientListContainer.style.display = 'none';
    doctorWorkspaceContainer.style.display = 'block';

    docActivePatientHeader.textContent = `Patient File Review: ${patient.name}`;
    docViewBP.textContent = patient.vitals.bp;
    docViewHR.textContent = `${patient.vitals.hr} bpm`;
    docViewTemp.textContent = `${patient.vitals.temp}°F`;
    
    // Highlight fever
    if (parseFloat(patient.vitals.temp) > 100.4) {
        docViewTemp.style.color = '#ef4444';
        docViewTemp.style.fontWeight = '600';
    } else {
        docViewTemp.style.color = 'white';
        docViewTemp.style.fontWeight = 'normal';
    }

    docVitalsTimestamp.textContent = `Vitals timestamp: ${patient.vitals.timestamp} Status: ${patient.vitals.status}`;

    // Load diagnosis fields
    docDiagnosisInput.value = patient.diagnosis.notes.startsWith("No diagnoses") ? "" : patient.diagnosis.notes;
    docPrescriptionsInput.value = patient.diagnosis.prescriptions.startsWith("No active") ? "" : patient.diagnosis.prescriptions;
    docPatientStatusSelect.value = patient.diagnosis.status;
    docTemplateSelect.value = "none";

    updateDoctorMetricFields();
};

function updateDoctorMetricFields() {
    const reportKey = docReportSelect.value;
    const patient = PATIENTS_DB[activePatientId];
    docMetricInputsArea.innerHTML = '';

    if (reportKey === 'cbc') {
        docMetricInputsArea.innerHTML = `
            <div class="form-row">
                <div class="form-field">
                    <label for="doc-input-wbc">WBC (k/uL) [Range: 4.5 - 11.0]</label>
                    <input type="number" step="0.1" id="doc-input-wbc" value="${patient.reports.cbc.metrics[0].val}">
                </div>
                <div class="form-field">
                    <label for="doc-input-rbc">RBC (M/uL) [Range: 4.30 - 5.90]</label>
                    <input type="number" step="0.01" id="doc-input-rbc" value="${patient.reports.cbc.metrics[1].val}">
                </div>
            </div>
            <div class="form-row">
                <div class="form-field">
                    <label for="doc-input-hgb">Hemoglobin (g/dL) [Range: 13.5 - 17.5]</label>
                    <input type="number" step="0.1" id="doc-input-hgb" value="${patient.reports.cbc.metrics[2].val}">
                </div>
                <div class="form-field">
                    <label for="doc-input-plt">Platelets (k/uL) [Range: 150 - 450]</label>
                    <input type="number" id="doc-input-plt" value="${patient.reports.cbc.metrics[3].val}">
                </div>
            </div>
        `;
    } 
    else if (reportKey === 'thyroid') {
        docMetricInputsArea.innerHTML = `
            <div class="form-row">
                <div class="form-field">
                    <label for="doc-input-tsh">TSH (uIU/mL) [Range: 0.40 - 4.50]</label>
                    <input type="number" step="0.01" id="doc-input-tsh" value="${patient.reports.thyroid.metrics[0].val}">
                </div>
                <div class="form-field">
                    <label for="doc-input-t4">Free T4 (ng/dL) [Range: 0.8 - 1.8]</label>
                    <input type="number" step="0.1" id="doc-input-t4" value="${patient.reports.thyroid.metrics[1].val}">
                </div>
            </div>
        `;
    } 
    else if (reportKey === 'lipid') {
        docMetricInputsArea.innerHTML = `
            <div class="form-row">
                <div class="form-field">
                    <label for="doc-input-chol">Total Cholesterol (mg/dL) [Range: < 200]</label>
                    <input type="number" id="doc-input-chol" value="${patient.reports.lipid.metrics[0].val}">
                </div>
                <div class="form-field">
                    <label for="doc-input-trig">Triglycerides (mg/dL) [Range: < 150]</label>
                    <input type="number" id="doc-input-trig" value="${patient.reports.lipid.metrics[1].val}">
                </div>
            </div>
            <div class="form-row">
                <div class="form-field">
                    <label for="doc-input-hdl">HDL Cholesterol (mg/dL) [Range: > 40]</label>
                    <input type="number" id="doc-input-hdl" value="${patient.reports.lipid.metrics[2].val}">
                </div>
                <div class="form-field">
                    <label for="doc-input-ldl">LDL Cholesterol (mg/dL) [Range: < 100]</label>
                    <input type="number" id="doc-input-ldl" value="${patient.reports.lipid.metrics[3].val}">
                </div>
            </div>
        `;
    }
}

// ----------------------------------------------------
// DIAGNOSIS CLINICAL TEMPLATE ENGINE
// ----------------------------------------------------
function applyDiagnosisTemplate() {
    const templateKey = docTemplateSelect.value;
    if (templateKey === 'none') return;

    const patient = PATIENTS_DB[activePatientId];
    const temp = patient.vitals.temp;
    const bp = patient.vitals.bp;
    const hr = patient.vitals.hr;

    if (templateKey === 'fever') {
        docDiagnosisInput.value = `Patient presents with pyrexia (recorded temp: ${temp}°F) and resting heart rate of ${hr} bpm, suggesting active physiological defense. Swab samples collected for viral panels. Recommend monitoring for signs of dehydration.`;
        docPrescriptionsInput.value = "Paracetamol 650mg QDS PRN for fever. Hydration fluid therapy. Amoxicillin 500mg TDS for 5 days (pending bacterial confirmation).";
        docPatientStatusSelect.value = "Under Observation";
    } 
    else if (templateKey === 'hypertension') {
        docDiagnosisInput.value = `Patient exhibits stage 2 hypertensive readings (recorded BP: ${bp} mmHg) with resting pulse at ${hr} bpm. Initial cardiovascular diagnostics suggest arterial stiffness. Lifestyle counseling initiated.`;
        docPrescriptionsInput.value = "Lisinopril 10mg OD (morning), Amlodipine 5mg OD (evening). Low-sodium diet restriction.";
        docPatientStatusSelect.value = "Active Treatment Required";
    } 
    else if (templateKey === 'cholesterol') {
        const totalChol = patient.reports.lipid.metrics[0].val;
        const ldl = patient.reports.lipid.metrics[3].val;
        docDiagnosisInput.value = `Laboratory lipid review indicates high cholesterol profile (Total: ${totalChol} mg/dL, LDL: ${ldl} mg/dL). Cardiovascular risks evaluated. Recommend dietary fatty-acid restrictions.`;
        docPrescriptionsInput.value = "Atorvastatin 20mg OD at night. Omega-3 capsules 1000mg OD.";
        docPatientStatusSelect.value = "Active Treatment Required";
    }
}

function handleDoctorPublish() {
    const diagVal = docDiagnosisInput.value.trim();
    const statusVal = docPatientStatusSelect.value;
    const rxVal = docPrescriptionsInput.value.trim();
    const reportKey = docReportSelect.value;

    const patient = PATIENTS_DB[activePatientId];

    // Save general diagnosis fields
    patient.diagnosis.notes = diagVal || "Patient file reviewed. Clinical status normal.";
    patient.diagnosis.status = statusVal;
    patient.diagnosis.prescriptions = rxVal || "No active medications prescribed.";

    // Save metrics
    let anyFlags = false;
    if (reportKey === 'cbc') {
        const wbc = parseFloat(document.getElementById('doc-input-wbc').value);
        const rbc = parseFloat(document.getElementById('doc-input-rbc').value);
        const hgb = parseFloat(document.getElementById('doc-input-hgb').value);
        const plt = parseInt(document.getElementById('doc-input-plt').value);

        const metrics = patient.reports.cbc.metrics;
        metrics[0].val = wbc.toString();
        metrics[0].flag = wbc > 11.0 ? "H" : (wbc < 4.5 ? "L" : "");
        metrics[0].pct = Math.min(Math.max((wbc / 15) * 100, 10), 100);

        metrics[1].val = rbc.toString();
        metrics[1].flag = rbc > 5.9 ? "H" : (rbc < 4.3 ? "L" : "");
        metrics[1].pct = Math.min(Math.max((rbc / 8) * 100, 10), 100);

        metrics[2].val = hgb.toString();
        metrics[2].flag = hgb > 17.5 ? "H" : (hgb < 13.5 ? "L" : "");
        metrics[2].pct = Math.min(Math.max((hgb / 22) * 100, 10), 100);

        metrics[3].val = plt.toString();
        metrics[3].flag = plt > 450 ? "H" : (plt < 150 ? "L" : "");
        metrics[3].pct = Math.min(Math.max((plt / 600) * 100, 10), 100);

        anyFlags = metrics.some(m => m.flag !== "");
    } 
    else if (reportKey === 'thyroid') {
        const tsh = parseFloat(document.getElementById('doc-input-tsh').value);
        const t4 = parseFloat(document.getElementById('doc-input-t4').value);

        const metrics = patient.reports.thyroid.metrics;
        metrics[0].val = tsh.toString();
        metrics[0].flag = tsh > 4.5 ? "H" : (tsh < 0.4 ? "L" : "");
        metrics[0].pct = Math.min(Math.max((tsh / 6) * 100, 10), 100);

        metrics[1].val = t4.toString();
        metrics[1].flag = t4 > 1.8 ? "H" : (t4 < 0.8 ? "L" : "");
        metrics[1].pct = Math.min(Math.max((t4 / 2.5) * 100, 10), 100);

        anyFlags = metrics.some(m => m.flag !== "");
    } 
    else if (reportKey === 'lipid') {
        const chol = parseInt(document.getElementById('doc-input-chol').value);
        const trig = parseInt(document.getElementById('doc-input-trig').value);
        const hdl = parseInt(document.getElementById('doc-input-hdl').value);
        const ldl = parseInt(document.getElementById('doc-input-ldl').value);

        const metrics = patient.reports.lipid.metrics;
        metrics[0].val = chol.toString();
        metrics[0].flag = chol >= 200 ? "H" : "";
        metrics[0].pct = Math.min(Math.max((chol / 300) * 100, 10), 100);

        metrics[1].val = trig.toString();
        metrics[1].flag = trig >= 150 ? "H" : "";
        metrics[1].pct = Math.min(Math.max((trig / 250) * 100, 10), 100);

        metrics[2].val = hdl.toString();
        metrics[2].flag = hdl < 40 ? "L" : "";
        metrics[2].pct = Math.min(Math.max((hdl / 80) * 100, 10), 100);

        metrics[3].val = ldl.toString();
        metrics[3].flag = ldl >= 100 ? "H" : "";
        metrics[3].pct = Math.min(Math.max((ldl / 200) * 100, 10), 100);

        anyFlags = metrics.some(m => m.flag !== "");
    }

    const report = patient.reports[reportKey];
    report.status = anyFlags ? "Review Needed" : "Normal";
    report.statusClass = anyFlags ? "warning" : "normal";
    report.date = "June 29, 2026";
    report.released = true;

    alert(`Diagnosis note & compiled ${report.title} published to ${patient.name}'s file.`);
    
    // Return to list view
    doctorWorkspaceContainer.style.display = 'none';
    doctorPatientListContainer.style.display = 'block';
    renderDoctorRegistryTable();
}
