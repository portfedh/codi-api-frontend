import Header from './Header';
import Footer from './Footer';
import Container from './Container';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Saltar al contenido principal
      </a>

      <Header />
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}
