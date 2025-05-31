import { getTopAiringAnime, getTopUpcomingAnime } from '~/utils/malApi';

export default defineEventHandler(async (event) => {
  try {
    const [airing, upcoming] = await Promise.all([
      getTopAiringAnime(),
      getTopUpcomingAnime()
    ]);

    return {
      airing,
      upcoming
    };
  } catch (error) {
    console.error('Error fetching anime data:', error);
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch anime data'
    });
  }
});
