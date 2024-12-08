import { makeAutoObservable, runInAction } from 'mobx';
import marvelApi from '../api/marlvelApi';
import { Character } from '../models/Character';
import { Comic } from '../models/Comic';
import { MarvelDataResponse } from '../models/MarvelDataResponse';
import axios from 'axios';

class MarvelStore {
  characters: Character[] = [];
  comics: Comic[] = [];
  loading: boolean = false;
  error: string | null = null;
  totalCharacters: number = 0;
  totalComics: number = 0;
  limit: number = 20;
  offsetCharacters: number = 0;
  offsetComics: number = 0;
  searchQueryCharacters: string = '';
  searchQueryComics: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  async fetchCharacters() {
    this.loading = true;
    try {
      const params = {
        offset: this.offsetCharacters,
        limit: this.limit,
        nameStartsWith: this.searchQueryCharacters || undefined,
      };
      const response = await marvelApi.get<MarvelDataResponse<Character>>(
        '/characters',
        { params }
      );
      runInAction(() => {
        this.characters = response.data.data.results; // Исправлено: весь массив результатов
        this.totalCharacters = response.data.data.total;
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          this.error = `API Error: ${error.response.status} - ${error.response.data}`;
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        } else if (error.request) {
          this.error = 'Network Error: No response received from the server.';
          console.error(error.request);
        } else {
          this.error = `Error: ${error.message}`;
          console.error('Error', error.message);
        }
      } else {
        this.error = 'An unexpected error occurred.';
        console.error('Unexpected error:', error);
      }
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async fetchComics() {
    this.loading = true;
    try {
      const params = {
        offset: this.offsetComics,
        limit: this.limit,
        titleStartsWith: this.searchQueryComics || undefined,
      };
      const response = await marvelApi.get<MarvelDataResponse<Comic>>(
        '/comics',
        { params }
      );
      runInAction(() => {
        this.comics = response.data.data.results; // Исправлено: весь массив результатов
        this.totalComics = response.data.data.total;
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          this.error = `API Error: ${error.response.status} - ${error.response.data}`;
        } else if (error.request) {
          this.error = 'Network Error: No response received from the server.';
        } else {
          this.error = `Error: ${error.message}`;
        }
      } else {
        this.error = 'An unexpected error occurred.';
        console.error('Unexpected error:', error);
      }
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async fetchCharacterDetails(characterId: number): Promise<Character | undefined> {
    this.loading = true;
    try {
      const response = await marvelApi.get<MarvelDataResponse<Character>>(
        `/characters/${characterId}`
      );
      return response.data.data.results[0]; // Здесь оставляем [0], так как ожидается один результат
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          this.error = `API Error: ${error.response.status} - ${error.response.data}`;
        } else if (error.request) {
          this.error = 'Network Error: No response received from the server.';
        } else {
          this.error = `Error: ${error.message}`;
        }
      } else {
        this.error = 'An unexpected error occurred.';
        console.error('Unexpected error:', error);
      }
      return undefined;
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async fetchComicDetails(comicId: number): Promise<Comic | undefined> {
    this.loading = true;
    try {
      const response = await marvelApi.get<MarvelDataResponse<Comic>>(
        `/comics/${comicId}`
      );
      return response.data.data.results[0]; // Здесь оставляем [0], так как ожидается один результат
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          this.error = `API Error: ${error.response.status} - ${error.response.data}`;
        } else if (error.request) {
          this.error = 'Network Error: No response received from the server.';
        } else {
          this.error = `Error: ${error.message}`;
        }
      } else {
        this.error = 'An unexpected error occurred.';
        console.error('Unexpected error:', error);
      }
      return undefined;
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  setOffsetCharacters(offset: number) {
    this.offsetCharacters = offset;
  }

  setOffsetComics(offset: number) {
    this.offsetComics = offset;
  }

  setSearchQueryCharacters(query: string) {
    this.searchQueryCharacters = query;
  }

  setSearchQueryComics(query: string) {
    this.searchQueryComics = query;
  }
}

const marvelStore = new MarvelStore();
export default marvelStore;