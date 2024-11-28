NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/MipDataPoint.h",{3282:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3282\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipDataPoint</div></div></div><div class=\"TTSummary\">Represents a single Inertial Data Point (Extends from DataPoint)</div></div>",3284:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3284\" class=\"NDPrototype NoParameterForm\">MipDataPoint()</div><div class=\"TTSummary\">Creates a MipDataPoint object with default, unknown, values</div></div>",3285:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3285\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipDataPoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelQualifier&nbsp;</td><td class=\"PName last\">qualifier,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ValueType&nbsp;</td><td class=\"PName last\">storedAsType,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">anyType&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipDataPoint object</div></div>",3286:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3286\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipDataPoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelQualifier&nbsp;</td><td class=\"PName last\">qualifier,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">MipChannelIdentifiers&nbsp;</td><td class=\"PName last\">addlIds,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ValueType&nbsp;</td><td class=\"PName last\">storedAsType,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">anyType&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipDataPoint object with additional identifier values that describe the point</div></div>",3287:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3287\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipDataPoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelQualifier&nbsp;</td><td class=\"PName last\">qualifier,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ValueType&nbsp;</td><td class=\"PName last\">storedAsType,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">anyType&nbsp;</td><td class=\"PName last\">value,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">valid</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipDataPoint object with a valid flag that describes the point</div></div>",3288:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3288\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipDataPoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelQualifier&nbsp;</td><td class=\"PName last\">qualifier,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">MipChannelIdentifiers&nbsp;</td><td class=\"PName last\">addlIds,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ValueType&nbsp;</td><td class=\"PName last\">storedAsType,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">anyType&nbsp;</td><td class=\"PName last\">value,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">valid</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipDataPoint object with additional identifier values and a valid flag that describes the point</div></div>",3290:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The MipTypes::ChannelField of the data point.</div></div>",3291:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3291\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelQualifier m_qualifier</div><div class=\"TTSummary\">The MipTypes::ChannelQualifier of the data point.</div></div>",3292:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3292\" class=\"NDPrototype NoParameterForm\">MipChannelIdentifiers m_addlIdentifiers</div><div class=\"TTSummary\">A MipChannelIdentifiers list of additional identifiers for this data point ie GNSS constellation and satellite ID</div></div>",3293:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3293\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_hasValidFlag</div><div class=\"TTSummary\">Whether the data point was transmitted with a valid flag.&nbsp; If the point wasn\'t transmitted with a flag, m_valid will be set to true.</div></div>",3294:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3294\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_valid</div><div class=\"TTSummary\">Whether the data point is valid(true) or invalid(false).</div></div>",3296:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3296\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelField field() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Channel Field that describes the full MIP &quot;Field&quot; that the data point came in.&nbsp; This is a combination of a MIP &quot;Descriptor ID&quot;, and a MIP &quot;Field ID&quot;.</div></div>",3297:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3297\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelQualifier qualifier() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Channel Qualifier that describes the specific channel for the data point.&nbsp; This, combined with the MipTypes::ChannelField, is a fully unique identifier for the channel.</div></div>",3298:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3298\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasAddlIdentifiers() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Indicates whether or not this data point has additional data identifiers.</div></div>",3299:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3299\" class=\"NDPrototype NoParameterForm\">MipChannelIdentifiers addlIdentifiers() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the additional identifier values assigned to this data point.</div></div>",3300:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3300\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasValidFlag() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the data point had a valid flag transmitted in the data packet.&nbsp; Note: if hasValidFlag returns false, valid will always return true.</div></div>",3301:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3301\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> valid() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the data point is valid(true) or invalid(false).&nbsp; Note: if a data point was not transmitted with a flag representing its validity, this will still return true. To determine if the data point had a flag in the data packet, use hasValidFlag.</div></div>",3302:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3302\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">string</span> channelName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">includeAddlIds&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">consolidatedFormat&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">false</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the name of the channel.&nbsp; This is the universal channel name that should be used for uploading to SensorCloud.</div></div>",3304:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a vector of MipDataPoint objects</div></div>"});