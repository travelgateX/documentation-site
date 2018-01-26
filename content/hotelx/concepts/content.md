+++
title = "Content"
pagetitle = "Hotel & Static Content"
description = "Learn about how manage content data to manage in your site. Hotel, Boards, Categories..."
weight = 5
alwaysopen = false
+++

Content operations can be used in order to upload and update information about diferents data.

## Ranking Hotels process

The mail goal of this process is allow to rank hotels to improve the portfolio, to do this action need to upload a file in csv format with a specific name file and headers fields.

### File names (mandatory)

Each file has a different function depending of the name has a sense or another from the business point of view:

To process files correctly need to have a specific file names otherwise the process will fault.

* Rank1 (Hotels with sell) file name --> (rank1.csv)
* Rank2 (Hotels direct contraction) file name --> (rank2.csv)
* Rank3 (Hotels direct sell) file name --> (rank3.csv)
* Rank4 (Top sell hotels current year) file name --> (rank4.csv)

### Header fields (mandatory)

To process file correctly need to have a specifics headers fields names otherwise the process will fault.

Names fields (mandatory):

* provider_id (string)
* hotel_code (string)
* rank (boolean 1,0)

Example file format (rank1.csv):

**provider_id,hotel_code,rank**
**travelgatex,2018,1**
 
### Process file

When the file is done the next step is upload it in TRAVELGATEX ftp (Travelgate provided ftp access) and then the process starts automatically with the validation of file name and headers fields, finally we read row by row and update hotel rank.