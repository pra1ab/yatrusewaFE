"use client"

import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"

const AuthLayout = () => {
  const location = useLocation()

  // Select background image based on route
  const getBackgroundImage = () => {
    switch (location.pathname) {
      case "/signin":
        return "/images/bus-city-night.png"
      case "/signup":
        return "/images/bus-station.png"
      case "/forgot-password":
        return "/images/bus-ticket.png"
      case "/verify":
      case "/success":
        return "/images/bus-interior.png"
      default:
        return "/images/bus-city-night.png"
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black text-white">
      {/* Left side - Image */}
      <div className="hidden md:block md:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${getBackgroundImage()})` }}
        ></div>
        <div className="absolute inset-0 flex flex-col justify-center z-20 px-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl font-bold mb-4">BusTracker</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-md">
              Your premium solution for bus ticketing and real-time tracking.
            </p>
            <div className="flex space-x-4">
              <div className="bg-purple-900/30 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm font-medium text-purple-300">Trusted by</p>
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm text-gray-400">Transport companies</p>
              </div>
              <div className="bg-purple-900/30 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm font-medium text-purple-300">More than</p>
                <p className="text-2xl font-bold">1M+</p>
                <p className="text-sm text-gray-400">Monthly users</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right side - Auth form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center justify-center md:justify-start">
            <div className="bg-purple-700 p-2 rounded-lg mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l-4-4m4 4l4-4"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">BusTracker</span>
          </div>

          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800"
          >
            <Outlet />
          </motion.div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} BusTracker. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout