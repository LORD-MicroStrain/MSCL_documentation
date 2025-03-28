NDSummary.OnToolTipsLoaded("CClass:MagnetometerHardIronOffset",{557:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype557\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MagnetometerHardIronOffset</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial MagnetometerHardIronOffset command.</div></div>",559:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype559\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const override</span></div></div>",560:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype560\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MagnetometerHardIronOffset MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">GeometricVector&nbsp;</td><td class=\"PName last\">offsetVector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: offsetVector The GeometricVector object to set.</div></div>",561:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype561\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> MagnetometerHardIronOffset MakeGetCommand()</div></div>",562:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype562\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeometricVector getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",563:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype563\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",564:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a MagnetometerHardIronOffset object.&nbsp; Use Make___Command methods to create an object.</div></div>",565:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype565\" class=\"NDPrototype NoParameterForm\">MipTypes::Command commandType() <span class=\"SHKeyword\">const override</span></div></div>",566:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype566\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> fieldDataByte() <span class=\"SHKeyword\">const override</span></div></div>",567:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype567\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> responseExpected() <span class=\"SHKeyword\">const override</span></div></div>",569:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype569\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",570:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype570\" class=\"NDPrototype NoParameterForm\">GeometricVector m_offsetVector</div><div class=\"TTSummary\">The MagnetometerHardIronOffsetData to send to the device.</div></div>"});