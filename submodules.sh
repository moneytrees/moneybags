#!/bin/bash
# Check if there are any submodules
if [[ $(git submodule--helper list) ]]; then
    echo "Updating test folders"
    cd test
    if [[ $(git remote -vv) ]]; then
       echo "Remote origin found..."
       cd ..
    else
       cd ..
       rm -rf ./test
       git submodule add git@github.com:moneytrees/backendtesting.git test
    fi
    cd client/src/test
    if [[ $(git remote -vv) ]]; then
       echo "Remote origin for client found..."
       cd ../../../
    else
       cd ../../../
       rm -rf ./client/src/test
       git submodule add git@github.com:moneytrees/frontendtesting.git client/src/test
    fi

    git submodule sync
    git submodule update --init --recursive
    git submodule foreach git pull origin develop
else
   echo "Missing test folders...installing"
   if [ -d './test' ]; then
       rm -rf ./test
   fi
   git submodule add git@github.com:moneytrees/backendtesting.git test

   if [ -d './client/src/test' ]; then
       rm -rf ./client/src/test
   fi
   git submodule add git@github.com:moneytrees/frontendtesting.git client/src/test

   git submodule sync
   git submodule update --init --recursive
   git submodule foreach git pull origin develop

fi