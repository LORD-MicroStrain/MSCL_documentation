NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/MipParser.h",{3110:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3110\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipParser</div></div></div><div class=\"TTSummary\">Parsers all MIP data and stores it in a corresponding container</div></div>",3112:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3112\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipParser(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">MipPacketCollector&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">packetCollector,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td></td><td class=\"PName last\">responseCollector,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">RawBytePacketCollector&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">rawBytePacketCollector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructor for MipParser</div></div>",3114:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3114\" class=\"NDPrototype NoParameterForm\">MipPacketCollector* m_packetCollector</div><div class=\"TTSummary\">The MipPacketCollector associated with this parser and its parent device</div></div>",3115:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3115\" class=\"NDPrototype NoParameterForm\">std::weak_ptr&lt;ResponseCollector&gt; m_responseCollector</div><div class=\"TTSummary\">The ResponseCollector associated with this parser and its parent device</div></div>",3116:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3116\" class=\"NDPrototype NoParameterForm\">RawBytePacketCollector* m_rawBytePacketCollector</div><div class=\"TTSummary\">The RawBytePacketCollector associated with this parser and its parent device</div></div>",3118:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3118\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> processPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes an MipPacket, adds it to the data container if it is a data packet, or adds it to the appropriate handler depending on the packet type</div></div>",3119:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3119\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> findMatchingResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes an MipPacket and checks if the packet collector has any responses it is waiting on.&nbsp; If it does, and the packet matches the expected response, the packet is &quot;given&quot; to the packet collector.</div></div>",3120:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3120\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipDataFields parseFields(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parses the MipDataFields out of the MipPacket and returns them in a container.</div></div>",3121:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3121\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipParseResult parseAsPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"PType first\">MipPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a DataBuffer that has had its read position moved to the start of a packet and verifies that the bytes form a valid MIP packet</div></div>",3122:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3122\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> findPacketInBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks for packets after the current bytes buffer\'s read position (starting at the next byte, not the current one).&nbsp; If a packet is found, the packet is processed and the byte buffer\'s read position is moved.&nbsp; If a packet is not found, nothing changes in the byte buffer</div></div>",3123:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3123\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a DataBuffer and finds the next MIP Packet, or the next command response that is expected by the base station.</div></div>",3124:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3124\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint8</span> getCommandDescriptor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Bytes&nbsp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a Bytes and finds the command descriptor.</div></div>"});