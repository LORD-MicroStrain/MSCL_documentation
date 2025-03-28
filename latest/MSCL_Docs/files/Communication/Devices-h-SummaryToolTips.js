NDSummary.OnToolTipsLoaded("File:Communication/Devices.h",{141:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype141\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DeviceInfo</div></div></div><div class=\"TTSummary\">Contains information on an attached device</div></div>",147:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype147\" class=\"NDPrototype NoParameterForm\">DeviceInfo()</div><div class=\"TTSummary\">Creates a DeviceInfo object</div></div>",148:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype148\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">DeviceInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">description,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">serial,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">baudRate,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ConnectionType&nbsp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a DeviceInfo object with the given parameters</div></div>",150:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype150\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_description</div><div class=\"TTSummary\">The description of the device.</div></div>",151:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype151\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_serial</div><div class=\"TTSummary\">The serial address that is issued for this device.</div></div>",152:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype152\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_baudRate</div><div class=\"TTSummary\">The suspected baud rate of the device.</div></div>",153:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype153\" class=\"NDPrototype NoParameterForm\">ConnectionType m_connectionType</div><div class=\"TTSummary\">The ConnectionType of the device.</div></div>",155:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype155\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> description() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the description for the device</div></div>",156:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype156\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serial() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial address for the device</div></div>",157:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype157\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> baudRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the suspected baud rate at which to open a Connection with the device.</div></div>",158:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype158\" class=\"NDPrototype NoParameterForm\">ConnectionType connectionType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ConnectionType of the device.</div></div>",159:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype159\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Devices</div></div></div><div class=\"TTSummary\">Contains helper functions for accessing attached devices</div></div>",165:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of string COM ports to DeviceInfo objects detailing the information about each device</div></div>",167:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype167\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> DeviceList listBaseStations()</div><div class=\"TTSummary\">Gets a list of all the attached (USB) BaseStations.&nbsp; Note that this is solely going by listed devices that use our driver, so this may pick up similar devices that are not BaseStations.</div></div>",168:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype168\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> DeviceList listInertialDevices()</div><div class=\"TTSummary\">Gets a list of all the attached (USB) InertialDevices.</div></div>",169:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype169\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> DeviceList listPorts()</div><div class=\"TTSummary\">Gets a simple list of all serial ports and their availability.</div></div>",170:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype170\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeviceList listDevices(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DeviceType&nbsp;</td><td class=\"PName last\">devType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets a list of attached devices that match the given DeviceType</div></div>",171:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype171\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> matchesDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">info,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">name,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">DeviceType&nbsp;</td><td></td><td class=\"PName last\">devType,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">baudRate,</td></tr><tr><td class=\"PModifierQualifier first\">DeviceInfo::</td><td class=\"PType\">ConnectionType&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks whether a given string found from device scanning matches the given device</div></div>",172:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype172\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> getDeviceInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">devicePath,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">serial,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">manufacturer,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">pnpID</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets information about the attached device</div></div>"});