NDSummary.OnToolTipsLoaded("CClass:Rotation",{1695:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1695\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Rotation</div></div></div><div class=\"TTSummary\">Structure that can represent either a Quaternion or EulerAngles object.</div></div>",1697:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Possible formats for the Rotation object.</div></div>",1701:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1701\" class=\"NDPrototype NoParameterForm\">Rotation() : Rotation(EulerAngles(<span class=\"SHNumber\">0</span>, <span class=\"SHNumber\">0</span>, <span class=\"SHNumber\">0</span>))</div><div class=\"TTSummary\">Constructs a Rotation object with default values.</div></div>",1702:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1702\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Rotation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EulerAngles&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">angles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified EulerAngles.</div></div>",1703:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1703\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Rotation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Quaternion&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">quat</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified Quaternion.</div></div>",1704:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1704\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Rotation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">data,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">offset&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Rotation object based on specified &lt;MipFieldValues&gt; data</div></div>",1705:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1705\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Rotation FromEulerAngles(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EulerAngles&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">angles</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified EulerAngles.</div></div>",1706:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1706\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Rotation FromQuaternion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Quaternion&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">quat</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs a Rotation object based on the specified Quaternion.</div></div>",1707:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1707\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> EulerAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an EulerAngles object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an EulerAngles rotation.</div></div>",1708:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1708\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> Quaternion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an Quaternion object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an Quaternion rotation.</div></div>",1709:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1709\" class=\"NDPrototype NoParameterForm\">EulerAngles asEulerAngles() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an EulerAngles object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an EulerAngles rotation.</div></div>",1710:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1710\" class=\"NDPrototype NoParameterForm\">Quaternion asQuaternion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Creates an Quaternion object with this object\'s rotation values.  Error_BadDataType exception will be thrown if this Rotation object does not represent an Quaternion rotation.</div></div>",1711:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1711\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipFieldValues asMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">includeFormat&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the current quaternion values formatted as a &lt;MipFieldValues&gt; object</div></div>",1712:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1712\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">appendTo,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td></td><td class=\"PName\">includeFormat&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Adds the properly formatted &lt;MipFieldValues&gt; that represent this object to the specified collection.</div></div>",1714:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1714\" class=\"NDPrototype NoParameterForm\">Format m_format</div><div class=\"TTSummary\">The Format this Rotation object represents</div></div>",1716:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1716\" class=\"NDPrototype NoParameterForm\">Format format() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Format of this Rotation object.</div></div>"});