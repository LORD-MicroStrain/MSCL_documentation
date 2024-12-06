NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/SetToIdle.h",{5374:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5374\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">namespace</span> </div><div class=\"CPName\">SetToIdle</div></div></div><div class=\"TTSummary\">Contains logic for the Set to Idle command.</div></div>",5376:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5376\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the SetToIdle command packet.</div></div>",5377:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5377\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td></td><td class=\"PName last\">collector,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">baseStation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SetToIdle Response object</div></div>",5378:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5378\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~Response()</div><div class=\"TTSummary\">Destroys the SetToIdle Response object. This also cancels the SetToIdle operation on the BaseStation, if not already complete or canceled.</div></div>",5380:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5380\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address to look for in the response.</div></div>",5381:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5381\" class=\"NDPrototype NoParameterForm\">SetToIdleStatus::SetToIdleResult m_result</div><div class=\"TTSummary\">The &lt;SetToIdleResult&gt; detailing the result of the Set to Idle command.</div></div>",5382:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5382\" class=\"NDPrototype NoParameterForm\">BaseStation m_baseStation</div><div class=\"TTSummary\">The BaseStation that will send the command (used for canceling this command).</div></div>",5383:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5383\" class=\"NDPrototype NoParameterForm\">std::mutex m_setToIdleMutex</div><div class=\"TTSummary\">The mutex used for thread safety.</div></div>",5385:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5385\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> match(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the bytes passed in match the response pattern from their current read position.</div></div>",5386:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5386\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> cancel()</div><div class=\"TTSummary\">Attempts to cancel the Stop Node operation.</div></div>",5387:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5387\" class=\"NDPrototype NoParameterForm\">SetToIdleStatus::SetToIdleResult result()</div><div class=\"TTSummary\">Gets the &lt;SetToIdleResult&gt; of the Stop Node command.</div></div>"});