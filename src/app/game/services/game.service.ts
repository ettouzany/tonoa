import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/app/config';
import { Game } from '../models/game.model';
 @Injectable()

export class GameService {
  baseUrl: string = `${config.apiUrl}/courses`;
  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get(this.baseUrl + 'games');
  }

  createGame(game: Game) {
    return this.http.post(this.baseUrl , game);
  }

  getGameById(id: number) {
    return this.http.get(this.baseUrl + 'games/' + id);
  }

  updateGame(game: Game) {
    return this.http.put(
      this.baseUrl + 'games/' + game.id, game);
  }


  deleteGame(id: number) {
    return this.http.delete(
      this.baseUrl + 'games/' + id);
  }

}
