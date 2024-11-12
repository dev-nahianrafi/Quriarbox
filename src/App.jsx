import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Rootlayout from "./layout/RootLayout";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Rootlayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
