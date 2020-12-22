+++
title = "Changelog 2020-12-22"
pagetitle = "Changelog 2020-12-22"
description = "Contains an accurated, chronologically-ordered list of notable changes"
weight = 2
icon="fa-exchange"
svgicon="https://media.graphcms.com/7k0GtZyQn6QDcolRhnuQ"
alwaysopen = false
hidden = true
date = 2020-12-22
tags = ["products-changelog"]
+++

## 2020-12-22

{{% release-notes-container type="a"%}}

* Add 3 new fields in *PaymentCardInput* **isVCC**, **virtualCreditCard** and **threeDomainSecurity**, check [Graphql schema changes](https://docs.travelgatex.com/travelgatex/release-notes/graphql-schema-changes/), for more detail and example you cansee the [Book](../../methods/bookingflow/book) request specification



* **Strong Customer Authentication (3DS)**. 3DS data can now be included with a Payment Card in a book request alongside payment card data. You can find new field **threeDomainSecurity** on the input of Paymentcard.
* 

 
* **Virtual Credit Cards (VCC).** Extra information about Virtual Credit Cards can now be included with a Payment Card in a Book request. You can find new field **virtualCreditCard** input of Paymentcard.

{{% /release-notes-container %}}