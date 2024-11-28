NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/EepromLocation.h",{6654:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6654\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EepromLocation</div></div></div><div class=\"TTSummary\">Represents a single Eeprom Location.</div></div>",6656:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6656\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static uint16</span> m_nextId</div><div class=\"TTSummary\">Used for setting a unique id for every EepromLocation that is created.</div></div>",6657:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6657\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_id</div><div class=\"TTSummary\">A unique id for this EepromLocation object.</div></div>",6658:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6658\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_location</div><div class=\"TTSummary\">The actual EEPROM location on the device.</div></div>",6659:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6659\" class=\"NDPrototype NoParameterForm\">ValueType m_valueType</div><div class=\"TTSummary\">The ValueType of this value in EEPROM.</div></div>",6660:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The string description of the EEPROM location.</div></div>",6662:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6662\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">EepromLocation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">location,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ValueType&nbsp;</td><td></td><td class=\"PName last\">valueType,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an EepromLocation object. The id is assigned automatically.</div></div>",6663:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6663\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">EepromLocation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">idCopy,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">location,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ValueType&nbsp;</td><td></td><td class=\"PName last\">valueType,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an EepromLocation object with a specific id.&nbsp; Note: this should be used only when making a copy of an EepromLocation if you know the id, location, and type.</div></div>",6665:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Less than operator for comparing Eeprom Locations (ids).</div></div>",6666:"<div class=\"NDToolTip TOperator LC\"><div class=\"TTSummary\">Equal operator for comparing Eeprom Locations (ids).</div></div>",6668:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6668\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> id() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the id of the EepromLocation..</div></div>",6669:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6669\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> location() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the actual EEPROM location on the device.</div></div>",6670:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6670\" class=\"NDPrototype NoParameterForm\">ValueType valueType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ValueType of this value in EEPROM.</div></div>",6671:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6671\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> description() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a description of this EEPROM location.</div></div>"});