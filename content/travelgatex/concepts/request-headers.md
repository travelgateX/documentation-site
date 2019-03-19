+++
title = "Request Headers"
pagetitle = "Request Headers"
description = "HTTP request headers required in all API requests"
icon = "fa-plus-circle"
weight = 3
alwaysopen = false
hidden = false
+++

The following HTTP request headers are relevant to all request methods (GET, PUT, POST and DELETE) and they are required in all API requests.


## Authorization (Required)

The HTTP Authorization request header contains the credentials to authenticate a user agent with a server, usually after the server has responded with a 401 Unauthorized status and the WWW-Authenticate header.

### Syntax

```
Authorization: <type> <credentials>
```

### Directives

`<type>`:

- `ApiKey`
- `Bearer`


`<credential>`: String

### Example
Authorization: Apikey dumq8ggx-poVDW76Kw9-18hwnnRvxlZm-AP2QZ
