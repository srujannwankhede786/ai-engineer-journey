import './globals.css';

export const metadata = {
  title: 'Business Vision V1',
  description: 'Starter React + Next.js project for Business Vision V1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
