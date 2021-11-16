# Game on!


# Project Summary

Game on! Video game database created with Angular implementing [RAWG video games API](https://rawg.io/apidocs)

Project was previously stored locally.


## Known Bugs

Bugs found and not fixed:

* The following warnings regarding pagination appear in Gitpod for app.py:

![gitpod-warnings](https://github.com/Sharon-B/Recipe-Box/blob/master/readme-documentation/gitpod-pagination-warnings.png)

As pagination is currently working it was decided to leave these warnings for now.

# Defensive Design

* Users cannot brute force their way onto pages that they don’t have access to eg a not logged in user cannot access the add_recipe page by adding /add_recipe to the url, a flash message will be displayed asking them to log in.
* Only logged in users can access the add recipe page.
* Logged in users can only edit/delete their own recipes.
* Only admin user can access the admin pages.
* 404 error page has being included.

# Testing

TODO 
# Deployment

TODO


## Firebase Deployment



##  Disclaimer

This project is for educational purposes only.


# Game on!

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
