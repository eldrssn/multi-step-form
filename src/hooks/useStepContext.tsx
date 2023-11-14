import { useContext } from 'react';
import { StepContext } from '@/context/StepContext';

export const useStepContext = () => useContext(StepContext);
