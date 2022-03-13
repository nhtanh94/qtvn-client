import { HttpParams } from '@angular/common/http';

type keysApointmentParams =
  | 'sId'
  | 'areaId'
  | 'specialityId'
  | 'roomId'
  | 'providerId'
  | 'patientTypeId'
  | 'patientId'
  | 'date'
  | 'appointmentSlotId'
  | 'type'
  | 'subType'
  | 'examTypeId'
  | 'endDate'
  | 'startDate'
  | 'slotStatus'
  | 'page'
  | 'size'
  | 'query'
  | 'status'
  | 'scheduleType';

type httpAppointmentParams = {
  [key in keysApointmentParams]: string;
};

export class AppointmentParams {
  static getHttpParams(model: any): HttpParams {
    const APPOINTMENT_PARAMS = [
      'sId',
      'areaId',
      'specialityId',
      'roomId',
      'providerId',
      'patientTypeId',
      'patientId',
      'date',
      'appointmentSlotId',
      'type',
      'subType',
      'examTypeId',
      'endDate',
      'startDate',
      'slotStatus',
      'page',
      'size',
      'query',
      'status',
      'scheduleType',
    ];

    let params = new HttpParams();
    const modelParams = model;
    const obj: httpAppointmentParams = modelParams;
    Object.keys(obj).forEach((e) => {
      const find = APPOINTMENT_PARAMS.find((x: any) => x === e);
      if (find)
        modelParams[e] ? (params = params.append(e, modelParams[e])) : '';
    });
    return params;
  }
}
