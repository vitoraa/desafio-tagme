import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor (private route: ActivatedRoute) { }

  //TODO: pass recipe name or another more readable parameter
  ngOnInit () {
    var id = this.route.snapshot.paramMap.get('id')
    console.log(id)
  }

}
