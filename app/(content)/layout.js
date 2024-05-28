import '../globals.css';

//Componens
import MainHeader from "@/components/mainHeader/mainHeader"

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}

export default function RootLayout(context) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader/>
          {context.children}
        </div>
      </body>
    </html>
  )
}
