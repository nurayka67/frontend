export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarColor: string;
}

export interface FormData {
  name: string;
  email: string;
  password: string;
}

export interface FormErrors {
  email: string;
}