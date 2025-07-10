import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-dark-800">
                Яндекс Директ
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-dark-800 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-dark-800 transition-colors"
              >
                О мне
              </a>
              <a
                href="#cases"
                className="text-gray-600 hover:text-dark-800 transition-colors"
              >
                Кейсы
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-dark-800 transition-colors"
              >
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yandex-50 to-yandex-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-dark-800 mb-6 animate-fade-in">
              Настройка и ведение
              <span className="text-yandex-600 block">Яндекс Директ</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Частный мастер по настройке эффективных рекламных кампаний.
              Увеличиваю продажи через качественную контекстную рекламу
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yandex-500 hover:bg-yandex-600 text-dark-800 font-semibold"
              >
                <Icon name="Rocket" className="mr-2" />
                Запустить кампанию
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-yandex-500 text-yandex-600 hover:bg-yandex-50"
              >
                <Icon name="Calculator" className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-800 mb-4">Услуги</h2>
            <p className="text-xl text-gray-600">
              Полный цикл работы с контекстной рекламой
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 bg-yandex-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" className="w-6 h-6 text-yandex-600" />
                </div>
                <CardTitle className="text-xl text-dark-800">
                  Настройка кампаний
                </CardTitle>
                <CardDescription>
                  Профессиональная настройка рекламных кампаний с нуля
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-yandex-500 mr-2"
                    />
                    Анализ ниши и конкурентов
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-yandex-500 mr-2"
                    />
                    Подбор ключевых слов
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-yandex-500 mr-2"
                    />
                    Создание объявлений
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 bg-yandex-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="w-6 h-6 text-yandex-600" />
                </div>
                <CardTitle className="text-xl text-dark-800">
                  Ведение кампаний
                </CardTitle>
                <CardDescription>
                  Постоянная оптимизация и улучшение результатов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-yandex-500 mr-2"
                    />
                    Мониторинг показателей
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-yandex-500 mr-2"
                    />
                    Корректировка ставок
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-yandex-500 mr-2"
                    />
                    A/B тестирование
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 bg-yandex-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" className="w-6 h-6 text-yandex-600" />
                </div>
                <CardTitle className="text-xl text-dark-800">
                  Аудит рекламы
                </CardTitle>
                <CardDescription>
                  Детальный анализ существующих кампаний
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-yandex-500 mr-2"
                    />
                    Оценка эффективности
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-yandex-500 mr-2"
                    />
                    Выявление проблем
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-yandex-500 mr-2"
                    />
                    Рекомендации
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-dark-800 mb-6">
                О мастере
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Привет! Я частный специалист по Яндекс Директ с опытом работы
                более 5 лет. Помогаю бизнесу получать больше клиентов через
                эффективную контекстную рекламу.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Badge className="bg-yandex-100 text-yandex-700 mr-3">
                    5+ лет
                  </Badge>
                  <span className="text-gray-600">
                    опыта в контекстной рекламе
                  </span>
                </div>
                <div className="flex items-center">
                  <Badge className="bg-yandex-100 text-yandex-700 mr-3">
                    200+
                  </Badge>
                  <span className="text-gray-600">успешных проектов</span>
                </div>
                <div className="flex items-center">
                  <Badge className="bg-yandex-100 text-yandex-700 mr-3">
                    50+
                  </Badge>
                  <span className="text-gray-600">довольных клиентов</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-dark-800 mb-6">
                Почему выбирают меня?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon
                    name="Target"
                    className="w-5 h-5 text-yandex-500 mt-1 mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-dark-800">
                      Индивидуальный подход
                    </h4>
                    <p className="text-gray-600">
                      Каждый проект уникален, поэтому подход всегда персональный
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="Clock"
                    className="w-5 h-5 text-yandex-500 mt-1 mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-dark-800">
                      Быстрый старт
                    </h4>
                    <p className="text-gray-600">
                      Запуск кампании в течение 2-3 дней
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="BarChart"
                    className="w-5 h-5 text-yandex-500 mt-1 mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-dark-800">
                      Прозрачная отчетность
                    </h4>
                    <p className="text-gray-600">
                      Еженедельные отчеты о результатах
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yandex-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-dark-800 mb-4">
            Готовы увеличить продажи?
          </h2>
          <p className="text-xl text-dark-700 mb-8">
            Получите бесплатную консультацию и план развития рекламы
          </p>
          <Button
            size="lg"
            className="bg-dark-800 hover:bg-dark-700 text-white"
          >
            <Icon name="MessageCircle" className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Яндекс Директ</h3>
              <p className="text-gray-400">
                Частный мастер по настройке эффективных рекламных кампаний
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Настройка кампаний</li>
                <li>Ведение рекламы</li>
                <li>Аудит кампаний</li>
                <li>Консультации</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Icon name="Phone" className="w-4 h-4 mr-2" />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" className="w-4 h-4 mr-2" />
                  info@yandex-direct.ru
                </p>
                <p className="flex items-center">
                  <Icon name="MessageCircle" className="w-4 h-4 mr-2" />
                  Telegram: @yandex_direct
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Яндекс Директ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
