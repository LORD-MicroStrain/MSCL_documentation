NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/Eeprom.h",{6530:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6530\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Eeprom</div></div></div><div class=\"TTSummary\">The abstract base class for reading and writing to Wireless devices\' eeproms.</div></div>",6532:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6532\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> Eeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">useCache,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">numRetries</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an Eeprom object.</div></div>",6534:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6534\" class=\"NDPrototype NoParameterForm\">WirelessTypes::EepromMap m_eepromCache</div><div class=\"TTSummary\">The WirelessTypes::EepromMap contianing all cached values that have previously been read from a device.</div></div>",6535:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6535\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_useCache</div><div class=\"TTSummary\">Whether or not the cache should be used.</div></div>",6536:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6536\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_numRetries</div><div class=\"TTSummary\">The number of retries to use when reading and writing eeproms.</div></div>",6537:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6537\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_hasWritten</div><div class=\"TTSummary\">A flag used by resetHasWritten and didWrite to help determine when an eeprom was actually written, instead of just using the cache.</div></div>",6538:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6538\" class=\"NDPrototype NoParameterForm\">mutable std::recursive_mutex m_cacheMutex</div><div class=\"TTSummary\">Mutex for controlling access to the cache.</div></div>",6540:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6540\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> useCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables or disables use of the eeprom cache. Once disabled, all eeprom reads will go to the Node.</div></div>",6541:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6541\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearCache()</div><div class=\"TTSummary\">Clears the entire eeprom cache.</div></div>",6542:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6542\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> clearCacheLocation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Clears a specific location from the eeprom cache, if it exists.</div></div>",6543:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6543\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setNumRetries(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">retries</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the number of retries to use when reading and writing eeproms.&nbsp; By default, this configuration is set to 0, meaning no retries are performed.</div></div>",6544:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6544\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> getNumRetries() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of retries currently set for reading and writing eeproms.</div></div>",6545:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6545\" class=\"NDPrototype NoParameterForm\">WirelessTypes::EepromMap getCache() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a copy of the WirelessTypes::EepromMap containing the cache of eeprom location/value pairs.</div></div>",6546:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6546\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> importCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> WirelessTypes::</td><td class=\"PType\">EepromMap&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">eepromMap</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Imports an existing EEPROM</div></div>",6547:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6547\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> readCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to read a value from the eeprom cache.</div></div>",6548:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6548\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> updateCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a value to the eeprom cache at the given location, or updates it if a value for that location already exists.</div></div>",6549:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6549\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> updateCacheFromDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Attempts to update the cache by reading the value from a device.&nbsp; Any values that are read from the device will be updated in the cache.</div></div>",6550:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6550\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resetHasWritten()</div><div class=\"TTSummary\">Resets the m_hasWritten flag to false.&nbsp; It will be changed back to true when a successful write is performed.</div></div>",6551:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6551\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> didWrite() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the m_hasWritten flag indicating if an eeprom has been written on the device (not using the cache).</div></div>",6552:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6552\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual uint16</span> readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Attempts to read an eeprom value from a device.&nbsp; If caching is enabled and there is a previously cached value available, this will just return the value from the cache and will not communicate with the device.</div></div>",6553:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6553\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Attempts to write an eeprom value to a device.&nbsp; If successful, the cache will be updated with the changed value as well.&nbsp; If caching is enabled and the value in the cache is the same as that attempting to be written, nothing will be written to the device and this function will have no affect.</div></div>",6554:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6554\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Value readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EepromLocation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to read an eeprom value from a device.&nbsp; If caching is enabled and there is a previously cached value available, this will just return the value from the cache and will not communicate with the device.</div></div>",6555:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6555\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EepromLocation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Value&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to write an eeprom value to a device.&nbsp; If successful, the cache will be updated with the changed value as well.&nbsp; If caching is enabled and the value in the cache is the same as that attempting to be written, nothing will be written to the device and this function will have no affect.</div></div>",6556:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6556\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual float</span> readEeprom_float(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to read 2 eeprom values from a device and build them into a float.&nbsp; If caching is enabled and there is a previously cached value available, this will just return the value from the cache and will not communicate with the device.</div></div>",6557:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6557\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual uint32</span> readEeprom_uint32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to read 2 eeprom values from a device and build them into a uint32.&nbsp; If caching is enabled and there is a previously cached value available, this will just return the value from the cache and will not communicate with the device.</div></div>",6558:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6558\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int16</span> readEeprom_int16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to read an eeprom value from a device as a signed int16.&nbsp; If caching is enabled and there is a previously cached value available, this will just return the value from the cache and will not communicate with the device.</div></div>",6559:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6559\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom_float(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to write 2 eeprom values to a device as a float.&nbsp; If successful, the cache will be updated with the changed value as well.&nbsp; If caching is enabled and the value in the cache is the same as that attempting to be written, nothing will be written to the device and this function will have no affect.</div></div>",6560:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6560\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom_uint32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to write 2 eeprom values to a device as a uint32.&nbsp; If successful, the cache will be updated with the changed value as well.&nbsp; If caching is enabled and the value in the cache is the same as that attempting to be written, nothing will be written to the device and this function will have no affect.</div></div>",6561:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6561\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom_int16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to write an eeprom value to a device from a signed int16.&nbsp; If successful, the cache will be updated with the changed value as well.&nbsp; If caching is enabled and the value in the cache is the same as that attempting to be written, nothing will be written to the device and this function will have no affect.</div></div>"});