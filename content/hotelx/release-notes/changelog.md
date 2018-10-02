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

It makes it easier for users and contributors to see the most notable changes that have been made on HotelX product.

{{% alert theme="info" %}}All notable changes on our platform will be documented on this page.{{% /alert %}}

## 2018-10-02
{{% release-notes-container type="a"%}}
- Allow relay at the query hotel
- Count field in HotelConnection to retrieve the number of HotelEdges that match the filter, pagination doesn't affect Count.
{{% /release-notes-container %}}

## 2018-09-25
{{% release-notes-container type="a"%}}
- Status tipification to be able to differentiate from critical to non-critical external services
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Commission and currency rates are now keep unchanged between Quote and Book
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
- Improvement of the [`Rooms`](/travelgatex/reference/objects/hotelxquery/) Schema with paginated list and max number of elements per page. By defect are 1000 rooms.
{{% /release-notes-container %}}

## 2018-07-04

{{% release-notes-container type="f"%}}
- Wrong behaviour that made options to be discarded when price in supplements was empty in [`Search`](/travelgatex/reference/objects/hotelxquery/) query.
{{% /release-notes-container %}}
