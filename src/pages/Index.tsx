import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import CabinSelector from "@/components/CabinSelector";
import FlightSchedule from "@/components/FlightSchedule";
import PassengerForm from "@/components/PassengerForm";
import BookingSummary from "@/components/BookingSummary";

const Index = () => {
  const [selectedCabin, setSelectedCabin] = useState("");
  const [selectedFlight, setSelectedFlight] = useState("");
  const [passengerData, setPassengerData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    passportId: "",
    emergencyContact: "",
  });

  const cabinPrices: Record<string, number> = {
    economy: 150000,
    business: 350000,
    imperial: 750000,
  };

  const totalPrice = selectedCabin ? cabinPrices[selectedCabin] : 0;
  const passengerFullName =
    `${passengerData.firstName} ${passengerData.lastName}`.trim();

  const handleBookingComplete = () => {
    alert(
      `🚀 Поздравляем! Ваш билет на корабль "Император" успешно забронирован!\n\nДетали бронирования отправлены на ${passengerData.email}`,
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-purple-50">
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <CabinSelector
              selectedCabin={selectedCabin}
              onCabinSelect={setSelectedCabin}
            />

            {selectedCabin && (
              <FlightSchedule
                selectedFlight={selectedFlight}
                onFlightSelect={setSelectedFlight}
              />
            )}

            {selectedCabin && selectedFlight && (
              <PassengerForm
                passengerData={passengerData}
                onDataChange={setPassengerData}
                onBookingComplete={handleBookingComplete}
              />
            )}
          </div>

          <div className="lg:col-span-1">
            <BookingSummary
              cabinType={selectedCabin}
              flightId={selectedFlight}
              passengerName={passengerFullName}
              totalPrice={totalPrice}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
