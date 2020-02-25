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
    * **BOARD**
    * **ROOM**
    * **ROOM_HOTEL**
    * **RATE**

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
          "url": "https://storage.cloud.google.com/report-availability/45782.csv"
        }
      }
    }
  }
}
~~~

# File Format

The file contains 6 columns separated by comma:

* **supplier** Supplier code. 
* **context** Context code of map. 
* **src_code** Suppliers item's code (board/rooms/etc). 
* **dst_code** Context code. This column will be empty when src_code wasn't found in mapping file.
* **last_hit** Date of last appearance. 
* **hits** Quantity of times that code was mapped. 

## Example:

| supplier | context | src\_code | dst\_code  | last\_hit   | hits |
| :--------- | :--------- | :--------- | :--------- | :--------- | :--------- |
| SUP1 | CTX | full | FB | 2020-02-04 | 24565 |
| SUP1 | CTX | extra |  | 2020-02-03 | 284 |
| SUP2 | CTX | half\_board | HB | 2020-02-02 | 2155 |
| SUP2 | CTX | all\_inclusive | AI | 2020-02-04 | 27 |

File can be downloaded directly from the browser.
