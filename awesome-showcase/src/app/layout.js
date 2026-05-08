export const metadata = {
  title: "Awesome Showcase",
  description: "A stunning responsive Next.js experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
