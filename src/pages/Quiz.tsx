
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import QuestionCard from '../components/QuestionCard';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { questions } from '../data/questionsData';

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
      // Calculate user traits based on answers
      const userTraits = calculateUserTraits();
      
      // Navigate to results page with traits data
      navigate('/results', { state: { userTraits } });
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
  
  // Calculate user traits based on answers
  const calculateUserTraits = () => {
    const userTraits = {
      analytical: 0,
      creative: 0,
      social: 0,
      practical: 0,
      investigative: 0,
      enterprising: 0
    };
    
    // Process each question's answer
    for (const questionId in answers) {
      const question = questions.find(q => q.id === parseInt(questionId));
      if (question) {
        const selectedAnswer = question.options.find(
          option => option.value === answers[parseInt(questionId)]
        );
        
        if (selectedAnswer) {
          // Add the traits values from this answer
          for (const traitKey in selectedAnswer.traits) {
            userTraits[traitKey as keyof typeof userTraits] += 
              selectedAnswer.traits[traitKey] || 0;
          }
        }
      }
    }
    
    return userTraits;
  };
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              Pertanyaan {currentQuestionIndex + 1} dari {questions.length}
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
            className="text-education-700 border-education-300"
          >
            Kembali
          </Button>
          
          <Button 
            onClick={handleNextQuestion}
            disabled={selectedOption === null}
            className="bg-education-600 hover:bg-education-700"
          >
            {currentQuestionIndex < questions.length - 1 ? 'Lanjut' : 'Lihat Hasil'}
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;
