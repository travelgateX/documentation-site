+++
title = "Settings"
pagetitle = ""
description = "Learn about settings in HotelX"
icon = "fa-exchange"
weight = 1
alwaysopen = false
+++

On this page you will learn more about **settings** in HotelX. 

### What are settings?
Settings are the common configuration that will be used in order to build the request to the provider/s.

There are two kind of settings, overridable and partialy overridable. You can find the partialy overridable settings in the first level of settings and are known as HotelX_Settings. These settings are composed by some non overridable settings such as "group" and "testMode", some overridable global settings such as "timeout", "auditTransactions", etc, and some overridable baseSettings such as "businessRules".

We have various levels of settings that can be combined in order to build customized settings. The order of heritage of settings is:

The type of settings for each level is:

0 - Criteria common settings fields (currency, auditTransactions, businessRules, etc)
1 - Access Settings [Base Settings]
2 - Supplier Settings [Base Settings]
3 - Query Settings   [HotelX Settings]
4 - DB Access Settings [Base Settings]
5 - DB SupplierSettings [Base Settings]
6 - DB Client Settings [Default Settings]
7 - DB Group Settings [Default Settings]

Any field that is empty in one level, is filled with the value of the next level.

An special case are input fields specified in Criteria, if one field of criteria are in settings, the value of criteria are the most significant. It is mandatory that after the settings heritage flow, each field of DefaultSettings has to be filled, because this settings will be sent to supplier.

### Where can Settings be applied?

Settings can be applied in the following operations:

## Queries

These queries have the same settings configuration [**Click here to see configuration**](/hotelx/reference/inputobjects/hotelsettingsinput/)

* **Search**

    * Example : [Search setting example](/hotelx/quickstart#search)

* **Quote**

    * Example : [Quote setting example](/hotelx/quickstart#quote)

* **Booking List**

    * Example : [Booking List setting example](/hotelx/quickstart#bookinglist)

## Mutations

These mutations have the same settings configuration [**Click here to see configuration**](/hotelx/reference/inputobjects/hotelsettingsinput/)

* **Book**

    * Example : [Book setting example](/hotelx/quickstart#book)

* **Cancel**

    * Example : [Quote setting example](/hotelx/quickstart#quote)
    
In case that you want to modify any field of DB Setting, please contact with our support team.
Above you can find an example of each type of settings: 

[HotelX Settings](/hotelx/reference/inputobjects/hotelsettingsinput/)
Query/Mutation settings
```
"settings": {
 "group": "HotelX_test",
 "client": "xtg",
 "context": "HOTELTEST",
 "testMode": true,
 "timeout": 18000,
 "language":"es",
 "suppliers": [
  {
   "code": "HOTELTEST",
   "settings": {
    "auditTransactions": true
   },
   "accesses": [
    {
     "accessId": "1",
     "settings": {
      "currency": "EUR"
     }
    }
   ]
  }
 ]
}
```

[Base Settings](/hotelx/reference/inputobjects/basesettingsinput/)
Access or supplier settings, it don't care if is from Query or from database
```
"settings": {
    "timeout": 300, 
    "auditTransactions": true, 
    "businessRules": 
      {
        "optionsQuota": 500,
        "businessRulesType": "CHEAPER_AMOUNT"
      }  
}
```

[Default Settings](/hotelx/reference/inputobjects/defaultsettingsinput/)
Group or client database settings
```
"settings": {
  "context": "CONTEXT",
  "client": "client",
  "timeout": {
    "search": 18000, 
    "quote": 25000, 
    "book": 180000
  }, 
  "language": "en", 
  "currency": "EUR", 
  "nationality": "ES", 
  "market": "ES", 
  "businessRules": {
     "optionsQuota": 0, 
     "businessRulesType": "CHEAPER_AMOUNT"
  }
}
```

If we send a Query with the previous HotelX Settings, the configuration that will be sent to the supplier is:

Context: "CONTEXT"                                      //From DB Default Settings
Language: "en"                                          //From HotelX Query/Mutation Settings
Currency: "EUR"                                         //From Access Settings in Query/Mutation (Base Settings)
Nationality: "ES"                                       //From DB Default Settings
Market: "ES"                                            //From DB Default Settings
Timeout: 18000                                          //From HotelX Query/Mutation Settings 
AuditTransactions: true                                 //From Supplier Settings in Query/Mutation
BusinessRules/OptionQuota: 0                            //From Access DB Settings (Base Settings)
BusinessRules/BusinessRulesType: "CHEAPER_AMOUNT"       //From Access DB Settings (Base Settings)

### Default Plugins

How can you see
