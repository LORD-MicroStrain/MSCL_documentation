NDSummary.OnToolTipsLoaded("CClass:DeviceCommPort",{1845:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Stores info related to device comm ports (id, type)</div></div>",1846:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available comm port type definitions SPECIAL - 0x00 - Device specific ports (Main/Aux) UART&nbsp; - 0x01 - UART related ports USB&nbsp; - 0x02 - USB related ports</div></div>",1847:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available comm protocols that can be configured for UART ports NONE&nbsp; - 0x00000000 - Not set MIP_COMMANDS - 0x00000001 - MIP commands MIP_DATA&nbsp; - 0x00000002 - MIP data NMEA&nbsp; - 0x00000004 - NMEA RTCM&nbsp; - 0x00000008 - RTCM SPARTN&nbsp; - 0x00000010 - SPARTN ALL&nbsp; - 0x0000001F - All protocols</div></div>",1848:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1848\" class=\"NDPrototype NoParameterForm\">DeviceCommPort() = default</div><div class=\"TTSummary\">Constructs DeviceCommPort object with default values</div></div>",1849:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1849\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">DeviceCommPort(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Type&nbsp;</td><td class=\"PName\">portType,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">portId,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Protocol&nbsp;</td><td class=\"PName\">portInputProtocols&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">NONE,</td></tr><tr><td class=\"PType first\">Protocol&nbsp;</td><td class=\"PName\">portOutputProtocols&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">NONE</td></tr></table></td><td class=\"PAfterParameters\">) : type(portType), id(portId), inputProtocols(portInputProtocols), outputProtocols(portOutputProtocols)</td></tr></table></div><div class=\"TTSummary\">Constructs DeviceCommPort object with specified values</div></div>",1850:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1850\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">DeviceCommPort(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">portInterface,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Protocol&nbsp;</td><td class=\"PName\">portInputProtocols&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">NONE,</td></tr><tr><td class=\"PType first\">Protocol&nbsp;</td><td class=\"PName\">portOutputProtocols&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">NONE</td></tr></table></td><td class=\"PAfterParameters\">) : type(static_cast&lt;Type&gt;((portInterface &amp; <span class=\"SHNumber\">0xF0</span>) &gt;&gt; <span class=\"SHNumber\">4</span>)), id(portInterface &amp; <span class=\"SHNumber\">0xF</span>), inputProtocols(portInputProtocols), outputProtocols(portOutputProtocols)</td></tr></table></div><div class=\"TTSummary\">Constructs DeviceCommPort object with specified values The ID and Type are determined by the interface value. I.E. Interface 0x12 == Type 1 &amp;&amp; ID 2</div></div>",1851:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1851\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> interfaceId() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Get the interface ID of the port This is a combined value of the type and port ID</div></div>",1852:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1852\" class=\"NDPrototype NoParameterForm\">Type type</div><div class=\"TTSummary\">Port type (special, UART, etc.)</div></div>",1853:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1853\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> id</div><div class=\"TTSummary\">Port ID</div></div>",1854:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1854\" class=\"NDPrototype NoParameterForm\">Protocol inputProtocols</div><div class=\"TTSummary\">Input communication protocols</div></div>",1855:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1855\" class=\"NDPrototype NoParameterForm\">Protocol outputProtocols</div><div class=\"TTSummary\">Output communication protocols</div></div>"});