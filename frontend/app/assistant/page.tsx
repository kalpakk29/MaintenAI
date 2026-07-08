import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ChatWindow from "@/components/chat/ChatWindow";

export default function AssistantPage() {
  return (
    <DashboardLayout>
      <ChatWindow />
    </DashboardLayout>
  );
}