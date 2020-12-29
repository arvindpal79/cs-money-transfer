# Backbase Front End Assignment: Make A Transaction
Simulation of simple money transfer

## Assumptions
Below are the assumptions has been made while building the application

* #### Full screen fluidic layout using Bootstrap CSS framework
Bootstrap container-fluid css class has been applied.
* #### Added En and NL icons to change language
Not part of the design mock-up. Has been added just to show multi-lingual feature.
* #### Icons in the panel heading having white background color
The arrow.png and briefcase.png icons having white white background color so most suitable filter effect has been applied.

* #### Icons in the panel heading having white background color
The arrow.png and briefcase.png icons having white white background color so most suitable filter effect has been applied.

* #### Generic loader has been implemented to show loading spinner for every http API call
Additionally, added some delay just to show loading spinner behaviour.

## how to set up and run the app
NodeJs and Angluar must be installed to run application in local machine.

Extract zip file or checkout github repo and inside root folder execute below commands
  ### npm install
  ### ng serve -o
## Application Architecture
├── src \
│      ├── app \
│      │      ├── common \
│      │      │      ├── components \
│      │      │      │      ├── panel-heading.component.ts // Common directive for panel heading \
│      │      │      ├── directives \
│      │      │      │      ├── currency-formatter.directive.ts // Format currency \
│      │      │      ├── interface \
│      │      │      │      ├── cs-transaction.component.ts // interface for transactions \
│      │      │      │      ├── cs-transfer.component.ts // interface for transfer \
│      │      │      ├── pipes \
│      │      │      │      ├── clone-deep-formatter.pipe.ts // Deep copy of transactions \
│      │      │      │      ├── data-filter.pipe.ts // Generic filter to show search resutl \
│      │      │      │      ├── sort.pipe.ts // Sorting \
│      │      │      ├── service \
│      │      │      │      ├── interceptor.service.ts // Interceptor service for http calls \
│      │      │      │      ├── loader.service.ts // Loader service to show hide Loading spinner \
│      │      │      ├── shared-data \
│      │      │      │      ├── shared-data.service.ts // Data communication withou @Input and @Output decorator \
│      │      ├── cs-header \
│      │      │      ├── cs-header.component.ts // Applications header \
│      │      ├── cs-loader \
│      │      │      ├── cs-loader.component.ts // Loading spinner \
│      │      ├── cs-transaction \
│      │      │      ├── cs-transaction.component.ts // Transactions component \
│      │      ├── cs-transfer \
│      │      │      ├── cs-transfer.component.ts // Transfer component \
│      │      ├── services \
│      │      │      ├── transaction.service.ts // Service to fetch data for transaction component \
│      │      │      ├── transfer.service.ts // Service to transfer money for transfer component \
│      ├── assets \
│      │      ├── i18n \
│      │      │      ├── en.json // Translatoin keys for English language \
│      │      │      ├── nl.json // Translatoin keys for Dutch language \
│      │      ├── icons // Icon images \
│      │      ├── mock-services \
│      │      │      ├──  transaction.json // Temporary transactions mock data \
│      ├── theme \
│      │      ├── *.scss // Extend Bootstrap variables and classes with custom css classes \

