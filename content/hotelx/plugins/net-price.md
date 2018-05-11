+++
title = "Net Price"
pagetitle = "Net Price"
description = ""
icon = "fa-exchange"
weight = 4
alwaysopen = false
+++

Net Price is an optional plugin and allows to net all the prices in an option.

## NetPriceX

This plugin receives an Option by parameter and returns an Option with all the prices with net value. This plugin reads information of commissions from ftp. Is mandatory to load at least, suppliers commission file. Depending of the files in ftp, this plugin can apply two different commission values over prices. Suppliers commission file specifies the commission applied to supplier’s prices. Hotel commission file specifies the commission applied to concrete hotel’s price. In one hand, if no hotels commission file is loaded in ftp, is applied net with the commission specified in commissions suppliers file. In other hand, if hotels commission file is loaded, this have preference over suppliers file. These files have to accomplish requirements below. In other cases, an error will be returned.

### File Format

The file should be in the below format:

* **Encoding**: UTF-8 
* **File Name**: commission\_supplier.csv 
* **Header Row**: Supplier, Commission
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

### Execution example

```
{

    "plugins": {

        "step": "RESPONSE\_OPTION",

        "pluginsType": [

            {

                "type": "CURRENCY\_CONVERSION"

                "name": "net\_priceX"

            }

        ]

    }

}
```
