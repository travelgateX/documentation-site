+++
title = "Data Automation"
pagetitle = ""
description = "Automate bulk data operations"
icon = "fa-database" 
weight = 5
alwaysopen = false
isDirectory = false
+++

## Bulk Data Automation

Several of our TravelgateX API products use your data in order to perform tasks.

For example, your application may use certain field names to describe rooms, hotel amenities, and rates. These need to be matched to field names for your suppliers.  

You can upload your data to our platform by:
- Uploading it via SFTP or
- Changing data via a `mutation`. 

You can decide what is the best way for you to get your updated data into our servers.

Our APIs have been built from the ground up with performance in mind. That means we must store data _inside_ the application in order to keep the response time to a minimum. 

The data we must store following specificitations:
### HotelX
* [Mappings](/hotelx/plugins/mapping/)
* [Custom hotel lists](/hotelx/concepts/content/)

{{%custom-children%}}
