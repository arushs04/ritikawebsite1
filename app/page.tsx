'use client';

import dynamic from 'next/dynamic';

const ClientPage = dynamic(() => import('./components/ClientPage'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-pink-500"></div>
    </div>
  ),
});

export default function Home() {
  return <ClientPage />;
}
