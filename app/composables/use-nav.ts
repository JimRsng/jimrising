import type { NavigationMenuItem } from "@nuxt/ui";

const appLinks = {
  tracker: "https://jimtracker.com",
  comunidad: "https://comunidad.jimtracker.com"
};

const pages: Record<string, NavigationMenuItem[]> = {
  main: [
    {
      label: "Inicio",
      to: "/"
    },
    {
      label: "Legado",
      to: "#legado"
    },
    {
      label: "Horario",
      to: "#horario"
    },
    {
      label: "Clips",
      to: "#clips"
    },
    {
      label: "Redes",
      to: "#redes"
    }
  ],
  apps: [
    {
      label: "Tracker",
      to: appLinks.tracker,
      icon: "simple-icons:leagueoflegends",
      children: [
        {
          label: "Solo Queue",
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
          children: [
            {
              label: "2025",
              to: `${appLinks.tracker}/season/2025/soloboom`
            }
          ]
        },
        {
          label: "Retos",
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
        }
      ]
    },
    {
      label: "Comunidad",
      to: "https://comunidad.jimtracker.com",
      icon: "lucide:users",
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

export const useNav = () => {
  const pagesWithoutChildren = Object.fromEntries(
    Object.entries(pages).map(([key, items]) => [
      key,
      items.map((item) => {
        const { children, ...rest } = item;
        return rest;
      })
    ])
  );

  const pagesWithChildrenWithoutTo = Object.fromEntries(
    Object.entries(pages).map(([key, items]) => [
      key,
      items.map((item) => {
        const { to, ...rest } = item;
        return rest;
      })
    ])
  );

  return {
    pages: pagesWithoutChildren,
    bodyPages: pagesWithChildrenWithoutTo
  };
};
