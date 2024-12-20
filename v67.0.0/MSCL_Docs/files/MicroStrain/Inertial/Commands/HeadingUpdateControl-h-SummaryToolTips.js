NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/HeadingUpdateControl.h",{572:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype572\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">HeadingUpdateControl</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial HeadingUpdateControl command.</div></div>",574:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype574\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",575:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype575\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> HeadingUpdateControl MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">HeadingUpdateOptions&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">headingUpdateOptions</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The HeadingUpdateOptions object to set.</div></div>",576:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype576\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> HeadingUpdateControl MakeGetCommand()</div></div>",577:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype577\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> HeadingUpdateOptions getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",578:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype578\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",579:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a HeadingUpdateControl object.&nbsp; Use Make___Command methods to create an object.</div></div>",580:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype580\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",581:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype581\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",582:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype582\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",584:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype584\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",585:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype585\" class=\"NDPrototype NoParameterForm\">HeadingUpdateOptions m_HeadingUpdateOptions</div><div class=\"TTSummary\">The uint8 to send to the device.</div></div>"});