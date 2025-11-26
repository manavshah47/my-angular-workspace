import {PersonGenderEnum} from '../enums/person-gender.enum';

export interface PersonHttp {
  id: string;
  gender: PersonGenderEnum;
  name: string;
  email: string;
}

export interface PersonAddressHttp {
  street: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
}

export class PersonVM {
  id: string;
  gender: PersonGenderEnum;
  name: string;
  email: string;

  constructor(data: PersonHttp) {
    this.id = data.id;
    this.gender = data.gender;
    this.name = data.name;
    this.email = data.email;
  }
}
