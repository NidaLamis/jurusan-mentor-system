
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showHeader = true }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {showHeader && (
        <header className="bg-chemistry-950 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 
              className="text-xl font-bold cursor-pointer" 
              onClick={() => navigate('/')}
            >
              Olimpiade Kimia
            </h1>
            {!isHomePage && (
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-chemistry-800 hover:text-white"
                onClick={() => navigate('/')}
              >
                Kembali ke Beranda
              </Button>
            )}
          </div>
        </header>
      )}
      <main className="container mx-auto py-8 px-4 sm:px-6">
        {children}
      </main>
      <footer className="bg-chemistry-950 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2025 Olimpiade Kimia. Platform untuk belajar dan latihan soal olimpiade kimia.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
