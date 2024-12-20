NDSummary.OnToolTipsLoaded("CClass:MipTypes",{3676:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains enumeration/types for various MIP information</div></div>",3678:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all the different data classes of MIP data.</div></div>",3690:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all the different types/categories of MIP commands and data.</div></div>",3697:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for enable or disable of data.</div></div>",3700:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums to represent different time categories.</div></div>",3703:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all of the different MIP commands.</div></div>",3854:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for all of the different MIP Channel Field IDs.</div></div>",4182:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">The minimum descriptor that marks the start of available shared data field descriptors. If a field descriptor is above 0xD0 it is shared.</div></div>",4184:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The enums for different MIP Channel Qualifiers.&nbsp; This combined with the ChannelField produces a unique identifier for each individual channel that is collected.</div></div>",4313:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of ChannelField enums.</div></div>",4314:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of Command enums.</div></div>",4315:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of DataClass enums.</div></div>",4316:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A ChannelQualifier, int pair indicating the index value of the qualifier in a channel field.</div></div>",4317:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A list of ChannelIndex values</div></div>",4318:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A map of ChannelField values and their associated ChannelIndices</div></div>",4319:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A typedef for a ChannelField, ChannelQualifier pair.</div></div>",4321:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4321\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DataClass channelFieldToDataClass(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName last\">channelField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the DataClass for a MipTypes::ChannelField.</div></div>",4322:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4322\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> channelName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"PType first\">ChannelQualifier&nbsp;</td><td class=\"PName last\">qualifier</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the name of the specified ChannelId.&nbsp; This is the universal channel name that should be used for uploading to SensorCloud.</div></div>",4323:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4323\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MipChannelFields getChannelFields_allDataClasses(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Get a list of ChannelFields representing the same descriptor/channel field across all GNSS data classes</div></div>",4324:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4324\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ChannelField getChannelField_baseDataClass(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the ChannelField representing the provided channel field\'s equivalent in the original GNSS data class (0x81)</div></div>",4325:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4325\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ChannelField getChannelField_toDataClass(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField,</td></tr><tr><td class=\"PType first\">DataClass&nbsp;</td><td class=\"PName last\">dataClass</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the ChannelField representing the provided channel field\'s equivalent in the specified DataClass</div></div>",4326:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4326\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> getChannelNamePrependText(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the text to prepend the channel name to distinguish between different GNSS data classes</div></div>",4327:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4327\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> getChannelNameAppendText(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the text to append to the channel name to distinguish between different shared data fields</div></div>",4328:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4328\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> isGnssChannelField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks whether the provided ChannelField is within a GNSS data set.</div></div>",4329:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4329\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> isSharedChannelField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">chField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks whether the provided ChannelField is a shared field amongst all inertial data sets.</div></div>",4330:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4330\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ChannelFieldQualifiers channelFieldQualifiers(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipChannelFields&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">fields</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets a map of ChannelField values with all associated ChannelQualifier values and their index within the field.</div></div>",4331:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4331\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ChannelQualifier channelFieldQualifier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the ChannelQualifier of the ChannelField for the specified index.</div></div>",4332:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4332\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint8</span> channelFieldQualifierIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"PType first\">ChannelQualifier&nbsp;</td><td class=\"PName last\">qualifier</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the index of the ChannelQualifier in the ChannelField.</div></div>",4333:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4333\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ChannelIndex findChannelIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelField&nbsp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"PType first\">ChannelQualifier&nbsp;</td><td class=\"PName last\">qualifier,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Lookup channel index for given ChannelField based on either qualifier or index If qualifier known, pass in index 0 If index known, pass in qualifier UNKNOWN</div></div>",4335:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">An unordered_map mapping each ChannelId to its respective name (universal SensorCloud name).</div></div>",4336:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">A map mapping each ChannelField\'s ChannelQualifier to its respective index.</div></div>",4338:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4338\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> std::vector&lt;DataClass&gt; GNSS_DATA_CLASSES()</div><div class=\"TTSummary\">vector of DataClass values containing all GNSS data class descriptors that have the same field descriptors.&nbsp; was a const but ran into static initialization order issues with registering GNSS field parsers.</div></div>",4339:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4339\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> std::vector&lt;DataClass&gt; INERTIAL_DATA_CLASSES()</div><div class=\"TTSummary\">vector of DataClass values containing all inertial data class descriptors that have the same field descriptors.&nbsp; was a const but ran into static initialization order issues with registering shared field parsers.</div></div>"});