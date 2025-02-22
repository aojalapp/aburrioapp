
const Map = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold text-blue-900">Nearby Plans</h1>
        <p className="text-blue-600">Discover what's happening around you</p>
      </div>
      <div className="relative h-[calc(100vh-12rem)] rounded-2xl overflow-hidden shadow-lg bg-white">
        <img 
          src="/lovable-uploads/1c0caab0-2b88-46bd-8c01-e635a9b47aed.png"
          alt="Map of Seville"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Map;
