// src/hooks/useFetch.ts

import { useState, useEffect } from 'react';

interface UseFetchResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

const useFetch = <T>(url: string, method: 'GET' | 'POST' = 'GET', body: any = null): UseFetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options: RequestInit = {
          method,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Eğer token gerekiyorsa
          },
          body: method === 'POST' ? JSON.stringify(body) : null
        };

        const response = await fetch(url, options);
        
        if (!response.ok) {
          throw new Error('Veri alınırken bir hata oluştu');
        }

        const result: T = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Bir hata oluştu');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]); // URL, method ve body değiştiğinde yeniden çalışacak

  return { data, error, loading };
};

export default useFetch;
