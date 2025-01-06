NDSummary.OnToolTipsLoaded("File:BitMask.h",{4574:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4574\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BitMask</div></div></div><div class=\"TTSummary\">Represents a bitmask.</div></div>",4575:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4575\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> BitMask(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an BitMask object given a uint16 value.</div></div>",4576:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4576\" class=\"NDPrototype NoParameterForm\">BitMask()</div><div class=\"TTSummary\">The default constructor for creating a BitMask object, which sets all the bits to inactive.</div></div>",4577:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4577\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~BitMask()</div><div class=\"TTSummary\">Destroys a BitMask object.</div></div>",4578:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Equal operator for comparing BitMasks.</div></div>",4579:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Not Equal operator for comparing BitMasks.</div></div>",4580:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Less Than operator for comparing BitMasks.</div></div>",4581:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Greater Than operator for comparing BitMasks.</div></div>",4582:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4582\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> fromMask(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the BitMask object from a uint16.</div></div>",4583:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4583\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint16</span> toMask() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the uint16 value of the current BitMask object.</div></div>",4584:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4584\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> enabledCount() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total number of enabled bits in the current BitMask object.</div></div>",4585:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4585\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> enabled(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">bitIndex</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether a certain bit is enabled or disabled.</div></div>",4586:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4586\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> enable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">bitIndex,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">enable&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables or disables a specified bit.</div></div>",4587:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4587\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual int16</span> lastBitEnabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Finds the highest bit that is enabled in the mask.&nbsp; This is useful when looping over the BitMask object and performing an action on all enabled bits.</div></div>"});