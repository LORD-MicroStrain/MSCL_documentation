NDSummary.OnToolTipsLoaded("CClass:AlgorithmMetaData",{7441:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Represents meta data about Math Data Packets.</div></div>",7443:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7443\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DerivedDataPacketAlgorithmId algorithmId</div><div class=\"TTSummary\">The WirelessTypes::DerivedDataPacketAlgorithmId.</div></div>",7444:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7444\" class=\"NDPrototype NoParameterForm\">ChannelMask channelMask</div><div class=\"TTSummary\">The ChannelMask to which the algorithm is applied.</div></div>",7445:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7445\" class=\"NDPrototype NoParameterForm\">std::vector&lt;DataSweep&gt; m_dataSweeps</div><div class=\"TTSummary\">Contains one or more data sweeps</div></div>",7446:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7446\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_sweepPos</div><div class=\"TTSummary\">The current position into m_dataSweeps to get the next sweep at</div></div>",7447:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7447\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataType m_dataType</div><div class=\"TTSummary\">The type of data that is present in the packet</div></div>",7448:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7448\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_sweepSize</div><div class=\"TTSummary\">The size of a single sweep within this packet</div></div>",7449:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7449\" class=\"NDPrototype NoParameterForm\">std::size_t m_numSweeps</div><div class=\"TTSummary\">The number of sweeps within this packet</div></div>",7450:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7450\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_payloadOffsetChannelData</div><div class=\"TTSummary\">The offset into the payload of the data packet where channel data starts.</div></div>",7452:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7452\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addSweep(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">DataSweep&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sweep</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a single DataSweep to the data packet</div></div>",7453:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7453\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addDataPoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">ChannelData&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">container,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">channelNumber,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">channelDataIndex,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">sweepIndex,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessChannel::</td><td class=\"PType\">ChannelId&nbsp;</td><td></td><td class=\"PName last\">channelId</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Adds a WirelessDataPoint from a payload to the given &lt;ChannelData&gt; container.</div></div>",7454:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7454\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> WirelessChannel::ChannelId wirelessChannelFromChNum(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">channelNum</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts a channel number to a WirelessChannel</div></div>",7455:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7455\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> getPayloadData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td></td><td class=\"PName last\">payloadPosition,</td></tr><tr><td class=\"PType first\">anyType&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a value out of the packet\'s payload based on the given position and the data\'s DataType.</div></div>",7456:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7456\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> timestampWithinRange(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Timestamp&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">timestamp</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if a timestamp is within the valid range that MSCL accepts.</div></div>",7457:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7457\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> angleWithinRange(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">angle</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if an angle from a Wireless Packet is within the valid range that MSCL accepts.</div></div>",7458:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7458\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> WirelessChannel::ChannelId getMathChannelId(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DerivedDataPacketAlgorithmId&nbsp;</td><td class=\"PName last\">algorithmId,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">channelNumber</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Takes a math algorithm ID and a channel number (1 = ch1, 8 = ch8) and determines the WirelessChannel::ChannelId.</div></div>",7459:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7459\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> getNextSweep(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataSweep&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sweepResult</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the next DataSweep in the packet</div></div>",7460:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7460\" class=\"NDPrototype NoParameterForm\">std::size_t numSweeps() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total number of DataSweeps that are in this data packet</div></div>",7461:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7461\" class=\"NDPrototype NoParameterForm\">std::size_t numSweepsRemaining() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of remaining DataSweeps that have not been obtained by the user</div></div>",7462:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7462\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> moreSweeps() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Whether or not there are more DataSweeps in the data packet</div></div>"});