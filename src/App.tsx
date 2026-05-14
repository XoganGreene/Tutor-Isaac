/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import AboutTutor from './components/AboutTutor';
import Portfolio from './components/Portfolio';
import Competencies from './components/Competencies';
import Testimonials from './components/Testimonials';
import Automations from './components/Automations';
import LeadMagnet from './components/LeadMagnet';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <Hero />
      <AboutTutor />
      <Portfolio />
      <Competencies />
      <Testimonials />
      <Automations />
      <LeadMagnet />
      <Footer />
    </div>
  );
}
