NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/EstimationControlFlags.h",{787:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype787\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EstimationControlFlags</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial EstimationControlFlags command.</div></div>",789:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype789\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",790:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype790\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> EstimationControlFlags MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">controlFlags</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The uint16 control flags to set.</div></div>",791:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype791\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> EstimationControlFlags MakeGetCommand()</div></div>",792:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype792\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> EstimationControlOptions getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",793:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype793\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",794:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates an EstimationControlFlags object.&nbsp; Use Make___Command methods to create an object.</div></div>",795:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype795\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",796:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype796\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",797:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype797\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",799:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype799\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",800:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype800\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_ControlFlags</div><div class=\"TTSummary\">The uint16 to send to the device.</div></div>"});