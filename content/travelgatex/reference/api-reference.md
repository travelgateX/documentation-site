+++
title = "API Reference"
pagetitle = "Platform-wide API Reference"
description = "Platform-wide API Reference"
weight = 1
alwaysopen = false
+++

This API reference is organized by graphql operations related to product.

## Query Operations



## Mutation Operations



## Custom Scalar Types

TravelgateX GraphQL schema implementation defines custom scalar types.

#### JSON

Sometimes it's necessary to manage arbitrary JSON values for loosely structured data. The JSON type makes sure that it is actually valid JSON and returns the value as a parsed JSON object/array instead of a string.

In queries or mutations, JSON fields have to be specified with enclosing double quotes. Special characters have to be escaped: `"{\"int\": 1, \"string\": \"value\"}"`.

#### DateTime

The DateTime type represents DateTime values. A good example might be a transaction TimeSpan.

In queries or mutations, DateTime fields have to be specified in ISO 8601 format with enclosing double quotes: `"2017-10-22T13:57:31.123Z"`.

#### Date
The Date type represents Date values. A good example might be a Hotel CheckIn Date.

In queries or mutations, DateTime fields have to be specified in ISO 8601 format with enclosing double quotes: `"2017-10-22"`.

#### URI
The URI type represents a URI values. A good example mith be an Hotel Image URL.

In queries or mutations, URI fields have to be specified in RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string format with enclosing double quotes: `"http:\\www.travelgatex.com"`.

#### Country
The Country type represents Country values. A good example might be a Passenger Nationality.

In queries or mutations, Country fields have to be specified in ISO 3166-1 alpha-2 format with enclosing double quotes `"ES"`.

#### Language
The Language type represents Language values. A good example might be a Hotel Description Language.

In queries or mutations, Language fields have to be specified in ISO 3166-1 alpha-2 format with enclosing double quotes `"es"`.

#### Currency
The Currenty type represents Currency values. A good example might be a Rate Price Currency.

In queries or mutations, Currency fields have to be specified in ISO 4217 format with enclosing double quotes `"EUR"`.

## Documentation
[Schema documentation](/graphql-api/travelgatex-graphql-api/#documentation)

## Samples
* [Search, Quote, Book, Cancel and Retrieve bookings](https://graphqlbin.com/JYRtB)

