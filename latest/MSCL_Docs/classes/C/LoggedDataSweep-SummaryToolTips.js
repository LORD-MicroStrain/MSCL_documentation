NDSummary.OnToolTipsLoaded("CClass:LoggedDataSweep",{9306:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9306\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">LoggedDataSweep</div></div></div><div class=\"TTSummary\">Represents 1 data sweep that was logged to a WirelessNode.</div></div>",9308:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9308\" class=\"NDPrototype NoParameterForm\">LoggedDataSweep()</div><div class=\"TTSummary\">Creates a LoggedDataSweep object with a tick and timestamp of 0.</div></div>",9309:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9309\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">LoggedDataSweep(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Timestamp&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">timestamp,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td></td><td class=\"PName last\">tick,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelData&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName last\">calsApplied</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a LoggedDataSweep object.</div></div>",9311:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9311\" class=\"NDPrototype NoParameterForm\">Timestamp m_timestamp</div><div class=\"TTSummary\">The Timestamp of the data sweep.</div></div>",9312:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9312\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> m_tick</div><div class=\"TTSummary\">The tick value representing the count of each sweep in a datalogging session (increments with each sweep).</div></div>",9313:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9313\" class=\"NDPrototype NoParameterForm\">ChannelData m_data</div><div class=\"TTSummary\">Contains one or more WirelessDataPoints, corresponding to each channel\'s data for this sweep.</div></div>",9314:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9314\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_calsApplied</div><div class=\"TTSummary\">Whether calibration coefficients have been applied to the data or not.</div></div>",9316:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9316\" class=\"NDPrototype NoParameterForm\">Timestamp timestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the timestamp of the sweep as a Timestamp</div></div>",9317:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9317\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> tick() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the tick value of the sweep</div></div>",9318:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9318\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> ChannelData&amp; data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the channel data in this sweep as a WirelessDataPoint::ChannelData container.</div></div>",9319:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9319\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> calApplied() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether calibration coefficients have been applied to the data already.</div></div>",9321:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a vector of LoggedDataSweep objects.</div></div>"});