+++
title = "Currency Converter"
pagetitle = "Currency Converter"
description = "Convert currency in order to have a unified response."
icon = "fa-usd"
weight = 4
alwaysopen = false
+++

Currency converter is an optional plugin and allows to apply currency conversion over all the prices in one Option.

## CurrencyX

This plugin receives an Option and a currency and returns the same option with currency conversion applied over all the prices. It reads the information about rates from a file located in our ftp. Is mandatory that this file exists in the ftp and satisfies all the requirements below. Otherwise, an error will be returned. The node in graphQL that indicates the currency exchange rate is:

```
"exchange": {
	"currency": "currency",
	"rate": 1
},
```

If the plugin is not executed, you will receive:

```
"exchange": {
	"currency": "EUR",   //Same currency of option with no currency exchange applied
	"rate": 1            //No currency exchange applied
},
```

otherwise, you will receive:

```
"exchange": {
	"currency": "EUR",   //New currency
	"rate": 0.86         //Rate exchange applied
},
```

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

The value of step, type, and name is always the specified in the example below. The two parameters are mandatory and their value means:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**"currency":** It is a string value in ISO 4217 standard ("XXX"). It is the currency to which you want to convert.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**"exclude":** is a Boolean value (true / false). This parameter only has an effect on the search query. It determines if the options on which the currency change cannot be applied (no currency found in ftp) are excluded. <br />
   
In addition, it is necessary that option and parameter currencies are in ftp file.

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
