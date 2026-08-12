export default defineAppConfig({
  ui: {
    header: {
      slots: {
        root: "bg-zinc-950/70 backdrop-blur border-b border-primary/30 h-(--ui-header-height) fixed w-full top-0 z-50"
      }
    },
    container: {
      base: "max-w-full lg:px-12"
    },
    button: {
      slots: {
        base: "rounded-none"
      }
    },
    footer: {
      slots: {
        root: "bg-elevated"
      }
    },
    pageHero: {
      slots: {
        description: "text-base sm:text-xl/8"
      }
    }
  }
});
