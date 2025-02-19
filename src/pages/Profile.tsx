
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LogOut, UserCog, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();

  const handleAction = () => {
    toast({
      title: "Coming soon",
      description: "Profile management will be implemented in the next version",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Your Profile</h1>
        <p className="text-gray-600">Manage your account settings</p>
      </div>

      <Card className="p-6 space-y-6">
        <div className="text-center">
          <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4" />
          <h2 className="text-xl font-semibold">Guest User</h2>
          <p className="text-gray-600">guest@example.com</p>
        </div>

        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={handleAction}
          >
            <UserCog className="mr-2" />
            Edit Profile
          </Button>
          
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={handleAction}
          >
            <LogOut className="mr-2" />
            Sign Out
          </Button>
          
          <Button
            variant="outline"
            className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
            onClick={handleAction}
          >
            <Trash2 className="mr-2" />
            Delete Account
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
