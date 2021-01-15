import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/app/config';
import { Participants } from '../models/participants.model';
 @Injectable()

export class ParticipantsService {
  baseUrl: string = `${config.apiUrl}/courses`;
  constructor(private http: HttpClient) {}

  getParticipantss() {
    return this.http.get(this.baseUrl + 'participantss');
  }

  createParticipants(participants: Participants) {
    return this.http.post(this.baseUrl , participants);
  }

  getParticipantsById(id: number) {
    return this.http.get(this.baseUrl + 'participantss/' + id);
  }

  updateParticipants(participants: Participants) {
    return this.http.put(
      this.baseUrl + 'participantss/' + participants.id, participants);
  }


  deleteParticipants(id: number) {
    return this.http.delete(
      this.baseUrl + 'participantss/' + id);
  }

}
