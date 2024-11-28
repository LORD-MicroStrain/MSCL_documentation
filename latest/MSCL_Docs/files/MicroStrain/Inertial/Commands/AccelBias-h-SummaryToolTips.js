NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/AccelBias.h",{1187:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1187\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AccelBias</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial GPSTimeUpdate command.</div></div>",1189:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1189\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",1190:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1190\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> AccelBias MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GeometricVector&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">vectorToSet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1191:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1191\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> AccelBias MakeGetCommand()</div></div>",1192:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1192\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeometricVector getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1193:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1193\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",1194:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1194\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">AccelBias(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">FunctionSelector&nbsp;</td><td></td><td class=\"PName last\">function_selector,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GeometricVector&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Private constructor creates a GyroBias object.&nbsp; Use Make___Command methods to create an object.</div></div>",1195:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1195\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",1196:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1196\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",1197:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1197\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",1199:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1199\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The MipTypes::FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",1200:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1200\" class=\"NDPrototype NoParameterForm\">GeometricVector m_accelerometerBiasVector</div><div class=\"TTSummary\">The ConstellationSettingsData to send to the device.</div></div>",1202:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1202\" class=\"NDPrototype NoParameterForm\">~AccelBias()</div></div>"});