NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/EstimationControlFlags.h",{955:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype955\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EstimationControlFlags</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial EstimationControlFlags command.</div></div>",957:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype957\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",958:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype958\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> EstimationControlFlags MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">controlFlags</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The uint16 control flags to set.</div></div>",959:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype959\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> EstimationControlFlags MakeGetCommand()</div></div>",960:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype960\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> EstimationControlOptions getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",961:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype961\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",962:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates an EstimationControlFlags object.&nbsp; Use Make___Command methods to create an object.</div></div>",963:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype963\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",964:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype964\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",965:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype965\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",967:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype967\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",968:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype968\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_ControlFlags</div><div class=\"TTSummary\">The uint16 to send to the device.</div></div>"});