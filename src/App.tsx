import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import UserProfilePage from "./components/user/UserProfilePage"
import BucketDetailsPage from "./components/buckets/BucketDetailsPage"
import HomePage from "./components/main/HomePage"

function App() {

  return (
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
  )
}

export default App
