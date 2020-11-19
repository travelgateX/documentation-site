+++
title = "Mapping Report"
pagetitle = "Hotel-X - Mapping Report"
description = "How to query your Hotel-x content mapping"
icon = "fa-book"
weight = 3
alwaysopen = false
isDirectory = false
+++

This page shows how to query Hotel-X content mapping using Insights-X API.

Access to https://api.travelgatex.com/

# Request Format

The request input is formed by 2 mandatory inputs: requestDate, mappingReport and 3 optional inputs: supplierCode_in, clientCode_in and accessCode_in. Below the possible values for each input:

* **Mandatory fields:**.
  * **requestDate:** Range of dates when the searches were done. 
    * **gte** Searches done after this date. (YYYY-MM-DD).
    * **lte** Searches done before this date. (YYYY-MM-DD).    

  * **mappingReport:** Type of report that will be requested. Below the possible values:
    * **RATE**
    * **BOARD**
    * **ROOM**

* **Optional fields:**
  * **supplierCode_in:** List of suppliers.
  * **clientCode_in:** List of clients.
  * **accessCode_in:** List of accesses.

## Example:
~~~json
{
  insights {
    hotelXMappingReport(
      where: {
        requestDate: { gte: "2020-02-02", lte: "2020-02-04" }
        mappingReport: ROOM_HOTEL
      }
    ) {
      data {
        url
      }
    }
  }
}

~~~ 
Include authorization header with your Api Key **or** Bearer.
~~~json
{
 "Authorization" :"Apikey 12345678-1234-1234-1234-1234567890"
}

~~~
~~~json
{
 "Authorization" :"Bearer fwlrijaeiwbaiopewnaoibwaiopbnaiu"
}

~~~

# Response Format

Results are given in a csv file with an URL from Google Cloud Storage. Log into a Google account might be required before download the file.

## Example:
~~~json
{
  "data": {
    "insights": {
      "hotelXMappingReport": {
        "data": {
          "url": "http://storage...../31965.csv"
        }
      }
    }
  }
}
~~~

# File Format

The file contains 6 columns separated by comma:

* **supplier** Supplier code. 
* **src_code** Suppliers item's code (rate/board/room/etc). 
* **src_description** Suppliers item's description (rate/board/room/etc). 
* **context** Context code of map. 
* **dst_code** Context code. This column will be empty when src_code wasn't found in mapping file.
* **last_hit** Date of last appearance. 
* **hits** Quantity of times that code was mapped. 

Field **src_description** is an array of json struct with next fields:

* **l** Language of returned description. 
* **d** Description returned by the supplier (rate/board/room/etc).

## Example:
~~~json
[
  {
    "l": "ES",
    "d": "Spanish description"
  },  
  {
    "l": "EN",
    "d": "English description"
  }
]
~~~

## Example:

| supplier | src\_code | src\_description | context | dst\_code  | last\_hit   | hits |
| :--------- | :--------- | :--------- | :--------- | :--------- | :--------- | :--------- |
| SUP1 | full | [{"l": "ES", "d": "Full Board"}] | CTX | FB | 2020-02-04 | 24565 |
| SUP1 | extra | [{"l": "ES", "d": "Extra Drinks"}] | CTX |  | 2020-02-03 | 284 |
| SUP2 | half\_board | [{"l": "ES", "d": "Half Board"}] | CTX | HB | 2020-02-02 | 2155 |
| SUP2 | all\_inclusive | [{"l": "ES", "d": "All Inclusive"}] | CTX | AI | 2020-02-04 | 27 |

File can be downloaded directly from the browser.
