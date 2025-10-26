"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Flame, Eye } from "lucide-react"
import { useCallback } from "react"

// Extend Window interface for fbq
declare global {
  interface Window {
    fbq: any
  }
}

export default function AmarreLandingClient() {
  const whatsappNumber = "+543513157439"
  const whatsappMessage = "Hola, me interesa conocer más sobre sus Servicios. ¿Podrías orientarme?"

  const trackWhatsAppClick = useCallback((buttonLocation: string) => {
    // Track with Meta Pixel
    if (typeof window !== "undefined" && window.fbq) {
      try {
        window.fbq("track", "Subscribe", {
          content_name: buttonLocation,
          content_category: "WhatsApp Contact",
          value: 1.0,
          currency: "USD",
        })
        console.log("✅ Meta Pixel Subscribe event tracked:", buttonLocation)
      } catch (error) {
        console.error("❌ Error tracking Subscribe event:", error)
      }
    }
  }, [])

  const openWhatsApp = useCallback(
    (buttonLocation: string) => {
      trackWhatsAppClick(buttonLocation)
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
      window.open(url, "_blank")
    },
    [trackWhatsAppClick, whatsappNumber, whatsappMessage],
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-black text-white">
      {/* Mobile Safe Area Top */}
      <div className="fixed top-0 left-0 right-0 h-[env(safe-area-inset-top)] bg-black z-50"></div>
      {/* Mobile Safe Area Bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-[env(safe-area-inset-bottom)] bg-black z-50"></div>
      {/* Main Content with Safe Area Padding */}
      <div className="pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
          <Button
            onClick={() => openWhatsApp("Floating Button")}
            className="bg-green-600 hover:bg-green-700 text-white p-3 md:p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 animate-pulse"
          >
            <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center bg-fixed transition-all duration-1000 ease-in-out"
              style={{
                backgroundImage: `url('/images/hero-mystical-candles.png')`,
                backgroundAttachment: "scroll",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-900/70 to-black/80"></div>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="mb-6 md:mb-8 flex justify-center">
              <div className="relative">
                <div className="w-12 h-12 md:w-16 md:h-16 text-purple-300 animate-pulse flex items-center justify-center text-4xl md:text-6xl">
                  🔮
                </div>
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 bg-clip-text text-transparent leading-tight px-2 drop-shadow-2xl">
              Amarres De Amor, Endulzamientos De Parejas, Tarot Y Mas
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-purple-200 max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-lg">
              Seguridad, Confidencialidad Y Trabajos 100% Garantizados. La Mejor Vidente De Argentina.
            </p>

            <Button
              onClick={() => openWhatsApp("Hero CTA")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 w-full max-w-xs mx-auto"
            >
              <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Contacta por WhatsApp
            </Button>
          </div>
        </section>

        {/* Servicios Espirituales */}
        <section className="py-12 md:py-20 px-4 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/tarot-cards-candles.png"
              alt="Tarot cards with candles"
              className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Flame className="w-12 h-12 md:w-16 md:h-16 text-orange-400 animate-pulse" />
                  <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-xl animate-pulse"></div>
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-2xl">Servicios del Alma</h2>
              <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto drop-shadow-lg">
                Cada ritual es un camino sagrado hacia la unión de destinos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-12">
              {/* Amarres de Amor */}
              <div className="group">
                <Card className="bg-black/60 border-red-500/40 backdrop-blur-md hover:bg-black/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-4 h-4 bg-gradient-to-r from-red-400 to-pink-400 rotate-45 mr-3"></div>
                      <h3 className="text-2xl md:text-3xl font-bold text-red-300">Amarres de Amor</h3>
                    </div>

                    <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-6">
                      <span className="text-red-400 font-semibold">Recupera el amor de tu vida.</span> Fortalece el
                      vínculo emocional y espiritual. Elimina conflictos y renueva la armonía.
                    </p>

                    <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4 mb-6 backdrop-blur-sm">
                      <p className="text-red-200 text-sm font-semibold mb-2">✨ ¿Qué incluye este ritual?</p>
                      <ul className="text-xs text-red-100 space-y-1">
                        <li>• Consulta espiritual personalizada</li>
                        <li>• Ritual con velas consagradas rojas</li>
                        <li>• Palabras de poder bajo luna propicia</li>
                        <li>• Seguimiento durante 21 días</li>
                      </ul>
                    </div>

                    <Button
                      onClick={() => openWhatsApp("Amarres de Amor Service")}
                      className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-red-500/25 transition-all duration-300"
                    >
                      <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="mr-2 h-5 w-5" />
                      Solicitar AMARRE
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Endulzamientos */}
              <div className="group">
                <Card className="bg-black/60 border-orange-500/40 backdrop-blur-md hover:bg-black/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-400 rotate-45 mr-3"></div>
                      <h3 className="text-2xl md:text-3xl font-bold text-orange-300">Endulzamientos</h3>
                    </div>

                    <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-6">
                      <span className="text-orange-400 font-semibold">Dulcifica tu relación.</span> Atrae el amor que
                      mereces y crea vínculos especiales con esa persona.
                    </p>

                    <div className="bg-orange-900/30 border border-orange-500/30 rounded-lg p-4 mb-6 backdrop-blur-sm">
                      <p className="text-orange-200 text-sm font-semibold mb-2">🍯 Ritual de Dulzura Incluye:</p>
                      <ul className="text-xs text-orange-100 space-y-1">
                        <li>• Miel consagrada bajo luna creciente</li>
                        <li>• Velas doradas de atracción</li>
                        <li>• Hierbas dulces ancestrales</li>
                        <li>• Oración de 7 días consecutivos</li>
                      </ul>
                    </div>

                    <Button
                      onClick={() => openWhatsApp("Endulzamientos Service")}
                      className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                    >
                      <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="mr-2 h-5 w-5" />
                      Solicitar ENDULZAMIENTO
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Amarres Sexuales */}
              <div className="group">
                <Card className="bg-black/60 border-purple-500/40 backdrop-blur-md hover:bg-black/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rotate-45 mr-3"></div>
                      <h3 className="text-2xl md:text-3xl font-bold text-purple-300">Amarres Sexuales</h3>
                    </div>

                    <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-6">
                      <span className="text-purple-400 font-semibold">Intensifica la pasión.</span> Aumenta el deseo y
                      la atracción para una intimidad duradera.
                    </p>

                    <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4 mb-6 backdrop-blur-sm">
                      <p className="text-purple-200 text-sm font-semibold mb-2">🔥 Ritual de Pasión Incluye:</p>
                      <ul className="text-xs text-purple-100 space-y-1">
                        <li>• Velas rojas de alta intensidad</li>
                        <li>• Aceites esenciales afrodisíacos</li>
                        <li>• Ritual en noche de Venus</li>
                        <li>• Amuleto de atracción personal</li>
                      </ul>
                    </div>

                    <Button
                      onClick={() => openWhatsApp("Amarres Sexuales Service")}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    >
                      <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="mr-2 h-5 w-5" />
                      Solicitar AMARRE SEXUAL
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Tarot */}
              <div className="group">
                <Card className="bg-black/60 border-yellow-500/40 backdrop-blur-md hover:bg-black/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-amber-400 rotate-45 mr-3"></div>
                      <h3 className="text-2xl md:text-3xl font-bold text-yellow-300">Tarot</h3>
                    </div>

                    <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-6">
                      <span className="text-yellow-400 font-semibold">Descubre tu destino.</span> Revela lo que las
                      cartas ancestrales tienen para mostrarte sobre tu futuro.
                    </p>

                    <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-4 mb-6 backdrop-blur-sm">
                      <p className="text-yellow-200 text-sm font-semibold mb-2">🔮 Lectura de Tarot Incluye:</p>
                      <ul className="text-xs text-yellow-100 space-y-1">
                        <li>• Tirada de 3 cartas (pasado, presente, futuro)</li>
                        <li>• Interpretación profunda personalizada</li>
                        <li>• Guía espiritual para tu camino</li>
                        <li>• Respuestas a tus preguntas más profundas</li>
                      </ul>
                    </div>

                    <Button
                      onClick={() => openWhatsApp("Tarot Service")}
                      className="w-full bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
                    >
                      <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="mr-2 h-5 w-5" />
                      Solicitar LECTURA DE TAROT
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Lecturas Personalizadas */}
              <div className="group">
                <Card className="bg-black/60 border-cyan-500/40 backdrop-blur-md hover:bg-black/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rotate-45 mr-3"></div>
                      <h3 className="text-2xl md:text-3xl font-bold text-cyan-300">Lecturas Personalizadas</h3>
                    </div>

                    <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-6">
                      <span className="text-cyan-400 font-semibold">Conecta con tu energía.</span> Sesión individual
                      para explorar tu situación única y encontrar claridad.
                    </p>

                    <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-lg p-4 mb-6 backdrop-blur-sm">
                      <p className="text-cyan-200 text-sm font-semibold mb-2">✨ Consulta Personalizada Incluye:</p>
                      <ul className="text-xs text-cyan-100 space-y-1">
                        <li>• Análisis energético completo</li>
                        <li>• Orientación espiritual personalizada</li>
                        <li>• Limpieza áurica y protección</li>
                        <li>• Plan de acción espiritual</li>
                      </ul>
                    </div>

                    <Button
                      onClick={() => openWhatsApp("Lecturas Personalizadas Service")}
                      className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    >
                      <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="mr-2 h-5 w-5" />
                      Solicitar LECTURA
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Sticky */}
            <div className="sticky top-4 z-40 px-4 py-3 bg-gradient-to-r from-pink-600 to-purple-600 shadow-2xl mt-12">
              <div className="max-w-4xl mx-auto flex items-center justify-between">
                <span className="text-white font-semibold text-sm md:text-base">¿Listo para recuperar tu amor?</span>
                <Button
                  onClick={() => openWhatsApp("Sticky CTA")}
                  className="bg-white hover:bg-gray-100 text-purple-600 font-bold px-4 py-2 md:px-6 md:py-2 text-sm rounded-full"
                >
                  <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="mr-2 h-4 w-4" />
                  Contactar Ahora
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre la Maestra */}
        <section className="py-12 md:py-20 px-4 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/60 to-black/70"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <Flame className="w-10 h-10 md:w-12 md:h-12 text-orange-400 mx-auto mb-4 animate-pulse" />
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-purple-200 px-4 drop-shadow-lg">
                Iris Levrino
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto lg:mx-0 mb-6"></div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-pulse"></div>
                <img
                  src="/images/maestra-spiritual.png"
                  alt="Maestra Espiritual"
                  className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-purple-500/50 shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 text-purple-100">
              <p className="text-sm md:text-lg leading-relaxed">
                <span className="text-pink-300 font-semibold text-lg md:text-xl">25 años</span> dedicados a sanar
                corazones y unir almas destinadas. Más de 10,000 rituales exitosos.
              </p>

              <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 rounded-lg p-4 md:p-6 border border-purple-500/30 backdrop-blur-sm">
                <p className="text-sm md:text-base italic text-purple-200 mb-3">
                  "No todos están preparados para recibir este don. Solo trabajo con aquellos cuyo corazón
                  verdaderamente clama por la unión sagrada."
                </p>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-black">✨</span>
                  </div>
                  <span className="text-purple-300 font-semibold text-sm">— Iris Levrino</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-3 bg-black/40 rounded-lg border border-purple-500/20 backdrop-blur-sm">
                  <div className="text-xl md:text-2xl font-bold text-yellow-300">25+</div>
                  <div className="text-xs md:text-sm text-purple-200">Años de Experiencia</div>
                </div>
                <div className="text-center p-3 bg-black/40 rounded-lg border border-purple-500/20 backdrop-blur-sm">
                  <div className="text-xl md:text-2xl font-bold text-pink-300">10K+</div>
                  <div className="text-xs md:text-sm text-purple-200">Corazones Sanados</div>
                </div>
              </div>

              <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4 md:p-6 mt-6 backdrop-blur-sm">
                <div className="flex items-center mb-3">
                  <span className="text-red-400 mr-2">⏰</span>
                  <span className="text-red-300 font-semibold text-sm md:text-base">Atención Limitada</span>
                </div>
                <p className="text-xs md:text-sm text-red-200 leading-relaxed">
                  Solo acepto <span className="font-bold">3 casos nuevos por luna</span>. Cada ritual requiere mi
                  completa devoción espiritual.
                  <span className="text-red-300 font-semibold">
                    Los corazones que esperan demasiado, a menudo pierden su oportunidad de sanación.
                  </span>
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-8 text-center">
                <Button
                  onClick={() => openWhatsApp("About Section CTA")}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 w-full max-w-md mx-auto flex items-center justify-center"
                >
                  <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="mr-3 h-6 w-6" />
                  Habla con Iris
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-12 md:py-20 px-4 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple-900/70 to-black/80"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-purple-200 px-4 drop-shadow-lg">
              Voces en las Sombras
            </h2>
            <p className="text-center text-purple-300 mb-8 md:mb-12 text-sm md:text-base px-4">
              Testimonios reales de corazones sanados ✨
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Testimonio 1 - Valentina */}
              <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30 backdrop-blur-md overflow-hidden hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <img
                    src="/images/testimonio-valentina.png"
                    alt="Testimonio de Valentina - Resultados exitosos"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 md:p-6">
                    <p className="text-sm md:text-base text-purple-100 italic text-center">
                      "Muchísimas gracias! De todo corazón... ya noto sus ganas, todo va mejorando."
                    </p>
                    <p className="text-right text-purple-300 font-semibold text-xs md:text-sm mt-3">— Valentina 💚</p>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonio 2 - Impresionante */}
              <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30 backdrop-blur-md overflow-hidden hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <img
                    src="/images/testimonio-impresionante.png"
                    alt="Testimonio impresionante - Trabajo excelente"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 md:p-6">
                    <p className="text-sm md:text-base text-purple-100 italic text-center">
                      "IMPRESIONANTE... Realmente sos una genia, tu trabajo es excelente."
                    </p>
                    <p className="text-right text-purple-300 font-semibold text-xs md:text-sm mt-3">
                      — Cliente Satisfecha ❤️
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonio 3 - Ricardo */}
              <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30 backdrop-blur-md overflow-hidden hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1">
                <CardContent className="p-0">
                  <img
                    src="/images/testimonio-ricardo.png"
                    alt="Testimonio sobre proceso de sanación"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 md:p-6">
                    <p className="text-sm md:text-base text-purple-100 italic text-center">
                      "Confío mucho en usted... Ojalá pueda tener noticias de él pronto."
                    </p>
                    <p className="text-right text-purple-300 font-semibold text-xs md:text-sm mt-3">
                      — En proceso de sanación 🙏
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA después de testimonios */}
            <div className="mt-8 md:mt-12 text-center">
              <p className="text-purple-200 mb-4 text-sm md:text-base px-4">
                ¿Quieres ser el próximo testimonio de éxito?
              </p>
              <Button
                onClick={() => openWhatsApp("Testimonials CTA")}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-base md:text-lg rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="mr-3 h-5 w-5 md:h-6 md:w-6" />
                Comienza Tu Transformación
              </Button>
            </div>
          </div>
        </section>

        {/* Por qué Funciona */}
        <section className="py-12 md:py-20 px-4 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple-900/70 to-black/80"></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <Eye className="w-10 h-10 md:w-12 md:h-12 text-purple-400 mx-auto mb-4 animate-pulse" />
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-purple-200 px-4 drop-shadow-lg">
                Por Qué Funciona
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-4 md:px-0">
              <Card className="bg-black/60 border-purple-500/30 backdrop-blur-md hover:bg-black/70 transition-all duration-300">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-lg md:text-2xl">🕯️</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-purple-200">Energía Concentrada</h3>
                  <p className="text-sm md:text-base text-purple-100">
                    Intención pura que canaliza energías ancestrales.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 border-purple-500/30 backdrop-blur-md hover:bg-black/70 transition-all duration-300">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-lg md:text-2xl">🌙</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-purple-200">Ciclos Lunares</h3>
                  <p className="text-sm md:text-base text-purple-100">Aprovechamos momentos de poder cósmico.</p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 border-purple-500/30 backdrop-blur-md hover:bg-black/70 transition-all duration-300">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-lg md:text-2xl">🔮</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-purple-200">Sabiduría Ancestral</h3>
                  <p className="text-sm md:text-base text-purple-100">Conocimientos transmitidos por generaciones.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Advertencia Final */}
        <section className="py-12 md:py-16 px-4 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-purple-900/80 to-black/90"></div>
          </div>

          <div className="max-w-3xl mx-auto relative z-10">
            <Card className="bg-gradient-to-br from-black/80 to-red-900/60 border-red-500/50 backdrop-blur-md mx-4 md:mx-0 shadow-2xl">
              <CardContent className="p-4 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <span className="text-lg md:text-2xl">⚠️</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-red-300">Advertencia Sagrada</h3>
                <p className="text-sm md:text-lg mb-4 md:mb-6 text-purple-100 leading-relaxed">
                  El amarre es un compromiso espiritual profundo que trasciende lo mundano. Una vez iniciado el ritual,
                  las fuerzas despertadas seguirán su curso natural.
                  <br />
                  <br />
                  <span className="text-red-300 font-semibold">
                    Solo aquellos con verdadera convicción deben dar este paso.
                  </span>
                </p>

                <p className="text-purple-200 mb-4 md:mb-6 text-sm md:text-base">
                  El contacto se realiza <strong>únicamente por WhatsApp</strong>. No hay compras en línea, no hay
                  formularios automáticos. Solo la conversación directa.
                </p>

                <Button
                  onClick={() => openWhatsApp("Warning Section CTA")}
                  variant="outline"
                  className="border-purple-500 text-purple-300 hover:bg-purple-500/20 px-6 py-2 md:px-8 md:py-3 rounded-full bg-transparent w-full max-w-xs mx-auto text-sm md:text-base"
                >
                  <img src="/images/whatsapp-logo.png" alt="WhatsApp" className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Contacto Confidencial
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 md:py-8 px-4 bg-black/90 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-900/20 to-transparent"></div>
          <p className="text-purple-300 text-xs md:text-sm relative z-10">
            © 2025 - Los secretos se guardan en las sombras, los rituales en el corazón.
          </p>
        </footer>
      </div>
    </div>
  )
}
