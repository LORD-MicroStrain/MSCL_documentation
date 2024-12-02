NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/Packets/MipSharedDataFields.h",{333:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype333\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipSharedDataFields</div></div></div><div class=\"TTSummary\">Object to more easily access shared data field information within a MipDataPacket</div></div>",334:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The event source value is the event trigger ID (1-based index) that caused the data packet to be output.&nbsp; If the event source is not an event trigger ID it will be one of the following:</div></div>",337:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype337\" class=\"NDPrototype NoParameterForm\">MipSharedDataFields()</div><div class=\"TTSummary\">Create an empty MipSharedDataFields object</div></div>",338:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype338\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasEventSource() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Event Source field</div></div>",339:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype339\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> eventSource() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Event Source value for the packet</div></div>",340:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype340\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasTicks() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Ticks field</div></div>",341:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype341\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> ticks() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Ticks value for the packet</div></div>",342:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype342\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasDeltaTicks() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Delta Ticks field</div></div>",343:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype343\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> deltaTicks() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Delta Ticks value for the packet</div></div>",344:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype344\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasGpsTimestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the GPS Timestamp field</div></div>",345:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype345\" class=\"NDPrototype NoParameterForm\">Timestamp gpsTimestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the GPS Timestamp value for the packet.&nbsp; Note: On Gen 7 products and later this will generally be the same value as MipDataPacket::deviceTimestamp()</div></div>",346:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype346\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> gpsTimestampValid() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the GPS Timestamp value for the packet is valid.&nbsp; Note: On Gen 7 products and later this will generally be the same value as MipDataPacket::deviceTimestamp()</div></div>",347:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype347\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasDeltaTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Delta Time field</div></div>",348:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype348\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> deltaTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Delta Time value for the packet</div></div>",349:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype349\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasReferenceTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Reference Timestamp (nanoseconds since startup) field</div></div>",350:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype350\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> referenceTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Reference Timestamp (nanoseconds since startup) for the packet</div></div>",351:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype351\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasDeltaReferenceTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Delta Reference Timestamp (nanoseconds since last output) field</div></div>",352:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype352\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> deltaReferenceTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Delta Reference Timestamp (nanoseconds since last output) for the packet</div></div>",353:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype353\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasExternalTimestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the External Timestamp field</div></div>",354:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype354\" class=\"NDPrototype NoParameterForm\">Timestamp externalTimestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the External Timestamp value for the packet.</div></div>",355:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype355\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> externalTimestampValid() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the External Timestamp value for the packet is valid.</div></div>",356:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype356\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasDeltaExternalTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the packet contains the Delta External Time field</div></div>",357:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets the Delta External Time value for the packet.</div></div>",358:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype358\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> deltaExternalTimeValid() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether the Delta External Time value for the packet is valid.</div></div>",359:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype359\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> MipDataPoint&amp; <span class=\"SHKeyword\">get</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName\">field,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelQualifier&nbsp;</td><td class=\"PName\">qualifier&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">MipTypes::CH_UNKNOWN</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Get the shared field MipDataPoint with the specified field and qualifier.&nbsp; If qualifier is MipTypes::CH_UNKNOWN and there is only one data point for the field, that field will be returned.&nbsp; Note: most users will not need to use this function</div></div>"});