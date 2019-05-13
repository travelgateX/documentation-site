---
title: GetTransferTypes
keywords: transfers, get transfers, transfers types
search: Transfers - Data Structure - GetTransferTypes
sidebar: mydoc_sidebar
permalink: /docs/transfers/DSF/GetTransferTypes
---



### Method Goals




### Remarks




### GetTransferTypesRQ Example


~~~xml
    <GetTransferTypesRQ>
        <timeoutMilliseconds>60000</timeoutMilliseconds>
        <source>
            <languageCode>en</languageCode>
        </source>
        <filterAuditData>
            <registerTransactions>false</registerTransactions>
        </filterAuditData>
        <Configuration codeProvider = "XXXXX">
            <Credentials user = "" password = "">
                <UrlGeneric>http://examples.com</UrlGeneric>
            </Credentials>
            <Attributes/>
        </Configuration>
    </GetTransferTypesRQ>
~~~


### GetTransferTypesRQ Description




| **Element**			| **Number**	| **Type**	| **Description**	|
| ----------------------------- | ------------- | ------------- | --------------------- |
| GetTransferTypesRQ		| 1          	|		| Root node.		|



### GetTransferTypesRS Example


~~~xml
    <GetTransferTypesRS>
        <auditData>
            <timeStamp>2014-10-30T11:35:31.1499128+00:00</timeStamp>
            <processTimeMilliseconds>0</processTimeMilliseconds>
        </auditData>
        <operationImplemented>true</operationImplemented>
        <TransferTypes>
            <TransferType id = "15" name = "Privado - 9 - 12 Personas"/>
            <TransferType id = "3" name = "Compartido - Shuttle Express"/>
            <TransferType id = "2" name = "Compartido - Shuttle"/>
            <TransferType id = "16" name = "Privado - 13 - 20 Personas"/>
            <TransferType id = "17" name = "Privado - 21 - 31 Personas"/>
            <TransferType id = "13" name = "Privado - 1 - 4 Personas"/>
            <TransferType id = "14" name = "Privado - 5 - 8 Personas"/>
            <TransferType id = "5" name = "Privado - VIP"/>
        </TransferTypes>
    </GetTransferTypesRS>
~~~


### GetTransferTypesRS Description




| **Element**				| **Number**	| **Type**	| **Description**						|
| ------------------------------------- | ------------- | ------------- | ------------------------------------------------------------- |
| GetSupplmenetsRS			| 1          	|		| Root node.							|
| TransferTypes				| 1          	|		| List of transfers types.					|
| TransfersTypes/TransfersType		| 1          	|		| Type of transfer.						|
| @id        				| 1    		| String	| Code of the supplement. Sole codes.				|
| @name      				| 1    		| String	| Name of the supplement.					|

