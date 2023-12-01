export class UserModelDto {
  constructor(
    id: string,
    role: string,
    personId: string
  ) {
    this.id = id;
    this.role = id;
    this.personId = id;
  }

  id: string;
  role: string;
  personId: string;


}
