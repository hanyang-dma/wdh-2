export type Language = 'zh' | 'en';

export interface CourseInfo {
  department: string;
  syllabus: string;
  name: string;
  enName: string; // Keep for display purposes if needed
  code: string;
  credits: string;
  semester: string;
  description: string;
  required: string;
  foundation: string;
  school: string;
}

export interface Objective {
  title: string;
  subtitle: string;
  description: string;
  icon: 'eye' | 'brain' | 'heart';
}

export interface Chapter {
  id: number;
  periodLabel: string;
  hoursLabel: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  keyFigures: string[];
  homework: string;
  imageAlt: string;
  labels: {
    summary: string;
    keyConcepts: string;
    keyFigures: string;
    assignment: string;
    figureRef: string;
  }
}

export interface AssessmentItem {
  label: string;
  percentage: number;
  details: string;
}

export interface GradingSection {
  title: string;
  description: string;
  items: AssessmentItem[];
}

export interface FooterContent {
  essentialReadingsTitle: string;
  digitalResourcesTitle: string;
  readings: { title: string; note: string }[];
  resources: { name: string; linkText: string }[];
  copyright: string;
}

export interface UIContent {
  marquee1: string;
  marquee2: string;
  fig: string;
  ref: string;
}

export interface Content {
  courseInfo: CourseInfo;
  objectives: Objective[];
  chapters: Chapter[];
  grading: GradingSection;
  footer: FooterContent;
  ui: UIContent;
}