NDSummary.OnToolTipsLoaded("File:TimedCondition.h",{10331:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10331\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">TimedCondition</div></div></div><div class=\"TTSummary\">Class that acts as a simple wrapper around a std::condition_variable.&nbsp; Used for one process waiting on a certain condition to be met or a timeout, in which case the other process is notified of the action.</div></div>",10333:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10333\" class=\"NDPrototype NoParameterForm\">TimedCondition()</div><div class=\"TTSummary\">Creates a TimedCondition object</div></div>",10335:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10335\" class=\"NDPrototype NoParameterForm\">std::condition_variable m_condition</div><div class=\"TTSummary\">The condition object that this class provides a wrapper for.</div></div>",10336:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10336\" class=\"NDPrototype NoParameterForm\">std::mutex m_mutex</div><div class=\"TTSummary\">The mutex to handle thread-safe access</div></div>",10337:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10337\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_isNotified</div><div class=\"TTSummary\">Whether or not the condition has been notified</div></div>",10339:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10339\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> timedWait(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Blocks until the condition is met by calling notify() or until the timeout has expired.&nbsp; Also returns true immediately if the condition has already been notified.</div></div>",10340:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10340\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> notify()</div><div class=\"TTSummary\">Unblocks the TimedCondition if it is currently blocked from calling timedWait()</div></div>"});