#!/bin/bash

if [[ "$1" == "" ]]; then
  echo 'Usage: ./create.sh Header'
  exit 1
fi

FULL_NAME=$1
NAME=$(echo "$FULL_NAME" | grep -Eo '[[:alnum:]_]+$')
COMP_PATH="client/javascripts/components/$FULL_NAME"
SRC_PATH="$COMP_PATH/$NAME.jsx"
TEST_DIR="test/unit/$COMP_PATH"
TEST_PATH="$TEST_DIR/$NAME.spec.jsx"
INDEX_PATH="$COMP_PATH/index.js"

if [ -e $SRC_PATH ]; then
  echo "ERROR: Component $FULL_NAME already exists"
  exit 1
fi
if [ -e $TEST_PATH ]; then
  echo "ERROR: Test for component $FULL_NAME already exists"
  exit 1
fi

mkdir $COMP_PATH
mkdir $TEST_DIR
cat scripts/components/Component.template.jsx | sed "s~__NAME__~$NAME~g" > $SRC_PATH
cat scripts/components/Component.template.spec.jsx | sed "s~__NAME__~$NAME~g" | sed "s~__COMP_PATH__~$COMP_PATH~g" > $TEST_PATH
cat scripts/components/index.template.js | sed "s~__NAME__~$NAME~g" > $INDEX_PATH
