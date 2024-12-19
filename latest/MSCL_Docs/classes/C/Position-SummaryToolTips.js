NDSummary.OnToolTipsLoaded("CClass:Position",{1652:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Defines a geographic position.</div></div>",1654:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1654\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Position LLH(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">lat_init,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">long_init,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">alt_init</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Position object with the reference frame set to LLH</div></div>",1655:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1655\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Position ECEF(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">x_init,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">y_init,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName last\">z_init</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Position object with the reference frame set to ECEF</div></div>",1656:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1656\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Position(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName\">lat_init,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName\">long_init,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PName\">alt_init,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">PositionVelocityReferenceFrame&nbsp;</td><td class=\"PName\">ref&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">PositionVelocityReferenceFrame::LLH_NED</td></tr></table></td><td class=\"PAfterParameters\">) : position_0(lat_init), position_1(long_init), position_2(alt_init), referenceFrame(<span class=\"SHKeyword\">ref</span>)</td></tr></table></div><div class=\"TTSummary\">Creates a Position object.</div></div>",1657:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1657\" class=\"NDPrototype NoParameterForm\">Position() : position_0(<span class=\"SHNumber\">0</span>), position_1(<span class=\"SHNumber\">0</span>), position_2(<span class=\"SHNumber\">0</span>), referenceFrame(PositionVelocityReferenceFrame::LLH_NED)</div><div class=\"TTSummary\">Creates a zero-filled Position object.&nbsp; Default reference frame: LLH</div></div>",1658:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1658\" class=\"NDPrototype NoParameterForm\">~Position()</div><div class=\"TTSummary\">Destroys a TimeUpdate object.</div></div>",1660:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1660\" class=\"NDPrototype NoParameterForm\">PositionVelocityReferenceFrame referenceFrame</div><div class=\"TTSummary\">The PositionVelocityReferenceFrame of this position.&nbsp; Default: LLH</div></div>",1662:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1662\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> latitude() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is LLH_NED</div></div>",1663:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1663\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> longitude() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is LLH_NED</div></div>",1664:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1664\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> altitude() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is LLH_NED</div></div>",1665:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1665\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> height() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is LLH_NED</div></div>",1666:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1666\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> x() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is ECEF</div></div>",1667:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1667\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> y() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is ECEF</div></div>",1668:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1668\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> z() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Only valid if referenceFrame is ECEF</div></div>",1670:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The position values</div></div>"});