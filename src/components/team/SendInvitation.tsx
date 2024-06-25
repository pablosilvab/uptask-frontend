import { inviteUserToUpTask } from "@/api/teamAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type SendInvitationProps = {
  email: string;
  projectId: string;
  reset: () => void;
};

export default function SendInvitation({
  email,
  projectId,
  reset,
}: SendInvitationProps) {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: inviteUserToUpTask,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      reset();
      navigate(location.pathname, { replace: true });
      queryClient.invalidateQueries({ queryKey: ["projectTeam", projectId] });
    },
  });

  const handleInviteUserToProject = () => {
    const data = {
      projectId,
      email
    };
    mutate(data);
  };

  return (
    <>
      <p className="mt-10 text-center font-bold">El email no está registrado</p>
      <div className="flex justify-between items-center">
        <p>{email}</p>
        <button
          className="text-purple-600 hover:bg-purple-100 px-10 py-3 font-bold cursor-pointer"
          onClick={handleInviteUserToProject}
        >
          Invitar a UpTask
        </button>
      </div>
    </>
  );
}
