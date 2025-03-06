NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/NodeDiscovery.h",{9299:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype9299\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeDiscovery</div></div></div><div class=\"TTSummary\">Represents 1 node discovery, which is created when a Wireless Node Discovery packet is sent from a Node.&nbsp; Note: There are multiple versions of Node Discovery packets which have been developed over time.&nbsp; Each version has added more useful information. If an earlier version of the Node Discovery packet is heard, this NodeDiscovery object will have some information be invalid (set to default values).</div></div>",9301:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9301\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> NodeDiscovery(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a NodeDiscovery object from a WirelessPacket</div></div>",9303:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9303\" class=\"NDPrototype NoParameterForm\">WirelessTypes::EepromMap m_eepromMap</div><div class=\"TTSummary\">Contains an eeprom map to use for updating a WirelessNode\'s eeprom cache with the Node Discovery info, if desired.</div></div>",9304:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9304\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address of the node that sent the Node Discovery packet.</div></div>",9305:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9305\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency m_radioChannel</div><div class=\"TTSummary\">The radio channel (WirelessTypes::Frequency) that the node was on that sent the Node Discovery packet.</div></div>",9306:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9306\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_panId</div><div class=\"TTSummary\">The PAN id of the Node that send the Node Discovery packet.</div></div>",9307:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9307\" class=\"NDPrototype NoParameterForm\">WirelessModels::NodeModel m_model</div><div class=\"TTSummary\">The model of the node that sent the Node Discovery packet.</div></div>",9308:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9308\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_serialNumber</div><div class=\"TTSummary\">The serial number of the node that sent the Node Discovery packet.</div></div>",9309:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9309\" class=\"NDPrototype NoParameterForm\">Version m_firmwareVersion</div><div class=\"TTSummary\">The firmware version of the node that sent the Node Discovery packet.</div></div>",9310:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9310\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DefaultMode m_defaultMode</div><div class=\"TTSummary\">The WirelessTypes::DefaultMode of the node that sent the Node Discovery packet.</div></div>",9311:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9311\" class=\"NDPrototype NoParameterForm\">WirelessTypes::CommProtocol m_commProtocol</div><div class=\"TTSummary\">The WirelessTypes::CommProtocol of the node that sent the Node Discovery packet.</div></div>",9312:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9312\" class=\"NDPrototype NoParameterForm\">Version m_asppVersionLxrs</div><div class=\"TTSummary\">The ASPP Version of the node when in LXRS mode.</div></div>",9313:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9313\" class=\"NDPrototype NoParameterForm\">Version m_asppVersionLxrsPlus</div><div class=\"TTSummary\">The ASPP Version of the node when in LXRS+ mode.</div></div>",9314:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9314\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_bitResult</div><div class=\"TTSummary\">The Built In Test result that was sent in the packet.</div></div>",9315:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9315\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_baseRssi</div><div class=\"TTSummary\">The Base Station RSSI that identifies the received signal strength at the Base Station.</div></div>",9316:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype9316\" class=\"NDPrototype NoParameterForm\">Timestamp m_timestamp</div><div class=\"TTSummary\">The Timestamp of when the NodeDiscovery packet was received by MSCL.</div></div>",9318:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9318\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> initFromPacket_v1(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the NodeDiscovery object from a version 1 Node Discovery packet.</div></div>",9319:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9319\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> initFromPacket_v2(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the NodeDiscovery object from a version 2 Node Discovery packet.</div></div>",9320:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9320\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> initFromPacket_v3(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the NodeDiscovery object from a version 3 Node Discovery packet.</div></div>",9321:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9321\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> initFromPacket_v4(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the NodeDiscovery object from a version 4 Node Discovery packet.</div></div>",9322:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9322\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> initFromPacket_v5(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the NodeDiscovery object from a version 5 Node Discovery packet.</div></div>",9323:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9323\" class=\"NDPrototype NoParameterForm\">NodeAddress nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address of the discovered Node.</div></div>",9324:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9324\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::Frequency of the discovered Node.</div></div>",9325:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9325\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> panId() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the PAN Id of the discovered Node.&nbsp; Note: Returns 0 if not present in the packet.</div></div>",9326:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9326\" class=\"NDPrototype NoParameterForm\">WirelessModels::NodeModel model() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the model of the discovered Node.</div></div>",9327:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9327\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> serialNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the discovered Node.&nbsp; Note: Returns 0 if not present in the packet.</div></div>",9328:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9328\" class=\"NDPrototype NoParameterForm\">Version firmwareVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the firmware version of the discovered Node.&nbsp; Note: Returns 0.0.0 if not present in the packet.</div></div>",9329:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9329\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DefaultMode defaultMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::DefaultMode of the discovered Node.&nbsp; Note: Returns 999 if not present in the packet.</div></div>",9330:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9330\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> builtInTestResult() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the result bitmask of the built in test.</div></div>",9331:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9331\" class=\"NDPrototype NoParameterForm\">WirelessTypes::CommProtocol communicationProtocol() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::CommProtocol of the discovered Node.</div></div>",9332:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9332\" class=\"NDPrototype NoParameterForm\">Version asppVersion_lxrs() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ASPP protocol Version of the Node when it is in LXRS RadioMode.</div></div>",9333:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9333\" class=\"NDPrototype NoParameterForm\">Version asppVersion_lxrsPlus() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ASPP protocol Version of the Node when it is in LXRS+ RadioMode.</div></div>",9334:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9334\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> baseRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the base station rssi of the discovered Node.</div></div>",9335:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype9335\" class=\"NDPrototype NoParameterForm\">Timestamp timestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp of when the NodeDiscovery packet was received by MSCL.</div></div>",9337:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a vector of NodeDiscovery objects</div></div>"});