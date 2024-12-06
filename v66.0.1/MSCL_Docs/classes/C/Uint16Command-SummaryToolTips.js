NDSummary.OnToolTipsLoaded("CClass:Uint16Command",{350:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype350\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Uint16Command</div></div></div><div class=\"TTSummary\">A generic command class that contains the logic for any command that deals only with one or more uint16s.</div></div>",352:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype352\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",353:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype353\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Uint16Command MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">uint16</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",354:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype354\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Uint16Command MakeGetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",355:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype355\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Uint16Command MakeGetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">uint16</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">addlParams</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",356:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype356\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::vector&lt;<span class=\"SHKeyword\">uint16</span>&gt; getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",357:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype357\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",358:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a Uint16Command object.&nbsp; Use Make___Command methods to create an object.</div></div>",359:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype359\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",360:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype360\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",361:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype361\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",363:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype363\" class=\"NDPrototype NoParameterForm\">MipTypes::Command m_cmd</div><div class=\"TTSummary\">The specific MipTypes::Command type of this object</div></div>",364:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype364\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",365:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype365\" class=\"NDPrototype NoParameterForm\">std::vector&lt;<span class=\"SHKeyword\">uint16</span>&gt; m_data</div><div class=\"TTSummary\">The uint16 data to send to the device.</div></div>",366:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype366\" class=\"NDPrototype NoParameterForm\">std::vector&lt;<span class=\"SHKeyword\">uint16</span>&gt; m_addlParams</div><div class=\"TTSummary\">The uint16 parameters to send to the device in a get command.</div></div>"});