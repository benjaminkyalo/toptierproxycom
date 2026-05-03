import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ToptierProxy.com — Best Proxy Providers Reviewed for 2026" },
      { name: "description", content: "Independent reviews, rankings and comparisons of the world's best residential, datacenter, ISP and mobile proxy providers. Trusted by 9M+ data professionals." },
      { name: "author", content: "ToptierProxy.com" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#2C5266" },
      { property: "og:site_name", content: "ToptierProxy.com" },
      { property: "og:title", content: "ToptierProxy.com — Best Proxy Providers Reviewed for 2026" },
      { property: "og:description", content: "Independent reviews, rankings and comparisons of the world's best residential, datacenter, ISP and mobile proxy providers. Trusted by 9M+ data professionals." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@ToptierProxy" },
      { name: "twitter:title", content: "ToptierProxy.com — Best Proxy Providers Reviewed for 2026" },
      { name: "twitter:description", content: "Independent reviews, rankings and comparisons of the world's best residential, datacenter, ISP and mobile proxy providers. Trusted by 9M+ data professionals." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2d307459-2496-4fee-abd7-3daea7b54475/id-preview-09bdb6cd--21398cd2-3fc4-4e98-94b4-11b93c283e26.lovable.app-1777798149902.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2d307459-2496-4fee-abd7-3daea7b54475/id-preview-09bdb6cd--21398cd2-3fc4-4e98-94b4-11b93c283e26.lovable.app-1777798149902.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
