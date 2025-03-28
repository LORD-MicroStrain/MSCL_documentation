NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/GeographicSource.h",{782:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype782\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GeographicSource</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial GeographicSource command.</div></div>",784:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype784\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const override</span></div></div>",785:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype785\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeographicSource MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GeographicSourceOptions&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The GeographicSourceOptions to set the option and fixed value.</div></div>",786:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype786\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> GeographicSource MakeGetCommand()</div></div>",787:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype787\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeographicSourceOptions getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",788:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype788\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",789:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates an GeographicSource object.&nbsp; Use Make___Command methods to create an object.</div></div>",790:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype790\" class=\"NDPrototype NoParameterForm\">MipTypes::Command commandType() <span class=\"SHKeyword\">const override</span></div></div>",791:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype791\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> fieldDataByte() <span class=\"SHKeyword\">const override</span></div></div>",792:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype792\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> responseExpected() <span class=\"SHKeyword\">const override</span></div></div>",794:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype794\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",795:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype795\" class=\"NDPrototype NoParameterForm\">GeographicSourceOptions m_sourceOptions</div><div class=\"TTSummary\">The GeographicSourceOptions to send to the device.</div></div>",796:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype796\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_fieldDataByte</div><div class=\"TTSummary\">The byte ID for field data in the reply.</div></div>",797:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype797\" class=\"NDPrototype NoParameterForm\">MipTypes::Command m_commandType</div><div class=\"TTSummary\">The command ID.</div></div>",798:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype798\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_commandName</div><div class=\"TTSummary\">The command name.</div></div>",799:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype799\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">InclinationSource</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial Inclination GeographicSource command.</div></div>",801:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype801\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeographicSource MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GeographicSourceOptions&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The GeographicSourceOptions to set the option and fixed value.</div></div>",802:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype802\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> GeographicSource MakeGetCommand()</div></div>",803:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates an InclinationSource object.&nbsp; Use Make___Command methods to create an object.</div></div>",804:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype804\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DeclinationSource</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial Declination GeographicSource command.</div></div>",806:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype806\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeographicSource MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GeographicSourceOptions&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The GeographicSourceOptions to set the option and fixed value.</div></div>",807:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype807\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> GeographicSource MakeGetCommand()</div></div>",808:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates an InclinationSource object.&nbsp; Use Make___Command methods to create an object.</div></div>",809:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype809\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MagneticFieldMagnitudeSource</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial Magnetic Field Magnitude GeographicSource command.</div></div>",811:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype811\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeographicSource MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GeographicSourceOptions&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The GeographicSourceOptions to set the option and fixed value.</div></div>",812:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype812\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> GeographicSource MakeGetCommand()</div></div>"});