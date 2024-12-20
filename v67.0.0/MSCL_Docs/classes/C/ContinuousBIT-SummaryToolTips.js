NDSummary.OnToolTipsLoaded("CClass:ContinuousBIT",{4840:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4840\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ContinuousBIT</div></div></div><div class=\"TTSummary\">Abstract class for device-specific Built-In Test result parser classes</div></div>",4842:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4842\" class=\"NDPrototype NoParameterForm\">ContinuousBIT() = <span class=\"SHKeyword\">delete</span></div></div>",4843:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4843\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> ContinuousBIT(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">ContinuousBIT&amp;</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHKeyword\">delete</span></td></tr></table></div><div class=\"TTSummary\">Copy constructor</div></div>",4844:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4844\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> ContinuousBIT(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">ContinuousBIT&amp;&amp;</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHKeyword\">delete</span></td></tr></table></div><div class=\"TTSummary\">Move constructor</div></div>",4845:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4845\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ContinuousBIT&amp; <span class=\"SHKeyword\">operator</span>=(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">ContinuousBIT&amp;</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span> = <span class=\"SHKeyword\">delete</span></td></tr></table></div><div class=\"TTSummary\">Copy assignment operator</div></div>",4846:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4846\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ContinuousBIT&amp; <span class=\"SHKeyword\">operator</span>=(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">ContinuousBIT&amp;&amp;</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span> = <span class=\"SHKeyword\">delete</span></td></tr></table></div><div class=\"TTSummary\">Move assignment operator</div></div>",4847:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4847\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipDataPoints as_MipDataPoints() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Get the Built-In Test data formatted as MipDataPoint objects</div></div>",4848:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4848\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipDataPoints getMipDataPoints(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">model,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function to parse the Built-In Test result data into MipDataPoint objects based on the specified device model</div></div>",4849:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4849\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Bytes&amp; data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the original Bytes source data (not parsed)</div></div>",4850:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4850\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> systemClockFailure() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the System Clock Failure bit (bit 0)</div></div>",4851:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4851\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> powerFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Power Fault bit (bit 1)</div></div>",4852:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4852\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> firmwareFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Firmware Fault bit (bit 4)</div></div>",4853:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4853\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> timingOverload() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Timing Overload bit (bit 5)</div></div>",4854:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4854\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> bufferOverrun() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Buffer Overrun bit (bit 6)</div></div>",4855:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4855\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuClockFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Clock Fault bit (bit 32)</div></div>",4856:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4856\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuCommunicationFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Communication Fault bit (bit 33)</div></div>",4857:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4857\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuTimingOverrun() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Timing Overrun bit (bit 34)</div></div>",4858:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4858\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuCalibrationErrorAccel() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Calibration Error Accelerometer bit (bit 36)</div></div>",4859:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4859\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuCalibrationErrorGyro() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Calibration Error Gyroscope bit (bit 37)</div></div>",4860:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4860\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuCalibrationErrorMag() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Calibration Error Magnetometer bit (bit 38)</div></div>",4861:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4861\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> accelGeneralFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Accelerometer General Fault bit (bit 40)</div></div>",4862:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4862\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> accelOverrange() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Accelerometer Overrange bit (bit 41)</div></div>",4863:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4863\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> accelSelfTestFail() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Accelerometer Self Test bit (bit 42)</div></div>",4864:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4864\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> gyroGeneralFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Gyroscope General Fault bit (bit 44)</div></div>",4865:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4865\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> gyroOverrange() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Gyroscope Overrange bit (bit 45)</div></div>",4866:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4866\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> gyroSelfTestFail() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Gyroscope Self Test bit (bit 46)</div></div>",4867:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4867\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> magGeneralFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Magnetometer General Fault bit (bit 48)</div></div>",4868:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4868\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> magOverrange() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Magnetometer Overrange bit (bit 49)</div></div>",4869:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4869\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> magSelfTestFail() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Magnetometer Self Test bit (bit 50)</div></div>",4870:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4870\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> pressureGeneralFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Pressure General Fault bit (bit 52)</div></div>",4871:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4871\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> pressureOverrange() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Pressure Overrange bit (bit 53)</div></div>",4872:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4872\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> pressureSelfTestFail() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Pressure Self Test bit (bit 54)</div></div>",4873:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4873\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> filterTimingOverrun() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Filter Timing Overrun bit (bit 66)</div></div>",4874:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4874\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> filterTimingUnderrun() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Filter Timing Underrun bit (bit 67)</div></div>",4875:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4875\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> ContinuousBIT(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Bytes&nbsp;</td><td class=\"PName last\">bytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",4876:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4876\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~ContinuousBIT() = default</div></div>",4878:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4878\" class=\"NDPrototype NoParameterForm\">Bytes m_data</div><div class=\"TTSummary\">The original Bytes source data</div></div>"});