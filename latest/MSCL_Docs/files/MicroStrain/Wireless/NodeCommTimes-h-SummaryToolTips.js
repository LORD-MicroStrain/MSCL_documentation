NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/NodeCommTimes.h",{9363:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9363\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeCommTimes</div></div></div><div class=\"TTSummary\">Contains a global map of Wireless Node addresses to last communication times.</div></div>",9365:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9365\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> std::map&lt;NodeAddress, Timestamp&gt; m_nodesLastCommTime</div><div class=\"TTSummary\">A map of node address to Timestamp objects, holding the last communication time for nodes.</div></div>",9366:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9366\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> std::map&lt;NodeAddress, DeviceState&gt; m_nodesLastState</div><div class=\"TTSummary\">A mpa of node address to DeviceState objects, holding the last known state for nodes.</div></div>",9368:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9368\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> updateCommTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the communication time for the given node address to the current system time.</div></div>",9369:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9369\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> updateDeviceState(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PType first\">DeviceState&nbsp;</td><td class=\"PName last\">state</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the DeviceState for the given node address.</div></div>",9370:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9370\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static const</span> Timestamp&amp; getLastCommTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the last communication time for the given node address.</div></div>",9371:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9371\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeviceState getLastDeviceState(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the last device state for the given node address.</div></div>"});