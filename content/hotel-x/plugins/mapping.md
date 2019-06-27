+++
title = "Mapping"
pagetitle = "HotelX Mapping"
description = "Map different codes from different suppliers in order to get a de-duped response."
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

## Example files
You can download example for the files structure [here](/content/sample_mapping.zip)


## Entity Maps

### File Format

The file should be in the following format:

* **Encoding**: UTF-8

* **File Name**: [Context Source]\_[Context Destination]\_[entity]\_map.csv

  * Context Source: it corresponds to the client code

  * Context Destination: it corresponds to the supplier code

    * 1 file for each supplier

* **Header Row**: Code Source, Code Destination

  * Context Source: it corresponds to the client codes

  * Context Destination: it corresponds to the supplier codes    

* **Delimiter**: Comma (",")

* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/Maps/[entity]/

### File Names

All map files must have the same name structure as follows - you need create a file for *Context Destionation*

|Entity|File Name|
|---|----|
|Hotel|[Context Source]\_[Context Destination]\_hotel\_map.csv|
|Board|[Context Source]\_[Context Destination]\_board\_map.csv|
|Room|[Context Source]\_[Context Destination]\_room\_map.csv|
|Rate|[Context Source]\_[Context Destination]\_rate\_map.csv|

### Directories

|Entity|File Name|
|---|---|
|Hotel|/F[folder code]\_[unique code]/HotelX\_[unique code]/Maps/Hotel/|
|Board|/F[folder code]\_[unique code]/HotelX\_[unique code]/Maps/Board/|
|Room|/F[folder code]\_[unique code]/HotelX\_[unique code]/Maps/Room/|
|Rate|/F[folder code]\_[unique code]/HotelX\_[unique code]/Maps/Rate/|

### Sample Files

Let's suppose we have the following client code and supplier code, then we need to create one file for each supplier we have
* Client code: GUE

* Supplier Code: BVJ

**Name**: GUE\_BVJ\_hotel\_map.csv


```csv
Code Source, Code Destination
10,c11\#10
10000,7604
10000,1274249
```

## Plugin Name

|Entity Map|Plugin Name|
|---|---|
|Hotel|HotelMapX|
|Board|BoardMapX|
|Room|RoomMapX|
|Rate|RateMapX|

## Other Maps

Besides, an alternative for room map is also shown below:

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
* Directory:  /F[folder code]\_[unique code]/HotelX\_[unique code]/Maps/plugin/

#### Sample File

**Name**: roomDescriptionMapX\_aliasTable.csv

```csv
ToReplace,ReplaceWith,Order
1 bed,apt,102
1 bedroom,apt,100
2 bedroom,2-bedroom,200
3 bed,3-bedroom,303
apartment,apt,902
```

### Noise Words

#### Format File

The file must be in the below format:

* **Encoding**: UTF-8 
* **File Name**: roomDescriptionMapX\_noiseWords.csv 
* **Header Row**: ToRemove 
* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/Maps/plugin/

#### Sample File

**Name**: roomDescriptionMapX\_noiseWords.csv
**Data**:

``` csv
ToRemove
ad
b&b
breakf
```

## How applies

When you execute the plugin the steps to be followed are:

1. Get room description.
1. Replace strings with roomDescriptionMapX\_aliasTable.csv, the order to apply this replace depends on the order column.
1. Sort the description words alphabetically. 
1. Remove words with roomDescriptionMapX\_noiseWords.csv file. 
1. Get your new code. 

## Execution example

```json
{
    "plugins": {
        "step": "RESPONSE_OPTION",
        "pluginsType": [
            {
                "type": "ROOM_MAP",
                "name": "mapping_room_description"
            }
        ]
    }
}
```

## Modifying data

**Once mapping files are loaded, we can perform the following operations on them:**

### Updating data 
We have two options:

1. Reprocessing the same data by renaming the file and just removing "_processed": **Example example_processed.csv --> example.csv**
2. Changing the data by deleting the processed file and uploading a new one with new information.
   
### Deleting data
Uploading a new file only with headers (no information).
