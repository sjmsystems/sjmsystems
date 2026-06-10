import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

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
          "Forze lavoro digitali progettate sui tuoi processi reali. Risultati misurabili in 20–40 giorni.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "SJM Systems Engineering — Agenti AI per PMI italiane" },
      { name: "twitter:title", content: "SJM Systems Engineering — Agenti AI per PMI italiane" },
      { name: "description", content: "Agenti AI custom per PMI italiane. Costruiti sui tuoi processi reali." },
      { property: "og:description", content: "Agenti AI custom per PMI italiane. Costruiti sui tuoi processi reali." },
      { name: "twitter:description", content: "Agenti AI custom per PMI italiane. Costruiti sui tuoi processi reali." },
      { property: "og:image", content: "https://sjmsystems.it/__l5e/assets-v1/2b2ee7e9-3929-47f6-bded-0ae67e574c37/social-card.png" },
      { property: "og:image:width", content: "1248" },
      { property: "og:image:height", content: "1248" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "SJM Systems Engineering — Forze lavoro digitali, progettate sui vostri processi" },
      { name: "twitter:image", content: "https://sjmsystems.it/__l5e/assets-v1/2b2ee7e9-3929-47f6-bded-0ae67e574c37/social-card.png" },
      { name: "twitter:card", content: "summary_large_image" },
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

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <RelevanceChatWidget />
    </QueryClientProvider>
  );
}

function RelevanceChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const chatUrl =
    "https://app.relevanceai.com/agents/d7b62b/c32d1d9d-99cd-45b2-915d-2e468808d18a/ca2199c5-77fa-4073-8db6-04fd153f8713/embed-chat?hide_tool_steps=true&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%233ECFB2&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=true&hide_description=false";
  const agentImageUrl =
    "https://userdata-d7b62b.stack.tryrelevance.com/files/public/c32d1d9d-99cd-45b2-915d-2e468808d18a/agent-emoji-ChatGPT%20Image%2010%20giu%202026%2C%2017_51_02.png/ad172d8f-7fc1-4d2e-8f33-5bdcb7a690c8.png";

  const launcherStyle: CSSProperties = {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    zIndex: 2147483647,
    width: "96px",
    height: "96px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.9)",
    background: isOpen
      ? "var(--color-verdino, #3ECFB2)"
      : `#fff url("${agentImageUrl}") center / cover no-repeat`,
    color: "#061014",
    boxShadow: "0 18px 46px rgba(3,7,18,0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    pointerEvents: "auto",
  };

  const panelStyle: CSSProperties = {
    position: "fixed",
    right: "20px",
    bottom: "96px",
    zIndex: 2147483646,
    width: "min(390px, calc(100vw - 40px))",
    height: "min(620px, calc(100vh - 124px))",
    borderRadius: "16px",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.85)",
    background: "#fff",
    boxShadow: "0 24px 80px rgba(3,7,18,0.4)",
  };

  return (
    <>
      {isOpen ? (
        <div style={panelStyle} aria-label="Chat SJM Systems Engineering">
          <iframe
            title="Chat SJM Systems Engineering"
            src={chatUrl}
            style={{ display: "block", width: "100%", height: "100%", border: 0 }}
            allow="clipboard-read; clipboard-write"
          />
        </div>
      ) : null}
      <button
        type="button"
        aria-label={isOpen ? "Chiudi chat" : "Apri chat"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        style={launcherStyle}
      >
        {isOpen ? (
          <span aria-hidden="true" style={{ fontSize: "34px", lineHeight: 1, transform: "translateY(-1px)" }}>
            ×
          </span>
        ) : null}
      </button>
    </>
  );
}

