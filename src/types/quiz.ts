
// Define quiz interfaces and types
export interface Question {
  id: number;
  text: string;
  options: {
    value: string;
    label: string;
    traits?: Record<string, number>; // Make traits optional
  }[];
  correctAnswer?: string;
  explanation?: string;
  imageUrl?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  topic?: string;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  icon: string;
  score?: number; // Optional score property added by recommendation utils
}
