+++
title = "Changelog"
pagetitle = "HotelX changelog"
description = "Contains a curated, chronologically ordered list of notable changes"
weight = 2
icon="fa-exchange"
svgicon="https://media.graphcms.com/7k0GtZyQn6QDcolRhnuQ"
alwaysopen = false
hidden = false
tags = ["products-changelog"]
+++

To make it easier for users and contributors to see precisely what notable changes have been made on HotelX product.

{{% alert theme="info" %}}All notable changes on our platform will be documented in this page.{{% /alert %}}

## 2018-07-24

{{% release-notes-container type="a"%}}
- New plugin, safety margin. You can see the documentation [here](/hotelx/plugins/safety_margin/).
{{% /release-notes-container %}}

## 2018-07-18

{{% release-notes-container type="c"%}}
- Hotel, board, room and rate maps caches are now updated synchronously. This will improve the user experience when 1st time debugging operations.
- Hotel maps cache refactoring to reduce number of cached items and cache operations.
- Hotel maps cache requests are now pipelined to reduce Round Trip Time.
{{% /release-notes-container %}}

## 2018-07-16{#20180716}

{{% release-notes-container type="f"%}}
- HotelX concepts content [examples](/hotelx/concepts/content/).
{{% /release-notes-container %}}

## 2018-07-11

{{% release-notes-container type="c"%}}
- Improvement of the [`Rooms`](/travelgatex/reference/objects/hotelxquery/) schema with paged list and max number of elements per page. By defect are 1000 rooms.
{{% /release-notes-container %}}

## 2018-07-04

{{% release-notes-container type="f"%}}
- Wrong behaviour that made options to be discarded when price in supplements was empty in [`Search`](/travelgatex/reference/objects/hotelxquery/) query.
{{% /release-notes-container %}}
