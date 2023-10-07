import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

//import the components that we will be routing to
import App from './components/App.jsx';
import Home from './components/Home.jsx';
// import Trip from './components/Trip.jsx';
// import PastTrips from './components/PastTrips.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { store } from './store';
import { Provider } from 'react-redux';

// uncomment so that webpack can bundle styles
import styles from './scss/main.scss';

//route paths to the different components
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  // {
  //   path: '/trip',
  //   element: <Trip />,
  // },
  // {
  //   path: '/pastTrips',
  //   element: <PastTrips />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
