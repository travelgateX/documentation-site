+++
title = "Access, Supplier and Context"
pagetitle = ""
description = "Learn about entities used in HotelX"
weight = 1
alwaysopen = false
+++

On this page you will learn more about Core Entities used in HotelX. You can also refer to the overarching [core concepts that apply to all TravelgateX APIs](https://docs.travelgatex.com/getting-started/concepts/). 

### Supplier

Product segmentation over a `Supplier` API implementation. Each `Supplier` has a `Supplier` code. These are unique values and used consistently throughout all TravelgateX implementations. See our [Supplier database](https://www.travelgatex.com/partners/seller), or ask us via our [Jira Service desk](https://xmltravelgate.atlassian.net/servicedesk/customer/portal/7) for a list of `Supplier` codes.

### Access

Configuration used when interacting with a `Supplier`, which includes:

* URLs 

* Credentials 

* Markets 

* Rate Types 

* Specific `Supplier` settings 

### Client

`Client` codes are consistent throughout all TravelgateX implementations. These codes are used to identify the business that is making the request and to confirm that the business has a configuration assigned to it.

### Context

`Context` is the way codes are formed and used in implementations. Each `Profile` (either a `Buyer` or `Supplier`) can manage your own contexts or reuse existing ones. Different buyers or sellers can also manage the same codes context. For example, the `Supplier`[SmyRooms](https://www.travelgatex.com/partner/seller/smyrooms) uses SMY contexts for their implementations.

`Context` applies to:

* Hotel Codes 

* Board Codes 

* Room Codes 

With our built-in solution, you are able to choose the context that you wish to use when requesting a HotelX operation. For example, if you are a `Buyer`, you can [map](/hotelx/plugins/mappings) your context to your Suppliers contexts.

We recommend using the widest `Context` possible or use your own context. That way, all supplier mappings will be resolved.

{{% alert theme="info" %}}For more information on setting contexts, check out our <a href="https://docs.travelgatex.com/hotelx/plugins/mapping/">**Plugin guide on Mapping**</a>.{{% /alert %}}
