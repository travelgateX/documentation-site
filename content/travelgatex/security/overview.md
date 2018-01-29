+++
title = "Overview"
pagetitle = "Security within the platform"
description = "Learn Platform Security"
icon = "fa-shield"
weight = 4
alwaysopen = false
+++

### Introduction

_Resources_ are granted to _Partners_ belonging to _Organizations_. 

[IAM](/admin/account/iam) lets partners administrators authorize who can take action on specific resources, giving you full control and visilibity to manage resources centrally.

### Authentication

Authentication is the process of authorizing or making sure that the _Partner_ is the correct one. Every request to TravelgateX GraphQL API must carry an Access Token whether it's an [API Key](#api-key) or a [JSON Web Token](#json-web-token).

### API Key

The API key takes cares of the authentication of applications, normally created as `Service Account` with limited scopes. 
The correct way to send it to GraphQL server is via HTTP Header:

 * API key: `"Authorization: Apikey xxxxxxxxx"`

```bash
curl -X\
   POST\
   -H "Content-Type: application/json" \
   -H "Authorization: Apikey q8ggxpoVDW76Kw918hwnnRvxlZmAP2QZ"  \
   --data '{"query":"{searchStatusService{code description}}"}' \
   --compressed \
   https://api.travelgatex.com
```

### Creating an API Key

For development purposes please use the following test Api Key `q8ggxpoVDW76Kw918hwnnRvxlZmAP2QZ`


### JSON Web Token

{{% alert theme="warning" %}}Coming soon{{% /alert %}}


### Authorization

Once the _Partner_ is authenticated we must authorize the partner to use the requested _Resource_.

Role based access control (RBAC) is the de facto standard for authorization. However, it introduces many complexities for practical applications: roles can be inflexible to change and additional mapping between users and roles must be maintained separately.

TravelgateX permissions are Resource Group Assigned rules, defined using GraphQL API and determined at runtime by the data graph of the application.

### Further Reading

- https://hackernoon.com/how-do-you-authenticate-mate-f2b70904cc3a
