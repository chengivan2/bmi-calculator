import "./globals.css";

export const metadata = {
  title: "Body Mass Index (BMI) calculator",
  description: "Calculate your Body Mass Index (BMI) quickly using your height and weight.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
