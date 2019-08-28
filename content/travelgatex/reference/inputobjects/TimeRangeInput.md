{
  "title": "TimeRangeInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "RelativeInput",
      "name": "relative",
      "url": "/travelgatex/reference/inputobjects/relativeinput",
      "description": null,
      "args": null
    },
    {
      "typeString": "AbsoluteInput",
      "name": "absolute",
      "url": "/travelgatex/reference/inputobjects/absoluteinput",
      "description": null,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "StatsFilterInput",
      "description": null,
      "url": "/travelgatex/reference/inputobjects/statsfilterinput"
    },
    {
      "name": "LoggingLegacyFilterInput",
      "description": "Filters needed to do a search.\nFrom (Start date of search - YYYY-MM-DD HH:mm:ss), To (End date of search - YYYY-MM-DD HH:mm:ss), ",
      "url": "/travelgatex/reference/inputobjects/logginglegacyfilterinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "TimeRangeInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
