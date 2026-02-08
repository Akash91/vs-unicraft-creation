import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from './ui/carousel';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Parent',
    content: 'VS Unicraft Creation has been a lifesaver! The quality of their products is excellent and the prices are very reasonable. My kids love their new uniforms and stationery.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Teacher',
    content: 'I recommend VS Unicraft Creation to all my students. They have everything needed for the school year in one place, and the delivery is always prompt.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Student',
    content: 'The best place to get school supplies! I found everything I needed for my classes and the website is really easy to use. Plus, the quality is amazing!',
    rating: 5
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Parent',
    content: 'Great selection and fantastic customer service. When I had a question about sizing for uniforms, they responded quickly and were very helpful.',
    rating: 5
  },
  {
    id: 5,
    name: 'Lisa Martinez',
    role: 'School Administrator',
    content: 'We partner with VS Unicraft Creation for our school store. Their bulk ordering process is seamless and they always deliver on time. Highly recommended!',
    rating: 5
  }
];

export function LandingPage() {
  const featuredProducts = products.slice(0, 6);
  const carouselRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current?.scrollNext) {
        carouselRef.current.scrollNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1B7F] via-[#1a2ea0] to-[#0A1B7F] text-white py-20 relative overflow-hidden">
        {/* Decorative golden swooshes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl mb-6 text-[#FFD700]">
            Welcome to VS Unicraft Creation
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto">
            Uniforms • Trophies • Printing Solutions
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto italic">
            A Complete School Supplies Solution
          </p>
          <Link to="/products">
            <Button size="lg" className="gap-2 bg-[#FFD700] text-[#0A1B7F] hover:bg-[#FFC700]">
              Browse Products <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl text-primary">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      SKU: {product.sku}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">
            What Our Customers Say
          </h2>
          <Carousel
            ref={carouselRef}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 flex-1 italic">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link to="/products">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">👔</div>
                  <h3 className="text-2xl mb-2">Uniforms</h3>
                  <p className="text-muted-foreground text-sm">
                    Skirts, Pants, Blazers, Sweaters, Shirts, Socks, Ties, Belts, Track Suits
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/products">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">🏆</div>
                  <h3 className="text-2xl mb-2">Trophies</h3>
                  <p className="text-muted-foreground text-sm">
                    Wooden, Metal, and Acrylic Trophies
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/products">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">🖨️</div>
                  <h3 className="text-2xl mb-2">Printing</h3>
                  <p className="text-muted-foreground text-sm">
                    ID Cards, Custom Notebooks, School Diaries
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl mb-6">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We provide high-quality school supplies at competitive prices. Our commitment to excellence
            ensures that students have access to the best materials for their educational journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-xl mb-2">Quality Products</h3>
              <p className="text-muted-foreground">Only the best brands and materials</p>
            </div>
            <div>
              <h3 className="text-xl mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Get your supplies on time</p>
            </div>
            <div>
              <h3 className="text-xl mb-2">Great Prices</h3>
              <p className="text-muted-foreground">Affordable for every family</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}