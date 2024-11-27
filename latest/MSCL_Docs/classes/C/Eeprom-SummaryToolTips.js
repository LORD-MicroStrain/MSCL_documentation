NDSummary.OnToolTipsLoaded("CClass:Eeprom",{6871:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6871\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Eeprom</div></div></div><div class=\"TTSummary\">The abstract base class for reading and writing to Wireless devices\' eeproms.</div></div>",6873:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6873\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> Eeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">useCache,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">numRetries</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an Eeprom object.</div></div>",6875:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6875\" class=\"NDPrototype NoParameterForm\">WirelessTypes::EepromMap m_eepromCache</div><div class=\"TTSummary\">The WirelessTypes::EepromMap contianing all cached values that have previously been read from a device.</div></div>",6876:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6876\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_useCache</div><div class=\"TTSummary\">Whether or not the cache should be used.</div></div>",6877:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6877\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_numRetries</div><div class=\"TTSummary\">The number of retries to use when reading and writing eeproms.</div></div>",6878:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6878\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_hasWritten</div><div class=\"TTSummary\">A flag used by resetHasWritten and didWrite to help determine when an eeprom was actually written, instead of just using the cache.</div></div>",6879:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6879\" class=\"NDPrototype NoParameterForm\">mutable std::recursive_mutex m_cacheMutex</div><div class=\"TTSummary\">Mutex for controlling access to the cache.</div></div>",6881:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6881\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> useCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables or disables use of the eeprom cache. Once disabled, all eeprom reads will go to the Node.</div></div>",6882:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6882\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearCache()</div><div class=\"TTSummary\">Clears the entire eeprom cache.</div></div>",6883:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6883\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> clearCacheLocation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Clears a specific location from the eeprom cache, if it exists.</div></div>",6884:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6884\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setNumRetries(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">retries</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the number of retries to use when reading and writing eeproms.&nbsp; By default, this configuration is set to 0, meaning no retries are performed.</div></div>",6885:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6885\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> getNumRetries() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of retries currently set for reading and writing eeproms.</div></div>",6886:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6886\" class=\"NDPrototype NoParameterForm\">WirelessTypes::EepromMap getCache() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a copy of the WirelessTypes::EepromMap containing the cache of eeprom location/value pairs.</div></div>",6887:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6887\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> importCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> WirelessTypes::</td><td class=\"PType\">EepromMap&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">eepromMap</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Imports an existing EEPROM</div></div>",6888:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6888\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> readCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to read a value from the eeprom cache.</div></div>",6889:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6889\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> updateCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a value to the eeprom cache at the given location, or updates it if a value for that location already exists.</div></div>",6890:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6890\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> updateCacheFromDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Attempts to update the cache by reading the value from a device.&nbsp; Any values that are read from the device will be updated in the cache.</div></div>",6891:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6891\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resetHasWritten()</div><div class=\"TTSummary\">Resets the m_hasWritten flag to false.&nbsp; It will be changed back to true when a successful write is performed.</div></div>",6892:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6892\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> didWrite() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the m_hasWritten flag indicating if an eeprom has been written on the device (not using the cache).</div></div>",6893:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6893\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual uint16</span> readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Attempts to read an eeprom value from a device.&nbsp; If caching is enabled and there is a previously cached value available, this will just return the value from the cache and will not communicate with the device.</div></div>",6894:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6894\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Attempts to write an eeprom value to a device.&nbsp; If successful, the cache will be updated with the changed value as well.&nbsp; If caching is enabled and the value in the cache is the same as that attempting to be written, nothing will be written to the device and this function will have no affect.</div></div>",6895:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6895\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Value readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EepromLocation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to read an eeprom value from a device.&nbsp; If caching is enabled and there is a previously cached value available, this will just return the value from the cache and will not communicate with the device.</div></div>",6896:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6896\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EepromLocation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Value&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to write an eeprom value to a device.&nbsp; If successful, the cache will be updated with the changed value as well.&nbsp; If caching is enabled and the value in the cache is the same as that attempting to be written, nothing will be written to the device and this function will have no affect.</div></div>",6897:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6897\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual float</span> readEeprom_float(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to read 2 eeprom values from a device and build them into a float.&nbsp; If caching is enabled and there is a previously cached value available, this will just return the value from the cache and will not communicate with the device.</div></div>",6898:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6898\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual uint32</span> readEeprom_uint32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to read 2 eeprom values from a device and build them into a uint32.&nbsp; If caching is enabled and there is a previously cached value available, this will just return the value from the cache and will not communicate with the device.</div></div>",6899:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6899\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int16</span> readEeprom_int16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to read an eeprom value from a device as a signed int16.&nbsp; If caching is enabled and there is a previously cached value available, this will just return the value from the cache and will not communicate with the device.</div></div>",6900:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6900\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom_float(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to write 2 eeprom values to a device as a float.&nbsp; If successful, the cache will be updated with the changed value as well.&nbsp; If caching is enabled and the value in the cache is the same as that attempting to be written, nothing will be written to the device and this function will have no affect.</div></div>",6901:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6901\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom_uint32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to write 2 eeprom values to a device as a uint32.&nbsp; If successful, the cache will be updated with the changed value as well.&nbsp; If caching is enabled and the value in the cache is the same as that attempting to be written, nothing will be written to the device and this function will have no affect.</div></div>",6902:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6902\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom_int16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to write an eeprom value to a device from a signed int16.&nbsp; If successful, the cache will be updated with the changed value as well.&nbsp; If caching is enabled and the value in the cache is the same as that attempting to be written, nothing will be written to the device and this function will have no affect.</div></div>"});