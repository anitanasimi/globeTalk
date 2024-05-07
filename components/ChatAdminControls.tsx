import { IChatAdminControlsProps } from "@/types";
import InviteUser from "./InviteUser";
import DeleteChatButton from "./DeleteChatButton";


function ChatAdminControls({ chatId }: IChatAdminControlsProps) {
  return (
    <div className="flex justify-end space-x-2 m-5 mb-0">
      <InviteUser chatId={chatId} />
      <DeleteChatButton chatId={chatId} />
    </div>
  );
}

export default ChatAdminControls;
