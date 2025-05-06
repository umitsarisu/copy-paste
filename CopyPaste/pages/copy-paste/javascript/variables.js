// Main.js Variables
let mechanismBool = true;
let otherPartsBool = true;
let password_text = "";
let previousForms = [];
const defaultTestFail = {
    vi_test: {
        fail: false,
        sxc: false
    },
    ca_test: {
        fail: false,
        sxc: false
    },
    po_test: {
        fail: false,
        sxc: false
    }
}
let ResultObj = null;
let PrintObj = null;
let RvgObj = null;
let TestFail = null;
const defaultResultObj = {
    customer_experience: "",
    changed_parts: [],
    replaced: [],
    calibrated: "",
}
const defaultPrintObj = {
    primary: "13850921",
    secondary: "112044W",
    repair_codes: [],
    error_history_logs: "",
    device_situation: "",
    run_in_test_result: "N/A",
    findings: [],
    changed_parts: [],
    analysis_codes: [],
    investigation_codes: [],
    is_approved: false,
    first_sentence: "",
    comment: [],
    more_comment: [],
    probable_causes: [],
    error_codes: [],
    repairedMechanism: false,
    unusualSituation: true,
    visual_probable_causes: [],
    cassette_alarm_probable_causes: [],
    proximal_probable_causes: [],
    notRequired_probable_causes: [],
    rv6psi: 0,
    rv10psi: 0,
    rv1: 0,
    rv2: 0,
    rv3: 0,
    rv4: 0,
    rv5: 0
}
PrintObj = JSON.parse(JSON.stringify(defaultPrintObj))
const defaultErrorCodesObj = {
    cassette_alarm_test_error_codes: [],
    proximal_occlusion_test_error_code: ""
}
