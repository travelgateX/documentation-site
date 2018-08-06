+++
title = "Overview"
pagetitle = "Security within the TravelgateX platform"
description = "Learn platform security"
icon = "fa-file-text-o"
weight = 1
alwaysopen = false
+++

This page describes the how security is implemented in TravelgateX platform.

## Introduction

TravelgateX offers a fine-grained access control and visibility for centrally managing `Resources`, which are granted to `Partners` belonging to `Organizations`.

## Authentication

Authentication is the process of authorizing or making sure that the `Partner` is the correct one. Every request to TravelgateX GraphQL API must carry an Access Token whether it's an [API Key](#api-key) or a [JSON Web Token (JWT)](#json-web-token-jwt).

### API Key

The API key takes cares of the authentication of applications, normally created as a `Service Account` with limited scopes.
The correct way to send it to GraphQL server is via HTTP Header:

{{% alert theme="warning" %}}All queries must include a HTTP Header with the API key inserted in the format: 
* API key: `"Authorization: Apikey xxxxxxxxx"`

If you wish to use test headers, insert `"Authorization":"Apikey 64780338-49c8-4439-7c7d-d03c2033b145"`
{{% /alert %}}
 
```bash
curl -X\
   POST\
   -H "Content-Type: application/json" \
   -H "Authorization: Apikey 64780338-49c8-4439-7c7d-d03c2033b145"  \
   --data '{"query":"{searchStatusService{code description}}"}' \
   --compressed \
   https://api.travelgatex.com
```

### Creating an API Key

{{% alert theme="info" %}}For development and testing purposes, please use the following Test API Key `64780338-49c8-4439-7c7d-d03c2033b145`
{{% /alert %}}

### JSON Web Token (JWT)

The JSON Web Token takes cares of the authentication of users, normally created as `User`.

Whenever the user wants to access a protected resource, the user agent should send the JWT, in the Authorization header using the Bearer schema. The content of the header should look like the following:

{{% alert theme="warning" %}}All queries to a protected resources must include an Authorization Header using the Bearer schema. The content of the header should look like the following:
`"Authorization: Bearer xxxxxxxxx"`
{{% /alert %}}

## Authorization

Once the `Member` is authenticated we must authorize the `Partner` to use the requested `Resource`.

TravelgateX [Identity and Access Management](/travelgatex/security/identity-access-management) let Partner administrators authorize who can take action on specific resources. This gives you full control and internal visilibity to manage your resources centrally.
