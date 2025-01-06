NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/EulerAngles.h",{1054:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1054\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EulerAngles</div></div></div><div class=\"TTSummary\">Represents generic Euler Angles (roll, pitch, yaw).</div></div>",1055:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1055\" class=\"NDPrototype NoParameterForm\">EulerAngles()</div><div class=\"TTSummary\">Creates an EulerAngles object.</div></div>",1056:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1056\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">EulerAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">roll,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">pitch,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">yaw</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an EulerAngles object with the specified roll, pitch, and yaw/heading.</div></div>",1057:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1057\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">EulerAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">data,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">offset&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a EulerAngles object based on specified &lt;MipFieldValues&gt; data</div></div>",1058:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1058\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> Rotation() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates a Rotation object with this object\'s roll, pitch, and yaw values</div></div>",1059:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1059\" class=\"NDPrototype NoParameterForm\">MipFieldValues asMipFieldValues() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current euler angles values formatted as a &lt;MipFieldValues&gt; object.</div></div>",1060:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1060\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">appendTo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Adds the properly formatted &lt;MipFieldValues&gt; that represent this object to the specified collection.</div></div>",1061:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1061\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> roll() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the roll angle.</div></div>",1062:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1062\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> pitch() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the pitch angle.</div></div>",1063:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1063\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> yaw() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the yaw (heading) angle.</div></div>",1064:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1064\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> heading() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the heading (yaw) angle.</div></div>",1065:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1065\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Quaternion</div></div></div></div>",1066:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1066\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Quaternion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">q0,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">q1,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">q2,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">q3</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an Quaternion object.</div></div>",1067:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1067\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Quaternion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">data,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">offset&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Quaternion object based on specified &lt;MipFieldValues&gt; data</div></div>",1068:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1068\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> Rotation() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates a Rotation object with this object\'s values</div></div>",1069:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1069\" class=\"NDPrototype NoParameterForm\">MipFieldValues asMipFieldValues() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current quaternion values formatted as a &lt;MipFieldValues&gt; object</div></div>",1070:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1070\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">appendTo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Adds the properly formatted &lt;MipFieldValues&gt; that represent this object to the specified collection.</div></div>",1071:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1071\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> normalize()</div><div class=\"TTSummary\">normalize the quaternion value</div></div>",1072:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1072\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> q0() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the 0-index value (usually w).</div></div>",1073:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1073\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> q1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the 1-index value (usually x).</div></div>",1074:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1074\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> q2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the 2-index value (usually y).</div></div>",1075:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1075\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> q3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the 3-index value (usually z).</div></div>",1076:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1076\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Rotation</div></div></div><div class=\"TTSummary\">Structure that can represent either a Quaternion or EulerAngles object.</div></div>",1077:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Possible formats for the Rotation object.</div></div>",1080:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1080\" class=\"NDPrototype NoParameterForm\">Rotation() : Rotation(EulerAngles(<span class=\"SHNumber\">0</span>, <span class=\"SHNumber\">0</span>, <span class=\"SHNumber\">0</span>))</div><div class=\"TTSummary\">Constructs a Rotation object with default values.</div></div>",1081:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1081\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Rotation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EulerAngles&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">angles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified EulerAngles.</div></div>",1082:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1082\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Rotation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Quaternion&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">quat</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified Quaternion.</div></div>",1083:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1083\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Rotation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">data,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">offset&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Rotation object based on specified &lt;MipFieldValues&gt; data</div></div>",1084:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1084\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Rotation FromEulerAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EulerAngles&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">angles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified EulerAngles.</div></div>",1085:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1085\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Rotation FromQuaternion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Quaternion&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">quat</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified Quaternion.</div></div>",1086:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1086\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> EulerAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an EulerAngles object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an EulerAngles rotation.</div></div>",1087:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1087\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> Quaternion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an Quaternion object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an Quaternion rotation.</div></div>",1088:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1088\" class=\"NDPrototype NoParameterForm\">EulerAngles asEulerAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an EulerAngles object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an EulerAngles rotation.</div></div>",1089:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1089\" class=\"NDPrototype NoParameterForm\">Quaternion asQuaternion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an Quaternion object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an Quaternion rotation.</div></div>",1090:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1090\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipFieldValues asMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">includeFormat&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the current quaternion values formatted as a &lt;MipFieldValues&gt; object</div></div>",1091:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1091\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">appendTo,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">includeFormat&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Adds the properly formatted &lt;MipFieldValues&gt; that represent this object to the specified collection.</div></div>",1092:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1092\" class=\"NDPrototype NoParameterForm\">Format format() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Format of this Rotation object.</div></div>"});