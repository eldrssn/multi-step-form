export type TButton = {
  action: 'back' | 'next' | 'confirm';
  type?: 'button' | 'submit';
  onClick?: () => void;
};
