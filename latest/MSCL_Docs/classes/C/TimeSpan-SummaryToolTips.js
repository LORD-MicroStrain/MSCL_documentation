NDSummary.OnToolTipsLoaded("CClass:TimeSpan",{10262:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10262\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">TimeSpan</div></div></div><div class=\"TTSummary\">Represents a range of time</div></div>",10264:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10264\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> TimeSpan(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">nanoseconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan given the nanoseconds value.&nbsp; This constructor is private to force use of the static constructor methods to create a timespan.</div></div>",10266:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10266\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> m_nanoseconds</div><div class=\"TTSummary\">The number of nanoseconds in the timespan</div></div>",10268:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10268\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int64</span> compare(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">TimeSpan&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">other</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the difference (in nanoseconds) of the two TimeSpans.</div></div>",10269:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10269\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> getNanoseconds() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the nanoseconds resolution of the TimeSpan</div></div>",10270:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10270\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> getMicroseconds() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the microsecond resolution of the TimeSpan</div></div>",10271:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10271\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> getMilliseconds() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the millisecond resolution of the TimeSpan</div></div>",10272:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10272\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> getSeconds() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the seconds resolution of the TimeSpan</div></div>",10273:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10273\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan NanoSeconds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">nanoseconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from nanoseconds</div></div>",10274:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10274\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan MicroSeconds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">microseconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from microseconds</div></div>",10275:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10275\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan MilliSeconds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">milliseconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from milliseconds</div></div>",10276:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10276\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan Seconds(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">seconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from seconds</div></div>",10277:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10277\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan Minutes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">minutes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from minutes</div></div>",10278:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10278\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan Hours(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">hours</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from hours</div></div>",10279:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10279\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> TimeSpan Days(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">days</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a TimeSpan object from days</div></div>"});