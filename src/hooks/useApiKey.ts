import { useState, useEffect } from 'react';

const API_KEY_STORAGE_KEY = 'codi_api_key';
const API_KEY_CHANGE_EVENT = 'codi_api_key_change';

/**
 * Custom hook to manage API key persistence in localStorage
 * Syncs state across all components using this hook via custom events
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

    // Listen for API key changes from other components
    const handleApiKeyChange = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      setApiKey(customEvent.detail);
    };

    window.addEventListener(API_KEY_CHANGE_EVENT, handleApiKeyChange);

    return () => {
      window.removeEventListener(API_KEY_CHANGE_EVENT, handleApiKeyChange);
    };
  }, []);

  /**
   * Save API key to state and localStorage
   * Broadcasts change to all components using this hook
   */
  const saveApiKey = (key: string) => {
    setApiKey(key);
    if (key) {
      localStorage.setItem(API_KEY_STORAGE_KEY, key);
    } else {
      localStorage.removeItem(API_KEY_STORAGE_KEY);
    }

    // Notify all other components of the change
    window.dispatchEvent(new CustomEvent(API_KEY_CHANGE_EVENT, { detail: key }));
  };

  /**
   * Clear API key from state and localStorage
   * Broadcasts change to all components using this hook
   */
  const clearApiKey = () => {
    setApiKey('');
    localStorage.removeItem(API_KEY_STORAGE_KEY);

    // Notify all other components of the change
    window.dispatchEvent(new CustomEvent(API_KEY_CHANGE_EVENT, { detail: '' }));
  };

  return {
    apiKey,
    saveApiKey,
    clearApiKey,
  };
}
