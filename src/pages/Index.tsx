
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Brain } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <GraduationCap size={60} className="text-education-600" />
            <Brain size={30} className="text-education-400 absolute -bottom-2 -right-2" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-education-900 mb-4">Penentuan Jurusan Kuliah</h1>
        <p className="text-xl text-gray-600 mb-8">
          Temukan jurusan kuliah yang paling sesuai dengan kepribadian, minat, dan kemampuan Anda melalui analisis psikometrik kami.
        </p>
        
        <Card className="mb-8 border-education-100 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-education-800">Bagaimana Cara Kerjanya?</CardTitle>
            <CardDescription className="text-lg">
              Tiga langkah sederhana untuk menemukan jurusan kuliah yang cocok untuk Anda
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-education-50 p-6 rounded-lg">
                <div className="w-10 h-10 bg-education-500 text-white rounded-full flex items-center justify-center mb-4 text-lg font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2 text-education-800">Jawab Pertanyaan</h3>
                <p className="text-gray-600">
                  Jawab serangkaian pertanyaan psikometrik yang dirancang untuk mengukur kepribadian dan kecenderungan akademik Anda.
                </p>
              </div>
              
              <div className="bg-education-50 p-6 rounded-lg">
                <div className="w-10 h-10 bg-education-500 text-white rounded-full flex items-center justify-center mb-4 text-lg font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2 text-education-800">Analisis Profil</h3>
                <p className="text-gray-600">
                  Sistem kami akan menganalisis jawaban Anda untuk membuat profil kecenderungan akademik dan kepribadian.
                </p>
              </div>
              
              <div className="bg-education-50 p-6 rounded-lg">
                <div className="w-10 h-10 bg-education-500 text-white rounded-full flex items-center justify-center mb-4 text-lg font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2 text-education-800">Dapatkan Rekomendasi</h3>
                <p className="text-gray-600">
                  Terima rekomendasi jurusan kuliah yang paling sesuai dengan profil Anda, lengkap dengan deskripsi dan tingkat kecocokan.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button 
              size="lg" 
              className="text-lg bg-education-600 hover:bg-education-700"
              onClick={() => navigate('/quiz')}
            >
              Mulai Sekarang
            </Button>
          </CardFooter>
        </Card>
        
        <div className="bg-education-50 p-6 rounded-lg text-left">
          <h2 className="text-xl font-semibold mb-4 text-education-800">Mengapa Menggunakan Aplikasi Ini?</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <div className="mr-2 mt-1 bg-education-200 rounded-full p-1">
                <svg className="h-3 w-3 text-education-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Berdasarkan metodologi psikometrik yang terbukti untuk mengukur kecenderungan dan potensi akademik</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 bg-education-200 rounded-full p-1">
                <svg className="h-3 w-3 text-education-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Algoritma yang memperhitungkan berbagai faktor kepribadian, minat, dan kemampuan</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 bg-education-200 rounded-full p-1">
                <svg className="h-3 w-3 text-education-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Rekomendasi jurusan yang lebih tepat dapat membantu kesuksesan akademik dan karir di masa depan</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
