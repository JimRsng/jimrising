export const useNavbar = async () => {
  const { data } = await useFetch("/api/navbar", {
    key: "navbar",
    getCachedData: (key, nuxtApp) => nuxtApp.payload.data[key]
  });

  if (!data.value) {
    throw createError({
      statusCode: 500,
      message: "Failed to fetch navbar data",
      fatal: true
    });
  }

  return data.value!;
};
