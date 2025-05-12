import Navbar from "./Navbar";
// import Image from "next/image"; // Removed unused Image import
import Homepage from "./Homepage";
import Footer from "./home/Footer";
import TopAffordableUniversities from "./home/TopAffordableUniversities";
import PickMyUniComparison from "./home/PickMyUniComparison";
import Testimonials from "./home/Testimonials";
import RecentArticles from "./home/RecentArticles";
import AdmissionEligibility from "./home/AdmissionEligibility";
import ProcessSteps from "./home/ProcessSteps";
import ContactWidget from "./home/ContactWidget";
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Navbar className="sticky top-0 z-50" />
    <main className="pt-0">
      <Homepage />
      <TopAffordableUniversities />
      <PickMyUniComparison />
      <AdmissionEligibility />
      <Testimonials />
      <ProcessSteps />
      <RecentArticles />
      <Footer />
      <ContactWidget />
    </main>
    </>
  );
}
