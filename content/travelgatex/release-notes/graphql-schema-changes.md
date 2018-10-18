+++
title = "GraphQL Schema Changes"
pagetitle = "GraphQL API Schema Changes"
description = "It includes backwards-compatible changes, schema previews, and upcoming breaking changes."
weight = 3
alwaysopen = false
icon="fa-cogs"
svgicon="/images/graphql.svg"
hidden = false
tags = ["graphql-changelog"]

+++
The GraphQL schema change log is a list of recent and upcoming changes to our GraphQL API schema. It includes backwards-compatible changes, schema previews, and upcoming breaking changes.

Check out this list of new releases and changes applied on the **TravelgateX GraphQL API**.

## 2018-10-18

🛑  Input field `type` was added to input object type `CreateProfileInput`

🛑  Field `errors` was removed from object type `HotelXCommonSettings`

🛑  Field `warnings` was removed from object type `HotelXCommonSettings`

🛑  Field `warnings` was removed from object type `HotelXDefaultSettings`

🛑  Field `errors` was removed from object type `HotelXDefaultSettings`

🛑  Field `downloadHotels` was removed from object type `HotelXQuery`

🛑  Field `downloadRooms` was removed from object type `HotelXQuery`

🛑  Field `isActive` was removed from object type `Member`

✅  Description `Input delta price, indicates price variation permitted by the client
An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue
(price is lower or equal to the price showed in valuation).
This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation
will be done automatically in reservation method.` on type `DeltaPriceInput` has changed to `Input delta price, indicates price variation permitted by the client
An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue
(price is lower or equal to the price showed in valuation).
This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation
will be done automatically in reservation method.`

✅  Input field `type` was added to input object type `UpdateProfileInput`

✅  Field `PaymentXQuery.storedCard` description changed from `Returns a stored card information.` to `Returns a stored card information. `

✅  Field `PaymentXQuery.allStoredCards` description changed from `Returns the stored card list. For security, this query never will return clear card information.` to `Returns the stored card list. For security, this query never will return clear card information. `

✅  Input field `HotelSettingsInput.clientTokens` description changed from `Used to identify the origin of the request, this is only used in plugins.` to `Used to identify the origin of the request, this is only used in plugins. `

✅  Field `adviseMessage` was added to object type `HotelXCommonSettings`

✅  Field `adviseMessage` was added to object type `HotelXDefaultSettings`

✅  Field `type` was added to object type `ProfileData`

✅  Field `isActive` was added to object type `MemberData`

✅  Field `AdminQuery.products` description changed from `Product catalog; specify products codes to filter` to `Product catalog; specify products codes to filter `

✅  Type `ProfileType` was added

## 2018-09-26

🛑  Input field `mode` was added to input object type `StatsFilterInput`

✅  Input field `clients` was added to input object type `StatsFilterInput`

✅  Field `count` was added to object type `HotelConnection`

✅  Type `ModeType` was added

## 2018-09-20

✅  Input field `UpdateProfileInput.label` changed type from `String!` to `String`

✅  Input field `isPublished` was added to input object type `UpdateProfileInput`

✅  Input field `isActive` was added to input object type `UpdateProfileInput`

✅  Input field `isPublished` was added to input object type `CreateProfileInput`

✅  Input field `isActive` was added to input object type `CreateProfileInput`

✅  Field `isPublished` was added to object type `ProfileData`

✅  Field `isActive` was added to object type `ProfileData`

## 2018-09-10

✅  Description `Input delta price, indicates price variation permitted by the client An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue (price is lower or equal to the price showed in valuation). This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation will be done automatically in reservation method.`

on type `DeltaPriceInput` has changed to `Input delta price, indicates price variation permitted by the client
An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue (price is lower or equal to the price showed in valuation). This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation will be done automatically in reservation method.`

✅  Field `PaymentXQuery.storedCard` description changed from `Returns a stored card information. ` to `Returns a stored card information.`

✅  Field `PaymentXQuery.allStoredCards` description changed from `Returns the stored card list. For security, this query never will return clear card information. ` to `Returns the stored card list. For security, this query never will return clear card information.`

✅  Input field `HotelSettingsInput.clientTokens` description changed from `Used to identify the origin of the request, this is only used in plugins. ` to `Used to identify the origin of the request, this is only used in plugins.`

✅  Field `runtimeConfiguration` was added to object type `HotelXQuery`

✅  Input field `isActive` was added to input object type `EntityFilter`

✅  Field `AdminQuery.products` description changed from `Product catalog; specify products codes to filter ` to `Product catalog; specify products codes to filter`

✅  Type `MetadataType` was added

✅  Type `TagRuntimeType` was added

✅  Type `HotelRuntimeParameter` was added

✅  Type `HotelRuntimeConfigurationData` was added

✅  Type `HotelRuntimeConfiguration` was added

## 2018-08-27

✅  Description `Input delta price, indicates price variation permitted by the client. An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue (price is lower or equal to the price showed in valuation).This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation will be done automatically in reservation method.`
on type `DeltaPriceInput` has changed to
`Input delta price, indicates price variation permitted by the client An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue (price is lower or equal to the price showed in valuation). This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation  will be done automatically in reservation method.`

✅  Argument `filter: HotelXFilterInput` added to field `HotelXMutation.cancel`

✅  Argument `filter: HotelXFilterInput` added to field `HotelXMutation.book`

✅  Field `PaymentXQuery.storedCard` description changed from `Returns a stored card information.` to `Returns a stored card information. `

✅  Field `PaymentXQuery.allStoredCards` description changed from `Returns the stored card list. For security, this query never will return clear card information.` to `Returns the stored card list. For security, this query never will return clear card information. `

✅  Input field `HotelSettingsInput.clientTokens` description changed from `Used to identify the origin of the request, this is only used in plugins.` to `Used to identify the origin of the request, this is only used in plugins. `

✅  Argument `filter: HotelXFilterInput` added to field `HotelXQuery.booking`

✅  Argument `filter: HotelXFilterInput` added to field `HotelXQuery.quote`

✅  Argument `filterSearch: HotelXFilterSearchInput` added to field `HotelXQuery.search`

✅  Deprecation reason on field `Product.error` has changed from `` to `deprecated from 2018-08-22. Sustituted by adviseMessage`

✅  Field `adviseMessage` was added to object type `Product`

✅  Deprecation reason on field `Operation.error` has changed from `` to `deprecated from 2018-08-22. Sustituted by adviseMessage`

✅  Field `adviseMessage` was added to object type `Operation`

✅  Deprecation reason on field `API.error` has changed from `` to `deprecated from 2018-08-22. Sustituted by adviseMessage`

✅  Field `adviseMessage` was added to object type `API`

✅  Deprecation reason on field `Resource.error` has changed from `` to `deprecated from 2018-08-22. Sustituted by adviseMessage`

✅  Field `adviseMessage` was added to object type `Resource`

✅  Deprecation reason on field `Role.error` has changed from `` to `deprecated from 2018-08-22. Sustituted by adviseMessage`

✅  Field `adviseMessage` was added to object type `Role`

✅  Deprecation reason on field `Member.error` has changed from `` to `deprecated from 2018-08-22. Sustituted by adviseMessage`

✅  Field `Member.error` description changed from `` to `Errors that abort services`

✅  Field `adviseMessage` was added to object type `Member`

✅  Deprecation reason on field `Organization.error` has changed from `` to `deprecated from 2018-08-22. Sustituted by adviseMessage`

✅  Field `adviseMessage` was added to object type `Organization`

✅  Field `AdminQuery.products` description changed from `Product catalog; specify products codes to filter` to `Product catalog; specify products codes to filter `

## 2018-08-22

🛑  `Text` kind changed from `INTERFACE` to `OBJECT`

🛑  `AdviseMessage` kind changed from `INTERFACE` to `OBJECT`

✅  Input field `owner` was added to input object type `UpdateProfileInput`

✅  Input field `owner` was added to input object type `CreateProfileInput`

✅  Input field `owner` was added to input object type `UpdateClientInput`

✅  Input field `owner` was added to input object type `CreateClientInput`

✅  Input field `owner` was added to input object type `AccessInput`

✅  Field `parents` was added to object type `OrganizationData`

✅  Field `descendents` was added to object type `OrganizationData`

✅  Input field `owner` was added to input object type `EntityFilter`

✅  Input field `owner` was added to input object type `ProfileFilter`

✅  Field `owner` was added to object type `ProfileData`

✅  Input field `owner` was added to input object type `PointOfSaleFilter`

✅  Field `owner` was added to object type `PointOfSaleData`

✅  Input field `owner` was added to input object type `ClientFilter`

✅  Input field `owner` was added to input object type `SupplierFilter`

✅  Input field `owner` was added to input object type `AccessFilter`

✅  Field `owner` was added to object type `ClientData`

✅  Field `GroupData.parents` description changed from `Recursive call with all ascendant parents tree` to `Response all parents groups nodes for this group (nom-hierarchically)`

✅  Field `descendents` was added to object type `GroupData`

✅  Field `owner` was added to object type `SupplierData`

✅  Field `isShedulerActive` was added to object type `AccessData`

✅  Field `owner` was added to object type `AccessData`

✅  Type `HotelXFilterSearchInput` was added

✅  Type `HotelXFilterPluginTypeInput` was added

✅  Type `HotelXPluginFilterInput` was added

✅  Type `HotelXFilterInput` was added

## 2018-08-14

🛑  Type for argument `input` on field `PaymentXMutation.storeCard` changed from `PaymentXStoreCardInput!` to `PaymentXStoredCardInput!`

🛑  Field `PaymentXMutation.storeCard` changed type from `StoredCard!` to `PaymentXStoredCard!`

🛑  Field `deleteCard` was removed from object type `PaymentXMutation`

🛑  Field `PaymentXQuery.vaultStatusService` changed type from `ServiceStatus!` to `AdviseMessage!`

🛑  Field `cards` was removed from object type `PaymentXQuery`

🛑  Type `PaymentXBookingInfoDeleteInput` was removed

🛑  Type `PointOfSaleInput` was removed

🛑  Type `PaymentXBookingInfoInput` was removed

🛑  Type `PaymentXStoreCardInput` was removed

🛑  Type `PaymentXBookingInfoCriteriaInput` was removed

🛑  Type `PaymentXBookingInfoFilterInput` was removed

🛑  Type `ExpireDate` was removed

🛑  Type `PaymentCard` was removed

🛑  Type `PaymentXBookingInfo` was removed

🛑  Type `StoredCardData` was removed

🛑  Type `StoredCard` was removed

🛑  Type `StoredCardEdge` was removed

🛑  Type `StoredCardConnection` was removed

✅  Field `deleteStoredCard` was added to object type `PaymentXMutation`

✅  Field `PaymentXQuery.vaultStatusService` description changed from `Returns status of the search service.` to `Returns status of the vault service.`

✅  Field `storedCard` was added to object type `PaymentXQuery`

✅  Field `allStoredCards` was added to object type `PaymentXQuery`

✅  Input field `countries` was added to input object type `HotelXHotelListInput`

✅  Type `PaymentXStoredCardInput` was added

✅  Type `PaymentXStoredCardIDInput` was added

✅  Type `PaymentXStoredCardFilterInput` was added

✅  Type `PaymentXExpireDate` was added

✅  Type `PaymentXStoredCardData` was added

✅  Type `PaymentXStoredCard` was added

✅  Type `PaymentXStoredCardEdge` was added

✅  Type `PaymentXStoredCardConnection` was added


## 2018-08-13

🛑  Field `ProfileData.group` changed type from `Group!` to `Group`

🛑  Field `ClientData.group` changed type from `Group!` to `Group`

🛑  Argument `type: GroupType` was removed from field `GroupData.managedGroups`

🛑  Field `GroupData.managedGroups` changed type from `GroupConnection` to `ManagedGroupConnection`

🛑  Field `SupplierData.groups` changed type from `GroupConnection!` to `GroupConnection`

🛑  Field `AccessData.groups` changed type from `GroupConnection!` to `GroupConnection`

✅  Argument `role: [ID!]` added to field `GroupData.managedGroups`

✅  Argument `resource: [ID!]` added to field `GroupData.managedGroups`

✅  Argument `api: [ID!]` added to field `GroupData.managedGroups`

✅  Argument `group: [ID!]` added to field `GroupData.managedGroups`

✅  Field `GroupData.managedGroups` description changed from `Responses all groups in its group's childrens (hierarchically),` to `Responses all managed groups by this group.`

✅  Type `ManagedGroupData` was added

✅  Type `ManagedGroup` was added

✅  Type `ManagedGroupEdge` was added

✅  Type `ManagedGroupConnection` was added

## 2018-08-08

✅  Input field `currency` was added to input object type `SettingsBaseInput`

✅  Field `parents` was added to object type `GroupData`

✅  Deprecation reason on field `Group.error` has changed from `` to `deprecated from 2018-08-01. Sustituted by adviseMessage`

✅  Field `adviseMessage` was added to object type `Group`

✅  Field `group` was added to object type `ProfileData`

✅  Field `group` was added to object type `ClientData`

✅  Field `groups` was added to object type `SupplierData`

✅  Field `groups` was added to object type `AccessData`

## 2018-07-31

✅  Field `StoredCard.adviseMessage` description changed from `List of advise messages.` to `List of messages`

✅  Deprecation reason on field `AddOns.distribute` has changed from `You can find it in distribution AddOn` to `deprecated from 2018-05-21. You can find it in distribution AddOn`

✅  Field `PointOfSale.adviseMessage` description changed from `List of messages` to `List of advise messages.`

✅  Field `entities` was added to object type `AdminQuery`

✅  Type `EntityFilter` was added


## 2018-07-26 {#20180726}

⚠️  Enum value `ORG` was added to enum `GroupTypeInput`

⚠️  Enum value `ROOT` was added to enum `GroupTypeInput`

⚠️  Enum value `ROOT` was added to enum `GroupType

## 2018-07-25 {#20180725}

🛑  Input field `HotelSettingsInput.group` changed type from `String` to `ID`

🛑  Input field `HotelSettingsInput.client` changed type from `String` to `ID`

✅  Input field `HotelSettingsInput.client` description changed from `This field is occurs only if the authorization header is of the type JWT.. It is used to change the user that has been set by default in the preload.` to `Client name, this field is occurs only if the authorization header is of the type JWT.. It is used to change the user that has been set by default in the preload.`

✅  Input field `clientTokens` was added to input object type `HotelSettingsInput`

## 2018-07-16 {#20180716}

🛑  Input field `organizations` was removed from input object type `StatsFilterInput`

🛑  Field `error` was removed from object type `Stats`

✅  Input field `groups` was added to input object type `StatsFilterInput`

✅  Field `adviseMessage` was added to object type `Stats`

✅  Field `StoredCard.adviseMessage` description changed from `List of messages` to `List of advise messages.`

✅  Description `` on type `AdviseMessage` has changed to `List of advise messages.`

## 2018-07-10 {#20180710}

🛑  Field `deleteDefaultSettings` was removed from object type `Mutation`

🛑  Field `updateDefaultSettings` was removed from object type `Mutation`

🛑  Field `createDefaultSettings` was removed from object type `Mutation`

🛑  Field `loadFile` was removed from object type `Mutation`

🛑  Field `hotelCancel` was removed from object type `Mutation`

🛑  Field `hotelBook` was removed from object type `Mutation`

🛑  Field `Destination.error` changed type from `[Error!]` to `[AdviseMessage!]`

🛑  Field `Hotel.error` changed type from `[Error!]` to `[AdviseMessage!]`

🛑  Field `mapping` was removed from object type `Query`

🛑  Field `defaultSettings` was removed from object type `Query`

🛑  Field `booking` was removed from object type `Query`

🛑  Field `quote` was removed from object type `Query`

🛑  Field `search` was removed from object type `Query`

✅  Input field `AccessInput.name` changed type from `String!` to `String`

✅  Field `removeEntitiesFromProfile` was added to object type `AdminMutation`

✅  Field `addEntitiesToProfile` was added to object type `AdminMutation`

✅  Field `updateProfile` was added to object type `AdminMutation`

✅  Field `createProfile` was added to object type `AdminMutation`

✅  Input field `PaymentXBookingInfoFilterInput.bookingReference` changed type from `String!` to `String`

✅  Input field `PaymentXBookingInfoFilterInput.bookingReference` description changed from `Indicates the referece of the booking` to `Indicates the referece of the booking. @deprecated(reason: "deprecated from 2018-08-03. Please use PaymentXBookingInfoCriteriaInput")`

✅  Input field `PaymentXBookingInfoFilterInput.pointOfSaleCode` changed type from `ID!` to `ID`

✅  Input field `PaymentXBookingInfoFilterInput.pointOfSaleCode` description changed from `Indicates the code of the booked property` to `Indicates the code of the booked property. @deprecated(reason: "deprecated from 2018-08-03. Please use PaymentXBookingInfoCriteriaInput")`

✅  Input field `PaymentXBookingInfoFilterInput.organization` changed type from `String!` to `String`

✅  Input field `PaymentXBookingInfoFilterInput.organization` description changed from `Responsible organization of the booked property.` to `Responsible organization of the booked property. @deprecated(reason: "deprecated from 2018-08-03. Please use PaymentXBookingInfoCriteriaInput")`

✅  Input field `checkOut_gte` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkOut_gt` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkOut_lte` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkOut_lt` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkOut_not_in` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkOut_in` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkIn_gte` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkIn_gt` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkIn_lte` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkIn_lt` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkIn_not_in` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `checkIn_in` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `OR` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Input field `AND` was added to input object type `PaymentXBookingInfoFilterInput`

✅  Argument `bookingInfoCriteria: PaymentXBookingInfoCriteriaInput` added to field `PaymentXQuery.cards`

✅  Input field `HotelXHotelListInput.access` changed type from `ID!` to `ID`

✅  Input field `group` was added to input object type `HotelXHotelListInput`

✅  Field `airports` was added to object type `Location`

✅  Input field `maxSize` was added to input object type `HotelXRoomQueryInput`

✅  Field `token` was added to object type `RoomConnection`

✅  Field `HotelXQuery.destinationSearcher` description changed from `Returns hotels and destinations that contains the indicated text. ` to `Returns hotels and destinations that contains the indicated text.`

✅  Argument `filter: HotelXHotelFilterInput` added to field `HotelXQuery.hotels`

✅  Argument `token: String` added to field `HotelXQuery.rooms`

✅  Field `AdminQuery.products` description changed from `Members list; specify member codes to filter members` to `Product catalog; specify products codes to filter `

✅  Field `jwt` was added to object type `AdminQuery`

✅  Type `UpdateEntitiesInput` was added

✅  Type `UpdateProfileInput` was added

✅  Type `EntitiesInput` was added

✅  Type `CreateProfileInput` was added

✅  Type `PaymentXBookingInfoCriteriaInput` was added

✅  Type `HotelXHotelFilterInput` was added

✅  Type `AirportData` was added

✅  Type `Airport` was added

✅  Type `JWT` was added

## 2018-06-21

🛑  Field `group` was removed from object type `PointOfSaleData`

✅  Field `Stats.statsData` description changed from `GUID

The data returned by a \`Stats\` query.` to `GUID

The data returned by a Stats query.`

✅  Argument `codeStartsWith: String` added to field `OrganizationData.children`

✅  Argument `type: GroupType` added to field `OrganizationData.children`

✅  Argument `codeStartsWith: String` added to field `GroupData.children`

✅  Field `profiles` was added to object type `AdminQuery`

✅  Type `ProfileFilter` was added

✅  Type `EntityData` was added

✅  Type `Entity` was added

✅  Type `EntityEdge` was added

✅  Type `EntityConnection` was added

✅  Type `ProfileData` was added

✅  Type `Profile` was added

✅  Type `ProfileEdge` was added

✅  Type `ProfileConnection` was added

## 2018-06-12

🛑  Input field `group` was added to input object type `DeleteGroupInput`

🛑  Input field `code` was removed from input object type `DeleteGroupInput`

🛑  Type `LegacyData` was removed

✅  Description `Input delta price, indicates price variation permitted by the client` on type `DeltaPriceInput` has changed to `Input delta price, indicates price variation permitted by the client
An error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue
(price is lower or equal to the price showed in valuation).
This field is implemented if it’s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation
will be done automatically in reservation method.`

✅  Input field `DeltaPriceInput.applyBoth` description changed from `Indicates that the range between valuation price and the new price does not exceed the amount and/or porcentage indicated by the client.` to `Depending on the value of applyBoth:
applyBoth = false: Indicates that one of the conditions (amount or percentage) has to meet the criteria before reservation.
applyBoth = true: Indicates that the new price cannot exceed the amount or percentage indicated by the client.`

✅  Deprecation reason on field `HotelXMutation.loadFile` has changed from `` to `deprecated from 2018-06-06`

✅  Description `` on type `AdminMutation` has changed to `The admin query root of TravelgateX's for implementing GraphQL mutations.`

✅  Description `Mutations are operations that change or update data on the server` on type `Mutation` has changed to `The root query for implementing GraphQL mutations. Mutations are operations that change or update data on the server`

✅  Field `paymentX` was added to object type `Mutation`

✅  Description `LList of business rules for filtering options based on your interests.` on type `BusinessRules` has changed to `List of business rules for filtering options based on your interests.`

✅  Description for enum value `ServiceApiType.PACKAGE` changed from `` to `When the request has been done against the Package API`

✅  Description for enum value `ServiceApiType.PAYMENT` changed from `` to `When the request has been done against the Payment API`

✅  Description for enum value `ServiceApiType.VIRTUALACCOUNT` changed from `` to `When the request has been done against the Virtual Account API`

✅  Description for enum value `ServiceApiType.ACTIVITIES` changed from `` to `When the request has been done against the Activities API`

✅  Description for enum value `ServiceApiType.TRANSFERS` changed from `` to `When the request has been done against the Transfers API`

✅  Description for enum value `ServiceApiType.CAR` changed from `` to `When the request has been done against the Car API`

✅  Description for enum value `ServiceApiType.TRANSPORTATION` changed from `` to `When the request has been done against the Transportation API`

✅  Description for enum value `ServiceApiType.HOTEL` changed from `` to `When the request has been done against the Hotel API`

✅  Description for enum value `ServiceOperationType.OTHER` changed from `` to `When the type of the request is Other`

✅  Description for enum value `ServiceOperationType.BOOKING` changed from `` to `When the type of the request is Booking`

✅  Description for enum value `ServiceOperationType.QUOTE` changed from `` to `When the type of the request is Quote`

✅  Description for enum value `ServiceOperationType.SEARCH` changed from `` to `When the type of the request is Search`

✅  Field `StatsAssert.url` description changed from `` to `Endpoint to download the full XML of the request with its response`

✅  Field `StatsAssert.execTime` description changed from `` to `Execution time of the request`

✅  Field `StatsAssert.startTime` description changed from `` to `Start time of the request`

✅  Description for enum value `StatsInfoTypes.OTHER` changed from `` to `Stats in NOK state caused by other causes`

✅  Description for enum value `StatsInfoTypes.HUB` changed from `` to `Stats in NOK state caused by HUB issues`

✅  Description for enum value `StatsInfoTypes.COMMUNICATION` changed from `` to `Stats in NOK state caused by Timeout`

✅  Description for enum value `StatsInfoTypes.PROVIDER` changed from `` to `Stats in NOK state caused by supplier issues`

✅  Description for enum value `StatsInfoTypes.INTEGRATION` changed from `` to `Stats in NOK state caused by integration issues`

✅  Description for enum value `StatsInfoTypes.OK` changed from `` to `Stats in OK state`

✅  Field `StatsInfo.asserts` description changed from `` to `Details about errors.`

✅  Field `StatsInfo.time` description changed from `Total time (ms)` to `Average time (ms)`

✅  Field `StatsInfo.hits` description changed from `Total hits.` to `Total hits`

✅  Field `StatsInfo.type` description changed from `` to `Stats type`

✅  Description `` on type `OperationDetailed` has changed to `Stats information per operation`

✅  Field `OperationDetailed.cache` description changed from `` to `Responsible for the execution of the this stats. If TRUE then cache, else client`

✅  Field `OperationDetailed.detailedHits` description changed from `Total time
time: Time!` to `Hits grouped depending on their status`

✅  Field `OperationDetailed.totalHits` description changed from `operation: String!
operationType: ServiceOperationType!
List of service apis.
serviceApis: ServiceApiConnection!
Total hits.` to `Total hits.`

✅  Field `OperationDetailed.operation` changed type from `Operation` to `Operation!`

✅  Field `OperationDetailed.operation` description changed from `` to `Operation information`

✅  Description `Details of look to quote and look to book.` on type `Ratios` has changed to `Ratios details`

✅  Field `Ratios.quoteToBook` description changed from `` to `Quotes needed to do a booking`

✅  Field `Ratios.lookToBook` description changed from `` to `Searches needed to do a booking`

✅  Field `Ratios.lookToQuote` description changed from `` to `Searches needed to do a quote`

✅  Field `StatsData.operations` description changed from `` to `Stats information per operation`

✅  Field `StatsData.ratios` description changed from `Details of look to quote and look to book.` to `Ratios details`

✅  Field `StatsData.client` description changed from `` to `Owner client`

✅  Field `StatsData.access` description changed from `` to `Owner access`

✅  Field `Stats.updatedAt` description changed from `Date updated` to `Update date`

✅  Field `Stats.createdAt` description changed from `Date created` to `Create date`

✅  Field `Stats.error` description changed from `Errors that abort services` to `Errors that will lead the service to abort`

✅  Field `Stats.statsData` description changed from `` to `GUID
The data returned by a \`Stats\` query.`

✅  Description `Plugin Type` on type `PluginType` has changed to `Plugin Type. /hotelx/plugins/overview/`

✅  Description `Plugin Step Type` on type `PluginStepType` has changed to `Plugin Step Type. /hotelx/plugins/overview/`

✅  Input field `PluginStepInput.pluginsType` description changed from `` to `Indicates the plugin that will be executed.`

✅  Input field `HotelSettingsInput.testMode` description changed from `Use test access` to `This flag allows only the accesses checked as test. By default is production.`

✅  Description `` on type `MarkupRuleType` has changed to `Indicates what type of value is the markup, by percentage or is an import.`

✅  Description `Options status` on type `StatusType` has changed to `Indicartes options status`

✅  Field `Response.stats` description changed from `Application stats in string format` to `Application stats`

✅  Field `DestinationConnection.pageInfo` description changed from `` to `Indicates info about page`

✅  Field `HotelConnection.pageInfo` description changed from `` to `Indicates info about page`

✅  Input field `HotelXRoomQueryInput.access` description changed from `` to `Indicates the access that you want use.`

✅  Input field `HotelXRoomQueryInput.roomCodes` description changed from `` to `Indicates the room codes that you want filter.`

✅  Field `RoomConnection.pageInfo` description changed from `` to `Indicates info about page`

✅  Input field `HotelXCategoryQueryInput.access` description changed from `` to `Indicates the access that you want use.`

✅  Input field `HotelXCategoryQueryInput.categoryCodes` description changed from `` to `Indicates the category codes that you want filter.`

✅  Field `CategoryConnection.pageInfo` description changed from `` to `Indicates info about page`

✅  Input field `HotelXBoardQueryInput.access` description changed from `` to `Indicates the access that you want use.`

✅  Input field `HotelXBoardQueryInput.boardCodes` description changed from `` to `Indicates the board codes that you want filter.`

✅  Field `BoardConnection.pageInfo` description changed from `` to `Indicates info about page`

✅  Field `HotelXQuery.mapping` description changed from `` to `Returns map codes of a group. You can get hotel map, room map, and board map.`

✅  Field `HotelXQuery.bookingStatusService` description changed from `TODO: me no understand...
Returns status of the booking service.` to `Returns status of the booking service.`

✅  Field `ProductData.apis` description changed from `` to `A Product has many APIs`

✅  Description `` on type `Product` has changed to `An APIs collection.`

✅  Field `Product.updatedAt` description changed from `` to `Date updated`

✅  Field `Product.createdAt` description changed from `` to `Date created`

✅  Field `Product.error` description changed from `` to `Errors that abort services`

✅  Field `Operation.updatedAt` description changed from `` to `Date updated`

✅  Field `Operation.createdAt` description changed from `` to `Date created`

✅  Field `Operation.error` description changed from `` to `Errors that abort services`

✅  Description `` on type `APIData` has changed to ``

✅  Field `APIData.operations` description changed from `` to `which operations are asigned this API?`

✅  Field `APIData.resources` description changed from `` to `which resources are asigned this API?`

✅  Field `APIData.groups` description changed from `` to `which groups are asigned this API?`

✅  Field `APIData.label` description changed from `` to `API label`

✅  Field `APIData.isEditable` description changed from `` to `Is API Editable or not.`

✅  Field `APIData.code` description changed from `` to `API Code`

✅  Field `APIData.id` description changed from `` to `API ID`

✅  Field `API.updatedAt` description changed from `` to `Date updated`

✅  Field `API.createdAt` description changed from `` to `Date created`

✅  Field `API.error` description changed from `` to `Errors that abort services`

✅  Field `ResourceData.roles` description changed from `` to `which roles are asigned or are possibles in this resource?`

✅  Field `ResourceData.apis` description changed from `` to `which API have asigned this resource?`

✅  Description `` on type `Resource` has changed to `Resources are those used in APIs and Products.`

✅  Field `Resource.updatedAt` description changed from `` to `Date updated`

✅  Field `Resource.createdAt` description changed from `` to `Date created`

✅  Field `Resource.error` description changed from `` to `Errors that abort services`

✅  Description for enum value `RoleType.SPECIFIC` changed from `` to `Allows a User to make othen kind of operation with the resource. Defined by API.`

✅  Description for enum value `RoleType.EXECUTOR` changed from `` to `Allows a User to make use of reources only for extecutations queries.`

✅  Description for enum value `RoleType.ADMIN` changed from `` to `Allows a User to make All (changes) to the resource`

✅  Description for enum value `RoleType.EDITOR` changed from `` to `Allows a User to make Mutations (changes) to the resource data`

✅  Description for enum value `RoleType.VIEWER` changed from `` to `Allows a User to make Queries of resources, but not change any resource data`

✅  Field `RoleData.resources` description changed from `` to `Resources used`

✅  Field `RoleData.special` description changed from `` to `Special permission`

✅  Field `RoleData.isSpecial` description changed from `` to `Has any other non-basic permission/s?`

✅  Field `RoleData.isExecutable` description changed from `` to `Has resource Executable permission?`

✅  Field `RoleData.isEnable` description changed from `` to `Is role enabled or not?`

✅  Field `RoleData.isDelete` description changed from `` to `Has resource Delete permission?`

✅  Field `RoleData.isUpdate` description changed from `` to `Has resource Update permission?`

✅  Field `RoleData.isRead` description changed from `` to `Has resource Create permission?`

✅  Field `RoleData.isCreate` description changed from `` to `Has resource Create permission?`

✅  Description `` on type `Role` has changed to `Permissions determine what operations are allowed on a resource`

✅  Field `Role.updatedAt` description changed from `` to `Date updated`

✅  Field `Role.createdAt` description changed from `` to `Date created`

✅  Field `Role.error` description changed from `` to `Errors that abort services`

✅  Field `MemberData.roles` description changed from `` to `which roles the member has in?`

✅  Field `MemberData.groups` description changed from `` to `which groups the member is in?`

✅  Field `MemberData.type` description changed from `` to `Member Type`

✅  Description `` on type `Member` has changed to `You grant access to members which can be either:
Users: A developer, administrator or any other person from your Organization who interacts with the TravelgateX Platform. An email address can be used as the identity of a User.
Service Accounts: An application (Client) instead of an individual User. If you prefer, you can create as many Service Accounts as needed to represent different logical components of your application.`

✅  Field `Member.updatedAt` description changed from `` to `Date updated`

✅  Field `Member.createdAt` description changed from `` to `Date created`

✅  Field `Member.isActive` description changed from `` to `Errors that abort services`

✅  Field `GroupData.roles` description changed from `` to `You can grant roles to members, which define the roles catalog for a group.`

✅  Field `GroupData.clients` description changed from `` to `Clients resources in a group`

✅  Field `GroupData.suppliers` description changed from `` to `Supplier resources in a group`

✅  Field `GroupData.accesses` description changed from `` to `Access resources in a group`

✅  Field `GroupData.allMembers` description changed from `` to `Response all members in this group's childrens (hierarchically),`

✅  Field `GroupData.managedGroups` description changed from `` to `Responses all groups in its group's childrens (hierarchically),`

✅  Field `GroupData.apis` description changed from `` to `APIs assigned to this group. Products have APIs.`

✅  Field `GroupData.members` description changed from `` to `Only responses members in this group`

✅  Field `GroupData.children` description changed from `` to `Only responses children.(non-hierarchically)`

✅  Description `` on type `Group` has changed to `Groups are organized hierarchically.`

✅  Field `Group.updatedAt` description changed from `` to `Date updated`

✅  Field `Group.createdAt` description changed from `` to `Date created`

✅  Field `Group.error` description changed from `` to `Errors that abort services`

✅  Field `OrganizationData.clients` description changed from `` to `Clients resources in a organization`

✅  Field `OrganizationData.suppliers` description changed from `` to `Supplier resources in a organization`

✅  Field `OrganizationData.accesses` description changed from `` to `Access resources in a organization`

✅  Field `OrganizationData.allMembers` description changed from `` to `Response all members in this group's childrens (hierarchically)`

✅  Field `OrganizationData.products` description changed from `` to `Products asign to a organization`

✅  Field `OrganizationData.apis` description changed from `` to `APIs assigned to this group. Products have APIs.`

✅  Field `OrganizationData.children` description changed from `` to `Only responses folders.(non-hierarchically)`

✅  Description `` on type `Organization` has changed to `Organization node is the root node in the hierarachy, the folders are the children of the organization and the products are the children of the folders.`

✅  Field `Organization.updatedAt` description changed from `` to `Date updated`

✅  Field `Organization.createdAt` description changed from `` to `Date created`

✅  Field `Organization.error` description changed from `` to `Errors that abort services`

✅  Description `` on type `Client` has changed to `Client identifies who is making the request and holds the configuration assigned to it.`

✅  Description `` on type `Supplier` has changed to `A Supplier is a Partner who is connected to TravelgateX on the supply side in order to sell their product to connected Buyers`

✅  Description `` on type `Access` has changed to `An Access is a set of credentials and configuration in order to access the system of a Supplier.`

✅  Description `` on type `AdminQuery` has changed to `The admin query root of TravelgateX's GraphQL interface.`

✅  Field `pointsOfSale` was added to object type `AdminQuery`

✅  Description `` on type `Query` has changed to `The query root of TravelgateX's GraphQL interface.`

✅  Field `Query.mappea` description changed from `` to `The Mappea product query root for implementing GraphQL query.`

✅  Field `Query.stats` description changed from `` to `The Stats product query root for implementing GraphQL query.`

✅  Field `Query.hotelX` description changed from `` to `The hotelX product query root for implementing GraphQL query.`

✅  Field `Query.admin` description changed from `` to `The admin query root of TravelgateX's for implementing GraphQL query.`

✅  Field `paymentX` was added to object type `Query`

✅  Type `PaymentXBookingInfoDeleteInput` was added

✅  Type `PointOfSaleInput` was added

✅  Type `PaymentXBookingInfoInput` was added

✅  Type `PaymentXStoreCardInput` was added

✅  Type `PaymentXMutation` was added

✅  Type `PaymentXBookingInfoFilterInput` was added

✅  Type `ExpireDate` was added

✅  Type `CVC` was added

✅  Type `CardNumber` was added

✅  Type `PaymentCard` was added

✅  Type `PaymentXBookingInfo` was added

✅  Type `StoredCardData` was added

✅  Type `StoredCard` was added

✅  Type `StoredCardEdge` was added

✅  Type `StoredCardConnection` was added

✅  Type `PaymentXQuery` was added

✅  Type `PointOfSaleFilter` was added

✅  Type `PointOfSaleData` was added

✅  Type `PointOfSale` was added

✅  Type `PointOfSaleEdge` was added

✅  Type `PointOfSaleConnection` was added

## 2018-06-01

🛑  Input field `member` was added to input object type `DeleteMemberInput`

🛑  Input field `code` was removed from input object type `DeleteMemberInput`

🛑  Input field `UpdateGroupInput.api` changed type from `String!` to `ID!`

🛑  Input field `group` was added to input object type `UpdateGroupInput`

🛑  Input field `method` was removed from input object type `UpdateGroupInput`

🛑  Input field `code` was removed from input object type `UpdateGroupInput`

🛑  Input field `UpdateMemberInput.group` changed type from `String!` to `ID!`

🛑  Input field `resources` was added to input object type `UpdateMemberInput`

🛑  Input field `role` was added to input object type `UpdateMemberInput`

🛑  Input field `member` was added to input object type `UpdateMemberInput`

🛑  Input field `resource` was removed from input object type `UpdateMemberInput`

🛑  Input field `roles` was removed from input object type `UpdateMemberInput`

🛑  Input field `code` was removed from input object type `UpdateMemberInput`

🛑  Input field `CreateGroupInput.type` changed type from `GroupType!` to `GroupTypeInput!`

🛑  Input field `group` was added to input object type `CreateGroupInput`

🛑  Input field `code` was removed from input object type `CreateGroupInput`

🛑  Input field `CreateMemberInput.group` changed type from `String!` to `ID!`

🛑  Input field `resources` was added to input object type `CreateMemberInput`

🛑  Input field `role` was added to input object type `CreateMemberInput`

🛑  Input field `resource` was removed from input object type `CreateMemberInput`

🛑  Input field `roles` was removed from input object type `CreateMemberInput`

🛑  Input field `code` was removed from input object type `CreateMemberInput`

🛑  Input field `CreateOrganizationInput.user` changed type from `String!` to `ID!`

🛑  Input field `organization` was added to input object type `CreateOrganizationInput`

🛑  Input field `code` was removed from input object type `CreateOrganizationInput`

🛑  Argument `method: Method!` added to field `AdminMutation.updateGroup`

🛑  `Warning` object type no longer implements `AdviseMessage` interface

🛑  Field `AdviseMessage.code` changed type from `String!` to `ID!`

🛑  `Error` object type no longer implements `AdviseMessage` interface

🛑  Field `error` was removed from object type `Node`

✅  Input field `member` was added to input object type `CreateMemberInput`

✅  Input field `testMode` was added to input object type `HotelSettingsInput`

✅  Input field `HotelCriteriaSearchInput.hotels` changed type from `[String!]!` to `[String!]`

✅  Input field `HotelCriteriaSearchInput.hotels` description changed from `Contains the list of hotels's ID` to `Hotel Codes.`

✅  Input field `destinations` was added to input object type `HotelCriteriaSearchInput`

✅  Field `isEditable` was added to object type `APIData`

✅  Argument `type: RoleType` added to field `ResourceData.roles`

✅  Field `isEditable` was added to object type `ResourceData`

✅  Field `isEditable` was added to object type `RoleData`

✅  Field `type` was added to object type `RoleData`

✅  Argument `type: RoleType` added to field `MemberData.roles`

✅  Argument `type: GroupType` added to field `GroupData.children`

✅  Field `roles` was added to object type `GroupData`

✅  Field `managedGroups` was added to object type `GroupData`

✅  Deprecation reason on field `AdviseMessage.type` has changed from `` to `deprecated from 2018-06-01.`

✅  Field `AdviseMessage.type` description changed from `TODO:

Error type: The following types are valid:

XXX: asd asdñoajskd lña ld` to `Error type: The following types are valid:`

✅  Field `AdviseMessage.code` description changed from `TODO:

Error code: The following codes can be returned:

XXX: XXXXXXXXX XXXXXX` to `AM code: The following codes can be returned:`

✅  Field `correlationID` was added to object type `AdviseMessage`

✅  Field `external` was added to object type `AdviseMessage`

✅  Field `level` was added to object type `AdviseMessage`

✅  Argument `type: RoleType` added to field `AdminQuery.roles`

✅  Deprecation reason on field `Query.mapping` has changed from `deprecated from 2017-11-21. You can find it in query at Admin` to `deprecated from 2017-11-21. You can find it in query at HotelX`

✅  Deprecation reason on field `Query.defaultSettings` has changed from `deprecated from 2017-11-21. You can find it in query at Admin` to `deprecated from 2017-11-21. You can find it in query at HotelX`

✅  Type `ExternalMessage` was added

✅  Type `AdviseMessageLevel` was added

✅  Type `GroupTypeInput` was added

✅  Type `RoleType` was added

## 2018-05-21

🛑  Input field `AccessInput.name` changed type from `String` to `String!`

✅  Input field `IdAccessConfigurationInput.isActive` description changed from `Indicates if the access is active.` to `Indicates if Access is active`

✅  Input field `ConnectUserGroupInput.isActive` description changed from `Indicates if the connect user is active for its connect user` to `Indicates if the connect user is active for its connected user`

✅  Input field `ConnectUserGroupInput.groupCode` description changed from `group code of the group related to this connect user` to `Group code of the group related to this connected user`

✅  Input field `AccessConfigurationInput.isActive` description changed from `Indicates if the access is active.` to `Indicates if Access is active`

✅  Description `Pair of groups and accesses. All accesses returned will belong to all the groups in groupCodes` on type `GroupAccess` has changed to `Pairs of Groups and Accesses. All Accesses returned will belong to all the Groups in groupCodes.`

✅  Field `GroupAccess.groupCodes` description changed from `group identifiers` to `Group identifiers`

✅  Field `ConnectUserGroup.isActive` description changed from `Indicates if the connect user is active for its connect user` to `Indicates if the connect user is active for its connected user`

✅  Field `ConnectUserGroup.groupCode` description changed from `group code of the group related to this connect user` to `Group code of the group related to this connected user`

✅  Description `data related to a connect user and its groups` on type `ConnectUser` has changed to `Data related to a connected user and its groups`

✅  Field `ConnectUser.connectUserGroups` description changed from `connect user's related data of its groups` to `Connected user's related data based on its groups`

✅  Field `ConnectUser.isActive` description changed from `indicates whether a connect user is active` to `Indicates whether a connected user is active`

✅  Field `ConnectUser.code` description changed from `unique connect user of a supplier` to `Unique connected user of a supplier`

✅  Description `Context type, for now only Code is necessary` on type `Context` has changed to `Context type. Currently, only Code is necessary.`

✅  Field `Context.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `Context.createdAt` description changed from `Create date` to `Date created`

✅  Field `Context.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Input field `DefaultSettingsBusinessRulesInput.businessRulesType` description changed from `Different business rules to filter the options that you are interested.` to `Different business rules for filtering options that you are interested in`

✅  Input field `DefaultSettingsBusinessRulesInput.optionsQuota` description changed from `Options quota per avail. Numbers of options wanted by avail.` to `Options quota per availability; numbers of options based on availability`

✅  Input field `DefaultSettingsInput.businessRules` description changed from `Business rules.` to `Business rules`

✅  Input field `DefaultSettingsInput.market` description changed from `Targeted zone, country or point of sale to be used in request.` to `Targeted zone, country or point-ofsale-to be used in request.`

✅  Input field `DefaultSettingsInput.nationality` description changed from `Nationality of the guest (use ISO3166_1_alfa_2).` to `Nationality of the guest (use ISO3166_1_alfa_2)`

✅  Input field `DefaultSettingsInput.currency` description changed from `Currency requested if supported by supplier.` to `Currency requested if supported by supplier`

✅  Input field `DefaultSettingsInput.language` description changed from `Language to be used in request.` to `Language to be used in request`

✅  Input field `DefaultSettingsInput.connectUser` description changed from `This field is got only if the authorization header is of the type JWT. It is used for to change the user that

has been set by default in the preload.` to `This field is occurs only if the authorization header is of the type JWT.. It is used for to change the user that

has been set by default in the preload.`

✅  Field `HotelCancelPayload.warnings` description changed from `Potentially  harmful situations or errors that won't force the service to abort` to `Potentially harmful situations or errors, but ones that will not forcibly abort the service`

✅  Field `HotelCancelPayload.errors` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `HotelCancelPayload.auditData` description changed from `Data sent & received in the supplier's native format.` to `Data sent and received in the supplier's native format.`

✅  Description `Holder object that contains the pax name and surname.` on type `HolderInput` has changed to `Holder object that contains the occupant's (pax's) name and surname.`

✅  Input field `HotelBookInput.language` description changed from `Language to be used in request.` to `Language to be used in request`

✅  Field `HotelBookPayload.warnings` description changed from `Potentially  harmful situations or errors that won't force the service to abort` to `Potentially harmful situations or errors, but ones that will not forcibly abort the service`

✅  Field `HotelBookPayload.errors` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `HotelBookPayload.auditData` description changed from `Data sent & received in the supplier's native format.` to `Data sent and received in the supplier's native format.`

✅  Input field `UpdateClientInput.isActive` description changed from `Indicates whether a Client is active` to `Indicates whether a Client is active or inactive`

✅  Input field `CreateClientInput.isActive` description changed from `Indicates whether a Client is active` to `Indicates whether a Client is active or inactive`

✅  Input field `AccessInput.shared` description changed from `Parent access if Shared access.` to `Parent Access if Shared Access.`

✅  Input field `AccessInput.rateRules` description changed from `Business rules types for the access.` to `Business rule types for the Access`

✅  Input field `AccessInput.markets` description changed from `Markets allowed for the access.` to `Markets allowed for the Access`

✅  Input field `AccessInput.parameters` description changed from `List of parameters for additional information.` to `List of parameters for additional information`

✅  Input field `AccessInput.urls` description changed from `Specific Urls` to `Specific URLs`

✅  Input field `AccessInput.password` description changed from `Password for the connection.` to `Password for the connection`

✅  Input field `AccessInput.user` description changed from `User code to connect to supplier.` to `User code to connect to supplier`

✅  Input field `AccessInput.isTest` description changed from `Indicates if this access can be used for testing or not` to `Indicates if Access can be used for testing or not`

✅  Input field `AccessInput.supplier` description changed from `supplier for this access.` to `Supplier for this Access`

✅  Input field `AccessInput.isActive` description changed from `Indicates if the access is active.` to `Indicates if Access is active`

✅  Input field `AccessInput.name` description changed from `Access descriptive name` to `Access descriptive unique name`

✅  Field `AdminMutation.deleteGroup` description changed from `Delete group and members from this group.` to `Delete group and members from this group`

✅  Field `AdminMutation.deleteMember` description changed from `Delete member from specific group.` to `Delete a member from specific group`

✅  Field `AdminMutation.updateGroup` description changed from `Update group adding or removing apis.` to `Update group additions or remove APIs`

✅  Field `AdminMutation.updateMember` description changed from `Update member adding or removing roles.` to `Update member additions or remove roles`

✅  Field `AdminMutation.createGroup` description changed from `Create group. Group "owner" is optional.` to `Create group; group "owner" is optional`

✅  Field `AdminMutation.createMember` description changed from `Create member. Requires specific group and role.` to `Create member; requires specific group and role`

✅  Field `AdminMutation.deleteSupplierFromGroup` description changed from `Removes Supplier visibility to groups.` to `Removes Supplier visibility to groups`

✅  Field `AdminMutation.grantSupplierToGroup` description changed from `Grants Supplier visibility to a group.` to `Grants Supplier visibility to a group`

✅  Field `AdminMutation.deleteAccessFromGroup` description changed from `Removes Access visibility to groups.` to `Removes Access visibility to groups`

✅  Field `AdminMutation.grantAccessToGroup` description changed from `Grants Access visibility to a group.` to `Grants Access visibility to a group`

✅  Field `AdminMutation.updateAccess` description changed from `Updates an Access.` to `Updates an Access`

✅  Field `AdminMutation.createAccess` description changed from `Creates an Access.` to `Creates an Access`

✅  Field `createOrganization` was added to object type `AdminMutation`

✅  Description `Mutations are operations that change or update data in the server.` on type `Mutation` has changed to `Mutations are operations that change or update data on the server`

✅  Description `List of business rules to filter the options that you are interested.` on type `BusinessRules` has changed to `LList of business rules for filtering options based on your interests.`

✅  Field `BusinessRules.businessRulesType` description changed from `Different business rules to filter the options that you are interested.` to `Different business rules for filtering options that you are interested in`

✅  Field `BusinessRules.optionsQuota` description changed from `Options quota per avail. Numbers of options wanted by avail.` to `Options quota per availability; numbers of options based on availability`

✅  Field `DefaultSettings.businessRules` description changed from `Business rules.` to `Business rules`

✅  Field `DefaultSettings.market` description changed from `Targeted zone, country or point of sale to be used in request.` to `Targeted zone, country or point-ofsale-to be used in request.`

✅  Field `DefaultSettings.nationality` description changed from `Nationality of the guest (use ISO3166_1_alfa_2).` to `Nationality of the guest (use ISO3166_1_alfa_2)`

✅  Field `DefaultSettings.currency` description changed from `Currency requested if supported by supplier.` to `Currency requested if supported by supplier`

✅  Field `DefaultSettings.language` description changed from `Language to be used in request.` to `Language to be used in request`

✅  Field `DefaultSettings.connectUser` description changed from `This field is got only if the authorization header is of the type JWT. It is used for to change the user that

has been set by default in the preload.` to `This field is occurs only if the authorization header is of the type JWT.. It is used for to change the user that

has been set by default in the preload.`

✅  Input field `organizations` was added to input object type `StatsFilterInput`

✅  Field `Stats.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `Stats.createdAt` description changed from `Create date` to `Date created`

✅  Field `Stats.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `Mapping.errors` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Input field `CriteriaBookingDatesInput.end` description changed from `End date.

Format: yyyy-MM-dd.` to `End date.

Format: YYYY-MM-DD.`

✅  Input field `CriteriaBookingDatesInput.start` description changed from `Start date.

Format: yyyy-MM-dd.` to `Start date.

Format: YYYY-MM-DD.`

✅  Description for enum value `BookStatusType.UNKNOWN` changed from `The reservation was completed but due to a supplier error or a timeout, the reservation status is unknown.

It is the client’s responsibility to check if the booking is OK` to `The reservation was completed but due to a supplier error or a timeout, the reservation status is unknown.

It is the client’s responsibility to check if the booking is OK`

✅  Description for enum value `BookStatusType.ON_REQUEST` changed from `The reservation was completed but the product is still not available, so the reservation goes into a waiting list.

It is the client’s responsibility to check if the booking is OK` to `The reservation was completed but the product is still not available, so the reservation goes into a waiting list.

It is the client’s responsibility to check if the booking is OK`

✅  Field `BookingRoom.description` description changed from `Description about the room.` to `Description about the room`

✅  Field `BookingRoom.code` description changed from `Indicates the room code.` to `Indicates the room code`

✅  Field `BookingRoom.occupancyRefId` description changed from `ID reference to the occupancy.` to `ID reference to the occupancy`

✅  Field `BookingHotel.occupancies` description changed from `List of occupancies of the request.` to `List of occupancies for the request`

✅  Field `BookingHotel.checkOut` description changed from `Check-out date for the booking.

Format: yyyy-MM-dd` to `Check-out date for the booking.

Format: YYYY-MM-DD`

✅  Field `BookingHotel.checkIn` description changed from `Check-in date for the booking.

Format: yyyy-MM-dd` to `Check-in date for booking

Format: YYYY-MM-DD`

✅  Field `BookingHotel.creationDate` description changed from `Creation date of the booking.

Format: yyyy-MM-dd` to `Creation date of the booking.

Format: YYYY-MM-DD`

✅  Description `Holder object that contains the pax name and surname.` on type `Holder` has changed to `Holder object that contains the occupant's (pax's) name and surname.`

✅  Description `Contains information about booking.` on type `HotelBookingDetail` has changed to `Contains information about booking`

✅  Field `HotelBookingDetail.addOns` description changed from `Extra information about the option.` to `Additional information about the option`

✅  Field `HotelBooking.warnings` description changed from `Potentially  harmful situations or errors that won't force the service to abort` to `Potentially harmful situations or errors, but ones that will not forcibly abort the service`

✅  Field `HotelBooking.errors` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `HotelBooking.auditData` description changed from `Data sent & received in the supplier's native format.` to `Data sent and received in the supplier's native format.`

✅  Input field `HotelCriteriaQuoteInput.language` description changed from `Language to be used in request.` to `Language to be used in request`

✅  Description `Contains information about quote.` on type `HotelOptionQuote` has changed to `Contains information about quote(s)`

✅  Field `HotelOptionQuote.addOns` description changed from `Extra information about the option.` to `Additional information about the option`

✅  Field `HotelQuote.warnings` description changed from `Potentially  harmful situations or errors that won't force the service to abort` to `Potentially harmful situations or errors, but ones that will not forcibly abort the service`

✅  Field `HotelQuote.errors` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `HotelQuote.auditData` description changed from `Data sent & received in the supplier's native format.` to `Data sent and received in the supplier's native format.`

✅  Description `Urls Input` on type `UrlsInput` has changed to `URLs Input`

✅  Input field `UrlsInput.book` description changed from `Specific Url for Valuation method.` to `Specific URL for Valuation method.`

✅  Input field `UrlsInput.quote` description changed from `Specific Url for Reservation method.` to `Specific URL for Reservation method.`

✅  Input field `UrlsInput.search` description changed from `Specific Url for Availability method.` to `Specific URL for Availability method.`

✅  Input field `ConfigurationInput.markets` description changed from `Source markets allowed for the access.` to `Source Markets allowed for the Access`

✅  Input field `ConfigurationInput.urls` description changed from `Url or endpoint for the connection.` to `URL or endpoint for the connection.`

✅  Input field `ConfigurationInput.password` description changed from `Password for the connection.` to `Password for the connection`

✅  Input field `SettingsBaseInput.businessRules` description changed from `Business rules.` to `Business rules`

✅  Input field `HotelSettingsInput.businessRules` description changed from `Business rules.` to `Business rules`

✅  Input field `HotelSettingsInput.client` description changed from `This field is got only if the authorization header is of the type JWT. It is used to change the user that has been set by default in the preload.` to `This field is occurs only if the authorization header is of the type JWT.. It is used to change the user that has been set by default in the preload.`

✅  Input field `HotelSettingsInput.connectUser` description changed from `This field is got only if the authorization header is of the type JWT. It is used to change the user that has been set by default in the preload.

@deprecated(reason: "deprecated from 2018-03-19. Redundant.")` to `This field is occurs only if the authorization header is of the type JWT.. It is used to change the user that has been set by default in the preload.

@deprecated(reason: "deprecated from 2018-03-19. Redundant.")`

✅  Description `Criteria of search contains destination, travel dates and the number of pax in each room.

You must preload the other fields in our system by complete the fields absents.` on type `HotelCriteriaSearchInput` has changed to `Search criteria contains destination, travel dates and the number of pax in each room.

You must preload the other fields in our system by complete the fields absents.`

✅  Input field `HotelCriteriaSearchInput.market` description changed from `Targeted zone, country or point of sale to be used in request.` to `Targeted zone, country or point-ofsale-to be used in request.`

✅  Input field `HotelCriteriaSearchInput.nationality` description changed from `Nationality of the guest (use ISO3166_1_alfa_2).` to `Nationality of the guest (use ISO3166_1_alfa_2)`

✅  Input field `HotelCriteriaSearchInput.currency` description changed from `Currency requested if supported by supplier.` to `Currency requested if supported by supplier`

✅  Input field `HotelCriteriaSearchInput.language` description changed from `Language to be used in request.` to `Language to be used in request`

✅  Input field `HotelCriteriaSearchInput.occupancies` description changed from `For multi room bookings, this array will contain multiple elements (rooms).

For each room you have to specify its own occupancy.` to `For multi-room bookings, this array will contain multiple elements (rooms).

For each room you have to specify its own occupancy.`

✅  Input field `HotelCriteriaSearchInput.hotels` description changed from `Contains the list of hotels's ID.` to `Contains the list of hotels's ID`

✅  Input field `HotelCriteriaSearchInput.checkOut` description changed from `Check-out, date for the booking.

Format: yyyy-MM-dd` to `Check-out, booking date

Format: YYYY-MM-DD`

✅  Input field `HotelCriteriaSearchInput.checkIn` description changed from `Check-in date for the booking.

Format: yyyy-MM-dd` to `Check-in date for booking

Format: YYYY-MM-DD`

✅  Description `Extra information about the option.` on type `AddOn` has changed to `Additional information about the option`

✅  Field `AddOn.value` description changed from `Contains the AddOn values.` to `Contains AddOn values.`

✅  Field `AddOn.key` description changed from `Contains the keyword/Id to identify the AddOn.` to `Contains keyword/ID to identify the AddOn.`

✅  Description `Extra information about the option.` on type `AddOns` has changed to `Additional information about the option`

✅  Deprecation reason on field `AddOns.distribute` has changed from `deprecated from 2018-03-12. You can find it in distribution AddOn.` to `You can find it in distribution AddOn`

✅  Description `Contains information about a cancel penalty.` on type `CancelPenalty` has changed to `Contains information for cancellation penalities..`

✅  Field `CancelPenalty.value` description changed from `Value of the cancel policy.` to `Value of the cancellation policy`

✅  Field `CancelPenalty.currency` description changed from `Currency used in the cancel policy.` to `Currency used in the cancellation policy`

✅  Field `CancelPenalty.penaltyType` description changed from `Type of penalty. This can be Nights, Percent or Import.` to `Type of penalty; this can be Nights, Percent or Import`

✅  Field `CancelPenalty.hoursBefore` description changed from `Cancellation fees applicable x number of hours before the check in date.` to `Cancellation fees applicable X number of hours before the check-in date`

✅  Description `Contains information about a cancel policy.` on type `CancelPolicy` has changed to `Information about a policy cancellation.`

✅  Field `CancelPolicy.cancelPenalties` description changed from `List of cancel penalties.` to `List of cancellation penalties`

✅  Field `CancelPolicy.refundable` description changed from `Indicates if the option is refundable or not.` to `Indicates if the option is refundable or non-refundable`

✅  Field `Bed.shared` description changed from `Specifies if the bed is shared or not.` to `Specifies if the bed is shared or not`

✅  Field `Bed.count` description changed from `Indicates number of beds in the room.` to `Indicates number of beds in a room`

✅  Field `Bed.description` description changed from `Description about the bed.` to `Description about the bed`

✅  Field `Bed.type` description changed from `Specifies the bed type.` to `Specifies the bed type`

✅  Description `Informs about the currency of origin, and the rate applied over result returned by the supplier.` on type `Exchange` has changed to `Provides information about the currency of original, and its rate applied over the results returned by the Supplier.`

✅  Field `Exchange.rate` description changed from `Informs about the rate applied over result.` to `Provides information about the rate applied over results`

✅  Field `Exchange.currency` description changed from `Informs about the currency of origin.` to `Provide information about the currency of origin`

✅  Description `Price indicates the value of the room/option.

Supplements and/or surcharges could be or not included into the price, will be verified with the nodes Supplements/Surcharges.` on type `Price` has changed to `Price indicates the value of the room/option.

Supplements and/or surcharges can be included into the price, and will be verified with nodes Supplements/Surcharges.`

✅  Field `Price.exchange` description changed from `Informs about the currency of origin, and the rate applied over result returned by the supplier.

This information is mandatory.` to `Provides information about the currency of original, and its rate applied over the results returned by the Supplier.

This information is mandatory.`

✅  Field `Room.description` description changed from `Description about the room.` to `Description about the room`

✅  Field `Room.code` description changed from `Indicates the room code.` to `Indicates the room code`

✅  Field `Room.occupancyRefId` description changed from `ID reference to the occupancy.` to `ID reference to the occupancy`

✅  Description `An option includes hotel information, meal plan, total price, conditions and room description.` on type `HotelOptionSearch` has changed to `An option includes hotel information, meal plan, total price, conditions and room description`

✅  Field `HotelOptionSearch.addOns` description changed from `Extra information about the option.` to `Additional information about the option`

✅  Field `HotelOptionSearch.occupancies` description changed from `List of occupancies of the request.` to `List of occupancies for the request`

✅  Description `Criteria of search contains destination, travel dates and the number of pax in each room.` on type `CriteriaSearch` has changed to `Search criteria contains destination, travel dates and the number of pax in each room.`

✅  Field `CriteriaSearch.market` description changed from `Targeted zone, country or point of sale to be used in request.` to `Targeted zone, country or point-ofsale-to be used in request.`

✅  Field `CriteriaSearch.nationality` description changed from `Nationality of the guest (use ISO3166_1_alfa_2).` to `Nationality of the guest (use ISO3166_1_alfa_2)`

✅  Field `CriteriaSearch.currency` description changed from `Currency requested if supported by supplier.` to `Currency requested if supported by supplier`

✅  Field `CriteriaSearch.language` description changed from `Language to be used in request.` to `Language to be used in request`

✅  Field `CriteriaSearch.occupancies` description changed from `For multi room bookings, this array will contain multiple elements (rooms).

For each room you have to specify its own occupancy.` to `For multi-room bookings, this array will contain multiple elements (rooms).

For each room you have to specify its own occupancy.`

✅  Field `CriteriaSearch.hotels` description changed from `Contains the list of hotels's ID.` to `Contains the list of hotels's ID`

✅  Field `CriteriaSearch.checkOut` description changed from `Check-out, date for the booking.

Format: yyyy-MM-dd` to `Check-out, booking date

Format: YYYY-MM-DD`

✅  Field `CriteriaSearch.checkIn` description changed from `Check-in date for the booking.

Format: yyyy-MM-dd` to `Check-in date for booking

Format: YYYY-MM-DD`

✅  Description `Data sent & received in the supplier’s native format.` on type `AuditData` has changed to `Data sent and received in the supplier’s native format.`

✅  Field `AuditData.transactions` description changed from `List of transactions data.` to `List of transactions data`

✅  Field `Response.auditData` description changed from `Data sent & received in the supplier’s original format.` to `Data sent and received in the supplier’s original format.`

✅  Description `Results of Avail Hotel. Contains all the available options for a given date and itinerary.` on type `HotelSearch` has changed to `Results from Avail Hotel; contains all the available options for a given date and itinerary`

✅  Field `HotelSearch.errors` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `HotelSearch.auditData` description changed from `Data sent & received in the supplier's native format.` to `Data sent and received in the supplier's native format.`

✅  Field `Destination.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `Destination.createdAt` description changed from `Create date` to `Date created`

✅  Field `Destination.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `Media.updatedAt` description changed from `Update date.` to `Date updated.`

✅  Description `Something, such as a swimming pool or shopping centre, that is intended to make life more pleasant or comfortable for the people.` on type `Amenity` has changed to `An Amenity is defined as something intended to make life more pleasant or comfortable for people. Examples include: swimming pools, shopping centers, etc.`

✅  Field `Amenity.type` description changed from `Indicates the type of the amenity.` to `Indicates the type of Amenity.`

✅  Field `DestinationData.type` description changed from `Indicates destination type, zone or city.` to `Indicates destination type, zone or city`

✅  Field `DestinationData.parent` description changed from `Parent destination code.` to `Parent destination code`

✅  Field `DestinationData.closestDestinations` description changed from `Closest destinations, indicates the minimal destinations.` to `Closest destinations, indicates destinations in proximity`

✅  Field `DestinationData.available` description changed from `Indicates if you can search by destination.` to `Indicates if you can search by destination`

✅  Description `Indicates the location of the hotel.` on type `Location` has changed to `Indicates the location of the hotel`

✅  Field `HotelData.location` description changed from `Indicates the location of the hotel.` to `Indicates the location of the hotel`

✅  Field `Hotel.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `Hotel.createdAt` description changed from `Create date` to `Date created`

✅  Field `Hotel.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `RoomData.roomCode` description changed from `Code of the hotel in the Supplier selected.` to `Code of the hotel in the Supplier selected`

✅  Field `RoomData.code` description changed from `Internal code to perform availability.` to `Internal code for checking availability`

✅  Field `RoomStatic.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `RoomStatic.createdAt` description changed from `Create date` to `Date created`

✅  Field `RoomStatic.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `CategoryData.categoryCode` description changed from `Code of the hotel in the Supplier selected.` to `Code of the hotel based on the Supplier selected`

✅  Field `CategoryData.code` description changed from `Internal code to perform availability.` to `Internal code for checking availability`

✅  Field `Category.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `Category.createdAt` description changed from `Create date` to `Date created`

✅  Field `Category.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `BoardData.boardCode` description changed from `Code of the hotel in the Supplier selected.` to `Code of the hotel in the Supplier selected`

✅  Field `BoardData.code` description changed from `Internal code to perform availability.` to `Internal code for checking availability`

✅  Description `Board Type` on type `Board` has changed to `Board type.`

✅  Field `Board.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `Board.createdAt` description changed from `Create date` to `Date created`

✅  Field `Board.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `ClientData.isActive` description changed from `Indicates whether a Client is active` to `Indicates whether a Client is active or inactive`

✅  Field `Client.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `Client.createdAt` description changed from `Create date` to `Date created`

✅  Field `Client.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `Urls.book` description changed from `Specific Url for Valuation method.` to `Specific URL for Valuation method.`

✅  Field `Urls.quote` description changed from `Specific Url for Reservation method.` to `Specific URL for Reservation method.`

✅  Field `Urls.search` description changed from `Specific Url for Availability method.` to `Specific URL for Availability method.`

✅  Field `Supplier.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `Supplier.createdAt` description changed from `Create date` to `Date created`

✅  Field `Supplier.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `AccessData.shared` description changed from `Parent access if Shared access` to `Parent Access if Shared Access`

✅  Field `AccessData.rateRules` description changed from `Business rules types for the access.` to `Business rule types for the Access`

✅  Field `AccessData.markets` description changed from `Markets allowed for the access.` to `Markets allowed for the Access`

✅  Field `AccessData.parameters` description changed from `List of parameters for additional information.` to `List of parameters for additional information`

✅  Field `AccessData.urls` description changed from `Specific Urls` to `Specific URLs`

✅  Field `AccessData.password` description changed from `Password for the connection.` to `Password for the connection`

✅  Field `AccessData.user` description changed from `User code to connect to supplier.` to `User code to connect to supplier`

✅  Field `AccessData.isTest` description changed from `Indicates if this access can be used for testing or not` to `Indicates if Access can be used for testing or not`

✅  Field `AccessData.supplier` description changed from `supplier for this access.` to `Supplier for this Access`

✅  Field `AccessData.isActive` description changed from `Indicates if the access is active.` to `Indicates if Access is active`

✅  Field `Node.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `Node.createdAt` description changed from `Create date` to `Date created`

✅  Field `Node.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `Access.updatedAt` description changed from `Update date` to `Date updated`

✅  Field `Access.createdAt` description changed from `Create date` to `Date created`

✅  Field `Access.error` description changed from `Errors that will lead the service to abort` to `Errors that abort services`

✅  Field `AdminQuery.operations` description changed from `Operations list. Specify operations codes to filter operations.` to `Operations list; specify operations codes to filter operations.`

✅  Field `AdminQuery.roles` description changed from `Roles list. Specify role codes to filter roles.` to `Roles list; specify role codes to filter roles.`

✅  Field `AdminQuery.resources` description changed from `Resources list. Specify resource codes to filter resources.` to `Resources list; specify resource codes to filter resources.`

✅  Field `AdminQuery.apis` description changed from `Apis list. Specify api codes to filter apis.` to `Apis list; specify api codes to filter apis.`

✅  Field `AdminQuery.groups` description changed from `Groups list. Specify group codes to filter groups.` to `Groups list; specify group codes to filter groups.`

✅  Field `AdminQuery.members` description changed from `Members list. Specify member codes to filter members.` to `Members list; specify member codes to filter members.`

✅  Field `AdminQuery.products` description changed from `Products list. Specify product codes to filter products.` to `Members list; specify member codes to filter members`

✅  Field `AdminQuery.organizations` description changed from `Organizations list. Specify organization codes to filter organizations.` to `Organizations list; specify organization codes to filter organizations`

✅  Field `AdminQuery.serviceApi` description changed from `Obtain a ServiceApi` to `Obtain a ServiceAPI`

✅  Field `AdminQuery.accesses` description changed from `Obtain a list of accesses for a filter.` to `Obtain a list of accesses for a filter`

✅  Type `OrganizationTemplate` was added

✅  Type `CreateOrganizationInput` was added

## 2018-05-16

🛑  Type for argument `input` on field `MappeaMutation.mapSupplier` changed from `MappeaXMapSupplierInput!` to `MappeaMapSupplierInput!`

🛑  Type for argument `input` on field `MappeaMutation.uploadFile` changed from `MappeaXUploadFileInput!` to `MappeaUploadFileInput!`

🛑  Type for argument `input` on field `MappeaMutation.confirmUpload` changed from `MappeaXConfirmUploadInput!` to `MappeaConfirmUploadInput!`

🛑  Type for argument `input` on field `MappeaQuery.getMappeaStats` changed from `MappeaXGetMappeaStatsInput!` to `MappeaGetMappeaStatsInput!`

🛑  Field `RoleData.label` changed type from `String!` to `String`

🛑  Type `MappeaXEditOrganizationInput` was removed

🛑  Type `MappeaXAddOrganizationInput` was removed

🛑  Type `MappeaXMapSupplierInput` was removed

🛑  Type `MappeaXUploadFileInput` was removed

🛑  Type `MappeaXSupplierConfirmedInput` was removed

🛑  Type `MappeaXConfirmUploadInput` was removed

🛑  Type `MappeaXGetMappeaStatsInput` was removed

✅  Input field `AccessInput.name` changed type from `String!` to `String`

✅  Field `deleteClientFromGroup` was added to object type `AdminMutation`

✅  Field `grantClientToGroup` was added to object type `AdminMutation`

✅  Field `label` was added to object type `ProductData`

✅  Field `label` was added to object type `OperationData`

✅  Field `label` was added to object type `APIData`

✅  Field `label` was added to object type `ResourceData`

✅  Field `label` was added to object type `MemberData`

✅  Field `label` was added to object type `GroupData`

✅  Field `label` was added to object type `GroupCommonData`

✅  Field `label` was added to object type `OrganizationData`

✅  Type `MappeaEditOrganizationInput` was added

✅  Type `MappeaAddOrganizationInput` was added

✅  Type `MappeaMapSupplierInput` was added

✅  Type `MappeaUploadFileInput` was added

✅  Type `MappeaSupplierConfirmedInput` was added

✅  Type `MappeaConfirmUploadInput` was added

✅  Type `MappeaGetMappeaStatsInput` was added

## 2018-05-03

✅  Field `asserts` was added to object type `StatsInfo`

✅  Field `clients` was added to object type `GroupData`

✅  Field `suppliers` was added to object type `GroupData`

✅  Field `clients` was added to object type `GroupCommonData`

✅  Field `suppliers` was added to object type `GroupCommonData`

✅  Field `clients` was added to object type `OrganizationData`

✅  Field `suppliers` was added to object type `OrganizationData`

✅  Input field `serviceAPI` was added to input object type `SupplierFilter`

✅  Input field `isActive` was added to input object type `SupplierFilter`

✅  Input field `groupID` was added to input object type `SupplierFilter`

✅  Type `StatsAssert` was added

## 2018-05-02

🛑  Enum value `BOOK` was removed from enum `OperationType`

⚠️  Enum value `BOOKING` was added to enum `OperationType`

✅  Input field `accesses` was added to input object type `StatsFilterInput`

✅  Field `accesses` was added to object type `GroupData`

✅  Field `allMembers` was added to object type `GroupData`

✅  Field `accesses` was added to object type `GroupCommonData`

✅  Field `allMembers` was added to object type `GroupCommonData`

✅  Field `accesses` was added to object type `OrganizationData`

✅  Field `allMembers` was added to object type `OrganizationData`

## 2018-04-25

⚠️  Field `DestinationData.type` changed type from `DestinationType!` to `DestinationType`

⚠️  Field `type` was removed from object type `OperationData`

⚠️  Field `memberType` was removed from object type `MemberData`

⚠️  Argument `Last: Int` was removed from field `AdminQuery.clients`

⚠️  Argument `Last: Int` was removed from field `AdminQuery.suppliers`

⚠️  Argument `Last: Int` was removed from field `AdminQuery.accesses`

✅  Enum value `ORG` was added to enum `GroupType`

✅  Field `types` was added to object type `OperationData`

✅  Argument `type: OperationType` added to field `APIData.operations`

✅  Argument `type: GroupType` added to field `APIData.groups`

✅  Argument `type: GroupType` added to field `MemberData.groups`

✅  Field `type` was added to object type `MemberData`

✅  Argument `type: MemberType` added to field `GroupData.members`

✅  Argument `type: MemberType` added to field `GroupCommonData.members`

✅  Argument `type: MemberType` added to field `OrganizationData.members`

✅  Argument `type: OperationType` added to field `AdminQuery.operations`

✅  Argument `last: Int` added to field `AdminQuery.clients`

✅  Argument `last: Int` added to field `AdminQuery.suppliers`

✅  Argument `last: Int` added to field `AdminQuery.accesses`

## 2018-04-24

⚠️  Input field `groupUsers` was removed from input object type `StatsFilterInput`

✅  Input field `StatsFilterInput.operation` changed type from `[ServiceOperationType!]!` to `[ServiceOperationType!]`

✅  Field `OperationData.type` description changed from `` to `type: [OperationType!]!`

✅  Field `error` was added to object type `ServiceApi`

✅  Input field `name` was added to input object type `ClientFilter`

✅  Type `OperationType` was added

## 2018-04-18

⚠️  Type for argument `input` on field `AdminMutation.updateClient` changed from `ClientInput!` to `UpdateClientInput!`

⚠️  Type for argument `input` on field `AdminMutation.createClient` changed from `ClientInput!` to `CreateClientInput!`

⚠️  Field `StatsData` was removed from object type `Stats`

⚠️  `ClientInput` was removed

✅  Field `statsData` was added to object type `Stats`

✅  Type `MappeaXEditOrganizationInput` was added

✅  Type `MappeaXAddOrganizationInput` was added

✅  Type `UpdateClientInput` was added

✅  Type `CreateClientInput` was added

## 2018-04-17

⚠️  Field `MemberData.roles` changed type from `String` to `RoleConnection`

✅  Field `mappea` was added to object type `Mutation`

✅  Field `operations` was added to object type `APIData`

✅  Field `children` was added to object type `GroupData`

✅  Argument `codes: [ID!]` added to field `MemberData.roles`

✅  Argument `after: String` added to field `MemberData.roles`

✅  Argument `before: String` added to field `MemberData.roles`

✅  Argument `last: Int` added to field `MemberData.roles`

✅  Argument `first: Int` added to field `MemberData.roles`

✅  Field `children` was added to object type `GroupCommonData`

✅  Field `children` was added to object type `OrganizationData`

✅  Field `travelOperation` was added to object type `ServiceOperation`

✅  Field `operations` was added to object type `AdminQuery`

✅  Input field `HotelSettingsInput.client` description changed from `This field is got only if the authorization header is of the type JWT. It is used for to change the user that

has been set by default in the preload.` to `This field is got only if the authorization header is of the type JWT. It is used to change the user that has been set by default in the preload.`

✅  Input field `HotelSettingsInput.connectUser` description changed from `This field is got only if the authorization header is of the type JWT. It is used for to change the user that

has been set by default in the preload.

@deprecated(reason: "deprecated from 2018-03-19. Redundant.")` to `This field is got only if the authorization header is of the type JWT. It is used to change the user that has been set by default in the preload.

@deprecated(reason: "deprecated from 2018-03-19. Redundant.")`

✅  Input field `group` was added to input object type `HotelSettingsInput`

✅  Field `mappea` was added to object type `Query`

✅  Field `stats` was added to object type `Query`

✅  Type `LegacyData` was added

✅  Type `MappeaXMapSupplierInput` was added

✅  Type `MappeaXUploadFileInput` was added

✅  Type `SupplierDetected` was added

✅  Type `UploadFileData` was added

✅  Type `UploadFileResponse` was added

✅  Type `MappeaXSupplierConfirmedInput` was added

✅  Type `MappeaXConfirmUploadInput` was added

✅  Type `OnlyStatusResponse` was added

✅  Type `MappeaMutation` was added

✅  Type `MappeaXGetMappeaStatsInput` was added

✅  Type `GetMappeaStatsData` was added

✅  Type `GetMappeaStatsResponse` was added

✅  Type `File` was added

✅  Type `GetUploadedFilesData` was added

✅  Type `GetUploadedFilesResponse` was added

✅  Type `MappeaQuery` was added

✅  Type `ServiceApiType` was added

✅  Type `StatsFilterInput` was added

✅  Type `ServiceOperationType` was added

✅  Type `StatsInfoTypes` was added

✅  Type `StatsInfo` was added

✅  Type `OperationDetailed` was added

✅  Type `Ratios` was added

✅  Type `StatsData` was added

✅  Type `Stats` was added

✅  Type `StatsEdge` was added

✅  Type `StatsConnection` was added

✅  Type `StatsQuery` was added

✅  Type `OperationData` was added

✅  Type `Operation` was added

✅  Type `OperationEdge` was added

✅  Type `OperationConnection` was added


## 2018-04-03

⚠️  Input field `accesses` was removed from input object type `ClientInput`

⚠️  Field `accesses` was removed from object type `ClientData`

✅  Input field `groupID` was added to input object type `ClientFilter`

✅  Field `serviceApi` was added to object type `AdminQuery`

✅  Description for enum value `BookStatusType.UNKNOWN` changed from `The reservation was completed but due to a supplier error or a timeout, the reservation status is unknown.

It is the clientâ€™s responsibility to check if the booking is OK` to `The reservation was completed but due to a supplier error or a timeout, the reservation status is unknown.

It is the client’s responsibility to check if the booking is OK`

✅  Description for enum value `BookStatusType.ON_REQUEST` changed from `The reservation was completed but the product is still not available, so the reservation goes into a waiting list.

It is the clientâ€™s responsibility to check if the booking is OK` to `The reservation was completed but the product is still not available, so the reservation goes into a waiting list.

It is the client’s responsibility to check if the booking is OK`

✅  Description `The information and credentials required to access the supplierâ€™s system.` on type `ConfigurationInput` has changed to `The information and credentials required to access the supplier’s system.`

✅  Description `Data sent & received in the supplierâ€™s native format.` on type `AuditData` has changed to `Data sent & received in the supplier’s native format.`

✅  Field `Response.auditData` description changed from `Data sent & received in the supplierâ€™s original format.` to `Data sent & received in the supplier’s original format.`

✅  Field `AdviseMessage.type` description changed from `TODO:

Error type: The following types are valid:

XXX: asd asdÃ±oajskd lÃ±a ld` to `TODO:

Error type: The following types are valid:

XXX: asd asdñoajskd lña ld`

✅  Type `ServiceApiFilter` was added

✅  Type `ServiceOperation` was added

✅  Type `ServiceApi` was added

## 2018-03-20

✅  Input field `HotelSettingsInput.connectUser` description changed from `This field is got only if the authorization header is of the type JWT. It is used for to change the user that
has been set by default in the preload.` to `This field is got only if the authorization header is of the type JWT. It is used for to change the user that
has been set by default in the preload.
@deprecated(reason: "deprecated from 2018-03-19. Redundant.")`

✅  Input field `client` was added to input object type `HotelSettingsInput`

## 2018-03-14

✅  Deprecation reason on field `AddOns.distribute` has changed from `` to `deprecated from 2018-03-12. You can find it in distribution AddOn.`

✅  Field `distribution` was added to object type `AddOns`

✅  Type `AddOn` was added

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

✅  Description `TGX Platform API implementation` on type `Provider` has changed to `Temporary type to use only during SQL server's lifetime`

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
