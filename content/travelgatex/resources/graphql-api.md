+++
title = "GraphQL Schema Changelog"
description = "GraphQL API Changelog"
weight = 2
alwaysopen = false
hidden = false
+++
## 2018-03-08

⚠️  Input field `DestinationsCodes` was removed from input object type `HotelXDestinationListInput`

⚠️  Field `boardData` was removed from object type `Destination`

⚠️  Input field `ParameterInput.key` changed type from `ID!` to `String!`

⚠️  Field `DestinationData.code` changed type from `String!` to `ID!`

⚠️  `WebSearchResult` was removed

✅  Enum value `NON_REFUNDABLE` was added to enum `RateRulesType`

✅  Enum value `NORMAL` was added to enum `RateRulesType`

✅  Input field `destinationCodes` was added to input object type `HotelXDestinationListInput`

✅  Field `token` was added to object type `DestinationConnection`

✅  Field `destinationData` was added to object type `Destination`

✅  Field `destinationSearcher` was added to object type `HotelXQuery`

✅  Field `destinations` was added to object type `HotelXQuery`

✅  Type `HotelXDestinationSearcherInput` was added

✅  Type `DestinationSearchResult` was added

## 2018-03-05

⚠️  Input field `AccessInput.parameters` changed type from `String` to `[ParameterInput]`

⚠️  Input field `name` was added to input object type `AccessInput`

⚠️  Input field `descriptiveInfoLimit` was removed from input object type `AccessInput`

⚠️  Input field `serviceAPI` was removed from input object type `SupplierFilter`

⚠️  Input field `isActive` was removed from input object type `SupplierFilter`

⚠️  Field `updatedAt` was removed from object type `Parameter`

⚠️  Field `createdAt` was removed from object type `Parameter`

⚠️  Field `error` was removed from object type `Parameter`

⚠️  Field `parameterData` was removed from object type `Parameter`

⚠️  Field `code` was removed from object type `Parameter`

⚠️  `Parameter` object type no longer implements `Node` interface

⚠️  Field `SupplierData.accesses` changed type from `AccessConnection!` to `AccessConnection`

⚠️  Field `legacy` was removed from object type `SupplierData`

⚠️  Argument `after: String` was removed from field `AccessData.parameters`

⚠️  Argument `before: String` was removed from field `AccessData.parameters`

⚠️  Argument `Last: Int` was removed from field `AccessData.parameters`

⚠️  Argument `first: Int` was removed from field `AccessData.parameters`

⚠️  Field `AccessData.parameters` changed type from `ParameterConnection` to `[Parameter]`

⚠️  Field `descriptiveInfoLimit` was removed from object type `AccessData`

⚠️  Input field `ParameterInput.key` changed type from `String!` to `ID!`

⚠️  Input field `filter` was removed from input object type `HotelXHotelListInput`

⚠️  Field `Destination.code` changed type from `String!` to `ID!`

⚠️  Field `texts` was removed from object type `Destination`

⚠️  Field `available` was removed from object type `Destination`

⚠️  Field `Location.closestDestination` changed type from `Destination!` to `DestinationData!`

⚠️  Field `HotelConnection.token` changed type from `String!` to `String`

⚠️  `SupplierInput` was removed

⚠️  `ProviderInput` was removed

⚠️  `LegacyDataInput` was removed

⚠️  `ParameterData` was removed

⚠️  `ParameterEdge` was removed

⚠️  `ParameterConnection` was removed

⚠️  `LegacyData` was removed

✅  `Destination` object implements `Node` interface

✅  Input field `isTest` was added to input object type `AccessInput`

✅  Field `updateClient` was added to object type `AdminMutation`

✅  Field `createClient` was added to object type `AdminMutation`

✅  Description `` on type `Parameter` has changed to `Parameters for additional information for the supplier's configuration.`

✅  Field `value` was added to object type `Parameter`

✅  Field `key` was added to object type `Parameter`

✅  Description `XTG Platform API implementation` on type `Provider` has changed to `Temporary type to use only during SQL server's lifetime`

✅  Field `SupplierData.accesses` description changed from `Accesses in a Supplier` to `Accesses where the supplier is referenced`

✅  Field `SupplierData.supplierGroup` description changed from `SupplierGroup` to `SupplierGroup Internal Supplier grouping`

✅  Field `isTest` was added to object type `AccessData`

✅  Field `name` was added to object type `AccessData`

✅  Field `clients` was added to object type `AdminQuery`

✅  Description `Parameters for additional information for the supplier's configuration.` on type `ParameterInput` has changed to `Parameters Input.`

✅  Input field `ParameterInput.value` description changed from `Contains the parameter values.` to `Contains the parameter values.

This information is mandatory.`

✅  Input field `ParameterInput.key` description changed from `Contains the keyword/Id to identify a parameter.` to `Contains the keyword/Id to identify a parameter.

This information is mandatory.`

✅  Description `Url's Input` on type `UrlsInput` has changed to `Urls Input`

✅  Input field `destinationCodes` was added to input object type `HotelXHotelListInput`

✅  Description `Information about destinantion` on type `Destination` has changed to `Destination Type`

✅  Field `Destination.code` description changed from `Destination Code` to `Destination ID`

✅  Field `updatedAt` was added to object type `Destination`

✅  Field `createdAt` was added to object type `Destination`

✅  Field `error` was added to object type `Destination`

✅  Field `boardData` was added to object type `Destination`

✅  Type `HotelXDestinationListInput` was added

✅  Type `WebSearchResult` was added

✅  Type `DestinationEdge` was added

✅  Type `DestinationConnection` was added

✅  Type `ClientInput` was added

✅  Type `ClientFilter` was added

✅  Type `ClientData` was added

✅  Type `Client` was added

✅  Type `ClientEdge` was added

✅  Type `ClientConnection` was added

✅  Type `DestinationType` was added

✅  Type `DestinationData` was added



## 2018-02-21

⚠️  Field `updateHotel` was removed from object type `HotelXMutation`

⚠️  Input field `SupplierFilter.serviceAPI` changed type from `Int` to `[Int]`

⚠️  Field `avail` was removed from object type `Destination`

⚠️  Field `name` was removed from object type `Destination`

⚠️  Field `Contact.web` changed type from `URI!` to `URI`

⚠️  Field `Location.zipCode` changed type from `String!` to `String`

⚠️  Field `Location.city` changed type from `String!` to `String`

⚠️  Field `Location.address` changed type from `String!` to `String`

⚠️  Field `geocode` was removed from object type `Location`

⚠️  Field `Amenity.code` changed type from `ID!` to `String!`

⚠️  Field `updatedAt` was removed from object type `Amenity`

⚠️  Field `createdAt` was removed from object type `Amenity`

⚠️  Field `error` was removed from object type `Amenity`

⚠️  Field `AmenityData` was removed from object type `Amenity`

⚠️  `Amenity` object type no longer implements `Node` interface

⚠️  Field `Media.code` changed type from `ID!` to `String`

⚠️  Field `createdAt` was removed from object type `Media`

⚠️  Field `error` was removed from object type `Media`

⚠️  Field `mediaData` was removed from object type `Media`

⚠️  `Media` object type no longer implements `Node` interface

⚠️  Field `HotelData.rank` changed type from `Rank!` to `[Int!]!`

⚠️  Field `HotelData.contact` changed type from `Contact!` to `Contact`

⚠️  Argument `after: String` was removed from field `HotelData.amenities`

⚠️  Argument `before: String` was removed from field `HotelData.amenities`

⚠️  Argument `last: Int` was removed from field `HotelData.amenities`

⚠️  Argument `first: Int` was removed from field `HotelData.amenities`

⚠️  Argument `language: String` was removed from field `HotelData.amenities`

⚠️  Field `HotelData.amenities` changed type from `AmenityConnection` to `[Amenity!]`

⚠️  Argument `after: String` was removed from field `HotelData.medias`

⚠️  Argument `before: String` was removed from field `HotelData.medias`

⚠️  Argument `last: Int` was removed from field `HotelData.medias`

⚠️  Argument `first: Int` was removed from field `HotelData.medias`

⚠️  Argument `type: ApplicationArea` was removed from field `HotelData.medias`

⚠️  Field `HotelData.medias` changed type from `MediaConnection` to `[Media!]`

⚠️  Field `destination` was removed from object type `HotelData`

⚠️  Field `generalDescription` was removed from object type `HotelData`

⚠️  Field `additionalInformation` was removed from object type `HotelData`

⚠️  Field `name` was removed from object type `HotelData`

⚠️  Type for argument `relay` on field `HotelXQuery.hotels` changed from `RelayInput` to `RelayInput!`

⚠️  Argument `criteria: HotelXHotelListInput!` added to field `HotelXQuery.hotels`

⚠️  Argument `hotels: HotelXHotelQueryInput` was removed from field `HotelXQuery.hotels`

⚠️  `StatusResponse` was removed

⚠️  `HotelStatus` was removed

⚠️  `GiataID` was removed

⚠️  `HotelXHotelDataInput` was removed

⚠️  `HotelXHotelMutationInput` was removed

⚠️  `RankInput` was removed

⚠️  `HotelXHotelQueryInput` was removed

⚠️  `Rank` was removed

⚠️  `Geocode` was removed

⚠️  `Information` was removed

⚠️  `AmenityData` was removed

⚠️  `AmenityEdge` was removed

⚠️  `AmenityConnection` was removed

⚠️  `ApplicationArea` was removed

⚠️  `MediaData` was removed

⚠️  `MediaEdge` was removed

⚠️  `MediaConnection` was removed

✅  Field `accesses` was added to object type `SupplierData`

✅  Description `Destination type` on type `Destination` has changed to `Information about destinantion`

✅  Field `Destination.code` changed type from `String` to `String!`

✅  Field `Destination.code` description changed from `Destination code.` to `Destination Code`

✅  Field `texts` was added to object type `Destination`

✅  Field `available` was added to object type `Destination`

✅  Description `Contact type` on type `Contact` has changed to `Contact Data.`

✅  Field `Contact.web` description changed from `Web.` to `Web`

✅  Field `Contact.fax` description changed from `Fax.` to `Fax`

✅  Field `Contact.telephone` description changed from `Telephone.` to `Telephone`

✅  Field `Contact.email` description changed from `Email.` to `Email`

✅  Description `Location` on type `Location` has changed to `Indicates the location of the hotel.`

✅  Field `Location.country` description changed from `Country ISO Code` to `Country where is the Hotel.`

✅  Field `Location.zipCode` description changed from `Zip Code` to `Contains the zipCode.`

✅  Field `Location.city` description changed from `City` to `Contains the city`

✅  Field `Location.address` description changed from `Street Address` to `Contains Hotel Address`

✅  Field `closestDestination` was added to object type `Location`

✅  Field `coordinates` was added to object type `Location`

✅  Description `` on type `Amenity` has changed to `Something, such as a swimming pool or shopping centre, that is intended to make life more pleasant or comfortable for the people.`

✅  Field `Amenity.code` description changed from `` to `Code`

✅  Field `texts` was added to object type `Amenity`

✅  Field `type` was added to object type `Amenity`

✅  Description `` on type `Media` has changed to `Contains media information.`

✅  Field `Media.updatedAt` description changed from `Update date` to `Update date.`

✅  Field `Media.code` description changed from `` to `Code.`

✅  Field `texts` was added to object type `Media`

✅  Field `url` was added to object type `Media`

✅  Field `type` was added to object type `Media`

✅  Field `order` was added to object type `Media`

✅  Field `HotelData.rank` description changed from `` to `Rank indicates the supplier categorization.`

✅  Field `HotelData.contact` description changed from `Contact information.` to `Contact cotains information about hotel contact.`

✅  Field `HotelData.location` description changed from `` to `Indicates the location of the hotel.`

✅  Field `HotelData.amenities` description changed from `` to `Amenities`

✅  Field `HotelData.medias` description changed from `` to `Medias`

✅  Field `HotelData.hotelCode` description changed from `Code of the hotel in the Supplier selected.` to `Code to perform availability.`

✅  Field `HotelData.code` description changed from `Internal code to perform availability` to `Internal code.`

✅  Field `descriptions` was added to object type `HotelData`

✅  Field `cardTypes` was added to object type `HotelData`

✅  Field `chainCode` was added to object type `HotelData`

✅  Field `property` was added to object type `HotelData`

✅  Field `hotelName` was added to object type `HotelData`

✅  Field `hotelCodeSupplier` was added to object type `HotelData`

✅  Description `Hotel type` on type `Hotel` has changed to `Hotel Type`

✅  Field `token` was added to object type `HotelConnection`

✅  Argument `token: String` added to field `HotelXQuery.hotels`

✅  Field `rooms` was added to object type `HotelXQuery`

✅  Field `categories` was added to object type `HotelXQuery`

✅  Field `boards` was added to object type `HotelXQuery`

✅  Type `HotelXRoomQueryInput` was added

✅  Type `RoomData` was added

✅  Type `RoomStatic` was added

✅  Type `RoomEdge` was added

✅  Type `RoomConnection` was added

✅  Type `HotelXHotelListInput` was added

✅  Type `DescriptionType` was added

✅  Type `Description` was added

✅  Type `ApplicationAreaType` was added

✅  Type `Coordinates` was added

✅  Type `Property` was added

✅  Type `HotelXCategoryQueryInput` was added

✅  Type `CategoryData` was added

✅  Type `Category` was added

✅  Type `CategoryEdge` was added

✅  Type `CategoryConnection` was added

✅  Type `HotelXBoardQueryInput` was added

✅  Type `Text` was added

✅  Type `BoardData` was added

✅  Type `Board` was added

✅  Type `BoardEdge` was added

✅  Type `BoardConnection` was added



## 2018-01-30

⚠️  Input field `hotelCode` was added to input object type `HotelXHotelDataInput`

⚠️  Input field `supplierCode` was removed from input object type `HotelXHotelDataInput`

⚠️  Field `rsAccess` was removed from object type `StatAccess`

⚠️  Field `rqAccess` was removed from object type `StatAccess`

⚠️  Field `dockerID` was removed from object type `StatAccess`

⚠️  Field `dockerID` was removed from object type `StatPlugin`

⚠️  Field `rsPlugin` was removed from object type `StatsRequest`

⚠️  Field `rqPlugin` was removed from object type `StatsRequest`

⚠️  Field `rs` was removed from object type `StatsRequest`

⚠️  Field `rq` was removed from object type `StatsRequest`

⚠️  Field `config` was removed from object type `StatsRequest`

⚠️  Field `supplierCode` was removed from object type `HotelData`

✅  Description for enum value `BookStatusType.UNKNOWN` changed from `The status of the booking is unknown` to `The reservation was completed but due to a supplier error or a timeout, the reservation status is unknown.

It is the client's responsibility to check if the booking is OK`

✅  Description for enum value `BookStatusType.ON_REQUEST` changed from `The status of the booking is on request` to `The reservation was completed but the product is still not available, so the reservation goes into a waiting list.

It is the client's responsibility to check if the booking is OK`

✅  Description for enum value `BookStatusType.OK` changed from `The status of the booking is available` to `The reservation was completed with no problems`

✅  Field `StatTransaction.parseResponse` description changed from `` to `Parse response time`

✅  Field `StatTransaction.workerCommunication` description changed from `` to `Worker connection time`

✅  Field `StatTransaction.buildRequest` description changed from `` to `Build request time`

✅  Field `StatTransaction.total` description changed from `` to `Total transaction time`

✅  Field `StatTransaction.reference` description changed from `` to `Extra information about transaction.`

✅  Field `StatAccess.plugins` description changed from `` to `Plugin execution time`

✅  Field `StatAccess.transactions` description changed from `` to `Detail transaction time`

✅  Field `StatAccess.cities` description changed from `` to `Number of cities`

✅  Field `StatAccess.zones` description changed from `` to `Number of zones`

✅  Field `StatAccess.hotels` description changed from `` to `Number of hotels`

✅  Field `StatAccess.staticConfiguration` description changed from `` to `Static configuration time`

✅  Field `StatAccess.total` description changed from `` to `Total access time`

✅  Field `StatAccess.name` description changed from `` to `Access name`

✅  Field `responseAccess` was added to object type `StatAccess`

✅  Field `requestAccess` was added to object type `StatAccess`

✅  Field `StatPlugin.total` description changed from `` to `total plugin time`

✅  Field `StatPlugin.name` description changed from `` to `Plugin name`

✅  Field `StatsRequest.Accesses` description changed from `` to `Detail access time`

✅  Field `StatsRequest.dockerID` description changed from `` to `Docker Id`

✅  Field `StatsRequest.cities` description changed from `` to `Number of cities`

✅  Field `StatsRequest.zones` description changed from `` to `Number of zones`

✅  Field `StatsRequest.hotels` description changed from `` to `Number of hotels`

✅  Field `StatsRequest.process` description changed from `` to `Process time. Contains communication time, parse time and plugin time.`

✅  Field `StatsRequest.validation` description changed from `` to `Request validation time`

✅  Field `StatsRequest.total` description changed from `` to `Total transaction time`

✅  Field `responsePlugin` was added to object type `StatsRequest`

✅  Field `requestPlugin` was added to object type `StatsRequest`

✅  Field `response` was added to object type `StatsRequest`

✅  Field `request` was added to object type `StatsRequest`

✅  Field `configuration` was added to object type `StatsRequest`

✅  Field `hotelCode` was added to object type `HotelData`

## 2018-01-29

⚠️  Field `HotelCancelPayload.stats` changed type from `RequestStats` to `StatsRequest`

⚠️  Field `HotelBookPayload.stats` changed type from `RequestStats` to `StatsRequest`

⚠️  Input field `supplierCode` was added to input object type `HotelXHotelDataInput`

⚠️  Input field `code` was removed from input object type `HotelXHotelDataInput`

⚠️  Type for argument `relay` on field `HotelXMutation.updateHotel` changed from `HotelXRelayInput` to `RelayInput`

⚠️  Field `HotelBooking.stats` changed type from `RequestStats` to `StatsRequest`

⚠️  Field `HotelQuote.stats` changed type from `RequestStats` to `StatsRequest`

⚠️  Field `external` was removed from object type `StatAccess`

⚠️  Field `Response.stats` changed type from `RequestStats` to `StatsRequest`

⚠️  Field `HotelSearch.stats` changed type from `RequestStats` to `StatsRequest`

⚠️  Input field `codes` was removed from input object type `HotelXHotelQueryInput`

⚠️  Type for argument `language` on field `HotelData.generalDescription` changed from `Language` to `String`

⚠️  Type for argument `language` on field `HotelData.additionalInformation` changed from `Language` to `String`

⚠️  Type for argument `language` on field `HotelData.amenities` changed from `Language` to `String`


⚠️  Type for argument `relay` on field `HotelXQuery.hotels` changed from `HotelXRelayInput` to `RelayInput`

⚠️  `RequestStats` was removed

⚠️  `HotelXRelayInput` was removed

✅  Input field `supplierGroup` was added to input object type `SupplierInput`

✅  Input field `serviceAPI` was added to input object type `SupplierFilter`

✅  Input field `isActive` was added to input object type `SupplierFilter`

✅  Field `supplierGroup` was added to object type `SupplierData`

✅  Description `Url's` on type `UrlsInput` has changed to `Url's Input`

✅  Field `plugins` was added to object type `StatAccess`

✅  Field `rsAccess` was added to object type `StatAccess`

✅  Field `rqAccess` was added to object type `StatAccess`

✅  Field `dockerID` was added to object type `StatAccess`

✅  Field `cities` was added to object type `StatAccess`

✅  Field `zones` was added to object type `StatAccess`

✅  Field `hotels` was added to object type `StatAccess`

✅  Input field `supplierCodes` was added to input object type `HotelXHotelQueryInput`

✅  Field `HotelData.code` description changed from `Internal code to perform availability and/or supplier code.` to `Internal code to perform availability`

✅  Field `supplierCode` was added to object type `HotelData`

✅  Type `StatPlugin` was added

✅  Type `StatsRequest` was added

✅  Type `RelayInput` was added

## 2018-01-17

⚠️  Field `AccessEdge.node` changed type from `Supplier` to `Access`

⚠️  Field `value` was removed from object type `Parameter`

⚠️  Field `key` was removed from object type `Parameter`

⚠️  Field `supplierGroups` was removed from object type `SupplierData`

⚠️  Field `hotelCodes` was removed from object type `SupplierData`

⚠️  Field `dll` was removed from object type `SupplierData`

⚠️  Field `Supplier.supplierData` changed type from `SupplierData!` to `SupplierData`

⚠️  Field `AccessData.parameters` changed type from `[Parameter!]` to `ParameterConnection`

⚠️  Field `AccessData.urls` changed type from `Urls!` to `Urls`

⚠️  Field `AccessData.supplier` changed type from `String!` to `Supplier!`

⚠️  Field `AccessData.code` changed type from `String!` to `ID!`

⚠️  Field `id` was removed from object type `AccessData`

⚠️  Field `suppliers` was removed from object type `AccessData`

⚠️  Field `Access.accessData` changed type from `AccessData!` to `AccessData`

✅  `Parameter` object implements `Node` interface

✅  Description `Parameters for additional information for the supplier's configuration.` on type `Parameter` has changed to ``

✅  Field `updatedAt` was added to object type `Parameter`

✅  Field `createdAt` was added to object type `Parameter`

✅  Field `error` was added to object type `Parameter`

✅  Field `parameterData` was added to object type `Parameter`

✅  Field `code` was added to object type `Parameter`

✅  Field `legacy` was added to object type `SupplierData`

✅  Field `serviceApi` was added to object type `SupplierData`

✅  Field `context` was added to object type `SupplierData`

✅  Field `provider` was added to object type `SupplierData`

✅  Field `name` was added to object type `SupplierData`

✅  Argument `after: String` added to field `AccessData.parameters`

✅  Argument `before: String` added to field `AccessData.parameters`

✅  Argument `Last: Int` added to field `AccessData.parameters`

✅  Argument `first: Int` added to field `AccessData.parameters`

✅  Field `AccessData.code` description changed from `Access code.` to `Unique AccessConfiguration identifier`

✅  Field `shared` was added to object type `AccessData`

✅  Field `rateRules` was added to object type `AccessData`

✅  Field `descriptiveInfoLimit` was added to object type `AccessData`

✅  Field `deleteSupplierFromGroup` was added to object type `AdminMutation`

✅  Field `grantSupplierToGroup` was added to object type `AdminMutation`

✅  Field `deleteAccessFromGroup` was added to object type `AdminMutation`

✅  Field `grantAccessToGroup` was added to object type `AdminMutation`

✅  Field `updateAccess` was added to object type `AdminMutation`

✅  Field `createAccess` was added to object type `AdminMutation`

✅  Input field `RankInput.rank4` changed type from `Boolean!` to `Boolean`

✅  Input field `RankInput.rank3` changed type from `Boolean!` to `Boolean`

✅  Input field `RankInput.rank2` changed type from `Boolean!` to `Boolean`

✅  Input field `RankInput.rank1` changed type from `Boolean!` to `Boolean`

✅  Field `suppliers` was added to object type `AdminQuery`

✅  Field `accesses` was added to object type `AdminQuery`

✅  Field `CancelPolicy.refundable` description changed from `Indicates if the option is refundable or not.
This information is mandatory.` to `Indicates if the option is refundable or not.`

✅  Input field `ranks` was added to input object type `HotelXHotelQueryInput`

✅  Type `SupplierInput` was added

✅  Type `ProviderInput` was added

✅  Type `LegacyDataInput` was added

✅  Type `Context` was added

✅  Type `GroupInput` was added

✅  Type `AccessInput` was added

✅  Type `SupplierFilter` was added

✅  Type `SupplierEdge` was added

✅  Type `SupplierConnection` was added

✅  Type `AccessFilter` was added

✅  Type `ParameterData` was added

✅  Type `ParameterEdge` was added

✅  Type `ParameterConnection` was added

✅  Type `LegacyData` was added

✅  Type `Provider` was added

## 2018-01-11

⚠️  Field `codes` was removed from object type `Map`

⚠️  Field `supplierCode` was removed from object type `Map`

⚠️  Field `maps` was removed from object type `MappingEntity`

⚠️  Argument `BoardCodes: [String!]` was removed from field `MappingContext.boards`

⚠️  Argument `roomCodes: [String!]` was removed from field `MappingContext.rooms`

⚠️  Argument `hotelCodes: [String!]` was removed from field `MappingContext.hotels`

⚠️  Field `rates` was removed from object type `MappingContext`

⚠️  Field `contextCode` was removed from object type `MappingContext`

⚠️  Argument `supplierCodes: [String!]` was removed from field `Mapping.contexts`

⚠️  Argument `contextCodes: [String!]` was removed from field `Mapping.contexts`

⚠️  Field `DefaultSettings.market` changed type from `String!` to `String`

⚠️  Field `DefaultSettings.connectUser` changed type from `String!` to `String`

⚠️  Input field `HotelSettingsInput.suppliers` changed type from `[SupplierInput!]` to `[HotelXSupplierInput!]`

⚠️  Field `HotelSearch.requestCriteria` changed type from `CriteriaSearch!` to `CriteriaSearch`

⚠️  Field `HotelSearch.context` changed type from `String!` to `String`

⚠️  Field `Geocode.longitude` changed type from `String!` to `Float!`

⚠️  Field `Geocode.latitude` changed type from `String!` to `Float!`

⚠️  Argument `after: String` was removed from field `HotelXQuery.hotels`

⚠️  Argument `before: String` was removed from field `HotelXQuery.hotels`

⚠️  Argument `last: Int` was removed from field `HotelXQuery.hotels`

⚠️  Argument `first: Int` was removed from field `HotelXQuery.hotels`

⚠️  Argument `language: String` was removed from field `HotelXQuery.hotels`

⚠️  Argument `codes: [String!]` was removed from field `HotelXQuery.hotels`

⚠️  `HotelInput` was removed

⚠️  `AccessInput` was removed

⚠️  `SupplierInput` was removed

✅  Field `loadFile` was added to object type `HotelXMutation`

✅  Field `updateHotel` was added to object type `HotelXMutation`

✅  Field `maps` was added to object type `Map`

✅  Field `code` was added to object type `Map`

✅  Field `contexts` was added to object type `MappingEntity`

✅  Argument `codes: [String!]` added to field `MappingContext.boards`

✅  Field `MappingContext.boards` description changed from `Mapping of boards. Filter by board code.` to `Mapping of boards, you can filter by board code.`

✅  Argument `codes: [String!]` added to field `MappingContext.rooms`
✅  Field `MappingContext.rooms` description changed from `Mapping of rooms. Filter by room code.` to `Mapping of rooms, you can filter by room code.`

✅  Argument `codes: [String!]` added to field `MappingContext.hotels`
✅  Field `MappingContext.hotels` description changed from `Mapping of hotels. Filter by hotel code.` to `Mapping of hotels, you can filter by hotel code.`

✅  Field `code` was added to object type `MappingContext`

✅  Argument `codes: [String!]` added to field `Mapping.contexts`

✅  Field `warnings` was added to object type `Mapping`

✅  Field `errors` was added to object type `Mapping`

✅  Argument `type: GroupType` added to field `AdminQuery.groups`

✅  Argument `type: MemberType` added to field `AdminQuery.members`

✅  Field `rank` was added to object type `HotelData`

✅  Argument `relay: HotelXRelayInput` added to field `HotelXQuery.hotels`

✅  Argument `hotels: HotelXHotelQueryInput` added to field `HotelXQuery.hotels`

✅  Field `mapping` was added to object type `HotelXQuery`

✅  Type `StatusResponse` was added

✅  Type `HotelStatus` was added

✅  Type `RankInput` was added

✅  Type `HotelXHotelDataInput` was added

✅  Type `HotelXHotelMutationInput` was added

✅  Type `HotelXAccessInput` was added

✅  Type `HotelXSupplierInput` was added

✅  Type `HotelXRelayInput` was added

✅  Type `HotelXHotelQueryInput` was added

✅  Type `Rank` was added
