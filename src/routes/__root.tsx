import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

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

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SJM Systems Engineering — Agenti AI per PMI italiane" },
      {
        name: "description",
        content:
          "SJM Systems Engineering progetta agenti AI custom per PMI italiane: architetture costruite sui tuoi processi reali, integrate negli strumenti che già usi.",
      },
      { name: "author", content: "SJM Systems Engineering" },
      { property: "og:site_name", content: "SJM Systems Engineering" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "SJM Systems Engineering — Agenti AI per PMI italiane",
      },
      {
        property: "og:description",
        content:
          "Forze lavoro digitali progettate sui tuoi processi reali. Risultati misurabili in 30–60 giorni.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "SJM Systems Engineering — Agenti AI per PMI italiane" },
      { name: "twitter:title", content: "SJM Systems Engineering — Agenti AI per PMI italiane" },
      { name: "description", content: "Agenti AI custom per PMI italiane. Costruiti sui tuoi processi reali." },
      { property: "og:description", content: "Agenti AI custom per PMI italiane. Costruiti sui tuoi processi reali." },
      { name: "twitter:description", content: "Agenti AI custom per PMI italiane. Costruiti sui tuoi processi reali." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/CeRPrR8NYzaH8LeMUoqcMZpYMMy1/social-images/social-1781036846962-ChatGPT_Image_9_giu_2026,_22_27_18.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/CeRPrR8NYzaH8LeMUoqcMZpYMMy1/social-images/social-1781036846962-ChatGPT_Image_9_giu_2026,_22_27_18.webp" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
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
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.querySelector('script[data-relevanceai-share-id]')) return;
    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://app.relevanceai.com/embed/chat-bubble.js";
    script.setAttribute(
      "data-relevanceai-share-id",
      "d7b62b/c32d1d9d-99cd-45b2-915d-2e468808d18a/ca2199c5-77fa-4073-8db6-04fd153f8713",
    );
    script.setAttribute(
      "data-share-styles",
      "hide_tool_steps=true&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%233ECFB2&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=true&hide_description=false",
    );
    document.body.appendChild(script);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

