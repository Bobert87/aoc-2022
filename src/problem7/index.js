
const CMDRGX = /(?<terminal>\$)\s*(?<command>\w{2})\s*(?<parameter>.*)?/u;
const FLRGX = /(?<fileSize>\d+)\s*(?<fileName>.*)/u;
const FLDRRGX = /(dir)\s*(?<folderName>.*)/u;
const LIMIT = 100000;
const DISKSPACE = 70000000;
const MINSIZEFORUPDATE = 30000000;

function createFileSystem(input){
  const root = [];
  let filePointer = [];
  let currentFolder = root;
  for (let i = 0; i < input.length; i++) {
    const line = input[i];
    let lineObj = null;
    if (lineObj === null) lineObj = CMDRGX.exec(line);
    if (lineObj === null) lineObj = FLRGX.exec(line);
    if (lineObj === null) lineObj = FLDRRGX.exec(line);  
    let groups = lineObj.groups;  
    if (groups.terminal){
      if (groups.command === 'cd'){
        if (groups.parameter === '..'){
          filePointer.pop();
          currentFolder = filePointer[filePointer.length-1]
        } else {           
          const newFolder = {folder: groups.parameter, size: 0};
          filePointer.push(newFolder)
          currentFolder[groups.parameter] = newFolder;                     
        }
      }              
      if (groups.command === 'ls'){
        continue;
      }
    }
    if (groups.fileSize){
      currentFolder = filePointer[filePointer.length-1]
      if (currentFolder.size === undefined) currentFolder.size = 0;
      if (currentFolder.files === undefined) currentFolder.files = [];
      const intSize = parseInt(groups.fileSize)      
      currentFolder.size += intSize;
      currentFolder.files.push({fileName: groups.fileName, fileSize: intSize})
    }
    if (groups.folderName){
      currentFolder = filePointer[filePointer.length-1]
      if (currentFolder.folders === undefined) currentFolder.folders = [];
      currentFolder.folders.push(groups.folderName)
    }
  }
  return root;
}

function foldersSize(fldr,folderList){
  const folders = fldr.folders?fldr.folders:[];
  let fldrSize = fldr.size;
  for (let i = 0; i < folders.length; i++) {    
    subFolder = foldersSize(fldr[folders[i]], folderList);
    fldrSize += subFolder.size
  }
  const fldrData = { folder: fldr.folder, size: fldrSize }; 
  folderList.push(fldrData);
  return fldrData
}

function problem7(input) {
  const root = createFileSystem(input)
  let folders = [];
  foldersSize(root['/'], folders)
  let sumUnderLimit = 0;
  for (const fldr of folders){
    if (fldr.size <= LIMIT){
      sumUnderLimit += fldr.size;
    }
  }
  return sumUnderLimit;
}

function problem7Part2(input) {
  const root = createFileSystem(input);
  let folders = [];
  foldersSize(root['/'], folders);
  const target = MINSIZEFORUPDATE - (DISKSPACE - folders[folders.length-1].size);
  let minSize = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < folders.length; i++) {
    const fldr = folders[i];
    if (fldr.size - target >= 0){
      if (fldr.size < minSize) minSize = fldr.size;
    }
  }
  return minSize;
}

module.exports = { problem7, problem7Part2 }
