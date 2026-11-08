'use client';
import { createContext, useContext } from 'react';
import { defaultLearning } from '../../lib/academy/progress';
import type { LearningPreferences } from '../../lib/academy/types';
export const PreferencesContext=createContext<LearningPreferences>(defaultLearning);
export const useLearningPreferences=()=>useContext(PreferencesContext);
