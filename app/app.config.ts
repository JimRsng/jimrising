export default defineAppConfig({
  ui: {
    header: {
      slots: {
        root: "bg-zinc-950/70 backdrop-blur border-b border-primary/30 h-(--ui-header-height) sticky top-0 z-50"
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
        root: "bg-dark-2"
      }
    }
  }
});
