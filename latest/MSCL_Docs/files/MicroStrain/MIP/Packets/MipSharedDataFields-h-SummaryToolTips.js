NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/Packets/MipSharedDataFields.h",{2800:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2800\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipSharedDataFields</div></div></div><div class=\"TTSummary\">Object to more easily access shared data field information within a MipDataPacket</div></div>",2802:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The event source value is the event trigger ID (1-based index) that caused the data packet to be output.&nbsp; If the event source is not an event trigger ID it will be one of the following:</div></div>",2806:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2806\" class=\"NDPrototype NoParameterForm\">std::map&lt;MipTypes::ChannelField, std::map&lt;MipTypes::ChannelQualifier, MipDataPoint&gt;&gt; m_sharedDataPoints</div><div class=\"TTSummary\">Holds a map of shared data field MipDataPoints, added while parsing fields in the packet in MipDataPacket::parsePointsInField()</div></div>",2808:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2808\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addPoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td></td><td class=\"PName last\">field,</td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelQualifier&nbsp;</td><td></td><td class=\"PName last\">qualifier,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">MipDataPoint&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">dataPoint</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a shared data point at the specified field and qualifier</div></div>",2809:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2809\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> has(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName\">field,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelQualifier&nbsp;</td><td class=\"PName\">qualifier&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">MipTypes::CH_UNKNOWN</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether a data point has been added for the specified field and qualifier Note: returns true if qualifier is CH_UNKNOWN and there is only one data point for the specified field</div></div>",2810:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2810\" class=\"NDPrototype NoParameterForm\">MipSharedDataFields()</div><div class=\"TTSummary\">Create an empty MipSharedDataFields object</div></div>",2811:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2811\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasEventSource() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Event Source field</div></div>",2812:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2812\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> eventSource() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Event Source value for the packet</div></div>",2813:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2813\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasTicks() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Ticks field</div></div>",2814:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2814\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> ticks() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Ticks value for the packet</div></div>",2815:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2815\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasDeltaTicks() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Delta Ticks field</div></div>",2816:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2816\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> deltaTicks() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Delta Ticks value for the packet</div></div>",2817:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2817\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasGpsTimestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the GPS Timestamp field</div></div>",2818:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2818\" class=\"NDPrototype NoParameterForm\">Timestamp gpsTimestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the GPS Timestamp value for the packet.&nbsp; Note: On Gen 7 products and later this will generally be the same value as MipDataPacket::deviceTimestamp()</div></div>",2819:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2819\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> gpsTimestampValid() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the GPS Timestamp value for the packet is valid.&nbsp; Note: On Gen 7 products and later this will generally be the same value as MipDataPacket::deviceTimestamp()</div></div>",2820:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2820\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasDeltaTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Delta Time field</div></div>",2821:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2821\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> deltaTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Delta Time value for the packet</div></div>",2822:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2822\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasReferenceTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Reference Timestamp (nanoseconds since startup) field</div></div>",2823:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2823\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> referenceTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Reference Timestamp (nanoseconds since startup) for the packet</div></div>",2824:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2824\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasDeltaReferenceTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Delta Reference Timestamp (nanoseconds since last output) field</div></div>",2825:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2825\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> deltaReferenceTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Delta Reference Timestamp (nanoseconds since last output) for the packet</div></div>",2826:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2826\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasExternalTimestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the External Timestamp field</div></div>",2827:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2827\" class=\"NDPrototype NoParameterForm\">Timestamp externalTimestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the External Timestamp value for the packet.</div></div>",2828:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2828\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> externalTimestampValid() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the External Timestamp value for the packet is valid.</div></div>",2829:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2829\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasDeltaExternalTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Delta External Time field</div></div>",2830:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets the Delta External Time value for the packet.</div></div>",2831:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2831\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> deltaExternalTimeValid() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the Delta External Time value for the packet is valid.</div></div>",2832:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2832\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> MipDataPoint&amp; <span class=\"SHKeyword\">get</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName\">field,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelQualifier&nbsp;</td><td class=\"PName\">qualifier&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">MipTypes::CH_UNKNOWN</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Get the shared field MipDataPoint with the specified field and qualifier.&nbsp; If qualifier is MipTypes::CH_UNKNOWN and there is only one data point for the field, that field will be returned.&nbsp; Note: most users will not need to use this function</div></div>"});