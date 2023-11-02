+++
title = "Get Accesses"
pagetitle = "Admin Get Accesses"
description = "Admin Get Accesses tool"
icon = "fa-sitemap"
weight = 1
alwaysopen = false
+++

# Get accesses.
## List of all of your accesses available.

~~~graphql
query {
  admin {
    accesses {
      edges {
        node {
          accessData {
            name
            isActive
            code
          }
          error {
            code
            type
            description
          }
        }
      }
    }
  }
}

~~~




# Get accesses with filters.
## List of all of your accesses available choosing the filters, the filters are expecified in DOCS in the playground.

~~~graphql
query {
  admin {
    accesses(filter: { accessID: "0" }) {
      edges {
        node {
          accessData {
            name
            isActive
            code
          }
          error {
            code
            type
            description
          }
        }
      }
    }
  }
}

~~~

