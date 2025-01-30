NDContentPage.OnToolTipsLoaded({5904:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5904\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">TempSensorOptions</div></div></div><div class=\"TTSummary\">Options to adjust the temperature sensor for a WirelessNode.</div></div>",6112:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6112\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataMode dataMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::DataMode currently set in this Config object.</div></div>",6451:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6451\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeEepromHelper</div></div></div><div class=\"TTSummary\">A helper class for reading and writing to a Wireless Node\'s Eeprom.&nbsp; This class provides eeprom specific parsing so that high-level objects can be converted to their low-level eeprom value equivelent and vice-versa.</div></div>",6593:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6593\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">HistogramOptions</div></div></div><div class=\"TTSummary\">Contains all of the Histogram options that can be configured for a WirelessNode.</div></div>",6620:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6620\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FatigueOptions</div></div></div><div class=\"TTSummary\">Contains all of the fatigue options that can be configured for a WirelessNode.</div></div>",6673:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6673\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EventTriggerOptions</div></div></div><div class=\"TTSummary\">Contains all of the Event Trigger options that can be configured for a WirelessNode.</div></div>",6710:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6710\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DataModeMask</div></div></div><div class=\"TTSummary\">Helper class for the DataMode bitmask used in Node Eeproms.</div></div>",6721:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6721\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ConfigIssue</div></div></div><div class=\"TTSummary\">Holds information on a specific configuration issue.</div></div>",6723:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Configuration Options for Wireless Nodes and BaseStations that can be issues.</div></div>",6872:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6872\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ActivitySense</div></div></div><div class=\"TTSummary\">Contains all of the ActivitySense options that can be configured for a WirelessNode.&nbsp; Activity Sense is a power saving feature that allows a Node to be in a low-power state when no activity is suspected, and then immediately jump to its normal sampling state when a certain activity threshold is reached.</div></div>",7073:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7073\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelGroup</div></div></div><div class=\"TTSummary\">Represents a group of channels that have combined settings.</div></div>",7106:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7106\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a WirelessNode.</div></div>",7121:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7121\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> normalizeNumSweeps(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">sweeps</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Normalizes the number of sweeps so that it is within range and a multiple of 100 (rounds up to next multiple).</div></div>",7122:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7122\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">TimeSpan normalizeTimeBetweenBursts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">TimeSpan&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">time</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Normalizes a TimeSpan so that it is within an acceptable range for setting the timeBetweenBursts.&nbsp; A valid range is between 1 second and 24 hours. Seconds above 32767 will be rounded to minutes.&nbsp; When setting the time between bursts, you should also call minTimeBetweenBursts and verify it is greater than this.</div></div>",7197:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7197\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint16</span> minLostBeaconTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum lost beacon timeout (in minutes) that is supported.&nbsp; Note: A value of 0 disable the lost beacon timeout.</div></div>",7198:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7198\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint16</span> maxLostBeaconTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum lost beacon timeout (in minutes) that is supported.</div></div>",8085:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of data collection methods that can be performed on the Node.</div></div>",8105:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of data formats that Nodes can be configured to send when sampling.</div></div>",8115:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of sampling modes the Node can be in.</div></div>",8122:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of default modes the Node can have.&nbsp; This is the mode the Node starts in, as well as the mode the node goes into after an inactivity timeout.</div></div>",8146:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the transmit powers that can be used for Wireless Devices.</div></div>",8166:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the equation types that can be used for calibration coefficients on Wireless Nodes.</div></div>",8169:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the unit types that can be used for calibration coefficients on Wireless Nodes.</div></div>",8293:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the settling times used for thermocouple and voltage inputs on some Wireless Nodes.</div></div>",8310:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the thermocouple types supported by some Wireless Nodes.</div></div>",8341:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible sample rates that are available for Wireless Nodes.</div></div>",8409:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible settings for ChannelGroups.</div></div>",8456:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The different modes a Fatigue Node can operate in.</div></div>",8463:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The filter options (used for anti-aliasing and low-pass filter)</div></div>",8500:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The high pass filter options.</div></div>",8503:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The channel frequency class filter options.</div></div>",8507:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The options available for configuring what happens when the storage limit is reached when logging to a Node.</div></div>",8510:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The options available for input range on supported Nodes.</div></div>",8647:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Data Modes.</div></div>",8652:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Derived Channel Categories for configuration.</div></div>",8665:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The options that can be configured for the velocity derived channel.</div></div>",8666:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Communication Protocol types.</div></div>",8669:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Voltages.</div></div>",8679:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Sensor Output Modes.</div></div>",8696:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of &lt;DerivedChannelOption&gt; to ChannelMask pairs.</div></div>",9382:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9382\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelMask</div></div></div><div class=\"TTSummary\">Represents the channel mask (active and inactive channels) for a WirelessNode.</div></div>",9650:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9650\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain wireless node</div></div>",9704:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9704\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> applyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNodeConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Applies a WirelessNodeConfig to the Node.&nbsp; Note: This applies all options that have been set in the WirelessNodeConfig.&nbsp; Before applying, the options will be validated. It is recommended that you perform this validation yourself first by using verifyConfig.</div></div>",9961:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9961\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">LinearEquation</div></div></div><div class=\"TTSummary\">Represents a linear equation (y = mx + b).</div></div>",10337:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10337\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">TimeSpan</div></div></div><div class=\"TTSummary\">Represents a range of time</div></div>",10404:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10404\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BitMask</div></div></div><div class=\"TTSummary\">Represents a bitmask.</div></div>",10436:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10436\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NoData</div></div></div><div class=\"TTSummary\">There is no data available to be accessed</div></div>",10451:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10451\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NodeCommunication</div></div></div><div class=\"TTSummary\">The exception for failing to communicate with a WirelessNode.</div></div>",10458:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10458\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Connection</div></div></div><div class=\"TTSummary\">The generic connection exception.</div></div>",10490:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10490\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidNodeConfig</div></div></div><div class=\"TTSummary\">The Configuration for a WirelessNode is invalid.</div></div>"});