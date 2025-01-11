import {Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";

import Navbar from "./components/Navbar";
import LoadingSpinner from "./components/LoadingSpinner";

import { useUserStore } from "./stores/useUserStore";
import { useCartStore } from "./stores/useCartStore";

function App() {
  const { user, checkAuth, checkingAuth } = useUserStore();
  const { getCartItems } = useCartStore();

  useEffect(() => {
		checkAuth();
	}, [checkAuth]);

  useEffect(() => {
		if (!user) return;

		getCartItems();
	}, [getCartItems, user]);
  
  if (checkingAuth) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,rgba(10,80,60,0.2)_45%,rgba(0,0,0,0.1)_100%)]" />
        </div>
      </div>
      <div className="relative z-50 pt-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={!user ? <SignUpPage /> : <Navigate to='/' />} />
          <Route path="/login" element={!user ? <LoginPage /> : <Navigate to='/' />} />
          <Route
						path='/secret-dashboard'
						element={user?.role === "admin" ? <AdminPage /> : <Navigate to='/login' />}
					/>
          <Route path='/category/:category' element={<CategoryPage />} />
          <Route path='/cart' element={user ? <CartPage /> : <Navigate to='/login' />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;