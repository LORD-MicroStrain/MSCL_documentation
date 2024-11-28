NDSummary.OnToolTipsLoaded("CClass:MagnetometerHardIronOffset",{544:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype544\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MagnetometerHardIronOffset</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial MagnetometerHardIronOffset command.</div></div>",546:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype546\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",547:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype547\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MagnetometerHardIronOffset MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">GeometricVector&nbsp;</td><td class=\"PName last\">offsetVector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: offsetVector The GeometricVector object to set.</div></div>",548:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype548\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> MagnetometerHardIronOffset MakeGetCommand()</div></div>",549:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype549\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeometricVector getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",550:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype550\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",551:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a MagnetometerHardIronOffset object.&nbsp; Use Make___Command methods to create an object.</div></div>",552:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype552\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",553:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype553\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",554:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype554\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",556:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype556\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",557:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype557\" class=\"NDPrototype NoParameterForm\">GeometricVector m_offsetVector</div><div class=\"TTSummary\">The MagnetometerHardIronOffsetData to send to the device.</div></div>"});