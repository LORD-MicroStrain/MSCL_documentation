NDSummary.OnToolTipsLoaded("CClass:ShmPacket",{7538:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7538\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ShmPacket</div></div></div><div class=\"TTSummary\">A WirelessDataPacket derived class representing a Structural Health Monitoring Packet</div></div>",7540:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7540\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> ShmPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an ShmPacket from the passed in WirelessPacket.</div></div>",7542:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7542\" class=\"NDPrototype NoParameterForm\">size_t m_binCount</div><div class=\"TTSummary\">The number of bins in the packet.</div></div>",7544:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7544\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseSweeps()</div><div class=\"TTSummary\">Parses the passed in WirelessPacket for all the sweep information and adds a sweep to the sweeps container.</div></div>",7545:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7545\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseSweeps_v1()</div><div class=\"TTSummary\">Parses the packet for version 1 of the SHM-Link packet.</div></div>",7546:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7546\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseSweeps_v2()</div><div class=\"TTSummary\">Parses the packet for version 2 of the SHM-Link packet.</div></div>",7547:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7547\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> integrityCheck(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Verifies that the packet is a well formed Shm-Link packet.</div></div>",7548:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7548\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> buildChannelName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds a channel name for the SHM data.</div></div>"});