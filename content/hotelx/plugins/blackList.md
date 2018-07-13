+++
title = "Blacklist"
pagetitle = "HotelX Blacklist"
description = "Hotel codes blacklist: filter out specific hotels from the search query."
icon = "fa-flag"
weight = 2
alwaysopen = false
+++

The blacklist plugin is used to ignore hotel code(s) when we a search query is executed. There are 2 types of blacklists:

- Filter hotel code of a specific `Access`
- Filter hotel codes of a specific `Supplier`

Loading a blacklist is as easy as following the steps below:

## `Access` Blacklist

Blacklist is applied for specific `Access`

### File Format

The file should be in the below format:

* **Encoding**: UTF-8

* **File Name**: `access\_blacklist.csv`

* **Header Row**: Client, Code, Context, Values

    * Client: The `Client` that you want to apply the blacklist to, if it is empty, it will apply to all `Clients` of the same `Group`

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

Blacklist is applied for specific provider

### File Format

The file should be in the below format:

* **Encoding**: UTF-8

* **File Name**: access\_blacklist.csv

* **Header Row**: Client, Code, Context, Values

    * Client: The client that you want to apply the blackllist, if it is empty, it will apply to all client from the same group.

    * Code: The provider code

    * Context: The context of hotels codes

    * Values: Contain the list of hotel codes, separated by ";"

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