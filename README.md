# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ralphunrau/lotide`

**Require it:**

`const _ = require('@ralphunrau/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: returns the first element in an array
* `tail()`: returns every element but the first in an array
* `middle()`: returns every element but the first and last in an array
* `assertEqual()`: logs if the two values are equal
* `assertArraysEqual()`: logs if the two arrays are equal
* `assertObjectsEqual()`: logs if the two objects are equal
* `countLetters()`: counts an amount of letters
* `countOnly()`: counts an amount of specified letters
* `eqArrays()`: checks if two arrays are equal
* `eqObjects()`: checks if two objects are equal
* `findKey()`: finds key in an objects
* `findKeyByValue()`: finds key by value of key
* `flatten()`: confuscates passwords
* `letterPositions()`: returns the amount of letters and what position they are in with a given sentance
* `map()`: uses a callback to map
* `takeUntil()`: adds value to array until callback
* `without()`: filters array