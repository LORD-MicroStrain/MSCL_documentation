NDSummary.OnToolTipsLoaded("CClass:ContinuousBIT",{1362:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1362\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ContinuousBIT</div></div></div><div class=\"TTSummary\">Abstract class for device-specific Built-In Test result parser classes</div></div>",1363:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1363\" class=\"NDPrototype NoParameterForm\">ContinuousBIT() = <span class=\"SHKeyword\">delete</span></div></div>",1364:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1364\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> ContinuousBIT(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">ContinuousBIT&amp;</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHKeyword\">delete</span></td></tr></table></div><div class=\"TTSummary\">Copy constructor</div></div>",1365:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1365\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> ContinuousBIT(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">ContinuousBIT&amp;&amp;</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHKeyword\">delete</span></td></tr></table></div><div class=\"TTSummary\">Move constructor</div></div>",1366:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1366\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ContinuousBIT&amp; <span class=\"SHKeyword\">operator</span>=(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">ContinuousBIT&amp;</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span> = <span class=\"SHKeyword\">delete</span></td></tr></table></div><div class=\"TTSummary\">Copy assignment operator</div></div>",1367:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1367\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ContinuousBIT&amp; <span class=\"SHKeyword\">operator</span>=(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">ContinuousBIT&amp;&amp;</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span> = <span class=\"SHKeyword\">delete</span></td></tr></table></div><div class=\"TTSummary\">Move assignment operator</div></div>",1368:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1368\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipDataPoints as_MipDataPoints() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Get the Built-In Test data formatted as MipDataPoint objects</div></div>",1369:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1369\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipDataPoints getMipDataPoints(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">model,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function to parse the Built-In Test result data into MipDataPoint objects based on the specified device model</div></div>",1370:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1370\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Bytes&amp; data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the original Bytes source data (not parsed)</div></div>",1371:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1371\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> systemClockFailure() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the System Clock Failure bit (bit 0)</div></div>",1372:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1372\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> powerFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Power Fault bit (bit 1)</div></div>",1373:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1373\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> firmwareFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Firmware Fault bit (bit 4)</div></div>",1374:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1374\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> timingOverload() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Timing Overload bit (bit 5)</div></div>",1375:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1375\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> bufferOverrun() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Buffer Overrun bit (bit 6)</div></div>",1376:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1376\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuClockFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Clock Fault bit (bit 32)</div></div>",1377:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1377\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuCommunicationFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Communication Fault bit (bit 33)</div></div>",1378:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1378\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuTimingOverrun() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Timing Overrun bit (bit 34)</div></div>",1379:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1379\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuCalibrationErrorAccel() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Calibration Error Accelerometer bit (bit 36)</div></div>",1380:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1380\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuCalibrationErrorGyro() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Calibration Error Gyroscope bit (bit 37)</div></div>",1381:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1381\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuCalibrationErrorMag() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Calibration Error Magnetometer bit (bit 38)</div></div>",1382:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1382\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> accelGeneralFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Accelerometer General Fault bit (bit 40)</div></div>",1383:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1383\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> accelOverrange() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Accelerometer Overrange bit (bit 41)</div></div>",1384:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1384\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> accelSelfTestFail() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Accelerometer Self Test bit (bit 42)</div></div>",1385:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1385\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> gyroGeneralFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Gyroscope General Fault bit (bit 44)</div></div>",1386:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1386\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> gyroOverrange() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Gyroscope Overrange bit (bit 45)</div></div>",1387:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1387\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> gyroSelfTestFail() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Gyroscope Self Test bit (bit 46)</div></div>",1388:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1388\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> magGeneralFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Magnetometer General Fault bit (bit 48)</div></div>",1389:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1389\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> magOverrange() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Magnetometer Overrange bit (bit 49)</div></div>",1390:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1390\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> magSelfTestFail() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Magnetometer Self Test bit (bit 50)</div></div>",1391:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1391\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> pressureGeneralFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Pressure General Fault bit (bit 52)</div></div>",1392:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1392\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> pressureOverrange() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Pressure Overrange bit (bit 53)</div></div>",1393:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1393\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> pressureSelfTestFail() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Pressure Self Test bit (bit 54)</div></div>",1394:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1394\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> filterTimingOverrun() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Filter Timing Overrun bit (bit 66)</div></div>",1395:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1395\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> filterTimingUnderrun() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Filter Timing Underrun bit (bit 67)</div></div>"});