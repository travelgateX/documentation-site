+++
title = "Blacklist"
pagetitle = "HotelX Blacklist"
description = "Hotel codes Blacklist: filter out specific hotels from the Search query."
icon = "fa-flag"
weight = 2
alwaysopen = false
+++

The Blacklist plugin is used to ignore hotel code(s) when a Search query is executed. This means that all the hotels on the blacklist won't be requested to the supplier. You can apply also rules in order to block an entire supplier. _More details regarding configuration below_.

## Definitions
* **Client Token**: Dynamic parameter you can send on the RQ in case you want to apply specific rules of the blacklist
* **Client**: The client of HotelX to make requests. 
* **Supplier**: The supplier you want to apply the rule/s. _You have to use the supplier code_
* **Access**: The access code you want to apply the rule/s. _Maybe you want to block hotels for an specific access_
* **Context**: The context you send on the RQ.
* **ContextSup**: Every supplier has a context, it's used to build mapping files or to specify it on the RQ. _Context code is the one you receive with every activation delivery. You can also retrieve them by using our Admin query_ 

Loading a Blacklist is as easy as following the steps below:

## File Format

The file should be in the below format:

* **Encoding**: UTF-8
* **File Name**: `blacklist_access_hotels.csv`
* **Header Row**: IdRule,ClientToken,NoClientToken,Client,NoClient,Supplier,NoSupplier,Access,NoAccess,Context,NoContext,ContextSup,NoContextSup,Values

    * IdRule: Unique identifier of the rule. 

    Criteria rows: 
    * ClientToken, NoClientToken: List of `clienttoken` separated by ';'
    * Client, NoClient: List of `client` codes separated by ';'
    * Supplier, NoSupplier: List of `supplier` codes separated by ';'
    * Access, NoAccess: List of `access` codes separated by ';'
    * Context, NoContext: List of `operation context` codes separated by ';'. These contexts are the client's contexts.  
    * ContextSup, NoContextSup:	List of suppluer `context` codes separated by ';'

    Value row:
    * Values: values can be *blacklist* or *whitelist* with  `Hotel codes grouped by context`. 
        * *blacklist*: Filter all the hotels that are in the blacklist.
        * *whitelist*: All the hotels that are not in whitelist are filtered.
    
    The values has the following format, and **always double quoted**:    
    * only whitelist: "wl:(CTX1||A;B;C|@|CTX2||C;B;D;)"
    * only blacklist: "bl:(CTX1||A;B;C|@|CTX2||C;B;D;)"
    * blacklist and whitelist : "bl:(CTX1||A;B;C|@|CTX2||C;B;D),wl:(CTX3||all)", **if blacklist and whitelist are used at same time, then the CONTEXT must be exclusive**. For example, the follow value is wrong **"bl:(CTX1||A;B;C),wl:(CTX1||all)"** because **CTX1** is used at same time in blacklist and whitelist.

    the values in the whitelist or blacklist are separated by the characters  '|@|' . All values should have two blocks separated by the characters '||'. The first block identifies the context and the second block identifies the list of hotel codes separated by ';', you can use **all** keyword when you want choose all context or all hotels  

    
    You should bear in mind that this file is a collection of rules and we chose in every Search the first rule that matches the criteria sent in the Query. **You should specify the more restrictive rules on the top of the file.**
    If there is no value for any rule criteria row, it means that any value in the request matches this row. 
    It is important to indicate the contexts used in values on the rule criteria to improve rule matching.


* **Delimiter**:  Comma (",")

* **Directory**:  /F[folder code]_[unique code]/HotelX_[unique code]/

### Sample File

**Name**: `blacklist_access_hotels.csv`

**Sample Data**:

```csv
    IdRule,ClientToken,NoClientToken,Client,NoClient,Supplier,NoSupplier,Access,NoAccess,Context,NoContext,ContextSup,NoContextSup,Values
    r1,,,cli1;cli2,,,HOTELTEST;TESTPRV,,,,,,,"bl:(all||all)"
    r1,,,test_client,,,supplier_test,,,,,supplier_test_context,,"bl:(CTX1||A;B;C|@|CTX2||C;B;D;)"
    r2,,,,,,,,123;456,,,,,"wl:(CTX1||A;B;C|@|CTX2||C;B;D;)"
    r3,,,,,,HOTELTEST;TESTPRV,,,,,,,,"bl:(CTX1||A;B;C|@|CTX2||C;B;D),wl:(CTX3||all)"    
```


**Use case**: 

If we want to block all hotels of two accesses in the Blacklist, we should configure the file as specified below: 

    IdRule,ClientToken,NoClientToken,Client,NoClient,Supplier,NoSupplier,Access,NoAccess,Context,NoContext,ContextSup,NoContextSup,Values
    r2,,,,,,,123;456,,,,,,"bl:(all||all)"

    With this input hotel: ["A","B","C"] after executing the plugin, we obtain hotels: [] 

If we want to block all hotels of two suppliers in the blacklist, we should configure the file as specified below: 

    IdRule,ClientToken,NoClientToken,Client,NoClient,Supplier,NoSupplier,Access,NoAccess,Context,NoContext,ContextSup,NoContextSup,Values
    r3,,,,,,HOTELTEST;TESTPRV,,,,,,,"bl:(all||all)"

    With this input hotel: ["A","B","C"] after executing the plugin, we obtain hotels: [] 

If we want to block all hotels except "A" and "B" of two suppliers in the blacklist, we should configure the file as specified below: 

    IdRule,ClientToken,NoClientToken,Client,NoClient,Supplier,NoSupplier,Access,NoAccess,Context,NoContext,ContextSup,NoContextSup,Values
    r3,,,,,,HOTELTEST;TESTPRV,,,,,,,"wl:(all||A;B)"

    With this input hotel: ["A","B","C"] after executing the plugin, we obtain hotels: ["A","B"] 

If we want block a hotel code using the supplier codes, we should configure the file as specified below: 

    IdRule,ClientToken,NoClientToken,Client,NoClient,Supplier,NoSupplier,Access,NoAccess,Context,NoContext,ContextSup,NoContextSup,Values
    r1,,,test_client,,supplier_test,,,,,,supplier_test_context,,"bl:(supplier_context||AB;CD;123)"

    With this input hotel: ["AB","CD"] after executing the plugin, we obtain hotels: ["123"] 

If we want block all hotel codes from any supplier except some specified, we should configure the file as stated below: 

    IdRule,ClientToken,NoClientToken,Client,NoClient,Supplier,NoSupplier,Access,NoAccess,Context,NoContext,ContextSup,NoContextSup,Values
    r3,,,,,,HOTELTEST;TESTPRV,,,,,,,bl:("all||all")

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
To apply specific rule, we should add client token in our request
```json
"settings": {
		"context": null,
		"client": "xtg",
		"auditTransactions": true,
		"testMode": true,
		"clientTokens": [
			"testToken"
		],
		"plugins": [
            {
				"step": "REQUEST_ACCESS",
				"pluginsType": {
					"name": "blacklist",
					"type": "PRE_STEP"
				}
			}
        ]
	},
```


