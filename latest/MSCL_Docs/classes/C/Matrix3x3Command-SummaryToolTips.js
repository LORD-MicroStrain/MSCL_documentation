NDSummary.OnToolTipsLoaded("CClass:Matrix3x3Command",{511:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype511\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Matrix3x3Command</div></div></div><div class=\"TTSummary\">A generic command class that contains the logic for any command that deals only with one or more Matrix_3x3.</div></div>",513:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype513\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const override</span></div></div>",514:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype514\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Matrix3x3Command MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Matrix_3x3s&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",515:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype515\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Matrix3x3Command MakeGetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",516:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype516\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Matrix_3x3s getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",517:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype517\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",518:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a Matrix3x3Command object.&nbsp; Use Make___Command methods to create an object.</div></div>",519:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype519\" class=\"NDPrototype NoParameterForm\">MipTypes::Command commandType() <span class=\"SHKeyword\">const override</span></div></div>",520:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype520\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> fieldDataByte() <span class=\"SHKeyword\">const override</span></div></div>",521:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype521\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> responseExpected() <span class=\"SHKeyword\">const override</span></div></div>",523:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype523\" class=\"NDPrototype NoParameterForm\">MipTypes::Command m_cmd</div><div class=\"TTSummary\">The specific MipTypes::Command type of this object</div></div>",524:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype524\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",525:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype525\" class=\"NDPrototype NoParameterForm\">Matrix_3x3s m_data</div><div class=\"TTSummary\">The Matrix_3x3 data to send to the device.</div></div>"});