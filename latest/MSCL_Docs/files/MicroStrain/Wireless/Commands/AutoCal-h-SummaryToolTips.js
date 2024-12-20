NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/AutoCal.h",{5870:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Struct used internally to hold details for passing to the AutoCal function.&nbsp; Contains the ShuntCalCmdInfo that we want user exposed, as well as other internal info.</div></div>",5871:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5871\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoCal</div></div></div><div class=\"TTSummary\">Contains logic for the AutoCal Node command.</div></div>",5873:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5873\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_shmLink(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessPacket::</td><td class=\"PType\">AsppVersion&nbsp;</td><td class=\"PName last\">asppVer,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the AutoCal command packet for the SHM-Link node.</div></div>",5874:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5874\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_shmLink201(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessPacket::</td><td class=\"PType\">AsppVersion&nbsp;</td><td class=\"PName last\">asppVer,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the AutoCal command packet for the SHM-Link-201 node.</div></div>",5875:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5875\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_shuntCal(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessPacket::</td><td class=\"PType\">AsppVersion&nbsp;</td><td></td><td class=\"PName last\">asppVer,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">AutoCalCmdDetails&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">details</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the AutoCal command packet for shunt calibration.</div></div>",5876:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5876\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the AutoBalance Node command</div></div>",5878:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5878\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a AutoCal Response object</div></div>",5880:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5880\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address to look for in the response.</div></div>",5881:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5881\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_calStarted</div><div class=\"TTSummary\">Whether the AutoCal has been successfully started or not (as reported by the Node).</div></div>",5882:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5882\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalCompletionFlag m_completionFlag</div><div class=\"TTSummary\">The &lt;AutoCalCompletionFlag&gt; representing the final autocal status.</div></div>",5883:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5883\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_timeUntilCompletion</div><div class=\"TTSummary\">The amount of time (in seconds) that the autocal operation will take to complete.&nbsp; This value gets reported by the Node before starting the calibration.</div></div>",5884:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5884\" class=\"NDPrototype NoParameterForm\">Bytes m_infoBytes</div><div class=\"TTSummary\">Contains all of the information bytes from the completion response.</div></div>",5886:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5886\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> calStarted() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the AutoCal operation has started or not.</div></div>",5887:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5887\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> calTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total time (in seconds) that the Node reported it will take to complete the AutoCal operation.</div></div>",5888:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5888\" class=\"NDPrototype NoParameterForm\">WirelessTypes::AutoCalCompletionFlag completionFlag() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::AutoCalCompletionFlag of the AutoCal operation.</div></div>",5889:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5889\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Bytes&amp; infoBytes() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the information bytes returned from the AutoCal completion packet.</div></div>",5890:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5890\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> match(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the expected response pattern\'s bytes.</div></div>",5891:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5891\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> match_nodeReceived(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the &quot;Node Received&quot; packet.</div></div>",5892:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5892\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ShmResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an SHM Autocal Response object</div></div>",5893:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5893\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Shm201Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an SHM-Link-201 Autocal Response object</div></div>",5894:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5894\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ShuntCalResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">channelNumber</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Shunt Cal Autocal Response object</div></div>",5896:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5896\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_channelNumber</div><div class=\"TTSummary\">The channel number to match in the response.</div></div>"});