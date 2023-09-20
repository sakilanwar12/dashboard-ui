
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main'
import Dashboard from './pages/Dashboard'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Dashboard></Dashboard>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
