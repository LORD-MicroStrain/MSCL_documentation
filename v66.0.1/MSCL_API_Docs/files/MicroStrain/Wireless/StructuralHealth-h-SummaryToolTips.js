NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/StructuralHealth.h",{4233:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4233\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">StructuralHealth</div></div></div><div class=\"TTSummary\">Holds Structural Health Monitor channel information.</div></div>",4234:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4234\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">StructuralHealth(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td></td><td class=\"PName last\">angle,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">uptime,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td></td><td class=\"PName last\">damage,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">processingRate,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Histogram&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">histogram</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a StructuralHealth object.</div></div>",4235:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4235\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> angle() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the actual angle that is being measured.</div></div>",4236:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4236\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> uptime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the uptime counter of how long the device has been running.</div></div>",4237:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4237\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> damage() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the percent of damage that has occurred. (0% = no damage, 100% = dead)</div></div>",4238:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4238\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SampleRate&amp; processingRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the processing rate that the sensors were sampled at to calculate the histogram.</div></div>",4239:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4239\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Histogram&amp; histogram() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Histogram that was calculated for the given angle.</div></div>"});