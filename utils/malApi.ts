interface AnimeDetails {
  id: number;
  title: string;
  main_picture: {
    medium: string;
    large: string;
  };
  mean: number;
  num_episodes: number;
  media_type: string;
  num_list_users: number; // This is the member count
}

interface AnimeResponse {
  data: Array<{
    node: AnimeDetails;
  }>;
}

const MAL_API_BASE = 'https://api.myanimelist.net/v2';

export async function fetchFromMAL(endpoint: string) {
  const response = await fetch(`${MAL_API_BASE}${endpoint}`, {
    headers: {
      'X-MAL-CLIENT-ID': process.env.MAL_CLIENT_ID as string
    }
  });

  if (!response.ok) {
    throw new Error(`MAL API error: ${response.statusText}`);
  }

  return await response.json();
}

export async function getTopAiringAnime(): Promise<AnimeDetails[]> {
  const response = await fetchFromMAL('/anime/ranking?ranking_type=airing&limit=6&fields=id,title,main_picture,mean,num_episodes,media_type,num_list_users') as AnimeResponse;
  return response.data.map(item => item.node);
}

export async function getTopUpcomingAnime(): Promise<AnimeDetails[]> {
  const response = await fetchFromMAL('/anime/ranking?ranking_type=upcoming&limit=6&fields=id,title,main_picture,mean,num_episodes,media_type,num_list_users') as AnimeResponse;
  return response.data.map(item => item.node);
}
