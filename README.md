# Angular Pokémon

This is a demonstration project using Angular and <a href="https://pokeapi.co/" target="_blank">Poke Api</a>

## Requirments
Get an Angular application  connecting to Poke Api, and make the application desktop and mobile friendly.

## Live Demo

The live demo is available <a href="https://appdemo1.com" target="_blank">here</a>

## Run Locally

To run this Angular project locally, download this entire repo. Open command prompt and change to the downloaded directory. In command prompt run "npm i", after npm finishes run "ng serve". The web application should then be available on http://localhost:4200/

## Project Details

This project was generated with <a href="https://github.com/angular/angular-cli" target="_blank">Angular CLI</a> version 8.0.0.

This project uses <a href="https://material.angular.io/" target="_blank">Angular-Material</a> and <a href="https://github.com/angular/flex-layout#readme" target="_blank">Angular Flex Layout</a>

## Development Details

1. This project consists of 3 main components (in the components folder) 
- pokemon-header: contains the mat-toolbar used for filtering
- pokemon-detail: displays the Pokemon cards
- pokemon-detail-modal: displays the selected Pokemon

2. The services folder contains the following
  - api: contains the api calls to Poke Api and a resolver service that caches the types
  - behaviour-services: used to keep track of the Pokemon filters and sync this data between pokemon-header and pokemon-detail
  - guards: currently only used for changing the page title but this would be mostly used for security

3. The pipes folder contains the filters for 
  - search text 
  - types

4. The data-models contains the models to match the api requests

5. The styles folders contain several scss pages that are imported in to the main "styles.scss" file

No tests were created for this project but usually, jasmine and karma are used when testing Angular applications.
