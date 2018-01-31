+++
title = "Quickstart"
pagetitle = ""
description = "HotelX Quickstart"
icon = "fa-clock-o"
weight = 2
alwaysopen = false
+++

This page shows you how to perform a basic hotel booking using [GraphQL Playground](https://api.travelgatex.com/).

### Before Starting

1. Follow the steps in [Creating an API Key](/travelgatex/security/overview#creating-an-api-key) to get your API Key.
2. [Check the connectivity](/travelgatex/overview/#making-requests) of your API Key.
3. Open [the sample Playground](https://www.graphqlbin.com/mnOsA) and modify `HTTP HEADERS` field Authorization with your API Key.

## Step by Step

### Search a Hotel

1. Click on the `search` tab.
2. Modify `Query Variables` with valid dates and send the request.

### Quote a Hotel

1. Click on the `quote` tab.
2. In `Query Variables` modify `optionRefId` with option `id` value returned in search response and send the request.

### Book a Hotel

1. Click on the `hotelBook` tab.
2. In `Query Variables` modify `optionRefId` with `optionRefId` value returned in quote response and send the request.
3. Next other information you can chek for book `Seller reference`
