+++
title = "Blacklist"
pagetitle = "HotelX Blacklist"
description = "Hotel codes Blacklist: filter out specific hotels from the Search query."
icon = "fa-flag"
weight = 2
alwaysopen = false
+++

The Blacklist plugin is used to ignore hotel code(s) when a Search query is executed. 

Loading a Blacklist is as easy as following the steps below:

## File Format

The file should be in the below format:

* **Encoding**: UTF-8

* **File Name**: `blacklist\_access\_hotels.csv`

* **Header Row**: IdRule,ClientToken,NoClientToken,Client,NoClient,Supplier,NoSupplier,Access,NoAccess,Context,NoContext,ContextSup,NoContextSup,Values

    * IdRule: Unique identifier of the rule. 

    Criteria rows: 
    * ClientToken, NoClientToken: List of `clienttoken` separated by ';'
    * Client, NoClient: List of `client` codes separated by ';'
    * Supplier, NoSupplier: List of `supplier` codes separated by ';'
    * Access, NoAccess: List of `access` codes separated by ';'
    * Context, NoContext: List of `operation context` codes separated by ';'. These contexts are the client's contexts.  
    * ContextSup, NoContextSup:	List of suppluer `context` codes separated by ';' 

    * Values: `Hotel codes blacklisted grouped by context`. These values are separated by the characters  '|@|' . All values should have two blocks separated by the characters '||'. The first block identifies the context and the second block identifies the list of hotel codes separated by ';'.This cell must be specified between two characters ' " '. 

    
    You should bear in mind this file is a collection of rules, and we chose in every Search the rule that better matches the criteria sent in the Query. Moreover, only one of the rules specified will match the criteria, therefore you should specify the more restrictive rules on the top of the file. 
    If there is no value for any rule criteria row, it means that any value in the request matches this row. 
    It is important to indicate the contexts used in values on the rule criteria to improve rule matching.


* **Delimiter**:  Comma (“,”)

* **Directory**:  /F[folder code]\_[unique code]/HotelX\_[unique code]/

### Sample File

**Name**: blacklist\_access\_hotels.csv

**Sample Data**:

```csv
    IdRule,ClientToken,NoClientToken,Client,NoClient,Supplier,NoSupplier,Access,NoAccess,Context,NoContext,ContextSup,NoContextSup,Values
    r1,,,cli1;cli2,,,HOTELTEST;TESTPRV,,,,,,,all||all
    r1,,,test_client,,,supplier_test,,,,,supplier_test_context,,"supplier_context||AB;CD;123"
    r2,,,,,,,,123;456,,,,,"all||all"
    r3,,,,,,HOTELTEST;TESTPRV,,,,,,,,    
```


**Use case**: 

If we want to block all hotels of two accesses in the Blacklist, we should configure the file as specified below: 

    IdRule,ClientToken,NoClientToken,Client,NoClient,Supplier,NoSupplier,Access,NoAccess,Context,NoContext,ContextSup,NoContextSup,Values
    r2,,,,,,,123;456,,,,,,"all||all"

    With this input hotel: ["A","B","C"] after executing the plugin, we obtain hotels: [] 

If we want to block all hotels of two suppliers in the blacklist, we should configure the file as specified below: 

    IdRule,ClientToken,NoClientToken,Client,NoClient,Supplier,NoSupplier,Access,NoAccess,Context,NoContext,ContextSup,NoContextSup,Values
    r3,,,,,,HOTELTEST;TESTPRV,,,,,,,"all||all"

    With this input hotel: ["A","B","C"] after executing the plugin, we obtain hotels: [] 

If we don't specify any values in one rule, we are indicating that no hotel code should be blacklisted for any supplier different of HOTELTEST or TESTPRV: 

    IdRule,ClientToken,NoClientToken,Client,NoClient,Supplier,NoSupplier,Access,NoAccess,Context,NoContext,ContextSup,NoContextSup,Values
    r3,,,,,,HOTELTEST;TESTPRV,,,,,,,,

    With this input hotel: ["A","B","C"] after executing the plugin, we obtain hotels: ["A","B","C"]

If we want block a hotel code using the supplier codes, we should configure the file as specified below: 

    IdRule,ClientToken,NoClientToken,Client,NoClient,Supplier,NoSupplier,Access,NoAccess,Context,NoContext,ContextSup,NoContextSup,Values
    r1,,,test_client,,supplier_test,,,,,,supplier_test_context,,"supplier_context||AB;CD;123"

    With this input hotel: ["AB","CD"] after executing the plugin, we obtain hotels: ["123"] 

If we want block all hotel codes from any supplier except some specified, we should configure the file as stated below: 

    IdRule,ClientToken,NoClientToken,Client,NoClient,Supplier,NoSupplier,Access,NoAccess,Context,NoContext,ContextSup,NoContextSup,Values
    r3,,,,,,HOTELTEST;TESTPRV,,,,,,,"all||all"

    With this input hotel: ["AB","CD"] after executing the plugin, we obtain hotels: ["123"] 

       

### Request example


In order to use the plugin, we shoud send the following json in the query variables 

```json
		"plugins": [
			{
				"step": "REQUEST_ACCESS",
				"pluginsType": {
					"name": "blacklist",
					"type": "PRE_STEP"
				}
			}
		]
```



## The following plugin is deprecated. Please use the previous plugin to blacklist

The blacklist plugin is used to ignore hotel code(s) when we a search query is executed. There are 2 types of blacklists:

- Filter hotel codes of a specific `Access`
- Filter hotel codes of a specific `Supplier`

Loading a blacklist is as easy as following the steps below:

## `Access` Blacklist

Blacklist is applied for specific `Access`

### File Format

The file should be in the below format:

* **Encoding**: UTF-8

* **File Name**: `access\_blacklist.csv`

* **Header Row**: Client, Code, Context, Values

    * Client: The `Client` that you want to apply the blacklist to. If it is empty, it will apply to all `Clients` of the same `Group`

    * Code: The `Access` code

    * Context: The `Context` of the hotels codes

    * Values: List of hotel codes, separated by ";"

* **Delimiter**:  Comma (“,”)

* **Directory**:  /F[folder code]\_[unique code]/HotelX\_[unique code]/

#### Sample File

**Name**: access\_blacklist.csv

**Sample Data**:

```csv
Client,Code,Context,Values
client1,access1,context1,a;b
client2,access2,context2,a;b;c
,access3,context1,a;b;c;d;e
```

## `Supplier` Blacklist

Blacklist is applied for a specific provider

### File Format

The file should be in the below format:

* **Encoding**: UTF-8

* **File Name**: access\_blacklist.csv

* **Header Row**: Client, Code, Context, Values

    * Client: The client that you want to apply the blacklist to. If it is empty, it will apply to all clients from the same group.

    * Code: The provider code

    * Context: The context of hotel codes

    * Values: It contains the list of hotel codes, separated by ";"

* **Delimiter**:  Comma (“,”) 
* **Directory**:  /F[folder code]\_[unique code]/HotelX\_[unique code]/

#### Sample File

**Name**: supplier\_blacklist.csv

**Sample Data**:

```csv
Client,Code,Context,Values
client1,supplier1,context1,a;b
client2,supplier2,context2,a;b;c
,supplier3,context1,a;b;c;d;e
```
