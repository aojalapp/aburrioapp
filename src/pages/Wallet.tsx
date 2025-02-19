
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

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
        <h1 className="text-2xl font-bold text-gray-900">Your Wallet</h1>
        <p className="text-gray-600">Manage your event funds</p>
      </div>

      <Card className="p-6">
        <div className="text-center space-y-2 mb-6">
          <p className="text-sm text-gray-600">Current Balance</p>
          <p className="text-4xl font-bold">€0.00</p>
        </div>

        <Button onClick={handleAddFunds} className="w-full">
          Add Funds
        </Button>
      </Card>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Transaction History</h2>
        <p className="text-center text-gray-600 py-8">
          No transactions yet
        </p>
      </div>
    </div>
  );
};

export default Wallet;
