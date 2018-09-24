+++
title = "Check configuration"
pagetitle = "Check configuration"
description = "Learn how to get your configuration"
icon = "fa-calendar"
weight = 3
alwaysopen = false
+++

This call allows you to retrieve relevant information like supplier access code (link a lo que es el access), supplier name, supplier configuration, supplier context, know whether the connection is test or not, know if the connection is active or not. So you can use it to perform other calls.

<span style="color:red"> Add information about how to ask for the request. APIkey... </span>

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
