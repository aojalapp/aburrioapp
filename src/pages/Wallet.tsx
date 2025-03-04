
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { QrCode, Ticket, ArrowLeft, Wallet as WalletIcon, Clock, Calendar, MapPin, Plus, ShieldCheck } from "lucide-react";

const TicketQR = ({ ticket, onBack }: { ticket: any; onBack: () => void }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 z-50 flex flex-col items-center p-6 animate-fade-in">
      <div className="w-full flex items-center mb-6">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-primary-600 hover:bg-primary-100">
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h2 className="text-xl font-semibold text-primary-800 flex-1 text-center pr-10">{ticket.name}</h2>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md">
        <div className="glass-card p-6 mb-8 transform animate-pulse-gentle">
          <div className="bg-white p-4 rounded-xl shadow-inner border-2 border-primary-100">
            <QrCode className="w-64 h-64 text-primary-900" />
          </div>
        </div>
        <h3 className="text-xl font-medium text-primary-800 mb-1">{ticket.name}</h3>
        <p className="text-primary-600 mb-2">{ticket.date}</p>
        <div className="flex items-center gap-1.5 text-sm text-primary-500 bg-primary-50 px-3 py-1 rounded-full">
          <ShieldCheck className="w-4 h-4" />
          <span>Verified Ticket</span>
        </div>
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
      date: "March 15, 2024",
      location: "Convention Center",
      time: "09:00 AM"
    },
    {
      id: 2,
      name: "English Practice @ Irish Pub",
      date: "March 20, 2024",
      location: "Downtown Irish Pub",
      time: "06:00 PM"
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
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Your Wallet</h1>
          <p className="text-primary-600">Manage your event funds</p>
        </div>

        <Card className="overflow-hidden rounded-2xl">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <WalletIcon className="w-5 h-5" />
                <h3 className="font-medium">Balance</h3>
              </div>
              <span className="text-xs bg-white/20 rounded-full px-3 py-1">Standard</span>
            </div>
            <div className="text-center space-y-2 mb-6">
              <p className="text-sm opacity-90">Current Balance</p>
              <p className="text-4xl font-bold">€0.00</p>
              <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-0 bg-white rounded-full"></div>
              </div>
            </div>

            <Button onClick={handleAddFunds} className="w-full bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-700 gap-2">
              <Plus className="w-4 h-4" /> Add Funds
            </Button>
          </div>
          <div className="p-4 bg-white">
            <div className="flex items-center justify-between border-b border-primary-100 pb-3 mb-3">
              <h3 className="font-medium text-primary-800">Activity</h3>
              <button className="text-xs text-primary-600 hover:text-primary-700">View All</button>
            </div>
            <div className="text-center py-4 text-gray-500 text-sm">
              No recent transactions
            </div>
          </div>
        </Card>

        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-primary-800">Your Tickets</h2>
            <button className="text-sm text-primary-600 hover:underline">View all</button>
          </div>
          {tickets.map(ticket => (
            <Card 
              key={ticket.id} 
              className="overflow-hidden glass-card"
              onClick={() => setSelectedTicket({ name: ticket.name, date: ticket.date })}
            >
              <div className="p-4 flex items-center justify-between gap-4 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg p-3">
                    <QrCode className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <p className="font-medium text-primary-800">{ticket.name}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1 text-xs text-primary-600">
                        <Calendar className="w-3 h-3" />
                        <span>{ticket.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-primary-600">
                        <Clock className="w-3 h-3" />
                        <span>{ticket.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-primary-600 mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{ticket.location}</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-primary-500 hover:bg-primary-50 hover:text-primary-600">
                  <Ticket className="w-5 h-5" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wallet;
