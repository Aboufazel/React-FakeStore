import './App.css';
import {RouterProvider} from "react-router";
import routes from "./page/root/routes";


function App() {

  return(
      <RouterProvider router={routes} />
  );
}

export default App;
