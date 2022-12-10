#! /usr/bin/bash

coffee --bare --no-header -co src/ src/Coffee/ \
    && rm $(find ./src/components -name '*.jsx') && rm ./src/index.jsx \
	&& rename '.js' '.jsx' $(find ./src/components -name '*.js') \
	&& mv ./src/index.js ./src/index.jsx

