import api from "@/lib/axios";
import {
  ConfirmToken,
  ForgotPasswordForm,
  NewPasswordForm,
  RequestConfirmationCodeForm,
  UserLoginForm,
  UserRegistrationForm,
} from "../types";
import { isAxiosError } from "axios";

export async function createAccount(formData: UserRegistrationForm) {
  try {
    const { data } = await api.post("/auth/create-account", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else throw new Error("Error interno. Intente más tarde.");
  }
}

export async function confirmAccount(formData: ConfirmToken) {
  try {
    const { data } = await api.post("/auth/confirm-account", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else throw new Error("Error interno. Intente más tarde.");
  }
}

export async function requestConfirmationCode(
  formData: RequestConfirmationCodeForm
) {
  try {
    const { data } = await api.post("/auth/request-code", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else throw new Error("Error interno. Intente más tarde.");
  }
}

export async function authenticateUser(formData: UserLoginForm) {
  try {
    const { data } = await api.post("/auth/login", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else throw new Error("Error interno. Intente más tarde.");
  }
}

export async function forgotPassword(formData: ForgotPasswordForm) {
  try {
    const { data } = await api.post("/auth/forgot-password", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else throw new Error("Error interno. Intente más tarde.");
  }
}

export async function validateToken(formData: ConfirmToken) {
  try {
    const { data } = await api.post("/auth/validate-token", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else throw new Error("Error interno. Intente más tarde.");
  }
}

export async function updatePasswordWithToken({
  formData,
  token,
}: {
  formData: NewPasswordForm;
  token: ConfirmToken["token"];
}) {
  try {
    const { data } = await api.post(`/auth/update-password/${token}`, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else throw new Error("Error interno. Intente más tarde.");
  }
}
