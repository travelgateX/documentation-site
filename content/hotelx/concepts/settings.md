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

Settings are fields needed by HotelX to configure all suppliers requests.  

[Base Settings]

```
settings: {
    timeout: 300, 
    auditTransactions: true, 
    currency: "EUR",
    businessRules: 
      {
        optionsQuota: 500,
        businessRulesType: CHEAPER_AMOUNT
      }  
}
```

[Default Settings]

```
settings: {
    connectUser: "test",
    context: "test",
    language: "es",
    currency: "EUR",
    nationality: "ES",
    market: "es",
    timeouts: 300,
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

#### Queries

* **Search**

    * Example : [Search setting example](/hotelx/quickstart#search)

* **Quote**

    * Example : [Quote setting example](/hotelx/quickstart#quote)

* **Booking List**

    * Example : [Booking List setting example](/hotelx/quickstart#bookinglist)

#### Mutations

* **Book**

    * Example : [Book setting example](/hotelx/quickstart#book)

* **Cancel**

    * Example : [Cancel setting example](/hotelx/quickstart#cancel)


## Settings scope

There are 2 posibles ways to specify the settings

* **Request Settings** settings can be specified in any request using 3 differents inputs: 
    
    * `HotelXAccessInput`
    
    * `HotelXSupplierInput`
    
    * `HotelSettingsInput`

    (Please check our grpah specification for understand those inputs)

* **Default Back Office Settings** settings can be specified using our Back Office. This settings will be used as default if settings are not specified at the request.   

### What settings can be specified?

We have 3 different setting levels application:

* `Access` If an access has settings specified, we use those settings for any request that uses this access. This settings can be specified at the request using the settings field from `HotelXAccessInput` input. 

* `Supplier` If a supplier has settings specified, we use those settings for any request that uses this supplier. This settings can be specified at the request using the settings field from `HotelXSupplierInput` input. 

* `Request` If a request has settings specified, we use those settings in any derived request. This settings can be specified at the request using the settings field from `HotelSettingsInput` input. 

Additionally, we have 2 more levels to specify defaults settings in our Back Office. 

* `Client` If a client has settings specified, we use those settings in any derived request. 

* `Group` If a Group has settings specified, we use those settings in any derived request.


### Workflow settings execution 

We have defined a order priority to select what settings use.

For any needed field we will use the `Access` settings, if any needed field is not specified we will use the `Supplier` settings, if any needed field continues empty we will use the `Request` settings. 
If a needed field is not specified in any input, we will search in our Back Office a valid value. Will search in `Access`, `Supplier`,`Client` and `Group` settings if is necessary. 

**Request settings flow**
{{<mermaid align="left">}} 
graph LR;
    A[HotelXAccessInput] --> B(HotelSupplierInput)
    B[HotelSupplierInput] --> C(HotelSettings)
    C[HotelSettings] --> D(Default Settings)
{{< /mermaid >}}

**Default settings flow**
{{<mermaid align="left">}} 
graph LR;
    D[Default Access Settings] --> E(Default Supplier Settings)
    E[Default Supplier Settings] --> F(Default Client Settings)
    F[Default Client Settings] --> G(Default Group Settings)
{{< /mermaid >}}

