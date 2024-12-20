NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/EulerAngles.h",{2594:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2594\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EulerAngles</div></div></div><div class=\"TTSummary\">Represents generic Euler Angles (roll, pitch, yaw).</div></div>",2596:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2596\" class=\"NDPrototype NoParameterForm\">EulerAngles()</div><div class=\"TTSummary\">Creates an EulerAngles object.</div></div>",2597:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2597\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">EulerAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">roll,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">pitch,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">yaw</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an EulerAngles object with the specified roll, pitch, and yaw/heading.</div></div>",2598:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2598\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">EulerAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">data,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">offset&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a EulerAngles object based on specified &lt;MipFieldValues&gt; data</div></div>",2599:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2599\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> Rotation() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates a Rotation object with this object\'s roll, pitch, and yaw values</div></div>",2600:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2600\" class=\"NDPrototype NoParameterForm\">MipFieldValues asMipFieldValues() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current euler angles values formatted as a &lt;MipFieldValues&gt; object.</div></div>",2601:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2601\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">appendTo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Adds the properly formatted &lt;MipFieldValues&gt; that represent this object to the specified collection.</div></div>",2602:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2602\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> roll() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the roll angle.</div></div>",2603:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2603\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> pitch() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the pitch angle.</div></div>",2604:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2604\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> yaw() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the yaw (heading) angle.</div></div>",2605:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2605\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> heading() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the heading (yaw) angle.</div></div>",2606:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2606\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Quaternion</div></div></div></div>",2608:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2608\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Quaternion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">q0,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">q1,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">q2,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">q3</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an Quaternion object.</div></div>",2609:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2609\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Quaternion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">data,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">offset&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Quaternion object based on specified &lt;MipFieldValues&gt; data</div></div>",2610:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2610\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> Rotation() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates a Rotation object with this object\'s values</div></div>",2611:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2611\" class=\"NDPrototype NoParameterForm\">MipFieldValues asMipFieldValues() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current quaternion values formatted as a &lt;MipFieldValues&gt; object</div></div>",2612:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2612\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">appendTo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Adds the properly formatted &lt;MipFieldValues&gt; that represent this object to the specified collection.</div></div>",2613:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2613\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> normalize()</div><div class=\"TTSummary\">normalize the quaternion value</div></div>",2614:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2614\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> q0() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the 0-index value (usually w).</div></div>",2615:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2615\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> q1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the 1-index value (usually x).</div></div>",2616:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2616\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> q2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the 2-index value (usually y).</div></div>",2617:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2617\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> q3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the 3-index value (usually z).</div></div>",2618:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2618\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Rotation</div></div></div><div class=\"TTSummary\">Structure that can represent either a Quaternion or EulerAngles object.</div></div>",2620:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Possible formats for the Rotation object.</div></div>",2624:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2624\" class=\"NDPrototype NoParameterForm\">Rotation() : Rotation(EulerAngles(<span class=\"SHNumber\">0</span>, <span class=\"SHNumber\">0</span>, <span class=\"SHNumber\">0</span>))</div><div class=\"TTSummary\">Constructs a Rotation object with default values.</div></div>",2625:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2625\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Rotation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EulerAngles&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">angles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified EulerAngles.</div></div>",2626:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2626\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Rotation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Quaternion&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">quat</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified Quaternion.</div></div>",2627:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2627\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Rotation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">data,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">offset&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Rotation object based on specified &lt;MipFieldValues&gt; data</div></div>",2628:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2628\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Rotation FromEulerAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EulerAngles&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">angles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified EulerAngles.</div></div>",2629:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2629\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Rotation FromQuaternion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Quaternion&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">quat</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified Quaternion.</div></div>",2630:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2630\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> EulerAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an EulerAngles object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an EulerAngles rotation.</div></div>",2631:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2631\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> Quaternion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an Quaternion object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an Quaternion rotation.</div></div>",2632:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2632\" class=\"NDPrototype NoParameterForm\">EulerAngles asEulerAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an EulerAngles object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an EulerAngles rotation.</div></div>",2633:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2633\" class=\"NDPrototype NoParameterForm\">Quaternion asQuaternion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an Quaternion object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an Quaternion rotation.</div></div>",2634:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2634\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipFieldValues asMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">includeFormat&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the current quaternion values formatted as a &lt;MipFieldValues&gt; object</div></div>",2635:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2635\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">appendTo,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">includeFormat&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Adds the properly formatted &lt;MipFieldValues&gt; that represent this object to the specified collection.</div></div>",2637:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2637\" class=\"NDPrototype NoParameterForm\">Format m_format</div><div class=\"TTSummary\">The Format this Rotation object represents</div></div>",2639:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2639\" class=\"NDPrototype NoParameterForm\">Format format() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Format of this Rotation object.</div></div>"});