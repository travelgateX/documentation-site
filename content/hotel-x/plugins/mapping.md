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

### Other Maps in Booking API

#### Map by provider hotel

This plugin allows to convert the room codes in supplier context but by hotel. Is the same plugin (room map) explained before but it offers the possibility to map by supplier and hotel. 

##### Format File

The file must be in the below format:

* **Encoding**: UTF-8 
* **File Name**: [Context Source]\_[Context Destination]\_room\_map.csv
* **Header Row**: Code Source,Code Destination
* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/Maps/

If you are using a file of room map, is necessary that you modify this file adding a new column. Please, see the next example down:

##### Sample File

**Name**: xtg_provider_room_map.csv
**Data**:

``` csv
Code Source,Code Destination,Code Hotel
1,X,A
1,Y,A
1,Z,A
2,X1,B
2,X2,C
3,X3,D
4,X4,
5,X5,
```

How you can see, in the same file are combined maps with 3 values and maps with 2 values. The rows with two values are mapped by provider. The files with three values are mapped by provider and hotel. Is possible to use only the mapping by provider hotel, in this case, your file only has rows with three values.

### How applies

What happens if you use the combined plugin(room map and room map by provider hotel)? In this case, all the rooms with provider hotel map will be mapped to your context (the context put in the first value of file's name (client context)) and the room codes that don't have provider hotel map, will be mapped with provider map code (in case that exist). If no map codes are found, the option can be discarded (this rule is configurable). 

### Execution example

```json
{
    "plugins": {
        "step": "RESPONSE_OPTION",
        "pluginsType": [
            {
                "type": "ROOM_MAP",
                "name": "room_map",
                "parameters":[{"key":"hotel", "value":"true"}]
            }
        ]
    }
}
```

Besides, an alternative for room map is also shown below:

#### Description Room Map

As a room map alternative, you can generate a room code from a room description. This plugin applies some rules over the description and generates a code. You need to load other files for this plugin.


### Files

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
### Other Maps in Content API

#### Amenity Map 

This funcionality allows retrieving hotels in hotels service in another context different that supplier context. This funcionality differs with other mappings because mapping has to be requested in query fields, not in plugin section.

##### Format File

The file must be in the below format:

* **Encoding**: UTF-8 
* **File Name**: [Context Source]\_[Context Destination]\_amenity\_map.csv
* **Header Row**: Code Source,Code Destination 
* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/Maps/

If you are using a file of room map, is necessary that you modify this file adding a new column. Please, see the next example down:

##### Sample File

**Name**: contextSource_contextDestination_amenity_map.csv
**Data**:

``` csv
Code Source,Code Destination
1,X
1,Y
1,Z
2,X1
2,X2
3,X3
4,X4
5,X5
```

### Input Example

For using amenity mapping in Content API is necessary to include a parameter called "mapOptions" as array in allAmenities node. This array indicates all the pairs group-context that will be used to map amenity code. If amenity map is found for some group-context pair of mapOptions input, the code mapped will appear inside mappings field as code.

#### Query mapping node example
```json
mappings {
  context
  code
}
````
#### Query parameter example 
```json
allAmenities(mapOptions: [{groupCode: "HotelX_XXX", context: "CTX"}, {groupCode: "HotelX_YYY", context: "CTX2"}]) {
  edges {
    cursor
    node {
      code
      amenityData {
        code
        amenityCode
        type
        texts {
          text
          language
        }
        value {
          text
          language
        }
        mappings {
          context
          code
        }
      }
      adviseMessage {
        code
        level
        description
      }
    }
  }
}
```

### Output Examples

```json
{
    "edges" : [
        {
            "cursor" : "",
            "node" : {
                "code" : "",
                "amenityData" : {
                    "code" : "",
                    "amenityCode" : "amenityCode1",
                    "type" : "GENERAL",
                    "texts" : [
                        {
                            "text" : "24 hour front desk",
                            "language" : "en"
                        }
                    ],
                    "value" : [
                        {
                            "text" : "Amenity value example",
                            "language" : "en"
                        }
                    ],
                    "mappings" : null
                },
                "adviseMessage" : [
                    {
                        "code" : "22600",
                        "level" : "WARN",
                        "description" : "Amenity map code not found for group HotelX_XXX and context CTX1"
                    },
                    {
                        "code" : "22401",
                        "level" : "WARN",
                        "description" : "No permissions found over group HotelX_YYYY."
                    }
                ]
            }
        },
        {
            "cursor" : "",
            "node" : {
                "code" : "",
                "amenityData" : {
                    "code" : "",
                    "amenityCode" : "amenityCode2",
                    "type" : "GENERAL",
                    "texts" : [
                        {
                            "text" : "Restaurant",
                            "language" : "en"
                        }
                    ],
                    "value" : [
                        {
                            "text" : "Amenity value example",
                            "language" : "en"
                        }
                    ],
                    "mappings" : [
                        {
                            "context" : "CTX",
                            "code" : "codeInCTXContext"
                        }
                    ],
                    "adviseMessage" : [
                        {
                            "code" : "22401",
                            "level" : "WARN",
                            "description" : "No permissions found over group HotelX_YYYY."
                        }
                    ]
                }
            }
        }
    ]
}
```

The query of the response above is the response of the previous example identified as: "Query parameter example". There we can see that we send two mapping options, one requesting group HotelX_XXX with context CTX and the other with group HotelX_YYY and context CTX2. 

For this example, we supose that:

- the Apikey has no permission over group HotelX_YYY. For this reason, we find one adviseMessage with the description: "No permissions found over group HotelX_YYY" in each amenity nodes.
- the amenity with code amenityCode1 has not been found in amenity mapping file. For this reason we find one adviseMessage in first amenity node indicating that no mapping has been found for this amenityCode.

## Modifying data

**Once mapping files are loaded, we can perform the following operations on them:**

### Updating data 
We have two options:

1. Reprocessing the same data by renaming the file and just removing "_processed": **Example example_processed.csv --> example.csv**
2. Changing the data by deleting the processed file and uploading a new one with new information.
   
### Deleting data
Uploading a new file only with headers (no information).
