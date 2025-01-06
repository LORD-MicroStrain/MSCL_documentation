NDSummary.OnToolTipsLoaded("CClass:BaseStationFeatures",{3045:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3045\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a BaseStation.</div></div>",3046:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3046\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> supportsTransmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">TransmitPower&nbsp;</td><td class=\"PName last\">power,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::TransmitPower is supported by this BaseStation.</div></div>",3047:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3047\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> supportsCommunicationProtocol(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">protocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a WirelessTypes::CommProtocol is supported by this BaseStation.</div></div>",3048:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3048\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsButtons() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports Button configuration.</div></div>",3049:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3049\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsAnalogPairing() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports Analog Pairing configuration.</div></div>",3050:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3050\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsBeaconStatus() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports the beaconStatus command.</div></div>",3051:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3051\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsRfSweepMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports RF Sweep Mode.&nbsp; Note: This checks if the standard RF sweep mode across the BaseStation\'s supported operating frequencies is supported.&nbsp; Use supportsCustomRfSweepMode to check if customizing the frequencies to be scanned is supported.</div></div>",3052:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3052\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> supportsCustomRfSweepMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if the BaseStation supports the Custom RF Sweep Mode (providing custom frequency ranges).</div></div>",3053:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3053\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> buttonCount() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total number of buttons that are supported.</div></div>",3054:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3054\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> analogPortCount() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total number of analog ports that are supported.</div></div>",3055:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3055\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::TransmitPowers transmitPowers(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::TransmitPowers that are supported by this BaseStation, for the specified WirelessTypes::CommProtocol.&nbsp; Note: This list is dependent on the &lt;WirelessTypes::RegionCode&gt; of the device. If this changes, this function should be called again.</div></div>",3056:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3056\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::TransmitPowers transmitPowers(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">RegionCode&nbsp;</td><td class=\"PName last\">region,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets a list of the WirelessTypes::TransmitPowers that are supported by this BaseStation, for the given &lt;WirelessTypes::RegionCode&gt; and WirelessTypes::CommProtocol.</div></div>",3057:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3057\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessTypes::CommProtocols commProtocols() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a list of WirelessTypes::CommProtocols that are supported by this BaseStation.</div></div>",3058:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3058\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> WirelessTypes::TransmitPower maxTransmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">RegionCode&nbsp;</td><td class=\"PName last\">region,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the maximum WirelessTypes::TransmitPower that is supported for the given parameters.</div></div>",3059:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3059\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> WirelessTypes::TransmitPower minTransmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">RegionCode&nbsp;</td><td class=\"PName last\">region,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the minimum WirelessTypes::TransmitPower that is supported for the given parameters.</div></div>"});