+++
title = "Currency Converter"
pagetitle = "Currency Converter"
description = "Convert currency in order to have a unified response."
icon = "fa-usd"
weight = 4
alwaysopen = false
+++

Currency converter is an optional plugin and permits to apply currency conversion over all the prices in one Option.

## CurrencyX

This plugin receives an Option and a currency and returns the same option with currency conversion applied over all the prices. It reads the information about rates from a file allocated in our ftp. Is mandatory that this file exists in the ftp and satisfy all the requirements below. In other cases, an error will be returned.

### File Format

The file should be in the below format:

* **Encoding**: UTF-8 
* **File Name**: currency\_map.csv 
* **Header Row**: Code, Rate 
    * Decimal separator for rate must be point (".")
* **Delimiter**:  Comma (“,”) 
* **Directory**:  /[folder code]\_[unique code]/HotelX\_[unique code]/

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

The rate with value 1.00 is the base rate. Other rates are calculated from it.

The value of step, type, and name is always the specified in the example below. The two parameters are mandatory and its value means:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**"currency":** is a string value in ISO 4217 standard ("XXX"). Is the currency to which you want to convert.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**"exclude":** is a Boolean value (true / false). This parameter only has an effect on the search query. It determine, if the options on which the currency change can not be applied (no currency found in ftp), are excluded. <br />
   
In addition, is necessary that option and parameter currencies are in ftp file.

### Execution example

```
{
  "plugins": [
    {
      "step": "RESPONSE_OPTION",
      "pluginsType": [
        {
          "type": "CURRENCY_CONVERSION",
          "name": "currency_exchange",
          "parameters": [
            {
              "key": "currency",
              "value": "GBP"
            },
            {
              "key": "exclude",
              "value": "true"
            }
          ]
        }
      ]
    }
  ]
}
```
