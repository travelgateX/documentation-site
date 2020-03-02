+++
title = "Using gist to include GraphQL examples"
pagetitle = "Using gist to include GraphQL examples"
description = "Use gist to document GraphQL examples"
icon = "fa-info-circle"
weight = 3
+++

# Using hists on md pages

This document assists on using GIST to show GraphQl examples.

To use Gist it's needed to include the hists on the header and call it on the md page body.

## Setups on header
On the page header we'll keep the usual page fields needed (like title, pagetitle...) and we'll add a new key "gists" as a list of elements with this atributes:

| Atribute | Explanation |
|----------|---------------------------------------|
| n | The Gist title that will be shown |
| g | The Gist Id something like: 765fa8dbddd6a17571feb012f9c876bc |
| o | The language that must be in ["graphiql", "curl", "other"] |
| u | The user Id that hosts the gist |
| ak | The auth key of the referred user something like: 8777cfff-e333... |


**EXAMPLE:**

``` JSON
{
"title": "SOME TITLE HERE",
"pagetitle": "SOME PAGETITLE HERE",
"description": "SOME DESCRIPTION HERE",
"icon": "fa-SOME-ICON",
"weight": 1,
"alwaysopen": false,
"default_user": "",
"gists": [
    {
        "n":"GIST TITLE",
        "g":"GIST ID",
        "o":["graphiql"],
        "u":"SOME_USER_ID",
        "ak":"AUTH KEY"
    }, 
    {
        "n":"GIST TITLE 2",
        "g":"GIST ID",
        "o":["graphiql"],
        "u":"SOME_USER_ID",
        "ak":"AUTH KEY"
    },
    {
        "n":"GIST TITLE 3",
        "g":"GIST ID",
        "o":["graphiql"],
        "u":"SOME_USER_ID",
        "ak":"AUTH KEY"
    }
 ]
}
```

## Page content setup

In the body page well need to include at the place where we want to show the code the following:


```Markdown

{{%/* graphiql-tabs */%}}
{{%/* /graphiql-tabs */%}}

{{/*< graphiql-styles >*/}}
{{%/* graphiql-script-tabs */%}}

```

The tabs label will show the menu to select the gist and the script-tabs will show the code.

[View an example](https://docs.travelgatex.com/hotel-x/howtos/quickstart/bookingflow/search/)



