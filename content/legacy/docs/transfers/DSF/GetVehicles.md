---
title: GetVehicles
keywords: transfers, get vehicles, vehicles
search: Transfers - Data Structure - GetVehicles
sidebar: mydoc_sidebar
permalink: /docs/transfers/DSF/GetVehicles
---



### Method Goals


This method aims to retrieve a list of the vehicles that operate the
transfers.



### Remarks




### GetVehiclesRQ Example


~~~xml
    <GetVehiclesRQ>
        <timeoutMilliseconds>60000</timeoutMilliseconds>
        <source>
            <languageCode>en</languageCode>
        </source>
        <filterAuditData>
            <registerTransactions>false</registerTransactions>
        </filterAuditData>
        <Configuration codeProvider = "XXXXX">
            <Credentials user = "" password = "">
                <UrlGeneric>http://example.com</UrlGeneric>
            </Credentials>
            <Attributes/>
        </Configuration>
    </GetVehiclesRQ>
~~~


### GetVehiclesRQ Description




| **Element**		| **Number**	| **Type**	| **Description**	|
| --------------------- | ------------- | ------------- | --------------------- |
| GetVehiclesRQ		| 1          	|		| Root node.		|



### GetVehiclesRS Example


~~~xml
    <GetVehiclesRS>
        <auditData>
            <timeStamp>2014-10-30T11:34:03.0050926+00:00</timeStamp>
            <processTimeMilliseconds>0</processTimeMilliseconds>
        </auditData>
        <operationImplemented>true</operationImplemented>
        <Vehicles>
            <Vehicle id = "11" name = "Autocar"/>
            <Vehicle id = "9" name = "Minibus"/>
            <Vehicle id = "12" name = "Coche de lujo"/>
            <Vehicle id = "13" name = "Monovolumen"/>
            <Vehicle id = "10" name = "Microbus"/>
            <Vehicle id = "7" name = "Coche adaptado"/>
            <Vehicle id = "6" name = "Coche"/>
        </Vehicles>
    </GetVehiclesRS>
~~~


### GetVehiclesRS Description




| **Element**			| **Number**	| **Type**	| **Description**			|
| ----------------------------- | ------------- | ------------- | ------------------------------------- |
| GetVehiclesRS			| 1          	|		| Root node.     			|
| Vehicles   			| 1          	|		| List of Vehicles.			|
| Vehicles/Vehicle		| 1          	|		| Type of vehicle.			|
| @id        			| 1    		| String	| Code of the vehicle. 			|
| @name      			| 1    		| String	| Name of the vehicle.			|

