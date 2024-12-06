NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/PositionVelocity.h",{77:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The vector values.</div></div>",78:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype78\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Vec3f(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">y,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">z</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Vec3f object.</div></div>",79:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype79\" class=\"NDPrototype NoParameterForm\">Vec3f()</div><div class=\"TTSummary\">Creates a zero-filled Vec3f object.</div></div>",80:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype80\" class=\"NDPrototype NoParameterForm\">~Vec3f()</div></div>",81:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype81\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> x() <span class=\"SHKeyword\">const</span></div></div>",82:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype82\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> y() <span class=\"SHKeyword\">const</span></div></div>",83:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype83\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> z() <span class=\"SHKeyword\">const</span></div></div>",84:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Enum representing position and velocity reference frame options.</div></div>",89:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype89\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GeometricVector</div></div></div><div class=\"TTSummary\">Defines a 3 dimensional, spatial vector.</div></div>",90:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype90\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeometricVector VectorECEF(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">x_init,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">y_init,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">z_init</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes and returns a new vector with the reference frame set to Earth-Centered, Earth-Fixed</div></div>",91:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype91\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeometricVector VectorNED(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">north,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">east,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">down</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes and returns a new vector with the reference frame set to North-East-Down</div></div>",92:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype92\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">GeometricVector(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName\">x_init,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName\">y_init,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName\">z_init,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">PositionVelocityReferenceFrame&nbsp;</td><td class=\"PName\">ref&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">PositionVelocityReferenceFrame::ECEF</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a GeometricVector object.</div></div>",93:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype93\" class=\"NDPrototype NoParameterForm\">GeometricVector()</div><div class=\"TTSummary\">Creates a zero-filled GeometricVector object.&nbsp; Default reference frame: ECEF</div></div>",94:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype94\" class=\"NDPrototype NoParameterForm\">~GeometricVector()</div><div class=\"TTSummary\">Destroys a TimeUpdate object.</div></div>",95:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype95\" class=\"NDPrototype NoParameterForm\">PositionVelocityReferenceFrame referenceFrame</div><div class=\"TTSummary\">The PositionVelocityReferenceFrame of this vector.&nbsp; Default: ECEF</div></div>",96:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype96\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> north() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is LLH_NED</div></div>",97:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype97\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> east() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is LLH_NED</div></div>",98:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype98\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> down() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is LLH_NED</div></div>",99:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype99\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">PositionOffset</div></div></div><div class=\"TTSummary\">Represents a position offset (x, y, z).</div></div>",100:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype100\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Velocity</div></div></div><div class=\"TTSummary\">Represents a velocity (x, y, z).</div></div>",101:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype101\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Velocity ECEF(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">x_init,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">y_init,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">z_init</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Velocity vectory with the reference frame set to Earth-Centered, Earth-Fixed</div></div>",102:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype102\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Velocity NED(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">north,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">east,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">down</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Velocity vector with the reference frame set to North-East-Down</div></div>",103:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype103\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Velocity Vehicle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">y,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">z</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Velocity vector with the reference frame set to Vehicle</div></div>",104:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of GeometricVector objects</div></div>",105:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Defines a geographic position.</div></div>",106:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype106\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Position LLH(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">lat_init,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">long_init,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">alt_init</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Position object with the reference frame set to LLH</div></div>",107:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype107\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Position ECEF(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">x_init,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">y_init,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">z_init</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Position object with the reference frame set to ECEF</div></div>",108:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype108\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Position(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName\">lat_init,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName\">long_init,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName\">alt_init,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">PositionVelocityReferenceFrame&nbsp;</td><td class=\"PName\">ref&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">PositionVelocityReferenceFrame::LLH_NED</td></tr></table></td><td class=\"PAfterParameters\">) : position_0(lat_init), position_1(long_init), position_2(alt_init), referenceFrame(<span class=\"SHKeyword\">ref</span>)</td></tr></table></div><div class=\"TTSummary\">Creates a Position object.</div></div>",109:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype109\" class=\"NDPrototype NoParameterForm\">Position() : position_0(<span class=\"SHNumber\">0</span>), position_1(<span class=\"SHNumber\">0</span>), position_2(<span class=\"SHNumber\">0</span>), referenceFrame(PositionVelocityReferenceFrame::LLH_NED)</div><div class=\"TTSummary\">Creates a zero-filled Position object.&nbsp; Default reference frame: LLH</div></div>",110:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype110\" class=\"NDPrototype NoParameterForm\">~Position()</div><div class=\"TTSummary\">Destroys a TimeUpdate object.</div></div>",111:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype111\" class=\"NDPrototype NoParameterForm\">PositionVelocityReferenceFrame referenceFrame</div><div class=\"TTSummary\">The PositionVelocityReferenceFrame of this position.&nbsp; Default: LLH</div></div>",112:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype112\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> latitude() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is LLH_NED</div></div>",113:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype113\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> longitude() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is LLH_NED</div></div>",114:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype114\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> altitude() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is LLH_NED</div></div>",115:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype115\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> height() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is LLH_NED</div></div>",116:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype116\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> x() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is ECEF</div></div>",117:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype117\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> y() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is ECEF</div></div>",118:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype118\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> z() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is ECEF</div></div>",119:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The position values</div></div>",120:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype120\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GeometricUncertainty</div></div></div><div class=\"TTSummary\">Represents uncertainty values correlating to a position or velocity.</div></div>"});