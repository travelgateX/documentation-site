+++
title = "Group file format"
pagetitle = "Group file format"
description = "Format group file."
icon = "fa-exchange"
weight = 3
alwaysopen = false
+++

The hotel group file should be in the below format:

* **Encoding**: UTF-8 
* **File Name**: context\_entity\_group.csv
    * [**Context**](/hotelx/concepts/accesses-supplier-context/#context)
    * [**Entity**](/hotelx/plugins/format-files/entities/entity_table/) (file will be indexed by this field)
    * [**Format**](/hotelx/plugins/format-files/group/group#entitygroup) (indicate format file)
* **Extension file**: csv
* **Headers**:
    * _key_
    * _hotelCodes_
    * _chainCodes_
    * _destinationCodes_
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

#### **Possible values entity filename** {#entitygroup}

|Entity | chainCodes| destinationCodes| hotelCodes |
|---------|---|---|---|
|hotel| Yes | Yes | No |
|destination| Yes | No | Yes |