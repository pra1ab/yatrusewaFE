"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

// Auth Pages
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
import ForgotPassword from "./pages/auth/ForgotPassword"
import TwoStepVerification from "./pages/auth/TwoStepVerification"
import SuccessPage from "./pages/auth/SuccessPage"

// Layout Components
import AuthLayout from "./layouts/AuthLayout"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    })
  }, [])

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify" element={<TwoStepVerification />} />
            <Route path="/success" element={<SuccessPage />} />
          </Route>

          {/* Default route redirects to sign in */}
          <Route path="*" element={<SignIn />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App