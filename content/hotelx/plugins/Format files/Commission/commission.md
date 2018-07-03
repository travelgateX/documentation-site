+++
title = "Commission files format"
pagetitle = "Commission files format"
description = "Format commission file."
icon = "fa-exchange"
weight = 3
alwaysopen = false
+++

The commission file should be in the below format:

* **Encoding**: UTF-8 
* **File Name**: context\_sequential_commission.csv 
* **Header Row**: Rule ID,Suppliers,NOT Suppliers,Booking Date From,Booking Date To,Start Date From,Start Date To,Hotels,NOT Hotels,Chains,NOT Chains,Destination,NOT Destination,Commission,Force Commission
* **Delimiter**:  Comma (“,”) 
* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/

_Headers_:

* _Rule ID_ → rule id
* _Suppliers_ → supplier code
* _NOT Suppliers_ → supplier code
* _Booking Date From_ → booking date from
* _Booking Date To_ → booking date to
* _Start Date From_ → start date from
* _Start Date To_ → start date to
* _Hotels_ → hotel code
* _Chains_ → chains code
* _Destination_ → destination code
* _NOT Destination_ → destination code
* _Commission_ → commission
* _Force Commission_ → force commission

#### Sample File

**Name**: context\sequential_commission.csv

**Data**:

```csv
Rule ID,Suppliers,NOT Suppliers,Booking Date From,Booking Date To,Start Date From,Start Date To,Hotels,NOT Hotels,Chains,NOT Chains,Destination,NOT Destination,Commision,Force Commision
CE1,DIN,,,,2018-04-01,2018-10-31,3846,,,,,,18.50,false
CE2,DIN,,,,,,3846,,,,,,15.00,false
```
```
