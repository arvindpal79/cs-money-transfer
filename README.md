# Backbase Front End Assignment: Make A Transaction
Simulation of simple money transfer

## Assumptions
Below are the assmuption has been made while building the application

#### Full screen fluidic layout using Bootstrap CSS framework
Bootstrap container-fluid css class has been applied.
#### Added En and NL icons to change language
Not part of the design mockup. Has been added just to show multi-lingual feature.
### Icons in the panel heading having white background color
The arrow.png and briefcase.png icons having white white background color so most suitable filter effect has been applied.

### Icons in the panel heading having white background color
The arrow.png and briefcase.png icons having white white background color so most suitable filter effect has been applied.

### Generic loader has been implemented to show loading spinner for every http API call
Additionally added some delay just to show loading spinner behaviour.

## how to set up and run the app
NodeJs and Angluar must be installed to run application in local machine.

Extract zip file or Checkout github repor and inside root folder execute below commaonds
  ### npm install
  ### ng serve -o
## Application Architecure
├── src
│   ├── app
│   │   ├── common
│   │   │   ├── components
│   │   │   │   ├── panel-heading.component.ts
│   │   │   ├── directives
│   │   │   │   ├── currency-formatter.directive.ts
│   │   │   │   ├── currency-formatter.directive.ts
│   │   │   ├── interface
│   │   │   │   ├── cs-transaction.component.ts
│   │   │   │   ├── cs-transfer.component.ts
│   │   │   ├── pipes
│   │   │   │   ├── clone-deep-formatter.pipe.ts
│   │   │   │   ├── data-filter.pipe.ts
│   │   │   │   ├── sort.pipe.ts
│   │   │   ├── service
│   │   │   │   ├── interceptor.service.ts
│   │   │   │   ├── loader.service.ts
│   │   │   ├── shared-data
|   │   │   │   ├── shared-data.service.ts
│   │   ├── cs-header
│   │   │   ├── cs-header.component.ts
│   │   ├── cs-loader
│   │   │   ├── cs-loader.component.ts
│   │   ├── cs-transaction
│   │   │   ├── cs-transaction.component.ts
│   │   ├── cs-transfer
│   │   │   ├── cs-transfer.component.ts
│   │   ├── services
│   │   │   ├── transaction.service.ts
│   │   │   ├── transfer.service.ts
|   ├── assets
|   |   ├── i18n
|   |   |   ├── en.json
|   |   |   ├── nl.json
|   |   ├── icons
|   |   ├── mock-services
|   |   |   ├──  transaction.json // Temporary mock data
|   ├── theme
|   |   ├── *.scss // Extend Bootstrap variables and classes with custom css classes
