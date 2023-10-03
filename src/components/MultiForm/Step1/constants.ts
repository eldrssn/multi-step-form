import { TFormStep } from './types';

export const step1: TFormStep[] = [
  {
    name: 'name',
    label: 'Name',
    placeholder: 'e.g. Stephen King',
    type: 'text',
  },
  {
    name: 'email',
    label: 'Email Address',
    placeholder: 'e.g. stephenking@lorem.com',
    type: '',
  },
  {
    name: 'phone',
    label: 'Phone Number',
    placeholder: 'e.g. +1 234 567 890',
    type: 'number',
  },
];
