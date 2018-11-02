import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        (paramMap: ParamMap) => {
          this.id = +paramMap.get('id');
          this.editMode = paramMap.get('id') !== null;
        }
      );
  }

}
