NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/ActivitySense.h",{2905:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2905\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ActivitySense</div></div></div><div class=\"TTSummary\">Contains all of the ActivitySense options that can be configured for a WirelessNode.&nbsp; Activity Sense is a power saving feature that allows a Node to be in a low-power state when no activity is suspected, and then immediately jump to its normal sampling state when a certain activity threshold is reached.</div></div>",2906:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2906\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> enabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether Activity Sense is enabled or disabled in this options object.</div></div>",2907:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2907\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> enabled(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets whether Activity Sense is enabled or disabled in this options object.</div></div>",2908:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2908\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> activityThreshold() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current activity threshold value in this options object.&nbsp; This is the threshold the channel must exceed, for activityTime seconds to begin sampling.</div></div>",2909:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2909\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> activityThreshold(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">threshold</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the activity threshold value in this options object.&nbsp; This is the threshold the channel must exceed, for activityTime seconds to begin sampling.</div></div>",2910:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2910\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> inactivityThreshold() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current inactivity threshold value in this options object.&nbsp; This is the threshold the channel must drop below, for inactivityTimeout seconds to begin sampling.</div></div>",2911:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2911\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> inactivityThreshold(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">threshold</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the inactivity threshold value in this options object.&nbsp; This is the threshold the channel must drop below, for inactivityTimeout seconds to begin sampling.</div></div>",2912:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2912\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> activityTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the amount of time that activity must be seen above activityThreshold before the Node enters its sampling mode, currently set in this options object.</div></div>",2913:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2913\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> activityTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">time</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the amount of time that activity must be seen above activityThreshold before the Node enters its sampling mode, in this options object.</div></div>",2914:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2914\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> inactivityTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current amount of time that the Activity Sense mode runs without a value over the activityThreshold before it goes back into a low power mode, in this options object.</div></div>",2915:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2915\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> inactivityTimeout(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the current amount of time that the Activity Sense mode runs without a value over the activityThreshold before it goes back into a low power mode, in this options object.</div></div>"});