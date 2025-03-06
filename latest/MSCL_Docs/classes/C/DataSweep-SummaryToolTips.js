NDSummary.OnToolTipsLoaded("CClass:DataSweep",{9416:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9416\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DataSweep</div></div></div><div class=\"TTSummary\">Represents 1 data sweep, including data for each channel, a timestamp, and a sample rate</div></div>",9430:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9430\" class=\"NDPrototype NoParameterForm\">DataSweep()</div><div class=\"TTSummary\">Creates a default constructed DataSweep.</div></div>",9432:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9432\" class=\"NDPrototype NoParameterForm\">Timestamp m_timestamp</div><div class=\"TTSummary\">The Timestamp of the data sweep.</div></div>",9433:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9433\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_tick</div><div class=\"TTSummary\">The tick value that was contained in the packet (increments for each sweep)</div></div>",9434:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9434\" class=\"NDPrototype NoParameterForm\">SampleRate m_sampleRate</div><div class=\"TTSummary\">The SampleRate that was contained in the packet</div></div>",9435:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9435\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address that was contained in the packet (identifies the node this packet came from)</div></div>",9436:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9436\" class=\"NDPrototype NoParameterForm\">ChannelData m_data</div><div class=\"TTSummary\">Contains one or more WirelessDataPoints, corresponding to each channel\'s data for this sweep</div></div>",9437:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9437\" class=\"NDPrototype NoParameterForm\">SamplingType m_samplingMode</div><div class=\"TTSummary\">The SamplingType that identifies the sampling mode for this data sweep</div></div>",9438:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9438\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_baseRssi</div><div class=\"TTSummary\">The Base Station RSSI that identifies the received signal strength at the Base Station</div></div>",9439:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9439\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency m_frequency</div><div class=\"TTSummary\">The WirelessTypes::Frequency representing the radio frequency that this DataSweep was collected on</div></div>",9440:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9440\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_calsApplied</div><div class=\"TTSummary\">Whether calibration coefficients have been applied to the data or not.</div></div>",9442:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9442\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; timestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the timestamp of the sweep as a Timestamp</div></div>",9443:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9443\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> tick() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the tick value of the sweep</div></div>",9444:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9444\" class=\"NDPrototype NoParameterForm\">SampleRate sampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the sample rate of the sweep as a SampleRate</div></div>",9445:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9445\" class=\"NDPrototype NoParameterForm\">NodeAddress nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address that this sweep is associated with</div></div>",9446:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9446\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> ChannelData&amp; data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the channel data in this sweep as a WirelessDataPoint::ChannelData container.</div></div>",9447:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9447\" class=\"NDPrototype NoParameterForm\">SamplingType samplingType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the SamplingType for this sweep</div></div>",9448:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9448\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> nodeRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Node RSSI value that identifies the received signal strength at the Node</div></div>",9449:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9449\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> baseRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Base Station RSSI value that identifies the received signal strength at the BaseStation for this sweep</div></div>",9450:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9450\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the radio frequency that this DataSweep was collected on</div></div>",9451:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9451\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> calApplied() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether calibration coefficients have been applied to the data already.</div></div>",9452:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9452\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> timestamp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Timestamp&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">time</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the timestamp of the sweep</div></div>",9453:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9453\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> tick(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">tick</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the tick of the sweep</div></div>",9454:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9454\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SampleRate&nbsp;</td><td class=\"PName last\">rate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the sample rate of the sweep</div></div>",9455:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9455\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">address</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node address of the sweep</div></div>",9456:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9456\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> data(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelData&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the data of the sweep</div></div>",9457:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Sets the sampling mode of the sweep</div></div>",9458:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9458\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeRssi(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">rssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Node RSSI value that identifies the received signal strength at the Node</div></div>",9459:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9459\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> baseRssi(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">rssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Base Station RSSI value that identifies the received signal strength at the Base Station for this sweep</div></div>",9460:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9460\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> frequency(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the radio frequency that this DataSweep was collected on</div></div>",9461:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9461\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> calApplied(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">applied</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets whether calibration coefficients have been applied to the data already.</div></div>",9463:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a vector of DataSweep objects.</div></div>"});