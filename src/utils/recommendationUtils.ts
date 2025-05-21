import { Question, Topic, UserTraits } from '../types/quiz';

// Define the UserTraits interface
export interface UserTraits {
  [key: string]: number; // Index signature to make it compatible with Record<string, number>
}

// Function to calculate user's score in each chemistry topic
export const calculateTopicScores = (answers: Record<number, string>, questions: Question[]): Record<string, number> => {
  const topicScores: Record<string, number> = {};
  const topicCounts: Record<string, number> = {};
  
  // Process each answer
  for (const questionId in answers) {
    const question = questions.find(q => q.id === parseInt(questionId));
    
    if (question && question.topic) {
      // Initialize topic if not already in scores
      if (!topicScores[question.topic]) {
        topicScores[question.topic] = 0;
        topicCounts[question.topic] = 0;
      }
      
      // If answer is correct, increment score
      if (answers[parseInt(questionId)] === question.correctAnswer) {
        topicScores[question.topic]++;
      }
      
      // Increment count of questions in this topic
      topicCounts[question.topic]++;
    }
  }
  
  // Convert raw scores to percentages
  const percentageScores: Record<string, number> = {};
  for (const topic in topicScores) {
    if (topicCounts[topic] > 0) {
      percentageScores[topic] = (topicScores[topic] / topicCounts[topic]) * 100;
    } else {
      percentageScores[topic] = 0;
    }
  }
  
  return percentageScores;
};

// Calculate percentage of correct answers
export const calculateOverallScore = (answers: Record<number, string>, questions: Question[]): number => {
  let correct = 0;
  let total = 0;
  
  for (const questionId in answers) {
    const question = questions.find(q => q.id === parseInt(questionId));
    if (question) {
      total++;
      if (answers[parseInt(questionId)] === question.correctAnswer) {
        correct++;
      }
    }
  }
  
  return total > 0 ? (correct / total) * 100 : 0;
};

// Normalize user traits (keeping this for compatibility)
export const normalizeUserTraits = (userTraits: UserTraits): UserTraits => {
  const traitKeys = Object.keys(userTraits);
  
  // Calculate mean
  let sum = 0;
  for (const key of traitKeys) {
    sum += userTraits[key];
  }
  const mean = sum / traitKeys.length;
  
  // Normalize and amplify differences
  const normalizedTraits = { ...userTraits };
  for (const key of traitKeys) {
    const diff = userTraits[key] - mean;
    normalizedTraits[key] = mean + (diff * 1.5); // Amplify differences
    if (normalizedTraits[key] < 0) normalizedTraits[key] = 0; // Ensure no negative values
  }
  
  return normalizedTraits;
};

// Get recommended topics based on performance
export const getRecommendedTopics = (topicScores: Record<string, number>, topics: Topic[]): Topic[] => {
  // Sort topics by score (lower scores first, as these need more practice)
  const sortedTopics = [...topics].sort((a, b) => {
    const scoreA = topicScores[a.id] || 0;
    const scoreB = topicScores[b.id] || 0;
    return scoreA - scoreB; // Sort ascending (low scores first)
  });
  
  // Add score property to topics
  return sortedTopics.map(topic => ({
    ...topic,
    score: topicScores[topic.id] || 0
  }));
};
