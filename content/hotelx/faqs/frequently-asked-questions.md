+++
title = "FAQs"
pagetitle = "HotelX Frequendly Asked Questions"
description = "Do you have any specific questions about HotelX? Check out the FAQs"
icon = "fa-question-circle"
weight = 1
alwaysopen = false
tags = ["faq"]
+++

## General
**Where can I find object explanations/definitions?**
You can find it on our [`Schema`](https://api.travelgatex.com/) 

## Languages allowed
**Which are the languages allowed in HotelX?**
The new aggregator allows every language, it will depend on each supplier.


## List of suppliers available 
**Is it possible to see the whole list of suppliers and to look at their hotel databases and prices somewhere?**
[`Here`](https://docsend.com/view/zms247w) you will find the list of the sellers already connected to our platform. In case you want to look at their databases and prices, you should contact them directly.

## Naming
**Can I request to HotelX a specific response structure?**
Yes, you can personalize the response structure by changing the query or mutation schema. But, our recommendation is to keep the native schema, at least in Search step, so that performance is not affected.

## Response time
**Which timeout should I send in each step?**
Our system allows:
* A maximum of 25000ms in Search
* A maximum of 180000ms in Quote
* A maximum of 180000ms in Book
Our recommendation is to test which timeout fits your needs better, taking into account the number of hotels requested and the supplier.


**How is the response time of the different providers managed in the aggregator mode?**
HotelX will return the information from all the suppliers at the same time, once all the responses have been obtained by them. As for the requests that have timed out, they will be signaled by a warning in the response.

## Client Nationality
**Are there any restrictions to the client’s nationality?**

It depends on the supplier.


**Does the client’s nationality affect the price? - For instance, same Search criteria with different client nationality**

Yes, nationality and market might affect the price of the option, depending on the supplier.

## Age Range of Children - Infants
**How can we differentiate a child from an infant? What is the age range of each of them?**

Each supplier has their own restrictions, so the age range for children or infants will depend on the definition of each supplier.

## GIATA codes
**It is possible to use GIATA codes?**

Our platform allows to return GIATA codes in our Hotels Query response. First of all, you wil need to provide us your GIATA credentials in order to set up your Apikey. After that, you will be able to obtain these codes through our system and use them through our [`hotel map`](/hotelx/plugins/mapping/) process. 


## Certification process
**Please advise us on the procedure for Certification**
All the details regarding the Certification Process are explained in the Welcome Pack we sent you.
Basically, you have to perform the three cases asked in the Welcome Pack and raise a certification ticket on our Customer Care Service Desk (attaching the files).
You can also find more information on the certification process within our [`documentation site`](/hotelx/howtos/certification_process/) 

## Supplier HOTELTEST
**Now I only have access to HOTELTEST, can I activate a new supplier?**
While in the development process and until our Certification Process is passed, you will only have access to HOTELTEST supplier.

**Do I have access to all the hotels in the test environment?**
No, we use a test supplier, so there is a limited number of hotels in the database to be used.

## Search
**How to structure a multi-room in HotelX**

In order to avoid errors in your Query Search of more than 1 room, please, find below a sample structure of a multi-room:

```json
"occupancies":[  
   {  
      "paxes":[  
         {  
            "age":30
         },
         {  
            "age":30
         }
      ]
   },
   {  
      "paxes":[  
         {  
            "age":30
         },
         {  
            "age":30
         }
      ]
   },
   {  
      "paxes":[  
         {  
            "age":30
         },
         {  
            "age":30
         }
      ]
   }
],
```


**Does the optionId change every time I run the same query (with the same supplier)?**

Yes, every time that you perform a query the optionId will change.

## Search request filters
**What is the function of an accessCode?**

Every time you activate a supplier, you receive an access code. This access code is used to differentiate between suppliers and also to filter between the same supplier's different credentials and configurations. This allows you, for instance, to diffentiate between B2B or B2C requests, or search availability only for certain suppliers.

**In case I would like to receive a specific rate, would it be possible?**
Yes, you could filter the response by introducing the tag [`rateRules`](/hotelx/reference/inputobjects/raterulesfilterinput/) in your filter.

**Which are the possible filters in the Search Request?**

Right now, you can search by hotel code and by destination:

* Hotel code
* Destination 

**Does HotelX have any restrictions on the number of hotel codes to be introduced in the hotel search criteria?**

We do not have a limit in the number of hotels per query. Our API splits the number of hotels requested to each supplier, according to the supplier’s specific characteristics.

**What happens if the supplier doesn't support the currency requested? Is it not returned?**

In this case, two scenarios are possible: the first one, the supplier returns an error caused by the currency not being supported by them, or the second one, the supplier returns the currency they have set up on their end for your credentials.

**How can I request a specific destination?**

In order to perform a request by destination you should introduce our [`Search by destination`](/hotelx/plugins/mapping/) process plugin. 


## Surchages
**On a per-supplier basis, can we can tell if a Surcharge is a tax or not?**

HotelX Api cannot indicate if a surcharge is a tax or not


## Daily-prices
**Can I receive Daily-prices in Search Response?**

It will depend if the supplier offers the information. In case the information is returned by the supplier, you will find it through the Roomprice string–>PriceBreakdown.


## Currency in Search Requests
**Is it necessary to include the currency tag in your Search Request?**

The currency tag is always mandatory. You have two options:
* To send it in the request whenever you run a Search
* If you do not include any currency, then the settings by default currency configuration will be used


**What does it happen if I request availability with a currency that the supplier doesn´t accept?**

In these cases, there are two possible scennarios:

* Exchange rates can be applied using a [`currency conversion plugin`](/hotelx/plugins/converter/) (this plugin contains the exchange rates previously loaded by client rules)
* Not applying any exchange rate. In this case, you will receive the supplier´s currency - some suppliers accept the currency in the request and others will return their currency, depending on your account as client with them.

## Cancellation costs
**Is it possible to perform a cancellation as a query to just retrieve the cancellation costs, but not to cancel the booked item itself?**

No, but you can retrieve the cancellation policies where this information is included. You can check the booking information (cancel policies included) with the [`HotelBooking`](/travelgatex/reference/objects/hotelbooking) query.

**Cancel Policy hoursBefore checkin date - What timezone is the checkIn date?**
Normally UTC time is used, but if the provider responds with hotel timezone we add 24 hours.
You will find further information [`here`](/hotelx/reference/objects/cancelpenalty/)


## Book
**I'm receiving `The number of rooms doesn't match with option's number of rooms` error on the book step, how do I define the number of rooms?**

You will have to use the `occupancyRefId` returned at Search step

**When booking, can the optionRefId be a hotelOptionSearch Id? Or does it always have to be the quoteId?**

No, you should always use the optionRefId from the Quote query.

**I am trying to perform a Book,everything seems correct, but I am receiving a confirmation error. What it could be?**

You can try to change the client reference for a new one.
There are some suppliers that do not allow to perform a Book with a client reference that has been used before.


## DeltaPrice
**Can you please let us know why should we use Deltaprice?**

Input delta price, indicates the price variation permitted by the client. An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue (price is lower or equal to the price showed in valuation). This field is implemented if it’s native to the supplier or if another Search/Quote request needs to be done in Book. In case the supplier blocks the option in Quote, reservation will be done automatically in Book mutation.
You can set delta price by:
* Amount
* Percentage
* Apply both (amount and percentage)
You can find this information in our [`Schema`](https://api.travelgatex.com/)

## Card Details
**Which payment type options are available for each supplier?**

Each supplier supports/works with different payment types (remember that TravelgateX supports `Merchant`, `Card Booking`, `Card Checkin` and `Direct`), so the ones you receive will be the ones you have contracted /agreed with the supplier.

**Do I have to introduce card details when performing Book?**
It will depend on the type of payment associated with the option you have selected, and therefore on the requirements of the provider.
Please note that the payment is not managed by TravelgateX, so that you will have to implement a payment gateway on your side. The card details are needed in all options except `Merchant`.
The Payment type tag is returned in the Search response, so do not forget to introduce it in the query body.
More information in our [`Schema`](https://api.travelgatex.com/)




## Content
**How to Manage HotelX Content**

HotelX allows two types of Queries:

* **Search to a HotelCode level**: in order to receive the information of a specific HotelCode(s), you should introduce the HotelCode(s) of your query:

```json
{
  "criteria": {
    "access": "yourAccess",
    "hotelCodes":["A159", "B357", "C568"]
  }
}
```

* **Search the complete HotelList from a supplier’s access**: in order to receive the complete hotel list from a supplier’s access, you should introduce the number of hotels you want to receive in the response of the query. Since the hotel list includes a large amount of hotels, it is divided into several batches, each one of a different number of hotels. In this case, the minimum size you can request is 100, and the max. is 10000.


```json
{
  "criteria": {
    "access": "yourAccess",
    "maxSize": 500
  }
}
```
[More info on HotelX content.](/hotelx/concepts/content/)

## Country names
**How can I receive the names of the countries?**

The response of the HotelX Query contains `location.country` in ISO standard format.

## Amenities and images
**I am not receiving hotel images so please suggest how can I get them.**

Hotel images are returned in the Hotels Query.
Please check our content section for further information: `link`

**I would like to perform the HotelList and DestinationList, but I am not finding GraphQL examples.**

In the Welcome Pack mail you will find attached our `Usecases` and Insomnia environment packs with some query and mutation examples.
For further information, feel free to access our [`content section`](/hotelx/concepts/content/)

**Could I know all amenities information in your system? I mean all code and text.**

Amenities information might change depending on the supplier and the hotel. HotelX does not keep any data as we return the information directly from each supplier.
 
## Mapping process 
**To be able to upload the mapping, should we be using the HotelMapX plugin, and is there a document that we can refer to on the plugin and how the request should be sent?**

Not via API. Uploading to FTP as described [`here`](/hotelx/plugins/mapping/) 




