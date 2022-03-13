export enum Type {
  ALL = 'Tất cả',
  OFFLINE = 'Lịch khám',
  ONLINE = 'Lịch tư vấn',
  HOMECARE = 'Tại nhà',
}

export enum AppointmentSubType {
  ALL = 'Tất cả',
  BOOK = 'Lịch khám',
  INSTANT = 'Lịch tư vấn',
  SUBCLINICAL = 'Cận lâm sàng',
}

export enum ServiceType {
  ALL = 'Tất cả',
  DOCTOR = 'Bác sĩ',
  CLINIC = 'Phòng khám',
  HOSPITAL = 'Bệnh viện',
}

export enum Status {
  ALL = 'Tất cả',
  CONFIRMED = 'Đã thanh toán',
  CREATED = 'Chưa thanh toán',
  CANCELLED = 'Đã hủy',
  PLACED = 'Đã đặt khám',
  ARRIVED = 'Đã khám',
}
