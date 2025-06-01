import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Flight {
  id: string;
  date: string;
  time: string;
  destination: string;
  duration: string;
  available: boolean;
}

interface FlightScheduleProps {
  selectedFlight: string;
  onFlightSelect: (flightId: string) => void;
}

const flights: Flight[] = [
  {
    id: "mars-1",
    date: "15 июня 2024",
    time: "14:30",
    destination: "Марс (Новый Олимп)",
    duration: "3 дня 8 часов",
    available: true,
  },
  {
    id: "jupiter-1",
    date: "22 июня 2024",
    time: "09:15",
    destination: "Юпитер (Европа)",
    duration: "7 дней 12 часов",
    available: true,
  },
  {
    id: "saturn-1",
    date: "28 июня 2024",
    time: "16:45",
    destination: "Сатурн (Титан)",
    duration: "12 дней 6 часов",
    available: false,
  },
];

const FlightSchedule = ({
  selectedFlight,
  onFlightSelect,
}: FlightScheduleProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-slate-800">
        Расписание полетов
      </h2>

      <div className="space-y-4">
        {flights.map((flight) => (
          <Card
            key={flight.id}
            className={`cursor-pointer transition-all duration-300 ${
              !flight.available
                ? "opacity-50 cursor-not-allowed"
                : selectedFlight === flight.id
                  ? "ring-2 ring-purple-500 shadow-lg"
                  : "hover:shadow-md"
            }`}
            onClick={() => flight.available && onFlightSelect(flight.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <div className="text-lg font-semibold text-slate-800">
                      {flight.date}
                    </div>
                    <div className="text-purple-600 font-medium">
                      {flight.time}
                    </div>
                  </div>

                  <div className="text-slate-600">
                    <div className="font-medium">{flight.destination}</div>
                    <div className="text-sm">
                      Длительность: {flight.duration}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  {!flight.available ? (
                    <div className="text-red-500 font-medium">Мест нет</div>
                  ) : selectedFlight === flight.id ? (
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Выбрано ✓
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="border-purple-300 text-purple-600 hover:bg-purple-50"
                    >
                      Выбрать
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FlightSchedule;
