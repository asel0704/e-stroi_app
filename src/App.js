import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from "./pages/Layout";
import Menu from "./components/Menu"
import NotFoundPage from './components/NotFoundPage';
import ProductPages from './components/ProductPages';

function App() {
  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/:id" element={<ProductPages />} />
          <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </>
    </>
  );
}

export default App;
