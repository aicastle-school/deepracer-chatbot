type OpenYouTubeLinkParams = {
  href: string;
  target?: string;
};

const isBrowserEnv = (): boolean => typeof window !== "undefined" && !!window.open;

const isYouTubeHost = (host: string): boolean => {
  const h = host.toLowerCase();
  return (
    h === "youtube.com" ||
    h.endsWith(".youtube.com") ||
    h === "youtu.be"
  );
};

const normalizeYouTubeUrl = (url: URL): URL => {
  // Convert common variants to a standard watch URL where reasonable
  if (url.hostname.toLowerCase().endsWith("youtube.com")) {
    // /shorts/<id> -> /watch?v=<id>
    if (url.pathname.startsWith("/shorts/")) {
      const id = url.pathname.split("/")[2] ?? "";
      if (id) {
        const normalized = new URL("https://www.youtube.com/watch");
        normalized.searchParams.set("v", id);
        // Preserve start time
        const t = url.searchParams.get("t") ?? url.searchParams.get("start");
        if (t) normalized.searchParams.set("t", t);
        return normalized;
      }
    }
  }

  // youtu.be/<id>?t=123 stays as-is
  return url;
};

export function openYouTubeLink({ href, target }: OpenYouTubeLinkParams): boolean {
  try {
    if (!isBrowserEnv()) return false;
    if (!href || typeof href !== "string") return false;

    const url = new URL(href);
    if (url.protocol !== "https:") return false;
    if (!isYouTubeHost(url.hostname)) return false;

    const finalUrl = normalizeYouTubeUrl(url).toString();
    const finalTarget = target === "_self" ? "_self" : "_blank";
    const newWin = window.open(finalUrl, finalTarget, "noopener,noreferrer");
    if (newWin) return true;

    // Fallback if the popup was blocked: programmatically click an anchor
    const anchor = document.createElement("a");
    anchor.href = finalUrl;
    anchor.target = finalTarget;
    if (finalTarget === "_blank") {
      anchor.rel = "noopener noreferrer";
    }
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    return true;
  } catch (_err) {
    return false;
  }
}


