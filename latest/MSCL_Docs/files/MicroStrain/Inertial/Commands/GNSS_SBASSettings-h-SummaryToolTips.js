NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/GNSS_SBASSettings.h",{613:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype613\" class=\"NDPrototype NoParameterForm\">MipTypes::Command commandType() <span class=\"SHKeyword\">const override</span></div></div>",614:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype614\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> fieldDataByte() <span class=\"SHKeyword\">const override</span></div></div>",615:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype615\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const override</span></div></div>",616:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype616\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> responseExpected() <span class=\"SHKeyword\">const override</span></div></div>",617:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype617\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SBASSettings MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">SBASSettingsData</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",618:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype618\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> SBASSettings MakeGetCommand()</div></div>",619:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype619\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SBASSettingsData getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",620:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype620\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",621:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype621\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SBASSettings(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">FunctionSelector&nbsp;</td><td class=\"PName last\">function_selector,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">SBASSettingsData&nbsp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">) : m_functionSelector(function_selector), m_data(dataToUse)</td></tr></table></div></div>",623:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype623\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The MipTypes::FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",624:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype624\" class=\"NDPrototype NoParameterForm\">SBASSettingsData m_data</div><div class=\"TTSummary\">The ConstellationSettingsData to send to the device.</div></div>"});