+++
title = "Error Codes"
pagetitle = "Error Codes"
description = "List and description of error codes"
icon="fa-list-ol"
weight = 1
alwaysopen = false
isDirectory = false
+++

# Error list


The following errors will be returned as Http Status Errors:

|                Code             |       Description       | Explanation
| :-----------------------------: | ----------------------- | ---------------------------- |
| *400* | *Bad Request* | There is a problem on the request data.
| *401* | *Unauthorized* | There is an access problem.
| *500* | *Internal Server Error* | Internal undefined error.


In other cases we can receive a 200 Http Status (ok) and an error node on the body's response:

|                Code                |     Explanation         
| :--------------------------------: | ----------------------- |
| *010* | Exception/Unexpected Error. 
| *020* | Error validating the RQ. 
| *030* | No results.
| *040* | Incorrect AccessToken.


{{% alert theme="info" %}}Note that we can receive a Http Status Error and an error node on the body's response to identificate the concrete problem.{{% /alert %}}