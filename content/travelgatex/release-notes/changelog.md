+++
title = "Changelog"
pagetitle = "TravelgateX changelog"
description = "Contains a curated, chronologically ordered list of notable changes"
weight = 2
icon="fa-exchange"
alwaysopen = false
hidden = false
+++

To make it easier for users and contributors to see precisely what notable changes have been made on TravelgateX.

{{% alert theme="info" %}}All notable changes on TravelgateX platform will be documented in this page.{{% /alert %}}

## 2018-10-18

{{% release-notes-container type="c"%}}
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#2018-10-18)
{{% /release-notes-container %}}

{{% release-notes-container type="a"%}}
- Profile type
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- `Supplier`, `Client` and `Access` entities resources content.
{{% /release-notes-container %}}


## 2018-10-17

{{% release-notes-container type="f"%}}
- Search by destination no return options
{{% /release-notes-container %}}

## 2018-09-26

{{% release-notes-container type="c"%}}
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#2018-09-26)
{{% /release-notes-container %}}

## 2018-09-20

{{% release-notes-container type="c"%}}
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#2018-09-20)
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Product name `FlightsX`.
{{% /release-notes-container %}}

## 2018-09-10

{{% release-notes-container type="c"%}}
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#2018-09-10)
{{% /release-notes-container %}}

## 2018-08-29

{{% release-notes-container type="a"%}}
- Added pagination to partners list
{{% /release-notes-container %}}

## 2018-08-27

{{% release-notes-container type="c"%}}
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#2018-08-27)
{{% /release-notes-container %}}

## 2018-08-22

{{% release-notes-container type="c"%}}
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#2018-08-22)
{{% /release-notes-container %}}

{{% release-notes-container type="a"%}}
- Entity's Owner and its related Filters, queries and mutations.
- `parents` and `descendents` queries for `Group` and `Organization`.
- Old connect form migrated to TravelgateX
- Clients and suppliers CRUD
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Corrected change of Payment's structure
- Basic Audit by request using header `TGX-Audit: 1` See more: [TGX Headers page](/travelgatex/concepts/request-headers)
{{% /release-notes-container %}}

## 2018-08-14


{{% release-notes-container type="a"%}}
- New section for entities in IAM
- Accesses CRUD
{{% /release-notes-container %}}

{{% release-notes-container type="c"%}}
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#2018-08-14)
{{% /release-notes-container %}}

## 2018-08-13

{{% release-notes-container type="c"%}}
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#2018-08-13)
{{% /release-notes-container %}}

## 2018-08-08

{{% release-notes-container type="c"%}}
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#2018-08-08)
{{% /release-notes-container %}}

{{% release-notes-container type="a"%}}
- [TGX Headers page](/travelgatex/concepts/request-headers)
- Support basic Tracing by request using header `TGX-Tracing: 1`
- Return groups codes on entities queries (`accessData`,`suppierData`,`clientData`,`profileData`).
- Access name filter
- New default group when user account is deleted.
- Audit members has been added in createMember and deleteMember
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Response of Access and Supplier query when no accesses on the request
- Entity propagation
- Permission check
- Update member auditions and refactor that funcionality
- URL resolver
- API/resource resolvers
- Roles function with new admin permissions
{{% /release-notes-container %}}


## 2018-07-31

{{% release-notes-container type="c"%}}
- Improvements in the organization selector and modal.
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#2018-07-31)
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- IAM mutations
- All groups in resources and apis resolvers
{{% /release-notes-container %}}

{{% release-notes-container type="a"%}}
- Delete member mutation (Delete Apikeys or uninvite user emails)
- Public deleteGroup function and made it public
{{% /release-notes-container %}}

## 2018-07-27

{{% release-notes-container type="f"%}}
- Organizations queries resolvers
{{% /release-notes-container %}}

## 2018-07-26

{{% release-notes-container type="c"%}}
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#20180726)
{{% /release-notes-container %}}
{{% release-notes-container type="f"%}}
- Groups resolvers
{{% /release-notes-container %}}


## 2018-07-25

{{% release-notes-container type="c"%}}
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#20180725)
- Admin permissions management for groups.
{{% /release-notes-container %}}
{{% release-notes-container type="r"%}}
- Old support Apikey
{{% /release-notes-container %}}
{{% release-notes-container type="f"%}}
- Team's permission management for groups.
{{% /release-notes-container %}}
{{% release-notes-container type="a"%}}
- Flow (Cascade) permissions.
- Inprove time response of groups resolvers.
{{% /release-notes-container %}}



## 2018-07-16

{{% release-notes-container type="a"%}}
- [GraphQL Schema breaking changes](/travelgatex/release-notes/breaking-changes/). Substitutes and fixes to Deprecated and Deleted Notes pages.
{{% /release-notes-container %}}

{{% release-notes-container type="c"%}}
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#20180716)
- Changelog based on [keep a changelog](https://keepachangelog.com)
{{% /release-notes-container %}}
{{% release-notes-container type="r"%}}
- Deprecated schema notes pages.
- Deleted schema notes pages.
{{% /release-notes-container %}}
{{% release-notes-container type="f"%}}
- Documentation pages' styles
{{% /release-notes-container %}}

## 2018-07-10

{{% release-notes-container type="a"%}}
- [Deleted schema notes](/travelgatex/release-notes/deprecated_notes/)
- Documentation pages' index
{{% /release-notes-container %}}

{{% release-notes-container type="c"%}}
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#20180710)
- New version of [Deprecated schema notes](/travelgatex/release-notes/deprecated_notes/)
{{% /release-notes-container %}}

## 2018-07-09
{{% release-notes-container type="r"%}}
- Previously deprecated queries. [See more](/travelgatex/release-notes/breaking-changes/#2018-07-09)
{{% /release-notes-container %}}
