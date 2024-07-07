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
          url('https://fonts.googleapis.com/css2?family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap');
        </style>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Playwrite+DE+Grund:wght@100..400&display=swap');
        </style>
      </head>
      <body>{children}</body>
    </html>
  );
}
