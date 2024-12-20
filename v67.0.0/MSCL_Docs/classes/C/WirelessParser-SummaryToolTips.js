NDSummary.OnToolTipsLoaded("CClass:WirelessParser",{7796:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7796\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessParser</div></div></div><div class=\"TTSummary\">Parses all wireless data and stores it in a corresponding container</div></div>",7805:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7805\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessParser(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">WirelessPacketCollector&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packetCollector,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td></td><td class=\"PName last\">responseCollector,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">RawBytePacketCollector&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">rawBytePacketCollector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor for WirelessParser</div></div>",7807:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A typedef for a map of &lt;DuplicateCheckKey&gt;s to a timestamp or tick value to check for packet duplication</div></div>",7809:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7809\" class=\"NDPrototype NoParameterForm\">WirelessPacketCollector&amp; m_packetCollector</div><div class=\"TTSummary\">The WirelessPacketCollector associated with this parser and it\'s parent base station</div></div>",7810:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7810\" class=\"NDPrototype NoParameterForm\">std::weak_ptr&lt;ResponseCollector&gt; m_responseCollector</div><div class=\"TTSummary\">The ResponseCollector associated with this parser and it\'s parent base station</div></div>",7811:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7811\" class=\"NDPrototype NoParameterForm\">RawBytePacketCollector&amp; m_rawBytePacketCollector</div><div class=\"TTSummary\">The RawBytePacketCollector associated with this parser and its parent device</div></div>",7812:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7812\" class=\"NDPrototype NoParameterForm\">DuplicateCheckMap m_lastPacketMap</div><div class=\"TTSummary\">A DuplicateCheckMap containing node addresses and their uniqueId values</div></div>",7814:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7814\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> processPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td></td><td class=\"PName last\">lastReadPos</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a WirelessPacket, adds it to the data container if it is a data packet, or adds it to the appropriate handler depending on the packet type</div></div>",7815:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7815\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> findMatchingResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a DataBuffer of bytes and checks if the packet collector has any responses it is waiting on.&nbsp; If it does, and the bytes match the expected response, the bytes are &quot;given&quot; to the packet collector and the read position is moved.</div></div>",7816:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7816\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> findMatchingResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td></td><td class=\"PName last\">lastReadPos</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a WirelessPacket and checks if the packet collector has any responses it is waiting on.&nbsp; If it does, and the packet matches the expected response, the packet is &quot;given&quot; to the packet collector.</div></div>",7817:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7817\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> isDuplicate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks whether the passed in packet is a duplicate of the previous packet that came in.</div></div>",7818:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7818\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessParser::ParsePacketResult parseAsPacket_ASPP_v1(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td></td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a DataBuffer that has had its read position moved to the start of a packet and verifies that the bytes form a valid ASPP v1 packet.</div></div>",7819:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7819\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessParser::ParsePacketResult parseAsPacket_ASPP_v2(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td></td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a DataBuffer that has had its read position moved to the start of a packet and verifies that the bytes form a valid ASPP v2 packet.</div></div>",7820:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7820\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessParser::ParsePacketResult parseAsPacket_ASPP_v3(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td></td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a DataBuffer that has had its read position moved to the start of a packet and verifies that the bytes form a valid ASPP v3 packet.</div></div>",7821:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7821\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessParser::ParsePacketResult parseAsPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td></td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a DataBuffer that has had its read position moved to the start of a packet and verifies that the bytes form a valid ASPP v1 or v2 packet.</div></div>",7822:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7822\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessPacket::PacketType findPacketInBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td></td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks for packets after the current bytes buffer\'s read position (starting at the next byte, not the current one).&nbsp; If a packet is found, the packet is processed and the byte buffer\'s read position is moved.&nbsp; If a packet is not found, nothing changes in the byte buffer</div></div>",7823:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7823\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td></td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a DataBuffer and finds the next ASPP Wireless Packet, or the next command response that is expected by the base station.</div></div>",7824:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7824\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const bool operator</span> &lt; (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">const WirelessParser::DuplicateCheckKey&amp; key1,&nbsp;</td></tr><tr><td class=\"PName first last\">const WirelessParser::DuplicateCheckKey&amp; key2</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Less than operator for &lt;WirelessPareser::DuplicateCheckKey&gt; so that it can be used in a map.</div></div>"});