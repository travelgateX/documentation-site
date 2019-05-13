---
title: GetSupplements
keywords: transfers, get supplements, supplements
search: Transfers - Data Structure - GetSupplements
sidebar: mydoc_sidebar
permalink: /docs/transfers/DSF/GetSupplements
---



### Method Goals


This method aims to retrieve a list of the supplements that can be added
to a product.



### Remarks




### GetSupplementsRQ Example


~~~xml
    <GetSupplementsRQ>
        <timeoutMilliseconds>60000</timeoutMilliseconds>
        <source>
            <languageCode>en</languageCode>
        </source>
        <filterAuditData>
            <registerTransactions>false</registerTransactions>
        </filterAuditData>
        <Configuration codeProvider = "XXXX">
            <Credentials user = "" password = "">
                <UrlGeneric>http://example.com</UrlGeneric>
            </Credentials>
            <Attributes/>
        </Configuration>
    </GetSupplementsRQ>
~~~


### GetSupplementsRQ Description




| **Element**			| **Number**	| **Type**	| **Description**		|
| ----------------------------- | ------------- | ------------- | ----------------------------- |
| GetSupplementsRQ		| 1          	|		| Root node.			|



### GetSupplementsRS Example


~~~xml
    <GetSupplementsRS>
        <auditData>
            <timeStamp>2014-10-30T11:31:22.5565555+00:00</timeStamp>
            <processTimeMilliseconds>0</processTimeMilliseconds>
        </auditData>
        <operationImplemented>true</operationImplemented>
        <Supplements>
            <Supplement id = "3" name = "Palos de Golf"/>
            <Supplement id = "2" name = "Material Deportivo"/>
            <Supplement id = "5" name = "Maleta extra"/>
            <Supplement id = "4" name = "Instrumentos musicales"/>
            <Supplement id = "6" name = "Tabla de surf"/>
            <Supplement id = "1" name = "Guitarra"/>
        </Supplements>
    </GetSupplementsRS>
~~~


### GetSupplementsRS Description




| **Element**				| **Number**	| **Type**	| **Description**						|
| ------------------------------------- | ------------- | ------------- | ------------------------------------------------------------- |
| GetSupplementsRS 			| 1 		| 		| Root node.							|
| Supplements 				| 1 		| 		| List of supplements.						|
| Supplements/Supplement 		| 1 		|  		| Supplement 							|
| @id 					| 1 		| String 	| Code of the supplement.					|
| @name 				| 1 		| String 	| Name of the supplement.					|

