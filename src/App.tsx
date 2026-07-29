import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MarqueeTicker } from './components/MarqueeTicker';
import { OutletsSection } from './components/OutletsSection';
import { MenuSection } from './components/MenuSection';
import { StorySection } from './components/StorySection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FullMenuModal } from './components/FullMenuModal';
import { CareersModal } from './components/CareersModal';
import { Toast } from './components/Toast';
import { OutletDetailPage } from './pages/OutletDetailPage';
import { MenuPage } from './pages/MenuPage';

import { OUTLETS } from './data/mockData';
import { Outlet } from './types';

function HomePage({
  onSelectNav,
  selectedOutlet,
  onOpenMenuModal,
  onOpenCareers,
  onSelectOutlet,
}: {
  onSelectNav: (id: string) => void;
  selectedOutlet: Outlet;
  onOpenMenuModal: () => void;
  onOpenCareers: () => void;
  onSelectOutlet: (o: Outlet) => void;
}) {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        onFindLocal={() => onSelectNav('outlets')}
        onViewMenu={() => onSelectNav('lineup')}
      />

      {/* Endless Marquee Ticker */}
      <MarqueeTicker />

      {/* Coimbatore Outlets Flagships */}
      <OutletsSection
        onSelectOutlet={onSelectOutlet}
        selectedOutletId={selectedOutlet.id}
      />

      {/* Menu Lineup Showcase */}
      <MenuSection onExploreFullMenu={onOpenMenuModal} />

      {/* Story & Instagram Grid */}
      <StorySection onOpenCareers={onOpenCareers} />

      {/* Mobile App Download CTA */}
      <CtaSection />
    </main>
  );
}

export default function App() {
  const [selectedOutlet, setSelectedOutlet] = useState<Outlet>(OUTLETS[0]);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isCareersModalOpen, setIsCareersModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Smooth scroll handler
  const handleSelectNav = (sectionId: string) => {
    if (sectionId === 'careers') {
      setIsCareersModalOpen(true);
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#121414] text-[#e2e2e2] font-body selection:bg-[#1a3875] selection:text-white">
        {/* Top Navigation Header */}
        <Header
          onOpenMenuModal={() => setIsMenuModalOpen(true)}
          onSelectNav={handleSelectNav}
          selectedOutlet={selectedOutlet}
        />

        {/* Router Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onSelectNav={handleSelectNav}
                selectedOutlet={selectedOutlet}
                onOpenMenuModal={() => setIsMenuModalOpen(true)}
                onOpenCareers={() => setIsCareersModalOpen(true)}
                onSelectOutlet={(o) => setSelectedOutlet(o)}
              />
            }
          />

          <Route
            path="/menu"
            element={
              <MenuPage
                onOpenMenuModal={() => setIsMenuModalOpen(true)}
                onOpenCareers={() => setIsCareersModalOpen(true)}
              />
            }
          />

          <Route
            path="/locations"
            element={<Navigate to="/locations/race-course" replace />}
          />

          <Route
            path="/locations/:outletId"
            element={
              <OutletDetailPage
                onOpenMenuModal={() => setIsMenuModalOpen(true)}
                onOpenCareers={() => setIsCareersModalOpen(true)}
              />
            }
          />

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>

        {/* Global Footer */}
        <Footer
          onSelectNav={handleSelectNav}
          onOpenCareers={() => setIsCareersModalOpen(true)}
        />

        {/* Modals & Overlay Toast */}
        <FullMenuModal
          isOpen={isMenuModalOpen}
          onClose={() => setIsMenuModalOpen(false)}
        />

        <CareersModal
          isOpen={isCareersModalOpen}
          onClose={() => setIsCareersModalOpen(false)}
        />

        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      </div>
    </Router>
  );
}
