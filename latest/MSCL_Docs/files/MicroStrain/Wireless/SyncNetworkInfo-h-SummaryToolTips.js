NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/SyncNetworkInfo.h",{9141:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9141\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SyncNetworkInfo</div></div></div><div class=\"TTSummary\">Contains network information for a WirelessNode that has been added to the Sync Sampling Network.</div></div>",9143:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The status of an individual node.</div></div>",9149:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9149\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SyncNetworkInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">node</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SyncNetworkInfo object</div></div>",9151:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9151\" class=\"NDPrototype NoParameterForm\">WirelessNode m_node</div><div class=\"TTSummary\">The WirelessNode that this info belongs to</div></div>",9152:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9152\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The NodeAddress of the Node that this info belongs to.</div></div>",9153:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9153\" class=\"NDPrototype NoParameterForm\">WirelessModels::NodeModel m_model</div><div class=\"TTSummary\">The WirelessModels::NodeModel of the Node that this info belongs to.</div></div>",9154:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9154\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_percentBandwidth</div><div class=\"TTSummary\">The standard percent of bandwidth that this node takes up</div></div>",9155:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9155\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_percentBandwidth_optimized</div><div class=\"TTSummary\">The space-optimized percent of bandwidth that this node takes up</div></div>",9156:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9156\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_tdmaAddress</div><div class=\"TTSummary\">The TDMA address that was found for this node</div></div>",9157:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9157\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_slotSize</div><div class=\"TTSummary\">The number of individual slots that the node takes up per transmission</div></div>",9158:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9158\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_maxTdmaAddress</div><div class=\"TTSummary\">The maximum TDMA address that can be assigned for the node</div></div>",9159:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9159\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_txPerGroup</div><div class=\"TTSummary\">The number of transmissions per group</div></div>",9160:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9160\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_groupSize</div><div class=\"TTSummary\">The size of the group</div></div>",9161:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9161\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_bytesPerSweep</div><div class=\"TTSummary\">The number of bytes per data sweep.</div></div>",9162:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9162\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_bytesPerBurst</div><div class=\"TTSummary\">The number of bytes per burst (only valid if in Burst mode).</div></div>",9163:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9163\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_maxBytesPerPacket</div><div class=\"TTSummary\">The maximum number of bytes per packet.</div></div>",9164:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9164\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> m_bytesPerSecond</div><div class=\"TTSummary\">The number of bytes per second (continuous sampling).</div></div>",9165:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9165\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_maxRetxPerBurst</div><div class=\"TTSummary\">The number of maximum retransmissions per burst (if burst)</div></div>",9166:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9166\" class=\"NDPrototype NoParameterForm\">NodeStatus m_status</div><div class=\"TTSummary\">The status of the node</div></div>",9167:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9167\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_syncSamplingVersion</div><div class=\"TTSummary\">The version of the Sync Sampling formulas to use.</div></div>",9168:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9168\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_optimized</div><div class=\"TTSummary\">Whether or not this node has attempted optimization</div></div>",9169:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9169\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_configApplied</div><div class=\"TTSummary\">Whether or not the configuration has been applied for this node</div></div>",9170:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9170\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_startedSampling</div><div class=\"TTSummary\">Whether or not the Node has been send the Start Sync Sampling command.</div></div>",9171:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9171\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_hasPendingConfig</div><div class=\"TTSummary\">Whether or not there is a &quot;pending&quot; configuration set for this Node.</div></div>",9172:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9172\" class=\"NDPrototype NoParameterForm\">WirelessNodeConfig m_pendingConfig</div><div class=\"TTSummary\">A WirelessNodeConfig set to be used in all sync network calculations, without actually being applied to the Node.</div></div>",9174:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9174\" class=\"NDPrototype NoParameterForm\">NodeStatus status() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node\'s network status.</div></div>",9175:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9175\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> startedSampling() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether a Node has successfully started sampling.&nbsp; Note: if this returns false, its not 100% gauranteed that the Node isn\'t sampling. It\'s possible the node was successfully started, but that the response never got to the BaseStation.</div></div>",9176:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9176\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> configurationApplied() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not the network configuration has been successfully applied to this node.</div></div>",9177:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9177\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> percentBandwidth() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node\'s individual percent of bandwidth in the network.</div></div>",9178:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9178\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> tdmaAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the TDMA address that was found and assigned to the node.</div></div>",9179:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9179\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> maxTdmaAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum TDMA address that can be assigned to this node. (Advanced)</div></div>",9180:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets the number of transmissions per group for this node. (Advanced)</div></div>",9181:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9181\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> groupSize() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the group size for this node. (Advanced)</div></div>",9182:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9182\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> syncSamplingVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">The version of the Sync Sampling formulas to use.</div></div>",9183:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9183\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> dutyCycle() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the duty cycle currently set (for Event Driven).</div></div>",9184:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9184\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> dutyCycle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">percent</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",9185:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9185\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasPendingConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not this network info has a pending configuration set.</div></div>",9186:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9186\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setPendingConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNodeConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets a pending configuration for the Node in this network info.&nbsp; This is a configuration that is not actually applied to the Node, but should be used in all sync network calculations.</div></div>",9187:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9187\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> WirelessNodeConfig&amp; getPendingConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current pending configuration that is set.</div></div>",9188:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9188\" class=\"NDPrototype NoParameterForm\">ChannelGroups channelGroups() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ChannelGroups for the Wireless Node.</div></div>"});