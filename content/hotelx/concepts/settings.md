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
Settings are the common configuration that will be used in order to build the request to the supplier/s.

There are two kind of settings, overridable and partially overridable. You can find the partially overridable settings in the first level of settings and are known as HotelX_Settings. These settings are formed by some non-overridable settings such as "group" and "testMode", some overridable global settings such as "timeout", "auditTransactions", etc., and some overridable baseSettings such as "businessRules".

We have several levels of settings that can be combined in order to build customised settings. The hierarchy of heritage and type of settings for each level is:

0 - Criteria common settings fields (currency, auditTransactions, businessRules, etc.)<br />
1 - Access Settings [Base Settings]<br />
2 - Supplier Settings [Base Settings]<br />
3 - Query Settings   [HotelX Settings]<br />
4 - Database Access Settings [Base Settings]<br />
5 - Database Supplier Settings [Base Settings]<br />
6 - Database Client Settings [Default Settings]<br />
7 - Database Group Settings [Default Settings]<br />

Any field that is empty in one level, will be filled in with the value of the following level.

A special case is input fields specified in Criteria: if one field of Criteria is specified in settings, the value of Criteria is the most significant. It is mandatory that after the settings heritage flow, each field of Default Settings will be filled, because these settings will be sent to supplier.

### Where can Settings be applied?

Settings can be applied to the following operations:

## Queries

These queries have the same settings configuration [**Click here to see configuration**](/hotelx/reference/inputobjects/hotelsettingsinput/)

* **Search**

    * [Search setting example](/hotelx/quickstart#search)

* **Quote**

    * [Quote setting example](/hotelx/quickstart#quote)

* **Booking List**

    * [Booking List setting example](/hotelx/quickstart#bookinglist)

## Mutations

These mutations have the same settings configuration [**Click here to see configuration**](/hotelx/reference/inputobjects/hotelsettingsinput/)

* **Book**

    * Example : [Book setting example](/hotelx/quickstart#book)

* **Cancel**

    * Example : [Quote setting example](/hotelx/quickstart#quote)
    
Should you need to modify any fields of the database Settings, please contact with our support team.
Please find an example of each type of the settings above: 

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

[Base Settings](/hotelx/reference/inputobjects/settingsbaseinput/)
Access or supplier settings (from Query or database)
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

[Default Settings]
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

- Context: "CONTEXT"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//From DB Default Settings<br />
- Language: "en"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//From HotelX Query/Mutation Settings<br />
- Currency: "EUR"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//From Access Settings in Query/Mutation (Base Settings)<br />
- Nationality: "ES"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//From DB Default Settings<br />
- Market: "ES"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//From DB Default Settings<br />
- Timeout: 18000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//From HotelX Query/Mutation Settings <br />
- AuditTransactions: true&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//From Supplier Settings in Query/Mutation (Base Settings)<br />
- BusinessRules/OptionQuota: 0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//From Access DB Settings (Base Settings)<br />
- BusinessRules/BusinessRulesType: "CHEAPER_AMOUNT"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//From Access DB Settings (Base Settings)<br />

### Plugins

As you can observe in GraphQL API Specifications, the input field "plugins" allows to insert plugins that will be executed during execution process. 

### Default Plugins
Additionally, it is possible to load default plugins in our database. Currently, the only way to load these plugins in our database is contacting with our Customer Care team. These default plugins will be executed in all the Queries and Mutations specified above if no filters are specified. 

### Filter Plugins
Besides, in the Query/Mutation Settings, there is a filter that allows to include or exclude the execution of any plugin. The way it works is similar to the Access Filter in Hotel-Search and it is only allowed specifying includes or excludes, not both. HotelX always reads Query/Mutation input plugins and then joins them to the loaded default plugins of our database, then applies the plugin filters.

- On the one hand, if you specify plugins to be included, these plugins will be executed only if they are found in all the joined plugins (Query/Mutation input plugins in settings and Default plugins from database). 

- On the other hand, if you specify plugins be to excluded, these will be deleted from joined plugins and consequently not executed.

The way of indicating which plugins we want to include/exclude is introducing Step, Type and Name of the plugin in the Query/Mutation.
