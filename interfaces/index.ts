// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

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
