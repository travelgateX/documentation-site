+++
title = "Blacklist"
pagetitle = "HotelX Blacklist"
description = "hotel codes blacklist"
icon = "fa-sitemap"
weight = 2
alwaysopen = false
+++

The blacklist are used to ignorer hotel code when we make a search. the are 2 types of blacklist, you can filter hotel code by specific access or by specific provider.

In order to load your blacklist you just need to follow the instructions below:

## Access blacklist

Blacklist is applied for specific access

### File Format

The file should be in the below format:

* **Encoding**: UTF-8

* **File Name**: access\_blacklist.csv

* **Header Row**: Client, Code, Context, Values

    * Client: The client that you want to apply the blacklist, if it is empty, it will apply to all clients in the same group.

    * Code: The access code

    * Context: The context of hotels codes

    * Values: Contain the list of hotel codes, separated by ";"

* **Delimiter**:  Comma (“,”)

* **Directory**:  /F[folder code]\_[unique code]/HotelX\_[unique code]/

#### Sample File

**Name**: access\_blacklist.csv

**Data**:

```csv
Client,Code,Context,Values
client1,access1,context1,a;b
client2,access2,context2,a;b;c
,access3,context1,a;b;c;d;e
```

## Supplier blacklist

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

**Data**:

```csv
Client,Code,Context,Values
client1,supplier1,context1,a;b
client2,supplier2,context2,a;b;c
,supplier3,context1,a;b;c;d;e
```