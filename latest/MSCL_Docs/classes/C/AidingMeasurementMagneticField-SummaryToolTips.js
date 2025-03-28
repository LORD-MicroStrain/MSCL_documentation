NDSummary.OnToolTipsLoaded("CClass:AidingMeasurementMagneticField",{4388:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4388\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AidingMeasurementMagneticField</div></div></div><div class=\"TTSummary\">A class that represents magnetic field aiding measurement input. Extends AidingMeasurementInput.</div></div>",4390:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Bitmask for each position value in the valid flags.</div></div>",4395:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4395\" class=\"NDPrototype NoParameterForm\">Vec3f m_magField</div><div class=\"TTSummary\">The magnetic field measurement</div></div>",4396:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4396\" class=\"NDPrototype NoParameterForm\">Vec3f m_unc</div><div class=\"TTSummary\">The uncertainty of the height measurement</div></div>",4398:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4398\" class=\"NDPrototype NoParameterForm\">AidingMeasurementMagneticField() : AidingMeasurementInput()</div><div class=\"TTSummary\">Constructs an AidingMeasurementMagneticField object with default values</div></div>",4399:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4399\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">AidingMeasurementMagneticField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs an AidingMeasurementMagneticField object from the &lt;MipFieldValues&gt; parameter list returned from the device.</div></div>",4400:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4400\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> parseMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Populates measurement values based on the &lt;MipFieldValues&gt; parameter list.</div></div>",4401:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4401\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div><div class=\"TTSummary\">Appends the velocity measurement info to the provided &lt;MipFieldValues&gt; parameter list.</div></div>",4402:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4402\" class=\"NDPrototype NoParameterForm\">Vec3f magneticField() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the magnetic field measurement.</div></div>",4403:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4403\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> magneticField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Vec3f&nbsp;</td><td class=\"PName last\">magField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Set the magneticField measurement.</div></div>",4404:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4404\" class=\"NDPrototype NoParameterForm\">Vec3f uncertainty() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the measurement uncertainty</div></div>",4405:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4405\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> uncertainty(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Vec3f&nbsp;</td><td class=\"PName last\">uncertainty</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the measurement uncertainty.</div></div>",4406:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4406\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> valid(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ValidFlags&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the specified value is valid.</div></div>",4407:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4407\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> valid(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ValidFlags&nbsp;</td><td class=\"PName last\">val,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">valid</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the validity of the specified value.</div></div>"});