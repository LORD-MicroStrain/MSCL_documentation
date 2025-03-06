NDFramePage.OnPageTitleLoaded("CClass:BaseStation_Impl","BaseStation_Impl");NDSummary.OnSummaryLoaded("CClass:BaseStation_Impl",[["C/C++","C"]],[["Classes","Class"],["Functions","Function"],["Groups","Group"],["Variables","Variable"]],[[9697,0,0,"BaseStation_Impl"],[9698,0,2,"Functions","Functions"],[9699,0,1,"BaseStation_Impl","BaseStation_Impl"],[9700,0,1,"~BaseStation_Impl","~BaseStation_Impl"],[9701,0,2,"Variables","Variables"],[9702,0,3,"m_connection","m_connection"],[9703,0,3,"m_packetCollector","m_packetCollector"],[9704,0,3,"m_responseCollector","m_responseCollector"],[9705,0,3,"m_rawBytePacketCollector","m_rawBytePacketCollector"],[9706,0,3,"m_parser","m_parser"],[9707,0,3,"m_baseCommandsTimeout","m_baseCommandsTimeout"],[9708,0,3,"m_nodeCommandsTimeout","m_nodeCommandsTimeout"],[9709,0,3,"m_frequency","m_frequency"],[9710,0,3,"m_commProtocol","m_commProtocol"],[9711,0,3,"m_eeprom","m_eeprom"],[9712,0,3,"m_eepromHelper","m_eepromHelper"],[9713,0,3,"m_features","m_features"],[9714,0,3,"m_protocolMutex","m_protocolMutex"],[9715,0,3,"m_protocol_lxrs","m_protocol_lxrs"],[9716,0,3,"m_protocol_lxrsPlus","m_protocol_lxrsPlus"],[9717,0,3,"m_lastCommTime","m_lastCommTime"],[9718,0,2,"Functions","Functions(2)"],[9719,0,1,"getTimeForBeacon","getTimeForBeacon"],[9720,0,1,"parseData","parseData"],[9721,0,1,"determineProtocols","determineProtocols"],[9722,0,1,"eeHelper","eeHelper"],[9723,0,1,"doCommand","doCommand"],[9724,0,1,"connection","connection"],[9725,0,1,"features","features"],[9726,0,1,"protocol","protocol"],[9727,0,1,"lastCommunicationTime","lastCommunicationTime"],[9728,0,1,"read","read"],[9729,0,1,"write","write"],[9730,0,1,"setReadWriteRetries","setReadWriteRetries"],[9731,0,1,"getReadWriteRetries","getReadWriteRetries"],[9732,0,1,"useEepromCache","useEepromCache"],[9733,0,1,"clearEepromCache","clearEepromCache"],[9734,0,1,"frequency","frequency"],[9735,0,1,"communicationProtocol","communicationProtocol"],[9736,0,1,"regionCode","regionCode"],[9737,0,1,"firmwareVersion","firmwareVersion"],[9738,0,1,"model","model"],[9739,0,1,"serial","serial"],[9740,0,1,"microcontroller","microcontroller"],[9741,0,1,"getData","getData"],[9742,0,1,"getRawBytePackets","getRawBytePackets"],[9743,0,1,"totalData","totalData"],[9744,0,1,"getNodeDiscoveries","getNodeDiscoveries"],[9745,0,1,"timeout","timeout"],[9746,0,1,"timeout","timeout(2)"],[9747,0,1,"ping","ping"],[9748,0,1,"readEeprom","readEeprom"],[9749,0,1,"readEeprom","readEeprom(2)"],[9750,0,1,"writeEeprom","writeEeprom"],[9751,0,1,"writeEeprom","writeEeprom(2)"],[9752,0,1,"enableBeacon","enableBeacon"],[9753,0,1,"enableBeacon","enableBeacon(2)"],[9754,0,1,"disableBeacon","disableBeacon"],[9755,0,1,"beaconStatus","beaconStatus"],[9756,0,1,"startRfSweepMode","startRfSweepMode"],[9757,0,1,"startRfSweepMode","startRfSweepMode(2)"],[9758,0,1,"cyclePower","cyclePower"],[9759,0,1,"resetRadio","resetRadio"],[9760,0,1,"changeFrequency","changeFrequency"],[9761,0,1,"verifyConfig","verifyConfig"],[9762,0,1,"applyConfig","applyConfig"],[9763,0,1,"getTransmitPower","getTransmitPower"],[9764,0,1,"getButtonLongPress","getButtonLongPress"],[9765,0,1,"getButtonShortPress","getButtonShortPress"],[9766,0,1,"getAnalogPairingEnabled","getAnalogPairingEnabled"],[9767,0,1,"getAnalogTimeoutTime","getAnalogTimeoutTime"],[9768,0,1,"getAnalogTimeoutVoltage","getAnalogTimeoutVoltage"],[9769,0,1,"getAnalogExceedanceEnabled","getAnalogExceedanceEnabled"],[9770,0,1,"getAnalogPair","getAnalogPair"],[9771,0,1,"doBaseCommand","doBaseCommand"],[9772,0,1,"doNodeCommand","doNodeCommand"],[9773,0,1,"protocol_ping_v1","protocol_ping_v1"],[9774,0,1,"protocol_ping_v2","protocol_ping_v2"],[9775,0,1,"protocol_hardReset_v2","protocol_hardReset_v2"],[9776,0,1,"protocol_softReset_v2","protocol_softReset_v2"],[9777,0,1,"protocol_read_v1","protocol_read_v1"],[9778,0,1,"protocol_read_v2","protocol_read_v2"],[9779,0,1,"protocol_write_v1","protocol_write_v1"],[9780,0,1,"protocol_write_v2","protocol_write_v2"],[9781,0,1,"protocol_enableBeacon_v1","protocol_enableBeacon_v1"],[9782,0,1,"protocol_enableBeacon_v2","protocol_enableBeacon_v2"],[9783,0,1,"protocol_beaconStatus_v1","protocol_beaconStatus_v1"],[9784,0,1,"protocol_startRfSweepMode_v1","protocol_startRfSweepMode_v1"],[9785,0,1,"protocol_node_pageDownload_v1","protocol_node_pageDownload_v1"],[9786,0,1,"protocol_node_datalogInfo_v1","protocol_node_datalogInfo_v1"],[9787,0,1,"protocol_node_getDatalogData_v1","protocol_node_getDatalogData_v1"],[9788,0,1,"protocol_node_longPing_v1","protocol_node_longPing_v1"],[9789,0,1,"protocol_node_hardReset_v2","protocol_node_hardReset_v2"],[9790,0,1,"protocol_node_softReset_v2","protocol_node_softReset_v2"],[9791,0,1,"protocol_node_sleep_v1","protocol_node_sleep_v1"],[9792,0,1,"protocol_node_sleep_v2","protocol_node_sleep_v2"],[9793,0,1,"protocol_node_setToIdle_v1","protocol_node_setToIdle_v1"],[9794,0,1,"protocol_node_setToIdle_v2","protocol_node_setToIdle_v2"],[9795,0,1,"protocol_node_readEeprom_v1","protocol_node_readEeprom_v1"],[9796,0,1,"protocol_node_readEeprom_v2","protocol_node_readEeprom_v2"],[9797,0,1,"protocol_node_writeEeprom_v1","protocol_node_writeEeprom_v1"],[9798,0,1,"protocol_node_writeEeprom_v2","protocol_node_writeEeprom_v2"],[9799,0,1,"protocol_node_autoBalance_v1","protocol_node_autoBalance_v1"],[9800,0,1,"protocol_node_autoBalance_v2","protocol_node_autoBalance_v2"],[9801,0,1,"protocol_node_autocal_shm_v1","protocol_node_autocal_shm_v1"],[9802,0,1,"protocol_node_autocal_shm201_v1","protocol_node_autocal_shm201_v1"],[9803,0,1,"protocol_node_autoshuntcal_v1","protocol_node_autoshuntcal_v1"],[9804,0,1,"protocol_node_getDiagnosticInfo_v1","protocol_node_getDiagnosticInfo_v1"],[9805,0,1,"protocol_node_erase_v1","protocol_node_erase_v1"],[9806,0,1,"protocol_node_erase_v2","protocol_node_erase_v2"],[9807,0,1,"protocol_node_startSync_v1","protocol_node_startSync_v1"],[9808,0,1,"protocol_node_startNonSync_v1","protocol_node_startNonSync_v1"],[9809,0,1,"protocol_node_startNonSync_v2","protocol_node_startNonSync_v2"],[9810,0,1,"protocol_node_batchEepromRead_v1","protocol_node_batchEepromRead_v1"],[9811,0,1,"protocol_node_testCommProtocol","protocol_node_testCommProtocol"],[9812,0,1,"protocol_node_poll","protocol_node_poll"],[9813,0,1,"node_ping","node_ping"],[9814,0,1,"node_hardReset","node_hardReset"],[9815,0,1,"node_softReset","node_softReset"],[9816,0,1,"node_sleep","node_sleep"],[9817,0,1,"node_setToIdle","node_setToIdle"],[9818,0,1,"node_readEeprom","node_readEeprom"],[9819,0,1,"node_writeEeprom","node_writeEeprom"],[9820,0,1,"node_pageDownload","node_pageDownload"],[9821,0,1,"node_batchEepromRead","node_batchEepromRead"],[9822,0,1,"node_getDatalogSessionInfo","node_getDatalogSessionInfo"],[9823,0,1,"node_getDatalogData","node_getDatalogData"],[9824,0,1,"node_erase","node_erase"],[9825,0,1,"node_startSyncSampling","node_startSyncSampling"],[9826,0,1,"node_startNonSyncSampling","node_startNonSyncSampling"],[9827,0,1,"node_armForDatalogging","node_armForDatalogging"],[9828,0,1,"node_triggerArmedDatalogging","node_triggerArmedDatalogging"],[9829,0,1,"node_autoBalance","node_autoBalance"],[9830,0,1,"node_autocal_shm","node_autocal_shm"],[9831,0,1,"node_autocal_shm201","node_autocal_shm201"],[9832,0,1,"node_autoShuntCal","node_autoShuntCal"],[9833,0,1,"node_readSingleSensor","node_readSingleSensor"],[9834,0,1,"node_getDiagnosticInfo","node_getDiagnosticInfo"],[9835,0,1,"node_testCommProtocol","node_testCommProtocol"],[9836,0,1,"node_poll","node_poll"],[9837,0,1,"node_autocal","node_autocal"]]);