NDSummary.OnToolTipsLoaded("CClass:ContinuousBIT",{2267:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2267\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ContinuousBIT</div></div></div><div class=\"TTSummary\">Abstract class for device-specific Built-In Test result parser classes</div></div>",2268:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2268\" class=\"NDPrototype NoParameterForm\">ContinuousBIT() = <span class=\"SHKeyword\">delete</span></div></div>",2269:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2269\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> ContinuousBIT(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">ContinuousBIT&amp;</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHKeyword\">delete</span></td></tr></table></div><div class=\"TTSummary\">Copy constructor</div></div>",2270:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2270\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> ContinuousBIT(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">ContinuousBIT&amp;&amp;</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHKeyword\">delete</span></td></tr></table></div><div class=\"TTSummary\">Move constructor</div></div>",2271:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2271\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ContinuousBIT&amp; <span class=\"SHKeyword\">operator</span>=(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">ContinuousBIT&amp;</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span> = <span class=\"SHKeyword\">delete</span></td></tr></table></div><div class=\"TTSummary\">Copy assignment operator</div></div>",2272:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2272\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ContinuousBIT&amp; <span class=\"SHKeyword\">operator</span>=(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">ContinuousBIT&amp;&amp;</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span> = <span class=\"SHKeyword\">delete</span></td></tr></table></div><div class=\"TTSummary\">Move assignment operator</div></div>",2273:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2273\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipDataPoints as_MipDataPoints() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Get the Built-In Test data formatted as MipDataPoint objects</div></div>",2274:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2274\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipDataPoints getMipDataPoints(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">model,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function to parse the Built-In Test result data into MipDataPoint objects based on the specified device model</div></div>",2275:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2275\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Bytes&amp; data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the original Bytes source data (not parsed)</div></div>",2276:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2276\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> systemClockFailure() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the System Clock Failure bit (bit 0)</div></div>",2277:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2277\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> powerFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Power Fault bit (bit 1)</div></div>",2278:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2278\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> firmwareFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Firmware Fault bit (bit 4)</div></div>",2279:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2279\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> timingOverload() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Timing Overload bit (bit 5)</div></div>",2280:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2280\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> bufferOverrun() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Buffer Overrun bit (bit 6)</div></div>",2281:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2281\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuClockFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Clock Fault bit (bit 32)</div></div>",2282:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2282\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuCommunicationFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Communication Fault bit (bit 33)</div></div>",2283:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2283\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuTimingOverrun() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Timing Overrun bit (bit 34)</div></div>",2284:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2284\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuCalibrationErrorAccel() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Calibration Error Accelerometer bit (bit 36)</div></div>",2285:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2285\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuCalibrationErrorGyro() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Calibration Error Gyroscope bit (bit 37)</div></div>",2286:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2286\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuCalibrationErrorMag() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Calibration Error Magnetometer bit (bit 38)</div></div>",2287:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2287\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> accelGeneralFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Accelerometer General Fault bit (bit 40)</div></div>",2288:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2288\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> accelOverrange() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Accelerometer Overrange bit (bit 41)</div></div>",2289:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2289\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> accelSelfTestFail() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Accelerometer Self Test bit (bit 42)</div></div>",2290:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2290\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> gyroGeneralFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Gyroscope General Fault bit (bit 44)</div></div>",2291:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2291\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> gyroOverrange() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Gyroscope Overrange bit (bit 45)</div></div>",2292:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2292\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> gyroSelfTestFail() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Gyroscope Self Test bit (bit 46)</div></div>",2293:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2293\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> magGeneralFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Magnetometer General Fault bit (bit 48)</div></div>",2294:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2294\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> magOverrange() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Magnetometer Overrange bit (bit 49)</div></div>",2295:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2295\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> magSelfTestFail() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Magnetometer Self Test bit (bit 50)</div></div>",2296:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2296\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> pressureGeneralFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Pressure General Fault bit (bit 52)</div></div>",2297:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2297\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> pressureOverrange() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Pressure Overrange bit (bit 53)</div></div>",2298:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2298\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> pressureSelfTestFail() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Pressure Self Test bit (bit 54)</div></div>",2299:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2299\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> filterTimingOverrun() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Filter Timing Overrun bit (bit 66)</div></div>",2300:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2300\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> filterTimingUnderrun() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Filter Timing Underrun bit (bit 67)</div></div>"});