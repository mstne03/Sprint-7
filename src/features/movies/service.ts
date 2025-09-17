import type { MoviesResponse, Movie } from "./types";
import type { MovieCredits, PersonDetails } from "@/features/people/types";
import type { MediaItem } from "@/shared/media";

export interface Paged<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export type QueryParams = Record<string, string | number | boolean | undefined>;

export interface DataService {

  getMovies(page: number): Promise<MoviesResponse>;
  getMovieById(id: number): Promise<Movie>;
  getMovieCredits(movieId: number): Promise<MovieCredits>;

  getPersonDetails(personId: number): Promise<PersonDetails>;

  getTrending(period: "day" | "week"): Promise<Paged<MediaItem>>;
  getPopularTV(page: number): Promise<Paged<MediaItem>>;
  discoverMovies(params?: QueryParams): Promise<Paged<MediaItem>>;
  discoverTV(params?: QueryParams): Promise<Paged<MediaItem>>;
  searchMulti(query: string, page?: number): Promise<Paged<MediaItem>>;
}
