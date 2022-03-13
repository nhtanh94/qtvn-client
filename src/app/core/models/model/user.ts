export class User {
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  set createdAt(value: string) {
    this._createdAt = value;
  }

  get enabled(): string {
    return this._enabled;
  }

  set enabled(value: string) {
    this._enabled = value;
  }

  get role(): Array<any> {
    return this._role;
  }

  set role(value: Array<any>) {
    this._role = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get birthday(): string {
    return this._birthday;
  }

  set birthday(value: string) {
    this._birthday = value;
  }

  get nationalId(): string {
    return this._nationalId;
  }

  set nationalId(value: string) {
    this._nationalId = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get active(): boolean {
    return this._active;
  }

  set active(value: boolean) {
    this._active = value;
  }
  private _id: any;
  private _username: any;
  private _firstName: any;
  private _lastName: any;
  private _email: any;
  private _createdAt: any;
  private _enabled: any;
  private _role: any;
  private _phone: any;
  private _birthday: any;
  private _nationalId: any;
  private _gender: any;
  private _active: any;
}
