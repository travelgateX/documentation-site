+++
title = "Changelog"
pagetitle = "HotelX changelog"
description = "Contains an accurated, chronologically-ordered list of notable changes"
weight = 2
icon="fa-exchange"
svgicon="https://media.graphcms.com/7k0GtZyQn6QDcolRhnuQ"
alwaysopen = false
hidden = false
tags = ["products-changelog"]
+++

Easily accessible log of notable changes to HotelX API
{{% alert theme="info" %}}All notable changes in our platform will be documented on this page.{{% /alert %}}

## 2019-07-02
{{% release-notes-container type="a"%}}
- New field in book, cancel and booking respone. booking/reference/hotel.
{{% /release-notes-container %}}
{{% release-notes-container type="f"%}}
- Client token in batch and booking flow.
{{% /release-notes-container %}}
## 2019-06-27
{{% release-notes-container type="a"%}}
- Categories in Hotel-Category are grouped by group.
- Internal system improvements. 
{{% /release-notes-container %}}

## 2019-06-26
{{% release-notes-container type="a"%}}
- New warning type in book. EMPTY_PRICE is returned when the supplier doesn't return the price and we use the price obtained in quote. 
{{% /release-notes-container %}}

## 2019-06-19
{{% release-notes-container type="a"%}}
- New field in book, cancel and booking respone. booking/billingSupplierCode.
- New blacklist file format. The values has changed to allow new features. You can see the documentation [here](https://docs.travelgatex.com/hotelx/plugins/black-list/). 
- New field for the commision file. Now you can put clienToken for each rule. You can see the documentation [here](https://docs.travelgatex.com/hotelx/plugins/net-price/). 
- Internal system improvements. 
{{% /release-notes-container %}}


## 2019-06-13
{{% release-notes-container type="a"%}}
- New fields in search respone. room/features, room/supplierCode and ratPlan/supplierCode.
{{% /release-notes-container %}}

{{% release-notes-container type="s"%}}
- Security improvements.
{{% /release-notes-container %}}

## 2019-05-27
{{% release-notes-container type="a"%}}
- Added searchPrice in Quote and quotePrice in Book
{{% /release-notes-container %}}

## 2019-05-13
{{% release-notes-container type="f"%}}
- Internal monitorization
{{% /release-notes-container %}}

## 2019-05-09
{{% release-notes-container type="f"%}}
- Fix error when default settings are not available
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Improve stats
{{% /release-notes-container %}}

## 2019-05-02
{{% release-notes-container type="a"%}}
- Added field filters in Hotel List
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Deprecate type in GeonameData
{{% /release-notes-container %}}

## 2019-03-07
{{% release-notes-container type="a"%}}
- Added CurrencyX management for the cancel penalties.
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Bug when the cancel penalty type is empty or invalid format.
- Mandatory field always returns FALSE when fee is EXCLUSIVE type in Surcharge node.
{{% /release-notes-container %}}

## 2019-02-26
{{% release-notes-container type="a"%}}
- New plugin, add parameter. You can see the documentation [here](https://docs.travelgatex.com/hotelx/plugins/add_parameterx/).
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Management of the default currency settings.
{{% /release-notes-container %}}

## 2019-02-12
{{% release-notes-container type="a"%}}
- Type HotelData introduces new field "GiataData". 
- Internal, better performant, REST endpoint in Search operation. Field filters have been added to minimize the throughput, this wasn't necessary with Graphql, filtered fields that have a relation with Legacy API are now also sent as filter.
{{% /release-notes-container %}}

{{% release-notes-container type="c"%}}
Expire date of payment card in Book now accept the following format: month: 1 digit or 2 digits, year: 4 digits or 2 digits
{{% /release-notes-container %}}

## 2019-02-04
{{% release-notes-container type="f"%}}
- Fix Hotel List and Hotel Room EOF error, when elastic returns empty result.
{{% /release-notes-container %}}

## 2019-01-28
{{% release-notes-container type="f"%}}
- Fix the error of destinationSearcher when elastic returns empty value.
{{% /release-notes-container %}}

## 2019-01-23
{{% release-notes-container type="f"%}}
- Fix the error of Hotel List and Hotel Room when requesting more than one code.
{{% /release-notes-container %}}


## 2019-01-14

{{% release-notes-container type="a"%}}
- Upgrade permission check in all microservices
- Environment variable health check
- Add parameter in Hotel-Quote and Hotel-Book
{{% /release-notes-container %}}

## 2018-12-04
{{% release-notes-container type="f"%}}
- Fix booking timeout issue
{{% /release-notes-container %}}

{{% release-notes-container type="a"%}}
- Added warning if any option has been discarded by CommissionX and CurrencyX plugins
{{% /release-notes-container %}}

## 2018-11-29
{{% release-notes-container type="f"%}}
- Fix filter maxSize Destination
{{% /release-notes-container %}}

{{% release-notes-container type="c"%}}
- Adapt Hotel-Room, Hotel-Board, Hotel-Category to new organization.
{{% /release-notes-container %}}

{{% release-notes-container type="a"%}}
- Added log if commission Fee is -1
{{% /release-notes-container %}}

## 2018-11-27

{{% release-notes-container type="c"%}}
- Ambiguous warning message in Book when supplier has not returned a price
- Removed error nodes from Groups and Organization nodes
- Removed log if amount is 0 in Fees node
{{% /release-notes-container %}}

## 2018-11-20
{{% release-notes-container type="a"%}}
- Added geonames in Hotel List
- Added access code in Book log in some special cases of commission
{{% /release-notes-container %}}

{{% release-notes-container type="c"%}}
- Partially synchronous resource caches in Hotel-Quote, Hotel-Book, Hotel-Cancel, Hotel-Booking 
{{% /release-notes-container %}}

## 2018-11-19
{{% release-notes-container type="f"%}}
- Fix Stats
- Fix Hotels requested stats in Access and Transaction spans in some cases where the count wasn't correct
{{% /release-notes-container %}}

{{% release-notes-container type="c"%}}
- Margin plugin compares net commission in order to decide discarding or mantaining an option.
{{% /release-notes-container %}}

## 2018-11-08
{{% release-notes-container type="f"%}}
- Fix blacklist (by supplier) plugin
{{% /release-notes-container %}}

## 2018-11-02
{{% release-notes-container type="f"%}}
- Fix price discrepancy between Quote and Book
{{% /release-notes-container %}}

## 2018-10-02
{{% release-notes-container type="a"%}}
- Allow relay at the Query Hotels
- Count field in HotelConnection to retrieve the number of HotelEdges that match the filter. Pagination does not affect Count.
{{% /release-notes-container %}}

## 2018-09-25
{{% release-notes-container type="a"%}}
- Status tipification to be able to differentiate from critical to non-critical external services
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Commission and currency rates are now kept unchanged between Quote and Book
{{% /release-notes-container %}}

{{% release-notes-container type="c"%}}
- Operation and Access processes have been updated to register times of their different execution steps and their processed options.
- Transactions to worker are now monitorized in their own span with supplier's communication times, parsing times and processed options.
{{% /release-notes-container %}}

## 2018-09-06
{{% release-notes-container type="f"%}}
- Fix apply Markups to net price
{{% /release-notes-container %}}

## 2018-09-04
{{% release-notes-container type="f"%}}
- Fix currency bug inside markups, in Quote and Book
{{% /release-notes-container %}}

## 2018-09-03
{{% release-notes-container type="f"%}}
- Fix Exchange node empty if not CurrencyX (see doc in https://docs.travelgatex.com/hotelx/plugins/converter/)
- Fix bugs in Quote
{{% /release-notes-container %}}
{{% release-notes-container type="c"%}}
- Improve reponse time and service
{{% /release-notes-container%}}

## 2018-08-22
{{% release-notes-container type="a"%}}
- Settings heritage. [Guide](https://docs.travelgatex.com/hotelx/concepts/settings/)
- Plugins filter
{{% /release-notes-container %}}
{{% release-notes-container type="f"%}}
- Fix bugs
{{% /release-notes-container %}}

## 2018-08-21
{{% release-notes-container type="a"%}}
- New input field in Hotels Query filter. This allows to filter the response by hotel's country. [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#2018-08-21)

{{% /release-notes-container %}}

## 2018-07-24

{{% release-notes-container type="a"%}}
- New plugin, safety margin. You can see the documentation [here](/hotelx/plugins/safety_margin/).
{{% /release-notes-container %}}

## 2018-07-18

{{% release-notes-container type="c"%}}
- Hotel, board, room and rate maps caches are now updated synchronously. This will improve the user's experience when 1st time debugging operations.
- Hotel maps cache refactoring to reduce the number of cached items and cached operations.
- Hotel maps cached requests are now pipelined to reduce Round Trip Time.
{{% /release-notes-container %}}

## 2018-07-16{#20180716}

{{% release-notes-container type="f"%}}
- HotelX concepts content [examples](/hotelx/concepts/content/).
{{% /release-notes-container %}}

## 2018-07-11

{{% release-notes-container type="c"%}}
- Improvement of the [`Rooms`](/travelgatex/reference/objects/hotelxquery/) Schema with paginated list and max number of elements per page. By default: 1000 rooms.
{{% /release-notes-container %}}

## 2018-07-04

{{% release-notes-container type="f"%}}
- Wrong behaviour that made options to be discarded when price in supplements was empty in [`Search`](/travelgatex/reference/objects/hotelxquery/) query.
{{% /release-notes-container %}}
