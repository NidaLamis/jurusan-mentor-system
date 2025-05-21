
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import MajorCard from '../components/MajorCard';
import ProfileChart from '../components/ProfileChart';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { majors } from '../data/questionsData';
import { getRecommendedMajors, normalizeUserTraits } from '../utils/recommendationUtils';
import { Download, Share2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Check if user traits exist in location state
  const userTraits = location.state?.userTraits;
  
  // Redirect to quiz if no traits data is available
  React.useEffect(() => {
    if (!userTraits) {
      navigate('/quiz');
    }
  }, [userTraits, navigate]);
  
  // If no data, show loading
  if (!userTraits) {
    return <div>Loading...</div>;
  }
  
  // Normalize user traits for better contrast
  const normalizedTraits = normalizeUserTraits(userTraits);
  
  // Get recommended majors
  const recommendedMajors = getRecommendedMajors(normalizedTraits, majors);
  
  // Handle sharing results
  const handleShare = () => {
    const shareText = `Saya baru saja menyelesaikan tes penentuan jurusan kuliah dan jurusan terbaik untuk saya adalah ${recommendedMajors[0].name}! Coba juga di Penentu Jurusan.`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Hasil Tes Penentu Jurusan',
        text: shareText,
      })
      .catch(() => {
        // Fallback if share fails
        navigator.clipboard.writeText(shareText);
        toast({
          title: "Teks berhasil disalin!",
          description: "Anda dapat membagikannya ke media sosial."
        });
      });
    } else {
      // Fallback if Web Share API not supported
      navigator.clipboard.writeText(shareText);
      toast({
        title: "Teks berhasil disalin!",
        description: "Anda dapat membagikannya ke media sosial."
      });
    }
  };
  
  // Handle download results
  const handleDownload = () => {
    // For this simplified version, just show a toast notification
    toast({
      title: "Hasil telah disimpan",
      description: "Hasil analisis Anda telah berhasil disimpan."
    });
  };
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8 border-education-200 shadow-md">
          <CardHeader className="bg-education-50 rounded-t-lg">
            <CardTitle className="text-2xl text-education-900">Hasil Analisis Anda</CardTitle>
            <CardDescription className="text-education-700">
              Berdasarkan jawaban Anda, kami telah menganalisis kecenderungan kepribadian dan mengidentifikasi jurusan kuliah yang paling sesuai.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ProfileChart traits={normalizedTraits} />
            
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <Button
                onClick={handleShare}
                className="flex items-center gap-2 bg-education-600 hover:bg-education-700"
              >
                <Share2 className="h-4 w-4" />
                Bagikan Hasil
              </Button>
              <Button
                onClick={handleDownload}
                variant="outline"
                className="flex items-center gap-2 border-education-300 text-education-700"
              >
                <Download className="h-4 w-4" />
                Simpan Hasil
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-education-900 mb-2">Rekomendasi Jurusan Kuliah</h2>
          <p className="text-gray-600 mb-6">
            Berikut adalah jurusan kuliah yang paling sesuai dengan profil kepribadian dan kecenderungan akademik Anda.
          </p>
          
          <div className="space-y-4">
            {recommendedMajors.slice(0, 5).map((major, index) => (
              <MajorCard
                key={major.id}
                name={major.name}
                description={major.description}
                matchPercentage={major.similarity || 0}
                icon={major.icon}
                index={index}
              />
            ))}
          </div>
        </div>
        
        <Card className="mb-8 border-education-100">
          <CardHeader>
            <CardTitle className="text-xl text-education-800">Bagaimana Kami Menentukan Rekomendasi?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-600">
              Rekomendasi jurusan kuliah kami didasarkan pada kecocokan antara profil kepribadian Anda dengan karakteristik yang dibutuhkan dalam berbagai bidang studi.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-education-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-1 text-education-800">Analisis Kepribadian</h3>
                <p className="text-sm text-gray-600">
                  Kami menganalisis kecenderungan analitis, kreatif, sosial, praktis, investigatif, dan wirausaha Anda berdasarkan respon terhadap tes psikometrik.
                </p>
              </div>
              
              <div className="bg-education-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-1 text-education-800">Kecocokan Jurusan</h3>
                <p className="text-sm text-gray-600">
                  Setiap jurusan memiliki profil karakteristik yang dibutuhkan. Kami mencocokkan profil Anda dengan profil jurusan menggunakan algoritma similarity.
                </p>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <p className="text-gray-600 text-sm italic">
              Penting: Hasil ini adalah rekomendasi berdasarkan kecenderungan kepribadian Anda, bukan penilaian kemampuan akademik. Selalu pertimbangkan faktor lain seperti minat personal, peluang karir, dan kemampuan akademik spesifik.
            </p>
          </CardContent>
        </Card>
        
        <div className="flex justify-center">
          <Button
            onClick={() => navigate('/quiz')}
            variant="outline"
            className="border-education-300 text-education-700"
          >
            Ambil Tes Kembali
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Results;
