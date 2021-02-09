import { useEffect, useState } from "react";
import rawData from "./data.json";
import { deepSearch, typeMapper } from "./utils/utils";

function App({ expanded }) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState();
  const dataClone = JSON.parse(JSON.stringify(rawData));

  useEffect(() => {
    expanded.forEach((path) => {
      let mutatedObject = {};
      mutatedObject.children = dataClone;
      path.split("/").forEach((folder) => {
        if (mutatedObject)
          mutatedObject = mutatedObject?.children.find(
            (object) => object.name === folder
          );
        if (mutatedObject) mutatedObject.open = true;
      });
    });
    setData(dataClone);
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);

    const searchString = e.target.value.trim().toLowerCase();
    if (searchString) {
      setData(
        dataClone.slice().filter((object) => deepSearch(object, searchString))
      );
    } else {
      setData(dataClone.slice());
    }
  }

  return (
    <>
      <div className="input-holder">
        <label htmlFor="search">Search</label>
        <input type="text" id="search" value={search} onChange={handleSearch} />
      </div>
      <div>{data ? data.map(typeMapper) : ""}</div>
    </>
  );
}

export default App;
