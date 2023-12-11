import { createBrowserRouter, RouterProvider } from "react-router-dom"
import routes from "./routes/routes"
import { UserAuth } from "./context/UserAuth"
const router = createBrowserRouter(routes)
import {store} from './redux/store/store'
import { Provider } from "react-redux"
import { useState } from "react"
function App() {
  
 const [blogs, setBlog] = useState([])

  return (
    <>
    <Provider store={store}>
    <UserAuth.Provider value={{blogs, setBlog}}>
    <RouterProvider router={router}/>
  </UserAuth.Provider>
  </Provider>
  {/* document.getElementById('root') */}
  </>
  )
}

export default App