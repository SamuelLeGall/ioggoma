// const fs = require("fs");
// const { dialog } = require("electron").remote;
// const remoteApp = require("electron").remote.app;
// import store from "@/store";
// const dir = remoteApp.getPath("documents") + "/ioggomar";

// const options = {
//   title: "Save file",
//   defaultPath: `${dir}/saves/currentSave.json`,
//   filters: [{ name: "json", extensions: ["json"] }],
// };

export const save = function (): void {
  // if (!fs.existsSync(dir)) {
  //   fs.mkdirSync(dir);
  //   fs.mkdirSync(`${dir}/saves`);
  // }
  // dialog.showSaveDialog(options).then((result) => {
  //   if (!result.canceled) {
  //     const data = store.state;
  //     fs.writeFileSync(result.filePath, JSON.stringify(data), "utf-8");
  //   }
  // });
};

export const load = function (): void {
  // if (!fs.existsSync(dir)) {
  //   fs.mkdirSync(dir);
  //   fs.mkdirSync(`${dir}/saves`);
  // }
  // dialog.showOpenDialog(options).then((result) => {
  //   if (!result.canceled) {
  //     fs.readFile(result.filePaths[0], "utf-8", (err: any, data: any) => {
  //       if (err) {
  //         console.error(`[readFileSync] Error : ${err}`);
  //         return;
  //       }
  //       store.replaceState(JSON.parse(data));
  //     });
  //   }
  // });
};
