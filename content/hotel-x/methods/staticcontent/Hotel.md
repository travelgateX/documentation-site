{
"title": "Hotel",
"pagetitle": "Hotels",
"description": "Hotels from a supplier",
"icon": "fa-h-square",
"weight": 1,
"alwaysopen": false,
"default_user": "",
"gists": [
    {
        "n":"Basic Hotels Query",
        "g":"b1462010e27808c03ecb6d82afe2ebd7",
        "o":["graphiql"],
        "u":"mikimartin88",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    },
    {
        "n":"Hotels by HotelCodes",
        "g":"bba03939c4fe470215a8cb127b871d87",
        "o":["graphiql"],
        "u":"mikimartin88",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    },
    {
        "n":"Hotels by CountryCodes",
        "g":"f3574688964f9a8a44e177fd6edc2b76",
        "o":["graphiql"],
        "u":"mikimartin88",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    },
    {
        "n":"Hotels by DestinationCodes",
        "g":"d2862124a70cc6fa13259862705d1b64",
        "o":["graphiql"],
        "u":"mikimartin88",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    },
    {
        "n":"Hotels by Rank",
        "g":"1375b762dbcf08c1c130ee3bb8529c23",
        "o":["graphiql"],
        "u":"mikimartin88",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    }
    {
        "n":"Hotels with dates filter",
        "g":"dd0ffb2f6cae6567cf5598963830e085",
        "o":["graphiql"],
        "u":"mikimartin88",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    },
    {
        "n":"Hotels with fields filter",
        "g":"6d20d054c9e21f77fe046dafb544e25a",
        "o":["graphiql"],
        "u":"mikimartin88",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    }
 ]
}


## Hotels

Hotels Query returns a hotel list from one supplier's access. This entity contains static data about the hotel requested, such as code, name, location, and other information - You can find all these fields in the [graphQL api documentation](https://api.travelgatex.com/).
This query allows many types of search. You can receive hotels with hotel codes or with minimal destination codes, you can also filter the results based on rank. In this sense, note that there are mandatory and optional fields that allow filtering the hotels returned in the response. 
As for the response, if the number of hotels that have the selected provider is greater than 1000, these hotels will be returned in paginated responses. The full response is split into pages: By default, the maximum number of hotels returned in each page (response) is 1000, but it allows to request between 1 and 1000 hotels by filling in the field maxSize in the criteria. In order to obtain the next page of hotels, you need to fill in the token field, accordingly.

In order to enable all kind of search, input parameters must be filled and in some cases its possible to combine them for more accurate search. Also, there is some input parameters that must not be combined. This characteristic is explained later.

### Criteria

Criteria fields allow select provider (access) and allow to select the entity which will be used for search (search by hotel codes, search by destinations, search by countries,...).

**Fields for selecting the access(supplier)**  

- *access*: it represents the access for which you want to receive the hotels information.
- *group*: *only for internal processes. Please don't use.*

**Fields for selecting the entity of search**

These fields cannot be combined among themselves and all can be nil. In case that no one field is filled, all access hotels will be returned in a non paginated or paginated response/s. 

- *hotelCodes*: it allows to search by hotel codes. These codes are the same that are used in search query.
- *ranks*: it allows to filter by rank/s.
- *supplierHotelCodes*: used for search by hotel codes in supplier's context.
- *destinationCodes*: it allows to search hotels by minimal destination/s. A *minimal destination* is a destination that doesn't contain smaller destinations, only contains hotels.
- *countries*: it allows to search hotels by country. Country/ies will be specified in ISO 3466-1 alpha-2 format(i.e "ES")

**Field for configure the response**
- maxSize: it allows to specify the number of elements per page. The number of elements per page is maxSize if the number of hotels returned by the query sent is greater than maxSize. In this case, will be necessary to retrieve next/s page/s using token field. This use case will be explained later. 

### Token
The token allows to request the next page of hotels. The correct way of obtaining multiple pages of hotels is, in the first query:
- fill the query with input parameters necessary for perform the query
- maintain the parameter *token* empty in the request
- request the field *token* in the graph response. 

The value stored in field *token* in HotelConnection element in response, must be used in the subsequent query putting it in *token* input parameter. This process must be repeated setting the token of the previous response in the query parameter until the query return *"Hotels not found"*. In token queries, only *token* parameter must be filled.

### Filter
This field allows to make a more accurate query. Please, consider that is not necessary that AND and OR fields be filled, multiple filters can be used without the use of this fields. There is two kind of fields inside this filter:

- *Date filters*: in this API, an hotel can be created, updated and deleted. These *date filters* allow to search by dates in which the hotels has been created, updated or deleted.

- *Field filters*: these fields allow to search hotels that have information in indicated fields. It is possible to indicate these field filters: country, category, destination, name, coordinates.  


### Relay
This field allows to search by relay type search. More about relay in: [relay](https://relay.dev/docs/en/introduction-to-relay)

*Note*: not implemented in 2020-03-02

## Other particularities

- Count field in HotelConnection is for internal use and does not refer to hotels returned. There is not any field that shows this information.

- PageInfo element inside response must be used for relay search queries.

### GIATA Data

GIATA information can be retrieved in node GiataData inside HotelData node. This information is not returned by default, please contact us if you need this information.

### Mapping
Mapping in this API differs lightly of booking flow mapping process. [https://docs.travelgatex.com/hotel-x/plugins/mapping/](Booking Flow Mapping)

#### Amenity Map 

This functionality allows to return amenity codes in the context that the client wants. This functionality needs a .csv file that will be loaded in our FTP system (same file for this API and Booking Flow).

##### Format File

The file must be in the below format:

* **Encoding**: UTF-8 
* **File Name**: [Context Source]\_[Context Destination]\_amenity\_map.csv
* **Header Row**: Code Source,Code Destination 
* **Directory**: /F[folder code]\_[unique code]/HotelX\_[unique code]/Maps/

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

For this example, we suppose that:

- the Apikey has no permission over group HotelX_YYY. For this reason, we find one adviseMessage with the description: "No permissions found over group HotelX_YYY" in each amenity nodes.
- the amenity with code amenityCode1 has not been found in amenity mapping file. For this reason we find one adviseMessage in first amenity node indicating that no mapping has been found for this amenityCode.

## Samples

{{% graphiql-tabs %}}

{{% /graphiql-tabs %}}

{{< graphiql-styles >}}
{{% graphiql-script-tabs %}}
