NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/Commands/MipCommand.h",{2873:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2873\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmdId,</td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">FunctionSelector&nbsp;</td><td class=\"PName last\">fn</td></tr></table></td><td class=\"PAfterParameters\">) : m_commandId(cmdId), m_functionSelector(fn), m_responseExpected(fn == MipTypes::FunctionSelector::READ_BACK_CURRENT_SETTINGS)</td></tr></table></div><div class=\"TTSummary\">Constructor to build MIP command based on Command ID and function selector</div></div>",2874:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2874\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmdId,</td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">FunctionSelector&nbsp;</td><td class=\"PName last\">fn,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PName last\">vals</td></tr></table></td><td class=\"PAfterParameters\">) : m_commandId(cmdId), m_functionSelector(fn), m_data(vals), m_responseExpected(fn == MipTypes::FunctionSelector::READ_BACK_CURRENT_SETTINGS)</td></tr></table></div><div class=\"TTSummary\">Constructor to build MIP command based on Command ID and function selector with specified data</div></div>",2875:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2875\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> std::shared_ptr&lt;GenericMipCommand::Response&gt; createResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",2876:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2876\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",2877:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2877\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipFieldValues getGenericResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",2878:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2878\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",2879:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2879\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipFunctionSelectors supportedFunctionSelectors(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",2880:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2880\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> supportsFunctionSelector(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">FunctionSelector&nbsp;</td><td class=\"PName last\">fn</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",2881:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2881\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",2882:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2882\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",2883:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2883\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",2884:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2884\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> isKnownCommand() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">checks whether the command name is defined to determine if this command is defined in MSCL</div></div>"});