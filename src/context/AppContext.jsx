import { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [modalContent, setModalContent] = useState(null);
  const [toast, setToast] = useState(null);

  const showModal = useCallback((content) => setModalContent(content), []);
  const hideModal = useCallback(() => setModalContent(null), []);

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  return (
    <AppContext.Provider value={{ modalContent, showModal, hideModal, toast, showToast }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
