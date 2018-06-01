+++
title = "Overview"
pagetitle = "Security within the platform"
description = "Learn Platform Security"
icon = "fa-shield"
weight = 4
alwaysopen = false
+++

### Introduction

TravelgateX offers a fine-grained access control and visibility for centrally managing _resources_, which are granted to _Partners_ belonging to _Organizations_.

### Authentication

Authentication is the process of authorizing or making sure that the _Partner_ is the correct one. Every request to TravelgateX GraphQL API must carry an Access Token whether it's an [API Key](#api-key) or a [JSON Web Token](#json-web-token).

#### API Key

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

##### Creating an API Key

For development purposes please use the following test Api Key `q8ggxpoVDW76Kw918hwnnRvxlZmAP2QZ`


### JSON Web Token (JWT)

The JSON Web Token takes cares of the authentication of users, normally created as `User`.

Whenever the user wants to access a protected resource, the user agent should send the JWT, in the Authorization header using the Bearer schema. The content of the header should look like the following:

 * JWT: `"Authorization: Bearer xxxxxxxxx"`


### Authorization

Once the _Member_ is authenticated we must authorize the partner to use the requested _Resource_.

[IAM](/admin/concepts/iam) lets partners administrators authorize who can take action on specific resources, giving you full control and visilibity to manage resources centrally.

### Further Reading

- [Authentication](https://hackernoon.com/how-do-you-authenticate-mate-f2b70904cc3a)
- [JWT](https://jwt.io/introduction/) 
