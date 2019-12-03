+++
title = "Reference"
pagetitle = "Perfomance Dataset Reference"
description = "Learn about how the information is stored in our performance dataset"
icon = "fa-book"
weight = 2
alwaysopen = false
+++

On this page you will learn how the data is stored in Performance Dataset.

# Tables

Data is stored in multiple tables depending on the kind of information that wants to be queried and depending on the level of aggregation:

* Daily   (agregation stored every day)
* Weekly  (aggregation stored the first monday of every week)
* Monthly (aggregation stored the first day of the month)

Descriptions of each table and their correspondent fields are found below:


## stats\_(daily|weekly|monthly)\_(buyer|seller)
This table contains transactional information (e.g. response status, response time) of requests between clients and providers.

__fields__

* **search\_date (TIMESTAMP).** Search date in UTC (format: YYYY-MM-DD hh:mm:ss)
* **client\_id (STRING).** Client unique ID
* **provider\_id (STRING).** Provider unique ID
* **client\_owner    (STRING).** Organization's name of the client.
* **provider\_owner (STRING).** Organization's name of the provider.
* **speed (BOOLEAN).** It indicates if the source of request was the client or Speed-X to load info in cache (0=Client, 1=Speed-X).
* **search\_ok (NUMBER).** Quantity of searches with searchable results.
* **search\_nok_no_results (NUMBER).** Quantity of searches without searchable results.
* **search\_nok_provider_error (NUMBER).** Quantity of searches with generic error from provider.
* **search\_nok_bad_request (NUMBER).** Quantity of searches with error due a wrong request.
* **search\_nok_integration_error (NUMBER).** Quantity of searches with error due a failure in the connector.
* **search\_nok_communication_error (NUMBER).** Quantity of searches with error due a timeout.
* **search\_nok_others (NUMBER).** Quantity of searches with errors different to those above.
* **search\_time (NUMBER).** Total response time (in milliseconds) for all searches.
* **quote\_ok (NUMBER).** Quantity of quotes with searchable results.
* **quote\_nok_no_results (NUMBER).** Quantity of quotes without searchable results.
* **quote\_nok_provider_error (NUMBER).** Quantity of quotes with generic error from provider.
* **quote\_nok_bad_request (NUMBER).** Quantity of quotes with error due to a wrong request.
* **quote\_nok_integration_error (NUMBER).** Quantity of quotes with error due a failure in the connector.
* **quote\_nok_communication_error (NUMBER).** Quantity of quotes with error due to a timeout.
* **quote\_nok_others (NUMBER).** Quantity of quotes with errors different to those above.
* **quote\_time (NUMBER).** Total response time (in milliseconds) for all quotes.
* **booking\_ok (NUMBER).** Quantity of correct bookings.
* **booking\_nok (NUMBER).** Quantity of bookings with an error.
* **booking\_time (NUMBER.** Total response time (in milliseconds) for bookings.
* **cancel\_ok (NUMBER).** Quantity of correct cancellations.
* **cancel\_nok (NUMBER).** Quantity of cancellations with an error.
* **cancel\_time (NUMBER).** Total response time (in milliseconds) for cancellations.
* **other\_ok (NUMBER).** Quantity of transactions that cannot be included in one of the groups above and that didn't receive an error.
* **other\_nok (NUMBER).** Quantity of other transactions with an error.
* **other\_time (NUMBER).** Total response time (in milliseconds) for other transactions.

__Preview__

| search\_date            | client\_id | provider\_id | provider\_owner  | client\_owner   | speed | search\_ok | search\_nok_no_results | search\_nok_provider_error | search\_nok_bad_request | search\_nok_integration_error | search\_nok_communication_error | search\_nok_others | search\_time | quote\_ok | quote\_nok_no_results | quote\_nok_provider_error | quote\_nok_bad_request | quote\_nok_integration_error | quote\_nok_communication_error | quote\_nok_others | quote\_time | bookinging\_ok | bookinging\_nok | bookinging\_time | cancel\_ok | cancel\_nok | cancel\_time | other\_ok | other\_nok | other\_time  |
| :---------------------- | :--------- | :----------- | :-------------- | :------------- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| 2018-03-28 12:00:00 UTC | client 1   | provider 1   | Org Name 1      | Org Name 1     | false | 372408 | 159272 | 571 | 30093 | 0 | 40 | 0 | 206883360 | 182 | 0 | 0 | 0 | 0 | 0 | 0 | 38166 | 3 | 0 | 31848 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2018-03-28 12:00:00 UTC | client 1   | provider 2   | Org Name 2      | Org Name 2     | false | 50 | 10 | 0 | 0 | 0 | 0 | 0 | 48754 | 419 | 6 | 0 | 0 | 0 | 4 | 0 | 374301 | 5 | 0 | 41257 | 1 | 0 | 6080 | 172 | 0 | 5116 |
| 2018-03-28 12:00:00 UTC | client 2   | provider 1   | Org Name 3      | Org Name 3     | false | 548214 | 0 | 577 | 0 | 714 | 0 | 0 | 47457579 | 3719 | 32 | 0 | 0 | 0 | 0 | 0 | 327425 | 18 | 0 | 81757 | 6 | 4 | 31803 | 230 | 0 | 42614 |


