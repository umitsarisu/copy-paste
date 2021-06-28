// Main.js Variables
var selfTestMechanism = document.getElementById("selfTestMechanism");
var sonuc = document.getElementById("sonuc");
var visualBool = true;
var powerBool = true;
var cpuBool = true;
var selfMechanismBool = true;
var proximalBool = true;
var distalBool = true;

// Findings Variables
var visualInspectionFail = document.getElementById("visualInspectionFail");
var selfTestFail = document.getElementById("selfTestFail");
var proximalOccFail = document.getElementById("proximalOccFail");
var distalOccFail = document.getElementById("distalOccFail");
var dropdownMenu = document.getElementById("dropdownMenu");
var liVI = document.getElementById("liVI");
var liST = document.getElementById("liST");
var liPO = document.getElementById("liPO");
var liDO = document.getElementById("liDO");

// Visual İnspection Variables
var visualInspection = document.getElementById("visualInspection");
var show122 = document.getElementById("show122");
var spareParts122 = document.getElementById("spareParts122");
var show141 = document.getElementById("show141");
var spareParts141 = document.getElementById("spareParts141");
var showVisual = document.getElementById("showVisual");
var sparePartsVisual = document.getElementById("sparePartsVisual");
var show122Dizisi = [];
var show141Dizisi = [];
var showVisualDizisi = [];
var damaged = [];
var yorumVisual = "";

//Self Test Variables
var selfTest = document.getElementById("selfTest");
var battery = document.getElementById("battery");
var sDBattery = document.getElementById("sDBattery");
var n252 = document.getElementById("n252");
var n250 = document.getElementById("n250");
var n251 = document.getElementById("n251");
var e439 = document.getElementById("e439");
var e302 = document.getElementById("e302");
var n251Shield = document.getElementById("n251Shield");
var n251Asmdoor = document.getElementById("n251Asmdoor");
var n250Shield = document.getElementById("n250Shield");
var n250Asmdoor = document.getElementById("n250Asmdoor");
var commentSelfTest = [];
var selfTestprobableCauseArray = [];
var duringSelfTestSentence = "";
//Power
var power = document.getElementById("power");
var powerForm = document.getElementById("powerForm");
var powerErrorCode = document.getElementById("powerErrorCode");
var powerSN = document.getElementById("powerSN");
var powerSerialNumber = "";
var powerExperience = "";
//Cpu
var cpu = document.getElementById("cpu");
var cpuDisplay = document.getElementById("cpuDisplay");
var cpuErrorCode = document.getElementById("cpuErrorCode");
var cpuSN = document.getElementById("cpuSN");
var cpuSerialNumber = "";
var cpuExperience = "";
var selfTestAppErrorCode = "";
//Mechanism
var ifSelfTestMechanismChecked = document.getElementById("ifSelfTestMechanismChecked");
var ifSelfTestAppChecked = document.getElementById("ifSelfTestAppChecked");
var selfTestMechanism = document.getElementById("selfTestMechanism");
var selfTestMechanismDisplay = document.getElementById("selfTestMechanismDisplay");
var selfTestMechanismSN = document.getElementById("selfTestMechanismSN");
var selfTestMechanismErrorCode = document.getElementById("selfTestMechanismErrorCode");
var selfTestPressureReplaced = document.getElementById("selfTestPressureReplaced");
var selfTestPressureCalibrated = document.getElementById("selfTestPressureCalibrated");
var selfTestMechanismReplaced = document.getElementById("selfTestMechanismReplaced");
var selfTestDRPCalibrated = document.getElementById("selfTestDRPCalibrated");
var selfTestDRPReplaced = document.getElementById("selfTestDRPReplaced");
var selfTestLSMReplaced = document.getElementById("selfTestLSMReplaced");
var selfTestIOMReplaced = document.getElementById("selfTestIOMReplaced");
var selfTestPLMReplaced = document.getElementById("selfTestPLMReplaced");
var selfTestSWPReplaced = document.getElementById("selfTestSWPReplaced");
var selfTestMechanismSerialNumber = "";
var selfTestAppReplaced = document.getElementById("selfTestAppReplaced");
var selfTestAppSN = document.getElementById("selfTestAppSN");
var selfTestAppSerialNumber = document.getElementById("selfTestAppSerialNumber");

//Proximal Occlusion Test Variables
var proximalOcclusion = document.getElementById("proximalOcclusion");
//Mechanism
var proximalTestSentToIzmir = document.getElementById("proximalTestSentToIzmir");
var proximalTestMechanismReplaced = document.getElementById("proximalTestMechanismReplaced");
var proximalTestErrorCode = document.getElementById("proximalTestErrorCode");
var proximalMechanismSN = document.getElementById("proximalMechanismSN");
var ifProxTestMechanismChecked = document.getElementById("ifProxTestMechanismChecked");
//App
var ifProxTestAppChecked = document.getElementById("ifProxTestAppChecked");
var proximalTestAppReplaced = document.getElementById("proximalTestAppReplaced");
var proximalTestAppCalibrated = document.getElementById("proximalTestAppCalibrated");
var proximalAppSN = document.getElementById("proximalAppSN");
var commentProximal = "";

//Distal Occlusion Test Variables
var distalTestSentToIzmir = document.getElementById("distalTestSentToIzmir");
var distalOccTestDisplay = document.getElementById("distalOccTestDisplay");
var distalTestMechanismReplaced = document.getElementById("distalTestMechanismReplaced");
var distalMechanismSN = document.getElementById("distalMechanismSN");
var distalMechanismSNDisplay = document.getElementById("distalMechanismSNDisplay");
var distalTestPressureReplaced = document.getElementById("distalTestPressureReplaced");
var distalTestPressureCalibrated = document.getElementById("distalTestPressureCalibrated");
var commentDistal = "";

/*Sonuç Sayfası*/
var descriptions = document.getElementById("descriptions");
var tamirKodu = document.getElementById("tamirKodu");
var errorHistoryLogs = document.getElementById("errorHistoryLogs");
var cihazinDurumu = document.getElementById("cihazinDurumu");
var runInTestResult = document.getElementById("runInTestResult");
var bulgular = document.getElementById("bulgular");
var degisenParca = document.getElementById("degisenParca");
var analizKodu = document.getElementById("analizKodu");
var arastirmaKodu = document.getElementById("arastirmaKodu");
var yorum = document.getElementById("yorum");
var ekYorum = document.getElementById("ekYorum");
var probableCause = document.getElementById("probableCause");


var experience = "";
var firstSentence = "";
var findingsArray = [];
var descriptionsDizisi = [];
var probableCauseArray = [];
var changedPartsArray = [];
var ekYorumDizisi = [];
var replacedArray = [];
var calibratedArray = [];
var sDBatteryArray = [];
var pumpTestsArray = [];
var mechanismTestsArray = [];


var repairCode = [];
var analysisCode = [];
var investigationCode = [];