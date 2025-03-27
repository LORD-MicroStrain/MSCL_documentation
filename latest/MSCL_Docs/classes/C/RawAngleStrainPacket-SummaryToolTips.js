NDSummary.OnToolTipsLoaded("CClass:RawAngleStrainPacket",{7528:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7528\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">RawAngleStrainPacket</div></div></div><div class=\"TTSummary\">A WirelessDataPacket derived class representing a Raw Angle Strain packet.</div></div>",7530:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7530\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> RawAngleStrainPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an RawAngleStrainPacket from the passed in WirelessPacket.</div></div>",7531:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7531\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseSweeps()</div><div class=\"TTSummary\">Parses the passed in WirelessPacket for all the sweep information and adds a sweep to the sweeps container</div></div>",7532:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7532\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> integrityCheck(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Verifies that the packet is a well-formed RawAngleStrainPacket</div></div>",7533:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7533\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> UniqueWirelessPacketId getUniqueId(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the unique ID of the WirelessPacket passed in</div></div>",7534:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7534\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::vector&lt;<span class=\"SHKeyword\">float</span>&gt; distributeAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">low,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">high,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">count</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets a list of angles based on a low, high, and number of angles.</div></div>",7535:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7535\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> buildChannelName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds a channel name for the Raw Angle Strain data.</div></div>"});