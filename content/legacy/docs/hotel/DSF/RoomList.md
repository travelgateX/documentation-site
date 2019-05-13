---
title: RoomList
keywords: hotel, data structure, room list, list
search: Hotel - Data Structure - RoomList
sidebar: mydoc_sidebar
permalink: /docs/hotel/DSF/RoomList
---



### Method Goals


This method aims to return a list of rooms, their codes as well as descriptions. 



### Request Format


The request does not require any elements - empty request.



### Response Format


The result returns a list of *RoomInfo*.



### Remarks


The maximum time permitted in our system before the connection is closed is **240000** milliseconds.

This message must be implemented solely in case the supplier does not return room description in Avail. This requirement will be indicated in *StaticConfiguration*.



### RoomListRQ Example


~~~xml
    <RoomListRQ>
    </RoomListRQ>
~~~


### RoomListRQ Description



| **Element**		| **Number**	| **Type**	| **Description**	|
| --------------------- | ------------- | ------------- | --------------------- |
| RoomListRQ 		| 1          	|		| Root node.		|
  



### RoomListRS Example


~~~xml
    <RoomListRS>
        <UpgradeUTCDate>2016-10-18T13:18:03+02:00</UpgradeUTCDate>
        <RoomsInfo>
             <RoomInfo>
                 <Code>STD</Code>
                  <Name>Standard</Name>
            </RoomInfo>
            <RoomInfo>
                <Code>ST</Code>
                <Name>Suite</Name>
            </RoomInfo>
                ...
            <RoomInfo/>
        </RoomsInfo>
    </RoomListRS>
~~~


### RoomListRS Description



| **Element**		| **Number**	| **Type**	| **Description**	|
| --------------------- | ------------- | ------------- | --------------------- |
| RoomListRS/UpgradeUTCDate		| 1       	|	DateTime	| Indicates the update date of the information in UTC format.	|
| RoomListRS/RoomsInfo 		| 1          	|		| Root node, list of rooms		|
|RoomInfo | 1..n ||Room info.|
|RoomInfo/Code | 1 | String | Code. |
|RoomInfo/Name | 1 | String | Name. |



### Detailed description 


**Room types & languages**

You can define in AvailRQ (Common Elements) which language you want the room description returned in  - as long as the supplier supports the selected language, otherwise the default language is most commonly English. The standard languages are: English & Spanish.
