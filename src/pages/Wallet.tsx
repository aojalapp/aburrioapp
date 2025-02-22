
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { QrCode, Ticket } from "lucide-react";

const Wallet = () => {
  const { toast } = useToast();

  const handleAddFunds = () => {
    toast({
      title: "Coming soon",
      description: "Wallet functionality will be implemented in the next version",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-blue-900">Your Wallet</h1>
        <p className="text-blue-600">Manage your event funds</p>
      </div>

      <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <div className="text-center space-y-2 mb-6">
          <p className="text-sm opacity-90">Current Balance</p>
          <p className="text-4xl font-bold">€0.00</p>
        </div>

        <Button onClick={handleAddFunds} className="w-full bg-white text-blue-600 hover:bg-blue-50">
          Add Funds
        </Button>
      </Card>

      <div className="grid gap-4">
        <h2 className="text-lg font-semibold text-blue-900">Your Tickets</h2>
        <Card className="p-4 flex items-center justify-between border-blue-100">
          <div className="flex items-center gap-3">
            <QrCode className="w-5 h-5 text-blue-500" />
            <div>
              <p className="font-medium text-blue-900">Tech Conference 2024</p>
              <p className="text-sm text-blue-600">March 15, 2024</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Ticket className="w-5 h-5 text-blue-500" />
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Wallet;
