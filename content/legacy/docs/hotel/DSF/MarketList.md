---
title: MarketList
keywords: hotel, data structure, market list, market, markets, list
search: Hotel - Data Structure - MarketList
sidebar: mydoc_sidebar
permalink: /docs/hotel/DSF/MarketList
---



### Method Goals


This method aims to return a list of the available Markets, which will
be used in the availability request.



### Request Format


The request does not require any elements - empty request.



### Response Format


The result returns a list of *Market*.



### Remarks


The maximum time permitted in our system before the connection is closed is  **240000** milliseconds.
Most suppliers use a standard ISO - 3166_1_alfa_2, but it depends on each individual supplier.



### MarketListRQ Example


~~~xml
    <MarketListRQ>
    </MarketListRQ>
~~~


### MarketListRQ Description




| **Element**		| **Number** | **Type** | **Description**		|
| --------------------- | ---------- | -------- | ----------------------------- |
| MarketListRQ	| 1          |		| Root node.			|



### MarketListRS Example


~~~xml
    <MarketListRS>
        <UpgradeUTCDate>2016-10-18T13:18:03+02:00</UpgradeUTCDate>
        <Markets>
            <Market>
                <Code>ES</Code>
                <Name>Spain</Name>
                <GroupCode>Europe</GroupCode>
            </Market>
            <Market>
                <Code>PT</Code>
                <Name>Portugal</Name>
                <GroupCode>Europe</GroupCode>
            </Market>
            …
            <Market/>
        </Markets>
    </MarketListRS>
~~~


### MarketListRS Description




| **Element**		| **Number** | **Type** | **Description**	|
| --------------------- | ---------- | -------- | --------------------- |
| MarketListRS/UpgradeUTCDate		| 1       	|	DateTime	| Indicates the update date of the information in UTC format.	|
| MarketListRS/Markets	| 1          |		| Root node, list of markets.		|
| Market	| 1..n          	| 		| Market.			|
| Market/Code	| 1         	| String		| Code.			|
| Market/Name	| 1          	| String		| Name.			|
| Market/GroupCode	| 0..1          	| String		| Indicates if the supplier groups different markets together and what the group is called.			|

**GroupCode:**

Use this option to see if the supplier groups different markets in a single group, so you can get the same prices/options if two markets belong to the same group.
                       

