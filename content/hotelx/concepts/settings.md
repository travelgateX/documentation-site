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

We have various levels of settings that can be combined in order to build customized settings.

This link shows how are the different setting structures by level: 

[HotelX Settings](/hotelx/reference/inputobjects/hotelsettingsinput/)

```
"settings": {
        "group": "HotelX_test",
        "client": "xtg",
        "context": "HOTELTEST",
        "testMode": true,
        "timeout": 18000,
        "plugins": [
                {
                        "step": "REQUEST",
                        "pluginsType": [
                                {
                                        "type": "CURRENCY_CONVERSION",
                                        "name": "plugin_name",
                                        "parameters": [
                                                {
                                                        "key": "key",
                                                        "value": "value"
                                                }
                                        ]
                                }
                        ]
                }
        ],
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

```
settings: {
    timeout: 300, 
    auditTransactions: true, 
    businessRules: 
      {
        optionsQuota: 500,
        businessRulesType: CHEAPER_AMOUNT
      }  
}
```

[Default Settings](/hotelx/reference/inputobjects/defaultsettingsinput/)

```
settings: {
    connectUser: "test"
    context: "test"
    language: "es"
    currency: "EUR"
    nationality: "ES"
    market: "es"
    timeouts: 300
    businessRules: 
      {
        optionsQuota: 500,
        businessRulesType: CHEAPER_AMOUNT
      }  
}
```

[Default Settings Business Rules](/hotelx/reference/inputobjects/businessrulesinput/)

```
businessRules{
    businessRules: 
        {
            optionsQuota: 500,
            businessRulesType: CHEAPER_AMOUNT
        }  
}
``` 

### Where can Settings be applied?

It is possible to overwrite settings behavior in each request made by the client.

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

### Settings scope

We have 5 different setting levels application:

* `HotelX Settings` affect the behavior of HotelX and their definition is as follows:  
  [**Hotelx Settings**](/hotelx/reference/inputobjects/hotelbaseinput/)  

* `Base Settings` affect the behavior of HotelX and their definition is as follows:  
  [**Base Settings**](/hotelx/reference/inputobjects/settingsbaseinput/) 

* `Supplier Settings` affect the behavior of suppliers and their definition is as follows:  
  [**Supplier Settings**](/hotelx/reference/inputobjects/settingsbaseinput/)  

* `Access Settings` affect the behavior of the access and their definition is as follows:  
  [**Access Settings**](/hotelx/reference/inputobjects/settingsbaseinput/)  

* `Plugins Settings` affect the behavior of the plugins and their definition is as follows:  
  [**Plugins Settings**](/hotelx/reference/inputobjects/pluginstepinput/)  

**Every level defines the settings' scope where they are applied**

### Workflow settings execution 

The settings' hierarchy is as follows:

*   **1. Access**
*   **2. Supplier**
*   **3. Hotel**

{{<mermaid align="center">}}
graph LR;
    A[Query Access Settings] -->B{Has Empty Fields}
    B --> C[Query Supplier Settings]
    C --> D{Has Empty Fields}
    D --> E[Query General Settings]
    E --> F{Has Empty Fields}
    F --> G[DB Access Settings]  
    G -->H{Has Empty Fields}
    H --> I[DB Access Settings]
    I --> J[]   
{{< /mermaid >}}


{{<mermaid align="center">}}
graph LR;
    A[Clients] -->|REQUEST: 1| B(HotelX)
    B[HotelX] -->|REQUEST| C(Suppliers)
    C[Suppliers] -->|RESPONSE: 2| B(HotelX)
    B[HotelX] -->|RESPONSE: 2| A(Client)
{{< /mermaid >}}

{{% notice info %}}

**1 Request order priority (1. Access Settings, 2. Supplier Settings, 3. Hotel Settings)**  
**2 Plugins settings**

{{% /notice %}}
