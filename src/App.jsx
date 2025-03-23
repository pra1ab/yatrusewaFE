
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"

// Auth Pages (matching the provided designs)
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
import ForgotPassword from "./pages/auth/ForgotPassword"
import TwoStepVerification from "./pages/auth/TwoStepVerification"
import SuccessPage from "./pages/auth/SuccessPage"

// Layout Components
import AuthLayout from "./layouts/AuthLayout"

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Auth Routes (matching the provided designs) */}
          <Route element={<AuthLayout />}>

            <Route path="/" element={<SignIn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify" element={<TwoStepVerification />} />
            <Route path="/success" element={<SuccessPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App