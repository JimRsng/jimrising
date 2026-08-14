import type { NavigationMenuItem } from "@nuxt/ui";

export default defineCachedEventHandler(async (event) => {
  const appLinks = { main: SITE.host, ...SITE.appLinks };
  const { app = "main" }: { app?: keyof typeof appLinks } = getQuery(event);

  const pages: Record<string, NavigationMenuItem[]> = {
    main: [
      {
        label: "Inicio",
        to: appLinks.main
      },
      {
        label: "Legado",
        to: `${appLinks.main}/#legado`
      },
      {
        label: "Horario",
        to: `${appLinks.main}/#horario`
      },
      {
        label: "Clips",
        to: `${appLinks.main}/#clips`
      },
      {
        label: "Redes",
        to: `${appLinks.main}/#redes`
      }
    ],
    apps: [
      {
        value: "tracker",
        label: "Tracker",
        to: appLinks.tracker,
        icon: "simple-icons:leagueoflegends",
        active: app === "tracker",
        defaultOpen: app === "tracker",
        children: [
          {
            label: "Solo Queue",
            defaultOpen: true,
            children: [
              {
                label: "2026",
                to: `${appLinks.tracker}/season/2026`
              },
              {
                label: "2025",
                to: `${appLinks.tracker}/season/2025`
              }
            ]
          },
          {
            label: "Soloboom",
            defaultOpen: true,
            children: [
              {
                label: "2025",
                to: `${appLinks.tracker}/season/2025/soloboom`
              }
            ]
          },
          {
            label: "Retos",
            defaultOpen: true,
            children: [
              {
                label: "One by One",
                to: `${appLinks.tracker}/season/2026/reto-one-by-one`
              },
              {
                label: "Reto Nami",
                to: `${appLinks.tracker}/season/2026/reto-nami`
              }
            ]
          },
          {
            label: "Galería",
            to: `${appLinks.tracker}/gallery`
          }
        ]
      },
      {
        value: "comunidad",
        label: "Comunidad",
        to: appLinks.comunidad,
        icon: "lucide:users",
        active: app === "comunidad",
        defaultOpen: app === "comunidad",
        children: [
          {
            label: "Tabla",
            to: appLinks.comunidad
          },
          {
            label: "Actividad",
            to: `${appLinks.comunidad}/actividad`
          }
        ]
      }
    ]
  };

  const normalizeToApp = (navPages: Record<string, NavigationMenuItem[]>) => {
    const prefix = appLinks[app];

    const normalizeItem = (item: NavigationMenuItem): NavigationMenuItem => {
      const { to, children, ...rest } = item;
      let newTo = to;
      if (typeof to === "string") {
        const escPrefix = prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const stripped = to.replace(new RegExp(`^${escPrefix}`), "");
        newTo = stripped === "" ? "/" : stripped;
      }
      const newChildren = Array.isArray(children) ? children.map(normalizeItem) : undefined;
      return {
        ...rest,
        ...(newTo !== undefined ? { to: newTo } : {}),
        ...(newChildren !== undefined ? { children: newChildren } : {})
      };
    };

    return Object.fromEntries(
      Object.entries(navPages).map(([key, items]) => [key,
        key === app ? items.map(normalizeItem) : items.map((item) => {
          if (item.value === app) {
            return normalizeItem(item);
          }
          return item;
        })
      ])
    );
  };

  const navPages = normalizeToApp(pages);

  const pagesWithoutChildren = Object.fromEntries(
    Object.entries(navPages).map(([key, items]) => [key,
      items.map((item) => {
        const { children, ...rest } = item;
        return rest;
      })
    ])
  );

  const pagesWithChildrenWithoutTo = Object.fromEntries(
    Object.entries(navPages).map(([key, items]) => [key,
      items.map((item) => {
        if (item.children) {
          const { to, ...rest } = item;
          return rest;
        }
        return item;
      })
    ])
  );

  return {
    pages: pagesWithoutChildren,
    bodyPages: pagesWithChildrenWithoutTo
  };
}, {
  swr: false,
  maxAge: 86400, // 1 day
  group: "api",
  name: "navbar",
  getKey: event => getQuery(event).app?.toString() || "main",
  shouldBypassCache: () => !!import.meta.dev
});
