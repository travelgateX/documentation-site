---
title: Cancellation
keywords: transportation, data structure, flights, cancellation
search: Transportation - Flights - Data Structure - Cancellation
sidebar: mydoc_sidebar
permalink: /docs/transportation/DSF/flights/cancel
---



### Method Goals


This method aims to cancel a booking.



### Request Format


The request requires the booking code or locator.



### Response Format


The result returns empty response



### Remarks


Not implemented by all suppliers



### CancellationRQ Description



| **Element**			| **Number**	| **Type**	| **Description**			|
| ----------------------------- | ------------- | ------------- | ------------------------------------- |
| CancellationRQ              	| 1     	|		| Root node.				|
| Locator                     	| 1     	|	String	| Contains the booking's locator that want to be cancelled	|
| CancellationCosts           	| 0..1    	|	Decimal	| Contains the amount of cancellation costs.	|



### CancellationRS Description


| **Element**				| **Number**	| **Type**	| **Description**					
| ------------------------------------- | ------------- | ------------- | ------------------------------------------------------------- |
| CancellationRS                	| 1    		|		| Root node.										|

