// types/Question.ts
export type Option = {
  label: string;
  value: string;
  points: number;
};

export type QuestionProps = {
  question: string;
  options: Option[];
  name: string;
  selectedValue: string;
  onChange: (value: string, points: number) => void;
  reactionText: { [key: string]: any };
};
