import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import WhatsAppButton from "@/components/WhatsAppButton";
import ExitPopup from "@/components/ExitPopup";
import { 
  CheckCircle2, 
  Clock, 
  Shield, 
  Heart, 
  FileText, 
  Video,
  MapPin,
  Star,
  CreditCard,
  Smartphone
} from "lucide-react";
import { toast } from "sonner";

export default function Home() {


  return (
    <div className="min-h-screen">
      <ExitPopup />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary/95 to-black text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary text-primary-foreground hover:bg-primary/90">
              100% Online • Rápido • Seguro
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Seu Divórcio Pode Ser Finalizado em <span className="text-primary">Até 1 Dia</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Processo 100% online, sem burocracia e com atendimento humanizado. Recomeço sua vida com rapidez e segurança.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton 
                message="Olá! Quero saber mais sobre o divórcio online. Pode me ajudar?"
                size="lg"
                className="text-lg px-8 py-6"
              >
                Falar com Advogado Agora
              </WhatsAppButton>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20"
                onClick={() => {
                  document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Video className="w-5 h-5 mr-2" />
                Assistir Vídeo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vídeo Section */}
      <section id="video" className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Entenda Como Funciona
            </h2>
            <p className="text-center text-muted-foreground mb-8 text-lg">
              Assista ao vídeo e veja como é simples e rápido divorciar online
            </p>
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/LPbU_Y9MMEI"
                title="Divórcio Online - Como Funciona"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Divórcio Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Escolha o Tipo de Divórcio Ideal para Você
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Transparência total: conheça os valores e escolha a opção que melhor se adequa à sua situação
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Divórcio Cartório */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-primary text-primary-foreground">Mais Rápido</Badge>
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Divórcio no Cartório</CardTitle>
                <CardDescription className="text-base">
                  Ideal para casais sem filhos menores e em acordo total
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-primary">R$ 3.500</p>
                  <p className="text-sm text-muted-foreground">ou 12x no cartão</p>
                  <p className="text-sm font-semibold text-primary mt-1">15% de desconto no PIX</p>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Finalizado em <strong>até 24 horas</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>100% online, sem sair de casa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Assinatura por videoconferência</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Sem filhos menores ou gestação</span>
                  </li>
                </ul>

                <WhatsAppButton 
                  message="Olá! Tenho interesse no divórcio no cartório. Gostaria de mais informações."
                  variant="default"
                  className="w-full"
                >
                  Quero Divorciar no Cartório
                </WhatsAppButton>
              </CardContent>
            </Card>

            {/* Divórcio Judicial */}
            <Card className="border-2 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Também Rápido</Badge>
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Divórcio Judicial Amigável</CardTitle>
                <CardDescription className="text-base">
                  Para casais com filhos menores ou gestação, mas em acordo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-secondary">R$ 2.000</p>
                  <p className="text-sm text-muted-foreground">ou 12x no cartão</p>
                  <p className="text-sm font-semibold text-secondary mt-1">15% de desconto no PIX</p>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Finalizado em <strong>15 dias a 3 meses</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>100% online, sem sair de casa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Proteção dos direitos dos filhos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Aprovação judicial garantida</span>
                  </li>
                </ul>

                <WhatsAppButton 
                  message="Olá! Tenho interesse no divórcio judicial amigável. Gostaria de mais informações."
                  variant="secondary"
                  className="w-full"
                >
                  Quero Divórcio Judicial
                </WhatsAppButton>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              <CreditCard className="w-5 h-5 inline mr-2" />
              Parcelamento em até 12x no cartão ou 15% de desconto no PIX à vista
            </p>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Como Funciona o Processo
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Simples, rápido e totalmente online. Veja o passo a passo:
          </p>

          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Contato Inicial",
                description: "Entre em contato pelo WhatsApp e tire todas as suas dúvidas"
              },
              {
                step: "2",
                title: "Envio de Documentos",
                description: "Envie os documentos necessários de forma digital e segura"
              },
              {
                step: "3",
                title: "Elaboração",
                description: "Preparamos toda a documentação legal do seu divórcio"
              },
              {
                step: "4",
                title: "Assinatura",
                description: "Assinatura online por videoconferência ou homologação judicial"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card p-6 rounded-lg max-w-3xl mx-auto border">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              Documentos Necessários
            </h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {[
                "Certidão de casamento atualizada",
                "RG e CPF de ambos",
                "Comprovante de residência",
                "Certidão de nascimento dos filhos (se houver)"
              ].map((doc, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{doc}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-4">
              * Não tem comprovante de residência? Sem problema, nós providenciamos!
            </p>
          </div>
        </div>
      </section>

      {/* Sobre Rafael Toledo Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/rafael-toledo.jpg" 
                  alt="Rafael Toledo - Advogado Especialista em Divórcio Online"
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
              <div>
                <Badge className="mb-4">Especialista em Direito de Família</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Rafael Toledo
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Advogado OAB/RJ 227.191
                </p>
                
                <p className="text-lg mb-6 leading-relaxed">
                  Com mais de <strong>5 anos de experiência</strong> e <strong>mais de 200 clientes atendidos</strong>, sou especializado em tornar o divórcio mais rápido e menos burocrático. Meu compromisso é oferecer um atendimento humanizado e acolhedor, porque divórcio já é difícil — o processo não precisa ser.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Atendimento Humanizado</h4>
                      <p className="text-sm text-muted-foreground">Acolhimento e empatia em cada etapa do processo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Smartphone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">100% Online e Profissional</h4>
                      <p className="text-sm text-muted-foreground">Atendimento por WhatsApp e videochamada com total segurança jurídica</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Credibilidade Verificável</h4>
                      <p className="text-sm text-muted-foreground">
                        Confirme minha identidade em{" "}
                        <a href="https://www.confirmadv.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          ConfirmAdv
                        </a>
                        {" "}e{" "}
                        <a href="https://cna.oab.org.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          CNA/OAB
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <WhatsAppButton 
                  message="Olá Rafael! Gostaria de conversar sobre meu divórcio."
                  size="lg"
                  className="w-full md:w-auto"
                >
                  Falar com Rafael Toledo
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Por Que Escolher o Divórcio Online?
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Rapidez, economia e profissionalismo — tudo o que você precisa para recomeçar
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Rapidez Incomparável",
                description: "Enquanto um divórcio litigioso pode levar meses ou anos, o amigável online é finalizado em dias ou semanas."
              },
              {
                icon: Smartphone,
                title: "100% Online",
                description: "Todo o processo é feito de casa, por WhatsApp e videochamada. Sem precisar ir a cartórios ou fóruns."
              },
              {
                icon: CreditCard,
                title: "Economia Real",
                description: "Valores transparentes e justos, com opção de parcelamento ou desconto à vista."
              },
              {
                icon: Shield,
                title: "Segurança Jurídica",
                description: "Advogado especializado com registro na OAB, garantindo total validade legal."
              },
              {
                icon: Heart,
                title: "Atendimento Acolhedor",
                description: "Processo difícil merece tratamento humano. Estamos aqui para te apoiar em cada etapa."
              },
              {
                icon: FileText,
                title: "Sem Burocracia",
                description: "Cuidamos de toda a documentação e trâmites. Você só precisa assinar."
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Histórias reais de pessoas que recomeçaram suas vidas com nossa ajuda
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Mariana S.",
                age: 34,
                situation: "Divórcio no Cartório",
                text: "Não acreditei quando o Rafael me disse que meu divórcio sairia em 1 dia. E saiu! Tudo online, super profissional e sem estresse. Recomendo demais!",
                rating: 5
              },
              {
                name: "Carlos M.",
                age: 41,
                situation: "Divórcio Judicial Amigável",
                text: "Mesmo com filhos menores, o processo foi muito mais rápido do que eu imaginava. O Rafael foi super atencioso e explicou tudo com clareza. Valeu muito a pena.",
                rating: 5
              },
              {
                name: "Juliana P.",
                age: 38,
                situation: "Divórcio no Cartório",
                text: "Estava com medo de que fosse complicado, mas foi o contrário. Fiz tudo pelo celular, sem sair de casa. O atendimento foi humanizado e acolhedor. Muito obrigada!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}, {testimonial.age} anos</CardTitle>
                  <CardDescription>{testimonial.situation}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre o divórcio online
          </p>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                O divórcio online é seguro e tem validade jurídica?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim! O divórcio online tem total validade jurídica. Sou advogado registrado na OAB/RJ (227.191) e todo o processo segue rigorosamente a legislação brasileira. A assinatura por videoconferência é reconhecida legalmente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Preciso ir ao cartório ou ao fórum?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Não! Todo o processo é 100% online. Você não precisa sair de casa. Tudo é feito por WhatsApp, e-mail e videochamada. A assinatura é feita por videoconferência com o cartório.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Quanto tempo realmente demora?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                O divórcio no cartório pode ser finalizado em até 24 horas. Já o divórcio judicial amigável leva de 15 dias a 3 meses, dependendo da vara. Muito mais rápido que o litigioso, que pode levar anos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                E se meu cônjuge não concordar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                O divórcio amigável (cartório ou judicial) só é possível quando ambos estão de acordo. Se houver discordância, o processo será litigioso, que é mais demorado. Entre em contato para avaliarmos sua situação específica.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Tenho filhos menores, posso fazer online?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim! Se você tem filhos menores ou a mulher está grávida, o divórcio será judicial amigável (não pode ser no cartório). Mas ainda assim é 100% online e muito mais rápido que o litigioso.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                Como funciona o pagamento?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Você pode parcelar em até 12x no cartão de crédito ou pagar à vista no PIX com 15% de desconto. Os valores são: R$ 3.500 para divórcio no cartório e R$ 2.000 para divórcio judicial amigável.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">
                Vou ter acompanhamento durante todo o processo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim! Você terá contato direto comigo pelo WhatsApp durante todo o processo. Estarei disponível para tirar dúvidas e te atualizar sobre cada etapa. Atendimento humanizado e acolhedor.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Final + Formulário Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pronto Para Recomeçar?
              </h2>
              <p className="text-xl text-muted-foreground">
                Entre em contato agora e dê o primeiro passo para sua nova vida
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border-2 border-primary/20">
                <h3 className="text-2xl font-bold mb-4">Fale Comigo Agora</h3>
                <p className="text-muted-foreground mb-6">
                  Tire suas dúvidas e receba orientação gratuita pelo WhatsApp. Respondo rapidamente!
                </p>
                <WhatsAppButton 
                  message="Olá! Estou pronto(a) para iniciar meu divórcio. Vamos começar?"
                  size="lg"
                  className="w-full"
                >
                  Iniciar Conversa no WhatsApp
                </WhatsAppButton>
              </div>

              {/* Formulário Jotform */}
              <div className="bg-card p-8 rounded-lg border-2">
                <h3 className="text-2xl font-bold mb-4">Ou Preencha o Formulário</h3>
                <iframe
                  id="JotFormIFrame-253206150922044"
                  title="Contato - Divórcio em 1 Dia"
                  onLoad={() => window.parent.scrollTo(0,0)}
                  allowTransparency={true}
                  allow="geolocation; microphone; camera; fullscreen"
                  src="https://form.jotform.com/253206150922044"
                  frameBorder="0"
                  style={{
                    minWidth: '100%',
                    maxWidth: '100%',
                    height: '539px',
                    border: 'none'
                  }}
                  scrolling="no"
                >
                </iframe>
                <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
                <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-253206150922044']", "https://form.jotform.com/")</script>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-secondary text-white py-12">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-xl mb-4">Rafael Toledo</h3>
                <p className="text-white/80 text-sm">
                  Advogado especialista em Divórcio Online
                  <br />
                  OAB/RJ 227.191
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">Contato</h3>
                <p className="text-white/80 text-sm mb-2">
                  WhatsApp: (21) 99692-1402
                </p>
                <p className="text-white/80 text-sm">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Rio de Janeiro - RJ
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">Verificação</h3>
                <p className="text-white/80 text-sm mb-2">
                  <a href="https://www.confirmadv.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    ConfirmAdv →
                  </a>
                </p>
                <p className="text-white/80 text-sm">
                  <a href="https://cna.oab.org.br" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    CNA/OAB →
                  </a>
                </p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.41842621752!2d-43.59619682812499!3d-22.908333399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "0.5rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização - Rio de Janeiro"
              ></iframe>
            </div>

            <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
              <p>© 2025 Rafael Toledo - Advogado. Todos os direitos reservados.</p>
              <p className="mt-2">Divórcio em 1 Dia - Rápido, Seguro e 100% Online</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
