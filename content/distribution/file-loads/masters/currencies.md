+++
title = "Currencies"
pagetitle = "Currencies"
description = "Currencies exchanges"
icon="fa-dollar"
weight = 6
alwaysopen = false
isDirectory=false
+++

# Currencies exchanges

## Considerations

* We can specify global currencies and specific currencies for concrete agencies.
* If an agency has got specific currencies then this agency will use these ones but if an agency hasn't got specific currencies then this agency will use the global currencies.
* Global currencies are inherited by agencies with specific currencies in which they are not contained, so if a currency is defined as global and this currency is no defined specifically for an agency then the agency will use de global definition for this currency.
* It is an incremental load:
    * If a currency exists then it is updated.
    * If a currency does not exist then it is created.
    * Existing currencies that are not referenced are not removed.
    * If an existing currency has to be removed from system then you have to contact with TravelgateX.
    * If specific currencies for an agency have to be removed from system then you have to contact with TravelgateX.
    * If there is any problem with a currency's information then it is omitted (and logged) but the load continues.


## Specifications

* File name: **`Master_CurrenciesExchange.csv`**. 

* Each line represents a unique temporary pricing rule and contains all the information (fields) about it. 

* The first line is not a header line: it contains data directly. 

* Inside a line, by default fields and subfields are separated using the characters `#`, `|` and `;`. None of these characters can't be used inside data because fields and subfields would be gathered in a wrong way. 

* The data of the fields is not encapsulated by `"` or any other character: the information must be included directly. 

* Any blank line will be skipped.

* The file and its data have to be encoded using <b>UTF-8</b>. Otherwise there can be stored strange characters.

* We need to know the base currency used for all the exchange values.

* If a field is mandatory then it has to be present in each line, even if it has no data: its used position cannot be omitted. If mandatory then we have to see if its data is mandatory or not.

* If a field is not mandatory but we want to set it then all previous fields must be present: if any previous field is not mandatory and we don't want to set a value we will have to include it with no value. We need it this way as it is used the field position to map it to the target data.

* If a field's data is not mandatory and we don't want to set it then we just keep it empty: i.e. ...##...

* If a field's data is mandatory then we have to set something (no value is not admitted).


## Data Line fields
  
| **Position** | **Mandatory Field** | **Mandatory Data** | **Type**               | **Description/Value** |
| -----------  | ------------------- | ------------------ | ---------------------- | ---------------------
| 0     	   | Yes                 | Yes                | string                 | ISO currency code (3 chars).
| 1     	   | Yes                 | Yes                | decimal                | Exchange value: it is a decimal value using the character "." as separator. It indicates the equivalence of this currency with 1 unit of the base currency.
| 2     	   | No                  | No                 | string                 | Agency code (to create specific currencies). If this field is not given then this will be a global currency.

**Notes:**

* A decimal value has to be set using '.' as separator.
* Currency is in ISO 4217 code format (i.e. "EUR", "USD", "GBP",...)


## Base Currency

* The file must be created on a base currency, and all other currencies have to be defined with their exchange with this base currency.
* TGX Distribution system operates using EUR as the base currency for all the internal operations, so if the file does not uses EUR as the base currency then the TGX Distribution team must be noticed of this point and needs to know which is the base currency.
* The base currency must be included into the file and will have an exchange value of 1.
* The exchange value of a currency indicates the equivalence of this currency with 1 unit of the base currency.


***Example 1:** GBP as base currency:*

~~~
"EUR#1.110" *1 GBP corresponds to 1.110 EUR*
"GBP#1.000" *base currency*
"USD#1.310" *1 GBP corresponds to 1.310 USD*
~~~

***Example 2:** EUR as base currency:*

~~~
"EUR#1" *base currency*
"GBP#0.9009" *1 EUR corresponds to 0.9009 GBP*
"USD#1.1802" *1 EUR corresponds to 1.1802 USD*
~~~

***Example 3:** USD as base currency:*

~~~
"EUR#0.8473" *1 USD corresponds to 0.8473 EUR*
"GBP#0.7633" *1 USD corresponds to 0.7633 GBP*
"USD#1.00" *base currency*
~~~