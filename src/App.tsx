import React, { useState, useEffect } from 'react';
import { Navbar } from './components/marketing/Navbar';
import { Hero } from './components/marketing/Hero';
import { ProductRevealSection } from './components/marketing/ProductRevealSection';
import { MarketUnderstandingSection } from './components/marketing/MarketUnderstandingSection';
import { IndicatorSystemSection } from './components/marketing/IndicatorSystemSection';
import { SceneTransitionBridge } from './components/marketing/SceneTransitionBridge';
import { PrinciplesSection } from './components/marketing/PrinciplesSection';
import { SessionSection } from './components/marketing/SessionSection';
import { PrototypePricingSection } from './components/marketing/PrototypePricingSection';
import { FaqSection } from './components/marketing/FaqSection';
import { ClosingCtaSection } from './components/marketing/ClosingCtaSection';
import { ClientPortalModal } from './components/marketing/ClientPortalModal';

// Phase 4B Application Workstation Components
import { AppShell, AppTab, Instrument, Timeframe } from './components/app/AppShell';
import { OverviewScreen } from './components/app/OverviewScreen';
import { WorkspaceScreen, LensLayer } from './components/app/WorkspaceScreen';
import { IndicatorsScreen } from './components/app/IndicatorsScreen';
import { SessionScreen } from './components/app/SessionScreen';
import { AccessScreen } from './components/app/AccessScreen';

/**
 * ALGOFINEX — PHASE 4B
 * PATHNAME-BASED SPA ROUTING
 */
export const App: React.FC = () => {
  // Current window pathname state
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);

  // App Global Prototype State
  const [selectedInstrument, setSelectedInstrument] = useState<Instrument>('BTC/USD');
  const [selectedTimeframe, setSelectedTimeframe] = useState<Timeframe>('15m');
  const [activeLens, setActiveLens] = useState<LensLayer>('STRUCTURE');

  // Marketing Client Portal Modal State
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  // Listen for browser popstate events (Back/Forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Helper to navigate to a new pathname
  const navigateTo = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo(0, 0);
    }
  };

  // Helper to map active pathname to AppTab
  const getActiveTabFromPath = (path: string): AppTab => {
    if (path === '/app/workspace') return 'workspace';
    if (path === '/app/indicators') return 'indicators';
    if (path === '/app/session') return 'session';
    if (path === '/app/access') return 'access';
    return 'overview';
  };

  // Check if current route is an application route (/app or /app/*)
  const isAppRoute = currentPath === '/app' || currentPath.startsWith('/app/');

  // Render Application Workstation if pathname is an /app route
  if (isAppRoute) {
    const activeTab = getActiveTabFromPath(currentPath);

    return (
      <AppShell
        activeTab={activeTab}
        onTabChange={(tab) => {
          const targetPath = tab === 'overview' ? '/app' : `/app/${tab}`;
          navigateTo(targetPath);
        }}
        selectedInstrument={selectedInstrument}
        onInstrumentChange={setSelectedInstrument}
        selectedTimeframe={selectedTimeframe}
        onTimeframeChange={setSelectedTimeframe}
        onExitApp={() => navigateTo('/')}
      >
        {activeTab === 'overview' && (
          <OverviewScreen
            onNavigate={(tab) => {
              const targetPath = tab === 'overview' ? '/app' : `/app/${tab}`;
              navigateTo(targetPath);
            }}
            selectedInstrument={selectedInstrument}
          />
        )}
        {activeTab === 'workspace' && (
          <WorkspaceScreen
            selectedInstrument={selectedInstrument}
            selectedTimeframe={selectedTimeframe}
            activeLens={activeLens}
            onLensChange={setActiveLens}
          />
        )}
        {activeTab === 'indicators' && <IndicatorsScreen />}
        {activeTab === 'session' && <SessionScreen />}
        {activeTab === 'access' && <AccessScreen />}
      </AppShell>
    );
  }

  // Otherwise render Marketing Public Presentation
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-brand-blue/20 selection:text-slate-900 flex flex-col justify-between">
      {/* Top Persistent Navigation */}
      <Navbar onOpenPortal={() => navigateTo('/app')} />

      {/* Main Sequential Experience Flow */}
      <main className="flex-1 w-full min-w-0">
        
        {/* SECTION 01 — INTRODUCTION (Hero Workstation & Editorial Thesis) */}
        <Hero />

        {/* SECTION 02 — PRODUCT (5-Stage Progressive Revelation Workstation) */}
        <ProductRevealSection />

        {/* SECTION 03 — UNDERSTANDING (Read the Market → Build Context → Make a Plan) */}
        <MarketUnderstandingSection />

        {/* SECTION 04 — METHOD (4 Coordinated Analytical Strata Spatial Diagram) */}
        <IndicatorSystemSection />

        {/* SECTION 05 — WHY ALGOFINEX (Clarity, Context, Discipline, Consistency) */}
        <PrinciplesSection />

        {/* CONTINUOUS WORKFLOW CONDUIT (7-Stage Execution Pipeline) */}
        <SceneTransitionBridge />

        {/* SECTION 06 — EXPERIENCE (3-Day Session Timeline & 7-Step Routine Object) */}
        <SessionSection />

        {/* SECTION 07 — OFFER (Prototype Pricing & Enrollment UX Validation) */}
        <PrototypePricingSection />

        {/* SECTION 08 — CLARITY (Editorial FAQ Accordion) */}
        <FaqSection />

        {/* SECTION 09 — CLOSING (Final Editorial CTA Scene) */}
        <ClosingCtaSection />

      </main>

      {/* Persistent Landing Footer */}
      <footer className="border-t border-black/[0.06] bg-[#F1F3F5] py-12 px-5 sm:px-8 text-xs font-mono text-slate-500">
        <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <div className="size-6 rounded-lg bg-brand-blue flex items-center justify-center shadow-xs">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <line x1="3" y1="20" x2="21" y2="20" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.4" />
                  <line x1="4" y1="20" x2="4" y2="4" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.4" />
                  <path d="M4 17L11 10L15 14L20 6" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="20" cy="6" r="2.2" fill="#FFFFFF" />
                </svg>
              </div>
              <span className="font-display font-bold text-slate-900 tracking-[-0.03em] text-sm">
                Algo<span className="text-slate-600 font-medium">Finex</span>.
              </span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <div className="text-slate-500 text-[11px]">
              Multi-Layered Market Structure &amp; 7-Step Trading Workflow
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px]">
            <a href="#product-experience" className="text-slate-600 hover:text-slate-900 transition-colors">Indicators</a>
            <a href="#methodology" className="text-slate-600 hover:text-slate-900 transition-colors">Methodology</a>
            <a href="#session" className="text-slate-600 hover:text-slate-900 transition-colors">3-Day Session</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#faq" className="text-slate-600 hover:text-slate-900 transition-colors">FAQ</a>
            <button 
              onClick={() => navigateTo('/app/workspace')}
              className="text-brand-blue font-semibold hover:text-blue-800 transition-colors cursor-pointer"
            >
              Launch Workstation
            </button>
          </div>

          <div className="text-slate-400 text-[10px] text-center md:text-right">
            © 2026 AlgoFinex. Educational market structure analysis. Not financial advice.
          </div>
        </div>
      </footer>

      {/* Prototype Client Portal Modal */}
      <ClientPortalModal 
        isOpen={isPortalOpen} 
        onClose={() => setIsPortalOpen(false)} 
      />
    </div>
  );
};

export default App;
