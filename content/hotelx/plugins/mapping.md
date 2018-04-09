+++
title = "Mapping"
pagetitle = "HotelX Mapping"
description = "Map plugins"
icon = "fa-sitemap"
weight = 2
alwaysopen = false
+++
The map plugins are used to change the supplier codes to client codes or vice versa. There are four types:
* Hotel map 
* Board Map 
* Room Map 
* Rate Map 
Our map formats share a common structure. In order to load your maps you just need to follow the instructions below:
## Format File
The file should be in the following format:
* **Encoding**: UTF-8
* **File Name**: [Context Source]_hotel_map.csv
* **Header Row**: Code Source, Context Destination, Code Destination
* **Delimiter**: Comma (",")
* **Directory**: ftp://ftp.xmltravelgate.com/Purchasing/Maps/[entity]/ 
### File Names
All files must have the same name structure
|Entity|File Name|
|---|----|
|Hotel|[Context Source]\_[Context Destination]\_hotel\_map.csv|
|Board|[Context Source]\_[Context Destination]\_board\_map.csv|
|Room|[Context Source]\_[Context Destination]\_room\_map.csv|
|Rate|[Context Source]\_[Context Destination]\_rate\_map.csv|
### Directories
|Entity|File Name|
|---|---|
|Hotel|ftp://ftp.xmltravelgate.com/Purchasing/Maps/Hotel/|
|Board|ftp://ftp.xmltravelgate.com/Purchasing/Maps/Board/|
|Room|ftp://ftp.xmltravelgate.com/Purchasing/Maps/Room/|
|Rate|ftp://ftp.xmltravelgate.com/Purchasing/Maps/Rate/|
### Sample File
**Name**: GUE\_BVJ\_hotel\_map.csv
**Data**:
Code Source, Code Destination
10,c11\#10
10000,7604
10000,1274249
Download file sample [here](../sample.csv).
## Plugin Name
|Entity Map|Plugin Name|
|---|---|
|Hotel|HotelMapX|
|Board|BoardMapX|
|Room|RoomMapX|
|Rate|RateMapX|
## Other Maps
However, an alternative for room map is also shown below:
### Description Room Map
As a room map alternative, you can generate a room code from a room description. This plugin applies some rules over the description and generates a code. You need to load other files for this plugin.
## Files
We have two files for this plugin:
* Alias Table: it is used to replace some words from the description 
* Noise Words: it deletes some words from the description 
### Alias Table
#### Format File
The file must be in the below format:
* Encoding: UTF-8 
* File Name: roomDescriptionMapX\_aliasTable.csv 
* Header Row: ToReplace, ReplaceWith, Order 
* Delimiter:  Comma (“,”) 
* Directory: ftp://ftp.xmltravelgate.com/Purchasing/Maps/plugin/ 
#### Sample File
**Name**: roomDescriptionMapX\_aliasTable.csv
**Data**:
ToReplace,ReplaceWith,Order
1 bed,apt,102
1 bedroom,apt,100
2 bedroom,2-bedroom,200
3 bed,3-bedroom,303
apartment,apt,902
### Noise Words
#### Format File
The file must be in the below format:
* **Encoding**: UTF-8 
* **File Name**: roomDescriptionMapX\_noiseWords.csv 
* **Header Row**: ToRemove 
* **Directory**: ftp://ftp.xmltravelgate.com/Purchasing/Maps/plugin/ 
#### Sample File
**Name**: roomDescriptionMapX\_noiseWords.csv
**Data**:
ToRemove
ad
b&b
breakf
## How applies
When you execute the plugin the steps are:
1. Get room description.
1. Replace strings with roomDescriptionMapX\_aliasTable.csv, the order to apply this replace depends on the order column.
1. Sort the description words alphabetically 
1. Remove words with roomDescriptionMapX\_noiseWords.csv file. 
1. Get your new code. 
## Execution example
```
{
    "plugins": {
        "step": "RESPONSE\_OPTION",
        "pluginsType": [
            {
                "type": "ROOM\_MAP"
                "name": "mapping\_room\_description"
            }
        ]
    }
}
```