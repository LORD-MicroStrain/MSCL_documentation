NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/EulerAngles.h",{2749:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2749\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EulerAngles</div></div></div><div class=\"TTSummary\">Represents generic Euler Angles (roll, pitch, yaw).</div></div>",2751:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2751\" class=\"NDPrototype NoParameterForm\">EulerAngles()</div><div class=\"TTSummary\">Creates an EulerAngles object.</div></div>",2752:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2752\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">EulerAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">roll,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">pitch,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">yaw</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an EulerAngles object with the specified roll, pitch, and yaw/heading.</div></div>",2753:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2753\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">EulerAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">data,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">offset&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a EulerAngles object based on specified &lt;MipFieldValues&gt; data</div></div>",2754:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2754\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> Rotation() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates a Rotation object with this object\'s roll, pitch, and yaw values</div></div>",2755:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2755\" class=\"NDPrototype NoParameterForm\">MipFieldValues asMipFieldValues() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current euler angles values formatted as a &lt;MipFieldValues&gt; object.</div></div>",2756:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2756\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">appendTo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Adds the properly formatted &lt;MipFieldValues&gt; that represent this object to the specified collection.</div></div>",2757:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2757\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> roll() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the roll angle.</div></div>",2758:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2758\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> pitch() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the pitch angle.</div></div>",2759:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2759\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> yaw() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the yaw (heading) angle.</div></div>",2760:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2760\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> heading() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the heading (yaw) angle.</div></div>",2761:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2761\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Quaternion</div></div></div></div>",2763:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2763\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Quaternion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">q0,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">q1,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">q2,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">q3</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an Quaternion object.</div></div>",2764:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2764\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Quaternion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">data,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">offset&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Quaternion object based on specified &lt;MipFieldValues&gt; data</div></div>",2765:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2765\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> Rotation() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates a Rotation object with this object\'s values</div></div>",2766:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2766\" class=\"NDPrototype NoParameterForm\">MipFieldValues asMipFieldValues() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current quaternion values formatted as a &lt;MipFieldValues&gt; object</div></div>",2767:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2767\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">appendTo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Adds the properly formatted &lt;MipFieldValues&gt; that represent this object to the specified collection.</div></div>",2768:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2768\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> normalize()</div><div class=\"TTSummary\">normalize the quaternion value</div></div>",2769:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2769\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> q0() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the 0-index value (usually w).</div></div>",2770:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2770\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> q1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the 1-index value (usually x).</div></div>",2771:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2771\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> q2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the 2-index value (usually y).</div></div>",2772:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2772\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> q3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the 3-index value (usually z).</div></div>",2773:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2773\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Rotation</div></div></div><div class=\"TTSummary\">Structure that can represent either a Quaternion or EulerAngles object.</div></div>",2775:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Possible formats for the Rotation object.</div></div>",2779:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2779\" class=\"NDPrototype NoParameterForm\">Rotation() : Rotation(EulerAngles(<span class=\"SHNumber\">0</span>, <span class=\"SHNumber\">0</span>, <span class=\"SHNumber\">0</span>))</div><div class=\"TTSummary\">Constructs a Rotation object with default values.</div></div>",2780:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2780\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Rotation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EulerAngles&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">angles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified EulerAngles.</div></div>",2781:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2781\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Rotation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Quaternion&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">quat</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified Quaternion.</div></div>",2782:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2782\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Rotation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">data,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">offset&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Rotation object based on specified &lt;MipFieldValues&gt; data</div></div>",2783:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2783\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Rotation FromEulerAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EulerAngles&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">angles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified EulerAngles.</div></div>",2784:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2784\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Rotation FromQuaternion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Quaternion&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">quat</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified Quaternion.</div></div>",2785:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2785\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> EulerAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an EulerAngles object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an EulerAngles rotation.</div></div>",2786:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2786\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> Quaternion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an Quaternion object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an Quaternion rotation.</div></div>",2787:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2787\" class=\"NDPrototype NoParameterForm\">EulerAngles asEulerAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an EulerAngles object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an EulerAngles rotation.</div></div>",2788:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2788\" class=\"NDPrototype NoParameterForm\">Quaternion asQuaternion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an Quaternion object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an Quaternion rotation.</div></div>",2789:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2789\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipFieldValues asMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">includeFormat&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the current quaternion values formatted as a &lt;MipFieldValues&gt; object</div></div>",2790:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2790\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">appendTo,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">includeFormat&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Adds the properly formatted &lt;MipFieldValues&gt; that represent this object to the specified collection.</div></div>",2792:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2792\" class=\"NDPrototype NoParameterForm\">Format m_format</div><div class=\"TTSummary\">The Format this Rotation object represents</div></div>",2794:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2794\" class=\"NDPrototype NoParameterForm\">Format format() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Format of this Rotation object.</div></div>"});