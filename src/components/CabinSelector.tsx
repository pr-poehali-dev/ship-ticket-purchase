import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CabinType {
  id: string;
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

interface CabinSelectorProps {
  selectedCabin: string;
  onCabinSelect: (cabinId: string) => void;
}

const cabins: CabinType[] = [
  {
    id: "economy",
    name: "Эконом",
    price: 10000,
    features: ["Стандартная каюта", "Общий зал отдыха", "Базовое питание"],
  },
  {
    id: "business",
    name: "Бизнес",
    price: 80000,
    popular: true,
    features: [
      "Увеличенная каюта",
      "Личный терминал",
      "Премиум питание",
      "Доступ к спа",
    ],
  },
  {
    id: "imperial",
    name: "Императорский",
    price: 750000,
    features: [
      "Люкс с панорамными окнами",
      "Личный дворецкий",
      "Эксклюзивное меню",
      "Приватная зона отдыха",
    ],
  },
];

const CabinSelector = ({
  selectedCabin,
  onCabinSelect,
}: CabinSelectorProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-slate-800">
        Выберите класс каюты
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {cabins.map((cabin) => (
          <Card
            key={cabin.id}
            className={`relative cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedCabin === cabin.id
                ? "ring-2 ring-purple-500 shadow-lg transform scale-105"
                : "hover:transform hover:scale-102"
            }`}
            onClick={() => onCabinSelect(cabin.id)}
          >
            {cabin.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Популярный
              </div>
            )}

            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl">{cabin.name}</CardTitle>
              <div className="text-3xl font-bold text-purple-600">
                {cabin.price.toLocaleString()} ₽
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {cabin.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  selectedCabin === cabin.id
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-gray-600 hover:bg-gray-700"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  onCabinSelect(cabin.id);
                }}
              >
                {selectedCabin === cabin.id ? "Выбрано" : "Выбрать"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CabinSelector;
