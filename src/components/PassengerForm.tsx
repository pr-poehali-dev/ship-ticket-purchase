import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PassengerData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  passportId: string;
  emergencyContact: string;
}

interface PassengerFormProps {
  passengerData: PassengerData;
  onDataChange: (data: PassengerData) => void;
  onBookingComplete: () => void;
}

const PassengerForm = ({
  passengerData,
  onDataChange,
  onBookingComplete,
}: PassengerFormProps) => {
  const handleInputChange = (field: keyof PassengerData, value: string) => {
    onDataChange({
      ...passengerData,
      [field]: value,
    });
  };

  const isFormValid = Object.values(passengerData).every(
    (value) => value.trim() !== "",
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-center">Данные пассажира</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Имя</label>
            <Input
              placeholder="Введите имя"
              value={passengerData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">
              Фамилия
            </label>
            <Input
              placeholder="Введите фамилию"
              value={passengerData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Email</label>
          <Input
            type="email"
            placeholder="example@email.com"
            value={passengerData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Телефон</label>
          <Input
            placeholder="+7 (999) 123-45-67"
            value={passengerData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Галактический паспорт
          </label>
          <Input
            placeholder="GX-1234567890"
            value={passengerData.passportId}
            onChange={(e) => handleInputChange("passportId", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Экстренный контакт
          </label>
          <Input
            placeholder="Имя и телефон для связи"
            value={passengerData.emergencyContact}
            onChange={(e) =>
              handleInputChange("emergencyContact", e.target.value)
            }
          />
        </div>

        <Button
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg py-3"
          onClick={onBookingComplete}
          disabled={!isFormValid}
        >
          Забронировать билет 🚀
        </Button>
      </CardContent>
    </Card>
  );
};

export default PassengerForm;
