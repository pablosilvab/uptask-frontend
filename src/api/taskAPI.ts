import api from "@/lib/axios";
import { Project, TaskFormData } from "../types";
import { isAxiosError } from "axios";

type TaskApi = {
  formData: TaskFormData;
  projectId: Project["_id"];
};

export async function createTask({
  formData,
  projectId,
}: Pick<TaskApi, "formData" | "projectId">) {
  try {
    const url = `/projects/${projectId}/tasks`;
    const { data } = await api.post(url, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else throw new Error("Error interno. Intente más tarde.");
  }
}
