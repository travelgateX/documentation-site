+++
title = "Group"
pagetitle = "Group"
description = "Format group file."
icon = "fa-exchange"
weight = 5
alwaysopen = false
+++

The hotel group file should be in the below format:

* **Encoding**: UTF-8 
* **File Name**: context\_entity\_group.csv
    * [Context](/hotelx/concepts/accesses-supplier-context/#context)
    * [Entity](/hotelx/plugins/entity_table_file/) (file will be indexed by this field).
    * [Format](/hotelx/plugins/format-files/) (indicates format file)
* **Extension file**: csv
* **Headers**:
    * _key_ → [Entity](/hotelx/plugins/entity_table_file/).
    * _hotelCodes_ → hotel code
    * _chainCodes_ → chain code
    * _destinationCodes_ → destination code
* **Delimiter**:  Comma (“,”) 
* **Directory**: /F[folder code]\Maps/HotelX\Hotel/

#### _Sample File_

**Name**: context\_entity\_group.csv

**Data**:

**Hotel entity example**

```csv
key,chainCodes,destinationCodes
1,OHTEL,DNBFQ;BYWRS;BUJSY;BTENE;CGGSZ;CGUNN;COMERCIAL152
2,000-INDEP,3PR;BYQIW;GCNR;BUJSF;BTENB;CGGSZ;CGUNN;COMERCIAL76
```