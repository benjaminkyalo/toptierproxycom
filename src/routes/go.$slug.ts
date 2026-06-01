import { createFileRoute } from "@tanstack/react-router";
import { providers } from "@/data/providers";

export const Route = createFileRoute("/go/$slug")({
  component: GoRedirect,
});

function GoRedirect() {
  const { slug } = Route.useParams();
  const provider = providers.find((p) => p.slug === slug);
  
  if (provider) {
    window.location.replace(provider.visitUrl);
  }
  
  return null;
}
