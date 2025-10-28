import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleCall = () => {
    window.location.href = "tel:+79313311132";
  };

  const services = [
    {
      icon: "Heart",
      title: "С заботой",
      description: "Относимся к вашим питомцам как к своим"
    },
    {
      icon: "Clock",
      title: "Гибкий график",
      description: "Удобное время прогулок под ваш распорядок"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Ответственность и контроль на каждой прогулке"
    },
    {
      icon: "MapPin",
      title: "Любимые места",
      description: "Знаем лучшие маршруты в вашем районе"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent to-muted overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-6 text-6xl md:text-8xl animate-bounce-subtle">
            🐕
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
            Погуляю с вашей<br />собакой! 🐾
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8">
            Активные прогулки, игры и внимание
          </p>
          <Button 
            onClick={handleCall}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-8 py-6 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-primary/50 animate-fade-in"
          >
            <Icon name="Phone" size={24} className="mr-2" />
            +7 931 331-11-32
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-rotate-1 cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:animate-wiggle">
                  <Icon name={service.icon} size={28} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto mb-12">
          <Card className="overflow-hidden border-4 border-primary shadow-2xl animate-fade-in">
            <div className="relative h-64 md:h-80">
              <img 
                src="https://cdn.poehali.dev/projects/5ae282b6-d711-43f1-88ad-5581f74a586a/files/b38a3885-3176-45fc-848a-a29e06cf08b5.jpg"
                alt="Счастливая собака на прогулке"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Весёлые прогулки каждый день!
                  </h2>
                  <p className="text-white/90 text-lg font-medium">
                    Ваш питомец будет счастлив и доволен
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Card className="p-8 bg-gradient-to-r from-secondary via-primary to-accent border-4 border-primary shadow-2xl animate-fade-in">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="text-5xl animate-bounce-subtle">
                🎾
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Игры и активность
                </h2>
                <p className="text-white/90 text-lg font-medium">
                  Полноценные прогулки с играми и тренировками
                </p>
              </div>
              <div className="text-5xl animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
                🦴
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-muted-foreground text-lg mb-4 font-medium">
            Звоните прямо сейчас!
          </p>
          <Button 
            onClick={handleCall}
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-lg px-6 py-5 rounded-full transition-all duration-300 hover:scale-105"
          >
            <Icon name="MessageCircle" size={22} className="mr-2" />
            Связаться
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;