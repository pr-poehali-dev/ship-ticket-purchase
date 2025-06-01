import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BookingSummaryProps {
  cabinType: string;
  flightId: string;
  passengerName: string;
  totalPrice: number;
}

const cabinNames: Record<string, string> = {
  economy: "Эконом",
  business: "Бизнес",
  imperial: "Императорский",
};

const flightDestinations: Record<string, string> = {
  "mars-1": "Марс (Новый Олимп) - 15 июня 2024",
  "jupiter-1": "Юпитер (Европа) - 22 июня 2024",
  "saturn-1": "Сатурн (Титан) - 28 июня 2024",
};

const BookingSummary = ({
  cabinType,
  flightId,
  passengerName,
  totalPrice,
}: BookingSummaryProps) => {
  if (!cabinType || !flightId) return null;

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="text-xl text-center">Сводка заказа</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-slate-600">Класс каюты:</span>
            <span className="font-medium">{cabinNames[cabinType]}</span>
          </div>

          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-slate-600">Направление:</span>
            <span className="font-medium text-sm">
              {flightDestinations[flightId]}
            </span>
          </div>

          {passengerName && (
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-slate-600">Пассажир:</span>
              <span className="font-medium">{passengerName}</span>
            </div>
          )}

          <div className="flex justify-between items-center text-lg font-bold text-purple-600 pt-2">
            <span>Итого:</span>
            <span>{totalPrice.toLocaleString()} ₽</span>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-sm text-purple-700">
            <div className="font-medium mb-1">Включено в стоимость:</div>
            <ul className="space-y-1 text-xs">
              <li>• Полет в обе стороны</li>
              <li>• Питание на борту</li>
              <li>• Развлечения и Wi-Fi</li>
              <li>• Страховка путешествия</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingSummary;
