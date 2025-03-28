NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/GNSS_AssistedFixControl.h",{692:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype692\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GNSS_AssistedFixControl</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial GNSS Assist Fix Control command.</div></div>",697:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype697\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command.</div></div>",698:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype698\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enableAssistedFix</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",699:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype699\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the GNSS Assisted Fix Control command.</div></div>",701:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype701\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> fieldDataByte() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Gets the data field descriptor byte</div></div>",702:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype702\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">ackNackExpected,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">dataResponseExpected</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a GNSS Assisted Fix Control Response object</div></div>",703:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype703\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> parseResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Parses the response, getting the data rate base result</div></div>"});