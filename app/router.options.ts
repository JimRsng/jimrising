import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior: to => (
    !to.hash ? { left: 0, top: 0 } : { el: to.hash, top: 62 }
  )
};
