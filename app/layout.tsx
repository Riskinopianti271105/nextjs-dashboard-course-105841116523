import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'; // Mengimpor font Inter

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Gunakan Inter sebagai font default */}
      {/* Perbaikan: Menggunakan template literals (`${}`) untuk className */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}