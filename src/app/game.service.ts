import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { doc, onSnapshot, setDoc } from "firebase/firestore";

import { Game } from '../../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  // games$: Observable<any[]>;
  // games;

  // unsubList;
  unsubSingle;



  firestore: Firestore = inject(Firestore);
  constructor() {
    const aCollection = collection(this.firestore, 'games')



    // this.unsubList = onSnapshot(this.getGameRef(), (list) => {
    //   list.forEach(element) => {
    //     console.log(element);
    //   }
    // });

    this.unsubSingle = onSnapshot(this.getSingleDocRef('games', 'dDTP54ARlMZeS4TLTWvj'), (element) => {
      console.log(element);
    });

    // this.unsubSingle();
    // this.unsubList();

    // // this.games$ = collectionData(this.getGameRef());
    // // this.games = this.games$.subscribe((list) => {
    // //   list.forEach(element) => {
    // //     console.log(element);
    // //   };
    // // });

    // this.games.unsubscribe();

  }

  getGameRef() {
    return collection(this.firestore, 'games');
  }

  getSingleDocRef(colId:string, docId:string) {
    return doc(collection(this.firestore, colId), docId);
  }

  // async addGame(game:Game) {
  //   await setDoc(doc(this.getGameRef(), 'game'), {
  //     players: game.players,
  //     stack: game.stack,
  //     playedCards: game.playedCards,
  //     currentPlayer: game.currentPlayer,
  //   })
  // }

}
