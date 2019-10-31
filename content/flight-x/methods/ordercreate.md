+++
title = "OrderCreate"
pagetitle = "OrderCreate"
description = "Learn about the OrderCreate method"
icon = "fa-list-alt"
weight = 2
alwaysopen = false
+++

On this page you will learn more about the Flight-X's OrderCreate method 



### Method Goals


This method aims to purchase an Offer obtained in the Airshopping method response.



### Request Format


This method receives a IATA_OrderCreateRQ object with a JSON format as request with one SelectedOffer. **We only allow to book one offer at the same time**. You have to sent a SelectedOffer with its reference to the shoping response (ShoppingResponseRefID) and all the references to its OfferItems. Moreover you have to sent the DataLists with the list of passengers and all the passengers with Individual information as the Surname, Birthdate... Finally, you have to sent the necesary PaymentInfo with the **total amount** of all the offeritems that include the SelectedOffer, and the type of payment. You learn more about the request format in the following sections.



### Response Format


This method returns a IATA_OrderViewRS object with a JSON format. If the operation is succesful you receive a list of booking indetifiers and some details about the OrderItems and services ordered. You learn more about the request format in the following sections.




### Remarks

This method **must** be called **after** the AirShopping method.
You can only book an offer per request.
You have to sent all the OfferItems identifiers received in the request before.
You have to add the amounts of all the offer items and sent the total amount.
You have to sent the same number of passengers and PTC of passenger than the request before. Any change on this have an unexpected result.



### IATA_OrderCreateRQ example



```json
{
    "IATA_OrderCreateRQ": {
        "Party": {
            "Sender": {
                "Aggregator": {
                    "AggregatorID": "TravelGateX"
                }
            }
        },
        "Request": {
            "CreateOrder": {
                "SelectedOffer": [
                    {
                        "ShoppingResponseRefID": "Qm9va2luZ0AxNTcyNTEzMDA4MDQ4LWtuS2JZ*IB#3a75fe47-fbbe-11e9-91cc-f7f2f6b1b354*DE2#op08.tx-08-02-1-59c08a47-37d2-40a7-946f-ef88b55512ea*BA",
                        "OfferRefID": "IBeb0395d7fc804bc8a46dcfdb9120f33cOP-4#IBeb0395d7fc804bc8a46dcfdb9120f33cOP-4",
                        "OwnerCode": "IB",
                        "SelectedOfferItem": [
                            {
                                "OfferItemRefID": "IBeb0395d7fc804bc8a46dcfdb9120f33cOP_01-4#IBeb0395d7fc804bc8a46dcfdb9120f33cOP_01-4",
                                "PaxRefID": [
                                    "PAX_1"
                                ]
                            }
                        ]
                    }
                ]
            },
            "PaymentInfo": [
                {
                    "Amount": {
                        "CurCode": "EUR",
                        "Amount": "503.80"
                    },
                    "TypeCode": "CARD",
                    "PaymentMethod": {
                        "PaymentCard": {
                            "CardBrandCode": "VI",
                            "CardHolderName": "Raghu Carillo Analla",
                            "CardNumber": "4111111111111111",
                            "CardSecurityCode": "111",
                            "ExpirationDate": "0520"
                        }
                    }
                }
            ],
            "DataLists": {
                "PaxList": {
                    "Pax": [
                        {
                            "PaxID": "PAX_1",
                            "PTC": "ADT",
                            "Individual": {
                                "TitleName": "MR",
                                "Surname": "Smith",
                                "GivenName": [
                                    "John"
                                ],
                                "Birthdate": "1962-03-10"
                            }
                        }
                    ]
                }
            }
        }
    }
}
```


### IATA_OrderCreateRQ skeleton



| **Element**	| **Number**	| **Type**	| **Description**		|
| ------------- |---------------|-----------|---------------------- |
| IATA_OrderCreateRQ | 1	    | 	        | Root element		    |
| IATA_OrderCreateRQ/Party | 1	    | 	    | Comercial information about the parties|
| IATA_OrderCreateRQ/Party/Sender | 1	    | 	    | Information about the party sending the message|
| IATA_OrderCreateRQ/Party/Sender/Aggregator | 1	    | 	    | Entity that distribute a Seller request to multiple Airlines and consolidate the several responses in one. |
| IATA_OrderCreateRQ/Party/Sender/Aggregator | 1	    | 	    | Entity that distribute a Seller request to multiple Airlines and consolidate the several responses in one. |
| IATA_OrderCreateRQ/Party/Sender/Aggregator/AggregatorID | 1	    | 	String    | Aggregator identifier |
| IATA_OrderCreateRQ/Request | 1	    |     | OrderCreateRQ useful information.|
| IATA_OrderCreateRQ/Request/DataLists | 1 |  |Lists of definitions for this message|
| IATA_OrderCreateRQ/Request/DataLists/PaxList | 1 |  |Passenger data list definition.|
| IATA_OrderCreateRQ/Request/DataLists/PaxList/Pax | 1..n	    |    | Passenger who wants to travel.|
| IATA_OrderCreateRQ/Request/DataLists/PaxList/Pax/PaxID | 1	    |  String | Identifier of a passenger in the context of one message. | 
| IATA_OrderCreateRQ/Request/DataLists/PaxList/Pax/PTC | 1	    |  Enum | Passenger type. Possible values: **ADT** (Adult), **CHD** (Child), **INF** (Infant) |
| IATA_OrderCreateRQ/Request/DataLists/PaxList/Pax/Individual | 1	    |   | Information of a specific person |
| IATA_OrderCreateRQ/Request/DataLists/PaxList/Pax/Individual/TitleName | 1	    | Enum  | Possible values:  **MR** (Mister), **MRS** (Misses), **CHD** (Child), **INF** (Infant)  |
| IATA_OrderCreateRQ/Request/DataLists/PaxList/Pax/Individual/GivenName | 1..5	    | String  | First name |
| IATA_OrderCreateRQ/Request/DataLists/PaxList/Pax/Individual/Surname | 1	    | String  | Family name of last name |
| IATA_OrderCreateRQ/Request/DataLists/PaxList/Pax/Individual/Birthdate | 1	    | Date  | The date on which a person was born. Format: **yyyy-mm-dd**|
| IATA_OrderCreateRQ/Request/CreateOrder | 1	    | Date  | Order to be created |
| IATA_OrderCreateRQ/Request/CreateOrder/SelectedOffer | 1..n	    |   | Offer seletected by the passenger |
| IATA_OrderCreateRQ/Request/CreateOrder/SelectedOffer/ShoppingResponseRefID | 1	    | String  | Reference to the ShoppingResponseID received in the previous request |
| IATA_OrderCreateRQ/Request/CreateOrder/SelectedOffer/OfferRefID | 1	    | String  | Reference to an offer itendifier returned in the previous request. |
| IATA_OrderCreateRQ/Request/CreateOrder/SelectedOffer/OwnerCode | 1	    | String  | Owner code of this offer returned in the previous request |
| IATA_OrderCreateRQ/Request/CreateOrder/SelectedOffer/SelectedOfferItem | 1..n    |  | OfferItems returned by the SelectedOffer in the previous request |
| IATA_OrderCreateRQ/Request/CreateOrder/SelectedOffer/SelectedOfferItem/OfferItemRefID | 1	    | String | Reference to an OfferItem itendifier returned in the previous request. |
| IATA_OrderCreateRQ/Request/CreateOrder/SelectedOffer/SelectedOfferItem/PaxRefID | 1..n	    | String | Reference to the passengers identifiers |
| IATA_OrderCreateRQ/Request/PaymentInfo | 1..n	    |  | Information about the monetary transaction |
| IATA_OrderCreateRQ/Request/PaymentInfo/Amount | 1..n	    |  | Total amount to be paid |
| IATA_OrderCreateRQ/Request/PaymentInfo/Amount/Amount | 1	    | String | Decimal point value. Ex: "49.50" |
| IATA_OrderCreateRQ/Request/PaymentInfo/Amount/CurCode | 1	    | String | Currency alphabetic code from ISO 4217 |
| IATA_OrderCreateRQ/Request/PaymentInfo/TypeCode | 1	    | Enum | Payment method type. Possible values: **CARD**, **CASH** |
| IATA_OrderCreateRQ/Request/PaymentInfo/PaymentMethod | 0..1	    |  | A form of procedure for the payment, for CASH is not necessary to send this element. |
| IATA_OrderCreateRQ/Request/PaymentInfo/PaymentMethod/PaymentCard | 1	    |  | Information about an electronic payment card. |
| IATA_OrderCreateRQ/Request/PaymentInfo/PaymentMethod/PaymentCard/CardBrandCode | 1	    | String  |  A two-letter code assigned according to IATA Resolution 728. Example: VI for Visa |
| IATA_OrderCreateRQ/Request/PaymentInfo/PaymentMethod/PaymentCard/CardHolderName | 1	    | String  |  Name of credit card holder |
| IATA_OrderCreateRQ/Request/PaymentInfo/PaymentMethod/PaymentCard/CardNumber | 1	    | String  |  The card number indicated on the payment card. |
| IATA_OrderCreateRQ/Request/PaymentInfo/PaymentMethod/PaymentCard/CardSecurityCode | 1	    | String  |  Normally 3-digit number printed in the back of the card. |
| IATA_OrderCreateRQ/Request/PaymentInfo/PaymentMethod/PaymentCard/ExpirationDate | 1	    | String  |  The last month of validity. Format: **MMYY** |



### IATA_OrderViewRS example



```json
{
    "IATA_OrderViewRS": {
        "Error": [],
        "Response": {
            "DataLists": {
                "ServiceDefinitionList": {
                    "ServiceDefinition": [
                        {
                            "Desc": [
                                {
                                    "DescText": "ADT"
                                }
                            ],
                            "Name": "ADT",
                            "ServiceDefinitionID": "ADT"
                        }
                    ]
                },
                "PaxList": {
                    "Pax": [
                        {
                            "PaxID": "PAX_1",
                            "PTC": "ADT",
                            "Individual": {
                                "TitleName": "MR",
                                "Surname": "Smith",
                                "GivenName": [
                                    "John"
                                ],
                                "Birthdate": "1962-03-10"
                            }
                        }
                    ]
                }
            },
            "Warning": [],
            "Order": [
                {
                    "OrderID": "ORDER_H4KRX",
                    "BookingRef": [
                        {
                            "BookingEntity": {
                                "Carrier": {
                                    "AirlineDesigCode": "IB"
                                }
                            },
                            "BookingID": "H4KRX"
                        }
                    ],
                    "OwnerCode": "IB",
                    "OrderItem": [
                        {
                            "Price": {
                                "TotalAmount": {
                                    "CurCode": "EUR",
                                    "Amount": "503.80"
                                },
                                "TaxSummary": [
                                    {
                                        "Tax": [
                                            {
                                                "Amount": {
                                                    "CurCode": "EUR",
                                                    "Amount": "19.8"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            "OrderItemID": "ORDERITEM_H4KRX_0",
                            "Service": [
                                {
                                    "ServiceID": "SERVICE_H4KRX_ADT_0",
                                    "PaxRefID": "PAX_1",
                                    "ServiceAssociations": {
                                        "ServiceDefinitionRef": {
                                            "ServiceDefinitionRefID": "ADT"
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
```



### IATA_OrderViewRS skeleton



| **Element**	| **Number**	| **Type**	| **Description**		|
| ------------- |---------------|-----------|---------------------- |
| IATA_OrderViewRS | 1	    | 	        | Root element		    |
| IATA_OrderViewRS/Error | 0..n	    | 	     | Information about the errors detected processing the request.		    |
| IATA_OrderViewRS/Error/Code | 1	    | String | Code of the error		    |
| IATA_OrderViewRS/Error/DescText | 1	| String | Decription of the error		    |
| IATA_OrderViewRS/Error/LangCode | 1	| String | Language code   |
| IATA_OrderViewRS/Error/OwnerName | 1 | String | The name of the organization owning the error codelist.	    |
| IATA_OrderViewRS/Error/StatusText | 1 | String | Document processing status.	    |
| IATA_OrderViewRS/Error/TagText | 1 | String	| Identifies the tag/XPath which relates to the provided Error.		    |
| IATA_OrderViewRS/Error/TypeCode | 1 | String | Error type code	    |
| IATA_OrderViewRS/Error/URL | 1	| String | Link to an online description of the provided Error. |
| IATA_OrderViewRS/Error/ErrorID | 1 | String |Unique identifier for this error instance.|
| IATA_OrderViewRS/Response | 0..1 |  | OrderView response information|
| IATA_OrderViewRS/Response/DataLists | 1 |  |Lists of definitions for this message|
| IATA_OrderViewRS/Response/DataLists/PaxList | 1 |  |Passenger data list definition.|
| IATA_OrderViewRS/Response/DataLists/PaxList/Pax | 1..n	    |    | Passenger who wants to travel.|
| IATA_OrderViewRS/Response/DataLists/PaxList/Pax/PaxID | 1	    |  String | Identifier of a passenger in the context of one message. | 
| IATA_OrderViewRS/Response/DataLists/PaxList/Pax/PTC | 1	    |  Enum | Passenger type. Possible values: **ADT** (Adult), **CHD** (Child), **INF** (Infant) |
| IATA_OrderViewRS/Response/DataLists/PaxList/Pax/Individual | 1	    |   | Information of a specific person |
| IATA_OrderViewRS/Response/DataLists/PaxList/Pax/Individual/TitleName | 1	    | Enum  | Possible values:  **MR** (Mister), **MRS** (Misses), **CHD** (Child), **INF** (Infant)  |
| IATA_OrderViewRS/Response/DataLists/PaxList/Pax/Individual/GivenName | 1..5	    | String  | First name |
| IATA_OrderViewRS/Response/DataLists/PaxList/Pax/Individual/Surname | 1	    | String  | Family name of last name |
| IATA_OrderViewRS/Response/DataLists/PaxList/Pax/Individual/Birthdate | 1	    | Date  | The date on which a person was born. Format: **yyyy-mm-dd**|
| IATA_OrderViewRS/Response/DataLists/ServiceDefinitionList | 0..1	    |   |  Service Definition data list definition.|
| IATA_OrderViewRS/Response/DataLists/ServiceDefinitionList/ServiceDefinition | 0..n	    |   | Description and characteristics of a non-flight products | 
| IATA_OrderViewRS/Response/DataLists/ServiceDefinitionList/ServiceDefinition/ServiceDefinitionID | 1	    | String  | Service Definition identifier | 
| IATA_OrderViewRS/Response/DataLists/ServiceDefinitionList/ServiceDefinition/Name | 1	    |   | Service name |
| IATA_OrderViewRS/Response/DataLists/ServiceDefinitionList/ServiceDefinition/Desc | 1..n	    |   | Characteristics of the service  |
| IATA_OrderViewRS/Response/DataLists/ServiceDefinitionList/ServiceDefinition/Desc/DescText | 1	    | String   | Text description | 
| IATA_OrderViewRS/Response/Warning | 0..n	    | 	     | Information about the warnings detected processing the request.		    |
| IATA_OrderViewRS/Response/Warning/Code | 1	    | String | Code of the warning		    |
| IATA_OrderViewRS/Response/Warning/DescText | 1	| String | Decription of the warning		    |
| IATA_OrderViewRS/Response/Warning/LangCode | 1	| String | Language code   |
| IATA_OrderViewRS/Response/Warning/OwnerName | 1 | String | The name of the organization owning the warning codelist.	    |
| IATA_OrderViewRS/Response/Warning/StatusText | 1 | String | Document processing status.	    |
| IATA_OrderViewRS/Response/Warning/TagText | 1 | String	| Identifies the tag/XPath which relates to the provided warning.		    |
| IATA_OrderViewRS/Response/Warning/TypeCode | 1 | String | Warning type code	    |
| IATA_OrderViewRS/Response/Warning/URL | 1	| String | Link to an online description of the provided warning. |
| IATA_OrderViewRS/Response/Warning/WarningID | 1 | String |Unique identifier for this warning instance.|
| IATA_OrderViewRS/Response/Order| 1..n |  |Agreement of one party with another to receive products and services.|
| IATA_OrderViewRS/Response/Order/OrderID| 1 | String | Order identifier that identifies a specific Order across several messages.|
| IATA_OrderViewRS/Response/Order/OwnerCode| 1 | String | Airline code assigned to a carrier. Either ICAO-defined 3-letter code or IATA-defined 2-letter code.|
| IATA_OrderViewRS/Response/Order/BookingRef| 1..n | String | |
| IATA_OrderViewRS/Response/Order/BookingRef/BookingID| 1 | String | Booking reference Identifier. |
| IATA_OrderViewRS/Response/Order/BookingRef/BookingEntity| 1 |  | Organization assigning the booking information. |
| IATA_OrderViewRS/Response/Order/BookingRef/BookingEntity/Carrier| 1 |  | Comercial carrier information |
| IATA_OrderViewRS/Response/Order/BookingRef/BookingEntity/Carrier/AirlineDesigCode| 1 | String | Airline code assigned to a carrier. Either ICAO-defined 3-letter code or IATA-defined 2-letter code.|
| IATA_OrderViewRS/Response/Order/OrderItem | 1..n |  | An individually priced item within an Order, made up of one or more Services. |
| IATA_OrderViewRS/Response/Order/OrderItem/OrderItemID | 1 | String | OrderItem identifier unique within an Order. |
| IATA_OrderViewRS/Response/Order/OrderItem/Price | 1 |  | Information about the price |
| IATA_OrderViewRS/Response/Order/OrderItem/Price/TotalAmount | 1 |  | Total to pay for the OrderItem|
| IATA_OrderViewRS/Response/Order/OrderItem/Price/TotalAmount/CurCode | 1 | String | Currency alphabetic code from ISO 4217  |
| IATA_OrderViewRS/Response/Order/OrderItem/Price/TotalAmount/Amount | 1 | String |Decimal point value. Ex: "49.50"  |
| IATA_OrderViewRS/Response/Order/OrderItem/Price/TaxSummary | 0..n |  | Tax summary information |
| IATA_OrderViewRS/Response/Order/OrderItem/Price/TaxSummary/Tax | 1..n |  | Tax information |
| IATA_OrderViewRS/Response/Order/OrderItem/Price/TaxSummary/Tax/Amount | 1 |  | Tax amount |
| IIATA_OrderViewRS/Response/Order/OrderItem/Price/TaxSummary/Tax/Amount/Amount | 1 | String | Decimal point value. Ex: "49.50"  |
| IATA_OrderViewRS/Response/Order/OrderItem/Price/TaxSummary/Tax/Amount/CurCode | 1 | String | Currency alphabetic code from ISO 4217  |
| IATA_OrderViewRS/Response/Order/OrderItem/Service | 1..n |  |  Instance of a specific flight or Service Definition |
| IATA_OrderViewRS/Response/Order/OrderItem/Service/ServiceID | 1 |  |  Service identifier unic in the context of one message |
| IATA_OrderViewRS/Response/Order/OrderItem/Service/PaxRefID | 1 | String | Reference to one Passenger identifier that consumes the service |
| IATA_OrderViewRS/Response/Order/OrderItem/Service/ServiceAssociations | 0..1 |  | References to the details of this Service|
| IATA_OrderViewRS/Response/Order/OrderItem/Service/ServiceAssociations/ServiceDefinitionRef | 1 |  | Airline specific definition of a product or service  |
| IATA_OrderViewRS/Response/Order/OrderItem/Service/ServiceAssociations/ServiceDefinitionRef/ServiceDefinitionRefID | 1 |  | Reference to a Service Definition identifier |
