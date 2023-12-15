+++
title = "Update Access"
pagetitle = "Admin Update Access"
description = "Admin Update Access tool"
icon = "fa-cubes"
weight = 2
alwaysopen = false
+++


# Update an Access.
## Update values of an Access and check DOCS in playground to see what you can modify.

~~~graphql
mutation {
  admin {
    updateAccess(input: { code: "", isActive: false }) {
      accessData {
        code
        isActive
      }
      error {
        code
        type
        description
      }
    }
  }
}
~~~

