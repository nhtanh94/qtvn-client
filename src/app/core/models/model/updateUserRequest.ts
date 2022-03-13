export class UpdateUserRequest {
  firstName?: string;
  email?: string;
  lastName?: string;
  phone?: string;
  birthday?: string;
  nationalId?: string;
  gender?: string;
  userId?: string;

  constructor(
    userId?: string,
    firstName?: string,
    email?: string,
    lastName?: string,
    phone?: string,
    birthday?: string,
    nationalId?: string,
    gender?: string
  ) {
    this.userId = userId;
    this.firstName = firstName;
    this.birthday = birthday;
    this.email = email;
    this.gender = gender;
    this.lastName = lastName;
    this.phone = phone;
    this.nationalId = nationalId;
  }
}
