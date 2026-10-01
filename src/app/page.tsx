'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SponsorsStrip from '@/components/SponsorsStrip';
import VlsiFlowVisualizer from '@/components/VlsiFlowVisualizer';
import EdaConsoleSimulator from '@/components/EdaConsoleSimulator';
import WorkstationGuarantee from '@/components/WorkstationGuarantee';
import ScheduleTimeline from '@/components/ScheduleTimeline';
import VenueAndContact from '@/components/VenueAndContact';
import FaqAccordion from '@/components/FaqAccordion';
import Footer from '@/components/Footer';
import RegistrationModal from '@/components/RegistrationModal';
import { WORKSHOP_DETAILS } from '@/lib/data';

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleOpenRegister = () => {
    if (WORKSHOP_DETAILS.googleFormUrl && WORKSHOP_DETAILS.googleFormUrl.trim() !== '') {
      window.open(WORKSHOP_DETAILS.googleFormUrl, '_blank', 'noopener,noreferrer');
    } else {
      setIsRegisterOpen(true);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-purple-100 selection:text-purple-900">
      {/* Floating Navigation Pill */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* Hero Section */}
      <Hero onOpenRegister={handleOpenRegister} />

      {/* National Patronage & Sponsors Bar */}
      <SponsorsStrip />

      {/* Interactive 5-Stage VLSI EDA Flow Visualizer */}
      <VlsiFlowVisualizer />

      {/* Interactive EDA Code & Terminal Simulator */}
      <EdaConsoleSimulator />

      {/* 50 Single-Monitor Workstations Lab Guarantee */}
      <WorkstationGuarantee onOpenRegister={handleOpenRegister} />

      {/* Full-Day Hands-on Masterclass Schedule */}
      <ScheduleTimeline />

      {/* Venue, Map, Tech Park & Helpdesk Desk */}
      <VenueAndContact />

      {/* Frequently Asked Questions */}
      <FaqAccordion />

      {/* Institutional Footer */}
      <Footer onOpenRegister={handleOpenRegister} />

      {/* Interactive Registration Modal & Digital Boarding Pass */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </main>
  );
}
