#!/usr/bin/env bash

set -e

export version=0.0.2
export containername=lukso-dapps-validators

npm build
docker build -t $containername:$version .
docker tag $containername:$version leondroid/$containername:$version
docker push leondroid/$containername:$version
