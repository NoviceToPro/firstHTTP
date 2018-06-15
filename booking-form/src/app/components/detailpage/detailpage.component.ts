import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {
  name:'';
  surname:'';
  age:'';
  date:'';

  pages =[

    {name: 'Events', page: 'events'},
    {name: 'View', page: 'view'},
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params=> {
      this.name=params['name'];
      this.surname=params['surname'];
      this.age=params['age'];
      this.date=params['date'];
    
      console.log(this.name);
      console.log(this.surname);
      console.log(this.age);
      console.log(this.date);
    
  });
}

  }
