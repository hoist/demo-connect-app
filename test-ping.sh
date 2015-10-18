#!/bin/bash

for i in $(eval echo {1..$1})
do
  curl  https://endpoint.hoi.test/owen2200/sampleintegration/logger
done
