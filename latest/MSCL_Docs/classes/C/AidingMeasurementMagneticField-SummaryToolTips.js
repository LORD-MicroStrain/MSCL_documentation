NDSummary.OnToolTipsLoaded("CClass:AidingMeasurementMagneticField",{4012:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4012\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AidingMeasurementMagneticField</div></div></div><div class=\"TTSummary\">A class that represents magnetic field aiding measurement input. Extends AidingMeasurementInput.</div></div>",4014:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Bitmask for each position value in the valid flags.</div></div>",4019:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4019\" class=\"NDPrototype NoParameterForm\">Vec3f m_magField</div><div class=\"TTSummary\">The magnetic field measurement</div></div>",4020:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4020\" class=\"NDPrototype NoParameterForm\">Vec3f m_unc</div><div class=\"TTSummary\">The uncertainty of the height measurement</div></div>",4022:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4022\" class=\"NDPrototype NoParameterForm\">AidingMeasurementMagneticField() : AidingMeasurementInput()</div><div class=\"TTSummary\">Constructs an AidingMeasurementMagneticField object with default values</div></div>",4023:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4023\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">AidingMeasurementMagneticField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs an AidingMeasurementMagneticField object from the &lt;MipFieldValues&gt; parameter list returned from the device.</div></div>",4024:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4024\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parseMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Populates measurement values based on the &lt;MipFieldValues&gt; parameter list.</div></div>",4025:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4025\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div><div class=\"TTSummary\">Appends the velocity measurement info to the provided &lt;MipFieldValues&gt; parameter list.</div></div>",4026:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4026\" class=\"NDPrototype NoParameterForm\">Vec3f magneticField() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the magnetic field measurement.</div></div>",4027:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4027\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> magneticField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Vec3f&nbsp;</td><td class=\"PName last\">magField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Set the magneticField measurement.</div></div>",4028:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4028\" class=\"NDPrototype NoParameterForm\">Vec3f uncertainty() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the measurement uncertainty</div></div>",4029:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4029\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> uncertainty(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Vec3f&nbsp;</td><td class=\"PName last\">uncertainty</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the measurement uncertainty.</div></div>",4030:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4030\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> valid(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ValidFlags&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the specified value is valid.</div></div>",4031:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4031\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> valid(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ValidFlags&nbsp;</td><td class=\"PName last\">val,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">valid</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the validity of the specified value.</div></div>"});