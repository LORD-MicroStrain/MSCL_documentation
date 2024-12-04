NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/GeographicSource.h",{735:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype735\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GeographicSource</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial GeographicSource command.</div></div>",737:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype737\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",738:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype738\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeographicSource MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GeographicSourceOptions&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The GeographicSourceOptions to set the option and fixed value.</div></div>",739:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype739\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> GeographicSource MakeGetCommand()</div></div>",740:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype740\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeographicSourceOptions getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",741:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype741\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",742:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates an GeographicSource object.&nbsp; Use Make___Command methods to create an object.</div></div>",743:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype743\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",744:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype744\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",745:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype745\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",747:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype747\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",748:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype748\" class=\"NDPrototype NoParameterForm\">GeographicSourceOptions m_sourceOptions</div><div class=\"TTSummary\">The GeographicSourceOptions to send to the device.</div></div>",749:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype749\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_fieldDataByte</div><div class=\"TTSummary\">The byte ID for field data in the reply.</div></div>",750:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype750\" class=\"NDPrototype NoParameterForm\">MipTypes::Command m_commandType</div><div class=\"TTSummary\">The command ID.</div></div>",751:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype751\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_commandName</div><div class=\"TTSummary\">The command name.</div></div>",752:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype752\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">InclinationSource</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial Inclination GeographicSource command.</div></div>",754:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype754\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeographicSource MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GeographicSourceOptions&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The GeographicSourceOptions to set the option and fixed value.</div></div>",755:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype755\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> GeographicSource MakeGetCommand()</div></div>",756:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates an InclinationSource object.&nbsp; Use Make___Command methods to create an object.</div></div>",757:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype757\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DeclinationSource</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial Declination GeographicSource command.</div></div>",759:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype759\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeographicSource MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GeographicSourceOptions&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The GeographicSourceOptions to set the option and fixed value.</div></div>",760:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype760\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> GeographicSource MakeGetCommand()</div></div>",761:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates an InclinationSource object.&nbsp; Use Make___Command methods to create an object.</div></div>",762:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype762\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MagneticFieldMagnitudeSource</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial Magnetic Field Magnitude GeographicSource command.</div></div>",764:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype764\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeographicSource MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GeographicSourceOptions&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The GeographicSourceOptions to set the option and fixed value.</div></div>",765:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype765\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> GeographicSource MakeGetCommand()</div></div>"});