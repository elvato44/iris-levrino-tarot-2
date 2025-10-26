import AmarreLandingClient from "./AmarreLandingClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Amarres de Amor Efectivos | Maestra Esperanza - Rituales Ancestrales",
  description:
    "✨ Recupera el amor de tu vida con amarres ancestrales. 25 años de experiencia, más de 10,000 corazones unidos. Consulta privada por WhatsApp. Rituales de amor, endulzamientos y amarres sexuales.",
  keywords:
    "amarres de amor, rituales de amor, endulzamientos, amarres sexuales, magia blanca, recuperar ex pareja, unión de parejas, rituales ancestrales",
  openGraph: {
    title: "Amarres de Amor Efectivos | Maestra Esperanza",
    description:
      "Recupera el amor de tu vida con rituales ancestrales. 25 años de experiencia uniendo corazones destinados.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amarres de Amor Efectivos | Maestra Esperanza",
    description: "Rituales ancestrales para recuperar el amor. Consulta privada por WhatsApp.",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
}

export default function AmarreLanding() {
  return <AmarreLandingClient />
}
