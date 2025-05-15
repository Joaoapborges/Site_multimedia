import Image from "next/image"
import Link from "next/link"

export default function KaratePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white p-4 flex justify-between items-center">
        <nav className="flex space-x-6">
          <Link href="/kickboxing" className="text-sm text-gray-600 hover:text-black">
            Kickboxing
          </Link>
          <Link href="/jiujitsu" className="text-sm text-gray-600 hover:text-black">
            Jiu Jitsu
          </Link>
          <Link href="/karate" className="text-sm text-gray-600 hover:text-black">
            Karate
          </Link>
        </nav>
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image src="/logo.png" alt="Crescent Taekwondo Academy" width={150} height={60} className="h-12 w-auto" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-sm text-gray-600 hover:text-black">
            Localização
          </Link>
          <Link href="/faq" className="text-sm text-gray-600 hover:text-black">
            FAQ
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[300px] w-full">
            <Image src="/karate-hero.png" alt="Karate training" fill className="object-cover" priority />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <h1 className="text-white text-2xl md:text-3xl font-bold">Karate Tradicional</h1>
            </div>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="max-w-5xl mx-auto px-4 py-8">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            O Karate é uma arte marcial tradicional japonesa que se concentra em técnicas de golpes, bloqueios, chutes e
            posições. A palavra "karate" significa "mão vazia", indicando que é uma forma de defesa pessoal que não
            requer armas. O treinamento de Karate desenvolve força, velocidade, equilíbrio e disciplina mental,
            enfatizando o respeito e a etiqueta tradicional.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="max-w-5xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Benefícios</h2>

          <div className="space-y-6">
            {/* Benefit 1 */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="w-full md:w-1/4">
                <Image
                  src="/discipline-benefit.png"
                  alt="Disciplina e Foco"
                  width={200}
                  height={150}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-semibold mb-2">Disciplina e Foco</h3>
                <p className="text-gray-700">
                  O Karate ensina disciplina, respeito e concentração, valores que se transferem para todos os aspectos
                  da vida.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="w-full md:w-1/4">
                <Image
                  src="/physical-benefit.png"
                  alt="Condicionamento Físico"
                  width={200}
                  height={150}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-semibold mb-2">Condicionamento Físico</h3>
                <p className="text-gray-700">
                  Desenvolva força, flexibilidade, coordenação e resistência através de treinamentos dinâmicos e
                  desafiadores.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="w-full md:w-1/4">
                <Image
                  src="/confidence-benefit.png"
                  alt="Autoconfiança"
                  width={200}
                  height={150}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-semibold mb-2">Autoconfiança</h3>
                <p className="text-gray-700">
                  Ganhe confiança à medida que domina novas técnicas e supera desafios, desenvolvendo uma mentalidade
                  positiva.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="w-full md:w-1/4">
                <Image
                  src="/tradition-benefit.png"
                  alt="Tradição e Cultura"
                  width={200}
                  height={150}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-semibold mb-2">Tradição e Cultura</h3>
                <p className="text-gray-700">
                  Aprenda sobre a rica história e filosofia do Karate, conectando-se com tradições que têm séculos de
                  existência.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Exemplo de Aulas Section */}
        <section className="max-w-5xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Exemplo de Aulas</h2>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                {/* Placeholder for video */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
              </div>
              <div className="p-4 flex items-center justify-end">
                <p className="text-gray-600">Vídeos de aulas</p>
              </div>
            </div>
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          <div className="mt-8 flex">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 mr-4">
              <Image
                src="/student-photo.png"
                alt="Estudante"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 italic">
                "Eu adoro as minhas aulas de Karate! Quando comecei, não sabia que ia gostar tanto, mas agora é parte
                mais importante do meu dia. Aprendi a ter mais confiança e o meu professor diz que o Karate não é só
                sobre golpes e katas, é sobre aprender a ser disciplinado a controlar as minhas ações. Além disso, fiz
                muitos amigos nas aulas. Sinto-me mais forte e confiante desde que comecei a praticar Karate, e até
                melhorei nas outras atividades que faço!"
              </p>
            </div>
          </div>
        </section>

        {/* Ginásio Section */}
        <section className="max-w-5xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Ginásio</h2>
          <div className="relative">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-[3/1] bg-black flex items-center justify-center">
                <Image
                  src="/norte-forte.png"
                  alt="Norte Forte Fight Club"
                  width={600}
                  height={200}
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">Várias fotos do ginásio</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Descrição</h3>
              <p className="text-gray-700">
                NORTE FORTE é uma equipa onde reina o amor pelos desportos de combate. Norte Forte é sinónimo de glória,
                respeito e fair play.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Localização</h3>
              <p className="text-gray-700">Largo de Ferreira Lapa 178, Porto, Portugal</p>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button className="bg-black text-white px-6 py-2 rounded-md font-medium">Visitar</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 p-6 text-center">
        <p className="text-gray-600">Footer</p>
      </footer>
    </div>
  )
}
