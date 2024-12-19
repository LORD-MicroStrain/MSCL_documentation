NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Packets/ShmPacket.h",{7313:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7313\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ShmPacket</div></div></div><div class=\"TTSummary\">A WirelessDataPacket derived class representing a Structural Health Monitoring Packet</div></div>",7315:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7315\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> ShmPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an ShmPacket from the passed in WirelessPacket.</div></div>",7317:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7317\" class=\"NDPrototype NoParameterForm\">size_t m_binCount</div><div class=\"TTSummary\">The number of bins in the packet.</div></div>",7319:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7319\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseSweeps()</div><div class=\"TTSummary\">Parses the passed in WirelessPacket for all the sweep information and adds a sweep to the sweeps container.</div></div>",7320:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7320\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseSweeps_v1()</div><div class=\"TTSummary\">Parses the packet for version 1 of the SHM-Link packet.</div></div>",7321:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7321\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseSweeps_v2()</div><div class=\"TTSummary\">Parses the packet for version 2 of the SHM-Link packet.</div></div>",7322:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7322\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> integrityCheck(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Verifies that the packet is a well formed Shm-Link packet.</div></div>",7323:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7323\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> buildChannelName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds a channel name for the SHM data.</div></div>"});