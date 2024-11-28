NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/EulerAngles.h",{140:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype140\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EulerAngles</div></div></div><div class=\"TTSummary\">Represents generic Euler Angles (roll, pitch, yaw).</div></div>",141:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype141\" class=\"NDPrototype NoParameterForm\">EulerAngles()</div><div class=\"TTSummary\">Creates an EulerAngles object.</div></div>",142:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype142\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">EulerAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">roll,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">pitch,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">yaw</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an EulerAngles object with the specified roll, pitch, and yaw/heading.</div></div>",143:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype143\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">EulerAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">data,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">offset&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a EulerAngles object based on specified &lt;MipFieldValues&gt; data</div></div>",144:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype144\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> Rotation() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates a Rotation object with this object\'s roll, pitch, and yaw values</div></div>",145:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype145\" class=\"NDPrototype NoParameterForm\">MipFieldValues asMipFieldValues() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current euler angles values formatted as a &lt;MipFieldValues&gt; object.</div></div>",146:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype146\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">appendTo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Adds the properly formatted &lt;MipFieldValues&gt; that represent this object to the specified collection.</div></div>",147:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype147\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> roll() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the roll angle.</div></div>",148:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype148\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> pitch() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the pitch angle.</div></div>",149:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype149\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> yaw() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the yaw (heading) angle.</div></div>",150:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype150\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> heading() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the heading (yaw) angle.</div></div>",151:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype151\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Quaternion</div></div></div></div>",152:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype152\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Quaternion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">q0,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">q1,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">q2,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">q3</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an Quaternion object.</div></div>",153:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype153\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Quaternion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">data,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">offset&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Quaternion object based on specified &lt;MipFieldValues&gt; data</div></div>",154:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype154\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> Rotation() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates a Rotation object with this object\'s values</div></div>",155:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype155\" class=\"NDPrototype NoParameterForm\">MipFieldValues asMipFieldValues() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current quaternion values formatted as a &lt;MipFieldValues&gt; object</div></div>",156:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype156\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">appendTo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Adds the properly formatted &lt;MipFieldValues&gt; that represent this object to the specified collection.</div></div>",157:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype157\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> normalize()</div><div class=\"TTSummary\">normalize the quaternion value</div></div>",158:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype158\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> q0() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the 0-index value (usually w).</div></div>",159:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype159\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> q1() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the 1-index value (usually x).</div></div>",160:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype160\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> q2() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the 2-index value (usually y).</div></div>",161:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype161\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> q3() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the 3-index value (usually z).</div></div>",162:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype162\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Rotation</div></div></div><div class=\"TTSummary\">Structure that can represent either a Quaternion or EulerAngles object.</div></div>",163:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Possible formats for the Rotation object.</div></div>",166:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype166\" class=\"NDPrototype NoParameterForm\">Rotation() : Rotation(EulerAngles(<span class=\"SHNumber\">0</span>, <span class=\"SHNumber\">0</span>, <span class=\"SHNumber\">0</span>))</div><div class=\"TTSummary\">Constructs a Rotation object with default values.</div></div>",167:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype167\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Rotation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EulerAngles&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">angles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified EulerAngles.</div></div>",168:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype168\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Rotation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Quaternion&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">quat</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified Quaternion.</div></div>",169:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype169\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Rotation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">data,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">offset&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Rotation object based on specified &lt;MipFieldValues&gt; data</div></div>",170:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype170\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Rotation FromEulerAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EulerAngles&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">angles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified EulerAngles.</div></div>",171:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype171\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Rotation FromQuaternion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Quaternion&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">quat</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified Quaternion.</div></div>",172:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype172\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> EulerAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an EulerAngles object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an EulerAngles rotation.</div></div>",173:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype173\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> Quaternion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an Quaternion object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an Quaternion rotation.</div></div>",174:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype174\" class=\"NDPrototype NoParameterForm\">EulerAngles asEulerAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an EulerAngles object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an EulerAngles rotation.</div></div>",175:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype175\" class=\"NDPrototype NoParameterForm\">Quaternion asQuaternion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an Quaternion object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an Quaternion rotation.</div></div>",176:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype176\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipFieldValues asMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">includeFormat&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the current quaternion values formatted as a &lt;MipFieldValues&gt; object</div></div>",177:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype177\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">appendTo,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">includeFormat&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Adds the properly formatted &lt;MipFieldValues&gt; that represent this object to the specified collection.</div></div>",178:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype178\" class=\"NDPrototype NoParameterForm\">Format format() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Format of this Rotation object.</div></div>"});