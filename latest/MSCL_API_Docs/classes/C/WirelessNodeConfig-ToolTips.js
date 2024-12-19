NDContentPage.OnToolTipsLoaded({2768:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2768\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">TempSensorOptions</div></div></div><div class=\"TTSummary\">Options to adjust the temperature sensor for a WirelessNode.</div></div>",2877:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2877\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">HistogramOptions</div></div></div><div class=\"TTSummary\">Contains all of the Histogram options that can be configured for a WirelessNode.</div></div>",2893:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2893\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FatigueOptions</div></div></div><div class=\"TTSummary\">Contains all of the fatigue options that can be configured for a WirelessNode.</div></div>",2926:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2926\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EventTriggerOptions</div></div></div><div class=\"TTSummary\">Contains all of the Event Trigger options that can be configured for a WirelessNode.</div></div>",3025:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3025\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ActivitySense</div></div></div><div class=\"TTSummary\">Contains all of the ActivitySense options that can be configured for a WirelessNode.&nbsp; Activity Sense is a power saving feature that allows a Node to be in a low-power state when no activity is suspected, and then immediately jump to its normal sampling state when a certain activity threshold is reached.</div></div>",3061:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3061\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> normalizeNumSweeps(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">sweeps</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Normalizes the number of sweeps so that it is within range and a multiple of 100 (rounds up to next multiple).</div></div>",3062:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3062\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">TimeSpan normalizeTimeBetweenBursts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">TimeSpan&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">time</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Normalizes a TimeSpan so that it is within an acceptable range for setting the timeBetweenBursts.&nbsp; A valid range is between 1 second and 24 hours. Seconds above 32767 will be rounded to minutes.&nbsp; When setting the time between bursts, you should also call minTimeBetweenBursts and verify it is greater than this.</div></div>",3133:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3133\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint16</span> minLostBeaconTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum lost beacon timeout (in minutes) that is supported.&nbsp; Note: A value of 0 disable the lost beacon timeout.</div></div>",3134:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3134\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint16</span> maxLostBeaconTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum lost beacon timeout (in minutes) that is supported.</div></div>",3192:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of data collection methods that can be performed on the Node.</div></div>",3196:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of data formats that Nodes can be configured to send when sampling.</div></div>",3206:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of sampling modes the Node can be in.</div></div>",3213:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of default modes the Node can have.&nbsp; This is the mode the Node starts in, as well as the mode the node goes into after an inactivity timeout.</div></div>",3237:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the transmit powers that can be used for Wireless Devices.</div></div>",3257:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the equation types that can be used for calibration coefficients on Wireless Nodes.</div></div>",3260:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the unit types that can be used for calibration coefficients on Wireless Nodes.</div></div>",3384:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the settling times used for thermocouple and voltage inputs on some Wireless Nodes.</div></div>",3401:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the thermocouple types supported by some Wireless Nodes.</div></div>",3432:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible sample rates that are available for Wireless Nodes.</div></div>",3541:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The filter options (used for anti-aliasing and low-pass filter)</div></div>",3578:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The high pass filter options.</div></div>",3581:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The channel frequency class filter options.</div></div>",3585:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The options available for configuring what happens when the storage limit is reached when logging to a Node.</div></div>",3588:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The options available for input range on supported Nodes.</div></div>",3725:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Data Modes.</div></div>",3730:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Derived Channel Categories for configuration.</div></div>",3743:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The options that can be configured for the velocity derived channel.</div></div>",3744:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Communication Protocol types.</div></div>",3747:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Voltages.</div></div>",3757:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Sensor Output Modes.</div></div>",3899:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3899\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain wireless node</div></div>",3948:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3948\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> applyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNodeConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Applies a WirelessNodeConfig to the Node.&nbsp; Note: This applies all options that have been set in the WirelessNodeConfig.&nbsp; Before applying, the options will be validated. It is recommended that you perform this validation yourself first by using verifyConfig.</div></div>",4339:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4339\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelMask</div></div></div><div class=\"TTSummary\">Represents the channel mask (active and inactive channels) for a WirelessNode.</div></div>",4496:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4496\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">LinearEquation</div></div></div><div class=\"TTSummary\">Represents a linear equation (y = mx + b).</div></div>",4610:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4610\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">TimeSpan</div></div></div><div class=\"TTSummary\">Represents a range of time</div></div>",4637:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4637\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NoData</div></div></div><div class=\"TTSummary\">There is no data available to be accessed</div></div>"});