+++
title= "Errors"
keywords= "errors, supplier, hotel"
search= "Hotel - supplier"
sidebar= "mydoc_sidebar"
permalink = "/docs/hotel/supplier/configuration"
weight = 4
icon = "fa-exclamation-triangle"
+++

TravelgateX's API implements an element to display errors in every method response.

~~~xml
<applicationErrors>
    <type></type>
    <code></code>
    <description></description>
</applicationErrors>
~~~

### Application errors Description

| **Element**                       | **Number** | **Type** | **Description**|
| --------------------------------- | ---------- | -------- | -------------- |
| applicationErrors                 | 0..n       |          | Application errors reported by supplier. |
| applicationErrors/type            | 1          | String   | [Error Type as specified by XML Travelgate](/hotelpullsellers/methods/messages/listsdata/#error-codes). |
| applicationErrors/code            | 1          | String   | Native error code reported by supplier. |
| applicationErrors/description     | 1          | String   | Error description. |
| auditData                         | 1          |          | Data sent & received in the supplier's native format.|



