import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import LayOut from "./Components/LayOut/LayOut";
import Mmorpg from "./Components/Mmorpg/Mmorpg";
import Shooter from "./Components/Shooter/Shooter";
import Sailing from "./Components/Sailing/Sailing";
import Permadeath from "./Components/Permadeath/Permadeath";
import Superhero from "./Components/Superhero/Superhero";
import Details from "./Components/Details/Details";
import './App.css'



function App() {
  const routes = createHashRouter([
    {
      path: "", element: <LayOut />, children: [
        {path :"" , element : <Mmorpg/> } ,
        {path :"mmorpg" , element : <Mmorpg/> } ,
        {path :"shooter" , element : <Shooter/> } ,
        {path :"sailing" , element : <Sailing/> } ,
        {path :"permadeath" , element : <Permadeath/> } ,
        {path :"superhero" , element : <Superhero/> } ,
        {path :"details/:id" , element : <Details/> } ,
      
    
      ],
    },
  ]);

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
