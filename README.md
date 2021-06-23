# Angular Pokémon

This is a demonstration project using Angular and [Poke Api](https://pokeapi.co/)

This live demo is available [here](https://appdemo1.com)

Run Locally
To run this Angular project locally, download the entire contents. Open command prompt and change to the downloaded directory. In command prompt run "npm i", after npm finishes run "ng serve". The web application should then be available on http://localhost:4200/

Project Details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.

This project uses [Angular-Material](https://material.angular.io/) and [Angular Flex Layout](https://github.com/angular/flex-layout#readme)

1. This project consists of 3 main components (in the components folder) 
- pokemon-header: contains the mat-toolbar used for filtering
- pokemon-detail: displays the Pokemon cards
- pokemon-detail-modal: displays the selected Pokemon

2. The services folder contains the following
- api: contains the api calls to Poke Api and a resolver service which caches the types
- behaviour-services: used to keep track of the Pokemon filters and sync this data between pokemon-header and pokemon-detail
- guards: currently only used for changing the page title but this would be mostly used for security

3. The pipes folder contains the filters for (a) search text and (b) type

4. The data-models contains the models to match the api requests

5. The styles folders contains several scss pages that are imported in to the main "styles.scss" file

No tests were created for this project but usually jasmine and karma are used for testing with spy’s used to dummy external calls.
