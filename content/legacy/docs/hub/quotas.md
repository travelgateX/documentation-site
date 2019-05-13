---
title: Hub Quotas
keywords: intro
search: Hub - Hub Quotas
sidebar: mydoc_sidebar
permalink: /docs/hub/quotas
---

This section enumerates basic quotas and throttling thresholds in XML
Travelgate Hub: 



| **Quota Name** | **Scope** | **Type** | **Behaviour when exceeded** | **Value** |
| -------------- | --------- | -------- | --------------------------- | --------- |
| Message size for Http Request | System-wide | Static | Incoming messages will be rejected and an exception will be received by the calling code. | 128KB
| Request Min. Timeout Milliseconds | Travel Operation | Static | Incoming messages with less timeout will be rejected and an error will be received by the calling code. | 50 milliseconds |
| Request Max. Timeout Milliseconds | Travel Operation | Static | Incoming request timeout will be converted to maximum time allowed. | Avail: 25 seconds. Reservation: 180 seconds. Batch: 240 seconds. |


