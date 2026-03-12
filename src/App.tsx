import { RouterProvider } from '@tanstack/react-router';
import { router } from '~/router';
import { Navbar } from '~/components/Navbar';
import { Footer } from '~/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-surface-foreground">
      <Navbar />
      <main className="flex-1">
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
}
