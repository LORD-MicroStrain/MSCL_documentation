NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/Packets/MipDataPacket.h",{1064:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1064\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipDataPacket</div></div></div><div class=\"TTSummary\">A Mip Data Packet that contains both valid and invalid data from a MIP Device.</div></div>",1065:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1065\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipDataPoints&amp; data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets all the MipDataPoints that are contained within this packet.</div></div>",1066:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1066\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipSharedDataFields&amp; shared() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the MipSharedDataFields object that makes the shared field information within this packet more easily accessible.</div></div>",1067:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1067\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; collectedTimestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp representing when the packet was collected by MSCL.</div></div>",1068:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1068\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; deviceTimestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp which was transmitted in the Mip Data Packet as a channel field.&nbsp; Note: This will return a Timestamp of 0 if deviceTimeValid returns false.</div></div>",1069:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1069\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasDeviceTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Whether the data packet had a Timestamp field included in it.</div></div>",1070:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1070\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> deviceTimeValid() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Whether the Timestamp field sent from the device is valid or not.</div></div>",1071:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1071\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> deviceTimeFlags() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the timestamp flags that were transmitted in the Mip Data Packet.&nbsp; Note: This will return 0 if deviceTimeValid returns false.</div></div>",1072:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a vector of MipDataPacket objects.</div></div>"});