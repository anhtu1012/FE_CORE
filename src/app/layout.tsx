import "@/app/globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { NextIntlClientProvider } from "next-intl";
import { ReduxProvider } from "./StoreProvider";
import { getLocale, getMessages } from "next-intl/server";
import { ClerkProvider } from "@clerk/nextjs";
// import BubbleCursor from "@/components/BubbleCursor";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <ClerkProvider>
      <html lang={locale} className="light" suppressHydrationWarning>
        <head>
          <meta name="theme-color" content="#ffffff" />
          {/* ...other head elements... */}
        </head>
        <body suppressHydrationWarning>
          <NextIntlClientProvider messages={messages}>
            <ReduxProvider>
              <AntdRegistry>{children}</AntdRegistry>
            </ReduxProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
