+++
title = "Hotel group file format"
pagetitle = "Hotel group file format"
description = "Format group file."
icon = "fa-exchange"
weight = 3
alwaysopen = false
+++

The hotel group file should be in the below format:

* **Encoding**: UTF-8 
* **File Name**: context\_entity\_format\_hotel_group.csv
    * [**Context**](/hotelx/concepts/accesses-supplier-context/#context)
    * [**Entity**](/hotelx/plugins/format-files/commission/entity_table/) (file will be indexed by this field)
    * **Format** (indicate format file)
* **Header Row**: key,chainCodes,destinationCodes
* **Delimiter**:  Comma (“,”) 
* **Directory**: /F[folder code]\Maps/HotelX\Hotel/

_Headers_:

* _key_ → key value
* _chainCodes_ → chain code 
* _destinationsCodes_ → destination code

#### Sample File

**Name**: context\_hotel_group.csv

**Data**:

```csv
key,chainCodes,destinationCodes
1,OHTEL,DNBFQ;BYWRS;BUJSY;BTENE;CGGSZ;CGUNN;COMERCIAL152
2,000-INDEP,3PR;BYQIW;GCNR;BUJSF;BTENB;CGGSZ;CGUNN;COMERCIAL76
```