NDSummary.OnToolTipsLoaded("CClass:NodeCommTimes",{9192:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9192\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeCommTimes</div></div></div><div class=\"TTSummary\">Contains a global map of Wireless Node addresses to last communication times.</div></div>",9194:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9194\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> std::map&lt;NodeAddress, Timestamp&gt; m_nodesLastCommTime</div><div class=\"TTSummary\">A map of node address to Timestamp objects, holding the last communication time for nodes.</div></div>",9195:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9195\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> std::map&lt;NodeAddress, DeviceState&gt; m_nodesLastState</div><div class=\"TTSummary\">A mpa of node address to DeviceState objects, holding the last known state for nodes.</div></div>",9197:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9197\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> updateCommTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the communication time for the given node address to the current system time.</div></div>",9198:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9198\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> updateDeviceState(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PType first\">DeviceState&nbsp;</td><td class=\"PName last\">state</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the DeviceState for the given node address.</div></div>",9199:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9199\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static const</span> Timestamp&amp; getLastCommTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the last communication time for the given node address.</div></div>",9200:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9200\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeviceState getLastDeviceState(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the last device state for the given node address.</div></div>"});