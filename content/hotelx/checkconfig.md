+++
title = "Check configuration"
pagetitle = "Check configuration"
description = "Learn how to get your configuration"
icon = "fa-calendar"
weight = 3
alwaysopen = false
+++

This query allows you to retrieve relevant information like supplier access code (link a lo que es el access), supplier name, supplier configuration, supplier context, type of connection: test or live; active or not. You can then use this information to perform other queries/mutations.

_To run this query, you should send within the headers your Apikey_

```json
{
  admin{
    accesses{
      edges{
        node{
          accessData{
            name
            isActive
            code
            supplier{
              supplierData{
                code
                name
                isActive
                provider{
                  code
                  name
                  isActive
                  isPublic
                }
                context
              }
            }
            isTest
            user
            password
            parameters{
              key
              value
            }
          }
        }
      }
    }
  }
}
```
