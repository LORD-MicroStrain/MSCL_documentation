NDSummary.OnToolTipsLoaded("CClass:StructuralHealth",{4285:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4285\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">StructuralHealth</div></div></div><div class=\"TTSummary\">Holds Structural Health Monitor channel information.</div></div>",4286:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4286\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">StructuralHealth(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td></td><td class=\"PName last\">angle,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">uptime,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td></td><td class=\"PName last\">damage,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">processingRate,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Histogram&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">histogram</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a StructuralHealth object.</div></div>",4287:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4287\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> angle() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the actual angle that is being measured.</div></div>",4288:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4288\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> uptime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the uptime counter of how long the device has been running.</div></div>",4289:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4289\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> damage() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the percentage of damage that has occurred. (0% = no damage, 100% = dead)</div></div>",4290:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4290\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SampleRate&amp; processingRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the processing rate that the sensors were sampled at to calculate the histogram.</div></div>",4291:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4291\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Histogram&amp; histogram() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Histogram that was calculated for the given angle.</div></div>"});