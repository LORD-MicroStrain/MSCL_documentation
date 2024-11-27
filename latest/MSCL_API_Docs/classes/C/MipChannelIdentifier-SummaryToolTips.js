NDSummary.OnToolTipsLoaded("CClass:MipChannelIdentifier",{2420:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2420\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipChannelIdentifier</div></div></div><div class=\"TTSummary\">A single additional identifier for a MipDataPoint. Contains a uint value with an identifier type specifier.</div></div>",2421:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Identifier type options, indicates what the MipChannelIdentifier::id value represents.</div></div>",2430:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">ID definitions when Type is MipChannelIdentifier::AIDING_MEASUREMENT_TYPE</div></div>",2446:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">ID definitions when Type is MipChannelIdentifier::GNSS_CONSTELLATION</div></div>",2452:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">ID definitions when Type is MipChannelIdentifier::GNSS_SIGNAL_ID</div></div>",2518:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">ID definitions when Type is MipChannelIdentifier::GNSS_RF_BAND</div></div>",2523:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2523\" class=\"NDPrototype NoParameterForm\">MipChannelIdentifier()</div><div class=\"TTSummary\">Default constructor</div></div>",2524:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2524\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipChannelIdentifier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">identifierType,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">) : m_type(identifierType), m_id(id)</td></tr></table></div><div class=\"TTSummary\">Construct MipChannelIdentifier object with specified MipChannelIdentifier::Type and ID values.</div></div>",2525:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2525\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipChannelIdentifier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">identifierType,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">id,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">specifier</td></tr></table></td><td class=\"PAfterParameters\">) : m_type(identifierType), m_id(id), m_specifier(specifier)</td></tr></table></div><div class=\"TTSummary\">Construct MipChannelIdentifier object with specified MipChannelIdentifier::Type and ID values.</div></div>",2526:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2526\" class=\"NDPrototype NoParameterForm\">Type identifierType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Returns the MipChannelIdentifier::Type specifier of this identifier.</div></div>",2527:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2527\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> id() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Returns the identifier value.</div></div>",2528:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2528\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasSpecifier() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Indicates whether this identifier has an optional additional specifier.</div></div>",2529:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2529\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> specifier() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Returns the optional additional specifier value.</div></div>",2530:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2530\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">string</span> name(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">standardizedFormat&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Returns the string representation of this identifier based on type and value.</div></div>",2531:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2531\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> hasSpecifier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">specifierName</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Indicates whether this identifier has an optional additional specifier.&nbsp; Parameters: specifierName - string reference that is set to the specifier name if found</div></div>",2532:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of MipChannelIdentifier values, used to assign additional identifiers to a MipDataPoint</div></div>"});