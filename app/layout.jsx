import "@styles/globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "Maxum CNC",
  description: "Precision Machining",
  icons: {
    icon: "/images/maxum-favicon.png",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <main>
            <Nav />            
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
