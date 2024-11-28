NDSummary.OnToolTipsLoaded("CClass:AidingMeasurementMagneticField",{5065:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5065\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AidingMeasurementMagneticField</div></div></div><div class=\"TTSummary\">A class that represents magnetic field aiding measurement input. Extends AidingMeasurementInput.</div></div>",5067:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Bitmask for each position value in the valid flags.</div></div>",5072:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5072\" class=\"NDPrototype NoParameterForm\">Vec3f m_magField</div><div class=\"TTSummary\">The magnetic field measurement</div></div>",5073:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5073\" class=\"NDPrototype NoParameterForm\">Vec3f m_unc</div><div class=\"TTSummary\">The uncertainty of the height measurement</div></div>",5075:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5075\" class=\"NDPrototype NoParameterForm\">AidingMeasurementMagneticField() : AidingMeasurementInput()</div><div class=\"TTSummary\">Constructs an AidingMeasurementMagneticField object with default values</div></div>",5076:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5076\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">AidingMeasurementMagneticField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Constructs an AidingMeasurementMagneticField object from the &lt;MipFieldValues&gt; parameter list returned from the device.</div></div>",5077:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5077\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parseMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Populates measurement values based on the &lt;MipFieldValues&gt; parameter list.</div></div>",5078:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5078\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> appendMipFieldValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MipFieldValues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">values</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div><div class=\"TTSummary\">Appends the velocity measurement info to the provided &lt;MipFieldValues&gt; parameter list.</div></div>",5079:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5079\" class=\"NDPrototype NoParameterForm\">Vec3f magneticField() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the magnetic field measurement.</div></div>",5080:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5080\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> magneticField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Vec3f&nbsp;</td><td class=\"PName last\">magField</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Set the magneticField measurement.</div></div>",5081:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5081\" class=\"NDPrototype NoParameterForm\">Vec3f uncertainty() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the measurement uncertainty</div></div>",5082:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5082\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> uncertainty(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Vec3f&nbsp;</td><td class=\"PName last\">uncertainty</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the measurement uncertainty.</div></div>",5083:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5083\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> valid(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ValidFlags&nbsp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the specified value is valid.</div></div>",5084:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5084\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> valid(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ValidFlags&nbsp;</td><td class=\"PName last\">val,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">valid</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the validity of the specified value.</div></div>"});