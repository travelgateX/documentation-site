+++
title = "Response status codes"
pagetitle = "Response status codes"
description = "HTTP response status codes indicate whether a specific HTTP request has been successfully completed"
icon = "fa-code"
weight = 3
alwaysopen = false
hidden = false
+++
## General Codes

The status codes are divided into the five categories presented below.

1. Informational responses (100–199),
2. Successful responses (200–299),
3. Redirects (300–399),
4. Client errors (400–499),
5. Server errors (500–599).

The below status codes are defined by section 10 of RFC 2616.

You can find an updated specification in RFC 7231. 

## Specifics TravelgateX response codes
|Code |Reason |	Description |
|-----|-------|-------------|
|200|	success	||
|180|	Informational		||
|280|	Success		||
|380|	Redirect		||
|480|	ClientError		||
|580|	ServerError	||
||||
|400|	invalidParameter	|	Indicates that a request parameter has an invalid value. |
|400|	badRequest	|Indicates that the query was invalid. |
|401|	invalidCredentials|	Indicates that the auth token is invalid or has expired|
|401|	insufficientPermissions|	Indicates that the user does not have sufficient permissions for the entity specified in the query.|
|403|	LimitExceeded	|Indicates that user has exceeded the quota |
|403|	userRateLimitExceeded	|Indicates that the Queries per X |seconds per user limit has been exceeded|
|403|	rateLimitExceeded	|Indicates that the organization/Instance rate limits have been exceeded.|
|403|	quotaExceeded	|Indicates the concurrent requests per view has been reached|
|405|	methodNotAllowed	|Deprecated and protected queries|
|408|	requestTimeout	||
|406|	notAcceptable	||
