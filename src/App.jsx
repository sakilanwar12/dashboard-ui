
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main'
import PostAll from './components/Post/PostAll'
import AddNewPost from './components/Post/AddNewPost'
import PostCategories from './components/Post/PostCategories'
import PostTags from './components/Post/PostTags'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/post/all",
          element: <PostAll></PostAll>
        },
        {
          path: "/post/add",
          element: <AddNewPost></AddNewPost>
        },
        {
          path: "/post/category",
          element: <PostCategories></PostCategories>
        },
        {
          path: "/post/tags",
          element: <PostTags></PostTags>
        },
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
