
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import QuestionCard from '../components/QuestionCard';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { questions } from '../data/questionsData';
import { calculateTopicScores, calculateOverallScore } from '../utils/recommendationUtils';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const currentQuestion = questions[currentQuestionIndex];
  
  // Calculate progress
  const progress = (currentQuestionIndex / questions.length) * 100;
  
  // Handle option selection
  const handleOptionSelect = (optionValue: string) => {
    setSelectedOption(optionValue);
  };
  
  // Move to next question or submit quiz
  const handleNextQuestion = () => {
    // Save current answer
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: selectedOption as string
    }));
    
    // Reset selected option
    setSelectedOption(null);
    
    // Check if last question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Calculate scores
      const topicScores = calculateTopicScores(answers, questions);
      const overallScore = calculateOverallScore(answers, questions);
      
      // Navigate to results page with answer data
      navigate('/results', { 
        state: { 
          answers, 
          topicScores, 
          overallScore 
        } 
      });
    }
  };
  
  // Move to previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };
  
  // When moving to previous question, load the saved answer
  useEffect(() => {
    setSelectedOption(answers[currentQuestion.id] || null);
  }, [currentQuestionIndex, answers, currentQuestion.id]);
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              Soal {currentQuestionIndex + 1} dari {questions.length}
            </span>
            <span className="text-sm font-medium">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <QuestionCard 
          question={currentQuestion}
          selectedOption={selectedOption}
          onSelect={handleOptionSelect}
        />
        
        <div className="flex justify-between mt-8">
          <Button 
            variant="outline" 
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="text-chemistry-700 border-chemistry-300"
          >
            Kembali
          </Button>
          
          <Button 
            onClick={handleNextQuestion}
            disabled={selectedOption === null}
            className="bg-chemistry-600 hover:bg-chemistry-700"
          >
            {currentQuestionIndex < questions.length - 1 ? 'Lanjut' : 'Lihat Hasil'}
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;
