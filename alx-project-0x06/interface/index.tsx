import { ReactNode } from "react";

export interface PageRouteProps {
  pageRoute: string
}

export interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}

export interface LayoutProps {
  children: ReactNode;
}

export interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}