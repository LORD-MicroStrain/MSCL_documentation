NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/EstFilter_Commands.h",{829:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype829\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GetEstFilterDataRateBase</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Get Estimation Filter Data Rate Base&quot; command</div></div>",835:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype835\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand()</div><div class=\"TTSummary\">Builds the bytes in the command</div></div>",836:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype836\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the command</div></div>",838:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets the MipTypes::Command</div></div>",839:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype839\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data field descriptor byte</div></div>",840:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype840\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates the Response object</div></div>",841:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype841\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> parseResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Parses the response, getting the data rate base result</div></div>",842:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype842\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EstFilterMessageFormat</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Estimation Filter Message Format&quot; command</div></div>",848:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype848\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command</div></div>",849:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype849\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipChannels&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channels,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">sampleRateBase</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",850:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype850\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_save()</div><div class=\"TTSummary\">Builds the bytes for the &quot;save&quot; command</div></div>",851:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype851\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ResetFilter</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Reset Filter&quot; command</div></div>",856:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype856\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand()</div><div class=\"TTSummary\">Builds the bytes for the command.</div></div>",857:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype857\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SetInitialAttitude</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Set Initial Attitude&quot; command</div></div>",862:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype862\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EulerAngles&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">attitude</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the command.</div></div>",863:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype863\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SetInitialHeading</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Set Initial Heading&quot; command</div></div>",868:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype868\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">heading</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the command.</div></div>",869:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype869\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AltitudeAidControl</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Altitude Aid Control&quot; command</div></div>",875:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype875\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command.</div></div>",876:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype876\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",877:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype877\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">PitchRollAidControl</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Pitch/Roll Aid Control&quot; command</div></div>",883:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype883\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command.</div></div>",884:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype884\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",885:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype885\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">VelocityZUPTControl</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Velocity ZUPT Control&quot; command</div></div>",891:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype891\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command.</div></div>",892:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype892\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ZUPTSettingsData&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">settingsData</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",893:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype893\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AngularRateZUPTControl</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Angular Rate ZUPT Control&quot; command</div></div>",899:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype899\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command.</div></div>",900:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype900\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ZUPTSettingsData&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">settingsData</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",901:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype901\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">TareOrientation</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Tare Orientation&quot; command</div></div>",907:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype907\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">TareAxisValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">axisValue</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",908:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype908\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AutoInitializeControl</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Auto-Initialization Control&quot; command</div></div>",914:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype914\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command.</div></div>",915:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype915\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",916:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype916\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">CmdedVelZupt</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Commanded Zero Velocity Update&quot; command</div></div>",922:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype922\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command.</div></div>",923:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype923\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">CmdedAngularZupt</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Commanded Zero Angular Rate Update&quot; command</div></div>",929:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype929\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command.</div></div>",930:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype930\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SensorToVehicFrameTrans</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Sensor to Vehicle Frame Transformation&quot; command</div></div>",936:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype936\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command.</div></div>",937:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype937\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EulerAngles&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">angles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",938:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype938\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SensorToVehicFrameOffset</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Sensor to Vehicle Frame Offset&quot; command</div></div>",944:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype944\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command.</div></div>",945:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype945\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">PositionOffset&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">offset</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",946:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype946\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AntennaOffset</div></div></div><div class=\"TTSummary\">Contains the logic for the &quot;Antenna Offset&quot; command</div></div>",952:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype952\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command.</div></div>",953:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype953\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">PositionOffset&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">offset</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>"});