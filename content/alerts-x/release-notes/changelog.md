+++
title = "Changelog"
pagetitle = "Alerts-X changelog"
description = "Contains an accurated, chronologically-ordered list of notable changes"
weight = 2
icon="fa-exchange"
svgicon="https://media.graphcms.com/kDcxZmKCQx2oLNNfGvSz"
alwaysopen = false
hidden = false
tags = ["products-changelog"]

+++

Easily accessible log of notable changes to Alerts-X

## 2019-08-12
{{% release-notes-container type="f"%}}
- Error to update alerts in some cases.
{{% /release-notes-container %}} 

## 2019-08-07
{{% release-notes-container type="a"%}}
- Now is Checked `api`, `operation` & `errorCode` inputs to be sure that exists or its combinations are posible.
{{% /release-notes-container %}} 

{{% release-notes-container type="a"%}}
- Now is checked if update values are different. If not, update is rejected.
{{% /release-notes-container %}} 

## 2019-08-06
{{% release-notes-container type="a"%}}
- New field `api` in configuration inputs to be able to filter by serviceApi (hotel, transportation...).
- New field `API` in `AlertConfiguration`.
{{% /release-notes-container %}} 

## 2019-08-05
{{% release-notes-container type="a"%}}
- Returns warning to advise of deleted events if configuration of the alert is updated.
{{% /release-notes-container %}} 

{{% release-notes-container type="a"%}}
- New field `ComercialType` in `AlertConfiguration`.
{{% /release-notes-container %}} 

## 2019-07-30
{{% release-notes-container type="f"%}}
- Save historicalWindow correctly.
{{% /release-notes-container %}} 

## 2019-07-29
{{% release-notes-container type="f"%}}
- Check permissions of team groups.
{{% /release-notes-container %}} 

## 2019-07-25
{{% release-notes-container type="a"%}}
- Allow to get alerts without `groups` criteria input.
{{% /release-notes-container %}} 

{{% release-notes-container type="f"%}}
- Fixed an error to allow an alert create in an AlertsX group with no alert.
{{% /release-notes-container %}} 

## 2019-07-10
{{% release-notes-container type="a"%}}
- After an alert configuration update their past `events` will be deleted.
{{% /release-notes-container %}} 


## 2019-06-12
{{% release-notes-container type="f"%}}
- Fixed an error that was causing an unsuccessful alert create or update to set `clients`, `suppliers` and `accesses` to the alert for Travelgate Teams users.
{{% /release-notes-container %}}

## 2019-06-11
{{% release-notes-container type="f"%}}
- Fixed an error to return all the `events` of the alerts.
{{% /release-notes-container %}}

## 2019-06-06
{{% release-notes-container type="a"%}}
- Added `/Health` to check service status.
{{% /release-notes-container %}}

## 2019-05-23
{{% release-notes-container type="a"%}}
- Alerts-X [product documentation](https://docs.travelgatex.com/alertsx/) is available
{{% /release-notes-container %}}



