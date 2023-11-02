+++
title = "Search"
pagetitle = "Search"
description = "Search basic reservation information "
icon="fa-search"
weight = 1
alwaysopen = false
isDirectory = false
+++

# Description

This method allows us to search for reservations mainly based on date filters, retrieving basic information of each matching reservation.

</br>

## Considerations

* We have to set a **_bookingDate_** filter or a **_checkinDate_** filter but not both at the same time (or an error will be returned).

* For the **_bookingDate_** filter the dates range can't be more than one week.

* For the **_checkinDate_** filter the dates range can't be more than one week.

</br>

## Search Request (HTTP body)

</br>

| **Element**				| **Cardinality** | **Data Type**	| **Description**					|
| ------------------------------------- | ---------- | -------- | ----------------------------------------------------- |
| access		| 1  |	node  | Acces information: <ul><li>It will be validated to grant acces to the API and to the operation.</li><li>If there is any problem then an error will be returned.</li></ul>
| access/accessToken 		| 1  |	string  | Key to acces to the API.
| access/user        		| 1  |	string  | User.
| access/password    		| 1  |	string  | Password related to the user.
| checkinDate       		| 0,1|  node    | Check-in filter. This node is set if we want to filter by check-in date.
| checkinDate/from  		| 1  |	date    | Check-in date range filter: from (inclusive).
| checkinDate/to     		| 1  |	date    | Check-in date range filter: to (inclusive).
| bookingDate        		| 0,1|	node    | Booking filter. This node is set if we want to filter by booking date. (inclusive).
| bookingDate/from     		| 1  |	dateTime| Booking date range filter: from (inclusive).
| bookingDate/to     		| 1  |	dateTime| Booking date range filter: to (inclusive).
| hotels            		|0..N|list(string)| Hotels filter:<ul><li>If we just want the reservations of concret hotels then we can set this list with the codes of those hotels.</li><li>If not given or if it is empty then it will not be applied the filter by hotel code.</li></ul>
| providers            		|0..N|list(string)| Providers filter:<ul><li>If we just want the reservations of a specific set of providers then we can set this list with the codes of those providers.</li><li>If not given or if it is empty then the filter by provider code will not be applied.</li></ul>
| clients            		|0..N|list(string)| Clients filter:<ul><li>If we just want the reservations of a specific set of clients then we can set this list with the codes of those clients.</li><li>If not given or if it is empty then the filter by client code will not be applied.</li></ul>
| includeCancellations      | 0,1| boolean  | Cancelations inclusion filter:<ul><li>If set to **_true_** then cancelled reservations that match the filters will be included in the response.</li><li>If not set to **_true_** or not given then only not cancelled bookings will be returned.</li></ul>
| onlyCancellations         | 0,1| boolean  | Cancellations filter:<ul><li>If set to **_true_** then only the bookings that have been cancelled in the specific time interval indicated will be returned.</li><li>If not set to **_true_**, then (depending on the value of the **_includeCancellations_** tag) only the reservations booked between the time interval indicated will be returned.</li></ul>
| onlyErrors                | 0,1| boolean  | Only Errors filter:<ul><li>If set to **_true_** then only the bookings that have a status indicating some type of error will be returned (bookings with status **_OK_** or **_CN_** will not be returned). Also, if this filter is applied, both **_includeCancellations_** and **_onlyCancellations_** will be ingnored.</li><li>If not set to **_true_**, then (depending on the value of the *includeCancellations* tag) only the reservations booked between the time interval indicated will be returned.</li></ul>
| isTest                    | 0,1| boolean  | Test mode:<ul><li>If set to **_true_** the operation will be executed in *test mode*. This means that the response will include dummy information (no real reservations information.</li><li>If not set to **_true_** or not given then the operation will execute as normally.</li></ul> *In order to test the API, we still need to gie a real access information. Note that even in test mode all operations will execute its own request validations, so the requests must be well formed.*

</br>

### **Search request structure**

</br>

~~~json
{
    "access" : {
        "accessToken" : "string",
        "user" : "string",
        "password" : "string"
    },
    "checkinDate" : {
        "from" : "string",
        "to" : "string"
    },
    "bookingDate" : {
        "from" : "string",
        "to" : "string"
    },
    "hotels" : [
        "string"
    ],
    "includeCancellations" : false,
    "onlyCancellations" : true,
    "isTest" : true
}
~~~

</br>

### **Search Request example**: bookingDate search for concrete hotels and including cancellations

</br>

~~~json
{
    "access" : {
        "accessToken" : "xxxx",
        "user" : "xxxx",
        "password" : "xxxx"
    },
    "bookingDate" : {
        "from" : "2018-07-18",
        "to" : "2018-07-20"
    },
    "hotels" : [
        "1234",
        "4534"
    ],
    "includeCancellations" : true
}
~~~

</br>

### **Search Request example**: checkinDate search for any hotel and excluding cancellations

</br>

~~~json
{
    "access" : {
        "accessToken" : "xxxx",
        "user" : "xxxx",
        "password" : "xxxx"
    },
    "checkinDate" : {
        "from" : "2018-07-18",
        "to" : "2018-07-20"
    }
}
~~~

</br>

## Search Response (HTTP body)

</br>

| **Element**				| **Cardinality** |    **Data Type**  	| **Description**					|
| ------------------------------------- | ---------- | ----------- | ----------------------------------------------------- |
| reservationSearchRS		| 1  |	list  | Root node with the list of reservations.
| locators		            | 1  |	node  | This node contains the different locators of the reservation.
| locators/tgx      		| 1  | string | Travelgate locator.
| locators/client    		| 1  | string | Client locator.
| locators/provider    	    | 0,1| string | Provider locator. If the reservation has no provider locator then this node will be **_null_**.
| bookingDate    	        | 1  |dateTime| Booking date.
| checkinDate    	        | 1  | date   | Check-in date.
| checkoutDate    	        | 1  | date   | Check-out date.
| cancellationDate    	    | 0,1|dateTime| If the reservation has been canceled this will be the cancelation date. If the reservation is not canceled this node will be **_null_**.
| status            		| 1  | string | Reservation status. Check reseravation status codes [here](../reference/reservation-status-codes.md).
| summaryStatus            	| 1  | string | Reservation summary status. Check reseravation status codes [here](../reference/reservation-status-codes.md).
| mainGuestName      		| 1  | string | Reservation's main guest name.
| hotelCode      		    | 1  | string | Code of the hotel of the reservation.
| clientCode      		    | 1  | string | Code of the agency/client.
| providerCode      		| 1  | string | Code of the provider of the reservation.
| sellingPrice      		| 1  |[price node](#price-node)| Selling price information.
| quoteSellingPrice      	| 1  |[price node](#price-node)| Selling price at the quote/pre-booking step.
| providerPrice      		| 1  |[price node](#price-node)| Provider price information.
| quoteProviderPrice        | 1  |[price node](#price-node)| Provider price at the quote/pre-booking step.
| officeCode               	| 0,1| string | If returned then this will be the code of the office.
| accessCodeHX              | 1  | string | Code of the access used in [Hotel-X](./../../../../../hotel-x) layer to access the provider.
| hotelProvCodeHX           | 1  | string | Code of the hotel on the provider system (used by [Hotel-X](./../../../../../hotel-x)).
| correlationID           	| 0,1| string | Correlation ID.
| reservationError          | 0,1| string | If the reservation is not on a well finished status (reservation or cancellation) then we can have some textual information about the error that caused that not well finished status.
| reservationWarnings      	| 0,1|list string| If returned then it contains a list of tgx locators of reservations that have had problems registering on the main system and that have been stored on an auxiliary system. This information is indepent from the searching dates (will be given for any dates range).
| cancellationWarnings      | 0,1|[price node](#price-node)| If returned then it contains a list of tgx locators of cancellations that have had problems registering on the main system and that have been stored on an auxiliary system. This information is indepent from the searching dates (will be given for any dates range).
| error		                | 0,1|	node  | If there has been any error executing the operation we can receive this node with information about that error. </br></br>*We can also receive errors with the http status.*
| error/code      		    | 1  | string | Error code. Check error codes [here](./../../code-list/error-codes).
| error/description 	    | 1  | string | Error description. Check error descriptions [here](./../../code-list/error-codes).

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

### **Search response structure**

</br>

~~~json
{
    "reservationSearchRS" : [
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
            "clientCode" : "string",
            "providerCode" : "string",
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
            }
        }
    ],
    "error" : {
        "code" : "string",
        "description" : "string"
    }
}
~~~

</br>

### **Search response**: dummy response (test mode)

</br>

~~~json
{
    "reservationSearchRS" : [
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
            "clientCode" : "c1",
            "providerCode" : "p1",
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
            }
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
            "clientCode" : "c2",
            "providerCode" : "p2",
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
            }
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
            "clientCode" : "c3",
            "providerCode" : "p3",
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
            }
        },
        {
            "locators" : {
                "tgx" : "45",
                "client" : "232-555",
                "provider" : "283-212-334"
            },
            "status" : "ERROR"
        }
    ]
}
~~~
