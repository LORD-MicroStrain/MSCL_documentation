NDSummary.OnToolTipsLoaded("CClass:SyncSamplingNetwork",{8823:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype8823\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SyncSamplingNetwork</div></div></div><div class=\"TTSummary\">Used to configure and start a Synchronized Sampling network of wireless nodes.</div></div>",8825:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8825\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> SyncSamplingNetwork(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">networkBaseStation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SyncSamplingNetwork object used to configure and start a Synchronized Sampling network.</div></div>",8827:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype8827\" class=\"NDPrototype NoParameterForm\">BaseStation m_networkBase</div><div class=\"TTSummary\">The BaseStation that will act as the parent base station for this network, performing all the communication with the Nodes.</div></div>",8828:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype8828\" class=\"NDPrototype NoParameterForm\">std::map&lt;NodeAddress, std::unique_ptr&lt;SyncNetworkInfo&gt; &gt; m_nodes</div><div class=\"TTSummary\">A map of node addresses to SyncNetworkInfos containing all the nodes that were added to the network.</div></div>",8829:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype8829\" class=\"NDPrototype NoParameterForm\">std::vector&lt;NodeAddress&gt; m_allNodes</div><div class=\"TTSummary\">A vector of node addresses for every node in the network.</div></div>",8830:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype8830\" class=\"NDPrototype NoParameterForm\">std::vector&lt;NodeAddress&gt; m_eventNodes</div><div class=\"TTSummary\">A vector of node addresses for every node in Event-Driven mode.</div></div>",8831:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype8831\" class=\"NDPrototype NoParameterForm\">std::vector&lt;NodeAddress&gt; m_nonEventNodes</div><div class=\"TTSummary\">A vector of node addresses for every node Not in Event-Driven mode.</div></div>",8832:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype8832\" class=\"NDPrototype NoParameterForm\">std::vector&lt;<span class=\"SHKeyword\">bool</span>&gt; m_slots</div><div class=\"TTSummary\">A vector of bools representing all of the transmission slots. If a slot is set (true), it it taken. If a slot is unset (false), it is available.</div></div>",8833:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype8833\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_lossless</div><div class=\"TTSummary\">Whether the lossless option is enabled or not.</div></div>",8834:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype8834\" class=\"NDPrototype NoParameterForm\">WirelessTypes::CommProtocol m_commProtocol</div><div class=\"TTSummary\">The WirelessTypes::CommProtocol that the network is using (based off of the master BaseStation\'s comm protocol when this network was created).</div></div>",8835:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype8835\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_percentBandwidth</div><div class=\"TTSummary\">The percent of bandwidth for the entire Sync Sampling Network.&nbsp; This includes nodes that could not find TDMA slots, but does not include nodes who failed to communicate.</div></div>",8836:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype8836\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_networkOk</div><div class=\"TTSummary\">Whether the Sync Sampling Network is OK (true) or has problems (false).</div></div>",8837:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype8837\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_configApplied</div><div class=\"TTSummary\">Whether the calculated network configuration values have been applied to all of the nodes in the network.</div></div>",8838:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype8838\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_disabledBeacon</div><div class=\"TTSummary\">Whether the beacon has already been disabled or not by this object.</div></div>",8839:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype8839\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_availableSlotCount</div><div class=\"TTSummary\">The number of remaining available slots.</div></div>",8841:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8841\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addNode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">node</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a WirelessNode to the Sync Sampling network. If the Node already exists in the network, it will not be added.&nbsp; The Node\'s parent BaseStation should be the same as the network\'s master BaseStation.&nbsp; The Node should have its sampling configuration set to a Synchronized Sampling mode prior to adding to be successfully added.</div></div>",8842:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8842\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addNode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">node,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNodeConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">pendingConfig</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a WirelessNode to the Sync Sampling network. If the Node already exists in the network, it will not be added.&nbsp; The Node\'s parent BaseStation should be the same as the network\'s master BaseStation.&nbsp; The Node should have its sampling configuration set to a Synchronized Sampling mode prior to adding to be successfully added.</div></div>",8843:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8843\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> removeNode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Removes a WirelessNode from the Sync Sampling network, if it exists in the network.</div></div>",8844:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8844\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> percentBandwidth() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total percent bandwidth for the Sync Sampling Network.&nbsp; This includes nodes that could not find TDMA slots, but does not include nodes who failed to communicate (status of &lt;status_PoorCommunication&gt;).</div></div>",8845:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8845\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> ok() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the Sync Sampling Network is OK (true), or has problems such as exceeding bandwidth (false).</div></div>",8846:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8846\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> refresh()</div><div class=\"TTSummary\">Refreshes the Sync Sampling Network.&nbsp; This function must be called when any WirelessNode has changed its configuration after being added to the network!</div></div>",8847:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8847\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> lossless() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the lossless option is enabled or not for the entire network (default of enabled).&nbsp; The lossless feature enables buffering and retransmissions in order to provide 100% packet success rate under most operating conditions.&nbsp; This does, however, have a possible increase in latency, especially in poor RF environments.</div></div>",8848:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8848\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> lossless(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables or Disables the lossless option for the entire network. If changed, refresh will be called.&nbsp; The lossless feature enables buffering and retransmissions in order to provide 100% packet success rate under most operating conditions.&nbsp; This can, however, cause a possible increase in latency, especially in poor RF environments.</div></div>",8849:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8849\" class=\"NDPrototype NoParameterForm\">WirelessTypes::CommProtocol communicationProtocol() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::CommProtocol that is set for the network.&nbsp; This setting initially gets loaded from the protocol that the BaseStation is configured for when the network is first created.</div></div>",8850:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8850\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> communicationProtocol(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">protocol</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the WirelessTypes::CommProtocol for the network.&nbsp; The initial communicationProtocol is set to whichever mode the BaseStation was configured for when the network was first created.&nbsp; Changing this setting will call refresh and the network calculations (such as percentBandwidth) will be updated.&nbsp; Note: Changing this does not actually change the protocol of the BaseStation or Nodes in the network. All devices must be changed to the same WirelessTypes::CommProtocol that the network is set to before applyConfiguration is called, or else an exception will be thrown.</div></div>",8851:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8851\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> applyConfiguration()</div><div class=\"TTSummary\">Applies the Sync Sampling network settings to all of the nodes in the network.&nbsp; This action is required before starting a Sync Sampling network. The network status must be OK before this can be called.&nbsp; Calling this function repeatedly will only affect the node\'s that haven\'t had their configuration applied successfully. This can be useful if some nodes successfully apply, while others fail to communicate.&nbsp; Note: This will clear any &quot;pending&quot; configurations that any nodes have in the network.&nbsp; You must manually apply those configuration templates to the nodes if you want them to actually be applied to the devices.</div></div>",8852:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8852\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> startSampling()</div><div class=\"TTSummary\">Starts the network sampling by sending the start command to each node, and then starting the beacon on the master basestation with the current system time.  applyConfiguration must be called before this function is called.&nbsp; Calling this function repeatedly will only start the node\'s that haven\'t been started already. This can be useful if some nodes successfully start, while others fail to communicate. The beacon will not be started until all nodes have started.</div></div>",8853:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8853\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> startSampling(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Timestamp&nbsp;</td><td class=\"PName last\">startTime</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Starts the network sampling by sending the start command to each node, and then starting the beacon on the master basestation with the given Timestamp.  applyConfiguration must be called before this function is called.&nbsp; Calling this function repeatedly will only start the node\'s that haven\'t been started already. This can be useful if some nodes successfully start, while others fail to communicate. The beacon will not be started until all nodes have started.</div></div>",8854:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8854\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> startSampling_noBeacon()</div><div class=\"TTSummary\">Sends the start command to each node in the network. The beacon is not started. Note: The nodes will not actually start sampling until they hear a beacon.  applyConfiguration must be called before this function is called.&nbsp; Calling this function repeatedly will only start the node\'s that haven\'t been started already. This can be useful if some nodes successfully start, while others fail to communicate.</div></div>",8855:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8855\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SyncNetworkInfo&amp; getNodeNetworkInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the SyncNetworkInfo object containing network information on the specified WirelessNode within the Sync Sampling network.</div></div>",8856:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8856\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addNodeToNetwork(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">node,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNodeConfig&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName\">pendingConfig&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">nullptr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a WirelessNode to the Sync Sampling network, with or without a given pending WirelessNodeConfig.&nbsp; If the Node already exists in the network, it will not be added.&nbsp; The Node\'s parent BaseStation should be the same as the network\'s master BaseStation.&nbsp; The Node should have its sampling configuration, or the provided pending configuration, set to a Synchronized Sampling mode prior to adding to be successfully added.</div></div>",8857:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8857\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> calculateNetworkValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">optimizeBandwidth</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the network values for a single node, such as transmissions per group and group size.&nbsp; This reads values that are stored on the node to use in the calculations.</div></div>",8858:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8858\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> updateNetworkStatus()</div><div class=\"TTSummary\">Updates the status of each Node and calculates the total percent of bandwidth</div></div>",8859:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8859\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sortByBandwidth(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;NodeAddress&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">container&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sorts the vector of nodes by the percent of bandwidth (and by node address is bandwidth is the same).</div></div>",8860:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8860\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> sortingFunction(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">address1,</td></tr><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">address2</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">The function used as a predicate to sort the networkorder container by bandwidth</div></div>",8861:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8861\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> findSlotsForNodes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;NodeAddress&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">nodes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Finds TDMA slots for every Node in the given vector of nodes.&nbsp; Note that this clears m_slots before finding new slots for all of the Nodes.</div></div>",8862:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8862\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> getTdmaSlot(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Finds a TDMA slot for a single Node.</div></div>",8863:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8863\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> optimizeBandwidth()</div><div class=\"TTSummary\">Tries to optimize the bandwidth to give lossless nodes more time to transmit.&nbsp; Nodes may be given different slots and the network order rearranged.</div></div>",8864:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8864\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> findSamplingDelay(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the sampling delay for a node in the network.</div></div>",8865:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8865\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> sendStartToAllNodes()</div><div class=\"TTSummary\">Sends the start sync sampling command to all nodes in the network.</div></div>",8866:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype8866\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> inLegacyMode()</div><div class=\"TTSummary\">Gets whether the network is in legacy mode (has at least 1 sync v1 node) or not.</div></div>"});