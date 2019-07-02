{
  "title": "SupplementType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "Supplement",
      "description": "Supplement that it can be or its already added to the option returned. Contains all the information about the supplement.",
      "url": "/hotel-x/reference/objects/supplement"
    }
  ],
  "enumValues": [
    {
      "name": "SKI_PASS",
      "description": "A ticket or pass authorizing the holder to ski in a certain place or resort.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "LESSONS",
      "description": "Lessons of any type that the costumer can take.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "MEALS",
      "description": "Supplement of a determined meal plan.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "EQUIPMENT",
      "description": "Extra equipment for a specific purpose.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "TICKET",
      "description": "Admission to some service.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "TRANSFERS",
      "description": "Transfers used by the costumer.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "GALA",
      "description": "Gala: A festive occasion, celebration or special entertainment.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "ACTIVITY",
      "description": "Activities that the costumer can do.",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "SupplementType",
  "hideGithubLink": true
}
Supplement Type
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
