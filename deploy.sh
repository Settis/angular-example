#!/bin/bash

ng build --prod --base-href "https://settis.github.io/angular-example/"
cp dist/angular-example/index.html dist/angular-example/404.html
angular-cli-ghpages --name="None" --email="None" --dir dist/angular-example
