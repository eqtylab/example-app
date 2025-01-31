/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app() {
    return {
      name: "policy-plane",
      // removal: input?.stage === "production" ? "retain" : "remove",
      // protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    new sst.aws.StaticSite("NavAIPolicyPlane", {
      build: {
        command: "npm run build",
        output: "dist",
      },
    });
  },
});
// /* eslint-disable @typescript-eslint/triple-slash-reference */
// /// <reference path="./.sst/platform/config.d.ts" />

// export default $config({
//   app(input) {
//     return {
//       name: "policy-plane",
//       removal: "retain"
//       home: "aws",
//       providers: {
//         aws: {
//           version: "6.66.2",
//         },
//       },
//     };
//   },
//   async run() {

//   },
// });
