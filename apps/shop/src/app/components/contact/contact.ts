import {Component, OnInit} from '@angular/core';
import { PersonService } from '@beast-adamant/shared';

@Component({
  selector: 'app-contact',
  imports: [],
  providers: [PersonService],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {

  constructor(private personService: PersonService) { }

  ngOnInit(){
    this.getPerson()
  }

  getPerson() {
    this.personService.getPerson('PER-00001')
  }

}
