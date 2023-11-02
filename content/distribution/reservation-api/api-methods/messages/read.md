+++
title = "Read"
pagetitle = "Read"
description = "Read complete reservations information"
icon="fa-sticky-note"
weight = 2
alwaysopen = false
isDirectory = false
+++

# Description

This method allows us to retreive complete information about reservations.

</br>

## Considerations

* The filters **_tgxLocators_**, **_providerLocators_** and **_clientsLocators_** are mutually exclusive: we can retrieve reservations using only one of
them.

* Only can be retrieved 50 reservations at a time: if more are requested then an error it is generated.

</br>

## Read Request (HTTP body)

</br>

| **Element**				| **Cardinality** | **Data Type**	| **Description**					|
| ------------------------------------- | ---------- | -------- | ----------------------------------------------------- |
| access		| 1  |	node  | Acces information: <ul><li>It will be validated to grant acces to the API and to the operation.</li><li>If there is any problem then an error will be returned.</li></ul>
| access/accessToken 		| 1  |	string  | Key to acces to the API.
| access/user        		| 1  |	string  | User.
| access/password    		| 1  |	string  | Password related to the user.
| tgxLocators    		    |0..N|list(string)| TGX locators to search for.
| providerLocators    		|0..N|list(string)| Provider locators to search for.
| clientLocators    		|0..N|list(string)| Agency/Client locators to search for.
| correlationIDs    		|0..N|list(string)| CorrelationIDs to search for.
| isTest                    | 0,1| boolean  | Test mode:<ul><li>If set to **_true_** the operation will be executed in "*test mode*". This means that the response will include dummy information (no real reservations information).</li><li>If not set to **_true_** or not given then the operation will execute as normally.</li></ul> *In order to test the API, we still need to give a real access information. Note that even in test mode all operations will execute its own request validations, so the requests must be well formed.*

</br>

### **Read request structure**

</br>


~~~json
{
    "access" : {
        "accessToken" : "string",
        "user" : "string",
        "password" : "string"
    },
    "tgxLocators" : [
        "string"
    ],
    "providerLocators" : [
        "string"
    ],
    "clientLocators" : [
        "string"
    ],
    "isTest" : true
}
~~~

</br>

### **Read request example**: search for TGX locator

</br>

~~~json
{
    "access" : {
        "accessToken" : "xxxx",
        "user" : "xxxx",
        "password" : "xxxx"
    },
    "tgxLocators" : [
        "123"
    ]
}
~~~


</br>

## Read Response (HTTP body)

</br>

| **Element**				| **Cardinality** | **Data Type**	| **Description**					|
| ------------------------------------- | ---------- | -------- | ----------------------------------------------------- |
| reservationReadRS 		| 1  |	list  | Root node with the list of reservations.
| locators		            | 1  |	node  | This node contains the different locators of the reservation.
| locators/tgx      		| 1  | string | Travelgate locator.
| locators/client    		| 1  | string | Client locator.
| locators/provider    	    | 0,1| string | Provider locator. If the reservation has no provider locator then this node will be null.
| bookingDate    	        | 1  |dateTime| Booking date.
| checkinDate    	        | 1  | date   | Check-in date.
| checkoutDate    	        | 1  | date   | Check-out date.
| cancellationDate    	    | 0,1|dateTime| If the reservation has been canceled this will be the cancelation date. If the reservation is not canceled this node will be **_null_**.
| status            		| 1  | string | Reservation status. Check reseravation status codes [here](../reference/reservation-status-codes.md).
| summaryStatus            	| 1  | string | Reservation summary status. Check reseravation status codes [here](../reference/reservation-status-codes.md).
| mainGuestName      		| 1  | string | Reservation's main guest name.
| hotelCode      		    | 1  | string | Code of the hotel of the reservation.
| hotelName      		    | 1  | string | Name of the hotel of the reservation.
| clientCode      		    | 1  | string | Code of the agency/client.
| clientName      		    | 1  | string | Name of the agency/client.
| providerCode      		| 1  | string | Code of the provider of the reservation.
| providerName      		| 1  | string | Name of the provider of the reservation.
| cityCode           		| 0,1| string | Code of the city corresponding to the hotel.
| cityName           		| 0,1| string | Name of the city corresponding to the hotel.
| chainCode           		| 0,1| string | Code of the hotel's chain.
| chainName           		| 0,1| string | Name of the hotel's chain.
| countryCode               | 0,1| string | Country code corresponding to the hotel.
| mealPlanCode           	| 0,1| string | Meal plan code for the reservation.
| mealPlanName           	| 0,1| string | Meal plan name for the reservation.
| market                   	| 0,1| string | Market corresponding to the reservation.
| sellingPrice      		| 1  |[price node](#price-node)| Selling price information.
| quoteSellingPrice      	| 1  |[price node](#price-node)| Selling price at the quote/pre-booking step.
| providerPrice      		| 1  |[price node](#price-node)| Provider price information.
| quoteProviderPrice        | 1  |[price node](#price-node)| Provider price at the quote/pre-booking step.
| rooms                     |1..N| list   | List of rooms of the reservation.
| rooms/code                | 1  | string | Room code.
| rooms/description         | 1  | string | Room description.
| rooms/pax                 | 1  | list   | List of pax of the room.
| rooms/pax/name            | 1  | string | Name of the pax.
| rooms/pax/surname         | 1  | string | Surname of the pax.
| rooms/pax/age             | 1  | string | Age of the pax.
| quoteNonRefundable        | 1  | boolean | Indicates if the reservation was non refundable (**_true_**) or if it was refundable (**_false_**) on the quote/pre-booking step:<ul><li>If the reservation was refundable then we can have a list of penalties related to the cancellation.</li><li>If the reservation was non refundable then we will not have a list of penalties (the list node will be **_null_**).</li></ul></br>*This information can have changed on the booking step.*
| quoteCancelPenalties      |0..N|[list CP node](#cp-(cancel-policies)-node)| List of cancel penalties on the quote/pre-booking step. Only if the reservation was refundable (nonRefundable = **_false_**).
| officeCode               	| 0,1| string | If returned then this will be the code of the office.
| officeName               	| 0,1| string | If returned then this will be the name of the office.
| accessCodeHX              | 1  | string | Code of the access used in HotelX layer to access the provider.
| hotelProvCodeHX           | 1  | string | Code of the hotel on the provider system (used by HotelX).
| correlationID           	| 0,1| string | Correlation ID.
| priceBreakdown           	| 0,1| node   | Information about how selling price has been calculated.
| priceBreakdown/comissionMarkupType | 1 | enum | Type of calculation:<ul><li>**C** → Commission</li><li>**M** → Markup</li></ul>
| priceBreakdown/totalComission | 1 | decimal |Total Commission/Markup applied to obtain the selling price. It is calculated as the sumatory of:<ul><li>**_baseCommission_**</li><li>**_baseRappel_**</li><li>**_rulesCommission_**</li><li>**_officeCommission_**</li></ul></br>*There are some distribution rules that can affect this calculation.*
| priceBreakdown/baseComission | 1  | decimal | Base commission/markup (if any).
| priceBreakdown/baseRappel    | 1  | decimal | Base rappel (if any).
| priceBreakdown/rulesComission| 1  | decimal | Commission/Markup obtained from applying the "Selling Pricing Rules".
| priceBreakdown/officeComission| 1  | decimal | Commission/markup of the office (if any).
| priceBreakdown/tax           | 1  | decimal | Tax (if any). It is applied apart from the **_totalCommission_**.
| priceBreakdown/currencyExchange | 0,1| node   | If there has been a currency change then this field will give information about the exchange. </br></br>*Currency conversion is done before aplying any pricing calculation.*
| priceBreakdown/currencyExchange/fromCurrency | 1 | string | Purchasing currency (ISO "Alpha-3").
| priceBreakdown/currencyExchange/toCurrency | 1 | string | Selling currency (ISO "Alpha-3").
| priceBreakdown/currencyExchange/exchange | 1 | decimal | Exchange used on the conversion. *New currency amount = original currency amount * exchange*.
| paymentInfo | 0,1 | node | Information about payment (includes VCC payment info).
| paymentInfo/paymentTypeProvider | 1 | enum | Type of payment obtained from the final provider:<ul><li>LaterPay</li><li>MerchantPay</li><li>MixedPay</li><li>CardBookingPay</li><li>CardCheckInPay</li></ul>
| paymentInfo/paymentTypeClient | 1 | enum | Type of payment returned to the client:<ul><li>LaterPay</li><li>MerchantPay</li><li>MixedPay</li><li>CardBookingPay</li><li>CardCheckInPay</li></ul>
| paymentInfo/vccInfo | 0,1 | string | Textual information about VCC payment.
| paymentInfo/vccCardType | 0,1 | string | VCC card type.
| paymentInfo/vccSupplierCode | 0,1 | string | VCC supplier code.
| paymentInfo/vccTransactionId | 0,1 | string | Identifier of VCC transaction.
| reservationError | 0,1 | string | If the reservation is not on a well finished status (reservation or cancellation) then we can have some textual information about the error that caused that not well finished status.
| error		                | 0,1|	node  | If there has been any error executing the operation we can receive this node with information about that error. </br></br>*We can also receive errors with the http status.*
| error/code      		    | 1  | string | Error code. Check error codes [here](../code-list/error-codes.md).
| error/description 	    | 1  | string | Error description. Check error descriptions [here](../code-list/error-codes.md).

</br>

### Price node

</br>

| **Element**				| **Cardinality** | **Data Type**	| **Description**					|
| ------------------------------------- | ---------- | -------- | ----------------------------------------------------- |
| amount		| 1  |	decimal  | Price amount.
| currency		| 1  |	string   | Price currency.
| binding		| 1  |	boolean  | Indicates if the price is binding.
| commission	| 1  |	decimal  | Commission related to the price.

</br>

### CP (Cancel Policies) node

</br>

| **Element**				| **Cardinality** | **Data Type**	| **Description**					|
| ------------------------------------- | ---------- | -------- | ----------------------------------------------------- |
| penaltyType	| 1  |	enum     | Type of penalty:<ul><li>Nights</li><li>Percentage</li><li>Amount</li></ul>
| paymentType	| 1  |	enum     | Type of payment:<ul><li>LaterPay</li><li>MerchantPay</li><li>MixedPay</li><li>CardBookingPay</li><li>CardCheckInPay</li></ul>
| hoursBefore	| 1  |	int      | Number of hour before the check-in, in which this penalty is applied.
| currency		| 1  |	string   | Currency of the penalty
| value     	| 1  |	decimal  | Value of the pentalty: will depend on the type of penalty.

</br>

### **Read response structure**

</br>

~~~json
{
    "reservationReadRS" : [
        {
            "locators" : {
                "tgx" : "string",
                "client" : "string",
                "provider" : "string"
            },
            "bookingDate" : "string",
            "checkinDate" : "string",
            "checkoutDate" : "string",
            "cancellationDate" : "string",
            "status" : "string",
            "mainGuestName" : "string",
            "hotelCode" : "string",
            "hotelName" : "string",
            "clientCode" : "string",
            "clientName" : "string",
            "providerCode" : "string",
            "providerName" : "string",
            "cityCode" : "string",
            "cityName" : "string",
            "chainCode" : "string",
            "chainName" : "string",
            "countryCode" : "string",
            "mealPlanCode" : "string",
            "mealPlanName" : "string",
            "market" : "string",
            "sellingPrice" : {
                "currency" : "string",
                "amount" : 0,
                "binding" : true,
                "commission" : 0
            },
            "providerPrice" : {
                "currency" : "string",
                "amount" : 0,
                "binding" : true,
                "commission" : 0
            },
            "quoteSellingPrice" : {
                "currency" : "string",
                "amount" : 0,
                "binding" : true,
                "commission" : 0
            },
            "quoteProviderPrice" : {
                "currency" : "string",
                "amount" : 0,
                "binding" : true,
                "commission" : 0
            },
            "rooms" : [
                {
                    "code" : "string",
                    "description" : "string",
                    "pax" : [
                        {
                            "name" : "string",
                            "surname" : "string",
                            "age" : "string"
                        }
                    ]
                }
            ],
            "quoteNonRefundable" : true,
            "quoteCancelPenalties" : [
                {
                    "penaltyType" : "string",
                    "paymentType" : "string",
                    "hoursBefore" : "string",
                    "currency" : "string",
                    "value" : 0
                }
            ]
        }
    ],
    "error" : {
        "code" : "string",
        "description" : "string"
    }
}
~~~

</br>

### **Read response:** dummy response (test mode)

</br>

~~~json
{
    "reservationReadRS" : [
        {
            "locators" : {
                "tgx" : "1",
                "client" : "111-222",
                "provider" : "12312313"
            },
            "bookingDate" : "2018-07-11 8:50:48",
            "checkinDate" : "2018-08-14",
            "checkoutDate" : "2018-08-21",
            "status" : "OK",
            "mainGuestName" : "Smith, Martin",
            "hotelCode" : "h1",
            "hotelName" : "Hotel 1 Name",
            "clientCode" : "c1",
            "clientName" : "Client 1 Name",
            "providerCode" : "p1",
            "providerName" : "Provider 1 Name",
            "cityCode" : "Hotel 1 City Code",
            "cityName" : "Hotel 1 City Name",
            "chainCode" : "Hotel 1 Chain Code",
            "chainName" : "Hotel 1 Chain Name",
            "countryCode" : "ES",
            "mealPlanCode" : "MP",
            "mealPlanName" : "Half board",
            "market" : "ES",
            "sellingPrice" : {
                "currency" : "EUR",
                "amount" : 234.5,
                "binding" : false,
                "commission" : 0
            },
            "providerPrice" : {
                "currency" : "EUR",
                "amount" : 204.99,
                "binding" : false,
                "commission" : 0
            },
            "quoteSellingPrice" : {
                "currency" : "EUR",
                "amount" : 234.5,
                "binding" : false,
                "commission" : 0
            },
            "quoteProviderPrice" : {
                "currency" : "EUR",
                "amount" : 204.99,
                "binding" : false,
                "commission" : 0
            },
            "rooms" : [
                {
                    "code" : "R14",
                    "description" : "test room 1",
                    "pax" : [
                        {
                            "name" : "Martin",
                            "surname" : "Smith",
                            "age" : "30"
                        },
                        {
                            "name" : "Susan",
                            "surname" : "Smith",
                            "age" : "30"
                        }
                    ]
                },
                {
                    "code" : "R32",
                    "description" : "test room 2",
                    "pax" : [
                        {
                            "name" : "Rob",
                            "surname" : "Conors",
                            "age" : "30"
                        },
                        {
                            "name" : "Sara",
                            "surname" : "Conors",
                            "age" : "30"
                        }
                    ]
                }
            ],
            "quoteNonRefundable" : false,
            "quoteCancelPenalties" : [
                {
                    "penaltyType" : "Amount",
                    "paymentType" : "MerchantPay",
                    "hoursBefore" : "24",
                    "currency" : "EUR",
                    "value" : 25.5
                }
            ]
        },
        {
            "locators" : {
                "tgx" : "2",
                "client" : "222-333",
                "provider" : "456456456"
            },
            "bookingDate" : "2018-08-21 10:11:17",
            "checkinDate" : "2018-12-01",
            "checkoutDate" : "2018-12-07",
            "cancellationDate" : "2018-08-26 11:01:47",
            "status" : "CN",
            "mainGuestName" : "Redford, Charles",
            "hotelCode" : "h2",
            "hotelName" : "Hotel 2 Name",
            "clientCode" : "c2",
            "clientName" : "Client 2 Name",
            "providerCode" : "p2",
            "providerName" : "Provider 2 Name",
            "cityCode" : "Hotel 2 City Code",
            "cityName" : "Hotel 2 City Name",
            "chainCode" : "Hotel 2 Chain Code",
            "chainName" : "Hotel 2 Chain Name",
            "countryCode" : "ES",
            "mealPlanCode" : "MP",
            "mealPlanName" : "Half board",
            "market" : "ES",
            "sellingPrice" : {
                "currency" : "EUR",
                "amount" : 234.5,
                "binding" : false,
                "commission" : 0
            },
            "providerPrice" : {
                "currency" : "EUR",
                "amount" : 204.99,
                "binding" : false,
                "commission" : 0
            },
            "quoteSellingPrice" : {
                "currency" : "EUR",
                "amount" : 234.5,
                "binding" : false,
                "commission" : 0
            },
            "quoteProviderPrice" : {
                "currency" : "EUR",
                "amount" : 204.99,
                "binding" : false,
                "commission" : 0
            },
            "rooms" : [
                {
                    "code" : "Rd45",
                    "description" : "test room 2-b",
                    "pax" : [
                        {
                            "name" : "Charles",
                            "surname" : "Redford",
                            "age" : "40"
                        }
                    ]
                }
            ],
            "quoteNonRefundable" : true
        },
        {
            "locators" : {
                "tgx" : "3",
                "client" : "444-555",
                "provider" : "789-987-789"
            },
            "bookingDate" : "2018-08-09 18:00:00",
            "checkinDate" : "2019-01-26",
            "checkoutDate" : "2019-01-27",
            "status" : "OK",
            "mainGuestName" : "Clancy, Tom",
            "hotelCode" : "h3",
            "hotelName" : "Hotel 3 Name",
            "clientCode" : "c3",
            "clientName" : "Client 3 Name",
            "providerCode" : "p3",
            "providerName" : "Provider 3 Name",
            "cityCode" : "Hotel 3 City Code",
            "cityName" : "Hotel 3 City Name",
            "chainCode" : "Hotel 3 Chain Code",
            "chainName" : "Hotel 3 Chain Name",
            "countryCode" : "IT",
            "mealPlanCode" : "HD",
            "mealPlanName" : "Bed & breakfast",
            "market" : "UK",
            "sellingPrice" : {
                "currency" : "EUR",
                "amount" : 234.5,
                "binding" : false,
                "commission" : 0
            },
            "providerPrice" : {
                "currency" : "EUR",
                "amount" : 204.99,
                "binding" : false,
                "commission" : 0
            },
            "quoteSellingPrice" : {
                "currency" : "EUR",
                "amount" : 234.5,
                "binding" : false,
                "commission" : 0
            },
            "quoteProviderPrice" : {
                "currency" : "EUR",
                "amount" : 204.99,
                "binding" : false,
                "commission" : 0
            },
            "rooms" : [
                {
                    "code" : "R14",
                    "description" : "test room 3-c",
                    "pax" : [
                        {
                            "name" : "Tom",
                            "surname" : "Clancy",
                            "age" : "35"
                        },
                        {
                            "name" : "Ingrid",
                            "surname" : "Clancy",
                            "age" : "38"
                        }
                    ]
                }
            ],
            "quoteNonRefundable" : false,
            "quoteCancelPenalties" : [
                {
                    "penaltyType" : "Amount",
                    "paymentType" : "MerchantPay",
                    "hoursBefore" : "48",
                    "currency" : "EUR",
                    "value" : 54.75
                },
                {
                    "penaltyType" : "Amount",
                    "paymentType" : "MerchantPay",
                    "hoursBefore" : "24",
                    "currency" : "EUR",
                    "value" : 25.5
                }
            ]
        },
        {
            "locators" : {
                "tgx" : "4",
                "client" : "555-666",
                "provider" : "888-999-777"
            },
            "bookingDate" : "2018-08-09 18:00:00",
            "checkinDate" : "2019-01-26",
            "checkoutDate" : "2019-01-27",
            "status" : "ERROR",
            "mainGuestName" : "Fisher, Sam",
            "hotelCode" : "h4",
            "clientCode" : "c4",
            "rooms" : [
            ],
            "quoteNonRefundable" : false
        },
        {
            "locators" : {
                "provider" : "1010-2020-3030"
            },
            "status" : "NOTFOUND",
            "quoteNonRefundable" : false
        }
    ]
}
~~~