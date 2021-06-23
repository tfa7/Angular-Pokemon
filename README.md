# Angular Pokémon

This is a demonstration project using Angular and <a href="https://pokeapi.co/" target="_blank">Poke Api</a>

## Requirments
Get an application connecting to Poke Api, and make the application desktop and mobile friendly.

## Live Demo

The live demo is available <a href="https://appdemo1.com" target="_blank">here</a>

## Screenshots

Available in the screenshots folder for both desktop and mobile

## Why Angular

I choose Angular because 
1. it is easy to work 
2. very little code needed to get your result
3. has a large community for supporting 
4. comes with a good testing framework -jasmine and karma
5. great ui tools for mobile - material and flex layout

## Run Locally

To run this project locally:
1. download the entire repo
2. open command prompt (or any terminal) and change to the downloaded directory 
3. in command prompt run "npm i" to install required packages 
4. after npm finishes run "ng serve"

The web application should then be available locally on http://localhost:4200/

## Project Details

This project was generated with <a href="https://github.com/angular/angular-cli" target="_blank">Angular CLI</a> version 8.0.0.

This project uses <a href="https://material.angular.io/" target="_blank">Angular-Material</a> and <a href="https://github.com/angular/flex-layout#readme" target="_blank">Angular Flex Layout</a>

## Development Details

### This project consists of 3 main components (in the components folder) 
1. pokemon-header: contains the mat-toolbar used for filtering
2. pokemon-detail: displays the Pokemon cards
3. pokemon-detail-modal: displays the selected Pokemon

We could have keeping the header and detail on one page but for seperation of concerns and single responsible principle, both of these were seperated. The observer behavioural design pattern ensures the respective conponents are in sync by allowing components to subscribe to the 'PokemonFilterService'.

### The services folder contains the following
1. api: contains the api calls to Poke Api and a resolver service that caches the pokemon types
2. behaviour-services: used to keep track of the Pokemon filters, and to sync this data between the pokemon-header and pokemon-detail components
3. guards: currently only used for changing the page title but this would be mostly used for security

### The pipes folder contains the filters for 
1. search text 
2. types

Pipes allow our code to be reused

### The data-models contains 
1. the models to match the api requests

### The styles folders contains 
1. several scss pages that are imported in to the main "styles.scss" file

No tests were created for this project but usually, jasmine and karma are used when testing Angular applications.
