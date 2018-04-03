+++
title = "Currency Converter"
pagetitle = "Currency Converter"
description = "Converter plugins"
icon = "fa-exchange"
weight = 4
alwaysopen = false
+++

Currency converter is an optional plugin and permits to apply currency conversion over all the prices in one Option.

## CurrencyX

This plugin receives an Option and a currency and returns the same option with currency conversion applied over all the prices. It reads the information about rates from a file allocated in our ftp, is mandatory that this file exists in the ftp and satisfy all the requirements below. In other cases, an error will be returned.

### File Format

The file should be in the below format:

* **Encoding**: UTF-8 
* **File Name**: currency\_map.csv 
* **Header Row**: Code, Rate 
* **Delimiter**:  Comma (“,”) 
* **Directory**: ftp://ftp.xmltravelgate.com/Purchasing/ 

#### Sample File

**Name**: currency\_map.csv

**Data**:

```csv
Code,Rate
AED,4.74
CAD,1.61
CHF,1.26
EUR,1.09
GBP,1.00
INR,84.40
MAD,12.17
THB,42.91
USD,1.29
```

In addition, is necessary that option currencies and parameter currency are in ftp file.

### Execution example

```
{

    "plugins": {

        "step": "RESPONSE\_OPTION",

        "pluginsType": [

            {

                "type": "CURRENCY\_CONVERSION"

                "name": "currencyX"

            }

        ]

    }

}
```
