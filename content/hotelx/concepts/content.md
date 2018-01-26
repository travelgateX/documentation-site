+++
title = "Content"
pagetitle = "Hotel & Static Content"
description = "Learn about how manage content data to manage in your site. Hotel, Boards, Categories..."
weight = 5
alwaysopen = false
+++

Content operations can be used in order to upload and update information about diferents data.

## Ranking Hotels process

This process allow to rank hotels from some differents business views, to do this action need to upload a file in csv format with a specific name file and header name too.

### File names (mandatory)

Configuration to use when interacting with a _supplier_, which includes:

* Rank1 (Top sell hotels)
* Rank2 (Top sell hotels)
* Rank3 (Top sell hotels)
* Rank4 (Top sell hotels)

### Header fields (mandatory)

To process file correctly need to have a specific names for Header otherwise the process will fault.

* provider_id
* hotel_code
* rank

Example:

provider_id,hotel_code,rank
travelgatex,2018,1
 
### Process file

When the file is done the next step is upload it to ftp (Travelgate provided url, user and password) and then the process starts automatically.