import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Toaster } from 'sonner';

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster
        theme="dark"
        richColors
        position="top-center"
        visibleToasts={1}
        toastOptions={{
          className: 'rounded-2xl shadow-lg border-none',
          classNames: {
            success: 'bg-dark-success text-white text-sm',
            error: 'bg-dark-error text-white text-sm',
            warning: 'bg-dark-warning text-white text-sm',
            info: 'bg-dark-primary text-white text-sm',
            title: 'whitespace-pre-line',
          },
        }}
      />
    </QueryClientProvider>
  );
};
