import { LenisProvider } from "@/components/Lenis";
import FooterProvider from "./FooterProvider";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";
import { SessionProvider } from "next-auth/react";
import ZaloPixel from "@/components/Pixel/ZaloPixel";
import Script from "next/script";
import BackgroundMusic from "@/components/BackgroundMusic";

export const metadata = {
  title: "NewLink Investment Company",
  description:
    "NewLink Investment là công ty chuyên đầu tư và phát triển bất động sản, với sứ mệnh mang đến những cơ hội đầu tư tiềm năng và giá trị lâu dài cho khách hàng",
  keywords: [
    "NewLink",
    "NewLink Investment",
    "bất động sản",
    "đầu tư",
    "New Link",
    "phát triển dự án",
    "cơ hội đầu tư",
  ],
  authors: [{ name: "NewLink Investment" }],
  robots: "index, follow",
  charset: "utf-8",

  openGraph: {
    title: "NewLink Investment Company - Đầu tư và phát triển bất động sản",
    description:
      "NewLink Investment mang đến những cơ hội đầu tư tiềm năng và giá trị lâu dài cho khách hàng.",
    images: ["https://newlinkinvest.com/web-app-manifest-192x192.png"],
    url: "https://newlinkinvest.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NewLink Company - Đầu tư và phát triển bất động sản",
    description:
      "NewLink mang đến những cơ hội đầu tư tiềm năng và giá trị lâu dài cho khách hàng.",
    images: ["https://newlinkinvest.com/web-app-manifest-192x192.png"],
    site: "@NewLinkCompany",
  },
  alternates: {
    canonical: "https://newlinkinvest.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1096668635173571');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* NoScript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1096668635173571&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <div className="flex flex-col min-h-screen">
          <BackgroundMusic />
          <main className="flex-grow">
            <SessionProvider>
              <ReduxProvider>
                <LenisProvider>{children}</LenisProvider>
              </ReduxProvider>
            </SessionProvider>
          </main>
        </div>
        <FooterProvider />
      </body>
    </html>
  );
}
