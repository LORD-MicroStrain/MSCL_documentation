NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/GNSS_SBASSettings.h",{679:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype679\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",680:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype680\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",681:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype681\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",682:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype682\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",683:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype683\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SBASSettings MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">SBASSettingsData</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",684:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype684\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> SBASSettings MakeGetCommand()</div></div>",685:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype685\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SBASSettingsData getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",686:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype686\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",687:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype687\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SBASSettings(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">FunctionSelector&nbsp;</td><td class=\"PName last\">function_selector,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">SBASSettingsData&nbsp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">) : m_functionSelector(function_selector), m_data(dataToUse)</td></tr></table></div></div>",689:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype689\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The MipTypes::FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",690:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype690\" class=\"NDPrototype NoParameterForm\">SBASSettingsData m_data</div><div class=\"TTSummary\">The ConstellationSettingsData to send to the device.</div></div>"});