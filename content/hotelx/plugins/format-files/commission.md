+++
title = "Commission"
pagetitle = "Commission"
description = "Format commission file."
icon = "fa-file-text-o"
weight = 6
alwaysopen = false
+++

The commission file should be in the below format:

* **Encoding**: UTF-8
* **File Name**: 
    * [context](/hotelx/concepts/accesses-supplier-context/#context)
    * [sequential](/hotelx/plugins/entity_table_file/#sequential)
    * commission
* **Extension file**: csv
* **Headers**:
    * _ruleId_  → rule identifier
    * _supplierCodes_  → supplier code
    * _notSupplierCodes_  → supplier code
    * _creationDateFrom_  → start creation date
    * _creationDateTo_   → end creation date
    * _checkInFrom_  → checkin date
    * _hotelCodes_  → hotel code
    * _nothotelCodes_  → hotel code
    * _chainsCodes_  → chain code
    * _notChainCodes_  → chain code
    * _destinationCodes_  → destination code
    * _notDestinationCodes_  → destination code
    * _percentage_  → commission value, decimal separator must be point (".") 
    * _force_  → (boolean value **true/false**) if value is true the rule try to be applie by plugin.
* **Delimiter**:  Comma (“,”) 
* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/

#### Sample File

**Name**: context\_sequential_commission.csv

**Data**:

```csv
ruleId,supplierCodes,notSupplierCodes,creationDateFrom,creationDateTo,checkInFrom,checkInTo,hotelCodes,notHotelCodes,chainCodes,notChainCodes,destinationCodes,notDestinationCodes,percentage,force
CE1,DIN,,,,2018-04-01,2018-10-31,3846,,,,,,18.50,false
CE2,DIN,,,,,,3846,,,,,,15.00,false
```