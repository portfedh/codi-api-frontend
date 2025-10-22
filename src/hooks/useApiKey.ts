import { useState, useEffect } from 'react';

const API_KEY_STORAGE_KEY = 'codi_api_key';

/**
 * Custom hook to manage API key persistence in localStorage
 * @returns Object with apiKey, saveApiKey, and clearApiKey functions
 */
export function useApiKey() {
  const [apiKey, setApiKey] = useState<string>('');

  // Load API key from localStorage on mount
  useEffect(() => {
    const savedKey = localStorage.getItem(API_KEY_STORAGE_KEY);
    if (savedKey) {
      setApiKey(savedKey);
    }
  }, []);

  /**
   * Save API key to state and localStorage
   */
  const saveApiKey = (key: string) => {
    setApiKey(key);
    if (key) {
      localStorage.setItem(API_KEY_STORAGE_KEY, key);
    } else {
      localStorage.removeItem(API_KEY_STORAGE_KEY);
    }
  };

  /**
   * Clear API key from state and localStorage
   */
  const clearApiKey = () => {
    setApiKey('');
    localStorage.removeItem(API_KEY_STORAGE_KEY);
  };

  return {
    apiKey,
    saveApiKey,
    clearApiKey,
  };
}
