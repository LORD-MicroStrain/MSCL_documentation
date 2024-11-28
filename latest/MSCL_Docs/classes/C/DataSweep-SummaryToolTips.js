NDSummary.OnToolTipsLoaded("CClass:DataSweep",{9148:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9148\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DataSweep</div></div></div><div class=\"TTSummary\">Represents 1 data sweep, including data for each channel, a timestamp, and a sample rate</div></div>",9162:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9162\" class=\"NDPrototype NoParameterForm\">DataSweep()</div><div class=\"TTSummary\">Creates a default constructed DataSweep.</div></div>",9164:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9164\" class=\"NDPrototype NoParameterForm\">Timestamp m_timestamp</div><div class=\"TTSummary\">The Timestamp of the data sweep.</div></div>",9165:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9165\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_tick</div><div class=\"TTSummary\">The tick value that was contained in the packet (increments for each sweep)</div></div>",9166:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9166\" class=\"NDPrototype NoParameterForm\">SampleRate m_sampleRate</div><div class=\"TTSummary\">The SampleRate that was contained in the packet</div></div>",9167:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9167\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address that was contained in the packet (identifies the node this packet came from)</div></div>",9168:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9168\" class=\"NDPrototype NoParameterForm\">ChannelData m_data</div><div class=\"TTSummary\">Contains one or more WirelessDataPoints, corresponding to each channel\'s data for this sweep</div></div>",9169:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9169\" class=\"NDPrototype NoParameterForm\">SamplingType m_samplingMode</div><div class=\"TTSummary\">The SamplingType that identifies the sampling mode for this data sweep</div></div>",9170:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9170\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_baseRssi</div><div class=\"TTSummary\">The Base Station RSSI that identifies the received signal strength at the Base Station</div></div>",9171:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9171\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency m_frequency</div><div class=\"TTSummary\">The WirelessTypes::Frequency representing the radio frequency that this DataSweep was collected on</div></div>",9172:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9172\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_calsApplied</div><div class=\"TTSummary\">Whether calibration coefficients have been applied to the data or not.</div></div>",9174:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9174\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; timestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the timestamp of the sweep as a Timestamp</div></div>",9175:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9175\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> tick() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the tick value of the sweep</div></div>",9176:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9176\" class=\"NDPrototype NoParameterForm\">SampleRate sampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the sample rate of the sweep as a SampleRate</div></div>",9177:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9177\" class=\"NDPrototype NoParameterForm\">NodeAddress nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address that this sweep is associated with</div></div>",9178:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9178\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> ChannelData&amp; data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the channel data in this sweep as a WirelessDataPoint::ChannelData container.</div></div>",9179:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9179\" class=\"NDPrototype NoParameterForm\">SamplingType samplingType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the SamplingType for this sweep</div></div>",9180:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9180\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> nodeRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Node RSSI value that identifies the received signal strength at the Node</div></div>",9181:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9181\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> baseRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Base Station RSSI value that identifies the received signal strength at the BaseStation for this sweep</div></div>",9182:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9182\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the radio frequency that this DataSweep was collected on</div></div>",9183:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9183\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> calApplied() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether calibration coefficients have been applied to the data already.</div></div>",9184:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9184\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> timestamp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Timestamp&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">time</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the timestamp of the sweep</div></div>",9185:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9185\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> tick(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">tick</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the tick of the sweep</div></div>",9186:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9186\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SampleRate&nbsp;</td><td class=\"PName last\">rate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the sample rate of the sweep</div></div>",9187:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9187\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">address</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node address of the sweep</div></div>",9188:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9188\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> data(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelData&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the data of the sweep</div></div>",9189:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Sets the sampling mode of the sweep</div></div>",9190:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9190\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeRssi(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">rssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Node RSSI value that identifies the received signal strength at the Node</div></div>",9191:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9191\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> baseRssi(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">rssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Base Station RSSI value that identifies the received signal strength at the Base Station for this sweep</div></div>",9192:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9192\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> frequency(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the radio frequency that this DataSweep was collected on</div></div>",9193:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9193\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> calApplied(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">applied</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets whether calibration coefficients have been applied to the data already.</div></div>",9195:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a vector of DataSweep objects.</div></div>"});