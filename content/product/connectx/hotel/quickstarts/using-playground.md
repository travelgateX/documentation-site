+++
title = "Quickstart Using Playground"
description = ""
weight = 1
alwaysopen = false
+++

This page shows you how to perform basic hotel book using GraphQL Playground.

### Before you begin
1. Follow the steps in [Creating an access token](/admin/security/authentication/#creating-an-access-token) to create your API Key.
2. [Check connectivity] (/graphql-api/travelgatex-graphql-api/#communicating-with-graphql) for your API Key.
3. Open [Sample Playground](https://graphqlbin.com/JYRtB) and modify `HTTP HEADERS` field Authorization with your API Key.

### Search Hotel
1. Click on `search` tab
2. Modify `Query Variables` with valid dates and send the request.

### Quote Hotel
1. Click on `quote` tab
2. In `Query Variables` modify `optionRefId` with option `id` value returned in search response and send the request.

### Book Hotel
1. Click on `hotelBook` tab
2. In `Query Variables` modify `optionRefId` with `optionRefId` value returned in quote response and send the request.
3. Next other information you can chek for book `supplier reference`
