NDSummary.OnToolTipsLoaded("CClass:WirelessDataPoint",{3228:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3228\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessDataPoint</div></div></div><div class=\"TTSummary\">Represents a single channel\'s data point within a sweep</div></div>",3229:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3229\" class=\"NDPrototype NoParameterForm\">WirelessChannel::ChannelId channelId() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessChannel::ChannelId associated with the data point.</div></div>",3230:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3230\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> channelNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the channel number associated with the data point (ch1 = 1, ch8 = 8), when applicable.&nbsp; Otherwise, this will return a 0 (for example, a Structural Health data point doesn\'t relate an actual channel on the Wireless Node, so this will be a 0).&nbsp; This number can be used to relate to the Node\'s WirelessChannel in the map returned from calling &lt;WirelessNode::channels&gt;().</div></div>",3231:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3231\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> std::<span class=\"SHKeyword\">string</span>&amp; channelName() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the name of the channel.&nbsp; This is the universal channel name that should be used for uploading to SensorCloud.</div></div>",3232:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A typedef for a collection (vector) of WirelessDataPoints</div></div>"});