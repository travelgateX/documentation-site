+++
title = "AirShopping"
pagetitle = "AirShopping"
description = "Learn about the AirShopping method"
icon = "fa-list-alt"
weight = 1
alwaysopen = false
+++



On this page you will learn more about the Flight-X's AirShopping method 



### Method Goals


This method aims to return all the available flight offers matching the given request criteria. 



### Request Format


This method receives a IATA_AishoppingRQ object with a JSON format as request with a list of OriginDestCriteria, every element of this list must have a destination and an origin IATA airport codes and a departure date. Also you have to send a list of passengers with their type. Finally, you have to sent the CarrierCriteria, that is a list of carriers from you want to get the offers. You learn more about the request format in the following sections.



### Response Format


This method returns a IATA_AishoppingRS object with a JSON format. Every response have a unic identifier, called ShoppingResponseRefID, this identifier is necesary in the upcoming requests. On the result you get every flight result grouped by Offer and carrier. An Offer have an identifier called OfferID, and an *OwnerCode* (This is carrier that present the Offer). All the offers have a list of OfferItems. An OfferItem have a price and a list of included services and also an identifier called OfferItemID. When you want to book an offer you have to sent the OfferID and the asociated OfferItemsIDs in the upcoming requests. You learn more about the response format in the following sections.



### Remarks

This method **must** be called **before** the OrderCreate method. 



### IATA_AishoppingRQ example



```json
{
    "IATA_AirShoppingRQ": {
        "Party": {
            "Sender": {
                "Aggregator": {
                    "AggregatorID": "TravelGateX"
                }
            }
        },
        "Request": {
            "FlightCriteria": {
                "OriginDestCriteria": [
                    {
                        "DestArrivalCriteria": {
                            "IATA_LocationCode": "FRA"
                        },
                        "OriginDepCriteria": {
                            "Date": "2019-11-01",
                            "IATA_LocationCode": "PMI"
                        }
                    }
                ]
            },
            "Paxs": {
                "Pax": [
                    {
                        "PaxID": "PAX_1",
                        "PTC": "ADT"
                    }
                ]
            },
            "ShoppingCriteria": {
                "CarrierCriteria": [
                    {
                        "Carrier": {
                            "AirlineDesigCode": "IB"
                        }
                    },
                    {
                        "Carrier": {
                            "AirlineDesigCode": "BA"
                        }
                    }
                ]
            }
        }
    }
}
```



### IATA_AishoppingRQ skeleton

| **Element**	| **Number**	| **Type**	| **Description**		|
| ------------- |---------------|-----------|---------------------- |
| IATA_AirShoppingRQ | 1	    | 	        | Root element		    |
| IATA_AirShoppingRQ/Party | 1	    | 	    | Comercial information about the parties|
| IATA_AirShoppingRQ/Party/Sender | 1	    | 	    | Information about the party sending the message|
| IATA_AirShoppingRQ/Party/Sender/Aggregator | 1	    | 	    | Entity that distribute a Seller request to multiple Airlines and consolidate the several responses in one. |
| IATA_AirShoppingRQ/Party/Sender/Aggregator | 1	    | 	    | Entity that distribute a Seller request to multiple Airlines and consolidate the several responses in one. |
| IATA_AirShoppingRQ/Party/Sender/Aggregator/AggregatorID | 1	    | 	String    | Aggregator identifier |
| IATA_AirShoppingRQ/Request | 1	    |     | AirShoppingRQ useful information.|
| IATA_AirShoppingRQ/Request/FlightCriteria | 1	    |     | Origin Destination information for this shopping request|
| IATA_AirShoppingRQ/Request/FlightCriteria/OriginDestCriteria | 1..n	    |     | Origin Destination information for this shopping request|
| IATA_AirShoppingRQ/Request/FlightCriteria/OriginDestCriteria/OriginDepCriteria | 1	    |     | Origin information|
| IATA_AirShoppingRQ/Request/FlightCriteria/OriginDestCriteria/OriginDepCriteria/IATA_LocationCode | 1	    |  String   | IATA 3-letter code of a location|
| IATA_AirShoppingRQ/Request/FlightCriteria/OriginDestCriteria/OriginDepCriteria/Date | 1	    |  Date   | The customer's requested departure date. Format: **yyyy-mm-dd**|
| IATA_AirShoppingRQ/Request/FlightCriteria/OriginDestCriteria/DestArrivalCriteria | 1	    |     | Destination information|
| IATA_AirShoppingRQ/Request/FlightCriteria/OriginDestCriteria/DestArrivalCriteria/IATA_LocationCode | 1	    |  String   | IATA 3-letter code of a location|
| IATA_AirShoppingRQ/Request/Paxs | 1	    |    | Passengers information|
| IATA_AirShoppingRQ/Request/Paxs/Pax | 1..n	    |    | Passenger who wants to travel.|
| IATA_AirShoppingRQ/Request/Paxs/Pax/PaxID | 1	    |  String | Identifier of a passenger in the context of one message. | 
| IATA_AirShoppingRQ/Request/Paxs/Pax/PTC | 1	    |  Enum | Passenger type. Possible values: **ADT** (Adult), **CHD** (Child), **INF** (Infant) | 
| IATA_AirShoppingRQ/Request/ShoppingCriteria | 1	    |   | Preferred or required criteria that offers has to acomplish| 
| IATA_AirShoppingRQ/Request/ShoppingCriteria/CarrierCriteria | 1..n	    |   | Airline preferences for a shopping request.| 
| IATA_AirShoppingRQ/Request/ShoppingCriteria/CarrierCriteria/Carrier | 1	    |  |  The organitzation that creates the offers. | 
| IATA_AirShoppingRQ/Request/ShoppingCriteria/CarrierCriteria/Carrier/AirlineDesigCode | 1	    | String |Airline code assigned to a carrier. Either ICAO-defined 3-letter code or IATA-defined 2-letter code. | 



### IATA_AishoppingRS example



```json
{
    "IATA_AirShoppingRS" : {
        "Response" : {
            "DataLists" : {
                "PaxList" : {
                    "Pax" : [
                        {
                            "PaxID" : "PAX_1",
                            "PTC" : "ADT"
                        }
                    ]
                },
                "PaxJourneyList" : {
                    "PaxJourney" : [
                        {
                            "PaxJourneyID" : "JOURNEY_7871faa205094663b5e1cc9861aff646",
                            "PaxSegmentRefID" : [
                                "SEGMENT_5a9d173b1ddf4777ad8ebb066369449f_1",
                                "SEGMENT_c193b471846748d28e22a9c557ca9053_5"
                            ]
                        },
                        {
                            "PaxJourneyID" : "JOURNEY_61856b84b510493395391e27f8d6b423",
                            "PaxSegmentRefID" : [
                                "SEGMENT_486671d04e154c978bb35c84e7b0c7d3_0",
                                "SEGMENT_aca345252395405eadd8ea65d053b316_1"
                            ]
                        }
                    ]
                },
                "PaxSegmentList" : {
                    "PaxSegment" : [
                        {
                            "PaxSegmentID" : "SEGMENT_5a9d173b1ddf4777ad8ebb066369449f_1",
                            "Dep" : {
                                "IATA_LocationCode" : "PMI",
                                "AircraftScheduledDateTime" : "2019-11-01T17:50:00"
                            },
                            "Arrival" : {
                                "IATA_LocationCode" : "MAD"
                            },
                            "MarketingCarrierInfo" : {
                                "CarrierDesigCode" : "I2",
                                "MarketingCarrierFlightNumberText" : "IB3925"
                            }
                        },
                        {
                            "PaxSegmentID" : "SEGMENT_c193b471846748d28e22a9c557ca9053_5",
                            "Dep" : {
                                "IATA_LocationCode" : "MAD",
                                "AircraftScheduledDateTime" : "2019-11-01T19:55:00"
                            },
                            "Arrival" : {
                                "IATA_LocationCode" : "FRA"
                            },
                            "MarketingCarrierInfo" : {
                                "CarrierDesigCode" : "YW",
                                "MarketingCarrierFlightNumberText" : "IB8712"
                            }
                        },
                        {
                            "PaxSegmentID" : "SEGMENT_f0dfd814a7e54fb1b1ba3a1b032639cb_0",
                            "Dep" : {
                                "IATA_LocationCode" : "PMI",
                                "AircraftScheduledDateTime" : "2019-11-01T08:30:00"
                            },
                            "Arrival" : {
                                "IATA_LocationCode" : "FRA"
                            },
                            "MarketingCarrierInfo" : {
                                "CarrierDesigCode" : "DE",
                                "MarketingCarrierFlightNumberText" : "DE1503"
                            }
                        },
                        {
                            "PaxSegmentID" : "SEGMENT_4c8ba58f16b543e6a34aa6295246870f_1",
                            "Dep" : {
                                "IATA_LocationCode" : "PMI",
                                "AircraftScheduledDateTime" : "2019-11-01T08:30:00"
                            },
                            "Arrival" : {
                                "IATA_LocationCode" : "FRA"
                            },
                            "MarketingCarrierInfo" : {
                                "CarrierDesigCode" : "DE",
                                "MarketingCarrierFlightNumberText" : "DE1503"
                            }
                        },
                        {
                            "PaxSegmentID" : "SEGMENT_486671d04e154c978bb35c84e7b0c7d3_0",
                            "Dep" : {
                                "IATA_LocationCode" : "PMI",
                                "AircraftScheduledDateTime" : "2019-11-01T10:50:00"
                            },
                            "Arrival" : {
                                "IATA_LocationCode" : "LCY"
                            },
                            "MarketingCarrierInfo" : {
                                "CarrierDesigCode" : "CJ",
                                "MarketingCarrierFlightNumberText" : "BA8484"
                            }
                        },
                        {
                            "PaxSegmentID" : "SEGMENT_aca345252395405eadd8ea65d053b316_1",
                            "Dep" : {
                                "IATA_LocationCode" : "LHR",
                                "AircraftScheduledDateTime" : "2019-11-01T19:20:00"
                            },
                            "Arrival" : {
                                "IATA_LocationCode" : "FRA"
                            },
                            "MarketingCarrierInfo" : {
                                "CarrierDesigCode" : "BA",
                                "MarketingCarrierFlightNumberText" : "BA0916"
                            }
                        }
                    ]
                }
            },
            "ShoppingResponse" : {
                "ShoppingResponseRefID" : "Qm9va2luZ0AxNTcyNDQ0MjE0NzA4LWRpY3B4*IB#0f6ca699-fb1e-11e9-91cc-437667f2aa0f*DE2#op08.tx-08-01-1-20215314-9d49-4a4c-811a-e3aca6bec152*BA"
            },
            "OffersGroup" : {
                "CarrierOffers" : [
                    {
                        "Offer" : [
                            {
                                "OfferID" : "IB96c16ed8aae348adbe965c5f0fafeed6OP-4#IB96c16ed8aae348adbe965c5f0fafeed6OP-4",
                                "OwnerCode" : "IB",
                                "OfferItem" : [
                                    {
                                        "Price" : {
                                            "TotalAmount" : {
                                                "CurCode" : "EUR",
                                                "Amount" : "503.80"
                                            }
                                        },
                                        "OfferItemID" : "IB96c16ed8aae348adbe965c5f0fafeed6OP_01-4#IB96c16ed8aae348adbe965c5f0fafeed6OP_01-4",
                                        "Service" : [
                                            {
                                                "ServiceID" : "SERV_84b1d357cef1436cac77b89d6488af71_1",
                                                "PaxRefID" : [
                                                    "PAX_1"
                                                ],
                                                "ServiceAssociations" : {
                                                    "PaxJourneyRefID" : [
                                                        "JOURNEY_7871faa205094663b5e1cc9861aff646"
                                                    ]
                                                }
                                            },
                                            {
                                                "ServiceID" : "SERV_7e48a249def445e4bb4fd904bf8ac754_5",
                                                "PaxRefID" : [
                                                    "PAX_1"
                                                ],
                                                "ServiceAssociations" : {
                                                    "PaxJourneyRefID" : [
                                                        "JOURNEY_7871faa205094663b5e1cc9861aff646"
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "Offer" : [
                            {
                                "OfferID" : "OF-300a0de1-ff52-478c-a218-ab97076aa680#OF-300a0de1-ff52-478c-a218-ab97076aa680",
                                "OwnerCode" : "BA",
                                "OfferItem" : [
                                    {
                                        "Price" : {
                                            "TotalAmount" : {
                                                "CurCode" : "EUR",
                                                "Amount" : "748.82"
                                            }
                                        },
                                        "OfferItemID" : "OF-300a0de1-ff52-478c-a218-ab97076aa680-OI-1+T1$BA#OF-300a0de1-ff52-478c-a218-ab97076aa680-OI-1+T1$BA",
                                        "Service" : [
                                            {
                                                "ServiceID" : "SERV_500f07718c974332b4fa73dcd06cc6da_0",
                                                "PaxRefID" : [
                                                    "PAX_1"
                                                ],
                                                "ServiceAssociations" : {
                                                    "PaxJourneyRefID" : [
                                                        "JOURNEY_61856b84b510493395391e27f8d6b423"
                                                    ]
                                                }
                                            },
                                            {
                                                "ServiceID" : "SERV_4d50f95e0f2643d89a004609de97a1df_1",
                                                "PaxRefID" : [
                                                    "PAX_1"
                                                ],
                                                "ServiceAssociations" : {
                                                    "PaxJourneyRefID" : [
                                                        "JOURNEY_61856b84b510493395391e27f8d6b423"
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
}
```



### IATA_AishoppingRS skeleton

| **Element**	| **Number**	| **Type**	| **Description**		|
| ------------- |---------------|-----------|---------------------- |
| IATA_AirShoppingRS | 1	    | 	        | Root element		    |
| IATA_AirShoppingRS/Error | 0..n	    | 	     | Information about the errors detected processing the request.		    |
| IATA_AirShoppingRS/Error/Code | 1	    | String | Code of the error		    |
| IATA_AirShoppingRS/Error/DescText | 1	| String | Decription of the error		    |
| IATA_AirShoppingRS/Error/LangCode | 1	| String | Language code   |
| IATA_AirShoppingRS/Error/OwnerName | 1 | String | The name of the organization owning the error codelist.	    |
| IATA_AirShoppingRS/Error/StatusText | 1 | String | Document processing status.	    |
| IATA_AirShoppingRS/Error/TagText | 1 | String	| Identifies the tag/XPath which relates to the provided Error.		    |
| IATA_AirShoppingRS/Error/TypeCode | 1 | String | Error type code	    |
| IATA_AirShoppingRS/Error/URL | 1	| String | Link to an online description of the provided Error. |
| IATA_AirShoppingRS/Error/ErrorID | 1 | String |Unique identifier for this error instance.|
| IATA_AirShoppingRS/Response | 0..1 |  |AirShopping response information|
| IATA_AirShoppingRS/Response/DataLists | 1 |  |Lists of definitions for this message|
| IATA_AirShoppingRS/Response/DataLists/PaxList | 1 |  |Passenger data list definition.|
| IATA_AirShoppingRS/Response/DataLists/PaxList/Pax | 1..n	    |    | Passenger who wants to travel.|
| IATA_AirShoppingRS/Response/DataLists/PaxList/Pax/PaxID | 1	    |  String | Identifier of a passenger in the context of one message. | 
| IATA_AirShoppingRS/Response/DataLists/PaxList/Pax/PTC | 1	    |  Enum | Passenger type. Possible values: **ADT** (Adult), **CHD** (Child), **INF** (Infant) |
| IATA_AirShoppingRS/Response/DataLists/ServiceDefinitionList | 0..1	    |   |  Service Definition data list definition.|
| IATA_AirShoppingRS/Response/DataLists/ServiceDefinitionList/ServiceDefinition | 0..n	    |   | Description and characteristics of a non-flight products | 
| IATA_AirShoppingRS/Response/DataLists/ServiceDefinitionList/ServiceDefinition/ServiceDefinitionID | 1	    | String  | Service Definition identifier | 
| IATA_AirShoppingRS/Response/DataLists/ServiceDefinitionList/ServiceDefinition/Name | 1	    |   | Service name |
| IATA_AirShoppingRS/Response/DataLists/ServiceDefinitionList/ServiceDefinition/Desc | 1..n	    |   | Characteristics of the service  |
| IATA_AirShoppingRS/Response/DataLists/ServiceDefinitionList/ServiceDefinition/Desc/DescText | 1	    | String   | Text description | 
| IATA_AirShoppingRS/Response/DataLists/PaxJourneyList | 1	    |   | Journey data list definition. | 
| IATA_AirShoppingRS/Response/DataLists/PaxJourneyList/PaxJourney | 1..n	    |   |  Set of segments which satisfies passenger transportation from an origin to destination.  | 
| IATA_AirShoppingRS/Response/DataLists/PaxJourneyList/PaxJourney/PaxJourneyID | 1	    | String  | Passenger Journey identifier |
| IATA_AirShoppingRS/Response/DataLists/PaxJourneyList/PaxJourney/PaxSegmentRefID | 1..n	    | String  | Reference to a passenger segment identifier in this message  |
| IATA_AirShoppingRS/Response/DataLists/PaxSegmentList | 1	    |   | Segment data list definition | 
| IATA_AirShoppingRS/Response/DataLists/PaxSegmentList/PaxSegment | 1..n	    |   | Transportation of a passenger on an operating Segment in a date | 
| IATA_AirShoppingRS/Response/DataLists/PaxSegmentList/PaxSegment/PaxSegmentID | 1	    |   | Passenger Segment identifier | 
| IATA_AirShoppingRS/Response/DataLists/PaxSegmentList/PaxSegment/Dep | 1	    |   | Departure location information  | 
| IATA_AirShoppingRS/Response/DataLists/PaxSegmentList/PaxSegment/Dep/IATA_LocationCode | 1	    |  String | IATA 3-letter code of a location | 
| IATA_AirShoppingRS/Response/DataLists/PaxSegmentList/PaxSegment/Dep/AircraftScheduledDateTime | 1	    | Date  | The scheduled date and time of departure of the flight. Format: **yyyy-mm-ddTHH:mm:ss**  | 
| IATA_AirShoppingRS/Response/DataLists/PaxSegmentList/PaxSegment/Arrival | 1	    |   | Arrival location information | 
| IATA_AirShoppingRS/Response/DataLists/PaxSegmentList/PaxSegment/Arrival/IATA_LocationCode | 1	    |  String | IATA 3-letter code of a location | 
| IATA_AirShoppingRS/Response/DataLists/PaxSegmentList/PaxSegment/MarketingCarrierInfo/ | 1	    |   | Comercial carrier information   | 
| IATA_AirShoppingRS/Response/DataLists/PaxSegmentList/PaxSegment/MarketingCarrierInfo/CarrierDesigCode | 1	    |  String | Airline code assigned to a carrier. Either ICAO-defined 3-letter code or IATA-defined 2-letter code. | 
| IATA_AirShoppingRS/Response/DataLists/PaxSegmentList/PaxSegment/MarketingCarrierInfo/MarketingCarrierFlightNumberText | 1	    |  String | Identifier of a flight assigned by a carrier  | 
| IATA_AirShoppingRS/Response/DataLists/PaxSegmentList/PaxSegment/MarketingCarrierInfo/MarketingCarrierFlightNumberText | 1	    |  String | Identifier of a flight assigned by a carrier  | 
| IATA_AirShoppingRS/Response/Warning | 0..n	    | 	     | Information about the warnings detected processing the request.		    |
| IATA_AirShoppingRS/Response/Warning/Code | 1	    | String | Code of the warning		    |
| IATA_AirShoppingRS/Response/Warning/DescText | 1	| String | Decription of the warning		    |
| IATA_AirShoppingRS/Response/Warning/LangCode | 1	| String | Language code   |
| IATA_AirShoppingRS/Response/Warning/OwnerName | 1 | String | The name of the organization owning the warning codelist.	    |
| IATA_AirShoppingRS/Response/Warning/StatusText | 1 | String | Document processing status.	    |
| IATA_AirShoppingRS/Response/Warning/TagText | 1 | String	| Identifies the tag/XPath which relates to the provided warning.		    |
| IATA_AirShoppingRS/Response/Warning/TypeCode | 1 | String | Warning type code	    |
| IATA_AirShoppingRS/Response/Warning/URL | 1	| String | Link to an online description of the provided warning. |
| IATA_AirShoppingRS/Response/Warning/WarningID | 1 | String |Unique identifier for this warning instance.|
| IATA_AirShoppingRS/Response/OffersGroup | 1 |  |Offers grouped by carrier|
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers | 1..n |  |Group of offers of one carrier|
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer | 1..n |  |Proposal to sell a specific set of items and services|
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer/OfferID | 1 | String | Offer identifier that identifies an offer across a number of messages|
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer/OwnerCode | 1 | String | Airline code assigned to a carrier. Either ICAO-defined 3-letter code or IATA-defined 2-letter code. |
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer/OfferItem | 1..n |  | Set of services with a price in an offer. |
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer/OfferItem/OfferItemID | 1 | String | OfferItem identifier unique within an Offer. |
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer/OfferItem/Price | 1 |  | Information about the price |
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer/OfferItem/Price/TotalAmount | 1 |  | Total to pay for the OfferItem|
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer/OfferItem/Price/TotalAmount/CurCode | 1 | String | Currency alphabetic code from ISO 4217  |
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer/OfferItem/Price/TotalAmount/Amount | 1 | String |Decimal point value. Ex: "49.50"  |
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer/OfferItem/Price/TaxSummary | 0..n |  | Tax summary information |
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer/OfferItem/Price/TaxSummary/Tax | 1..n |  | Tax information |
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer/OfferItem/Price/TaxSummary/Tax/Amount | 1 |  | Tax amount |
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer/OfferItem/Price/TaxSummary/Tax/Amount/Amount | 1 | String | Decimal point value. Ex: "49.50"  |
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer/OfferItem/Price/TaxSummary/Tax/Amount/CurCode | 1 | String | Currency alphabetic code from ISO 4217  |
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer/OfferItem/Service | 1..n |  |  Instance of a specific flight or Service Definition |
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer/OfferItem/Service/ServiceID | 1 |  |  Service identifier unic in the context of one message |
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer/OfferItem/Service/PaxRefID | 1..n | String | Reference to a Passenger identifier that consumes the service |
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer/OfferItem/Service/ServiceAssociations | 1 |  | References to the details of this Service|
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer/OfferItem/Service/ServiceAssociations/PaxJourneyRefID | 0..n |  | Reference to one Journey in the Datalists |
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer/OfferItem/Service/ServiceAssociations/ServiceDefinitionRef | 0..1 |  | Airline specific definition of a service, excluding flights. |
| IATA_AirShoppingRS/Response/OffersGroup/CarrierOffers/Offer/OfferItem/Service/ServiceAssociations/ServiceDefinitionRef/ServiceDefinitionRefID | 1 |  | Reference to Service Definition ID |









