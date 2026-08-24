import { useState } from 'react';
import { api } from '../services/api';

export const useResumeReview = () => {
  const [resume, setResume] = useState(null);
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [step, setStep] = useState('upload');
  
  const uploadResume = async (file) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.uploadResume(file);
      if (response.success) {
        setResume(response.data);
        setStep('review');
      } else {
        throw new Error(response.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  const startReview = async (targetRole = null, jobDescription = null) => {
    if (!resume) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.reviewResume(resume.id, targetRole, jobDescription);
      if (response.success) {
        setReview(response.data);
        setStep('results');
      } else {
        throw new Error(response.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  const reset = () => {
    setResume(null);
    setReview(null);
    setError(null);
    setStep('upload');
  };
  
  return {
    resume,
    review,
    loading,
    error,
    step,
    uploadResume,
    startReview,
    reset,
  };
};
