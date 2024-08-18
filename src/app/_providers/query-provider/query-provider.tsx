"use client"

import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
const queryClient = new QueryClient()


interface IQueryProvider {
    children?: React.ReactNode;
}

export default function QueryProvider({ children } : IQueryProvider) {

  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}
