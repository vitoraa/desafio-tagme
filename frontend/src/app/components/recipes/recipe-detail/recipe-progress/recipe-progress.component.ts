import { Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../../shared/modal/modal.component';

@Component({
  selector: 'app-recipe-progress',
  templateUrl: './recipe-progress.component.html',
  styleUrls: ['./recipe-progress.component.css']
})
export class RecipeProgressComponent implements OnInit {

  @Input() percentageOfRecipeFinished: number
  @ViewChild('modal') private modalComponent: ModalComponent
  title: string = 'Obrigado'
  buttonText: string = 'OK'

  constructor () { }

  ngOnInit (): void {
  }

  finishRecipe () {
    return this.modalComponent.open()
  }

  isRecipeFinished (): boolean {
    return this.percentageOfRecipeFinished === 100
  }

}
