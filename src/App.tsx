import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PhotoBoothPage from '@/pages/PhotoBoothPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PhotoBoothPage />} />
      </Routes>
    </BrowserRouter>
  );
}
