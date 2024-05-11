// 引入Tauri的文件系统和路径API
import { readDir } from "@tauri-apps/api/fs";
import { basename } from "@tauri-apps/api/path";

// 获取指定路径下的所有文件名
export async function getAllFileNamesInDirectory(directoryPath: string) {
  console.log(111111, directoryPath);
  try {
    const files = await readDir(directoryPath);
    const fileNames = files.map((file) => basename(file.path));
    return fileNames;
  } catch (error) {
    console.error("Error while reading directory:", error);
    return [];
  }
}
