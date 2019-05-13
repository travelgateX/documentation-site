---
title: GetSupplierTransferTypes
keywords: transfers, get supplier transfers, transfers types
search: Transfers - Data Structure - GetSupplierTransferTypes
sidebar: mydoc_sidebar
permalink: /docs/transfers/DSF/GetSupplierTransferTypes
---



### Method Goals




### Remarks




### GetSupplierTransferTypesRQ Example


~~~xml
    <GetSupplierTransferTypesRQ>
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
    </GetSupplierTransferTypesRQ>
~~~


### GetSupplierTransferTypesRQ Description




| **Element**				| **Number**	| **Type**	| **Description**		|
| ------------------------------------- | ------------- | ------------- | ----------------------------- |
| GetSupplierTransferTypesRQ		| 1          	|		| Root node.			|



### GetSupplierTransferTypesRS Example


~~~xml
    <GetSupplierTransferTypesRS>
        <auditData>
            <timeStamp>2014-10-30T11:33:16.7125413+00:00</timeStamp>
            <processTimeMilliseconds>0</processTimeMilliseconds>
        </auditData>
        <operationImplemented>true</operationImplemented>
        <Suppliers>
            <Supplier id = "ext-3">
                <TransferTypes>
                    <TransferType id = "2" name = "Compartido - Shuttle"/>
                    <TransferType id = "16" name = "Privado - 13 - 20 Personas"/>
                    <TransferType id = "17" name = "Privado - 21 - 31 Personas"/>
                </TransferTypes>
            </Supplier>
            <Supplier id = "ext-2">
                <TransferTypes>
                    <TransferType id = "2" name = "Compartido - Shuttle"/>
                    <TransferType id = "5" name = "Privado - VIP"/>
                </TransferTypes>
            </Supplier>
            <Supplier id = "ext-4">
                <TransferTypes>
                    <TransferType id = "15" name = "Privado - 9 - 12 Personas"/>
                    <TransferType id = "16" name = "Privado - 13 - 20 Personas"/>
                    <TransferType id = "17" name = "Privado - 21 - 31 Personas"/>
                    <TransferType id = "13" name = "Privado - 1 - 4 Personas"/>
                    <TransferType id = "14" name = "Privado - 5 - 8 Personas"/>
                    <TransferType id = "5" name = "Privado - VIP"/>
                </TransferTypes>
            </Supplier>
        </Suppliers>
    </GetSupplierTransferTypesRS>
~~~


### GetSupplierTransferTypesRS Description




| **Element**				| **Number**	| **Type**	| **Description**					|
| ------------------------------------- | ------------- | ------------- | ----------------------------------------------------- |
| GetSupplierTransferTypesRS		| 1          	|		| Root node.						|
| Suppliers  				| 1          	|		| List of supplements.					|
| Suppliers/Suppliers 			| 1          	|		| Supplement.						|
| @id        				| 1    		| String	| Code of the supplement. Sole codes. 			|
| @name      				| 1    		| String	| Name of the supplement.				|

