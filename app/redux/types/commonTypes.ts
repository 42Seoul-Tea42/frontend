import { SVGProps } from 'react';

export type ButtonType = {
  text?: string;
  onClick: () => void;
  SVG?: JSX.Element;
};

export type SubmitButtonType = {
  type?: string;
  text: string;
  onClick?: () => void;
  SVG?: JSX.Element;
};

export interface SVGStyle extends SVGProps<SVGElement> {
  color?: string;
  width?: string;
  height?: string;
}
