import { AppTokenAuthProvider } from "@twurple/auth";
import { ApiClient } from "@twurple/api";

export default defineCachedEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  if (!config.twitch.clientId || !config.twitch.clientSecret) {
    throw createError({
      statusCode: ErrorCode.INTERNAL_SERVER_ERROR,
      statusMessage: "Twitch client ID and secret are not configured."
    });
  }

  const blacklistedGames = ["Just Chatting", "I'm Only Sleeping"];

  const authProvider = new AppTokenAuthProvider(config.twitch.clientId, config.twitch.clientSecret);
  const twitch = new ApiClient({ authProvider });
  const broadcasterId = await twitch.users.getUserByName(SITE.links.twitch.username);
  if (!broadcasterId) {
    throw createError({
      statusCode: ErrorCode.NOT_FOUND,
      statusMessage: "Twitch broadcaster not found."
    });
  }
  const { data } = await twitch.clips.getClipsForBroadcaster(broadcasterId?.id, { limit: 100 });
  const clips = await Promise.all(data.map(async clip => ({
    id: clip.id,
    title: clip.title,
    url: clip.url,
    thumbnailUrl: clip.thumbnailUrl,
    createdAt: clip.creationDate,
    game: clip.gameId && (await twitch.games.getGameByIdBatched(clip.gameId))?.name,
    views: clip.views,
    createdBy: clip.creatorDisplayName
  })));
  return clips.filter(clip => clip.game && !blacklistedGames.some(game => game.toLowerCase() === clip.game?.toLowerCase())).slice(0, 12);
}, {
  swr: false,
  maxAge: 86400, // 1 day
  group: "api",
  name: "twitch",
  getKey: () => "clips",
  shouldBypassCache: () => !!import.meta.dev
});
