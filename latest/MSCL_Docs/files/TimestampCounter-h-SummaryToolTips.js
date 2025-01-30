NDSummary.OnToolTipsLoaded("File:TimestampCounter.h",{10289:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10289\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">TimestampCounter</div></div></div><div class=\"TTSummary\">A utility for accurately counting time without additive error.</div></div>",10291:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10291\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">TimestampCounter(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">sampleRate,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td></td><td class=\"PName\">startTime&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",10292:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10292\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> reset(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRate,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td></td><td class=\"PName last\">time</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Start counting again with the specificed Sample Rate and from the specified time.</div></div>",10293:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10293\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> reset(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">time</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Start counting again from the specified time, keeping the same Sample Rate</div></div>",10294:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10294\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> advance(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName last\">n</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Advances the counter by n periods.</div></div>",10295:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10295\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> advance()</div><div class=\"TTSummary\">Advances the counter by one period.</div></div>",10296:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10296\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> reverse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName last\">n</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Reverse the counter by n periods.</div></div>",10297:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10297\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> reverse()</div><div class=\"TTSummary\">Reverse the counter by one period.</div></div>",10298:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10298\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> time() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current time of the counter.</div></div>"});