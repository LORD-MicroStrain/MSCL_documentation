NDSummary.OnToolTipsLoaded("CClass:MipChannelIdentifier",{3809:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3809\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipChannelIdentifier</div></div></div><div class=\"TTSummary\">A single additional identifier for a MipDataPoint. Contains a uint value with an identifier type specifier.</div></div>",3811:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Identifier type options, indicates what the MipChannelIdentifier::id value represents.</div></div>",3820:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">ID definitions when Type is MipChannelIdentifier::AIDING_MEASUREMENT_TYPE</div></div>",3836:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">ID definitions when Type is MipChannelIdentifier::GNSS_CONSTELLATION</div></div>",3842:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">ID definitions when Type is MipChannelIdentifier::GNSS_SIGNAL_ID</div></div>",3908:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">ID definitions when Type is MipChannelIdentifier::GNSS_RF_BAND</div></div>",3913:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A typedef for a MipChannelIdentifier::Type, uint32 pair.</div></div>",3915:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3915\" class=\"NDPrototype NoParameterForm\">MipChannelIdentifier()</div><div class=\"TTSummary\">Default constructor</div></div>",3916:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3916\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipChannelIdentifier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">identifierType,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">) : m_type(identifierType), m_id(id)</td></tr></table></div><div class=\"TTSummary\">Construct MipChannelIdentifier object with specified MipChannelIdentifier::Type and ID values.</div></div>",3917:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3917\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipChannelIdentifier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName last\">identifierType,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">id,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">specifier</td></tr></table></td><td class=\"PAfterParameters\">) : m_type(identifierType), m_id(id), m_specifier(specifier)</td></tr></table></div><div class=\"TTSummary\">Construct MipChannelIdentifier object with specified MipChannelIdentifier::Type and ID values.</div></div>",3918:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3918\" class=\"NDPrototype NoParameterForm\">Type identifierType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Returns the MipChannelIdentifier::Type specifier of this identifier.</div></div>",3919:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3919\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> id() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Returns the identifier value.</div></div>",3920:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3920\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasSpecifier() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Indicates whether this identifier has an optional additional specifier.</div></div>",3921:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3921\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> specifier() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Returns the optional additional specifier value.</div></div>",3922:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3922\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">string</span> name(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">standardizedFormat&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Returns the string representation of this identifier based on type and value.</div></div>",3924:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3924\" class=\"NDPrototype NoParameterForm\">Type m_type</div><div class=\"TTSummary\">The MipChannelIdentifier::Type indicator of this identifier.</div></div>",3925:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3925\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_id</div><div class=\"TTSummary\">The value of this identifier.</div></div>",3926:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3926\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_specifier</div><div class=\"TTSummary\">An option additional specifier for this identifier.</div></div>",3928:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3928\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> hasSpecifier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">specifierName</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Indicates whether this identifier has an optional additional specifier.&nbsp; Parameters: specifierName - string reference that is set to the specifier name if found</div></div>",3930:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">A map of MipChannelIdentifier::Type values and their string labels.</div></div>",3931:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">A map of MipChannelIdentifier::TypeId values and their string labels.</div></div>",3932:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">A map of &lt;MipChannelIdentifier::SpecifierId&gt; values and their string labels.</div></div>",3934:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of MipChannelIdentifier values, used to assign additional identifiers to a MipDataPoint</div></div>"});