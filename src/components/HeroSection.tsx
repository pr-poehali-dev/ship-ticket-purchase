import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-16 px-4">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Корабль "Император"
        </h1>
        <p className="text-xl text-purple-200 mb-8">
          Роскошные межпланетные путешествия в новую эру космических полетов
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="bg-white/10 border-purple-400/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Скорость света</h3>
              <p className="text-purple-200 text-sm">
                Технология варп-двигателя последнего поколения
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-purple-400/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">🏨</div>
              <h3 className="text-lg font-semibold mb-2">Роскошь</h3>
              <p className="text-purple-200 text-sm">
                Каюты премиум-класса с панорамными окнами
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-purple-400/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">🛡️</div>
              <h3 className="text-lg font-semibold mb-2">Безопасность</h3>
              <p className="text-purple-200 text-sm">
                Защитные системы галактического стандарта
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
