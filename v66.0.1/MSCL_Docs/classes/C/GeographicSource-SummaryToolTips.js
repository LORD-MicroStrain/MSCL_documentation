NDSummary.OnToolTipsLoaded("CClass:GeographicSource",{772:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype772\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GeographicSource</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial GeographicSource command.</div></div>",774:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype774\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",775:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype775\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeographicSource MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GeographicSourceOptions&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The GeographicSourceOptions to set the option and fixed value.</div></div>",776:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype776\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> GeographicSource MakeGetCommand()</div></div>",777:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype777\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeographicSourceOptions getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",778:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype778\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",779:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates an GeographicSource object.&nbsp; Use Make___Command methods to create an object.</div></div>",780:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype780\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",781:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype781\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",782:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype782\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",784:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype784\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",785:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype785\" class=\"NDPrototype NoParameterForm\">GeographicSourceOptions m_sourceOptions</div><div class=\"TTSummary\">The GeographicSourceOptions to send to the device.</div></div>",786:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype786\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_fieldDataByte</div><div class=\"TTSummary\">The byte ID for field data in the reply.</div></div>",787:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype787\" class=\"NDPrototype NoParameterForm\">MipTypes::Command m_commandType</div><div class=\"TTSummary\">The command ID.</div></div>",788:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype788\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_commandName</div><div class=\"TTSummary\">The command name.</div></div>"});