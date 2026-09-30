'use client';

import { useState } from 'react';
import PromoBanner from '@/components/PromoBanner';
import UtilityNav from '@/components/UtilityNav';
import MainNav from '@/components/MainNav';
import HeroSection from '@/components/HeroSection';
import HomepageIntro from '@/components/HomepageIntro';
import Breadcrumbs from '@/components/Breadcrumbs';
import Sidebar from '@/components/Sidebar';
import AlertBox from '@/components/AlertBox';
import UpdateCard from '@/components/UpdateCard';
import CompatibilityCard from '@/components/CompatibilityCard';
import InstallationSteps from '@/components/InstallationSteps';
import ReleaseNotesAccordion from '@/components/ReleaseNotesAccordion';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import DownloadModal from '@/components/DownloadModal';
import Toast from '@/components/Toast';
import AskAlex from '@/components/AskAlex';

import DocumentationView from '@/components/views/DocumentationView';
import SecurityAdvisoriesView from '@/components/views/SecurityAdvisoriesView';
import TroubleshootingView from '@/components/views/TroubleshootingView';
import KnowledgeBaseView from '@/components/views/KnowledgeBaseView';
import ContactSupportView from '@/components/views/ContactSupportView';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Firmware Updates');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleDownloadComplete = () => {
    setIsDownloaded(true);
    setToastMessage('Security patch downloaded & verified (patch.exe)');
  };

  const handleCopyChecksum = () => {
    setToastMessage('SHA256 checksum copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-[#252525] flex flex-col justify-between font-sans">
      <div>
        <PromoBanner />
        <UtilityNav />
        <MainNav onOpenSearch={() => setIsSearchOpen(true)} />
        <HeroSection />
        <HomepageIntro />
        <Breadcrumbs />

        <div id="support-workspace" className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col lg:flex-row gap-8">
          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

          <main className="flex-1 flex flex-col gap-6">
            {activeTab === 'Firmware Updates' && (
              <>
                <AlertBox />
                <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
                  <UpdateCard 
                    onStartDownload={() => setIsDownloadOpen(true)} 
                    isDownloaded={isDownloaded}
                  />
                  <CompatibilityCard onCopyChecksum={handleCopyChecksum} />
                </div>
                <ReleaseNotesAccordion />
                <InstallationSteps />
              </>
            )}

            {activeTab === 'Product Documentation' && <DocumentationView />}
            {activeTab === 'Security Advisories' && <SecurityAdvisoriesView />}
            {activeTab === 'Troubleshooting' && <TroubleshootingView />}
            {activeTab === 'Knowledge Base' && <KnowledgeBaseView />}
            {activeTab === 'Contact Support' && (
              <ContactSupportView 
                onSubmitted={() => setToastMessage('Support ticket created successfully!')} 
              />
            )}
          </main>
        </div>
      </div>

      <Footer />

      {/* Interactive Overlays */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <DownloadModal 
        isOpen={isDownloadOpen} 
        onClose={() => setIsDownloadOpen(false)} 
        onDownloadComplete={handleDownloadComplete}
      />
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}

      {/* Support chatbot */}
      <AskAlex onNavigate={setActiveTab} />
    </div>
  );
}
