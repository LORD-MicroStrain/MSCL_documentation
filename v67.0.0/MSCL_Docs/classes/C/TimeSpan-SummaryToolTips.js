NDSummary.OnToolTipsLoaded("CClass:TimeSpan",{10340:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10340\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">TimeSpan</div></div></div><div class=\"TTSummary\">Represents a range of time</div></div>",10342:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10342\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> TimeSpan(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">nanoseconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan given the nanoseconds value.&nbsp; This constructor is private to force use of the static constructor methods to create a timespan.</div></div>",10344:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10344\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> m_nanoseconds</div><div class=\"TTSummary\">The number of nanoseconds in the timespan</div></div>",10346:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10346\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int64</span> compare(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">TimeSpan&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">other</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the difference (in nanoseconds) of the two TimeSpans.</div></div>",10347:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10347\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> getNanoseconds() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the nanoseconds resolution of the TimeSpan</div></div>",10348:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10348\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> getMicroseconds() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the microsecond resolution of the TimeSpan</div></div>",10349:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10349\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> getMilliseconds() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the millisecond resolution of the TimeSpan</div></div>",10350:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10350\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> getSeconds() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the seconds resolution of the TimeSpan</div></div>",10351:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10351\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan NanoSeconds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">nanoseconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from nanoseconds</div></div>",10352:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10352\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan MicroSeconds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">microseconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from microseconds</div></div>",10353:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10353\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan MilliSeconds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">milliseconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from milliseconds</div></div>",10354:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10354\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan Seconds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">seconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from seconds</div></div>",10355:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10355\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan Minutes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">minutes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from minutes</div></div>",10356:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10356\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan Hours(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">hours</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from hours</div></div>",10357:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10357\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan Days(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">days</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from days</div></div>"});