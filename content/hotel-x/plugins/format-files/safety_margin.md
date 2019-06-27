+++
title = "Safety margin"
pagetitle = "Safety margin"
description = "Format safety margin file."
icon = "fa-file-text-o"
weight = 6
alwaysopen = false
+++

The safety margin file should be in the below format:

* **Encoding**: UTF-8
* **File Name**: 
    * [context](/hotelx/concepts/accesses-supplier-context/#context)
    * [sequential](/hotelx/plugins/entity_table_file/#sequential)
    * safetymargin
* **Extension file**: csv
* **Headers**:
    * _ruleId_  → rule identifier
    * _clientTokens_  → client Tokens*
    * _supplierCodes_  → supplier code
    * _notSupplierCodes_  → supplier code
    * _creationDateFrom_  → start creation date [**Date format**](/hotelx/plugins/format-files/commission#dateformat)
    * _creationDateTo_   → end creation date [**Date format**](/hotelx/plugins/format-files/commission#dateformat)
    * _checkInFrom_  → checkinfrom date [**Date format**](/hotelx/plugins/format-files/commission#dateformat)
    * _checkInTo_  → checkinto date [**Date format**](/hotelx/plugins/format-files/commission#dateformat)
    * _hotelCodes_  → hotel code
    * _nothotelCodes_  → hotel code
    * _chainsCodes_  → chain code
    * _notChainCodes_  → chain code
    * _destinationCodes_  → destination code
    * _notDestinationCodes_  → destination code
    * _percentage_  → commission value, decimal separator must be point (".")  

    **client tokens** Identifier provided by the client that serves to filter which business rules can be applied for the sent request.
    
       * **List file fields** 
  
        |Field | Mandatory | Excluded fileds* | Multi-value |
        |---|---|---|---|
        |ruleId| Yes | - | No |
        |clientTokens| Yes | - | Yes |
        |supplierCodes| Yes | notSupplierCodes | Yes |
        |notSupplierCodes| Yes | supplierCodes | Yes |
        |creationDateFrom| No | - | No |
        |creationDateTo| No | - | No |
        |checkInFrom| No | - | No |
        |checkInTo| No | - | No |
        |hotelCodes| No | nothotelCodes | Yes |
        |nothotelCodes| No | hotelCodes | Yes |
        |chainsCodes| No | notChainCodes | Yes |
        |notChainCodes| No | chainsCodes | Yes |
        |DestinationCodes| No | notDestinationCodes | Yes |
        |notDestinationCodes| No | DestinationCodes | Yes |
        |percentage| Yes | - | No |
        *Excluded fileds **Informed field will be ignored**

* **Delimiter**:  Comma (“,”)
* **Separator for multiples codes in the same row**: Semicolon (";")
* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/

#### Sample File

**Name**: context\_sequential_safetymargin.csv

**Data**:

**Simple value field**
```csv
ruleId,clientTokens,supplierCodes,notSupplierCodes,creationDateFrom,creationDateTo,checkInFrom,checkInTo,hotelCodes,notHotelCodes,chainCodes,notChainCodes,destinationCodes,notDestinationCodes,percentage
CE1,XXX,DIN,,,,2018-04-01,2018-10-31,3846,,,,,,18.50
CE2,YYY,DIN,,,,,,3846,,,,,,15.00
```

**Multivalue field**
```csv
ruleId,clientTokens,supplierCodes,notSupplierCodes,creationDateFrom,creationDateTo,checkInFrom,checkInTo,hotelCodes,notHotelCodes,chainCodes,notChainCodes,destinationCodes,notDestinationCodes,percentage
CE1,XXX,DIN;HOB;JMB,,,,2018-04-01,2018-10-31,3846,,,,,,18.50
CE2,YYY,DIN,,,,,,3846,,,,,,15.00
```

### **Date format** {#dateformat}
{{% notice warning %}}
Date format **yyyy-mm-dd** is mandatory
{{% /notice %}}