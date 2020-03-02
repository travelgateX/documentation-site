---
title: Routes
keywords: transportation, data structure, flights, routes
search: Transportation - Flights - Data Structure - Routes
sidebar: mydoc_sidebar
permalink: /docs/transportation/DSF/flights/routes
---



### Method Goals

This method aims to get the availability of routes of a supplier.


### Request Format

In the request, it can be set an origin location, so the response would include only the routes which start with this origin, and an airline filtering.


### Response Format

The result returns a list of locations and for each one, a destination tree.


### Remarks

Not implemented by all suppliers. Some suppliers will return dates information for each destination tree.


### RoutesRQ Description



| **Element**						| **Number**| **Type**	| **Description**														  |
| --------------------------------- | --------- | --------- | ----------------------------------------------------------------------- |
| RoutesRQ                 		    | 1     	|			| Root node.|
| OriginLoc						    | 1      	|           | Origin location.|
| @code            			        | 1  		| String	| Location code.|
| @cityCode        			        | 1  		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.|
| @latitude					        | 0..1		| String	| Indicates the latitude coordinades.|
| @longitude				        | 0..1		| String	| Indicates the longitude coordinades.|
| @name						        | 0..1		| String	| Location long name.|
| @radius					        | 0..1		| Integer	| Area radius from location.|
| @type						        | 0..1 		| [Location Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#location-type)	| Type of station of the location|
| AirLine						    | 0..1      | String    | Airline included to filter in the response.|


### RoutesRS Description



| **Element**						| **Number**| **Type**	| **Description**															|
| --------------------------------- | --------- | ---------	| --------------------------------------------------------------------------|
| RoutesRS                 		    | 1     	|			| Root node.|
| Routes                 		    | 1     	|			| Contains a list of routes.|
| Routes/Route                 		| 1..n     	|			| Contains an origin and a destination's tree for each one.|
| Routes/Route/OriginLoc			| 1      	|           | Origin location.|
| @code            			        | 1  		| String	| Location code.|
| @cityCode        			        | 1  		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.|
| @latitude					        | 0..1		| String	| Indicates the latitude coordinades.|
| @longitude				        | 0..1		| String	| Indicates the longitude coordinades.|
| @name						        | 0..1		| String	| Location long name.|
| @radius					        | 0..1		| Integer	| Area radius from location.|
| @type						        | 0..1 		| [Location Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#location-type)	| Type of station of the location|
| Routes/Route/<br>DestinationTimeIntervals			| 1      	|           | Contains a list of destinations. Each origin can have n destinations active in different time intervals.|
| Routes/Route/<br>DestinationTimeIntervals/<br>DestinationTimeInterval			| 1..n      	|           | Periods in which this route is operative.|
| @fromDate            			    | 0..1  		| Date	| Date from this route is operative.|
| @toDate            			    | 0..1  		| Date	| Date to this route is operative.|
| Routes/Route/<br>DestinationTimeIntervals/<br>DestinationTimeInterval/<br>DestinationLoc		| 1      	|           | Destination location.|
| @code            			        | 1  		| String	| Location code.|
| @cityCode        			        | 1  		| Boolean	| If true, the field code indicates a city code, if false, it will indicate an airport code.|
| @latitude					        | 0..1		| String	| Indicates the latitude coordinades.|
| @longitude				        | 0..1		| String	| Indicates the longitude coordinades.|
| @name						        | 0..1		| String	| Location long name.|
| @radius					        | 0..1		| Integer	| Area radius from location.|
| @type						        | 0..1 		| [Location Type](https://github.com/XML-Travelgate/xtg-content-articles-pub/blob/master/docs/transportation/enum.md#location-type)	| Type of station of the location|


### Possible Operations (Examples)

