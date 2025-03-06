NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/Sensor_Commands.h",{479:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype479\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GetSensorDataRateBase</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Get Sensor Data Rate Base&quot; command</div></div>",485:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype485\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand()</div><div class=\"TTSummary\">Builds the bytes in the command</div></div>",486:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype486\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the command</div></div>",488:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype488\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Gets the data field descriptor byte</div></div>",489:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype489\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates the Response object</div></div>",490:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype490\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> parseResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Parses the response, getting the data rate base result</div></div>",491:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype491\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SensorMessageFormat</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Sensor Data Message Format&quot; command</div></div>",497:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype497\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command</div></div>",498:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype498\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipChannels&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">sampleRateBase</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",499:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Builds the bytes for the command to save the current settings as the startup settings.</div></div>"});