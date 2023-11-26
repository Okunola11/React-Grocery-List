import Layout from "./Layout";
import AddItem from "./AddItem";
import { CheckedItem } from "./CheckedItem";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./Context/DataContext";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={"add"} element={<AddItem />} />
          <Route path={"check"} element={<CheckedItem />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
