+++
title = "Overview"
pagetitle = "Plugins Workflow"
description = "Plugins Overview. What they are, when they get executed and how to execute them."
icon = "fa-info-circle"
weight = 1
alwaysopen = false
+++

### Introduction

[HotelX](/hotel-x/) _Plugins_ are a separate Go application that get compiled into the main application and run natively in our servers that add or modify specific functionalities. Plugins are specified at the request level, or be configured by default.
### Flows

[HotelX](/hotel-x/) _query_ or _mutation_ determine what _flow_ is executed. _Plugins_ can be executed in different `Queries` or `Mutations`:

<!-- * [search](/hotel-x/concepts/booking-flow#search)
* [quote](/hotel-x/concepts/booking-flow#quote)
* [hotelBook](/hotel-x/concepts/booking-flow#book)
* [hotelCancel](/hotel-x/concepts/management-flow#cancel) -->
* Search
* Quote
* Book
* Booking
* Cancel

### Steps

_Step_ is the minium container where _plugins_ are executed **sequentially**.

| Step | When it's executed |
| --- | --- |
| _Request_ | _After_ `Client` requests message to [HotelX](/hotel-x/).|  
| _Request Access_ | _Before_ send request to `Supplier` using `Access` and _after_ `Accesses` has been calculated.|
| _Response Option_ |_After_ `Supplier` responds  message. For every option returned.|
| _Response Access_ |_After_ all `Access` options has been responded.|
| _Response_ | _Before_ [HotelX](/hotel-x/) responds message to to `Client`.|


### Plugin Types {#plugintypes}

Plugin types supported by [HotelX](/hotel-x/):

* [PRE_STEP]: First execution on every _step_.
* [HOTEL_MAP](../mapping): Hotel mapping codes.
* [BOARD_MAP](../mapping): Board mapping codes.
* [ROOM_MAP](../mapping): Room mapping codes.
* [PROMOTION_MAP](../mapping): Promotion mapping codes.
* [AMENITY_MAP](../mapping): Amenity mapping codes.
* [CURRENCY_CONVERSION](../converter): Currency rate conversion.
* [COMMISSION](../net-price): Calculate the net price. 
* [AGGREGATION](../aggregation): Aggregate multiple `supplier` options.
* [MARKETS_GROUP](../markets_groups): Groups the Search result by markets that share the same product.
* [POST_STEP]: Last execution on every _step_.

### Plugin Names {##pluginnames}
* [hotel_map](../mapping): Hotel mapping codes.
* [board_mapX](../mapping): Board mapping codes.
* [room_mapX](../mapping): Room mapping codes.
* [promotion_mapX](../mapping): Promotion mapping codes.
* [amenity_mapX](../mapping): Amenity mapping codes.
* [currency_exchange](../converter): Currency rate conversion.
* [commission](../net-price): Calculate the net price.
* [cheapest_price](../aggregation): Aggregate multiple `supplier` options.
* [search_by_destination](../search_by_destination): Enables search query to request per destinations by converting destination codes to hotel codes.
* [add_parameterX](../add_parameterx): Allows Add Parameter to the access created for a supplier.
* [blacklist](../black-list): Filter out specific hotels from the Search query.
* [booking_detail_persistence](../booking_persistence): Allows to store and avoid duplicated bookings.
* [market_groupX](../markets_groups): Groups the Search result by markets that share the same product.
* [preference](../preference): To give preference to the options that match the preference rules.
* [safety_margin](../safety_margin): Discards those options that have a commission higher than expected.
* [virtual_credit_card](../vcc): Allows creating and cancelling virtual credit cards and use it booking-flow process.

### Plugin Context Execution

Once _message_ hits [HotelX](/hotel-x/), it flows over different _flows_ and _steps_. That's why  _plugins_ are executed in different _contexts_.

_Context_ allows:

* Read objects involved in current _query_ and/or _mutations_.
* Read objects available in all [HotelX](/hotel-x/) operations.

### Plugin Step Execution

[HotelX](/hotel-x/) determines the order and the plugins executed for each _step_. Notice that not all the [plugins available](#pluginnames) in HotelX have a [plugin type](#plugintypes). The following table shows the plugins with [plugin types](#plugintypes) and also the rest of the plugins with their corresponding [plugin name](#pluginnames).


| | **search** | **quote** | **hotelBook** | **hotelCancel** | **hotelBooking** |
| --- | --- | --- | --- | --- | --- |
| _Request_ | [PRE_STEP]<br>[HOTEL_MAP](../mapping)<br>[POST_STEP]|[PRE_STEP]<br>[POST_STEP]|[PRE_STEP]<br>[booking_detail_persistence](../booking_persistence)<br>[genvcc](../vcc)<br>[POST_STEP]|[PRE_STEP] <br>[POST_STEP]|[PRE_STEP] <br>[POST_STEP]|[PRE_STEP] <br>[POST_STEP]|
| _Request Access_ | [PRE_STEP]<br>[add_parameterX](../add_parameterx)<br>[MARKETS_GROUP](../markets_groups)<br>[blacklist](../black-list)<br>[POST_STEP] |[PRE_STEP]<br>[add_parameterX](../add_parameterx)<br>[POST_STEP]|[PRE_STEP]<br>[add_parameterX](../add_parameterx)<br>[POST_STEP]|[PRE_STEP]<br>[add_parameterX](../add_parameterx)<br>[POST_STEP]|[PRE_STEP]<br>[add_parameterX](../add_parameterx)<br>[POST_STEP]|
| _Response Option_ |[PRE_STEP]<br>[BOARD_MAP](../mapping)<br>[ROOM_MAP](../mapping)<br>[AMENITY_MAP](../mapping)<br>[PROMOTION_MAP](../mapping)<br>[CURRENCY_CONVERSION](../converter)<br>[COMMISSION](../net-price)<br>[safety_margin](../safety_margin)<br>[POST_STEP]| [PRE_STEP][CURRENCY_CONVERSION](../converter)<br>[COMMISSION](../net-price)<br>[POST_STEP]|[PRE_STEP]<br>[CURRENCY_CONVERSION](../converter)<br>[COMMISSION](../net-price)<br>[POST_STEP] |[PRE_STEP]<br>[CURRENCY_CONVERSION](../converter)<br>[COMMISSION](../net-price)<br>[POST_STEP]|[PRE_STEP]<br>[CURRENCY_CONVERSION](../converter)<br>[COMMISSION](../net-price)<br>[POST_STEP]|
| _Response_ |[PRE_STEP]<br>[AGGREGATION](../aggregation)<br>[preference](../preference)[POST_STEP]|[PRE_STEP] <br>[POST_STEP]|[PRE_STEP] <br>[POST_STEP]|[PRE_STEP] <br>[POST_STEP]|[PRE_STEP] <br>[POST_STEP]|



### Ftp Endpoint

ftp://ftp.xmltravelgate.com

{{% alert theme="info" %}}
You will receive access credentials to the FTP server with your Onboarding Welcome Pack
{{% /alert %}}

### Directory Format

#### Root path

The structure of the directory should be in the below format, all files should be inside this directory

/F[Folder code]\_[Unique code]/HotelX\_[Unique code]/ 

* F[Folder code]\_[Unique code] 

    * **Folder code**: corresponds to the folder number. 
    * **Unique code**: corresponds to the folder unique code in our system.

* HotelX\_[Unique code] 

    * **Unique code**: corresponds to the HotelX unique code in our system.

#### Example

* `/F**0**\_**178**/HotelX\_**179**`

### Updating ftp data {#update_ftp_data}
We have two options:

1. Reprocessing the same data by renaming the file and just removing "_processed".<br>
Example: **SourceContext_DestinationContext_entity_map_processed.csv --> example.csv**
2. Changing the data by deleting the processed file and uploading a new one with new information.
   
### Deleting ftp data
Uploading a new file only with headers (no information).
```csv
Code Source, Code Destination
```

### Entities processed types: {#entityprocessed}

#### Sequential {#sequential}
Type of processing sequentially, the first rule that coincides will be the one applied.
#### Supplier {#supplier}
Rules applied or indexed at the supplier level.
#### Access {#access}
Rules applied or indexed at the access level.
#### Hotel {#hotel}
The key to indexing is of the hotel type, we hope that the reference is by a hotel code where the type will be given by the context.
#### Destination {#destination}
Idem hotel.

We have different combinations values from entities values this table show this combinations:

|**entity**| chainCodes| destinationCodes| hotelCodes |
|---------|---|---|---|
|chain| Yes | No | No |
|hotel| No | No | Yes |
|destination| No | Yes | No |

## How to execute a plugin

A _plugin_ execution can be specified in any request’s HotelSettingsInput and it must specify in which step it should be executed. The plugin type and name are mandatory in order to identify a plugin instance.

```json
		"plugins": [
			{
				"step": "PluginStepType",
				"pluginsType": {
					"name": "plugin name (its unique)",
					"type": "PluginType",
                    "parameters": []
				}
			}
		]
```