import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import MobileCallBar from './MobileCallBar';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen pb-16 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCallBar />
    </>
  );
}
