+++
title = "Security"
description = ""
weight = 4
alwaysopen = false
+++

## Overview

_Products_ and _Resources_ are granted to _Partners_ belonging to _Organizations_. 

Authorized _Partners_ can manage security rules to allow or deny _Resources_ and _Products_.

## Authentication

Authentication is the process of authorizing or making sure that the _Partner_ is who is supposed to be. This can be ensured either by login credentials or by API Key.

Every request to TravelgateX GraphQL API must carry an Authorization header with a JSON Web Token or API Key inside.

#### JSON Web Tokens


#### API Keys


#### Creating an access token

For development purposes please use the following test Api Key `q8ggxpoVDW76Kw918hwnnRvxlZmAP2QZ`

## Authorization

Once the _Partner_ is authenticated we must authorize the partner to use the requested _Resource_.

Role based access control (RBAC) is the de facto standard for authorization. However, it introduces many complexities for practical applications: roles can be inflexible to change and additional mapping between users and roles must be maintained separately.

TravelgateX permissions are Resource Group Assigned rules, defined using GraphQL API and determined at runtime by the data graph of the application.
