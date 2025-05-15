"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"

// FAQ Item component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center text-left font-medium text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 flex-shrink-0 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 flex-shrink-0 text-gray-500" />
        )}
      </button>
      {isOpen && <div className="mt-2 text-gray-600">{answer}</div>}
    </div>
  )
}

export default function FAQPage() {
  const faqs = [
    {
      question: "Qual é a idade mínima para começar a praticar artes marciais?",
      answer:
        "Na nossa academia, aceitamos alunos a partir dos 4 anos de idade para aulas específicas para crianças. Temos programas adaptados para diferentes faixas etárias: 4-6 anos, 7-12 anos, adolescentes e adultos. Cada programa é cuidadosamente estruturado para atender às necessidades de desenvolvimento físico e mental de cada faixa etária.",
    },
    {
      question: "Preciso ter experiência prévia para começar?",
      answer:
        "Não, não é necessário ter experiência prévia. Nossas aulas são estruturadas para acomodar todos os níveis, desde iniciantes completos até praticantes avançados. Os instrutores dedicam atenção especial aos novos alunos para garantir que aprendam as técnicas básicas corretamente antes de avançar para movimentos mais complexos.",
    },
    {
      question: "Que equipamentos preciso para começar?",
      answer:
        "Para começar, recomendamos roupas confortáveis que permitam movimentos livres. Após algumas semanas, dependendo da modalidade escolhida, você precisará de equipamentos específicos. Para Kickboxing: luvas, bandagens e caneleiras. Para Jiu Jitsu: kimono (gi). Para Karate: kimono (gi) e proteções. A academia oferece equipamentos para empréstimo nas primeiras aulas e também vende todos os equipamentos necessários.",
    },
    {
      question: "Qual a frequência recomendada de treinos por semana?",
      answer:
        "Para iniciantes, recomendamos 2 a 3 treinos por semana para permitir que o corpo se adapte gradualmente. À medida que sua condição física melhora, pode aumentar para 3 a 5 vezes por semana. Para competidores, a frequência pode ser ainda maior, com treinos específicos de condicionamento físico. O mais importante é a consistência - treinar regularmente traz resultados muito melhores do que treinar intensamente de forma esporádica.",
    },
    {
      question: "Quais são as principais diferenças entre Kickboxing, Jiu Jitsu e Karate?",
      answer:
        "O Kickboxing é uma arte marcial focada em golpes com os punhos e pernas, ideal para quem busca um treino cardiovascular intenso e defesa pessoal em pé. O Jiu Jitsu Brasileiro concentra-se em técnicas de luta no solo, alavancas e finalizações, sendo excelente para defesa pessoal contra oponentes maiores. O Karate é uma arte marcial tradicional japonesa que equilibra técnicas de golpes, bloqueios e posições, com forte ênfase em disciplina e respeito. Cada modalidade desenvolve diferentes aspectos físicos e mentais, e muitos alunos optam por praticar mais de uma modalidade para um desenvolvimento mais completo.",
    },
    {
      question: "É possível praticar artes marciais se eu não estiver em boa forma física?",
      answer:
        "Absolutamente! Na verdade, muitas pessoas começam a praticar artes marciais justamente para melhorar sua condição física. Nossas aulas são estruturadas para permitir que cada aluno progrida no seu próprio ritmo. Com o tempo, você naturalmente desenvolverá força, flexibilidade, resistência e coordenação. Os instrutores sempre oferecem adaptações para exercícios mais desafiadores, permitindo que todos participem independentemente do nível de condicionamento físico inicial.",
    },
    {
      question: "Como funciona o sistema de graduação e faixas?",
      answer:
        "Cada arte marcial tem seu próprio sistema de graduação. No Kickboxing, usamos um sistema de níveis indicados por braçadeiras coloridas. No Jiu Jitsu Brasileiro, o sistema tradicional inclui faixas branca, azul, roxa, marrom e preta, com quatro graus em cada faixa. No Karate, seguimos o sistema japonês de faixas coloridas até a faixa preta, que possui dez graus (dans). As avaliações para mudança de graduação ocorrem periodicamente e consideram não apenas habilidade técnica, mas também assiduidade, atitude e compreensão dos princípios da arte marcial.",
    },
    {
      question: "Qual o valor da mensalidade e há taxas adicionais?",
      answer:
        "As mensalidades variam de acordo com a modalidade e frequência semanal escolhidas. Para uma modalidade com duas aulas semanais, o valor é de 45€ mensais. Para frequência livre em uma modalidade, 60€ mensais. Oferecemos pacotes para múltiplas modalidades com desconto. Há uma taxa de inscrição única de 25€ que inclui seguro desportivo anual. Também oferecemos descontos para famílias e estudantes. Entre em contato conosco para obter informações detalhadas sobre os planos disponíveis.",
    },
    {
      question: "A academia organiza ou participa de competições?",
      answer:
        "Sim, nossa academia participa regularmente de competições regionais, nacionais e internacionais. A participação em competições é completamente opcional - muitos de nossos alunos praticam apenas por saúde, defesa pessoal ou desenvolvimento pessoal. Para aqueles interessados em competir, oferecemos treinos específicos de preparação e nossa equipe técnica acompanha os atletas nos eventos. Também organizamos competições internas duas vezes por ano, proporcionando um ambiente amigável para os alunos experimentarem o aspecto competitivo das artes marciais.",
    },
    {
      question: "Como posso começar? É possível fazer uma aula experimental?",
      answer:
        "Sim, oferecemos uma semana de aulas experimentais gratuitas para que você possa conhecer nossas instalações, metodologia e instrutores. Para começar, basta entrar em contato por telefone, email ou através do formulário no nosso site para agendar sua primeira aula. Recomendamos chegar 15 minutos antes para conhecer as instalações e preencher um breve formulário. Não é necessário trazer equipamentos para a aula experimental, apenas roupas confortáveis e uma garrafa de água.",
    },
  ]

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
          <Link href="/faq" className="text-sm text-gray-600 hover:text-black font-semibold">
            FAQ
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Perguntas Frequentes</h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              Encontre respostas para as perguntas mais comuns sobre nossa academia e as artes marciais que ensinamos.
              Se não encontrar o que procura, não hesite em nos contactar.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto px-4 py-12">
          <div className="space-y-1">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h2>
            <p className="text-gray-600 mb-6">
              Nossa equipe está pronta para responder a todas as suas perguntas e ajudá-lo a começar sua jornada nas
              artes marciais.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-md font-medium">Entre em Contato</button>
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
