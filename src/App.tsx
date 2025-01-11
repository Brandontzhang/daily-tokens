import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import UserProfilePage from "./components/user/UserProfilePage"
import BucketDetailsPage from "./components/buckets/BucketDetailsPage"
import HomePage from "./components/main/HomePage"
import { Auth0Provider } from "@auth0/auth0-react"
function App() {

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <div className='h-full w-full'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="profile" element={<UserProfilePage />} />
            <Route path="bucket/:id" element={<BucketDetailsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Auth0Provider>

  )
}

export default App
