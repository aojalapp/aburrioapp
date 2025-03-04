
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { QrCode, Ticket, ArrowLeft } from "lucide-react";

const TicketQR = ({ ticket, onBack }: { ticket: any; onBack: () => void }) => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center p-6 animate-fade-in">
      <div className="w-full flex items-center mb-6">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-green-600">
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h2 className="text-xl font-semibold text-green-900 flex-1 text-center pr-10">{ticket.name}</h2>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md">
        <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-green-100 mb-6">
          <QrCode className="w-64 h-64 text-green-900" />
        </div>
        <h3 className="text-xl font-medium text-green-900 mb-1">{ticket.name}</h3>
        <p className="text-green-600">{ticket.date}</p>
      </div>
    </div>
  );
};

const Wallet = () => {
  const { toast } = useToast();
  const [selectedTicket, setSelectedTicket] = useState<null | { name: string; date: string }>(null);

  const handleAddFunds = () => {
    toast({
      title: "Coming soon",
      description: "Wallet functionality will be implemented in the next version",
    });
  };

  const tickets = [
    {
      id: 1,
      name: "Tech Conference 2024",
      date: "March 15, 2024"
    }
  ];

  return (
    <>
      {selectedTicket && (
        <TicketQR 
          ticket={selectedTicket} 
          onBack={() => setSelectedTicket(null)} 
        />
      )}
      
      <div className="space-y-6 animate-fade-in">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-green-900">Your Wallet</h1>
          <p className="text-green-600">Manage your event funds</p>
        </div>

        <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white">
          <div className="text-center space-y-2 mb-6">
            <p className="text-sm opacity-90">Current Balance</p>
            <p className="text-4xl font-bold">€0.00</p>
          </div>

          <Button onClick={handleAddFunds} className="w-full bg-white text-green-600 hover:bg-green-50">
            Add Funds
          </Button>
        </Card>

        <div className="grid gap-4">
          <h2 className="text-lg font-semibold text-green-900">Your Tickets</h2>
          {tickets.map(ticket => (
            <Card 
              key={ticket.id} 
              className="p-4 flex items-center justify-between border-green-100 hover:bg-green-50/50 transition-all cursor-pointer"
              onClick={() => setSelectedTicket({ name: ticket.name, date: ticket.date })}
            >
              <div className="flex items-center gap-3">
                <QrCode className="w-5 h-5 text-green-500" />
                <div>
                  <p className="font-medium text-green-900">{ticket.name}</p>
                  <p className="text-sm text-green-600">{ticket.date}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <Ticket className="w-5 h-5 text-green-500" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wallet;
