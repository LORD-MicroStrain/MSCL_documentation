NDSummary.OnToolTipsLoaded("CClass:WirelessPacket",{7459:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7459\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessPacket</div></div></div><div class=\"TTSummary\">Represents a MicroStrain wireless packet</div></div>",7461:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for the bytes that make up a payload in a packet</div></div>",7477:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible ASPP versions</div></div>",7481:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Possible error codes from response packets.</div></div>",7488:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7488\" class=\"NDPrototype NoParameterForm\">WirelessPacket()</div><div class=\"TTSummary\">The default constructor for a wireless packet</div></div>",7489:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7489\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> throwEepromResponseError(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ResponseErrorCode&nbsp;</td><td class=\"PName last\">errorCode,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Throws an exception based on a ResponseErrorCode from a read/write eeprom command.&nbsp; Not all error codes will cause an exception.</div></div>",7491:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7491\" class=\"NDPrototype NoParameterForm\">AsppVersion m_asppVersion</div><div class=\"TTSummary\">The AsppVersion for the packet.</div></div>",7492:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7492\" class=\"NDPrototype NoParameterForm\">DeliveryStopFlags m_deliveryStopFlags</div><div class=\"TTSummary\">The delivery stop flags of the packet</div></div>",7493:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7493\" class=\"NDPrototype NoParameterForm\">PacketType m_type</div><div class=\"TTSummary\">The packet type of the packet</div></div>",7494:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7494\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address in the packet</div></div>",7495:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7495\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_nodeRSSI</div><div class=\"TTSummary\">The node received signal strength indicator (strength of which the node received the command from the base station).&nbsp; This value will be set to -200 if the packet contains a legacy junk lqi byte that should be thrown out.</div></div>",7496:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7496\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_baseRSSI</div><div class=\"TTSummary\">The base received signal strength indicator (strength of which the base station received the response from the node).</div></div>",7497:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7497\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency m_frequency</div><div class=\"TTSummary\">The WirelessTypes::Frequency that this packet was collected on.</div></div>",7498:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7498\" class=\"NDPrototype NoParameterForm\">Payload m_payload</div><div class=\"TTSummary\">The payload bytes in the packet</div></div>",7500:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets whether or not the packet is a Data packet.</div></div>",7501:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7501\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> isDataPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">PacketType&nbsp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets whether or not the packet is a Data packet.</div></div>",7502:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7502\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> isDiscoveryPacket() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not the packet is a Node Discovery packet.</div></div>",7503:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7503\" class=\"NDPrototype NoParameterForm\">AsppVersion asppVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ASPP version of the packet.</div></div>",7504:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7504\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> asppVersion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">AsppVersion&nbsp;</td><td class=\"PName last\">ver</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the ASPP version of the packet.</div></div>",7505:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7505\" class=\"NDPrototype NoParameterForm\">DeliveryStopFlags deliveryStopFlags() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the delivery stop flags for the packet</div></div>",7506:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7506\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> deliveryStopFlags(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DeliveryStopFlags&nbsp;</td><td class=\"PName last\">flags</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the delivery stop flags to the passed in flags</div></div>",7507:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7507\" class=\"NDPrototype NoParameterForm\">PacketType type() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the packet type of the packet</div></div>",7508:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7508\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> type(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">PacketType&nbsp;</td><td class=\"PName last\">packetType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the packet type of the packet</div></div>",7509:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7509\" class=\"NDPrototype NoParameterForm\">NodeAddress nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address of the packet</div></div>",7510:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7510\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">address</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node address of the packet</div></div>",7511:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7511\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> nodeRSSI() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node RSSI of the packet</div></div>",7512:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7512\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeRSSI(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">rssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node RSSI of the packet</div></div>",7513:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7513\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> baseRSSI() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the base station RSSI of the packet</div></div>",7514:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7514\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> baseRSSI(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">rssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the base station RSSI of the packet</div></div>",7515:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7515\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::Frequency that the packet was collected on</div></div>",7516:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7516\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> frequency(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the WirelessTypes::Frequency that the packet was collected on</div></div>",7517:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7517\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Payload&amp; payload() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the payload bytes of the packet</div></div>",7518:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7518\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> payload(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">bytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the payload bytes of the packet</div></div>"});