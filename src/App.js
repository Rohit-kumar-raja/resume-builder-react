import { useRoutes,BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Preview from './pages/Preview';
import Pricing from './pages/Pricing';
import Template from './pages/Template';
import Dashboard from './pages/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Index /> },
    { path: 'about', element: <About /> },
    { path: 'contact', element: <Contact /> },
    { path: 'preview', element: <Preview /> },
    { path: 'pricing', element: <Pricing /> },
    { path: 'template', element: <Template /> },
    { path: 'dashboard', element: <Dashboard /> },


  ]);
  return routes;
};
const AppWrapper = () => {
  return (
    <Router>
      <Header />
      <Register/>
      <Login/>
      <App />
      <Footer />
    </Router>
  );
};

export default AppWrapper;
