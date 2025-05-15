import Image from "next/image"
import Link from "next/link"

export default function Home() {
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
            <Image src="/hero-image.png" alt="Taekwondo students" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h1 className="text-white text-2xl md:text-3xl font-bold text-center px-4">
                Superação, Respeito e Disciplina para a vida
              </h1>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="max-w-5xl mx-auto px-4 py-8">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            As artes marciais não são apenas uma forma de educação física. Ao fazermos o seu Mestre, ensina e defende
            que a participação no desporto de competição disciplina, respeita e autoestima, ajudando a desenvolver o
            caráter. Através do treino, os alunos aprendem a superar os seus limites, a ajudar e cultivar amizades com
            colegas e treinadores. Esta prática não só é uma forma divertida e saudável de se exercitar, mas também
            ensina valores importantes como perseverança, integridade e humildade no desenvolvimento pessoal. Junte-se a
            nós e descubra como as artes marciais podem ajudar você a crescer como pessoa.
          </p>
        </section>

        {/* Programs Section */}
        <section className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-500 p-6 rounded-lg text-white flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-center">Kickboxing</h3>
            <p className="text-center mb-6">
              Aprenda técnicas dinâmicas que combinam movimentos de boxe com chutes poderosos.
            </p>
            <Link href="/kickboxing" className="bg-white text-blue-500 px-6 py-2 rounded-md font-medium mt-auto">
              Botão
            </Link>
          </div>
          <div className="bg-blue-500 p-6 rounded-lg text-white flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-center">Jiu Jitsu</h3>
            <p className="text-center mb-6">Domine a arte da luta no solo com técnicas de alavancagem e submissão.</p>
            <Link href="/jiujitsu" className="bg-white text-blue-500 px-6 py-2 rounded-md font-medium mt-auto">
              Botão
            </Link>
          </div>
          <div className="bg-blue-500 p-6 rounded-lg text-white flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-center">Karate</h3>
            <p className="text-center mb-6">
              Desenvolva disciplina e técnica através desta tradicional arte marcial japonesa.
            </p>
            <Link href="/karate" className="bg-white text-blue-500 px-6 py-2 rounded-md font-medium mt-auto">
              Botão
            </Link>
          </div>
        </section>

        {/* Gyms Section */}
        <section className="max-w-5xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Ginásios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-4 rounded-md">
              <div className="h-32 bg-gray-100 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
              <button className="bg-black text-white px-6 py-2 rounded-md font-medium mt-4">Botão</button>
            </div>
            <div className="border border-gray-200 p-4 rounded-md">
              <div className="h-32 bg-gray-100 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
              <button className="bg-black text-white px-6 py-2 rounded-md font-medium mt-4">Botão</button>
            </div>
            <div className="border border-gray-200 p-4 rounded-md">
              <div className="h-32 bg-gray-100 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
              <button className="bg-black text-white px-6 py-2 rounded-md font-medium mt-4">Botão</button>
            </div>
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
