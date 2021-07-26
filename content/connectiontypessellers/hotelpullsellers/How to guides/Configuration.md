+++
title= "Configuration Element"
keywords= "configuration, supplier, hotel"
search= "Hotel - supplier"
sidebar= "mydoc_sidebar"
permalink = "/docs/hotel/supplier/configuration"
weight = 1
+++

A Configuration element with the credentials, endpoints and extra needed parameters by the supplier **will be received in the request** from the buyer and will be sent to the supplier. In this configuration TravelgateX will receive the endpoints needed to send the request to the supplier (you can see the correlation between methods and enpoints used in the [connectivity](/connectiontypessellers/hotelpullsellers/how-to-guides/connectivity/) page).

~~~xml
<Configuration>
    <UrlGeneric></UrlGeneric>
    <Parameters>
        <Parameter key = "" value = ""/>
    </Parameters>
</Configuration>
~~~

### Configuration Description

| **Element**                          | **Number** | **Type** | **Description** |
| ------------------------------------ | ---------- | -------- | --------------- |
| Configuration                        | 1          |          | The info required to access the supplier's system. |
| Configuration/UrlGeneric             | 1       | String   | Supplier URL used for multiple methods.|
| Configuration/Parameters             | 0..1       |          | Parameters for additional information. |
| Configuration/Parameters/Parameter   | 0..n       |          | List of parameters. |
| @key                                 | 1          | String   | Contains the keyword/Id to identify a parameter. |
| @value                               | 1          | String   | Contains the parameter values |