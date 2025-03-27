NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/GNSS_ConstellationSettings.h",{625:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype625\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GNSS_ConstellationSettings</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;GNSS Constellation Settings&quot; command</div></div>",627:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype627\" class=\"NDPrototype NoParameterForm\">MipTypes::Command commandType() <span class=\"SHKeyword\">const override</span></div></div>",628:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype628\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> fieldDataByte() <span class=\"SHKeyword\">const override</span></div></div>",629:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype629\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const override</span></div></div>",630:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype630\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> responseExpected() <span class=\"SHKeyword\">const override</span></div></div>",631:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype631\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GNSS_ConstellationSettings MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">ConstellationSettingsData</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",632:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype632\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> GNSS_ConstellationSettings MakeGetCommand()</div></div>",633:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype633\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> GNSS_ConstellationSettings MakeResetToDefaultCommand()</div></div>",634:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype634\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ConstellationSettingsData getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",635:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype635\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",637:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype637\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The MipTypes::FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",638:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype638\" class=\"NDPrototype NoParameterForm\">ConstellationSettingsData m_data</div><div class=\"TTSummary\">The ConstellationSettingsData to send to the device.</div></div>"});