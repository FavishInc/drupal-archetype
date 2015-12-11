# Drupal Archetype

## Getting Started
Base requirements to get up and running with this project is to ensure that you have [Docker](https://docker.com) set up
on your machine. This installation guide assumes OSX and we suggest using [homebrew](http://brew.sh/) and [cask](http://caskroom.io/) which is easily installed from the command line.

### Homebrew, Cask and Docker Toolbox Install
```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew tap caskroom/cask
brew cask info dockertoolbox
```

Once thats complete you should have `docker`, `docker-compse`, and `docker-machine` installed as command line tools as well as 2 new applications you can run from spotlight "Docker Quickstart Terminal" and "Kitematic".

## Starting the Docker Containers
* In order to start the virtual machine that will actually host the docker containers you need to run the "Docker Quickstart Terminal". It will grab boot2docker and configure your terminal environment to forward any docker command to that machine by setting an environment variable.
* After that is complete, running `docker-compose up` from this directory will download the necessary images from dockerhub (nginx, php, db, and cli) and start up a local development environment.
* Once you're up and running, you can use `docker ps` to see your currently running containers.
* To jump into a fully functional [ZSH shell](https://github.com/robbyrussell/oh-my-zsh) run `docker exec -it drupal_cli zsh` and you'll be placed directly into the web sites document root. This container provides you with modern drupal command line tools including:
    * [drush](http://www.drush.org/)
    * [npm](http://www.drush.org/)
    * [drupal console](http://www.drupalconsole.com/)
    * [composer](getcomposer.org)

## Composer
The .gitignore file in this repository specifically ignores contributed modules and the entirety of Drupal core. This is intentional. Instead of tracking all of that third party code and adding a bunch of churn to our repository we track only the package names and versions that we want to include in the composer.json file found in the `project` directory. That way when we need to upgrade a module or drupal core it is reflects in a one line diff that changes from: `drupal/drupal: 8.0.1` to `drupal/drupal: 8.0.2`

In order to get a full populated and functional Drupal install in place the first thing you'll need to do after you jump into the CLI above is `composer install --prefer-dist`. This will fetch all of the third party projects and put them into place automagically.

Adding new modules, themes and libraries should be done in this file to avoid tracking any third party code. We have an example or two in there for guidance and you can use `composer/require` to add anything in [Drupal Packagist](https://packagist.drupal-composer.org/).


## Drush
Drush works as usual with a few super powers.
* in `.docker/etc/drush` you'll notice 2 files that let you specify aliases for your development and potentially production environments. If you fill those out with the correct hostname and directory you can perform local and remote operations form inside the *CLI container*.
* In your *CLI container* from above, running `drush sql-sync @dev @local` will grab the most up to date version of mysql from the development server and add it to your local environment.

## Building the Theme
In the same way we don't want to track third party code we don't want to track compiled or derived code either. Because we leverage SASS and ES6 in our themes you'll want to jump into the *CLI container* and into the theme directory and build the necessary code (ES5 and CSS). The process there is simple and the [readme.md](project/themes/archetype/README.md) walks you through it.

## Continuous Integration via Circle CI
This project is set up to utilize [CircleCI](https://circleci.com) to automate the build and deployment process to a server of your choice. Configuration
can be found in [`circle.yml`](circle.yml).  Note that the `build_dir` is set to `./project` so circle will set the present working directory to that location for all commands, including composer and javascript tests found in that directory's package.json.

If you want to watch this project, simply add it to your account on CircleCI's site.  All you need are github permissions.

## Tests
Base tests run by Circle CI simply check to make sure nothing went wrong after composer, and can be found in `project/ci-tests.js`.
