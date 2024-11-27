NDSummary.OnToolTipsLoaded("CClass:RawBytePacketCollector",{225:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype225\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">RawBytePacketCollector</div></div></div><div class=\"TTSummary\">Class that sets/matches expected responses, and stores all the Inertial packets</div></div>",227:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype227\" class=\"NDPrototype NoParameterForm\">RawBytePacketCollector()</div><div class=\"TTSummary\">The default constructor for the RawBytePacketCollector</div></div>",228:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype228\" class=\"NDPrototype NoParameterForm\">~RawBytePacketCollector()</div><div class=\"TTSummary\">The destructor for the RawBytePacketCollector</div></div>",230:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a circular buffer of a MipDataPacket</div></div>",232:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">The maximum number of raw byte packets that can be stored in the circular buffer</div></div>",234:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype234\" class=\"NDPrototype NoParameterForm\">circular_data_buffer m_rawBytePackets</div><div class=\"TTSummary\">A circular buffer that holds RawBytePackets</div></div>",235:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype235\" class=\"NDPrototype NoParameterForm\">std::mutex m_packetMutex</div><div class=\"TTSummary\">A mutex used for thread safety when accessing/modifying the m_rawBytePackets buffer</div></div>",236:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype236\" class=\"NDPrototype NoParameterForm\">std::condition_variable m_emptyBufferCondition</div><div class=\"TTSummary\">Allows the write to buffer thread to tell the reading thread when data is available</div></div>",237:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype237\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>()&gt; m_notifyDataAddedFn</div><div class=\"TTSummary\">The function to call when raw byte packets are added.</div></div>",239:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype239\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> requestRawBytePacketAddedNotification(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>()&gt;&nbsp;</td><td class=\"PName last\">fnToCall</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Register a function to call when raw byte packets arrive</div></div>",240:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype240\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addRawBytePacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">RawBytePacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a raw byte packet to the raw byte packets circular buffer</div></div>",241:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype241\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> getRawBytePackets(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">RawBytePackets&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">packets,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">maxPackets&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets up to the requested amount of raw byte packets that have been collected.</div></div>",242:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype242\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> totalPackets()</div><div class=\"TTSummary\">Gets the total number of raw byte packets that are currently in the buffer.</div></div>"});