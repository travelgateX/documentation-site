#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Go To Public folder
cd public

git status
#checkout master and revert changes
git reset --hard origin/master
git checkout master
git pull origin master
cd ..

# Build the project.
hugo -d public # if using a theme, replace with `hugo -t <YOURTHEME>`

cd public
# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

echo -e "\033[0;32mPushing to GitHub...\033[0m"

# Push source and build repos.
git push origin master

# Come Back up to the Project Root
cd ..

# Commit & push main repo
git commit -m "$msg" -a
git push origin master
