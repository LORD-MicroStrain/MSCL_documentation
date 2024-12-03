NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/MipChannel.h",{3436:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3436\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipChannel</div></div></div><div class=\"TTSummary\">Represents a single &quot;channel&quot; or data descriptors that can make up an Inertial Device\'s message format</div></div>",3438:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3438\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipChannel(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td></td><td class=\"PName last\">channelField,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipChannel object.</div></div>",3440:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3440\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelField m_channelField</div><div class=\"TTSummary\">The MipTypes::ChannelField for this channel.</div></div>",3441:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3441\" class=\"NDPrototype NoParameterForm\">SampleRate m_sampleRate</div><div class=\"TTSummary\">The SampleRate of the inertial channel.</div></div>",3443:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3443\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelField channelField() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the MipTypes::ChannelField for this channel.</div></div>",3444:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3444\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SampleRate&amp; sampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the SampleRate set for this channel.</div></div>",3445:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3445\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> rateDecimation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">sampleRateBase</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the rate decimation that is used to determine the sample rate (sample rate = sampleratebase / rate decimation).</div></div>",3446:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3446\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> fieldDescriptor() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the field descriptor byte of the Inertial Channel.</div></div>",3447:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3447\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> descriptorSet() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the descriptor set byte of the Inertial Channel.</div></div>",3449:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a vector of MipChannel objects</div></div>"});