NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/Packets/MipDataPacket.h",{1103:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1103\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipDataPacket</div></div></div><div class=\"TTSummary\">A Mip Data Packet that contains both valid and invalid data from a MIP Device.</div></div>",1104:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1104\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipDataPoints&amp; data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets all the MipDataPoints that are contained within this packet.</div></div>",1105:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1105\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipSharedDataFields&amp; shared() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the MipSharedDataFields object that makes the shared field information within this packet more easily accessible.</div></div>",1106:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1106\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; collectedTimestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp representing when the packet was collected by MSCL.</div></div>",1107:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1107\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; deviceTimestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp which was transmitted in the Mip Data Packet as a channel field.&nbsp; Note: This will return a Timestamp of 0 if deviceTimeValid returns false.</div></div>",1108:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1108\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasDeviceTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Whether the data packet had a Timestamp field included in it.</div></div>",1109:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1109\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> deviceTimeValid() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Whether the Timestamp field sent from the device is valid or not.</div></div>",1110:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1110\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> deviceTimeFlags() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the timestamp flags that were transmitted in the Mip Data Packet.&nbsp; Note: This will return 0 if deviceTimeValid returns false.</div></div>",1111:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a vector of MipDataPacket objects.</div></div>"});