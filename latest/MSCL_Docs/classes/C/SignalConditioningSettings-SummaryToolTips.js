NDSummary.OnToolTipsLoaded("CClass:SignalConditioningSettings",{421:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype421\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SignalConditioningSettings</div></div></div><div class=\"TTSummary\">A class to handle the Signal Conditioning Settings command</div></div>",423:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype423\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const override</span></div></div>",424:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype424\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SignalConditioningSettings MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SignalConditioningValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: data The SignalConditioningValues to set.</div></div>",425:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype425\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> SignalConditioningSettings MakeGetCommand()</div></div>",426:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype426\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SignalConditioningValues getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",427:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype427\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",428:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a Uint8Command object.&nbsp; Use Make___Command methods to create an object.</div></div>",429:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype429\" class=\"NDPrototype NoParameterForm\">MipTypes::Command commandType() <span class=\"SHKeyword\">const override</span></div></div>",430:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype430\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> fieldDataByte() <span class=\"SHKeyword\">const override</span></div></div>",431:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype431\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> responseExpected() <span class=\"SHKeyword\">const override</span></div></div>",433:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype433\" class=\"NDPrototype NoParameterForm\">MipTypes::Command m_cmd</div><div class=\"TTSummary\">The specific MipTypes::Command type of this object</div></div>",434:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype434\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",435:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype435\" class=\"NDPrototype NoParameterForm\">SignalConditioningValues m_data</div><div class=\"TTSummary\">The SignalConditioningValues to send to the device.</div></div>"});