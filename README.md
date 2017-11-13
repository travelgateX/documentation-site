# travelgateX Documentation Site

travelgateX is a collection of GraphQL APIs for the travel trade.

Search & Book Hotels, Flights, etc in more than 600 suppliers seemlessly.

## Installation procedures:

- Install [Hugo](https://gohugo.io/)
- Clone the repo:

`git clone git@github.com:travelgateX/documentation-site.git`

- Go into the repository folder

`cd documentation-site`

- Init the submodule

`git submodule update --init`

- Edit the markdown files in the `content` directory
- Start the local webserver:

`hugo server -D`

- View your changes locally at `http://localhost:1313/`

## Deployment

The website is hosted in [Github Pages](https://pages.github.com/).
Hugo generates the static HTML files and in order to deploy we need push the changes to the [travelgatex.github.io](https://github.com/travelgateX/travelgatex.github.io) repository.

There's a script that does this automatically:

`./deploy.sh`

## Common Pitfalls

### Cannot push submodule

Sometimes we cannot push the submodule to github. In order to fix this issue you need to change to the `public` directory and overwrite the local changes with the uptream version:

```bash
cd public/
git reset --hard origin/master
git pull origin master
cd ..
./deploy.sh
```

### Submodule not in master branch

Sometimes the submodule stats checkout in a specific commit. In order to fix it, just change to that directory and checkout master

```bash
cd public/
git checkout master
git reset --hard origin/master
git pull origin master
cd ..
./deploy.sh
```
