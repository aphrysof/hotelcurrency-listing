import { useEffect, useState } from "react";
import { Navbar, Card } from "./components";
import axios from "axios";
import { AppProvider } from "./context";

function App() {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    axios
      .get("https://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/tokyo")
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <AppProvider>
        <Navbar />
        <Card data={hotels} />
      </AppProvider>
    </>
  );
}

export default App;
