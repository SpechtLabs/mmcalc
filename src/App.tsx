import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { CalculatorPage } from './pages/CalculatorPage';

const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const ImpressumPage = lazy(() => import('./pages/ImpressumPage').then(m => ({ default: m.ImpressumPage })));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<CalculatorPage />} />
          <Route path="/terms" element={<Suspense><TermsPage /></Suspense>} />
          <Route path="/privacy" element={<Suspense><PrivacyPage /></Suspense>} />
          <Route path="/impressum" element={<Suspense><ImpressumPage /></Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
