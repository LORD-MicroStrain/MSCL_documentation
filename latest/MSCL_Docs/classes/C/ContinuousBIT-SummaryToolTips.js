NDSummary.OnToolTipsLoaded("CClass:ContinuousBIT",{5185:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5185\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ContinuousBIT</div></div></div><div class=\"TTSummary\">Abstract class for device-specific Built-In Test result parser classes</div></div>",5187:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5187\" class=\"NDPrototype NoParameterForm\">ContinuousBIT() = <span class=\"SHKeyword\">delete</span></div></div>",5188:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5188\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> ContinuousBIT(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">ContinuousBIT&amp;</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHKeyword\">delete</span></td></tr></table></div><div class=\"TTSummary\">Copy constructor</div></div>",5189:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5189\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> ContinuousBIT(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">ContinuousBIT&amp;&amp;</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHKeyword\">delete</span></td></tr></table></div><div class=\"TTSummary\">Move constructor</div></div>",5190:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5190\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ContinuousBIT&amp; <span class=\"SHKeyword\">operator</span>=(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">ContinuousBIT&amp;</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span> = <span class=\"SHKeyword\">delete</span></td></tr></table></div><div class=\"TTSummary\">Copy assignment operator</div></div>",5191:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5191\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ContinuousBIT&amp; <span class=\"SHKeyword\">operator</span>=(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PName last\">ContinuousBIT&amp;&amp;</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span> = <span class=\"SHKeyword\">delete</span></td></tr></table></div><div class=\"TTSummary\">Move assignment operator</div></div>",5192:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5192\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipDataPoints as_MipDataPoints() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Get the Built-In Test data formatted as MipDataPoint objects</div></div>",5193:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5193\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipDataPoints getMipDataPoints(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">model,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function to parse the Built-In Test result data into MipDataPoint objects based on the specified device model</div></div>",5194:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5194\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Bytes&amp; data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the original Bytes source data (not parsed)</div></div>",5195:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5195\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> systemClockFailure() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the System Clock Failure bit (bit 0)</div></div>",5196:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5196\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> powerFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Power Fault bit (bit 1)</div></div>",5197:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5197\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> firmwareFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Firmware Fault bit (bit 4)</div></div>",5198:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5198\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> timingOverload() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Timing Overload bit (bit 5)</div></div>",5199:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5199\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> bufferOverrun() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Buffer Overrun bit (bit 6)</div></div>",5200:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5200\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuClockFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Clock Fault bit (bit 32)</div></div>",5201:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5201\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuCommunicationFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Communication Fault bit (bit 33)</div></div>",5202:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5202\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuTimingOverrun() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Timing Overrun bit (bit 34)</div></div>",5203:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5203\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuCalibrationErrorAccel() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Calibration Error Accelerometer bit (bit 36)</div></div>",5204:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5204\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuCalibrationErrorGyro() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Calibration Error Gyroscope bit (bit 37)</div></div>",5205:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5205\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> imuCalibrationErrorMag() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the IMU Calibration Error Magnetometer bit (bit 38)</div></div>",5206:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5206\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> accelGeneralFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Accelerometer General Fault bit (bit 40)</div></div>",5207:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5207\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> accelOverrange() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Accelerometer Overrange bit (bit 41)</div></div>",5208:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5208\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> accelSelfTestFail() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Accelerometer Self Test bit (bit 42)</div></div>",5209:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5209\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> gyroGeneralFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Gyroscope General Fault bit (bit 44)</div></div>",5210:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5210\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> gyroOverrange() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Gyroscope Overrange bit (bit 45)</div></div>",5211:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5211\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> gyroSelfTestFail() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Gyroscope Self Test bit (bit 46)</div></div>",5212:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5212\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> magGeneralFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Magnetometer General Fault bit (bit 48)</div></div>",5213:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5213\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> magOverrange() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Magnetometer Overrange bit (bit 49)</div></div>",5214:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5214\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> magSelfTestFail() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Magnetometer Self Test bit (bit 50)</div></div>",5215:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5215\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> pressureGeneralFault() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Pressure General Fault bit (bit 52)</div></div>",5216:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5216\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> pressureOverrange() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Pressure Overrange bit (bit 53)</div></div>",5217:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5217\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> pressureSelfTestFail() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Pressure Self Test bit (bit 54)</div></div>",5218:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5218\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> filterTimingOverrun() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Filter Timing Overrun bit (bit 66)</div></div>",5219:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5219\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> filterTimingUnderrun() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div><div class=\"TTSummary\">Gets the value of the Filter Timing Underrun bit (bit 67)</div></div>",5220:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5220\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> ContinuousBIT(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Bytes&nbsp;</td><td class=\"PName last\">bytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",5221:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5221\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~ContinuousBIT() = default</div></div>",5223:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5223\" class=\"NDPrototype NoParameterForm\">Bytes m_data</div><div class=\"TTSummary\">The original Bytes source data</div></div>"});