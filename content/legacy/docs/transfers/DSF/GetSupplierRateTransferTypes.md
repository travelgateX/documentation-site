---
title: GetSupplierRateTransfersTypes
keywords: transfers, get supplier rates, transfers types
search: Transfers - Data Structure - GetSupplierRateTransfersTypes
sidebar: mydoc_sidebar
permalink: /docs/transfers/DSF/GetSupplierRateTransfersTypes
---



### Method Goals


This method aims to retrieve a list of the suppliers including their
rates.



### Remarks




### GetSupplierRateTransfersTypesRQ Example


~~~xml
    <GetSupplierRateTransferTypesRQ>
    <timeoutMilliseconds>60000</timeoutMilliseconds>
    <source>
    <languageCode>en</languageCode>
    </source>
    <filterAuditData>
    <registerTransactions>false</registerTransactions>
    </filterAuditData>
    <Configuration codeProvider = "XXXXX">
    <Credentials user = "" password = "">
    <UrlGeneric>http://examples-com</UrlGeneric>
    </Credentials>
    <Attributes/>
    </Configuration>
    </GetSupplierRateTransferTypesRQ>
~~~


### GetSuppliersRateTransfersTypesRQ Description




| **Element**					| **Number**	| **Type**	| **Description**		|
| --------------------------------------------- | ------------- | ------------- | ----------------------------- |
| GetSupplierRateTransfersTypesRQ		| 1          	|		| Root node.			|



### GetSupplierRateTransfersTypesRS Example


~~~xml
    <GetSupplierRateTransferTypesRS>
    <auditData>
    <timeStamp>2014-10-30T11:32:29.8466879+00:00</timeStamp>
    <processTimeMilliseconds>0</processTimeMilliseconds>
    </auditData>
    <operationImplemented>true</operationImplemented>
    <Suppliers>
    <Supplier id = "ext-3">
        <Rates>
            <Rate id = "7" name = "OWShuttle"/>
            <Rate id = "6" name = "RT"/>
            <Rate id = "3" name = "Rate1"/>
            <Rate id = "19" name = "RateAudit"/>
            <Rate id = "13" name = "RateAudit"/>
            <Rate id = "4" name = "Rate2"/>
            <Rate id = "15" name = "Comas Privado 5 - 8 RT"/>
            <Rate id = "11" name = "Comas Privado 13 - 20"/>
            <Rate id = "9" name = "Comas Privado 5 - 8"/>
            <Rate id = "8" name = "Comas Privado 1 - 4"/>
            <Rate id = "16" name = "Comas Privado 9 - 12 RT"/>
            <Rate id = "12" name = "Comas Privado 21 - 31"/>
            <Rate id = "17" name = "Comas Privado 13 - 20 RT"/>
            <Rate id = "14" name = "Comas Privado 1 - 4 RT"/>
            <Rate id = "10" name = "Comas Privado 9 - 12"/>
            <Rate id = "18" name = "Comas Privado 21 - 31 RT"/>
        </Rates>
    </Supplier>
    <Supplier id = "ext-2"/>
    <Supplier id = "ext-4"/>
    </Suppliers>
    </GetSupplierRateTransferTypesRS>
~~~


### GetSupplierRateTransfersTypesRS Description




| **Element**					| **Number**	| **Type**	| **Description**					|
| --------------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| GetSupplierRateTransfers TypesRS		| 1      	|		| Root node.						|
| GetSupplierRateTransfers TypesRQ/Suppliers	| 1      	|		| List of suppliers.					|
| Suppliers/Supplier				| 1      	|		| Supplier.						|
| @id              				| 1  		| String	| Indicates the supplier identifier.			|
| @territoryId     				| 1  		| String	| The identifier of the territory where the supplier operates.	|
| Supplier/Rates   				| 1  		| String	| List of rates.					|
| Supplier/Rates/Rate				|		|		|							|
| @id              				| 1  		| String	| Code of the rate.					|
| @name            				| 1  		| String	| Name of the rate.					|
| TransferTypes    				| 1      	|		| Contains a list of TransferType. Each TransferType contains information about the types of transfer that are available for this rate.	|
| TransferTypes/TransferType			| 1..n    	|		| Contains information related to a type of transfer.	|
| @id              				| 1  		| String	| Code of the TransferType.				|
| @name            				| 1  		| String	| Name of the TransferType.				|
| TransferType/Vehicles				| 1      	|		| Contains a list of vehicles included in this TransferType category.	|
| TransferType/Vehicles/Vehicle			| 1..n    	|		| Contains a vehicle name and its id.			|
| @id              				| 1  		| String	| Code of the vehicle.					|
| @name            				| 1  		| String	| Name of the vehicle.					|

