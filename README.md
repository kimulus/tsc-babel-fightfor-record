# tsc-babel-fightfor-record

This is a example project that demonstrate the differences between **Babel 7 with typescript preset** and **Pure TypeScript** compiler when working with **Classes that extends Immutable.Record**

## Code
- `src/Person.ts` : declare a basic class that extends **Immutable.Record**.
- `index.test.ts` : Jest test file that test the instantiation of the `Person Record` and acces properties with property accessors (I want to test that `personInstance.firstName` is accessible instead of passing by the Immutable.Record method `personInstance.get('firstName')`.
- `npm start test:tsc`: will launch the test file and use **Pure Typescript** compiler.
- `npm start test:babel`: will launch the test file and use **Babel 7 with typescript preset** compiler.
- `npm start build:tsc`: will output the final javascript code using **Pure Typescript** compiler.
- `npm start build:babel`:will output the final javascript code using **Babel 7 with typescript preset** compiler.

## Run the test

When running the test with both compilers setup, we can see that the test passes with **Pure Typescript** compiler but fails with **Babel7 with typescript preset** compiler.


## What is going on behin the scene:

To understand what is going on behind the scene, run both `npm start build` and look into the build folder.
