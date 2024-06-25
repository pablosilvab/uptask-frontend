import api from "@/lib/axios";
import { isAxiosError } from "axios";
import {
  Project,
  TeamMember,
  TeamMemberForm,
  UserRegistrationForm,
  teamMembersSchema,
} from "../types";

export async function findUserByEmail({
  projectId,
  formData,
}: {
  projectId: Project["_id"];
  formData: TeamMemberForm;
}) {
  try {
    const url = `/projects/${projectId}/team/find`;
    const { data } = await api.post(url, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else throw new Error("Error interno. Intente más tarde.");
  }
}

export async function addUserToProject({
  projectId,
  id,
}: {
  projectId: Project["_id"];
  id: TeamMember["_id"];
}) {
  try {
    const url = `/projects/${projectId}/team`;
    const { data } = await api.post(url, { id });
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else throw new Error("Error interno. Intente más tarde.");
  }
}

export async function getProjectTeam(projectId: Project["_id"]) {
  try {
    const url = `/projects/${projectId}/team`;
    const { data } = await api(url);
    const response = teamMembersSchema.safeParse(data);
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else throw new Error("Error interno. Intente más tarde.");
  }
}

export async function removeUserFromProject({
  projectId,
  userId,
}: {
  projectId: Project["_id"];
  userId: TeamMember["_id"];
}) {
  try {
    const url = `/projects/${projectId}/team/${userId}`;
    const { data } = await api.delete(url);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else throw new Error("Error interno. Intente más tarde.");
  }
}

export async function inviteUserToUpTask({
  projectId,
  email,
}: {
  projectId: Project["_id"];
  email: TeamMember["email"];
}) {
  try {
    const url = `/projects/${projectId}/team/invite`;
    console.log(url);

    const { data } = await api.post(url, { email });
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else throw new Error("Error interno. Intente más tarde.");
  }
}

export async function completeAccount(formData: UserRegistrationForm) {
  try {
    console.log(formData);
    
    const { data } = await api.post("/auth/team/confirm", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else throw new Error("Error interno. Intente más tarde.");
  }
}
