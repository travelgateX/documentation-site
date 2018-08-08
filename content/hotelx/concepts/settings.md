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

Settings are loaded by default in our Back Office and determine the behavior of hotelx by default.

This link shows how are the different settings structures by level: 

[HotelX Settings](/hotelx/reference/inputobjects/hotelsettingsinput/)

```
settings: {
        suppliers: {code: "HOTELTEST"}, 
        plugins: 
                {step: REQUEST, 
                pluginsType: 
                [{type: POST_STEP, name: "search_by_destination", 
                parameters: [{key: "accessID", value: "422"}]}]}, 
        businessRules: null, timeout: 24700, context: "HOTELTEST", 
        client: "Demo_Client", 
        testMode: true
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

### Where can apply settings?

It is possible to overwrite settings behavior in each request made by the client.

Setting can be applied in the following operations:

## Queries

This queries have the same settings configuration [**Click here to see configuration**](/hotelx/reference/inputobjects/hotelsettingsinput/)

* **Search**

    * Example : [Search setting example](/hotelx/quickstart#search)

* **Quote**

    * Example : [Quote setting example](/hotelx/quickstart#quote)

* **Booking List**

    * Example : [Booking Lista setting example](/hotelx/quickstart#bookinglist)

## Mutations

This mutations have the same settings configuration [**Click here to see configuration**](/hotelx/reference/inputobjects/hotelsettingsinput/)

* **Book**

    * Example : [Search setting example](/hotelx/quickstart#search)

* **Cancel**

    * Example : [Quote setting example](/hotelx/quickstart#quote)

### Settings scope

We have 5 different setting levels application:

* `HotelX Settings` affect the behavior of the HotelX and the definition is as follows:  
  [**Hotelx Settings**](/hotelx/reference/inputobjects/hotelbaseinput/)  

* `Base Settings` affect the behavior of the HotelX and the definition is as follows:  
  [**Base Settings**](/hotelx/reference/inputobjects/settingsbaseinput/) 

* `Supplier Settings` affect the behavior of the suppliers and the definition is as follows:  
  [**Supplier Settings**](/hotelx/reference/inputobjects/settingsbaseinput/)  

* `Access Settings` affect the behavior of the access and the definition is as follows:  
  [**Access Settings**](/hotelx/reference/inputobjects/settingsbaseinput/)  

* `Plugins Settings` affect the behavior of the plugins and the definition is as follows:  
  [**Plugins Settings**](/hotelx/reference/inputobjects/pluginstepinput/)  

**Every level define setting scope where are applied**

### Workflow settings execution 

The setting order priority is as follows:

*   **1. Access**
*   **2. Supplier**
*   **3. Hotel**

{{<mermaid align="left">}}
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
