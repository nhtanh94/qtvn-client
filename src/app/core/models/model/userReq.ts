export class CreateUserReq {
  address?: string;
  birthday?: string;
  email?: string;
  firstName?: string;
  gender?: string;
  hospitals?: Array<string>;
  lastName?: string;
  name?: string;
  nationalId?: string;
  password?: string;
  phone?: string;
  specialities?: Array<string>;
  type?: string;

  constructor(
    address?: string,
    birthday?: string,
    email?: string,
    firstName?: string,
    gender?: string,
    hospitals?: Array<string>,
    lastName?: string,
    name?: string,
    nationalId?: string,
    password?: string,
    phone_number?: string,
    specialities?: Array<string>,
    type?: string
  ) {
    this.email = email;
    this.lastName = lastName;
    this.firstName = firstName;
    this.password = password;
    this.phone = phone_number;
    this.birthday = birthday;
    this.nationalId = nationalId;
    this.gender = gender;
    this.address = address;
    this.name = name;
    this.hospitals = hospitals;
    this.specialities = specialities;
    this.type = type;
  }
}
