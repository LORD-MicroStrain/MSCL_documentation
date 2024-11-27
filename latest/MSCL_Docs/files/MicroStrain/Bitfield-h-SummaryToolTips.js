NDSummary.OnToolTipsLoaded("File:MicroStrain/Bitfield.h",{10019:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype10019\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Bitfield</div></div></div></div>",10021:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10021\" class=\"NDPrototype NoParameterForm\">Bitfield()</div><div class=\"TTSummary\">Constructs Bitfield object with value 0</div></div>",10022:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10022\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Bitfield(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">) : m_value(val)</td></tr></table></div><div class=\"TTSummary\">Constructs Bitfield object with indicated value</div></div>",10023:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10023\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~Bitfield()</div><div class=\"TTSummary\">Default destructor for the Bitfield object</div></div>",10025:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype10025\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> m_value</div><div class=\"TTSummary\">The bitfield value</div></div>",10027:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10027\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> value() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets or sets the entire underlying bitfield value</div></div>",10028:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10028\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint64 get</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName\">mask,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">shiftToLsb&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the value of only the bits masked by the indicated mask.</div></div>",10029:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10029\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void set</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName\">mask,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName\">value,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">shiftRequired&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the provided value to the position indicated by the indicated mask</div></div>",10030:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10030\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> checkBit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">bitIndex,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">indexBase&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the value of the bit at the specified index.</div></div>",10031:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10031\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setBit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">bitIndex,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">value,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">indexBase&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the value of the bit at the specified index.</div></div>",10032:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype10032\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> clear(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets all bits under the indicated mask to 0.</div></div>"});