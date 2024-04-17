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
