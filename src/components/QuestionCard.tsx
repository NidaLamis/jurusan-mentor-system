
import React from 'react';
import { Question } from '../data/questionsData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface QuestionCardProps {
  question: Question;
  selectedOption: string | null;
  onSelect: (optionValue: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, selectedOption, onSelect }) => {
  return (
    <Card className="w-full max-w-3xl mx-auto border-chemistry-200 shadow-md animate-slide-up">
      <CardHeader className="bg-chemistry-50 rounded-t-lg">
        <CardTitle className="text-xl text-chemistry-900">Soal {question.id}</CardTitle>
        <CardDescription className="text-lg text-chemistry-700 whitespace-pre-line">
          {question.text}
        </CardDescription>
        {question.imageUrl && (
          <div className="mt-2">
            <img 
              src={question.imageUrl} 
              alt="Chemistry diagram" 
              className="max-w-full mx-auto rounded-md"
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="pt-6">
        <RadioGroup value={selectedOption || ""} onValueChange={onSelect}>
          {question.options.map((option) => (
            <div key={option.value} className="flex items-center space-x-2 mb-4">
              <RadioGroupItem 
                value={option.value} 
                id={`option-${question.id}-${option.value}`} 
                className="text-chemistry-500"
              />
              <Label 
                htmlFor={`option-${question.id}-${option.value}`}
                className="text-base cursor-pointer py-2 px-3 rounded-md hover:bg-chemistry-50 w-full transition-colors whitespace-pre-line"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
