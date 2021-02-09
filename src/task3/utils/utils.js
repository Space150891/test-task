import File from "../components/File/File";
import Folder from "../components/Folder/Folder";
import { FILE, FOLDER } from "./constants";

export function typeMapper(element) {
  if (element.type === FOLDER) {
    return <Folder data={element} key={element.name} />;
  }
  if (element.type === FILE) {
    return <File data={element} key={element.name} />;
  }
  return "";
}

export function deepSearch(object, searchString) {
  if (object.type === FOLDER) {
    object.open = true;
    object.children = object.children
      .slice()
      .filter((child) => deepSearch(child, searchString));
  }
  return (
    object.name.toLowerCase().includes(searchString) ||
    (object.type === FOLDER && object.children.length)
  );
}
