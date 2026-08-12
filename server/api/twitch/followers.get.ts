import { AppTokenAuthProvider } from "@twurple/auth";
import { ApiClient } from "@twurple/api";

export default defineCachedEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  if (!config.twitch.clientId || !config.twitch.clientSecret) {
    throw createError({
      status: ErrorCode.INTERNAL_SERVER_ERROR,
      message: "Twitch client ID and secret are not configured."
    });
  }

  const authProvider = new AppTokenAuthProvider(config.twitch.clientId, config.twitch.clientSecret);
  const twitch = new ApiClient({ authProvider });
  const broadcasterId = await twitch.users.getUserByName(SITE.links.twitch.username);
  if (!broadcasterId) {
    throw createError({
      status: ErrorCode.NOT_FOUND,
      message: "Twitch broadcaster not found."
    });
  }

  const count = await twitch.channels.getChannelFollowerCount(broadcasterId?.id);
  return { count };
}, {
  swr: false,
  maxAge: 86400, // 1 day
  group: "api",
  name: "twitch",
  getKey: () => "followers",
  shouldBypassCache: () => !!import.meta.dev
});
