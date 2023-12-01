export class AppointmentPaginatedDTO {
  constructor(id: string, date: Date, appointmentStartDate: Date, appointmentFinalDate: Date, state: string, type: string, description: string, patientId: string, doctorId: string,
  ) {
    this.id = id;
    this.date = date;
    this.appointmentStartDate = appointmentStartDate;
    this.appointmentFinalDate = appointmentFinalDate;
    this.state = state;
    this.type = type;
    this.description = description;
    this.patientId = patientId;
    this.doctorId = doctorId;
  }
  id: string;
  date: Date;
  appointmentStartDate: Date;
  appointmentFinalDate: Date;
  state: string;
  type: string;
  description: string;
  patientId: string;
  doctorId: string;
}


export class Paginated<T> {
  page: number;
  totalRecords: number;
  totalPages: number;
  records: T[];


  constructor(page: number, totalRecords: number, totalPages: number, records: T[]) {
    this.page = page;
    this.totalRecords = totalRecords;
    this.totalPages = totalPages;
    this.records = records;
  }
}
