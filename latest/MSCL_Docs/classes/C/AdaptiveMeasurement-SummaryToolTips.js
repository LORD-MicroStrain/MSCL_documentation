NDSummary.OnToolTipsLoaded("CClass:AdaptiveMeasurement",{1024:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1024\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AdaptiveMeasurement</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial Adaptive Measurement commands: Gravity Magnitude Error Adaptive Measurement, Magnetometer Magnitude Error Adaptive Measurement, and Magnetometer Dip Angle Error Adaptive Measurement.</div></div>",1026:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1026\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",1027:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1027\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> AdaptiveMeasurement MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">AdaptiveMeasurementData&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",1028:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1028\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> AdaptiveMeasurement MakeGetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",1029:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1029\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">AdaptiveMeasurementData getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1030:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1030\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",1031:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a AdaptiveMeasurement object.&nbsp; Use Make___Command methods to create an object.</div></div>",1032:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1032\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",1033:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1033\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",1034:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1034\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",1036:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1036\" class=\"NDPrototype NoParameterForm\">MipTypes::Command m_cmd</div><div class=\"TTSummary\">The specific MipTypes::Command type of this object</div></div>",1037:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1037\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",1038:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The uint8 to send to the device.</div></div>"});