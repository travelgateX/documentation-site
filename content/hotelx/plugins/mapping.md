+++
title = "Mapping"
pagetitle = "HotelX Mapping"
description = "Map plugins"
icon = "fa-sitemap"
weight = 2
alwaysopen = false
+++

Map plugins extends [HotelX](/hotelx/) allowing to match `Seller` and `Buyer` codes based on contexts.

### HotelCodeMatching

Matches `Seller` hotel codes based on file code mapping. 

### File Requirements

The file should be in the below format:

* **Encoding**: UTF-8
* **File Name**: [Context Source]_hotel_map.csv
* **Header Row**: Code Source, Context Destination, Code Destination
* **Delimiter**: Comma

```text
Code Source, Context Destination, Code Destination
10,GUE,c11#10
10000,JCB,7604
10000,TOU,1274249
```

File must be uploaded to your organization directory [SFTP](/travelgatex/data-automation/uploading-strategies)

### Configuration

```json
{

}
```

### Parameters

#### stopsOnMatchError: [Boolean]
Stops message execution when hotel matching can not be done. Default value _False_

### BoardCodeMatching
 
 
### RoomSemanticMatching
