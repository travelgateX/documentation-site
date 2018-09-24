+++
title = "Preference"
pagetitle = "Preference"
description = "Format preference file."
icon = "fa-file-text-o"
weight = 9
alwaysopen = false
+++

The preference file should be in the below format:

* **Encoding**: UTF-8
* **File Name**: 
    * [context](/hotelx/concepts/accesses-supplier-context/#context)
    * [sequential](/hotelx/plugins/entity_table_file/#sequential)
    * preference
* **Extension file**: csv
* **Headers**:
    * _ruleId_  → rule identifier
    * _clientTokens_  → client Tokens*
    * _supplierCodes_  → supplier code
    * _notSupplierCodes_  → supplier code
    * _bookingDateFrom_  → booking date from [**Date format**](/hotelx/plugins/format-files/commission#dateformat)
    * _bookingDateTo_   → booking date to [**Date format**](/hotelx/plugins/format-files/commission#dateformat)
    * _startDateFrom_  → start date from [**Date format**](/hotelx/plugins/format-files/commission#dateformat)
    * _startDateTo_  → start date to [**Date format**](/hotelx/plugins/format-files/commission#dateformat)
    * _hotelCodes_  → hotel code
    * _nothotelCodes_  → hotel code
    * _chainsCodes_  → chain code
    * _notChainCodes_  → chain code
    * _destinationCodes_  → destination code
    * _notDestinationCodes_  → destination code
    * _percentage_  → commission value, decimal separator must be point (".") 
    * _filter_competitors_  → filter competitors  

    **client tokens** Identifier provided by the client that is used to filter which business rules can be applied for the sent request.
    
       * **List file fields** 
  
        |Field | Mandatory | Excluded fields* | Multi-value |
        |---|---|---|---|
        |ruleId| Yes | - | No |
        |clientTokens| Yes | - | Yes |
        |supplierCodes| Yes | notSupplierCodes | Yes |
        |notSupplierCodes| Yes | supplierCodes | Yes |
        |bookingDateFrom| No | - | No |
        |bookingDateTo| No | - | No |
        |startDateFrom| No | - | No |
        |startDateTo| No | - | No |
        |hotelCodes| No | nothotelCodes | Yes |
        |nothotelCodes| No | hotelCodes | Yes |
        |chainsCodes| No | notChainCodes | Yes |
        |notChainCodes| No | chainsCodes | Yes |
        |DestinationCodes| No | notDestinationCodes | Yes |
        |notDestinationCodes| No | DestinationCodes | Yes |
        |percentage| Yes | - | No |
        |filter_competitors| Yes | - | Yes |
        *Excluded fields **Informed field will be ignored**

* **Delimiter**:  Comma (“,”)
* **Separator for multiple codes in the same row**: Semicolon (";")
* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/

#### Sample File

**Name**: context\_sequential_preference.csv

**Data**:

**Simple value field**
```csv
ruleId,clientTokens,supplierCodes,notSupplierCodes,bookingDateFrom,bookingDateTo,startDateFrom,startDateTo,hotelCodes,notHotelCodes,chainCodes,notChainCodes,destinationCodes,notDestinationCodes,percentage,filter_competitors
T1,,RIU,,,,,,,,,,,,999.00,TRUE
T3,,BAR,,,,,,,,,,,,999.00,FALSE
T4,,SEN,,,,,,,,,,,,999.00,FALSE
T7,,RHO,,,,,,,,,,,,10.0,FALSE
T9,subcanal-EROSKI_B2B,INT,,,,,,,,,,,BTEMX,5.0,TRUE
```

**Multivalue field**
```csv
ruleId,clientTokens,supplierCodes,notSupplierCodes,bookingDateFrom,bookingDateTo,startDateFrom,startDateTo,hotelCodes,notHotelCodes,chainCodes,notChainCodes,destinationCodes,notDestinationCodes,percentage,filter_competitors
T1,,RIU,,,,,,,,,,,,999.00,TRUE
T3,,BAR,,,,,,,,,,,,999.00,FALSE
T4,,SEN,,,,,,,,,,,,999.00,FALSE
T7,,RHO,,,,,,,,,,,,10.0,FALSE
T9,subcanal-EROSKI_B2B,INT,,,,,,,,,,,BTEMX,5.0,TRUE
T10,,GTA;HOBV2;TOU,,,,,,,,,,ACDMS,,5.5,FALSE
```

### **Date format** {#dateformat}
{{% notice warning %}}
Date format **yyyy-mm-dd** is mandatory
{{% /notice %}}