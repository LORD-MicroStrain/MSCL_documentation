NDSummary.OnToolTipsLoaded("CClass:EventTriggerOptions",{6691:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6691\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EventTriggerOptions</div></div></div><div class=\"TTSummary\">Contains all of the Event Trigger options that can be configured for a WirelessNode.</div></div>",6693:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6693\" class=\"NDPrototype NoParameterForm\">BitMask m_triggerMask</div><div class=\"TTSummary\">The BitMask for enabling and disabling triggers.</div></div>",6694:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6694\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_preDuration</div><div class=\"TTSummary\">The pre event duration (in milliseconds).</div></div>",6695:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6695\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_postDuration</div><div class=\"TTSummary\">The post event duration ( in milliseconds).</div></div>",6696:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6696\" class=\"NDPrototype NoParameterForm\">Triggers m_triggers</div><div class=\"TTSummary\">The Triggers.</div></div>",6698:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6698\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> BitMask&amp; triggerMask() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the actual BitMask that represents the active and inactive triggers.</div></div>",6699:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6699\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> triggerMask(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BitMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the BitMask that represents the active and inactive triggers.</div></div>",6700:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6700\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> anyTriggersEnabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if any triggers are enabled.</div></div>",6701:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6701\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> triggerEnabled(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">triggerIndex</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a specific trigger is enabled.</div></div>",6702:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6702\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> enableTrigger(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">triggerIndex,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">enable&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables or disables a specific trigger.</div></div>",6703:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6703\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> preDuration() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the pre event duration in milliseconds.</div></div>",6704:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6704\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> preDuration(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">duration</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the pre event duration in milliseconds.</div></div>",6705:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6705\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> postDuration() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the post event duration in milliseconds.</div></div>",6706:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6706\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> postDuration(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">duration</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the post event duration in milliseconds.</div></div>",6707:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6707\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> trigger(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">triggerIndex,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Trigger&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">trigger</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Trigger in this options object, for the trigger trigger index.</div></div>",6708:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6708\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> Trigger&amp; trigger(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">triggerIndex</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the Trigger for the given trigger index.</div></div>",6709:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6709\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Triggers&amp; triggers() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Triggers that are currently set in this object.</div></div>"});