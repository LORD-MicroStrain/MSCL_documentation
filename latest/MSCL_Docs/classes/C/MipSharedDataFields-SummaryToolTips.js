NDSummary.OnToolTipsLoaded("CClass:MipSharedDataFields",{3019:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3019\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipSharedDataFields</div></div></div><div class=\"TTSummary\">Object to more easily access shared data field information within a MipDataPacket</div></div>",3021:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The event source value is the event trigger ID (1-based index) that caused the data packet to be output.&nbsp; If the event source is not an event trigger ID it will be one of the following:</div></div>",3025:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3025\" class=\"NDPrototype NoParameterForm\">std::map&lt;MipTypes::ChannelField, std::map&lt;MipTypes::ChannelQualifier, MipDataPoint&gt;&gt; m_sharedDataPoints</div><div class=\"TTSummary\">Holds a map of shared data field MipDataPoints, added while parsing fields in the packet in MipDataPacket::parsePointsInField()</div></div>",3027:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3027\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addPoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td></td><td class=\"PName last\">field,</td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelQualifier&nbsp;</td><td></td><td class=\"PName last\">qualifier,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">MipDataPoint&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">dataPoint</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a shared data point at the specified field and qualifier</div></div>",3028:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3028\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> has(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName\">field,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelQualifier&nbsp;</td><td class=\"PName\">qualifier&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">MipTypes::CH_UNKNOWN</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether a data point has been added for the specified field and qualifier Note: returns true if qualifier is CH_UNKNOWN and there is only one data point for the specified field</div></div>",3029:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3029\" class=\"NDPrototype NoParameterForm\">MipSharedDataFields()</div><div class=\"TTSummary\">Create an empty MipSharedDataFields object</div></div>",3030:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3030\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasEventSource() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Event Source field</div></div>",3031:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3031\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> eventSource() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Event Source value for the packet</div></div>",3032:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3032\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasTicks() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Ticks field</div></div>",3033:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3033\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> ticks() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Ticks value for the packet</div></div>",3034:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3034\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasDeltaTicks() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Delta Ticks field</div></div>",3035:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3035\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> deltaTicks() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Delta Ticks value for the packet</div></div>",3036:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3036\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasGpsTimestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the GPS Timestamp field</div></div>",3037:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3037\" class=\"NDPrototype NoParameterForm\">Timestamp gpsTimestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the GPS Timestamp value for the packet.&nbsp; Note: On Gen 7 products and later this will generally be the same value as MipDataPacket::deviceTimestamp()</div></div>",3038:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3038\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> gpsTimestampValid() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the GPS Timestamp value for the packet is valid.&nbsp; Note: On Gen 7 products and later this will generally be the same value as MipDataPacket::deviceTimestamp()</div></div>",3039:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3039\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasDeltaTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Delta Time field</div></div>",3040:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3040\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> deltaTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Delta Time value for the packet</div></div>",3041:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3041\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasReferenceTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Reference Timestamp (nanoseconds since startup) field</div></div>",3042:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3042\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> referenceTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Reference Timestamp (nanoseconds since startup) for the packet</div></div>",3043:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3043\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasDeltaReferenceTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Delta Reference Timestamp (nanoseconds since last output) field</div></div>",3044:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3044\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> deltaReferenceTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Delta Reference Timestamp (nanoseconds since last output) for the packet</div></div>",3045:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3045\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasExternalTimestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the External Timestamp field</div></div>",3046:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3046\" class=\"NDPrototype NoParameterForm\">Timestamp externalTimestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the External Timestamp value for the packet.</div></div>",3047:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3047\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> externalTimestampValid() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the External Timestamp value for the packet is valid.</div></div>",3048:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3048\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasDeltaExternalTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Delta External Time field</div></div>",3049:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets the Delta External Time value for the packet.</div></div>",3050:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3050\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> deltaExternalTimeValid() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the Delta External Time value for the packet is valid.</div></div>",3051:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3051\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> MipDataPoint&amp; <span class=\"SHKeyword\">get</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName\">field,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelQualifier&nbsp;</td><td class=\"PName\">qualifier&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">MipTypes::CH_UNKNOWN</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Get the shared field MipDataPoint with the specified field and qualifier.&nbsp; If qualifier is MipTypes::CH_UNKNOWN and there is only one data point for the field, that field will be returned.&nbsp; Note: most users will not need to use this function</div></div>"});