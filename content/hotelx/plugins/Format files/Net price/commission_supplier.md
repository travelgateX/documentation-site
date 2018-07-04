+++
title = "Commission supplier file"
pagetitle = "Commission supplier file"
description = "Format commission supplier file."
icon = "fa-exchange"
weight = 3
alwaysopen = false
+++

The commission supplier file should be in the below format:

### Commission supplier File Format

The file should be in the below format:

* **Encoding**: UTF-8 
* **File Name**: commission\_supplier.csv
    * [supplier](/travelgatex/concepts/common-resources)
    * commission
* **Extension file**: csv
* **Headers**:
    *  [supplier](/travelgatex/concepts/common-resources)
    *   _Commission_ → commission value, decimal separator must be point (".")
* **Delimiter**:  Comma (“,”) 
* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/

#### Sample File

**Name**: commission\_supplier.csv

**Data**:

```csv
Supplier,Commission
AXI,0
AXI2,0
```