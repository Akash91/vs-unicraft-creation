import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { ProductList } from './components/ProductList';
import { TermsAndConditions } from './components/TermsAndConditions';
import { WebsitePolicy } from './components/WebsitePolicy';

export default function App() {
  // Set basename for GitHub Pages deployment
  const basename = import.meta.env.BASE_URL || '/';
  
  return (
    <Router basename={basename}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/policy" element={<WebsitePolicy />} />
          </Routes>
        </main>
        <footer className="bg-[#0A1B7F] border-t border-[#FFD700] py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col items-center gap-4">
              {/* Company Info */}
              <div className="text-[#FFD700]">
                <p className="font-bold text-lg">VS Unicraft Creation</p>
                <p className="text-white text-sm">Uniforms • Trophies • Printing Solutions</p>
                <p className="text-white text-sm italic">(A Complete School Supplies)</p>
              </div>
              
              {/* Contact Info */}
              <div className="text-white text-sm space-y-1">
                <p>📞 +91-XXXXXXXXXX</p>
                <p>📍 Flat No. 1403, 23 Tower, Gulmohar Garden,</p>
                <p>Raj Nagar Extension, Ghaziabad</p>
              </div>
              
              <p className="text-white text-sm">&copy; 2026 VS Unicraft Creation. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}