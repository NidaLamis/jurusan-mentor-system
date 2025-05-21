
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { questions, chemistryTopics } from '../data/questionsData';
import { getRecommendedTopics } from '../utils/recommendationUtils';
import { Download, Share2, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Get answers and scores from location state
  const answers = location.state?.answers as Record<number, string> | undefined;
  const topicScores = location.state?.topicScores as Record<string, number> | undefined;
  const overallScore = location.state?.overallScore as number | undefined;
  
  // Redirect to quiz if no answers data is available
  React.useEffect(() => {
    if (!answers) {
      navigate('/quiz');
    }
  }, [answers, navigate]);
  
  // If no data, show loading
  if (!answers || !topicScores || overallScore === undefined) {
    return <div>Loading...</div>;
  }
  
  // Get recommended topics to focus on (topics with lower scores)
  const topicsToFocus = getRecommendedTopics(topicScores, chemistryTopics);
  
  // Handle sharing results
  const handleShare = () => {
    const shareText = `Saya baru saja menyelesaikan latihan soal Olimpiade Kimia dan mendapatkan skor ${Math.round(overallScore)}%!`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Hasil Latihan Olimpiade Kimia',
        text: shareText,
      })
      .catch(() => {
        navigator.clipboard.writeText(shareText);
        toast({
          title: "Teks berhasil disalin!",
          description: "Anda dapat membagikannya ke media sosial."
        });
      });
    } else {
      navigator.clipboard.writeText(shareText);
      toast({
        title: "Teks berhasil disalin!",
        description: "Anda dapat membagikannya ke media sosial."
      });
    }
  };
  
  // Handle download results
  const handleDownload = () => {
    toast({
      title: "Hasil telah disimpan",
      description: "Hasil latihan Anda telah berhasil disimpan."
    });
  };
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8 border-chemistry-200 shadow-md">
          <CardHeader className="bg-chemistry-50 rounded-t-lg">
            <CardTitle className="text-2xl text-chemistry-900">Hasil Latihan Anda</CardTitle>
            <CardDescription className="text-chemistry-700">
              Anda telah menjawab {Object.keys(answers).length} soal dan mendapatkan skor {Math.round(overallScore)}%.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Performa per Topik</h3>
              <div className="space-y-3">
                {topicsToFocus.map(topic => {
                  const score = Math.round(topicScores[topic.id] || 0);
                  return (
                    <div key={topic.id} className="flex items-center">
                      <div className="w-1/3 font-medium">{topic.name}</div>
                      <div className="w-2/3 flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                          <div 
                            className={`h-2.5 rounded-full ${score < 50 ? 'bg-red-500' : score < 80 ? 'bg-yellow-500' : 'bg-green-500'}`}
                            style={{ width: `${score}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{score}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <Button
                onClick={handleShare}
                className="flex items-center gap-2 bg-chemistry-600 hover:bg-chemistry-700"
              >
                <Share2 className="h-4 w-4" />
                Bagikan Hasil
              </Button>
              <Button
                onClick={handleDownload}
                variant="outline"
                className="flex items-center gap-2 border-chemistry-300 text-chemistry-700"
              >
                <Download className="h-4 w-4" />
                Simpan Hasil
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Ringkasan Jawaban</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {questions.map((question) => {
                const userAnswer = answers[question.id];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <div key={question.id} className="border rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <div className={`mt-1 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                        {isCorrect ? <CheckCircle size={18} /> : <XCircle size={18} />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium whitespace-pre-line">{question.text}</p>
                        
                        {question.imageUrl && (
                          <div className="my-2">
                            <img 
                              src={question.imageUrl} 
                              alt="Chemistry diagram" 
                              className="max-w-full h-auto max-h-48 mx-auto rounded-md"
                            />
                          </div>
                        )}
                        
                        <div className="mt-2">
                          <span className="text-sm text-gray-600">Jawaban Anda: </span>
                          <span className={isCorrect ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                            {question.options.find(opt => opt.value === userAnswer)?.label || 'Tidak menjawab'}
                          </span>
                        </div>
                        
                        {!isCorrect && (
                          <div className="mt-1">
                            <span className="text-sm text-gray-600">Jawaban Benar: </span>
                            <span className="text-green-600 font-medium">
                              {question.options.find(opt => opt.value === question.correctAnswer)?.label}
                            </span>
                          </div>
                        )}
                        
                        {question.explanation && (
                          <div className="mt-2 p-2 bg-chemistry-50 rounded text-sm">
                            <span className="font-medium">Penjelasan: </span>
                            {question.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-center">
          <Button
            onClick={() => navigate('/quiz')}
            variant="outline"
            className="border-chemistry-300 text-chemistry-700"
          >
            Coba Lagi
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Results;
