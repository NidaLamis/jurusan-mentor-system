
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
        <header className="bg-education-950 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 
              className="text-xl font-bold cursor-pointer" 
              onClick={() => navigate('/')}
            >
              Penentu Jurusan
            </h1>
            {!isHomePage && (
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-education-800 hover:text-white"
                onClick={() => navigate('/')}
              >
                Mulai Ulang
              </Button>
            )}
          </div>
        </header>
      )}
      <main className="container mx-auto py-8 px-4 sm:px-6">
        {children}
      </main>
      <footer className="bg-education-950 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2025 Penentu Jurusan. Dibuat untuk membantu calon mahasiswa memilih jurusan kuliah yang tepat.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
