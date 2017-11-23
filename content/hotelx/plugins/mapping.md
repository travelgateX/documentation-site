+++
title = "Mapping"
pagetitle = ""
description = "Map plugins"
icon = "fa-sitemap"
weight = 2
alwaysopen = false
+++

# Overview

Map plugins extends [HotelX](/hotelx/) allowing to match `Supplier` codes based on contexts.

# HotelCodeMatching

Matches `Supplier` hotel codes based on file code mapping. 

## File Requirements

The file should be in the below format:

* **Encoding**: UTF-8
* **File Name**: [Code Context Buyer]_hotel_map.csv
* **Header Row**: Code Context, Supplier Context, Code Supplier Context
* **Delimiter**: Comma

```text
Code Context, Supplier Context, Code Supplier Context
10,GUE,c11#10
10000,JCB,7604
10000,TOU,1274249
```

File must be uploaded to your organization directory [SFTP](/travelgatex/data-automation/ftp)

## Configuration

```json
{

}
```

## Parameters

### stopsOnMatchError: [Boolean]
Stops message execution when hotel matching can not be done. Default value _False_

# BoardCodeMatching
 
 
# RoomSemanticMatching