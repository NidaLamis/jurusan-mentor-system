
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileCode, Book, BookOpen, GraduationCap, TestTube, FlaskRound, FlaskConical, Brain, ChartBar, ChartPie, ChartLine } from "lucide-react";

interface MajorCardProps {
  name: string;
  description: string;
  matchPercentage: number;
  icon: string;
  index: number;
}

const MajorCard: React.FC<MajorCardProps> = ({ name, description, matchPercentage, icon, index }) => {
  const formattedPercentage = Math.round(matchPercentage * 100);
  
  const getIcon = () => {
    switch (icon) {
      case 'file-code': return <FileCode className="h-6 w-6 text-education-600" />;
      case 'book': return <Book className="h-6 w-6 text-education-600" />;
      case 'book-open': return <BookOpen className="h-6 w-6 text-education-600" />;
      case 'graduation-cap': return <GraduationCap className="h-6 w-6 text-education-600" />;
      case 'test-tube': return <TestTube className="h-6 w-6 text-education-600" />;
      case 'flask-round': return <FlaskRound className="h-6 w-6 text-education-600" />;
      case 'flask-conical': return <FlaskConical className="h-6 w-6 text-education-600" />;
      case 'brain': return <Brain className="h-6 w-6 text-education-600" />;
      case 'chart-bar': return <ChartBar className="h-6 w-6 text-education-600" />;
      case 'chart-pie': return <ChartPie className="h-6 w-6 text-education-600" />;
      case 'chart-line': return <ChartLine className="h-6 w-6 text-education-600" />;
      default: return <GraduationCap className="h-6 w-6 text-education-600" />;
    }
  };

  return (
    <Card className={`mb-4 border-l-4 ${index < 3 ? 'border-l-education-500' : 'border-l-gray-300'} animate-fade-in`}
         style={{ animationDelay: `${index * 0.1}s` }}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-education-50 p-2 rounded-full">
              {getIcon()}
            </div>
            <CardTitle>{name}</CardTitle>
          </div>
          <div className="text-lg font-semibold text-education-600">
            {formattedPercentage}% 
            {index === 0 && <span className="ml-1 bg-education-100 text-education-700 text-xs py-1 px-2 rounded-full">Terbaik</span>}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-3">{description}</CardDescription>
        <Progress value={formattedPercentage} className="h-2" />
      </CardContent>
    </Card>
  );
};

export default MajorCard;
