import { ReactPropTypes, ReactNode } from "react";

export type User = {
  id: number;
  username: string;
  email: string;
  full_name: string;
  contact_number: number;
  created_at: string;
  is_admin: boolean;
};

export type UsersResponse = User[];

export type LoginUserResponse = {
  user: {
    id: number;
    username: string;
    isAdmin: boolean;
  };
  token: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type AuthState = {
  user: {
    id: number;
    username: string;
    isAdmin: boolean;
  } | null;
  token: string | null;
};

export type LoginFormProps = {
  formState: LoginRequest;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.MouseEvent) => void;
  handleClear: (event: React.MouseEvent) => void;
};

export type InputProps = {
  name?: string;
  type: string;
  placeholder: string;
  value?: string | number | readonly string[] | undefined;
  children?: ReactNode;
  rest?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ButtonChildProps = {
  children: string;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  rounded?: boolean;
  outline?: boolean;
  rest?: ReactPropTypes;
  onClick?: (event: React.MouseEvent) => void;
};
