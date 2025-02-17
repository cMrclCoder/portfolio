import { useState, createContext, useContext, ReactNode } from "react";

const LoadingContext = createContext<{
  startLoading: (callback: () => void) => void;
}>({
  startLoading: () => {},
});

export function useLoading() {
  return useContext(LoadingContext);
}

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);

  const getLoadingTime = () => {
    const connection = navigator.connection as unknown as { downlink?: number };
    if (connection.downlink !== undefined) {
      const speed = connection.downlink;
      if (speed < 1) return 6000;
      if (speed < 3) return 4000;
      return 2000;
    }
    return 3000;
  };

  const startLoading = (callback: () => void) => {
    setLoading(true);
    const timeout = getLoadingTime();
    setTimeout(() => {
      setLoading(false);
      callback();
    }, timeout);
  };

  return (
    <LoadingContext.Provider value={{ startLoading }}>
      {loading && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1000]">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
}
