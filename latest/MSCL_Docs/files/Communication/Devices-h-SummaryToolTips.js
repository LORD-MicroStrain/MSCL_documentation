NDSummary.OnToolTipsLoaded("File:Communication/Devices.h",{85:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype85\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DeviceInfo</div></div></div><div class=\"TTSummary\">Contains information on an attached device</div></div>",91:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype91\" class=\"NDPrototype NoParameterForm\">DeviceInfo()</div><div class=\"TTSummary\">Creates a DeviceInfo object</div></div>",92:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype92\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">DeviceInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">description,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">serial,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">baudRate,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ConnectionType&nbsp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a DeviceInfo object with the given parameters</div></div>",94:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype94\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_description</div><div class=\"TTSummary\">The description of the device.</div></div>",95:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype95\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_serial</div><div class=\"TTSummary\">The serial address that is issued for this device.</div></div>",96:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype96\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_baudRate</div><div class=\"TTSummary\">The suspected baud rate of the device.</div></div>",97:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype97\" class=\"NDPrototype NoParameterForm\">ConnectionType m_connectionType</div><div class=\"TTSummary\">The ConnectionType of the device.</div></div>",99:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype99\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> description() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the description for the device</div></div>",100:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype100\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serial() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial address for the device</div></div>",101:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype101\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> baudRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the suspected baud rate at which to open a Connection with the device.</div></div>",102:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype102\" class=\"NDPrototype NoParameterForm\">ConnectionType connectionType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ConnectionType of the device.</div></div>",103:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype103\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Devices</div></div></div><div class=\"TTSummary\">Contains helper functions for accessing attached devices</div></div>",109:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of string COM ports to DeviceInfo objects detailing the information about each device</div></div>",111:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype111\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> DeviceList listBaseStations()</div><div class=\"TTSummary\">Gets a list of all the attached (USB) BaseStations.&nbsp; Note that this is solely going by listed devices that use our driver, so this may pick up similar devices that are not BaseStations.</div></div>",112:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype112\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> DeviceList listInertialDevices()</div><div class=\"TTSummary\">Gets a list of all the attached (USB) InertialDevices.</div></div>",113:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype113\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> DeviceList listPorts()</div><div class=\"TTSummary\">Gets a simple list of all serial ports and their availability.</div></div>",114:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype114\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeviceList listDevices(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DeviceType&nbsp;</td><td class=\"PName last\">devType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets a list of attached devices that match the given DeviceType</div></div>",115:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype115\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> matchesDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">pnpID,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">name,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">DeviceType&nbsp;</td><td></td><td class=\"PName last\">devType,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">baudRate,</td></tr><tr><td class=\"PModifierQualifier first\">DeviceInfo::</td><td class=\"PType\">ConnectionType&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks whether a given string found from WMI matches the given device</div></div>",116:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype116\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> matchesDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">manufacturer,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">vendorId,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">DeviceType&nbsp;</td><td></td><td class=\"PName last\">devType,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">baudRate,</td></tr><tr><td class=\"PModifierQualifier first\">DeviceInfo::</td><td class=\"PType\">ConnectionType&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks whether the given information, found from searching files in linux, matches the given device</div></div>",117:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype117\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> getDeviceInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">devicePath,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">serial,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">manufacturer,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">vendorId</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets information about the attached device</div></div>"});