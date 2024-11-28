NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/Uint8Command.h",{390:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype390\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Uint8Command</div></div></div><div class=\"TTSummary\">A generic command class that contains the logic for any command that deals only with one or more uint8s.</div></div>",392:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype392\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",393:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype393\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Uint8Command MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">uint8</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",394:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype394\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Uint8Command MakeGetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",395:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype395\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Uint8Command MakeGetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">uint8</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">addlParams</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",396:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype396\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::vector&lt;<span class=\"SHKeyword\">uint8</span>&gt; getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",397:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype397\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",398:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a Uint8Command object.&nbsp; Use Make___Command methods to create an object.</div></div>",399:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype399\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",400:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype400\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",401:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype401\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",403:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype403\" class=\"NDPrototype NoParameterForm\">MipTypes::Command m_cmd</div><div class=\"TTSummary\">The specific MipTypes::Command type of this object</div></div>",404:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype404\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",405:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype405\" class=\"NDPrototype NoParameterForm\">std::vector&lt;<span class=\"SHKeyword\">uint8</span>&gt; m_data</div><div class=\"TTSummary\">The uint8 data to send to the device.</div></div>",406:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype406\" class=\"NDPrototype NoParameterForm\">std::vector&lt;<span class=\"SHKeyword\">uint8</span>&gt; m_addlParams</div><div class=\"TTSummary\">The uint8 parameters to send to the device in a get command.</div></div>"});