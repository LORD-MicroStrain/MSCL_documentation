NDSummary.OnToolTipsLoaded("CClass:ContinuousBIT",{1324:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1324\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ContinuousBIT</div></div></div><div class=\"TTSummary\">Abstract class for device-specific Built-In Test result parser classes</div></div>",1325:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1325\" class=\"NDPrototype NoParameterForm\">ContinuousBIT() = <span class=\"SHKeyword\">delete</span></div></div>",1326:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1326\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> ContinuousBIT(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">ContinuousBIT&amp;</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHKeyword\">delete</span></td></tr></table></div><div class=\"TTSummary\">Copy constructor</div></div>",1327:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1327\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> ContinuousBIT(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">ContinuousBIT&amp;&amp;</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHKeyword\">delete</span></td></tr></table></div><div class=\"TTSummary\">Move constructor</div></div>",1328:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1328\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ContinuousBIT&amp; <span class=\"SHKeyword\">operator</span>=(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">ContinuousBIT&amp;</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span> = <span class=\"SHKeyword\">delete</span></td></tr></table></div><div class=\"TTSummary\">Copy assignment operator</div></div>",1329:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1329\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ContinuousBIT&amp; <span class=\"SHKeyword\">operator</span>=(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">ContinuousBIT&amp;&amp;</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span> = <span class=\"SHKeyword\">delete</span></td></tr></table></div><div class=\"TTSummary\">Move assignment operator</div></div>",1330:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1330\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipDataPoints as_MipDataPoints() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Get the Built-In Test data formatted as MipDataPoint objects</div></div>",1331:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1331\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipDataPoints getMipDataPoints(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">model,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function to parse the Built-In Test result data into MipDataPoint objects based on the specified device model</div></div>",1332:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1332\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Bytes&amp; data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the original Bytes source data (not parsed)</div></div>",1333:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1333\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> systemClockFailure() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the System Clock Failure bit (bit 0)</div></div>",1334:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1334\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> powerFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Power Fault bit (bit 1)</div></div>",1335:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1335\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> firmwareFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Firmware Fault bit (bit 4)</div></div>",1336:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1336\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> timingOverload() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Timing Overload bit (bit 5)</div></div>",1337:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1337\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> bufferOverrun() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Buffer Overrun bit (bit 6)</div></div>",1338:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1338\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuClockFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Clock Fault bit (bit 32)</div></div>",1339:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1339\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuCommunicationFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Communication Fault bit (bit 33)</div></div>",1340:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1340\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuTimingOverrun() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Timing Overrun bit (bit 34)</div></div>",1341:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1341\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuCalibrationErrorAccel() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Calibration Error Accelerometer bit (bit 36)</div></div>",1342:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1342\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuCalibrationErrorGyro() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Calibration Error Gyroscope bit (bit 37)</div></div>",1343:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1343\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuCalibrationErrorMag() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Calibration Error Magnetometer bit (bit 38)</div></div>",1344:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1344\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> accelGeneralFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Accelerometer General Fault bit (bit 40)</div></div>",1345:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1345\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> accelOverrange() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Accelerometer Overrange bit (bit 41)</div></div>",1346:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1346\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> accelSelfTestFail() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Accelerometer Self Test bit (bit 42)</div></div>",1347:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1347\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> gyroGeneralFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Gyroscope General Fault bit (bit 44)</div></div>",1348:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1348\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> gyroOverrange() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Gyroscope Overrange bit (bit 45)</div></div>",1349:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1349\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> gyroSelfTestFail() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Gyroscope Self Test bit (bit 46)</div></div>",1350:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1350\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> magGeneralFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Magnetometer General Fault bit (bit 48)</div></div>",1351:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1351\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> magOverrange() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Magnetometer Overrange bit (bit 49)</div></div>",1352:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1352\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> magSelfTestFail() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Magnetometer Self Test bit (bit 50)</div></div>",1353:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1353\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> pressureGeneralFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Pressure General Fault bit (bit 52)</div></div>",1354:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1354\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> pressureOverrange() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Pressure Overrange bit (bit 53)</div></div>",1355:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1355\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> pressureSelfTestFail() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Pressure Self Test bit (bit 54)</div></div>",1356:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1356\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> filterTimingOverrun() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Filter Timing Overrun bit (bit 66)</div></div>",1357:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1357\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> filterTimingUnderrun() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Filter Timing Underrun bit (bit 67)</div></div>"});