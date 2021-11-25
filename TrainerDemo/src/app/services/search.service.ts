import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  constructor(private httpClient: HttpClient) {}

  getRepo(query: string) {
    return this.httpClient.get(
      `https://api.github.com/search/repositories?q=${query}`
    );
  }
}
