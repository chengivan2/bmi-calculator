import "./globals.css";

export const metadata = {
  title: "Body Mass Index (BMI) calculator",
  description:
    "Calculate your Body Mass Index (BMI) quickly using your height and weight.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Playwrite+DE+Grund:wght@100..400&family=Poppins:wght@400;500;600;800;900&display=swap&apos;);
        </style>
      </head>
      <body>{children}</body>
    </html>
  );
}
