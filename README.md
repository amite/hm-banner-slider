Notes:

- replace isotope with new version
- Remove the * from any filter - empty the attribute
- Add services category names to each case study item 
- Add styles from line 1799
- Modify existing styles slightly to include services-filters classes lines 1783 1784
- replace script call to isotope in plugins.js with code in main.js

CMS Side:

- template is resources/index - search for the lv mentioned below
- channel is clients
- cf_client_vertical_tag controls class output. It is parsed inside pl_resource_client
- Client Vertical Tag is found in client channel entries
- pl_resource_client is in resources channel custom fields group
- lv is lvsnp_resources_casestudy_list - found in resources group
- add a new playa pill tag field to client channel - client_services_tag that will add the service this belongs to
- populate the new pill tag with required service categories