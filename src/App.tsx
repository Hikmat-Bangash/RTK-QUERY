/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Read from "./components/Read";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store, persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

import AddEdit from "./components/AddEdit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Read />,
      },
      {
        path: "/create",
        element: <AddEdit />,
      },
      {
        path: "/edit/:id",
        element: <AddEdit />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Outlet />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
