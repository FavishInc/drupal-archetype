# EquityNet

## Getting Started
Base requirements to get up and running with this project is to ensure that you have [Docker](https://docker.com) set up
on your machine.  

* Running `docker-compose up` from this directory will start up a local development environment. 
* Once your containers are running, `docker exec -it equitynet_cli_1 zsh` will drop you into the CLI container from which you can
    interact with things like drush, mysql, and php.
* In your *CLI container* from above, running `drush sql-sync @dev @local` will grab the most up to date version of mysql from the development
    server and add it to your local environment.
* After this, you will need to build your theme (`themes/en/README.md`) via npm and you can point your browser to the appropriate
    address to view your local instance of the site.

## Continuous Integration via Circle CI
This project is set up to utilize [CircleCI](https://circleci.com) to keep all deployed versions in sync.  Configuration
can be found in `circle.yml`.  Note that the build_dir is set to `./project` so circle will infer commands from files 
located there, including composer and javascript tests found in that directory's package.json.

If you want to watch this project, simply add it to your account on CircleCI's site.  All you need are github permissions.

## Tests
Base tests run by Circle CI simply check to make sure nothing went wrong after composer, and can be found in `project/ci-tests.js`.

## Building the Theme
Detailed instructions can be found in themes/en/README.md