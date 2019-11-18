+++
title = "Data Structure"
pagetitle = "Data structure of the API"
description = "Summary of all the calls of the API"
icon = "fa-list"
weight = 1
alwaysopen = false
+++

The object of this document is to give an overview of the Payments API. A more detailed explanation of the methods can be found [here](/methods).

You can read below about what changes might and what changes might not cause an error:

* Changes that can cause an error:
  * Removing a field.
  * Modifying the type of field or attribute. For example, passing a string type to numeric.

* Changes that cannot cause an error:
  * Adding a new element or attribute.
  * Modifying the order of elements or attributes.

Payments integrations can have varying flows depending of the provider.

| **Method** | **Input** | **Output** | **Required** | **Description** |
| ----- | ----- | ----- | ----- | ----- |
| CreatePayment | CreatePaymentRQ | CreatePaymentRS | Yes | Create a payment request of the indicated amount |
| CapturePayment | CapturePaymentRQ | CapturePaymentRS | No | Capture a payment |
| DetailsPayment | DetailsPaymentRQ | DetailsPaymentRS | No | Gets information about a payment |
| ModifyPayment | ModifyPaymentRQ | ModifyPaymentRS | No | Modifies values of a created payment |
| RefundPayment | RefundPaymentRQ | RefundPaymentRS | No | Refunds a payment that has been confirmed |
| ProcessNotification | ProcessNotificationRQ | ProcessNotificationRS | No | Process the notification from a payment that has been created |
| RunTimeConfiguration | RunTimeConfigurationRQ | RunTimeConfigurationRS | Yes | Returns information related to the configuration of the provider |
| StaticConfiguration | StaticConfigurationRQ | StaticConfigurationRS | Yes | Returns information related to the configuration of the provider |

Each request sent to  **service url** requires a node called *rqXML*. The current method's input object travels inside this node.

The data structure will always have common elements in all objects as well as
specific objects related to the operation
