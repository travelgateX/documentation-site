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

## 2019-02-11
{{% release-notes-container type="c"%}}
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#2019-02-11)
{{% /release-notes-container %}}

{{% release-notes-container type="c"%}}
- Audit deprecated `loadFile` query
{{% /release-notes-container %}}

## 2019-02-07
{{% release-notes-container type="c"%}}
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#2019-02-07)
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Response header. Content-type
{{% /release-notes-container %}}

## 2019-01-30
{{% release-notes-container type="c"%}}
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#2019-01-30)
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Entities resolvers
{{% /release-notes-container %}}


## 2019-01-11
{{% release-notes-container type="c"%}}
- The DEFAULT_TEMPLATE option has been modified.The permissions given to the owner were :
**iam:all:viewer**
Now:
**all:all:1a** `This is for future updates. Ignore it for the time being.`
The owner of the organization now has an admin permission all across the
apis:
**org:api:rsc:crud1xaf.**
- Intern members (@xmltravelgate.com, @travelgatex.com) only can be added to TEAM type groups.
- Operations now does not check permissions. All operations listed.
{{% /release-notes-container %}}

{{% release-notes-container type="a"%}}
- deleteApi function implemented.
- Api-key can be added to more than one product on the same folder.
- Group query can now be filtered by parent.
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Error when adding apis to TEAM type groups.
- When creating new member used to always return "Auth0 connection error"
- Some errors description have been improved.
{{% /release-notes-container %}}

## 2019-01-09
{{% release-notes-container type="f"%}}
- Endpoint error messages
{{% /release-notes-container %}}

{{% release-notes-container type="a"%}}
- Launch patch with new patch file
- New patch fixing write headers
{{% /release-notes-container %}}

{{% release-notes-container type="r"%}}
- Headers patch
{{% /release-notes-container %}}

## 2018-12-19
{{% release-notes-container type="c"%}}
- New implement of cache
- Use gzip to unzip response instead of delegate to request module
{{% /release-notes-container %}}

{{% release-notes-container type="a"%}}
- Two caches, one for apikeys and another one to redirect endpoint
- Implement case not zipped
- Implement cache to rewrite endpoint
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Timming
{{% /release-notes-container %}}

## 2018-12-17
{{% release-notes-container type="r"%}}
- Worker
{{% /release-notes-container %}}

## 2018-12-14

{{% release-notes-container type="a"%}}
- Use worker and main thread to stats depends search, and calculate
- Send stringify of body_worker
- Protect Buffer
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- ElapsedTime when error, and fix jsonstringify
- Timming
{{% /release-notes-container %}}

{{% release-notes-container type="r"%}}
- Tracing from worker (detail)
- Tracing from utils2 (detail)
{{% /release-notes-container %}}

## 2018-12-13
{{% release-notes-container type="c"%}}
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#2018-12-13)
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Timming and use workers for stats.
- Status code when endpoint fails
- Worker
{{% /release-notes-container %}}

## 2018-12-11
{{% release-notes-container type="c"%}}
- Handler for updating api-keys to different groups
{{% /release-notes-container %}}

{{% release-notes-container type="a"%}}
- Error description to not found members
- deleteApi functionality
- Parent filter to groups
- Filters to external schema
{{% /release-notes-container %}}

{{% release-notes-container type="r"%}}
- isAdmin from productData
{{% /release-notes-container %}}

## 2018-12-04
{{% release-notes-container type="a"%}}
- All check for GetSons
- Description to more than one member in a api-key error
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Descendents query, only returns valid groups
- all permissions, now returns only orgs and validGroups
{{% /release-notes-container %}}

{{% release-notes-container type="r"%}}
- Debug prints
{{% /release-notes-container %}}

## 2018-11-29
{{% release-notes-container type="c"%}}
- Upgrade libraries
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Autogencode. Deleted commit
{{% /release-notes-container %}}

## 2018-11-27
{{% release-notes-container type="c"%}}
- 'all' requestors now able to update accesses non of their ownage
{{% /release-notes-container %}}

{{% release-notes-container type="a"%}}
- Shared automatic update in UpdateAccess
{{% /release-notes-container %}}

## 2018-11-26

{{% release-notes-container type="a"%}}
- impersonatedJwt to member resolver
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- all permissions for productData->apis resolver
- all' user case in resource data resolver for role connection
- get organizations function for normal permission table
{{% /release-notes-container %}}

## 2018-11-22
{{% release-notes-container type="c"%}}
- Max length for org code raised to 8
{{% /release-notes-container %}}

{{% release-notes-container type="a"%}}
- UpdateOrganizationDomain mutation to intern schema
- Error on alpha-numeric characters for organization code
- UpdateOrganizationDomain delete function
- Domain filter to organizations function resolver
- Autogenerated code for new orgs with no code
- Domain filter to organizations function in external schema
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- all:api:all use case
{{% /release-notes-container %}}

## 2018-11-21
{{% release-notes-container type="c"%}}
- RefreshToken now returns a list of apikeys with the result
- Intern schema modified adding domain scalar and domains in organization
- Organization data resolver has been modified to add domain resolvers
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Token-gen for updateGroupAdmin
{{% /release-notes-container %}}

## 2018-11-20
{{% release-notes-container type="c"%}}
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#2018-11-20)
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Refresh token funcition.
- Create Organization.
- Errors description.
- Update group
{{% /release-notes-container %}}

{{% release-notes-container type="a"%}}
- Entities call when move folder and change members refresh token position.
{{% /release-notes-container %}}

{{% release-notes-container type="r"%}}
- Useless folders from create folder template
{{% /release-notes-container %}}

## 2018-11-07

{{% release-notes-container type="c"%}}
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#2018-11-07)
{{% /release-notes-container %}}

{{% release-notes-container type="a"%}}
- Force group names to lowcase only in TEAM/ORG cases
{{% /release-notes-container %}}

{{% release-notes-container type="r"%}}
- Useless folders
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Update organizations.
{{% /release-notes-container %}}

## 2018-10-28
{{% release-notes-container type="c"%}}
- [GraphQL Schema updated.](/travelgatex/release-notes/graphql-schema-changes/#2018-10-28)
{{% /release-notes-container %}}

{{% release-notes-container type="a"%}}
- New field **Geoname** in Hotels query, which provides hotel's geographical information
{{% /release-notes-container %}}

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
