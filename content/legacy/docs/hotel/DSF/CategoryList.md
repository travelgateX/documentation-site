---
title: CategoryList
keywords: hotel, data structure, category list, list
search: Hotel - Data Structure - CategoryList
sidebar: mydoc_sidebar
permalink: /docs/hotel/DSF/CategoryList
---



### Method Goals


This method returns a list of categories (codes and descriptions) used in HotelList and DescriptiveInfo.



### Request Format


The request does not require any elements empty request.



### Response Format


The result returns a list of *Category* .



### Remarks


The maximum time permitted in our system before the connection is closed is **240000** milliseconds.



### CategoryListRQ Example


~~~xml
    <CategoryListRQ>
    </CategoryListRQ>
~~~


### CategoryListRQ Description



| **Element**			| **Number**	| **Type**	| **Description**		|
| ----------------------------- | ------------- | ------------- | ----------------------------- |
| CategoryListRQ		| 1          	|		| Root node.			|




### CategoryListRS Example


~~~xml
    <CategoryListRS>
        <UpgradeUTCDate>2016-10-18T13:18:03+02:00</UpgradeUTCDate>
        <Categories>
            <Category>
                <Code>3*</Code>
                <Name>3 stars</Name>
            </Category>
            <Category>
                <Code>3L</Code>
                <Name>3 keys</Name>
            </Category>
            ...
            <Category/>
        </Categories>
    </CategoryListRS>
~~~


### CategoryListRS Description



| **Element**			| **Number**	| **Type**	| **Description**		|
| ----------------------------- | ------------- | ------------- | ----------------------------- |
| CategoryListRS/UpgradeUTCDate		| 1       	|	DateTime	| Indicates the update date of the information in UTC format.	|
| CategoryListRS/Categories		| 1          	|		| Root node, list of categories.			|
| Category    	| 1..n          	| 		|         Category.			|
| Category/Code	| 1         	| String		| Code.			|
| Category/Name	| 1         	| String		| Name.			|

