NDSummary.OnToolTipsLoaded("CClass:GeometricVectorCommand",{704:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype704\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GeometricVectorCommand</div></div></div><div class=\"TTSummary\">A generic command class that contains the logic for any command that deals only with one or more GeometricVector.</div></div>",706:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype706\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const override</span></div></div>",707:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype707\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeometricVectorCommand MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GeometricVectors&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",708:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype708\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeometricVectorCommand MakeGetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",709:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype709\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">GeometricVectors getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",710:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype710\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",711:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a GeometricVectorCommand object.&nbsp; Use Make___Command methods to create an object.</div></div>",712:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype712\" class=\"NDPrototype NoParameterForm\">MipTypes::Command commandType() <span class=\"SHKeyword\">const override</span></div></div>",713:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype713\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> fieldDataByte() <span class=\"SHKeyword\">const override</span></div></div>",714:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype714\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> responseExpected() <span class=\"SHKeyword\">const override</span></div></div>",716:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype716\" class=\"NDPrototype NoParameterForm\">MipTypes::Command m_cmd</div><div class=\"TTSummary\">The specific MipTypes::Command type of this object</div></div>",717:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype717\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",718:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype718\" class=\"NDPrototype NoParameterForm\">GeometricVectors m_data</div><div class=\"TTSummary\">The GeometricVector data to send to the device.</div></div>"});