NDSummary.OnToolTipsLoaded("CClass:RTKDeviceStatusFlags_v1",{2368:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Controller state values IDLE&nbsp; - 0x00 - Idle ACTIVE&nbsp; - 0x04 - Active</div></div>",2369:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Platform state values MODEM_OFF&nbsp; - 0x00 - Modem Off MODEM_POWERING_ON&nbsp; - 0x01 - Modem Powering On MODEM_CONFIGURE&nbsp; - 0x02 - Configuring Modem MODEM_POWERING_DOWN&nbsp; - 0x03 - Modem Powering Down MODEM_READY&nbsp; - 0x04 - Modem Ready MODEM_CONNECTING&nbsp; - 0x05 - Modem Connecting to Network MODEM_DISCONNECTING&nbsp; - 0x06 - Modem Disconnecting from Network MODEM_CONNECTED&nbsp; - 0x07 - Modem Connected SERVICE_CONNECTING&nbsp; - 0x08 - Connecting to RTK Service SERVICE_CONNECTION_FAILED&nbsp; - 0x09 - Connection to RTK Service Failed SERVICE_CONNECTION_CANCELED&nbsp; - 0x0A - Connection to RTK Service Canceled SERVICE_DISCONNECTING&nbsp; - 0x0B - Disconnecting from RTK Service SERVICE_CONNECTED&nbsp; - 0x0C - Connected to RTK Service PLATFORM_ERROR&nbsp; - 0x0D - Platform Error RESET_MODEM&nbsp; - 0x0E - Reset Modem</div></div>",2370:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Controller status code values CONTROLLER_OK&nbsp; - 0x00 - Controller OK WAITING_NMEA&nbsp; - 0x01 - Awaiting NMEA RTK_TIMEOUT&nbsp; - 0x02 - RTK Timed Out RTK_UNAVAILABLE - 0x03 - RTK Unavailable CONFIG_INVALID&nbsp; - 0x07 - Invalid Configuration</div></div>",2371:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Platform status code values PLATFORM_OK&nbsp; - 0x00 - Platform OK RTK_CONNECTION_DROPPED&nbsp; - 0x04 - RTK Service Connection Broken CELL_CONNECTION_DROPPED - 0x06 - Cell Connection Dropped MODEM_ERROR&nbsp; - 0x07 - Modem Error</div></div>",2372:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Possible RTK reset reason values POWER_ON&nbsp; - 0x00 - Reset due to Power-on UNKNOWN&nbsp; - 0x01 - Hardware reset SOFT_RESET&nbsp; - 0x02 - Soft reset HARDWARE_ERROR_RESET&nbsp; - 0x03 - Watchdog reset</div></div>",2374:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2374\" class=\"NDPrototype NoParameterForm\">RTKDeviceStatusFlags_v1()</div></div>",2375:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2375\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">RTKDeviceStatusFlags_v1(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">flags</td></tr></table></td><td class=\"PAfterParameters\">) : Bitfield(static_cast&lt;<span class=\"SHKeyword\">uint64</span>&gt;(flags))</td></tr></table></div></div>",2376:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2376\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">RTKDeviceStatusFlags_v1(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">RTKDeviceStatusFlags&nbsp;</td><td class=\"PName last\">rtk</td></tr></table></td><td class=\"PAfterParameters\">) : Bitfield(rtk.value())</td></tr></table></div></div>",2377:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Only C++ compatible</div></div>",2378:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2378\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> version() <span class=\"SHKeyword\">const</span></div></div>",2379:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2379\" class=\"NDPrototype NoParameterForm\">ControllerState controllerState() <span class=\"SHKeyword\">const</span></div></div>",2380:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2380\" class=\"NDPrototype NoParameterForm\">PlatformState platformState() <span class=\"SHKeyword\">const</span></div></div>",2381:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2381\" class=\"NDPrototype NoParameterForm\">ControllerStatusCode controllerStatusCode() <span class=\"SHKeyword\">const</span></div></div>",2382:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2382\" class=\"NDPrototype NoParameterForm\">PlatformStatusCode platformStatusCode() <span class=\"SHKeyword\">const</span></div></div>",2383:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2383\" class=\"NDPrototype NoParameterForm\">ResetReason resetReason() <span class=\"SHKeyword\">const</span></div></div>",2384:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2384\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> signalQuality() <span class=\"SHKeyword\">const</span></div></div>"});