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
* **Header Row**: [supplier](/travelgatex/concepts/common-resources)
* **Delimiter**:  Comma (“,”) 
* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/

_Headers_:

* _Supplier_ → supplier code 
* _Commission_ → commission value, decimal separator must be point (".")

#### Sample File

**Name**: commission\_supplier.csv

**Data**:

```csv
Supplier,Commission
AXI,0
AXI2,0
```
