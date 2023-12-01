export class EpsPaginatedDto {
  constructor(id: string, name: string, state: string) {
    this.id = id;
    this.name = name;
    this.state = state;
  }

  id: string;
  name: string;
  state: string;
}

export class Paginated<T> {
  page: number;
  totalRecords: number;
  totalPages: number;
  records: T[];
}