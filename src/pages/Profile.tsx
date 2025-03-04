
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LogOut, UserCog, Trash2, Wallet, Calendar, QrCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { useState } from "react";
import BackButton from "@/components/BackButton";

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState("Hola! Soy un nuevo usuario de la plataforma.");

  const handleAction = () => {
    toast({
      title: "Coming soon",
      description: "Profile management will be implemented in the next version",
    });
  };

  const handleBioSave = () => {
    setIsEditing(false);
    toast({
      title: "Bio actualizada",
      description: "Tu biografía ha sido actualizada correctamente",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center mb-4">
        <BackButton />
        <div className="text-center flex-1">
          <h1 className="text-2xl font-bold text-gray-900">Your Profile</h1>
          <p className="text-gray-600">Manage your account settings</p>
        </div>
      </div>

      <Card className="p-6 space-y-6">
        <div className="text-center">
          <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4" />
          <h2 className="text-xl font-semibold">Guest User</h2>
          <p className="text-gray-600">guest@example.com</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Bio</label>
            {isEditing ? (
              <div className="flex gap-2">
                <Input
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Escribe algo sobre ti..."
                  className="flex-1"
                />
                <Button onClick={handleBioSave} variant="outline" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                  Guardar
                </Button>
              </div>
            ) : (
              <div className="flex gap-2 items-start">
                <p className="text-gray-600 flex-1">{bio}</p>
                <Button onClick={() => setIsEditing(true)} variant="outline" size="sm" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                  Editar
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full justify-start"
            asChild
          >
            <Link to="/wallet">
              <Wallet className="mr-2" />
              Wallet
            </Link>
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start"
            asChild
          >
            <Link to="/tickets">
              <QrCode className="mr-2" />
              My Tickets
            </Link>
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start"
            asChild
          >
            <Link to="/calendar">
              <Calendar className="mr-2" />
              Calendar
            </Link>
          </Button>

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
