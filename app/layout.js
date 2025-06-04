import Footer from "./components/Footer";
import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Vishwanath's Portfolio",
  description:
    "Vishwanath is a full-stack software engineer specializing in React.js, Flask, and PostgreSQL. Check out my projects, skills, and contact information.",
  keywords:
    "Vishwanath, portfolio, full-stack developer, React.js, Flask, PostgreSQL, web development, projects",
  author: "Vishwanath",
  openGraph: {
    title: "Vishwanath's Portfolio",
    description:
      "Explore Vishwanath's portfolio showcasing full-stack projects, experience, and skills in modern web development.",
    url: "https://www.vishuportfolio.com/",
    type: "website",
    images: [
      {
        url: "https://www.vishuportfolio.com/avatar.png",
        width: 1200,
        height: 630,
        alt: "Vishwanath's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishwanath's Portfolio",
    description:
      "Full-stack developer specializing in React.js, Flask, and PostgreSQL. Explore my projects and contact me.",
    site: "@your_twitter_handle",
    images: ["https://www.vishuportfolio.com/avatar.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Vishwanath is a full-stack software engineer specializing in React.js, Flask, and PostgreSQL. Check out my projects, skills, and contact information."
        />
        <meta
          name="keywords"
          content="Vishwanath, portfolio, full-stack developer, React.js, Flask, PostgreSQL, web development, projects"
        />
        <meta name="author" content="Vishwanath" />
        <meta property="og:title" content="Vishwanath's Portfolio" />
        <meta
          property="og:description"
          content="Explore Vishwanath's portfolio showcasing full-stack projects, experience, and skills in modern web development."
        />
        <meta
          property="og:image"
          content="https://www.vishuportfolio.com/avatar.png"
        />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vishwanath's Portfolio" />
        <meta
          name="twitter:description"
          content="Full-stack developer specializing in React.js, Flask, and PostgreSQL. Explore my projects and contact me."
        />
        <meta
          name="twitter:image"
          content="https://www.vishuportfolio.com/avatar.png"
        />
        <title>Vishwanath&apos;s Portfolio</title>
      </head>
      <body>
        <Header />
        <div className="w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
