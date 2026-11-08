'use client';
import {createContext} from 'react';
import {defaultLearner} from '../../lib/academy/learner';
export const LearnerContext=createContext(defaultLearner());
