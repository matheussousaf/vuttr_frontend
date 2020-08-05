import { ReactNode } from "react";

export type User = {
  id: number;
  name: string;
};

export type Page = {
  children?: ReactNode;
  title?: string;
};

export interface Tool {
  title: string;
  description: string;
  tags: string[];
}
