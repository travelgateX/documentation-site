{
  "title": "LoggingLegacyData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "timestamp",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Date of search",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "sessionID",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Return session id",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Access!",
      "name": "access",
      "url": "/travelgatex/reference/objects/access",
      "description": "Owner access",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Client!",
      "name": "client",
      "url": "/travelgatex/reference/objects/client",
      "description": "Owner client",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Operation!",
      "name": "operation",
      "url": "/travelgatex/reference/objects/operation",
      "description": "Return group operation",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "TrafficType!",
      "name": "trafficType",
      "url": "/travelgatex/reference/enums/traffictype",
      "description": "Responsible for the execution of the this stats. If TRUE then cache, else client",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Environment!",
      "name": "cloudEnvironment",
      "url": "/travelgatex/reference/objects/environment",
      "description": "Return environment",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "StatsInfoTypes!",
      "name": "statusType",
      "url": "/travelgatex/reference/enums/statsinfotypes",
      "description": "return hub status",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "errorCode",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Return if exist error code",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "execTime",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Return execTime",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "URI!",
      "name": "url",
      "url": "/travelgatex/reference/scalars/uri",
      "description": "Return the URL to download",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "LoggingLegacy",
      "description": "The service used to access the stats of every connection that uses the HUB",
      "url": "/travelgatex/reference/objects/logginglegacy"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "LoggingLegacyData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
