import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Card} from './card';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class CardListService {
    private CardUrl = 'assets/BaseCard.json';


    constructor(  private http: HttpClient,
                private messageService: MessageService) { }

    getCardList() {

        return this.http.get(this.CardUrl)
            .pipe(
                tap(data => this.log("!cardList load complete.")),
                catchError(this.handleError('getHeroes', []))
            );

    }

    private log(message: string) {

        this.messageService.add(`CardService: ${message}`);

    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.error(error); // log to console instead

            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
