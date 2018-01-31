+++
title = "Data Automation"
pagetitle = ""
description = "Automate bulk data operations"
icon = "fa-database" 
weight = 4
alwaysopen = false
isDirectory = false
+++

### Bulk Data Automation

Many of TravelgateX's products use client's data in order to perform tasks. You can upload these data to our platform either by uploading it via SFTP or via a `mutation`. It's up to you to decide how to get the data to our servers.

Our APIs have been built from the ground up with performance in mind, this means that we must store data _inside_ the application in order to keep the response time to a minimum. 

The data we must store _per product_ is the following:

### HotelX

* [Mappings](/hotelx/plugins/mapping/)
* Pricing Rules
* Custom hotel lists (up to 4 different lists)

{{%custom-children-lv2%}}
