import { Link } from 'react-router-dom';
import { Coffee, Truck, Store, Zap } from 'lucide-react';
import Container from '../layout/Container';

interface PricingTier {
  name: string;
  icon: React.ReactNode;
  price: number;
  sales: number;
  pricePerUnit: string | null;
  featured: boolean;
  isFree: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Gratis',
    icon: <Zap className="w-12 h-12 text-white" />,
    price: 0,
    sales: 15,
    pricePerUnit: null,
    featured: false,
    isFree: true,
  },
  {
    name: 'Básico',
    icon: <Coffee className="w-12 h-12 text-white" />,
    price: 249,
    sales: 100,
    pricePerUnit: '$2.49 c/u',
    featured: false,
    isFree: false,
  },
  {
    name: 'Estándar',
    icon: <Truck className="w-12 h-12 text-white" />,
    price: 999,
    sales: 500,
    pricePerUnit: '$1.99 c/u',
    featured: true,
    isFree: false,
  },
  {
    name: 'Premium',
    icon: <Store className="w-12 h-12 text-white" />,
    price: 1499,
    sales: 1000,
    pricePerUnit: '$1.49 c/u',
    featured: false,
    isFree: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Planes
          </h2>
          <p className="text-lg text-gray-600">
            En CoDi API tenemos un plan a tu medida que no te cuesta más.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 mt-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-xl overflow-visible transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Circular Icon */}
              <div className="flex justify-center -mt-12 mb-4">
                <div className="w-24 h-24 rounded-full flex items-center justify-center border-4 border-white shadow-lg" style={{ backgroundColor: '#0084c6' }}>
                  {tier.icon}
                </div>
              </div>

              {/* Card Content Container with overflow-hidden for waves */}
              <div className="overflow-hidden rounded-lg">
                {/* Tier Name */}
                <div className="text-center mb-4 px-6 pt-2">
                  <h3 className="text-2xl font-bold" style={{ color: '#0084c6' }}>
                    {tier.name}
                  </h3>
                </div>

                {/* Price Section with Wavy Divider */}
                <div className="relative text-white py-8 mb-6" style={{ backgroundColor: '#0084c6' }}>
                {/* Top Wave */}
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                  <svg
                    className="relative block w-full h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>

                {/* Price Content */}
                <div className="text-center pt-4">
                  <div className="text-5xl font-bold mb-2">
                    ${tier.price.toLocaleString('es-MX')}
                  </div>
                  <div className="text-lg">
                    {tier.sales.toLocaleString('es-MX')} folios
                  </div>
                  {tier.pricePerUnit && (
                    <div className="text-sm mt-1 opacity-90">
                      por {tier.pricePerUnit}
                    </div>
                  )}
                  {tier.isFree && (
                    <div className="text-sm mt-1 opacity-90">
                      Para probar y desarrollar
                    </div>
                  )}
                </div>

                {/* Bottom Wave */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
                  <svg
                    className="relative block w-full h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
              </div>

                {/* CTA Button */}
                <div className="px-6 pb-8 pt-4">
                  <Link
                    to="/enrollment"
                    onClick={() => window.scrollTo(0, 0)}
                    className={`block w-full py-3 px-6 text-center font-semibold rounded-lg transition-all duration-200 ${
                      tier.featured
                        ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl'
                        : tier.isFree
                        ? 'bg-white border-2 hover:bg-blue-50 text-white shadow-md hover:shadow-lg'
                        : 'text-white shadow-md hover:shadow-lg'
                    }`}
                    style={
                      tier.featured
                        ? undefined
                        : tier.isFree
                        ? { borderColor: '#0084c6', color: '#0084c6' }
                        : { backgroundColor: '#0084c6' }
                    }
                    onMouseEnter={(e) => {
                      if (!tier.featured && !tier.isFree) {
                        e.currentTarget.style.backgroundColor = '#006ba3';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!tier.featured && !tier.isFree) {
                        e.currentTarget.style.backgroundColor = '#0084c6';
                      }
                    }}
                  >
                    {tier.isFree ? 'Comenzar Gratis' : 'Me conviene este plan'}
                  </Link>
                </div>
              </div>

              {/* Featured Badge */}
              {tier.featured && (
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Más Popular
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Notes */}
        <div className="text-center text-gray-600 space-y-2">
          <p className="text-sm">
            * Los precios están expresados en pesos mexicanos (MXN) e incluyen I.V.A.
          </p>
          <p className="text-sm">
            * Los planes de ventas no expiran y aplican tanto para pagos con código QR como para pagos push.
          </p>
          <p className="text-sm">
            *{' '}
            <Link to="/politica-uso-justo" className="text-blue-600 hover:text-blue-800 underline">
              Ver política de uso justo
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
