import "@styles/globals.css";

export const metadata = {
  title: "Maxum CNC",
  description: "Precision Machining",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
