NDSummary.OnToolTipsLoaded("File:Communication/Devices.h",{117:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype117\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DeviceInfo</div></div></div><div class=\"TTSummary\">Contains information on an attached device</div></div>",123:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype123\" class=\"NDPrototype NoParameterForm\">DeviceInfo()</div><div class=\"TTSummary\">Creates a DeviceInfo object</div></div>",124:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype124\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">DeviceInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">description,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">serial,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">baudRate,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ConnectionType&nbsp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a DeviceInfo object with the given parameters</div></div>",126:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype126\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_description</div><div class=\"TTSummary\">The description of the device.</div></div>",127:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype127\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_serial</div><div class=\"TTSummary\">The serial address that is issued for this device.</div></div>",128:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype128\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_baudRate</div><div class=\"TTSummary\">The suspected baud rate of the device.</div></div>",129:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype129\" class=\"NDPrototype NoParameterForm\">ConnectionType m_connectionType</div><div class=\"TTSummary\">The ConnectionType of the device.</div></div>",131:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype131\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> description() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the description for the device</div></div>",132:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype132\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serial() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial address for the device</div></div>",133:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype133\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> baudRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the suspected baud rate at which to open a Connection with the device.</div></div>",134:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype134\" class=\"NDPrototype NoParameterForm\">ConnectionType connectionType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ConnectionType of the device.</div></div>",135:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype135\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Devices</div></div></div><div class=\"TTSummary\">Contains helper functions for accessing attached devices</div></div>",141:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of string COM ports to DeviceInfo objects detailing the information about each device</div></div>",143:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype143\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> DeviceList listBaseStations()</div><div class=\"TTSummary\">Gets a list of all the attached (USB) BaseStations.&nbsp; Note that this is solely going by listed devices that use our driver, so this may pick up similar devices that are not BaseStations.</div></div>",144:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype144\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> DeviceList listInertialDevices()</div><div class=\"TTSummary\">Gets a list of all the attached (USB) InertialDevices.</div></div>",145:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype145\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> DeviceList listPorts()</div><div class=\"TTSummary\">Gets a simple list of all serial ports and their availability.</div></div>",146:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype146\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeviceList listDevices(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DeviceType&nbsp;</td><td class=\"PName last\">devType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets a list of attached devices that match the given DeviceType</div></div>",147:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype147\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> matchesDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">pnpID,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">name,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">DeviceType&nbsp;</td><td></td><td class=\"PName last\">devType,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">baudRate,</td></tr><tr><td class=\"PModifierQualifier first\">DeviceInfo::</td><td class=\"PType\">ConnectionType&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks whether a given string found from WMI matches the given device</div></div>",148:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype148\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> matchesDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">manufacturer,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">vendorId,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">DeviceType&nbsp;</td><td></td><td class=\"PName last\">devType,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">baudRate,</td></tr><tr><td class=\"PModifierQualifier first\">DeviceInfo::</td><td class=\"PType\">ConnectionType&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks whether the given information, found from searching files in linux, matches the given device</div></div>",149:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype149\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> getDeviceInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">devicePath,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">serial,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">manufacturer,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">vendorId</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets information about the attached device</div></div>"});