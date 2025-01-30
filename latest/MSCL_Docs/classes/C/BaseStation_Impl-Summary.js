NDFramePage.OnPageTitleLoaded("CClass:BaseStation_Impl","BaseStation_Impl");NDSummary.OnSummaryLoaded("CClass:BaseStation_Impl",[["C/C++","C"]],[["Classes","Class"],["Functions","Function"],["Groups","Group"],["Variables","Variable"]],[[9478,0,0,"BaseStation_Impl"],[9479,0,2,"Functions","Functions"],[9480,0,1,"BaseStation_Impl","BaseStation_Impl"],[9481,0,1,"~BaseStation_Impl","~BaseStation_Impl"],[9482,0,2,"Variables","Variables"],[9483,0,3,"m_connection","m_connection"],[9484,0,3,"m_packetCollector","m_packetCollector"],[9485,0,3,"m_responseCollector","m_responseCollector"],[9486,0,3,"m_rawBytePacketCollector","m_rawBytePacketCollector"],[9487,0,3,"m_parser","m_parser"],[9488,0,3,"m_baseCommandsTimeout","m_baseCommandsTimeout"],[9489,0,3,"m_nodeCommandsTimeout","m_nodeCommandsTimeout"],[9490,0,3,"m_frequency","m_frequency"],[9491,0,3,"m_commProtocol","m_commProtocol"],[9492,0,3,"m_eeprom","m_eeprom"],[9493,0,3,"m_eepromHelper","m_eepromHelper"],[9494,0,3,"m_features","m_features"],[9495,0,3,"m_protocolMutex","m_protocolMutex"],[9496,0,3,"m_protocol_lxrs","m_protocol_lxrs"],[9497,0,3,"m_protocol_lxrsPlus","m_protocol_lxrsPlus"],[9498,0,3,"m_lastCommTime","m_lastCommTime"],[9499,0,2,"Functions","Functions(2)"],[9500,0,1,"getTimeForBeacon","getTimeForBeacon"],[9501,0,1,"parseData","parseData"],[9502,0,1,"determineProtocols","determineProtocols"],[9503,0,1,"eeHelper","eeHelper"],[9504,0,1,"doCommand","doCommand"],[9505,0,1,"connection","connection"],[9506,0,1,"features","features"],[9507,0,1,"protocol","protocol"],[9508,0,1,"lastCommunicationTime","lastCommunicationTime"],[9509,0,1,"read","read"],[9510,0,1,"write","write"],[9511,0,1,"setReadWriteRetries","setReadWriteRetries"],[9512,0,1,"getReadWriteRetries","getReadWriteRetries"],[9513,0,1,"useEepromCache","useEepromCache"],[9514,0,1,"clearEepromCache","clearEepromCache"],[9515,0,1,"frequency","frequency"],[9516,0,1,"communicationProtocol","communicationProtocol"],[9517,0,1,"regionCode","regionCode"],[9518,0,1,"firmwareVersion","firmwareVersion"],[9519,0,1,"model","model"],[9520,0,1,"serial","serial"],[9521,0,1,"microcontroller","microcontroller"],[9522,0,1,"getData","getData"],[9523,0,1,"getRawBytePackets","getRawBytePackets"],[9524,0,1,"totalData","totalData"],[9525,0,1,"getNodeDiscoveries","getNodeDiscoveries"],[9526,0,1,"timeout","timeout"],[9527,0,1,"timeout","timeout(2)"],[9528,0,1,"ping","ping"],[9529,0,1,"readEeprom","readEeprom"],[9530,0,1,"readEeprom","readEeprom(2)"],[9531,0,1,"writeEeprom","writeEeprom"],[9532,0,1,"writeEeprom","writeEeprom(2)"],[9533,0,1,"enableBeacon","enableBeacon"],[9534,0,1,"enableBeacon","enableBeacon(2)"],[9535,0,1,"disableBeacon","disableBeacon"],[9536,0,1,"beaconStatus","beaconStatus"],[9537,0,1,"startRfSweepMode","startRfSweepMode"],[9538,0,1,"startRfSweepMode","startRfSweepMode(2)"],[9539,0,1,"cyclePower","cyclePower"],[9540,0,1,"resetRadio","resetRadio"],[9541,0,1,"changeFrequency","changeFrequency"],[9542,0,1,"verifyConfig","verifyConfig"],[9543,0,1,"applyConfig","applyConfig"],[9544,0,1,"getTransmitPower","getTransmitPower"],[9545,0,1,"getButtonLongPress","getButtonLongPress"],[9546,0,1,"getButtonShortPress","getButtonShortPress"],[9547,0,1,"getAnalogPairingEnabled","getAnalogPairingEnabled"],[9548,0,1,"getAnalogTimeoutTime","getAnalogTimeoutTime"],[9549,0,1,"getAnalogTimeoutVoltage","getAnalogTimeoutVoltage"],[9550,0,1,"getAnalogExceedanceEnabled","getAnalogExceedanceEnabled"],[9551,0,1,"getAnalogPair","getAnalogPair"],[9552,0,1,"doBaseCommand","doBaseCommand"],[9553,0,1,"doNodeCommand","doNodeCommand"],[9554,0,1,"protocol_ping_v1","protocol_ping_v1"],[9555,0,1,"protocol_ping_v2","protocol_ping_v2"],[9556,0,1,"protocol_hardReset_v2","protocol_hardReset_v2"],[9557,0,1,"protocol_softReset_v2","protocol_softReset_v2"],[9558,0,1,"protocol_read_v1","protocol_read_v1"],[9559,0,1,"protocol_read_v2","protocol_read_v2"],[9560,0,1,"protocol_write_v1","protocol_write_v1"],[9561,0,1,"protocol_write_v2","protocol_write_v2"],[9562,0,1,"protocol_enableBeacon_v1","protocol_enableBeacon_v1"],[9563,0,1,"protocol_enableBeacon_v2","protocol_enableBeacon_v2"],[9564,0,1,"protocol_beaconStatus_v1","protocol_beaconStatus_v1"],[9565,0,1,"protocol_startRfSweepMode_v1","protocol_startRfSweepMode_v1"],[9566,0,1,"protocol_node_pageDownload_v1","protocol_node_pageDownload_v1"],[9567,0,1,"protocol_node_datalogInfo_v1","protocol_node_datalogInfo_v1"],[9568,0,1,"protocol_node_getDatalogData_v1","protocol_node_getDatalogData_v1"],[9569,0,1,"protocol_node_longPing_v1","protocol_node_longPing_v1"],[9570,0,1,"protocol_node_hardReset_v2","protocol_node_hardReset_v2"],[9571,0,1,"protocol_node_softReset_v2","protocol_node_softReset_v2"],[9572,0,1,"protocol_node_sleep_v1","protocol_node_sleep_v1"],[9573,0,1,"protocol_node_sleep_v2","protocol_node_sleep_v2"],[9574,0,1,"protocol_node_setToIdle_v1","protocol_node_setToIdle_v1"],[9575,0,1,"protocol_node_setToIdle_v2","protocol_node_setToIdle_v2"],[9576,0,1,"protocol_node_readEeprom_v1","protocol_node_readEeprom_v1"],[9577,0,1,"protocol_node_readEeprom_v2","protocol_node_readEeprom_v2"],[9578,0,1,"protocol_node_writeEeprom_v1","protocol_node_writeEeprom_v1"],[9579,0,1,"protocol_node_writeEeprom_v2","protocol_node_writeEeprom_v2"],[9580,0,1,"protocol_node_autoBalance_v1","protocol_node_autoBalance_v1"],[9581,0,1,"protocol_node_autoBalance_v2","protocol_node_autoBalance_v2"],[9582,0,1,"protocol_node_autocal_shm_v1","protocol_node_autocal_shm_v1"],[9583,0,1,"protocol_node_autocal_shm201_v1","protocol_node_autocal_shm201_v1"],[9584,0,1,"protocol_node_autoshuntcal_v1","protocol_node_autoshuntcal_v1"],[9585,0,1,"protocol_node_getDiagnosticInfo_v1","protocol_node_getDiagnosticInfo_v1"],[9586,0,1,"protocol_node_erase_v1","protocol_node_erase_v1"],[9587,0,1,"protocol_node_erase_v2","protocol_node_erase_v2"],[9588,0,1,"protocol_node_startSync_v1","protocol_node_startSync_v1"],[9589,0,1,"protocol_node_startNonSync_v1","protocol_node_startNonSync_v1"],[9590,0,1,"protocol_node_startNonSync_v2","protocol_node_startNonSync_v2"],[9591,0,1,"protocol_node_batchEepromRead_v1","protocol_node_batchEepromRead_v1"],[9592,0,1,"protocol_node_testCommProtocol","protocol_node_testCommProtocol"],[9593,0,1,"protocol_node_poll","protocol_node_poll"],[9594,0,1,"node_ping","node_ping"],[9595,0,1,"node_hardReset","node_hardReset"],[9596,0,1,"node_softReset","node_softReset"],[9597,0,1,"node_sleep","node_sleep"],[9598,0,1,"node_setToIdle","node_setToIdle"],[9599,0,1,"node_readEeprom","node_readEeprom"],[9600,0,1,"node_writeEeprom","node_writeEeprom"],[9601,0,1,"node_pageDownload","node_pageDownload"],[9602,0,1,"node_batchEepromRead","node_batchEepromRead"],[9603,0,1,"node_getDatalogSessionInfo","node_getDatalogSessionInfo"],[9604,0,1,"node_getDatalogData","node_getDatalogData"],[9605,0,1,"node_erase","node_erase"],[9606,0,1,"node_startSyncSampling","node_startSyncSampling"],[9607,0,1,"node_startNonSyncSampling","node_startNonSyncSampling"],[9608,0,1,"node_armForDatalogging","node_armForDatalogging"],[9609,0,1,"node_triggerArmedDatalogging","node_triggerArmedDatalogging"],[9610,0,1,"node_autoBalance","node_autoBalance"],[9611,0,1,"node_autocal_shm","node_autocal_shm"],[9612,0,1,"node_autocal_shm201","node_autocal_shm201"],[9613,0,1,"node_autoShuntCal","node_autoShuntCal"],[9614,0,1,"node_readSingleSensor","node_readSingleSensor"],[9615,0,1,"node_getDiagnosticInfo","node_getDiagnosticInfo"],[9616,0,1,"node_testCommProtocol","node_testCommProtocol"],[9617,0,1,"node_poll","node_poll"],[9618,0,1,"node_autocal","node_autocal"]]);