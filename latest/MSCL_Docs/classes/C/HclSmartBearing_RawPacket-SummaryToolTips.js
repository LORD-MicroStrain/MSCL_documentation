NDSummary.OnToolTipsLoaded("CClass:HclSmartBearing_RawPacket",{7492:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7492\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">HclSmartBearing_RawPacket</div></div></div><div class=\"TTSummary\">A WirelessDataPacket derived class representing a HclSmartBearing Raw data packet.</div></div>",7502:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible raw packet types.</div></div>",7507:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7507\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> HclSmartBearing_RawPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a HclSmartBearing_RawPacket from the passed in WirelessPacket.</div></div>",7509:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7509\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_magConversionVal</div><div class=\"TTSummary\">The conversion value for magnetometer data from the raw base board packet.</div></div>",7511:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7511\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseSweeps()</div><div class=\"TTSummary\">Parses the packet for all the sweep information and adds a sweep to the sweeps container</div></div>",7512:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7512\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseSweeps_baseBoard()</div><div class=\"TTSummary\">Parses the packet for Raw Base Board data.</div></div>",7513:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7513\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseSweeps_strainBoard()</div><div class=\"TTSummary\">Parses the packet for Raw Strain Board data.</div></div>",7514:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7514\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseSweeps_inertialBoard()</div><div class=\"TTSummary\">Parses the packet for Raw Inertial Board data.</div></div>",7515:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7515\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">anyType getMagChValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">packetVal</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the magnetometer data for a channel from the raw base board packet, taking into account the mag conversion val.</div></div>",7516:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7516\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> integrityCheck_baseBoard(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> WirelessPacket::</td><td class=\"PType\">Payload&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">payload</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Verifies that the packet is a well formed HclSmartBearing_RawPacket Base Board packet.</div></div>",7517:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7517\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> integrityCheck_strainBoard(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> WirelessPacket::</td><td class=\"PType\">Payload&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">payload</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Verifies that the packet is a well formed HclSmartBearing_RawPacket Strain Board packet.</div></div>",7518:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7518\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> integrityCheck_inertialBoard(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> WirelessPacket::</td><td class=\"PType\">Payload&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">payload</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Verifies that the packet is a well formed HclSmartBearing_RawPacket Inertial Board packet.</div></div>",7519:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7519\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> integrityCheck(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Verifies that the packet is a well formed HclSmartBearing_RawPacket packet.</div></div>",7520:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7520\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> UniqueWirelessPacketId getUniqueId(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the unique Id of the WirelessPacket passed in</div></div>"});