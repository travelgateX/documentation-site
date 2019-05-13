---
title: Routes
keywords: transportation, data structure, ferries, routes
search: Transportation - Ferries - Data Structure - Routes
sidebar: mydoc_sidebar
permalink: /docs/transportation/DSF/ferries/routes
---



### Method Goals


This method aims to return all the available routes for the selected
carrier.



### Request Format


This request does not require any parameters.



### Response Format


The result returns a list of Route with the corresponding time frame in
which this route is valid.



Remarks This method should be cached internally and only called once a
week and in most cases once a month.



### RoutesRQ Example


~~~xml
    <RoutesRQ>
    </RoutesRQ>
~~~


### RoutesRQ Description



| **Element**		| **Number**	| **Type**	| **Description**	|
| --------------------- | ------------- | ------------- | --------------------- |
| RoutesRQ      	| 1             |       	| Root node.		|



### RutasRS Example


~~~xml
    <RoutesRS>
       <Routes>
          <Route>
             <OriginLoc type="A" code="PAL" citycode="false" />
             <DestinationTimeIntervals>
                <DestinationTimeInterval fromDate="2012-10-07T13:29:25.0911672+02:00" toDate="0001-01-01T00:00:00">
                   <DestinationLoc type="P" code="BAR" citycode="false" />
                </DestinationTimeInterval>
                <DestinationTimeInterval fromDate="2012-10-07T13:29:25.0911672+02:00" toDate="0001-01-01T00:00:00">
                   <DestinationLoc type="P" code="VAL" citycode="false" />
                </DestinationTimeInterval>
             </DestinationTimeIntervals>
          </Route>
          <Route>
             <OriginLoc type="A" code="IBZ" citycode="false" />
             <DestinationTimeIntervals>
                <DestinationTimeInterval fromDate="2012-10-07T13:29:25.0911672+02:00" toDate="0001-01-01T00:00:00">
                   <DestinationLoc type="P" code="FOR" citycode="false" />
                </DestinationTimeInterval>
                <DestinationTimeInterval fromDate="2012-10-07T13:29:25.0911672+02:00" toDate="0001-01-01T00:00:00">
                   <DestinationLoc type="P" code="PAL" citycode="false" />
                </DestinationTimeInterval>
             </DestinationTimeIntervals>
          </Route>
       </Routes>
    </RoutesRS>
~~~


### RutasRS Description



| **Element**                        	| **Number** 	| **Type** 	| **Description**                 			|
| ------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| RutasRS                          	| 1     	|        	| Root node                    				|
| Routes                           	| 1     	|        	| List of Route objects.       				|
| Routes/Route                     	| 0..n  	|        	| Indicates an origin port and the available destinations for this origin. If the provider returns information about the period in which the route is available, it will be shown with "fromDate" and "toDate.      |
| Routes/Route/OriginLoc           	| 1     	|        	| Departure port of this route.                       	|
| @type                       		| 1     	| 1      	| Type of station of the  location indicated with A  ( AirPort ), T ( Train Station ) & P ( Port ).      |
| @code                       		| 1     	| 1      	| Port code.                   				|
| @citycode                   		| 1     	| 1      	| If true, the field code indicates a city code, if false, it will indicate an airport code.        |
| Routes/Route /DestinationTimeIntervals | 1     	|        	| List of DestinationTimeInterval.     			|
| Routes/Route /DestinationTimeIntervals/DestinationTimeInterval | 1    |       | Destination port for this route.   		|
| @fromDate                   		| 1     	| Date   	| Indicates when this route becomes active. A default value "0001-01-01T00:00:00" will be returned if the provider doesn't return this information.        |
| @toDate                     		|       	|        	| Indicates when this route  becomes inactive. A default value "0001-01-01T00:00:00" will be returned if the provider doesn't return this information.        |



