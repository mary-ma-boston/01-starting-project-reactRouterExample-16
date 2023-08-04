import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import HomePage from './pages/Home';
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/PeoductDetail";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />}/>
//     <Route path="/products" element={<Products />}/>
//   </Route>
// );

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />, 
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage />}, /*index: true*/
      { path: '/products', element: <Products />},
      { path: '/products/:productId', element: <ProductDetailPage />}
    ]
  },   
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
