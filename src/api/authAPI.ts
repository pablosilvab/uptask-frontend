import api from "@/lib/axios";
import {
  ConfirmToken,
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
