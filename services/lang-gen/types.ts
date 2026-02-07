export interface ErrorDetail {
  location?: string;
  message?: string;
  value?: unknown;
}

export interface ErrorModel {
  $schema?: string;
  detail?: string;
  errors?: ErrorDetail[] | null;
  instance?: string;
  status?: number;
  title?: string;
  type?: string;
}

export interface ID {
  $schema?: string;
  id: string;
}

export interface Language {
  id: string;
  name: string;
}

export interface Model {
  display_name: string;
  name: string;
}

export interface Section {
  id: string;
  title: string;
  text: string;
}

export interface Question {
  section_id: string;
  question: string;
  answer: string;
  possible_answers?: string[] | null;
  regex_answer?: string;
}

export interface Lesson {
  title: string;
  sections: Section[] | null;
  questions: Question[] | null;
}

export interface PostLessonInput {
  $schema?: string;
  source_language: string;
  target_language: string;
  level: number;
  lesson_plan: string;
  previous_words: string[] | null;
  model: string;
}

export type LessonStatus = 'queued' | 'processing' | 'completed' | 'failed';

export interface GetLessonOutput {
  $schema?: string;
  status: LessonStatus;
  lesson?: Lesson;
  error?: string;
}