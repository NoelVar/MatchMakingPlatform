import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import VerifyEmail from './components/VerifyEmail';
import PageNotFound from './pages/PageNotFound';
import ProtectedRoute from './components/ProtectedRoute';

//NOTE:
function App() {
  return (
    <div className="app-container">
        <Routes>
            <Route
              path='/'
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route 
              path='/login'
              element={<Login />}
            />
            <Route 
              path='/signup'
              element={<Register />}
            />
            <Route 
              path='/verify'
              element={
                <ProtectedRoute>
                  <VerifyEmail />
                </ProtectedRoute>
              }
            />
            <Route 
              path='/profile'
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route 
              path='/*'
              element={<PageNotFound />}
            />
        </Routes>
    </div>
  );
}

export default App;
