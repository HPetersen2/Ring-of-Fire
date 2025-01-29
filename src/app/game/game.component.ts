import { CommonModule } from '@angular/common';
import { Component, inject, Injectable, ɵgetInjectableDef } from '@angular/core';
import { NgFor, NgStyle, NgIf } from '@angular/common';
import { Game } from './../../../models/game'
import { PlayerComponent } from '../player/player.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from "../game-info/game-info.component";
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, NgFor, NgStyle, NgIf, PlayerComponent, MatButtonModule, MatIconModule, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  gameservice = inject(GameService);

  constructor(public dialog: MatDialog) {
    this.createGame();
  }


  game?: Game;
  pickCardAnimation:boolean = false;
  currentCard?:string = "";



  createGame() {
    this.game = new Game();
    // this.gameservice.addGame(this.game);
    // this.gameservice.renderCollection();
  }

  takeCard() {
    if(!this.pickCardAnimation) {
      this.currentCard = this.game?.stack.pop();
      this.pickCardAnimation = true;
      console.log("New card: " + this.currentCard);
      console.log("Game is", this.game);

      if (this.game) {
        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      }
      
  
      setTimeout(() => {
        if (this.game && this.currentCard) {
          this.game.playedCards.push(this.currentCard);
        }
        this.pickCardAnimation = false;
      }, 1000);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {

    });

    dialogRef.afterClosed().subscribe(name => {
      if (name !== undefined) {
        this.game?.players.push(name);
      }
    });
  }

}
