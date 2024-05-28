import '../globals.css';

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}

export default function RootLayout(context) {
  return (
    <html lang="en">
      <body>
          {context.children}
      </body>
    </html>
  )
}
