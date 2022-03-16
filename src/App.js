import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import HomePage from './pages/homePage';
import ArticlePage from './pages/articlePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index exact element={<HomePage />} />
        <Route path='article' exact element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
