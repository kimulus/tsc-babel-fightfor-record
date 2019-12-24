# tsc-babel-fightfor-record

This is a sample project that declares a TypeScript Class that extends Immutable.Record and shows the differences between compiling with Babel VS with TypeScript.  A basic **Jest** test file is written and scripts are available to run this test with Babel 7 and TypeScript.
We can see that when compiling with **Babel 7** and the **TypeScript preset**, the test fails while compiling with **TypeScript, it succeeds**.  To see what is going on behind the scene, we can observe the generated javascript code in those 2 cases by running `npm run build:tsc` and `npm run build:babel` and look into the **build** directory.

