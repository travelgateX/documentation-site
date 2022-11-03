+++
title = "Mapping"
pagetitle = "HotelX Feature: Mapping"
description = "Map different codes from different Sellers in order to get a de-duped response."
icon = "fa-sitemap"
weight = 2
alwaysopen = false
+++

The mapping feature is used to change the supplier's native codes to the Buyer's own codes or vice-versa. There are these types:

* Hotel Map
* Board Map
* Room Map
* Rate Map
* Amenity Map
* Promotion Map
* Room Description Map

Our mapping formats share a common structure. In order to load your maps you just need to follow the instructions below:

### File Format

The file should be in the following format:

* **Encoding**: UTF-8

* **File Name**: [Context Source]\_[Context Destination]\_[entity]\_map.csv

  * Context Source: it corresponds to the client code

  * Context Destination: it corresponds to the supplier code

    * 1 file for each supplier

* **Header Row**: Code Source,Code Destination

  * Context Source: it corresponds to the client codes

  * Context Destination: it corresponds to the supplier codes    

* **Delimiter**: Comma (",")

* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/Maps/[entity]/

### File Names

All map files must have the same name structure as follows - you need create a file for *Context Destination*

|Entity|File Name|
|---|----|
|Hotel|[Context Source]\_[Context Destination]\_hotel\_map.csv|
|Board|[Context Source]\_[Context Destination]\_board\_map.csv|
|Room|[Context Source]\_[Context Destination]\_room\_map.csv|
|Rate|[Context Source]\_[Context Destination]\_rate\_map.csv|
|Amenity|[Context Source]\_[Context Destination]\_amenity\_map.csv|
|Promotion|[Context Source]\_[Context Destination]\promotion\_map.csv|
|Room Description|[Context Source]\_[Context Destination]\roomdescription\_map.csv|

### Directories

|Entity|File Name|
|---|---|
|Hotel|/F[folder code]\_[unique code]/HotelX\_[unique code]/Maps/Hotel/|
|Board|/F[folder code]\_[unique code]/HotelX\_[unique code]/Maps/Board/|
|Room|/F[folder code]\_[unique code]/HotelX\_[unique code]/Maps/Room/|
|Rate|/F[folder code]\_[unique code]/HotelX\_[unique code]/Maps/Rate/|
|Amenity|/F[folder code]\_[unique code]/HotelX\_[unique code]/Maps/Amenity/|
|Promotion|/F[folder code]\_[unique code]/HotelX\_[unique code]/Maps/Promotion/|
|Room Description|/F[folder code]\_[unique code]/HotelX\_[unique code]/Maps/Room/|

### Sample Files

Let's suppose we have the following client code and supplier code, then we need to create one file for each supplier we have:

* Client code: GUE

* Supplier Code: BVJ

**Name**: `GUE_BVJ_hotel_map.csv`


```csv
Code Source, Code Destination
10,c11\#10
10000,7604
10000,1274249
```
## How to use mapping
Nowadays, mapping can be used in Booking-Flow and Content APIs.
### Use in Booking-Flow
There are two ways of using mapping in Booking-Flow:
* If the context used in the query is different from supplier/s context that are used in the operation. 
In that case, HotelX will try to map all entities(hotel, board, etc.)(but amenities and promotions) to query's context.
* If the mapping plugin is requested (only boards, amenities and promotions), only entities requested in the query will be tried to map.

**Context in plugins via parameters**
You can also specify a context for each of the plugins you'll use in your query. This context will be the context in which you want to map the supplier codes. To do so, you'll only need to specify it via parameters. This context, if specified, will have priority over the context specified via settings in your query. This in an example:

```json
{
    "plugins": {
        "step": "RESPONSE_OPTION",
        "pluginsType": [
            {
                "type": "BOARD_MAP",
                "name": "board_mapX",
                "parameters": [
                  {
                    "key": "context",
                    "value": "yourContext"
                  }
                ]
            }
        ]
    }
}
``` 

**Important**: Mapping in booking-flow is only usable in Search service.<br><br>
Here you have the nodes where you can find mapped codes in Search response:<br><br>
__Hotel__: search.options.hotelCode (hotelCodeSupplier will contain the hotel's code in supplier's context)<br>
__Board__: search.options.boardCode (boardCodeSupplier will contain the board's code in supplier's context)<br>
__Room__: search.options.rooms.code (supplierCode will contain the room's code in supplier's context)<br>
__Rate__: search.options.rooms.ratePlans.code (supplierCode will contain the rate plan's code of the room in supplier's context)<br>
__Amenity__: search.options.amenities.code and/or inside rooms (amenitySupplierCode will contain the amenity's code in supplier context)<br>
__Promotion__: search.options.promotionCode (promotionCodeSupplier will contain the promotion's code in supplier's context)<br>
__Room Description__: search.options.rooms.code (code will contain the description maped code and supplierCode will contain the room's code in supplier's context)<br>
 
Examples of plugin that executes board and/or amenity and/or promotion mapping:<br>

**Boards**:
```json
{
    "plugins": {
        "step": "RESPONSE_OPTION",
        "pluginsType": [
            {
                "type": "BOARD_MAP",
                "name": "board_mapX"
            }
        ]
    }
}
``` 
**Amenities:**
```json
{
    "plugins": {
        "step": "RESPONSE_OPTION",
        "pluginsType": [
            {
                "type": "AMENITY_MAP",
                "name": "amenity_mapX"
            }
        ]
    }
}
```
**Promotions**:
```json
{
    "plugins": {
        "step": "RESPONSE_OPTION",
        "pluginsType": [
            {
                "type": "PROMOTION_MAP",
                "name": "promotion_mapX"
            }
        ]
    }
}
``` 
**Room descriptions**:
```json
{
    "plugins": {
        "step": "RESPONSE_OPTION",
        "pluginsType": [
            {
                "type": "ROOM_MAP",
                "name": "room_map",
                "parameters":[{"key":"description", "value":"true"}]
            }
        ]
    }
}
``` 
### Use in Content
The use of mapping plugin in Content is entirely different from Booking-Flow.
Currently this is only available in Hotel-List query and only amenity map are available. 
In order to request mapping in content, it is necessary to query an specific field called `mappings`. This field is a list of mappings that will contain the code of the entity amenity in supplier context and the context of the supplier. 
It is also necessary to indicate the group code and destination context in query variables.<br><br>

How to request inside Hotel-List for amenities:<br>
```graphql
 allAmenities(mapOptions: [{ groupCode: $amenitiesGroupCode, context: $amenitiesContext }]) {
              edges {
                node {
                  amenityData {
                    amenityCode
                    mappings {
                      context
                      code
                    }
                  }
                }
              }
            }
```

MapOptions is a list of {groupCode, context} pairs. The groupCode is the HotelX group assigned to your organization: (e.g. HotelX_...), and the context is the destinationContext you want to receive the codes in.<br> 
For each pair in this list, the mapping will be applied for each amenity. In other words, Hotel-List will change amenityCode to the context set in destinationContext<br>

## Other Maps

#### Room map by provider hotel

This plugin converts the room codes in the supplier's context by hotel. It's the same plugin (room map) as explained above, but it offers the possibility to map by supplier and hotel. 

##### Format File

The file must be in the below format:

* **Encoding**: UTF-8 
* **File Name**: [Context Source]\_[Context Destination]\_room\_map.csv
* **Header Row**: Code Source,Code Destination,Code Hotel
* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/Maps/

If you are using a file of room map, it's necessary to modify this file adding a new column. Please see the example below:

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

As you can see, the same file combined mappings with 3 values and mappings with 2 values. The rows with two values are mapped by supplier. The files with three values are mapped by supplier and hotel. It's possible to use only the mapping by supplier hotel, in this case, your file only will have rows with three values.

### Application

What happens if you use the combined plugin (room map and room map by provider hotel)? In this case, all the rooms with provider hotel map will be mapped to your context (the context put in the first value of file's name (client context)) and the room codes that don't have provider hotel map, will be mapped with provider map code (in case that exists). If no map codes are found, the option can be discarded (this rule is configurable, please contact us in order to change it and discard those options. By default, no options will be discarted). 

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

#### Room Description map by provider hotel

It works the same way as room map by provider hotel plugin, but it uses the provider room description to map the room code in the hotelx response.

### Execution example

In this example the context applied by the plugin will be used instead of the settings context.

```json
{
    "plugins": {
        "step": "RESPONSE_OPTION",
        "pluginsType": [
            {
                "type": "ROOM_MAP",
                "name": "room_map",
                "parameters":[{"key":"description", "value":"true"},{"key":"hotel", "value":"true"},{"key":"context", "value":"CTX"}]
            }
        ]
    }
}
```


## Default Codes

This feature allows to set a default code for each code in the source (provider) context. The entities that can have default codes are:<br>

* Board
* Room
* Rate
* Amenity
* Promotion
* Room Description

**Important**: this feature only must be used in Booking-Flow. Only one default code can be assigned to each supplier context.<br>
In order to use this feature, it is necessary to append the default code to the FTP.<br><br>
**Example file with default code**<br><br>
File name: `sourceContext_destinationContext_entity_map.csv`

```csv
Code Source,Code Destination
10000,7604
10000,1274249
MY_DEFAULT_CODE,*
```
**MY_DEFAULT_CODE** is the code that will be returned in response.<br><br>
In the example above, all the codes of entity "entity" of provider with context destinationContext that are not found in the file, will be MY_DEFAULT_CODE in response.<br>
<br>Remember that, if you do not use default codes, in case that a mapping is not found, and the option is not discarded, in the response you will receive:<br><br>
code: codeInSupplierContext<br>
supplierCode: codeInSupplierContext<br><br>
This feature is useful to control those codes which are not not mapped, and in case that you use aggregation plugins, all this options will be grouped in the same group and discarded.
## Modifying data through FTP

**Once mapping files are loaded, we can perform the following operations on them:**
[Update and Delete](/connectiontypesbuyers/hotel-x/plugins/overview/#update_ftp_data)