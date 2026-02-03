export const metadata = {
  title: "The Dancehall",
  description: "Club Renaissance — 100% danse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
