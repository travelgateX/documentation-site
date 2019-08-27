+++
title = "FAQs"
pagetitle = "Insights-X FAQs"
description = "Insights-X FAws"
icon = "fa-info-circle"
weight = 5
alwaysopen = false
+++

In order to analyze and **access useful insights**, we recommend you to read Insights-X FAQs.  

## * **Data sets and Reporting:**


* **How do I get access to my data sets?**

Insights-X data sets are stored in BigQuery. Once Insights-X is acquired, we will provide you with the [credentials to access](insights-x/datasets/types-of-datasets/) and connect to the database with your data sets.


* **How often are the data sets updated?**

Insights-X stores data from all transactions passing through TravelgateX. Everyday, data from the previous day is uploaded automatically to data sets. There is a delay of 24 hours due to data ingest and data cleansing.


* **Can I create my own BI dashboard with my business data from TravelgateX?**

Once you have access to the data sets, it is possible to create customizable BI dashboards for all business areas. [Insights-X datasets](/insights-x/datasets/) are compatible with different BI tools, such as Data Studio, Micro Strategy, Power BI, Tableau, etc.


* **How can I use the Data Studio template as report tool for my business?**

Insights-X makes available a [Data Studio template](insights-xdatasets/dataset-tooling/) for clients and providers connected in TravelgateX. By using this template, it is possible to monitor KPis of each connectivity, analyse bookings and know your competitiveness on TravelgateX platform. Once data set is connected to Data Studio, it is possible to modify the template according to your preferences and analysis.


* **What is the level of detail provided by Insights-X?**

Performance, Insights and Benchmark datasets allow clients and suppliers analyse data from transactions at a client / provider and city levels. Besides, thanks to Insights-Portfolio it is possible to analyse the performance at a hotel level. 


* **What is the time based aggregation?**

Insights-X data is aggregated on a daily, weekly or monthly basis. 


* **Can I compare two time ranges in one report?**

Yes. Insights-X has up to three years historical data. So it is possible to compare data to previous periods.


## * **Performance Data Sets:**


* **If I do “multi search” for search request, how are these searches captured in Insights-x?**

In Performance datasets, search requests counts multisearch as one unique search. However, in Insights datasets, the request goes till hotel level, it would be equivalent to N hotel searches for each multi-search.


* **How is “%Searches Ok” calculated?**

In Performance datasets, the percentage of searches ok is calculated over the total amount of search requests, no matter the amount of searched hotels.
However, in Insights datasets, that metric is calculated over the total of one specific hotel.


* **Are searches made for price comparison included in “Searches”?**

Yes. All searches are included, even those made to compare rates or create rate calendars.


* **How has “Response Time” been calculated on searches ,quotes, bookings and cancellations?**

Response Time (RP) is the total time aggregated. Example: client RP + TGX RP-supplier RP + TGX RP+ client RP


* **What do errors on searches, quotes and bookings mean and how could I solve each type?**

    * **“No results”**:  it is a common error and refers to “non availability” for one search (hotel, distribution, check in, nights, etc).

    * **“Communication”**: time out due to problems to connect with providers.

    * **“Seller”**: error returned by the supplier that could not be tagged.

    * **“Bad Request”**: means bad requests: the supplier does not accept the distribution, dates or the requests.

    * **“Integration”**: Unexpected error on TravelgateX’ side.



## * **Insights Data Sets:**


* **Revenue is always in Euros currency; how is the exchange calculated?**

Everyday Insights-X check the exchange rate and convert all currencies to Euros. 


* **Can I have data from requests at a destination level?**

Although some providers allow searches by destination (non standard destinations), at this moment TravelgateX only captures hotel requests. 


* **What does “source market” refer to?**

Source Market refers to the value sent by client via API on “market” field. In case the field “market” is empty,  Insights-X will take the field “nationality”. Source market is based on the standard ISO 31661-2 apha-2. 


* **How is “Amount Cancelled” calculated ?**

“Amount Cancelled” is the total amount of cancelled revenue from the cancelled bookings in a period of time.


* **Some fields like “origin market” or “destination” do not return real values, just “-” or “null”. Why is this happening?**

When clients or providers do not send the value on the field, Insights-X captures the register as “null”. We recommend investigate the case and find out the provider / client that is not sharing the right value.


* **What is “Cancel Window”?**

Cancel window is the average time (days) between the booking date and the date the booking was canceled. 


* **In case of cancelled bookings, would the revenue from bookings be updated?**

Yes. Revenue from bookings and cancelled revenue will be updated every day once cancelled bookings data has been checked.


* **Hoteles Portfolio, ¿is this the number of unique hotels?**

Hotels displayed in Portfolio report are unique at a provider level. 


* **How is a “multisearch” for search request captured in Insights-x?**

In Insights datasets, the request goes till hotel level, it would be equivalent to N hotel searches for each multi-search. However, at search request level, Performance datasets count multisearch as one unique search.


* **How can I optimize requests and hotels portfolio to reduce costs and improve performance?**

Thanks to Portfolio dataset you will be able to monitor hotels portfolio for each client / provider. It is possible to analyse at a hotel level, the total requests, errors, performance ratios from search to book, number of bookings, cancelations, etc.


* **How to understand hotel “status” on portfolio page?**
    * **"Hotels not in portfolio queried"**: requested hotels not available in provider’s portfolio. Those requests might happen due to mapping errors or non updated inventory.

    * **"Hotels not queried"**: hotels in provider’s portfolio not being requested. One of the reasons might be that mapping is not updated or the client does not operate in that destination.

    * **"Hotels in portfolio queried"**: hotels in provider’s portfolio being requested.

    * **"Hotels not dadded"**: hotels requested but not added in provider’s portfolio. If you are on the client side, we recommend you to check with your providers that hotels have been updated on TravelgateX platform.


* **“Total Hotels Available”, how is this metric calculated?**

Report Page “Summary” of DS-Insights-X template, displays the number of “Total Hotels Available”. This metric refers to the total of hotels that have received at least one search during the previous month.



## * **Benchmark Data Sets:**


* **What is compared in benchmarking?**

Benchmarking is a competitive analysis of main indicators in TravelgateX: performance, availability (available hotels, both offered and received), revenue from bookings and number of bookings. Clients / providers will see their position in TravelgateX rank up to “city” level against other clients / providers in TravelgateX.


* **What is “Comp. Set”?**

Comp. Set (Competitive Set) is a group of suppliers / buyers that are seen as direct competitors to your own business and are selling / buying through TravelgateX. All data is anonymous; Insights-X keeps Connected Partners’ privacy and any company name will never be shared.


* **What is TravelgateX ranking?**

TravelgateX ranking shows, for the same search criteria, the achieved position by one client / provider in TravelgateX. For example, as a provider, you will be able to see your position in the ranking selling to one specific destination.


* **What does “Total TGX” metric on benchmarking mean?**

Total TGX (TravelgateX) shows you the number of total hotels, bookings or revenue in TravelgateX for the same search key. This metric is a reference to understand how well that destination is performing (up to city level) on TravelgateX Platform. Clients and providers will be able to know if there are opportunities to improve on those destinations and how many competitors are making more revenue and bookings.


* **Can I know how many competitors are selling / buying in my destinations?**

Yes. Thanks to Benchmark data sets it is possible to know the number of competitors on your destinations. Besides, you will be able to know the volume of bookings and estimate your growth potential for that destination.


* **Is my price strategy competitive?**

Thanks to Benchmark datasets you will be able to compare your price strategy for the search key “source market | destination | booking window” against other buyers / suppliers in TravelgateX.


* **Is my L2B (Look-to-Book) being competitive in TravelgateX?**

Benchmark datasets allows L2B comparison for the search key “source market | destination (city) | booking window". Use this metric as a reference of your competitiveness in our platform.


* **How to increase bookings and revenue with new connections?**

Table “Opportunities” shows the number of potential clients / providers not connected with you but selling or buying in your markets or destinations. This will allow you to identify potential partnerships to boost your business by selling your product into new markets or new destinations.
