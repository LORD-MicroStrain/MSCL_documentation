NDSummary.OnToolTipsLoaded("CClass:MeasurementReferenceFrame",{931:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype931\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MeasurementReferenceFrame</div></div></div><div class=\"TTSummary\">Represents a configurable Aiding Measurement reference frame (0x13,0x01)</div></div>",932:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype932\" class=\"NDPrototype NoParameterForm\">MeasurementReferenceFrame()</div><div class=\"TTSummary\">Constructs a MeasurementReferenceFrame object with default values</div></div>",933:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype933\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MeasurementReferenceFrame(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">PositionOffset&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">translation,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Rotation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">rotation</td></tr></table></td><td class=\"PAfterParameters\">) : m_translation(translation), m_rotation(rotation)</td></tr></table></div><div class=\"TTSummary\">Constructs a MeasurementReferenceFrame object with the specified translation and rotation values</div></div>",934:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype934\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MeasurementReferenceFrame(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">data,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">offset&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MeasurementReferenceFrame object based on specified &lt;MipFieldValues&gt; data</div></div>",935:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype935\" class=\"NDPrototype NoParameterForm\">MipFieldValues asMipFieldValues() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current reference frame values formatted as a &lt;MipFieldValues&gt; object</div></div>",936:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype936\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">appendTo</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Adds the properly formatted &lt;MipFieldValues&gt; that represent this object to the specified collection.</div></div>",937:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype937\" class=\"NDPrototype NoParameterForm\">PositionOffset translation() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the PositionOffset translation of this reference frame.</div></div>",938:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype938\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> translation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">PositionOffset&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">translation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Set the PositionOffset translation of this reference frame.</div></div>",939:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype939\" class=\"NDPrototype NoParameterForm\">Rotation rotation() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the Rotation of this reference frame</div></div>",940:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype940\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> rotation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Rotation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">rotation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Set the Rotation of this reference frame.</div></div>",941:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype941\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> errorTrackingEnabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Indicates whether error tracking is enabled for this reference frame.</div></div>",942:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype942\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> enableErrorTracking(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">enable&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enable/Disable error tracking for this reference frame.</div></div>",943:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A map of reference frame IDs with their associated MeasurementReferenceFrame values.</div></div>"});