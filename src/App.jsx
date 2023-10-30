import { useEffect, useState } from "react";
import { Paginate } from "./components/paginate";

const dynamicHEADER = (newItem) => {
  return (
    <tr>
      {newItem.map((obj, ind) => {
        if (obj === "images") return;
        return <th key={ind}>{obj.toUpperCase()}</th>;
      })}
    </tr>
  );
};

function App() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://dummyjson.com/products");
      data = await data.json();
      console.log("data", await data.products);
      setData(await data.products);
    }
    fetchData();
  }, []);

  const setPrev = (val) => {
    if (page === 1) return;
    setPage((val) => val - 1);
  };

  const setNext = () => {
    if (page >= Math.ceil(data.length / limit)) return;
    setPage((prev) => prev + 1);
  };

  const endIndex = page * limit;
  const startIndex = endIndex - limit;

  return (
    <>
      <main>
        <table>
          {data.length > 0 ? (
            data.slice(startIndex, endIndex).map((item, index) => {
              let newItem = Object.keys(item);
              return (
                <>
                  {index == 0 && dynamicHEADER(newItem)}
                  <tr>
                    {newItem.map((key, idx) => {
                      if (key === "images") return;
                      return <td key={idx}>{item[key]}</td>;
                    })}
                  </tr>
                </>
              );
            })
          ) : (
            <th>no data to show</th>
          )}
          <div className="paginate">
            <Paginate setPrev={setPrev} setNext={setNext} />
          </div>
        </table>
      </main>
    </>
  );
}

export default App;
