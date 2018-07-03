+++
title = "Commission file"
pagetitle = "Commission file"
description = "Format commission file."
icon = "fa-exchange"
weight = 4
alwaysopen = false
+++

The commission file should be in the below format:

### Hotel Commission File Format

The hotel commission file should be in the below format:

* **Encoding**: UTF-8 
* **File Name**: commission\_hotel.csv 
* **Header Row**: Supplier, Hotel, Commission
* **Delimiter**:  Comma (“,”) 
* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/

_Headers_:

* _Supplier_ → supplier code 
* _Hotel_ → hotel code 
* _Commission_ → commission value, decimal separator must be point (".") 

#### Sample File

**Name**: commission\_supplier.csv

**Data**:

```csv
Supplier,Hotel,Commission
HOTELTEST,1,19
TTHOTTEST,1,11
```