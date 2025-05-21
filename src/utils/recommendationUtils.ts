
import { Major } from "../data/questionsData";

// Define the UserTraits interface
export interface UserTraits {
  analytical: number;
  creative: number;
  social: number;
  practical: number;
  investigative: number;
  enterprising: number;
  [key: string]: number; // Index signature to make it compatible with Record<string, number>
}

// Calculate similarity between user traits and chemistry topic traits using cosine similarity
export const calculateSimilarity = (userTraits: UserTraits, major: Major): number => {
  const traitKeys = Object.keys(userTraits) as (keyof UserTraits)[];
  
  // Calculate dot product
  let dotProduct = 0;
  let normUser = 0;
  let normMajor = 0;
  
  for (const key of traitKeys) {
    const userVal = userTraits[key] || 0;
    const majorVal = major.traits[key] || 0;
    
    dotProduct += userVal * majorVal;
    normUser += userVal * userVal;
    normMajor += majorVal * majorVal;
  }
  
  // Avoid division by zero
  if (normUser === 0 || normMajor === 0) return 0;
  
  // Calculate cosine similarity
  const similarity = dotProduct / (Math.sqrt(normUser) * Math.sqrt(normMajor));
  
  return similarity;
};

// Define a return type for the enhanced majors with similarity score
export interface MajorWithSimilarity extends Major {
  similarity?: number;
}

// Get ranked majors based on user traits
export const getRecommendedMajors = (userTraits: UserTraits, majors: Major[]): MajorWithSimilarity[] => {
  return majors
    .map(major => ({
      ...major,
      similarity: calculateSimilarity(userTraits, major)
    }))
    .sort((a, b) => (b.similarity || 0) - (a.similarity || 0));
};

// Normalize user traits to have higher contrast
export const normalizeUserTraits = (userTraits: UserTraits): UserTraits => {
  const traitKeys = Object.keys(userTraits) as (keyof UserTraits)[];
  const sum = traitKeys.reduce((acc, key) => acc + userTraits[key], 0);
  
  // If no traits, return empty
  if (sum === 0) {
    return userTraits;
  }
  
  // Calculate mean
  const mean = sum / traitKeys.length;
  
  // Enhance contrast by amplifying differences from mean
  const normalizedTraits = { ...userTraits };
  for (const key of traitKeys) {
    const diff = userTraits[key] - mean;
    normalizedTraits[key] = mean + (diff * 1.5); // Amplify differences
    if (normalizedTraits[key] < 0) normalizedTraits[key] = 0; // Ensure no negative values
  }
  
  return normalizedTraits;
};

// Transform trait scores to percentages for display
export const getTraitPercentages = (traits: Record<string, number>): Record<string, number> => {
  const total = Object.values(traits).reduce((sum, val) => sum + val, 0);
  
  if (total === 0) return traits;
  
  const percentages: Record<string, number> = {};
  for (const [trait, value] of Object.entries(traits)) {
    percentages[trait] = Math.round((value / total) * 100);
  }
  
  return percentages;
};
