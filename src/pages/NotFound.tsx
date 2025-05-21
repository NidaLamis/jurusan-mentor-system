
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-education-700 mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-6">Halaman tidak ditemukan</p>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Silakan kembali ke halaman utama.
          </p>
          <Button 
            onClick={() => navigate('/')} 
            className="bg-education-600 hover:bg-education-700"
          >
            Kembali ke Beranda
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
