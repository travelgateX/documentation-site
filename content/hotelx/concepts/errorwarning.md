+++
title = "Error and Warning"
pagetitle = ""
description = "List of error and warning in HotelX"
icon = "fa-exclamation-triangle"
weight = 1
alwaysopen = false
+++


In this chapter we will show all error and warning of booking flow.

# Error list
In the table below, we will show all **Error** available for booking flow

|         Code         |       Type       |            Description            | Explanation  |
| :------------------: | :--------------: | --------------------------------- |-------------- |
|     ACCESS_ERROR     | VALIDATION_ERROR | No valid accesses found           | The access has not found or has no permission, or you are using test access, and you need to add testMode.|
|    MISSING_FIELD     | VALIDATION_ERROR | *According to the case*           | Some mandatory field is missing in input|
|    INTERNAL_ERROR    |    API_ERROR     | *According to the case*           | Covers any unexpected error or error due **internal** service|
| ALL_PROCESSES_FAILED |  PROCESS_ERROR   | See warnings for more information | This occur when no options returned for all access after apply plugin (blacklist, filter, mapping code),  commission, etc.., it may also be caused by a wrong default setting, In warning node you can find detail information about the cause.|
|       TIMEOUT        | CONNECTION_ERROR | *According to the case*           | This occur due to the connection timeout|
| REFERENCE_NOT_EXISTS |  BOOKING_ERROR   | *According to the case*           | This occur when the booking reference provided is not available in the supplier system|


# Warning list

In this section we will show all **Warning** available for booking flow, the are two type of warning, **HotelX warning** and **Connection warning**.

## HotelX warning

This type of warning contain all warning in the HotelX system.

|                Code                | Type  |       Description       | Explanation                  |
| :--------------------------------: | :---: | ----------------------- | ---------------------------- |
|     WRONG_FIELD      | VALIDATION_ERROR | *According to the case* | Some field in the request is not correct|
|    INTERNAL_ERROR    |  MAPPING_ERROR   | *According to the case* | Error produced when we mapping codes, usually happen with hotel mapping|
| COMMISSION_NOT_FOUND |    API_ERROR     | *According to the case* | This occurs when the options are discarded because the provider returns options with a negative commission that dont allow the calculation of the net price, you need to upload the commission file to solve it|
|     WRONG_FIELD      |   PLUGIN_ERROR   | *According to the case* | Occur when the input of plugin is wrong|
|      BLACKLIST       |   PLUGIN_ERROR   | *According to the case* | Occur when the hotels or access is blacklisted|

## Connection warning

This type of warning contain supplier original error code, the reason that this type of error code are classified as warning code is because when we request more than 1  supplier, and at least one of them return result, although other have error. As we get some result then we can't return HotelX error, since this can be confusing.

|                Code                | Type  |       Description       | Explanation                  |
| :--------------------------------: | :---: | ----------------------- | ---------------------------- |
| *According to supplier error code* |  101  | *According to the case* | System Exception (Exception not controlled or not classified as general exception).|
| *According to supplier error code* |  102  | *According to the case* | Contain supplier original error and code, for more detail you need see description or contact to the supplier |
| *According to supplier error code* |  104  | *According to the case* | Timeout, time out due supplier, not HotelX system|
| *According to supplier error code* |  105  | *According to the case* | Communication Error with concrete supplier|
| *According to supplier error code* |  204  | No results found        | Supplier doesn't return options|
| *According to supplier error code* |  205  | *According to the case* | The Supplier doesn’t accept the occupancies configuration.|
| *According to supplier error code* |  206  | *According to the case* | The Supplier doesn’t accept the dates RQ.|
| *According to supplier error code* |  207  | *According to the case* | The Supplier doesn’t accept the request RQ.|
| *According to supplier error code* |  301  | *According to the case* | Option not found in quote.|
