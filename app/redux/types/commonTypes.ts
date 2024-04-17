export type ButtonType = {
  text?: string;
  onClick: () => void;
  SVG?: JSX.Element;
};

export type SubmitButtonType = {
  text: string;
  onClick?: () => void;
  SVG?: JSX.Element;
};
