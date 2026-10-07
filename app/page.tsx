import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LiveStatusPulse from '@/components/LiveStatusPulse';
import AeoDirectAnswers from '@/components/AeoDirectAnswers';
import BeachExplorer from '@/components/BeachExplorer';
import HistorySection from '@/components/HistorySection';
import NewsAndEvents from '@/components/NewsAndEvents';
import DiningAndNightlife from '@/components/DiningAndNightlife';
import HotelsGuide from '@/components/HotelsGuide';
import DayTripsAndActivities from '@/components/DayTripsAndActivities';
import VisitorEssentialsHub from '@/components/VisitorEssentialsHub';
import FlightSearchAndGuide from '@/components/FlightSearchAndGuide';
import TravelGuideAndTransport from '@/components/TravelGuideAndTransport';
import AdvertisePortal from '@/components/AdvertisePortal';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LiveStatusPulse />
        <AeoDirectAnswers />
        <BeachExplorer />
        <HistorySection />
        <NewsAndEvents />
        <DiningAndNightlife />
        <HotelsGuide />
        <DayTripsAndActivities />
        <VisitorEssentialsHub />
        <FlightSearchAndGuide />
        <TravelGuideAndTransport />
        <AdvertisePortal />
        <FaqSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
