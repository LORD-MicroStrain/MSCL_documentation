NDSummary.OnToolTipsLoaded("CClass:MipDataPoint",{2140:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2140\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipDataPoint</div></div></div><div class=\"TTSummary\">Represents a single Inertial Data Point (Extends from DataPoint)</div></div>",2141:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2141\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelField field() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Channel Field that describes the full MIP &quot;Field&quot; that the data point came in.&nbsp; This is a combination of a MIP &quot;Descriptor ID&quot;, and a MIP &quot;Field ID&quot;.</div></div>",2142:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2142\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelQualifier qualifier() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Channel Qualifier that describes the specific channel for the data point.&nbsp; This, combined with the MipTypes::ChannelField, is a fully unique identifier for the channel.</div></div>",2143:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2143\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasAddlIdentifiers() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Indicates whether or not this data point has additional data identifiers.</div></div>",2144:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2144\" class=\"NDPrototype NoParameterForm\">MipChannelIdentifiers addlIdentifiers() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the additional identifier values assigned to this data point.</div></div>",2145:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2145\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasValidFlag() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the data point had a valid flag transmitted in the data packet.&nbsp; Note: if hasValidFlag returns false, valid will always return true.</div></div>",2146:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2146\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> valid() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the data point is valid(true) or invalid(false).&nbsp; Note: if a data point was not transmitted with a flag representing its validity, this will still return true. To determine if the data point had a flag in the data packet, use hasValidFlag.</div></div>",2147:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2147\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::<span class=\"SHKeyword\">string</span> channelName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">includeAddlIds&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">consolidatedFormat&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">false</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the name of the channel.&nbsp; This is the universal channel name that should be used for uploading to SensorCloud.</div></div>",2148:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a vector of MipDataPoint objects</div></div>"});