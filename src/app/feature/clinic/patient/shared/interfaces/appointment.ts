export class AppointmentDTO {
  constructor(id: string,
    appointmentStartDate: Date,
    state: string,
    type: string,
    description: string,
    patientId: string,
    doctorId: string) {
    this.id = id;
    this.appointmentStartDate = appointmentStartDate;
    this.state = state;
    this.type =type;
    this.description =description;
    this.patientId =patientId;
    this.doctorId =doctorId;
  }

  id: string;
  appointmentStartDate: Date;
  state: string;
  type: string;
  description: string;
  patientId: string;
  doctorId: string;
}
