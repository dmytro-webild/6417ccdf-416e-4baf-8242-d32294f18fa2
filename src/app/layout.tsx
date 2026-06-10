import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";



export const metadata: Metadata = {
  title: 'Glamour | Элитный салон красоты в Алматы',
  description: 'Откройте для себя мир роскошных услуг красоты в салоне Glamour. Стрижки, маникюр, окрашивание и индивидуальный уход в Алматы. Запишитесь онлайн!',
  openGraph: {
    "title": "Glamour | Элитный салон красоты в Алматы",
    "description": "Откройте для себя мир роскошных услуг красоты в салоне Glamour. Стрижки, маникюр, окрашивание и индивидуальный уход в Алматы. Запишитесь онлайн!",
    "url": "https://www.glamour.kz",
    "siteName": "Glamour",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/arrangement-with-beautiful-flowers-stones_23-2149307873.jpg",
        "alt": "Интерьер салона Glamour"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Glamour | Элитный салон красоты в Алматы",
    "description": "Откройте для себя мир роскошных услуг красоты в салоне Glamour. Стрижки, маникюр, окрашивание и индивидуальный уход в Алматы. Запишитесь онлайн!",
    "images": [
      "http://img.b2bpic.net/free-photo/arrangement-with-beautiful-flowers-stones_23-2149307873.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
