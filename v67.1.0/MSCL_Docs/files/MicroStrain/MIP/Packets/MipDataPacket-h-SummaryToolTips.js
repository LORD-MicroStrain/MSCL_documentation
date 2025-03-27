NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/Packets/MipDataPacket.h",{2229:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2229\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipDataPacket</div></div></div><div class=\"TTSummary\">A Mip Data Packet that contains both valid and invalid data from a MIP Device.</div></div>",2231:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2231\" class=\"NDPrototype NoParameterForm\">MipDataPacket()</div><div class=\"TTSummary\">Creates a default constructed MipDataPacket</div></div>",2232:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2232\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> MipDataPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipDataPacket object</div></div>",2234:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2234\" class=\"NDPrototype NoParameterForm\">MipDataFields m_dataFields</div><div class=\"TTSummary\">The MipDataFields that are contained within this packet</div></div>",2235:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2235\" class=\"NDPrototype NoParameterForm\">MipDataPoints m_points</div><div class=\"TTSummary\">The MipDataPoints within this packet</div></div>",2236:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2236\" class=\"NDPrototype NoParameterForm\">MipSharedDataFields m_sharedFields</div><div class=\"TTSummary\">Accessors for the shared field information found within this packet</div></div>",2237:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2237\" class=\"NDPrototype NoParameterForm\">Timestamp m_collectedTime</div><div class=\"TTSummary\">The Timestamp of when this packet was received</div></div>",2238:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2238\" class=\"NDPrototype NoParameterForm\">Timestamp m_deviceTime</div><div class=\"TTSummary\">The timestamp that was provided by the Node in the data packet Note: this is being deprecated for Gen 7 devices and later, use shared().gpsTimestamp(), externalTimestamp() instead.</div></div>",2239:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2239\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_hasDeviceTime</div><div class=\"TTSummary\">Whether the device timestamp was included in the data packet.&nbsp; Note: this is being deprecated for Gen 7 devices and later, use shared().hasGpsTimestamp(), externalTimestamp() instead.</div></div>",2240:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2240\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_deviceTimeValid</div><div class=\"TTSummary\">Whether the device timestamp is valid or not (based on flags and/or it being a reasonable timestamp) Note: this is being deprecated for Gen 7 devices and later, use shared().gpsTimestampValid(), externalTimestampValid() instead.</div></div>",2241:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2241\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_deviceTimeFlags</div><div class=\"TTSummary\">The flags value that the device timestamp was transmitted with.</div></div>",2243:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2243\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseDataFields()</div><div class=\"TTSummary\">Parses the passed in MipPacket for all the field information and adds a data field to the MipDataFields container Also parses out all the MipDataPoints in the fields that were created and adds them to m_points</div></div>",2244:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2244\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> parsePointsInField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parses an MipDataField for MipDataPoints and puts them into m_points</div></div>",2245:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2245\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> parseTimeStamp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parses a MIP timestamp field, and sets the device time member variables.</div></div>",2246:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2246\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> timestampWithinRange(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Timestamp&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">timestamp</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if the given timestamp is within range of the collectedTimestamp.</div></div>",2247:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2247\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipDataPoints&amp; data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets all the MipDataPoints that are contained within this packet.</div></div>",2248:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2248\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipSharedDataFields&amp; shared() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the MipSharedDataFields object that makes the shared field information within this packet more easily accessible.</div></div>",2249:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2249\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; collectedTimestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp representing when the packet was collected by MSCL.</div></div>",2250:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2250\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; deviceTimestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp which was transmitted in the Mip Data Packet as a channel field.&nbsp; Note: This will return a Timestamp of 0 if deviceTimeValid returns false.</div></div>",2251:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2251\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasDeviceTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Whether the data packet had a Timestamp field included in it.</div></div>",2252:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2252\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> deviceTimeValid() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Whether the Timestamp field sent from the device is valid or not.</div></div>",2253:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2253\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> deviceTimeFlags() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the timestamp flags that were transmitted in the Mip Data Packet.&nbsp; Note: This will return 0 if deviceTimeValid returns false.</div></div>",2255:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a vector of MipDataPacket objects.</div></div>"});