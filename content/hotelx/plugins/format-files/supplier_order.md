+++
title = "Supplier Order"
pagetitle = "Supplier Order"
description = "Format supplier order."
icon = "fa-file-text-o"
weight = 7
alwaysopen = false
+++

The supplier order file should be in the below format:

* **Encoding**: UTF-8
* **File Name**: 
    * supplier_order
* **Extension file**: csv
* **Headers**:
    * _ruleId_  → rule identifier
    * _supplierCodes_  → supplier code

* **List file fields** 
  
        |Field | Mandatory | Excluded fileds* | Multi-value |
        |---|---|---|---|
        |ruleId| Yes | - | No |
        |supplierCodes| Yes | - | Yes |

* **Delimiter**:  Comma (“,”)
* **Separator for multiples codes in the same row**: Semicolon (";")
* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/

#### Sample File

**Name**: supplier_order.csv

**Data**:

**Simple value field**
```csv
ruleId,supplierCodes
CE1,DIN
CE2,DIN
```

**Multivalue field**
```csv
ruleId,supplierCodes
CE1,DIN;HOB;JMB
CE2,DIN
```