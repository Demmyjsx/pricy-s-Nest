"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowRight, Codesandbox } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    {
      id: 1,
      title: "Couple Massage",
      description:
        "Enjoy a relaxing massage experience with your partner in our luxurious couple's suite. Perfect for romantic getaways and special occasions.",
      price: "150,000",
      duration: "90 minutes",
      image: "/couples.png?height=300&width=400",
      code : "Spa-001"
    },
    {
      id: 2,
      title: "Deep Tissue",
      description:
        "Therapeutic massage targeting deeper layers of muscle and connective tissue. Ideal for chronic pain relief and muscle tension.",
      price: "80,000",
      duration: "60 minutes",
      image: "/action.jpeg?height=300&width=400",
      code: "Spa-002"
    },
    {
      id: 3,
      title: "Swedish",
      description:
        "Classic relaxation massage using long, flowing strokes to promote circulation and reduce stress. Perfect for first-time spa visitors.",
      price: "70,000",
      duration: "60 minutes",
      image: "/girlback.jpeg?height=300&width=400",
      code: "Spa-003"
    },
    {
      id: 4,
      title: "Aromatherapy",
      description:
        "Soothing massage combined with essential oils to enhance relaxation and promote emotional well-being through therapeutic scents.",
      price: "70,000",
      duration: "75 minutes",
      image: "/aroma.jpg?height=300&width=400",
      code: "Spa-004"
    },
    {
      id: 5,
      title: "Nuru Massage",
      description:
        "An erotic massage which involes body contact for pleasure and relaxation",
      price: "150,000",
      duration: "90 minutes",
      image: "/erotiiccc.webp?height=300&width=400",
      code: "Spa-005"
    },
    {
      id: 6,
      title: "Hot Stone Massage",
      description:
        "Therapeutic massage using heated volcanic stones to melt away tension and promote deep muscle relaxation.",
      price: "80,000",
      duration: "80 minutes",
      image: "/hot-stone.jpeg?height=300&width=400",
      code: "Spa-006"
    },
    {
      id: 7,
      title: "Classic / Basic Pedicure",
      description:
        "Complete foot care treatment including nail trimming, cuticle care, exfoliation, and relaxing foot massage with polish application.",
      price: "30,000",
      duration: "45 minutes",
      image: "/pedicure.jpg?height=300&width=400",
      code: "Spa-007"
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  // Auto-advance carousel every 1.5 seconds
  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 2500)

    return () => clearInterval(carouselTimer)
  }, [services.length])

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Header */}
      <header className="absolute top-8 left-8 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#A08F73] rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full relative">
              <div className="absolute inset-0 bg-[#A08F73] rounded-full transform rotate-45 origin-bottom-left w-2 h-2"></div>
            </div>
          </div>
          <div className="text-[#A08F73] font-medium">
            <div className="text-lg">Pricy</div>
            <div className="text-sm -mt-1">Nest</div>
          </div>
        </div>
      </header>

      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-0">
          <div className="max-w-lg">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-[#A08F73]">Be Beautiful</span>
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 leading-tight">
              You need time for Perfection
            </h2>

            <div className="flex gap-4">
              <a
                  href="https://wa.me/2348028798095"
                  target="_blank"
                  rel="noopener noreferrer"className="bg-[#A08F73] hover:bg-[#A08F73] text-white px-8 py-3 text-lg rounded-none">
                Book a Session
              </a>
           
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200"></div>
          <Image
            src="/action.jpeg"
            alt="Beautiful woman smiling"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Services Carousel Section */}
      <section className="bg-[#A08F73] py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative">
            {/* Carousel Navigation */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">Our Services</h2>
              <div className="flex gap-2">
                <Button
                  onClick={prevSlide}
                  variant="outline"
                  size="icon"
                  className="border-white text-white hover:bg-white hover:text-[#A08F73] rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  onClick={nextSlide}
                  variant="outline"
                  size="icon"
                  className="border-white text-white hover:bg-white hover:text-[#A08F73] rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Carousel Content */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={service.id} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                      {/* Service Card */}
                      <div className="lg:col-span-1 bg-[#A08F73] p-6 lg:p-8 text-white">
                        <h3 className="text-2xl font-bold mb-6 leading-tight">{service.title}</h3>

                        <div className="border-t border-white/30 border-dashed pt-4 mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xl font-semibold">{service.price}</span>
                            <span className="text-sm opacity-80">{service.code}</span>
                          </div>
                        </div>

                        <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-[#A08F73] w-full justify-between group">
                          Select package
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>

                      {/* Service Image */}
                      <div className="lg:col-span-2">
                        <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More Services Button */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <Link href="/services">
            <Button className="bg-[#A08F73] hover:bg-[#A08F73]/90 text-white px-8 py-3 text-lg">More services</Button>
          </Link>
        </div>
      </section>

      {/* Product Feature Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-green-50 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 items-center">
              {/* Content */}
              <div className="p-8 lg:p-12 order-2 lg:order-1">
                <div className="inline-block bg-[#A08F73] text-white px-4 py-2 text-sm font-medium mb-6">
                  Exclusive product
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-[#A08F73] mb-6">Sugar Scrubs</h2>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Welcome to 
                  Pricy's Nest your premier destination for relaxation and privacy on the go!
                  <br />
                  Our Experienced Therapist Bring the Spa Experience in you , in the comfort of your home, office, or Location.
                  <br />
                  Are you Seeeking Relief from stress pain or fatigue our expertly crafted massage services are Designed to melt awat tension and leave you renewed.
                </p>

                <div className="mb-8">
                  <p className="text-gray-700">
                    <span className="font-semibold text-[#A08F73]">Ingredients:</span> brown sugar, coconut, jojoba,
                    olive, almond, or grapeseed.
                  </p>
                </div>

                <button className="text-[#A08F73] font-medium border-b-2 border-[#A08F73] hover:border-[#A08F73]/70 transition-colors">
                  View product
                </button>
              </div>

              {/* Image */}
              <div className="relative h-80 lg:h-96 order-1 lg:order-2">
                <div className="absolute inset-0 bg-[#A08F73] rounded-l-2xl lg:rounded-l-none lg:rounded-r-2xl"></div>
                <Image
                  src="/scrub.jpeg?height=400&width=600"
                  alt="Woman holding sugar scrub product"
                  fill
                  className="object-cover object-center rounded-l-2xl lg:rounded-l-none lg:rounded-r-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#A08F73] rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full relative">
                    <div className="absolute inset-0 bg-[#A08F73] rounded-full transform rotate-45 origin-bottom-left w-2 h-2"></div>
                  </div>
                </div>
                <div className="text-[#A08F73] font-medium">
                  <div className="text-lg">Pricy</div>
                  <div className="text-sm -mt-1">Nest</div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                  <span>📞</span>
                  <span>08028798095</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                  {/* Add your WhatsApp link here */}
                  <a href="#" className="flex items-center gap-2 hover:text-[#A08F73] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
                    </svg>
                    <span className="sr-only">WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Empty column for spacing on larger screens */}
            <div className="hidden md:block"></div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-600 text-sm">© 2024 All right reserved.</p>
            <p className="text-gray-600 text-sm">Lagos Nigeria</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
