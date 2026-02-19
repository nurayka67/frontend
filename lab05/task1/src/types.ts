/**
 * Interface for user data (Ch. 6, p. 96)
 * Defines the shape of a user object in the application
 */
export interface User {
  name: string;
  email: string;
  age: number;
}

/**
 * Union type alias for skill level (Ch. 6, p. 97)
 * Represents the possible proficiency levels a skill can have
 */
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Expert';

/**
 * Interface for skill data
 * Defines the structure of a skill object with id, name, and level
 */
export interface Skill {
  id: number;
  name: string;
  level: SkillLevel;
}