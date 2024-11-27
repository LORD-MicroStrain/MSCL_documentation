NDSummary.OnToolTipsLoaded("CClass:RTKNode",{1342:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1342\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">RTKNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain RTK Node</div></div>",1343:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1343\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> RTKNode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Connection&nbsp;</td><td class=\"PName last\">connection</td></tr></table></td><td class=\"PAfterParameters\">) : MipNode(connection)</td></tr></table></div><div class=\"TTSummary\">Creates an RTKNode object.</div></div>",1344:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1344\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> getCommunicationMode() <span class=\"SHKeyword\">override</span></div><div class=\"TTSummary\">Gets the current communication mode that the node is in.</div></div>",1345:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1345\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setCommunicationMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">communicationMode</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Sets the communication mode for the node.&nbsp; Note: The node info will be reset when doing this and therefore will require being fetched again the next time it is requested.</div></div>",1346:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1346\" class=\"NDPrototype NoParameterForm\">RTKDeviceStatusFlags getDeviceStatusFlags() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the status flags for the RTK device.</div></div>",1347:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1347\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> getActivationCode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Activation Code of the RTK device.</div></div>",1348:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1348\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> getStatusBitfieldVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Extracts the bitfield version number from the RTK status flag.&nbsp; 0 - V1 1 - V2</div></div>"});