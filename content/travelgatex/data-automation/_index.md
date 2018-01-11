+++
title = "Data Automation"
pagetitle = "Bulk Data Automation"
description = "Automate bulk data operations"
icon = "fa-database" 
weight = 4
alwaysopen = false
isDirectory = false
+++

Many of TravelgateX's products use client's data in order to perform tasks. These data can either be uploaded to our platform via SFTP or there's a `mutation` that does the same job. It's up to you to decide how to get the data to our servers.

The reasoning behind uploading data has to do with the overall performance of the applications. Our APIs have been built from the ground up with performance in mind, this means that we **must** store data _inside_ the application in order we can keep the response time to a minimum. 

The data we **must** to store _per product_ is the following:

### HotelX

* [Mappings](/hotelx/plugins/mapping/)
* Pricing Rules
* Custom hotel lists (up to 4 different lists)

{{%custom-children-lv2%}}
