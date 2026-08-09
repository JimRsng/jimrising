export const useSeo = (options: JimRisingSeoOptions) => {
  const path = useRoute().path.replace(/\/$/, "");
  useSeoMeta({
    title: options.title,
    description: options.description,
    // Open Graph
    ogUrl: SITE.host + path,
    ogType: "website",
    ogTitle: options.title,
    ogSiteName: options.name,
    ogDescription: options.description,
    ogImage: options.image ?? `${SITE.host}/${SITE.cover}`,
    ogImageWidth: options.imageWidth ?? 750,
    ogImageHeight: options.imageHeight ?? 375,
    ogImageAlt: options.imageAlt,
    // Twitter
    twitterCard: "summary_large_image",
    twitterSite: `@${SITE.links.x.username}`,
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: options.image ?? `${SITE.host}/${SITE.cover}`
  });

  options.robots = options.robots === undefined ? true : options.robots;
  useHead({
    meta: options.robots ? [] : [{ name: "robots", content: "noindex, nofollow" }],
    link: [
      { rel: "canonical", href: SITE.host + path }
    ]
  });
};
