import { Navigate, Route, Routes } from "react-router-dom";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Home from "@/pages/Home/Home";
import Movies from "@/pages/Movies/Movies";
import MovieDetail from "@/pages/MovieDetail/MovieDetail";
import PersonDetail from "@/pages/PersonDetail/PersonDetail";
import LoginPage from "@/pages/LoginPage/LoginPage";      
import RegisterPage from "@/pages/RegisterPage/RegisterPage"; 
import { ProtectedRoute } from "@/router/ProtectedRoute";


export const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/movies" element={<Navigate to="/movies/page/1" replace />} />
          <Route path="/movies/page/:page" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/persons/:id" element={<PersonDetail />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<div className="p-10 text-center">404 - Not Found</div>} />
      </Routes>
      <Footer />
    </>
  );
};
