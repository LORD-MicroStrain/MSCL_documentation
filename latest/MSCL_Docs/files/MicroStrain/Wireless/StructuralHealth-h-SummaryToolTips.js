NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/StructuralHealth.h",{9184:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9184\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">StructuralHealth</div></div></div><div class=\"TTSummary\">Holds Structural Health Monitor channel information.</div></div>",9186:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9186\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">StructuralHealth(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td></td><td class=\"PName last\">angle,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">uptime,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td></td><td class=\"PName last\">damage,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">processingRate,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Histogram&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">histogram</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a StructuralHealth object.</div></div>",9188:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9188\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_angle</div><div class=\"TTSummary\">The actual angle that is being measured.</div></div>",9189:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9189\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_uptime</div><div class=\"TTSummary\">The uptime counter of how long the device has been running.</div></div>",9190:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9190\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_damage</div><div class=\"TTSummary\">The percentage of damage that has occurred. (0% = no damage, 100% = dead)</div></div>",9191:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9191\" class=\"NDPrototype NoParameterForm\">SampleRate m_processingRate</div><div class=\"TTSummary\">The processing rate that the sensors were sampled at to calculate the histogram.</div></div>",9192:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9192\" class=\"NDPrototype NoParameterForm\">Histogram m_histogram</div><div class=\"TTSummary\">The Histogram that was calculated for the given angle.</div></div>",9194:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9194\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> angle() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the actual angle that is being measured.</div></div>",9195:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9195\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> uptime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the uptime counter of how long the device has been running.</div></div>",9196:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9196\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> damage() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the percentage of damage that has occurred. (0% = no damage, 100% = dead)</div></div>",9197:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9197\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SampleRate&amp; processingRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the processing rate that the sensors were sampled at to calculate the histogram.</div></div>",9198:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9198\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Histogram&amp; histogram() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Histogram that was calculated for the given angle.</div></div>"});