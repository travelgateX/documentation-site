[fork]: https://github.com/travelgateX/documentation-site/fork
[pr]: https://github.com/travelgateX/documentation-site/compare
[code-of-conduct]: CODE_OF_CONDUCT.md

# TravelgateX Documentation

This repository contains source for TravelgateX documentation.
TravelgateX is a collection of GraphQL APIs for the travel trade.

Master branch is published to https://docs.travelgatex.com

## Contributing
1. [Fork][fork] and clone the repository
2. Create a new branch: `git checkout -b feature/my-new-feature-name`
3. Make your change
4. Push to your fork and [submit a pull request][pr]
5. Pat your self on the back and wait for your pull request to be reviewed and merged.

Here are a few things you can do that will increase the likelihood of your pull request being accepted:

- Keep your change as focused as possible. If there are multiple changes you would like to make that are not dependent upon each other, consider submitting them as separate pull requests.
- Write a [good commit message](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).
- In your pull request description, provide as much detail as possible. This context helps the reviewer to understand the motivation for and impact of the change.

## Report an issue
- Create an issue in our [Issue Tracker](https://github.com/travelgateX/Issue-tracker)

## Installing

- Install [Hugo](https://gohugo.io/) version 0.54
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

## Build documentation reference

```bash
cd script
npm install
npm start
cd ..
```

### Creating GitHub gists

Various examples of GraphQL calls, XML configurations and other code snippets can be found throughout our documentation, to help TravelgateX users better understand how our services work. If you think you can provide some useful code example, feel free to create a public gist on GitHub and contact us. You can learn to make your own gists [here](https://help.github.com/en/github/writing-on-github/creating-gists). 
