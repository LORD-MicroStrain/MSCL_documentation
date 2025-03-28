NDSummary.OnToolTipsLoaded("CClass:EstimationControlFlags",{965:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype965\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EstimationControlFlags</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial EstimationControlFlags command.</div></div>",967:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype967\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const override</span></div></div>",968:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype968\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> EstimationControlFlags MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">controlFlags</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The uint16 control flags to set.</div></div>",969:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype969\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> EstimationControlFlags MakeGetCommand()</div></div>",970:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype970\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> EstimationControlOptions getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",971:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype971\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",972:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates an EstimationControlFlags object.&nbsp; Use Make___Command methods to create an object.</div></div>",973:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype973\" class=\"NDPrototype NoParameterForm\">MipTypes::Command commandType() <span class=\"SHKeyword\">const override</span></div></div>",974:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype974\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> fieldDataByte() <span class=\"SHKeyword\">const override</span></div></div>",975:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype975\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> responseExpected() <span class=\"SHKeyword\">const override</span></div></div>",977:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype977\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",978:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype978\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_ControlFlags</div><div class=\"TTSummary\">The uint16 to send to the device.</div></div>"});