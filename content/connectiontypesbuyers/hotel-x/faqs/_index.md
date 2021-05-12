+++
title = "FAQs"
pagetitle = "Hotel-X Frequendly Asked Questions"
description = "Do you have specific questions about HotelX? Check out the FAQs"
icon = "fa-question"
weight = 8
alwaysopen = false
isDirectory = false
+++ 


# General

**Where can I find object explanations/definitions?**

You can find it on our [`Schema`](https://api.travelgatex.com/) 

**Is the timeout I've set in the settings, the time out in which travelgate will close the connection with us if it's exceeded?**

No, setting's Ttimeout is the timeout in milliseconds that will be applied to the connection with seller/sellers/supplier/s. If more than one supplier is requested, timeout will be applied to all suppliers and cut the connection with those suppliers that exceed this timeout. Travelgate will not close the connection with the client if this timeout is exceeded.

**Which are the languages allowed in HotelX?**

The new aggregator allows every language, it will depend on each supplier.

**In aggregator mode, is it possible to set a time out for each provider?**

Bear in mind that timeout is the timeout in milliseconds that will be applied to the connection with seller/sellers/supplier/s. If more than one supplier is requested, timeout will be applied to all suppliers and cut the connection with those suppliers that exceed this timeout. Travelgate will not close the connection with the client if this timeout is exceeded.

No, the time out will be applied to all providers, using the parameter setting: timeout.

**Is it possible to see the whole list of providers and to look at their hotel databases and prices somewhere?**

[`Here`](https://docsend.com/view/mv4zqyr) you will find the list of the sellers already connected to our HUB. In case you want to look to their databases and prices, you should contact directly with the supplier.

**How can I receive the names of the countries?**

The response of the HotelX Query contains `location.country` in ISO standard format.

**Which payment type options are available for each supplier?**

Each supplier supports/works with different payment types (remember that TravelgateX supports `Merchant`, `Card Booking`, `Card Checkin` and `Direct`), so the ones you receive will be the ones you have contracted /agreed with the supplier.

**Can you please let us know why should we use Deltaprice?**

Input delta price, indicates the price variation permitted by the client. An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue (price is lower or equal to the price showed in valuation). This field is implemented if it’s native to the supplier or if another Search/Quote request needs to be done in Book. In case the supplier blocks the option in Quote, reservation will be done automatically in Book mutation.
You can set delta price by:
* Amount
* Percentage
* Apply both (amount and percentage)
You can find this information in our [`Schema`](https://api.travelgatex.com/)

**On a per-supplier basis, can we can tell if a Surcharge is a tax or not?**

HotelX Api cannot indicate if a surcharge is a tax or not

**Can I request to HotelX a specific response structure?**

Yes, you can personalize the response structure by changing the query or mutation schema. But, our recommendation is to keep the native schema, at least in Search step, so that performance is not affected.

**What is the function of an accessCode?**

Every time you activate a supplier, you receive an access code. This access code is used to differentiate between suppliers and also to filter between the same supplier's different credentials and configurations. This allows you, for instance, to diffentiate between B2B or B2C requests, or search availability only for certain suppliers.

**Do I have access to all the hotels in the test environment?**

No, we use a test supplier (Hoteltest), so there is a limited number of hotels in the database to be used.

**Which timeout should I send in each step?**

Bear in mind that timeout is the timeout in milliseconds that will be applied to the connection with seller/sellers/supplier/s. If more than one supplier is requested, timeout will be applied to all suppliers and cut the connection with those suppliers that exceed this timeout. Travelgate will not close the connection with the client if this timeout is exceeded.

Our system allows:
* A maximum of 25000ms in Search.
* A maximum of 180000ms in Quote.
* A maximum of 180000ms in Book.
Our recommendation is to test which timeout fits your needs better, taking into account the number of hotels requested and the supplier.

**How is the response time of the different providers managed in the aggregator mode?**

HotelX will return the information from all the suppliers at the same time, once all the responses have been obtained by them. As for the requests that have timed out, they will be signaled by a warning in the response.

**Are there any restrictions to the client’s nationality?**

It depends on the supplier.

**Does the client’s nationality affect the price? - For instance, same Search criteria with different client nationality**

Yes, nationality and market might affect the price of the option, depending on the supplier.

**How can we differentiate a child from an infant? What is the age range of each of them?**

Each supplier has their own restrictions, so the age range for children or infants will depend on the definition of each supplier.

**Please advise us on the procedure for Certification**

All the details regarding the Certification Process are explained in the Welcome Pack we sent you.
Basically, you have to perform the three cases asked in the Welcome Pack and raise a certification ticket on our Customer Care Service Desk (attaching the files).
You can also find more information on the certification process within our [`documentation site`](/hotel-x/howtos/certification_process/) 

**Now I only have access to HOTELTEST, can I activate a new supplier?**

While in the development process and until our Certification Process is passed, you will only have access to HOTELTEST supplier.

**Can we define our own context for 2 or more test suppliers? This will help us to test how the requests will work with our own context.**

Yes, you can create your own context for HOTELTEST and TTHOTTEST. You will need to upload the mapping files according to our documentation and use your own context when making the requests: 
https://docs.travelgatex.com/hotel-x/plugins/mapping/

**What is the difference between hotelCode and hotelCodeSupplier?**

Normaly both should coincide as we do not have our own hotel codes. But sometimes, there are suppliers that return the same hotel code for different properties. In those cases we concatenate the destination code with the hotel code in order to make the code unique.

Being that said, hotelCode will be the one returned through our API (concatenated if needed) and hotelCodeSupplier will be the native code of the supplier.

*You should always map the hotelCode code*

# Authorization

**After connecting one supplier, I would like to integrate more suppliers 
Those new suppliers would have the same api-key? And the client?**

Yes, apikey and client will always be the same as those are your "TGX credential". 

# Search

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

**Does the option id structure changes between suppliers?**

Yes, each supplier is different and so the information passed in the id structure.

**In case I would like to receive a specific rate, would it be possible?**

Yes, you could filter the response by introducing the tag [`rateRules`](/hotel-x/reference/inputobjects/raterulesfilterinput/) in your filter.

**How many hotels code are allowed to be requested at the same time?**

We recommend a maximum of 200 hotels, the new aggregator will split them for each supplier into different batches in order to request all the hotels. Please take note: The current formula and rate limit are subject to change.

**Why there are so many fields with null value in the Search response?**

The amount of null values returned through our API calls will depend on the amount of information we receive from the suppliers. For instance, imagine that you request the following fields in Search query:
```json
{
	rooms {
          occupancyRefId
          code
          description
          refundable
          units
          roomPrice {
            price {
              currency
              binding
              net
              gross
              exchange {
                currency
                rate
              }
        
            }
          }
          beds {
            type
            description
            count
            shared
          }
          rateP
}
```
In this case, the supplier has been able to return all the information excep bed descriptions:

```json
"rooms": [
							{
								"occupancyRefId": 1,
								"code": "1",
								"description": "Standard",
								"refundable": false,
								"units": 999,
								"roomPrice": {
									"price": {
										"currency": "EUR",
										"binding": false,
										"net": 150,
										"gross": 150,
										"exchange": {
											"currency": "EUR",
											"rate": 1
										}
									}
								},
								"beds": [
									{
										"type": "double",
										"description": **null**,
										"count": 2,
										"shared": false
									}
								]
```

**Can I receive Daily-prices in Search Response?**

It will depend if the supplier offers the information. In case the information is returned by the supplier, you will find it through the Roomprice string–>PriceBreakdown.

**Which are the possible filters in the Search Request?**

Right now, you can search by hotel code and by destination:

* Hotel code
* Destination 

**Does HotelX have any restrictions on the number of hotel codes to be introduced in the hotel search criteria?**

We do not have a limit in the number of hotels per query. Our API splits the number of hotels requested to each supplier, according to the supplier’s specific characteristics.

**Is it necessary to include the currency tag in your Search Request?**

The currency tag is always mandatory. You have two options:
* To send it in the request whenever you run a Search
* If you do not include any currency, then the settings by default currency configuration will be used

**Should the transaction currency be the same as the room price currency?**

Yes, currency will remain consistent throughout the entire Booking flow, including cancellation policies.

**What does it happen if I request availability with a currency that the supplier doesn´t accept?**

In these cases, there are two possible scennarios:

* Exchange rates can be applied using a [`currency conversion plugin`](/hotel-x/plugins/converter/) (this plugin contains the exchange rates previously loaded by client rules)
* Not applying any exchange rate. In this case, you will receive the supplier´s currency - some suppliers accept the currency in the request and others will return their currency, depending on your account as client with them.

**What happens if the supplier doesn't support the currency requested in Search? Is it not returned?**

In this case, two scenarios are possible: the first one, the supplier returns an error caused by the currency not being supported by them, or the second one, the supplier returns the currency they have set up on their end for your credentials.

**How can I request a specific destination in Search?**

In order to perform a request by destination you should introduce our [`Search by destination`](/hotel-x/plugins/mapping/) process plugin. 

**Is there any way to sort and select the number of options returned by the supplier?**

Yes, by introducing the “businessRulesType” and “optionsQuota” tags in Search settings, you will be able to filter by the cheaper option and the number of options returned.
You can visit our Schema for detailed information.

# Quote

**Is there any possibility to obtain the RoomCodes in the Quote step?**

As you can only request quotation for one option of the search step, there is no need for passing the RoomCodes in Quote. You can retrieve this information in Search step in the Rooms node.

**Is there any possibility to obtain the hotelCode in the Quote step?**

The hotelCode comes within the id from the search step and it is also returned in the optionRefId.
Note that id and optionRefId might vary between suppliers and so the information within it.

# Book

**Do I have to introduce card details when performing Book?**

It will depend on the type of payment associated with the option you have selected, and therefore on the requirements of the provider.
Please note that the payment is not managed by TravelgateX, so that you will have to implement a payment gateway on your side. The card details are needed in all options except `Merchant`.
The Payment type tag is returned in the Search response, so do not forget to introduce it in the query body.
More information in our [`Schema`](https://api.travelgatex.com/)

**Every time I am performing a reservation in test environment I am receiving an status ON_REQUEST and holder name "test", why?**

Note that some suppliers always return a ON_REQUEST status on their test environment and when it is a test environment we always modify holder and pax names to "test".

**I'm receiving `The number of rooms doesn't match with option's number of rooms` error on the book step, how do I define the number of rooms?**

You will have to use the `occupancyRefId` returned at Search step

**When booking, can the optionRefId be a hotelOptionSearch Id? Or does it always have to be the quoteId?**

No, you should always use the optionRefId from the Quote query.

**I am trying to book one hotel but in response we are getting price detail only, it’s not showing booking status. So how we come to know whether booking successful or not?**

When performing the book step, make sure that you request the “status” field so you receive it in the response.

**In the Book step, what should I introduce in the clientReference tag?**

You should introduce the locator that the reservation is going to have in your system.

**I am trying to perform a Book,everything seems correct, but I am receiving a confirmation error. What it could be?**

You can try to change the client reference for a new one.
There are some suppliers that do not allow to perform a Book with a client reference that has been used before.

# Cancel

**Is it possible to perform a cancellation as a query to just retrieve the cancellation costs, but not to cancel the booked item itself?**

No, but you can retrieve the cancellation policies where this information is included. You can check the booking information (cancel policies included) with the [`HotelBooking`](/travelgatex/reference/objects/hotelbooking) query.

**How are cancellation costs calculated and displayed?**

There are three ways to calculate cancellation costs, depending on the provider. The field value will have the amount associated to each cancellation type:
- Per nights: indicates the amount of nights to be penalized.
- Percentage: indicates the percentage of the total booking. The field value will have possible values between 0 and 100.
- Import: indicates the amount to be paid.
Bear in mind, that a booking may have more than one penalty type associated, depending on the amount of hours before entrance date that you perform the cancellation.

**When Cancel Penalties are returned by percentage type, is it form 0 to 100 or from 0 to 1?**

The percentage returned is from 0 to 100, see example below:
```json
{
	"cancelPenalties": [
	{
		"hoursBefore": 48
		"penaltyType": "PERCENT"
		"currency": "EUR"
		"value": 100
	}

```

**Cancel Policy hoursBefore checkin date - What timezone is the checkIn date?**

Normally UTC time is used, but if the provider responds with hotel timezone we add 24 hours.
You will find further information [`here`](/hotel-x/reference/objects/cancelpenalty/)

# Content

**How can I obtain the supplier’s mealplans?**

You can download the full list of mealplans from the provider by using the board query:
https://docs.travelgatex.com/hotel-x/concepts/content/#boards

**I am not receiving hotel images so please suggest how can I get them.**

Hotel images are returned in the Hotels Query.
Please check our content section for further information: `link`

**I would like to perform the HotelList and DestinationList, but I am not finding GraphQL examples.**

In the Welcome Pack mail you will find attached our `Usecases` and Insomnia environment packs with some query and mutation examples.
For further information, feel free to access our [`content section`](/hotel-x/concepts/content/)

**Where do I find the available services at the hotel?**

You can find this information in the hotel list query under Amenities.

**Are we going to receive different room, category, board, destinations and hotel codes for each supplier?**

Yes, each supplier has his own codes.

**Is it common for suppliers to not provide max occupancies in either the search or room list endpoints? It would be great to have this info for our customers.**

Returning max occupancies information will depend on whether the supplier provides it or not. In case the supplier is able to provide this information, it will be displayed in Hotel List query. 

**Is it possible to know the possible surcharges descriptions?**

We do not have a list of the surcharge descriptions that can be returned by our suppliers.
We suggest to contact directly with the supplier regarding this matter.

**Is static content fetching always sequential?**

Yes, it is always sequential. 

**How to Manage HotelX Content**

HotelX allows two types of Queries:

* **Search to a HotelCode level**: in order to receive the information of a specific HotelCode(s), you should introduce the HotelCode(s) of your query:

```json
{
	"criteria": {
		"access": "",
		"maxSize": 200,
		"hotelCodes": [
			"A159", "B357", "C568"
		]
	},
	"language": [
		"en"
	],
	"token": ""
}
```

* **Search the complete HotelList from a supplier’s access**: in order to receive the complete hotel list from a supplier’s access, you should introduce the number of hotels you want to receive in the response of the query. Since the hotel list includes a large amount of hotels, it is divided into several batches, each one of a different number of hotels. In this case, the minimum size you can request is 100, and the max. is 10000. *In order paginate each batch, you should use the token id returned in the Hotel List response.*


```json
{
	"criteria": {
		"access": "",
		"maxSize": 200,
		"hotelCodes": [
			""
		]
	},
	"language": [
		"en"
	],
	"token": ""
}
```
[More info on HotelX content.](/hotel-x/concepts/content/)

**Could I know all amenities information in your system? I mean all code and text.**

Amenities information might change depending on the supplier and the hotel (check supplier Hotel List). HotelX does not keep any data as we return the information directly from each supplier.

**And what about the static content for all the accesses you create? Are they updated by default? Do you need to update them regularly?**

If the access is not flagged as test, it is set automatically as "isSchedulerActive" and it will start downloading the following day

# Mapping

**To be able to upload the mapping, should we be using the HotelMapX plugin, and is there a document that we can refer to on the plugin and how the request should be sent?**

Not via API. Uploading to FTP as described [`here`](/hotel-x/plugins/mapping/) 

**It is possible to use GIATA codes?**

Our platform allows to return GIATA codes in our Hotels Query response. First of all, you wil need to provide us your GIATA credentials in order to set up your Apikey. After that, you will be able to obtain these codes through our system and use them through our [`hotel map`](/hotel-x/plugins/mapping/) process. 

**When I am performing the HotelXBoardQueryInput call I am receiving a lot of board codes, but it is not specifying to which hotel it corresponds. How can I map it?**

All our content calls return the static information supported by the supplier. It is not a per hotel content, but the total amount of room codes, board codes, destination codes and category codes that may be returned by the supplier.

# CancelPenalty deadline

**How it is calculated the CancelPolicy deadline and why it is different from what the supplier sent?**

The deadline of the CancelPolicy is the final date(UTC) in which no Cancellation fees will apply. After this date and until check in, Cancellation fees would apply to the booking.

In the case the Seller informs this date in their response, we’ll simply return it in our deadline field in the response. However, some Sellers don’t return this date in their response, so our logic is to calculate it is as follows: 

We get the information from [`cancelPenalty`](/hotel-x/reference/objects/cancelpenalty/)
* _Hours before_ - number of hours left (before checkin date) for the client to cancel without incurring penalties. This information is passed by the Seller. 
* _Checkin date_ - we get this date as UTC

Worse case scenario: there are countries with +14 UTC and others -12 UTC, so the worse case scenario would be that a person in UTC+14 performs a booking in a property located in UTC-12.

In this scenario, we apply to the deadline date result the following logic: 

    deadline = checkin - safetyMargin - HoursBefore

The safety margin in set to 14h. We do not have information about properties timezone, so we assume that checkin is UTC at 00:00:00Z

***Example***

_Checkin_ = 25 May 2021  
_HoursBefore returned by the provider_ = 48h  
_SafetyMargin_ = 14h  

*****Calculated deadline*****

    25/05/2021T00:00:00Z - hoursBefore (48) - safetyMargin(14) = 22/05/2021T10:00:00Z


















