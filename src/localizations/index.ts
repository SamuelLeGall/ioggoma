import _ from 'lodash';
function createObjectStructure(path: string, value: any): any {
  // we exclude .json and the '' of the array
  const [cleanedPath] = path.split('.').filter(n => n);
  const parts = cleanedPath.split('/').filter(n => n);

  const resultingObject: any = {};
  //we generate an object with the localization tag as root parameters and the file name as a nested parameter (we ignore folder names)
  parts.reduce(function (obj, subObj) {
    if (subObj === parts[parts.length - 1]) {
      // we add the the file content inside the deepest key. It should be the fileName of the content we're adding. 
      return obj[subObj] = JSON.parse(value);
    } else if (subObj === parts[0]) {
      return obj[subObj] = {};
    } else {
      return obj;
    }
  }, resultingObject);

  return resultingObject;
};

export async function createCustomMessageObject(): Promise<any> {
  //step1 : find all json files names under localization and subfolders
  const modules = import.meta.glob("./**/*.json");
  let res = {}

  //step2 : format data into final object
  for (const path in modules) {
    const filecontentAsModule: any = await modules[path]();
    const newStructure = createObjectStructure(path, JSON.stringify(filecontentAsModule.default));

    //we fuse the structure generated for the current file analysed with the global final object structure
    res = _.merge(res, newStructure);
  }

  return res;
}
