NDSummary.OnToolTipsLoaded("CClass:MipTypes",{1145:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains enumeration/types for various MIP information</div></div>",1146:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all the different data classes of MIP data.</div></div>",1158:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all the different types/categories of MIP commands and data.</div></div>",1165:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for enable or disable of data.</div></div>",1168:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums to represent different time categories.</div></div>",1171:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all of the different MIP commands.</div></div>",1322:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all of the different MIP Channel Field IDs.</div></div>",1649:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">The minimum descriptor that marks the start of available shared data field descriptors. If a field descriptor is above 0xD0 it is shared.</div></div>",1650:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for different MIP Channel Qualifiers.&nbsp; This combined with the ChannelField produces a unique identifier for each individual channel that is collected.</div></div>",1779:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of ChannelField enums.</div></div>",1780:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of Command enums.</div></div>",1781:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of DataClass enums.</div></div>",1782:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A ChannelQualifier, int pair indicating the index value of the qualifier in a channel field.</div></div>",1783:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A list of ChannelIndex values</div></div>",1784:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A map of ChannelField values and their associated ChannelIndices</div></div>",1785:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1785\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> channelName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"PType first\">ChannelQualifier&nbsp;</td><td class=\"PName last\">qualifier</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the name of the specified &lt;ChannelId&gt;.&nbsp; This is the universal channel name that should be used for uploading to SensorCloud.</div></div>",1786:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1786\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipChannelFields getChannelFields_allDataClasses(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Get a list of ChannelFields representing the same descriptor/channel field across all GNSS data classes</div></div>",1787:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1787\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ChannelField getChannelField_baseDataClass(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the ChannelField representing the provided channel field\'s equivalent in the original GNSS data class (0x81)</div></div>",1788:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1788\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ChannelField getChannelField_toDataClass(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField,</td></tr><tr><td class=\"PType first\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the ChannelField representing the provided channel field\'s equivalent in the specified DataClass</div></div>",1789:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1789\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> getChannelNamePrependText(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the text to prepend the channel name to distinguish between different GNSS data classes</div></div>",1790:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1790\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> getChannelNameAppendText(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the text to append to the channel name to distinguish between different shared data fields</div></div>",1791:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1791\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> isGnssChannelField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks whether the provided ChannelField is within a GNSS data set.</div></div>",1792:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1792\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> isSharedChannelField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks whether the provided ChannelField is a shared field amongst all inertial data sets.</div></div>",1793:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1793\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ChannelFieldQualifiers channelFieldQualifiers(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipChannelFields&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">fields</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets a map of ChannelField values with all associated ChannelQualifier values and their index within the field.</div></div>",1794:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1794\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ChannelQualifier channelFieldQualifier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the ChannelQualifier of the ChannelField for the specified index.</div></div>",1795:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1795\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint8</span> channelFieldQualifierIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"PType first\">ChannelQualifier&nbsp;</td><td class=\"PName last\">qualifier</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the index of the ChannelQualifier in the ChannelField.</div></div>"});