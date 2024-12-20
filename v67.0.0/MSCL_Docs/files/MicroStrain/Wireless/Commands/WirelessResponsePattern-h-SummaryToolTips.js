NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/WirelessResponsePattern.h",{4731:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4731\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessResponsePattern</div></div></div><div class=\"TTSummary\">A pattern matching the expected response from a wireless command.</div></div>",4733:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4733\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> WirelessResponsePattern(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">commandId,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a WirelessResponsePattern attached to a collector.</div></div>",4734:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4734\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~WirelessResponsePattern()</div><div class=\"TTSummary\">Destroys the ResponsePattern and unregisters this response from its ResponseCollector</div></div>",4736:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4736\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_commandId</div><div class=\"TTSummary\">The command ID to match in the response.</div></div>",4737:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4737\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The NodeAddress to match in the response.</div></div>",4738:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4738\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_baseReceived</div><div class=\"TTSummary\">Whether the Base Station received response has been collected or not.</div></div>",4739:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4739\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> m_baseReceivedWaitTime</div><div class=\"TTSummary\">The wait time (in milliseconds) that was sent in the Base Station received response.</div></div>",4741:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4741\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> baseReceived() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the Base Station received response has been collected or not.</div></div>",4742:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4742\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> baseReceivedWaitTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the wait time (in milliseconds) that was sent in the Base Station received response.&nbsp; This is only valid if baseReceived returns true.</div></div>"});