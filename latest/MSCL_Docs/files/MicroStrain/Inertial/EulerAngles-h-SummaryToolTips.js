NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/EulerAngles.h",{2776:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2776\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EulerAngles</div></div></div><div class=\"TTSummary\">Represents generic Euler Angles (roll, pitch, yaw).</div></div>",2778:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2778\" class=\"NDPrototype NoParameterForm\">EulerAngles()</div><div class=\"TTSummary\">Creates an EulerAngles object.</div></div>",2779:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2779\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">EulerAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">roll,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">pitch,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">yaw</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an EulerAngles object with the specified roll, pitch, and yaw/heading.</div></div>",2780:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2780\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">EulerAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">data,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">offset&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a EulerAngles object based on specified &lt;MipFieldValues&gt; data</div></div>",2781:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2781\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> Rotation() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates a Rotation object with this object\'s roll, pitch, and yaw values</div></div>",2782:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2782\" class=\"NDPrototype NoParameterForm\">MipFieldValues asMipFieldValues() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current euler angles values formatted as a &lt;MipFieldValues&gt; object.</div></div>",2783:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2783\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">appendTo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Adds the properly formatted &lt;MipFieldValues&gt; that represent this object to the specified collection.</div></div>",2784:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2784\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> roll() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the roll angle.</div></div>",2785:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2785\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> pitch() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the pitch angle.</div></div>",2786:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2786\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> yaw() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the yaw (heading) angle.</div></div>",2787:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2787\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> heading() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the heading (yaw) angle.</div></div>",2788:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2788\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Quaternion</div></div></div></div>",2790:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2790\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Quaternion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">q0,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">q1,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">q2,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">q3</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an Quaternion object.</div></div>",2791:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2791\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Quaternion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">data,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">offset&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Quaternion object based on specified &lt;MipFieldValues&gt; data</div></div>",2792:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2792\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> Rotation() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates a Rotation object with this object\'s values</div></div>",2793:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2793\" class=\"NDPrototype NoParameterForm\">MipFieldValues asMipFieldValues() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current quaternion values formatted as a &lt;MipFieldValues&gt; object</div></div>",2794:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2794\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">appendTo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Adds the properly formatted &lt;MipFieldValues&gt; that represent this object to the specified collection.</div></div>",2795:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2795\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> normalize()</div><div class=\"TTSummary\">normalize the quaternion value</div></div>",2796:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2796\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> q0() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the 0-index value (usually w).</div></div>",2797:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2797\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> q1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the 1-index value (usually x).</div></div>",2798:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2798\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> q2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the 2-index value (usually y).</div></div>",2799:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2799\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> q3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the 3-index value (usually z).</div></div>",2800:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2800\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Rotation</div></div></div><div class=\"TTSummary\">Structure that can represent either a Quaternion or EulerAngles object.</div></div>",2802:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Possible formats for the Rotation object.</div></div>",2806:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2806\" class=\"NDPrototype NoParameterForm\">Rotation() : Rotation(EulerAngles(<span class=\"SHNumber\">0</span>, <span class=\"SHNumber\">0</span>, <span class=\"SHNumber\">0</span>))</div><div class=\"TTSummary\">Constructs a Rotation object with default values.</div></div>",2807:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2807\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Rotation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EulerAngles&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">angles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified EulerAngles.</div></div>",2808:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2808\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Rotation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Quaternion&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">quat</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified Quaternion.</div></div>",2809:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2809\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Rotation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">data,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">offset&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Rotation object based on specified &lt;MipFieldValues&gt; data</div></div>",2810:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2810\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Rotation FromEulerAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EulerAngles&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">angles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified EulerAngles.</div></div>",2811:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2811\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Rotation FromQuaternion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Quaternion&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">quat</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified Quaternion.</div></div>",2812:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2812\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> EulerAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an EulerAngles object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an EulerAngles rotation.</div></div>",2813:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2813\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> Quaternion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an Quaternion object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an Quaternion rotation.</div></div>",2814:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2814\" class=\"NDPrototype NoParameterForm\">EulerAngles asEulerAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an EulerAngles object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an EulerAngles rotation.</div></div>",2815:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2815\" class=\"NDPrototype NoParameterForm\">Quaternion asQuaternion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an Quaternion object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an Quaternion rotation.</div></div>",2816:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2816\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipFieldValues asMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">includeFormat&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the current quaternion values formatted as a &lt;MipFieldValues&gt; object</div></div>",2817:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2817\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">appendTo,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">includeFormat&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Adds the properly formatted &lt;MipFieldValues&gt; that represent this object to the specified collection.</div></div>",2819:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2819\" class=\"NDPrototype NoParameterForm\">Format m_format</div><div class=\"TTSummary\">The Format this Rotation object represents</div></div>",2821:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2821\" class=\"NDPrototype NoParameterForm\">Format format() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Format of this Rotation object.</div></div>"});