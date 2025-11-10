'use client'

import { ArrowRight, Target, TrendingUp, Users, Zap, Calendar, Wallet, Trophy, Star, CheckCircle, BookOpen, Brain, Dumbbell, DollarSign, Crown, Sparkles, Award, MessageCircle, ThumbsUp, UserCheck, Bot, HelpCircle, Shield, Globe, Gem, Diamond, Copy, Gift, Send, Eye, CreditCard, Play, Lock, Video, Music, User, Mail, Key, Clock, Award as AwardIcon, ChevronRight, Home, Settings, LogOut, Menu, X, Plus, Edit3, Save, Trash2, Bell, Search, Filter, Download, Upload, Share2, Heart, Bookmark, Flag, MoreHorizontal, Utensils, Activity, Droplets, Zap as Lightning, BarChart3, PieChart, LineChart, Calculator, FileText, Printer, Camera, Phone, MapPin, Medal, Flame, Coffee, Apple, Beef, Wheat, Fish, Milk, Candy, Salad, ShoppingCart, TrendingDown, Package, Megaphone, Lightbulb, Palette, Briefcase, Monitor, Smartphone, Headphones, Mic, Languages } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function EliteLifePresentation() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [showCouponGenerator, setShowCouponGenerator] = useState(false)
  const [generatedCoupon, setGeneratedCoupon] = useState('')
  const [couponUsed, setCouponUsed] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')
  const [showBasicAgenda, setShowBasicAgenda] = useState(false)
  const [showCourses, setShowCourses] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [showSuccessVideo, setShowSuccessVideo] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userProfile, setUserProfile] = useState<any>(null)
  const [currentView, setCurrentView] = useState('home')
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showNutritionTracker, setShowNutritionTracker] = useState(false)
  const [showEcommerceHub, setShowEcommerceHub] = useState(false)
  const [showInfluencerHub, setShowInfluencerHub] = useState(false)
  const [showCommunityChat, setShowCommunityChat] = useState(false)
  const [showRanking, setShowRanking] = useState(false)
  const [showPrintableWorksheets, setShowPrintableWorksheets] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('pt')
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const [dailyNutrition, setDailyNutrition] = useState({
    water: 0,
    calories: 0,
    protein: 0,
    carbs: 0,
    fiber: 0,
    exercise: 0
  })
  const [nutritionGoals, setNutritionGoals] = useState({
    water: 2500, // ml
    calories: 2000,
    protein: 150, // g
    carbs: 250, // g
    fiber: 25, // g
    exercise: 60 // minutes
  })
  const [weeklyReport, setWeeklyReport] = useState('')
  const [agendaItems, setAgendaItems] = useState([
    { id: 1, time: '06:00', task: 'Despertar Elite + Hidratação (Recomendado)', completed: false, editable: true, recommended: true },
    { id: 2, time: '06:15', task: 'Treino HIIT (15 min) (Recomendado)', completed: false, editable: true, recommended: true },
    { id: 3, time: '07:00', task: 'Café + Leitura Financeira (Recomendado)', completed: false, editable: true, recommended: true },
    { id: 4, time: '12:00', task: 'Almoço Saudável (Recomendado)', completed: false, editable: true, recommended: true },
    { id: 5, time: '18:00', task: 'Revisão de Metas (Recomendado)', completed: false, editable: true, recommended: true },
    { id: 6, time: '21:00', task: 'Planejamento do Amanhã (Recomendado)', completed: false, editable: true, recommended: true }
  ])
  const [editingItem, setEditingItem] = useState<number | null>(null)
  const [newTask, setNewTask] = useState('')
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', message: 'Olá! Sou seu Coach IA Elite avançado. Conheço toda a plataforma EliteLife, posso te ajudar com cursos, agenda, investimentos, treinos, nutrição, e-commerce, marketing de influencer e muito mais. Como posso transformar sua vida hoje?' }
  ])
  const [chatInput, setChatInput] = useState('')
  const [communityMessages, setCommunityMessages] = useState([
    { user: 'Carlos M.', message: 'Perdi 15kg em 2 meses seguindo a trilha Corpo de Elite! 💪', time: '2h', likes: 24, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
    { user: 'Ana Silva', message: 'Consegui meu primeiro R$ 10k como afiliada EliteLife! O sistema funciona mesmo! 🚀💰', time: '4h', likes: 18, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face' },
    { user: 'Pedro L.', message: 'Saí das dívidas e já tenho R$ 50k investidos. Trilha Fortuna Digital é incrível! 📈', time: '6h', likes: 31, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' },
    { user: 'Marina Costa', message: 'Minha rotina mudou 100%! Acordo 5h da manhã motivada todos os dias 🌅', time: '8h', likes: 12, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face' }
  ])
  const [affiliateRanking] = useState([
    { name: 'Ricardo Santos', earnings: 'R$ 45.230', sales: 89, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face', badge: 'Diamond Elite' },
    { name: 'Juliana Lima', earnings: 'R$ 38.950', sales: 76, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face', badge: 'Gold Elite' },
    { name: 'Fernando Costa', earnings: 'R$ 32.180', sales: 64, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face', badge: 'Gold Elite' },
    { user: 'Carla Mendes', earnings: 'R$ 28.760', sales: 58, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face', badge: 'Silver Elite' },
    { name: 'Bruno Silva', earnings: 'R$ 24.340', sales: 47, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face', badge: 'Silver Elite' }
  ])

  const languages = {
    pt: {
      title: 'EliteLife',
      subtitle: 'A plataforma exclusiva que transforma pessoas comuns em milionários saudáveis',
      freeTest: 'TESTE GRÁTIS AGORA',
      completeQuiz: 'FAZER QUIZ COMPLETO',
      courses: 'Cursos',
      agenda: 'Agenda',
      nutrition: 'Nutrição',
      wallet: 'Carteira',
      home: 'Início'
    },
    en: {
      title: 'EliteLife',
      subtitle: 'The exclusive platform that transforms ordinary people into healthy millionaires',
      freeTest: 'FREE TEST NOW',
      completeQuiz: 'TAKE COMPLETE QUIZ',
      courses: 'Courses',
      agenda: 'Schedule',
      nutrition: 'Nutrition',
      wallet: 'Wallet',
      home: 'Home'
    },
    es: {
      title: 'EliteLife',
      subtitle: 'La plataforma exclusiva que transforma personas comunes en millonarios saludables',
      freeTest: 'PRUEBA GRATIS AHORA',
      completeQuiz: 'HACER QUIZ COMPLETO',
      courses: 'Cursos',
      agenda: 'Agenda',
      nutrition: 'Nutrición',
      wallet: 'Cartera',
      home: 'Inicio'
    },
    fr: {
      title: 'EliteLife',
      subtitle: 'La plateforme exclusive qui transforme les gens ordinaires en millionnaires en bonne santé',
      freeTest: 'TEST GRATUIT MAINTENANT',
      completeQuiz: 'FAIRE LE QUIZ COMPLET',
      courses: 'Cours',
      agenda: 'Agenda',
      nutrition: 'Nutrition',
      wallet: 'Portefeuille',
      home: 'Accueil'
    }
  }

  const t = languages[currentLanguage as keyof typeof languages]

  const quizQuestions = [
    {
      id: 'personal_info',
      question: 'Vamos começar com suas informações básicas:',
      type: 'form',
      fields: [
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'password', label: 'Crie uma senha', type: 'password', required: true },
        { name: 'phone', label: 'Telefone (WhatsApp)', type: 'tel', required: true },
        { name: 'age', label: 'Idade', type: 'number', required: true },
        { name: 'weight', label: 'Peso (kg)', type: 'number', required: true },
        { name: 'height', label: 'Altura (cm)', type: 'number', required: true },
        { name: 'income', label: 'Renda mensal (R$)', type: 'number', required: true },
        { name: 'newsletter', label: 'Desejo receber emails e novidades', type: 'checkbox', required: false }
      ]
    },
    {
      id: 'investment_experience',
      question: 'Você já investe ou tem experiência com investimentos?',
      options: [
        { value: 'nunca', label: 'Nunca investi, sou iniciante total' },
        { value: 'basico', label: 'Tenho poupança e alguns CDBs' },
        { value: 'intermediario', label: 'Invisto em ações e fundos' },
        { value: 'avancado', label: 'Tenho carteira diversificada e experiência' }
      ]
    },
    {
      id: 'fitness_level',
      question: 'Qual seu nível atual de condicionamento físico?',
      options: [
        { value: 'sedentario', label: 'Sedentário - Pouco ou nenhum exercício' },
        { value: 'basico', label: 'Básico - Exercito-me ocasionalmente' },
        { value: 'intermediario', label: 'Intermediário - Exercito-me regularmente' },
        { value: 'avancado', label: 'Avançado - Atleta ou muito ativo' }
      ]
    },
    {
      id: 'nutrition_goals',
      question: 'Quais são seus objetivos nutricionais?',
      options: [
        { value: 'perder_peso', label: 'Perder peso e queimar gordura' },
        { value: 'ganhar_massa', label: 'Ganhar massa muscular' },
        { value: 'manter_saude', label: 'Manter saúde e energia' },
        { value: 'performance', label: 'Melhorar performance atlética' }
      ]
    },
    {
      id: 'financial_goal',
      question: 'Qual seu principal objetivo financeiro?',
      options: [
        { value: 'organizar', label: 'Organizar minhas finanças' },
        { value: 'poupar', label: 'Conseguir poupar dinheiro' },
        { value: 'investir', label: 'Aprender a investir' },
        { value: 'renda_extra', label: 'Criar renda extra/passiva' }
      ]
    },
    {
      id: 'ecommerce_interest',
      question: 'Tem interesse em vender online/e-commerce?',
      options: [
        { value: 'muito_interesse', label: 'Muito interesse - quero começar agora' },
        { value: 'algum_interesse', label: 'Tenho interesse mas não sei por onde começar' },
        { value: 'pouco_interesse', label: 'Pouco interesse no momento' },
        { value: 'nenhum_interesse', label: 'Não tenho interesse' }
      ]
    },
    {
      id: 'content_creation',
      question: 'Você cria conteúdo ou tem interesse em ser influencer?',
      options: [
        { value: 'ja_crio', label: 'Já crio conteúdo e tenho seguidores' },
        { value: 'quero_comecar', label: 'Quero começar a criar conteúdo' },
        { value: 'interesse_moderado', label: 'Tenho interesse moderado' },
        { value: 'nao_interesse', label: 'Não tenho interesse' }
      ]
    },
    {
      id: 'time_available',
      question: 'Quanto tempo você pode dedicar por dia?',
      options: [
        { value: '15min', label: '15-30 minutos' },
        { value: '30min', label: '30-60 minutos' },
        { value: '1h', label: '1-2 horas' },
        { value: '2h', label: 'Mais de 2 horas' }
      ]
    },
    {
      id: 'main_challenge',
      question: 'Qual seu maior desafio atual?',
      options: [
        { value: 'disciplina', label: 'Falta de disciplina/constância' },
        { value: 'conhecimento', label: 'Falta de conhecimento específico' },
        { value: 'tempo', label: 'Falta de tempo' },
        { value: 'motivacao', label: 'Falta de motivação' }
      ]
    },
    {
      id: 'lifestyle_goals',
      question: 'Quais são seus objetivos de estilo de vida?',
      options: [
        { value: 'saude', label: 'Melhorar saúde e disposição' },
        { value: 'corpo', label: 'Transformar o corpo' },
        { value: 'produtividade', label: 'Ser mais produtivo' },
        { value: 'liberdade', label: 'Ter liberdade financeira' }
      ]
    },
    {
      id: 'motivation_level',
      question: 'Como você se descreveria em relação à motivação?',
      options: [
        { value: 'baixa', label: 'Preciso de muito estímulo externo' },
        { value: 'media', label: 'Às vezes me motivo, às vezes não' },
        { value: 'alta', label: 'Sou bem motivado na maioria das vezes' },
        { value: 'extrema', label: 'Sou extremamente motivado e disciplinado' }
      ]
    },
    {
      id: 'learning_style',
      question: 'Como você prefere aprender?',
      options: [
        { value: 'videos', label: 'Vídeos e conteúdo visual' },
        { value: 'leitura', label: 'Leitura e textos detalhados' },
        { value: 'pratica', label: 'Prática e exercícios' },
        { value: 'mentoria', label: 'Mentoria e acompanhamento pessoal' }
      ]
    },
    {
      id: 'success_definition',
      question: 'Para você, sucesso significa:',
      options: [
        { value: 'saude', label: 'Ter saúde e bem-estar' },
        { value: 'dinheiro', label: 'Ter liberdade financeira' },
        { value: 'equilibrio', label: 'Ter equilíbrio em todas as áreas' },
        { value: 'impacto', label: 'Fazer diferença na vida das pessoas' }
      ]
    }
  ]

  // Expandir para 40 cursos com trilhas diversificadas
  const courses = [
    // Cursos Originais (9)
    {
      id: 1,
      title: 'Corpo de Elite - Transformação Física Acelerada',
      description: 'Baseado em estudos de Harvard Medical School, Mayo Clinic e Johns Hopkins',
      duration: '21 dias',
      modules: 15,
      level: 'Iniciante a Avançado',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      locked: false,
      category: 'Fitness',
      instructor: 'Dr. Marcus Silva',
      rating: 4.9,
      students: 12500,
      preview: 'Vídeo de abertura: "Revolução Corporal Elite" - Transformação total em 21 dias',
      bookRecommendations: ['Corpo de Elite - Manual Completo', 'Nutrição para Atletas', 'Psicologia do Fitness']
    },
    {
      id: 2,
      title: 'Mente Milionária - Mentalidade de Sucesso',
      description: 'Baseado em Stanford Psychology, MIT Behavioral Economics e Carnegie Mellon',
      duration: '30 dias',
      modules: 20,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      locked: true,
      category: 'Mindset',
      instructor: 'Dra. Ana Carolina',
      rating: 4.8,
      students: 18200,
      preview: 'Vídeo de abertura: "Desperte o Milionário Interior" - Reprogramação mental completa',
      bookRecommendations: ['Pai Rico Pai Pobre', 'O Poder do Subconsciente', 'Mindset Carol Dweck']
    },
    {
      id: 3,
      title: 'Fortuna Digital - Estratégias de Investimento',
      description: 'Baseado em Warren Buffett Institute, Goldman Sachs Research e Wharton School',
      duration: '45 dias',
      modules: 25,
      level: 'Intermediário',
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
      locked: true,
      category: 'Finanças',
      instructor: 'Prof. Roberto Lima',
      rating: 4.9,
      students: 9800,
      preview: 'Vídeo de abertura: "Império Financeiro Digital" - Do zero ao primeiro milhão',
      bookRecommendations: ['O Investidor Inteligente', 'Ações Comuns Lucros Extraordinários', 'A Lógica do Cisne Negro']
    },
    {
      id: 4,
      title: 'Networking Elite - Conexões de Alto Valor',
      description: 'Baseado em estudos de Wharton Business School e London Business School',
      duration: '14 dias',
      modules: 10,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      locked: true,
      category: 'Networking',
      instructor: 'Carlos Mendes',
      rating: 4.7,
      students: 7500,
      preview: 'Vídeo de abertura: "Rede de Ouro" - Conexões que transformam vidas',
      bookRecommendations: ['Como Fazer Amigos e Influenciar Pessoas', 'Never Eat Alone', 'The Tipping Point']
    },
    {
      id: 5,
      title: 'Produtividade Máxima - Otimização Total',
      description: 'Baseado em estudos de Cal Newport, Tim Ferriss e Tony Robbins',
      duration: '21 dias',
      modules: 12,
      level: 'Iniciante',
      thumbnail: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
      locked: true,
      category: 'Produtividade',
      instructor: 'Marina Santos',
      rating: 4.8,
      students: 15600,
      preview: 'Vídeo de abertura: "Máquina de Resultados" - 10x mais produtivo',
      bookRecommendations: ['Deep Work', 'A Semana de 4 Horas', 'Atomic Habits']
    },
    {
      id: 6,
      title: 'Liderança Executiva - Comando de Elite',
      description: 'Baseado em Harvard Business School, McKinsey Institute e Stanford GSB',
      duration: '30 dias',
      modules: 18,
      level: 'Avançado',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      locked: true,
      category: 'Liderança',
      instructor: 'Dr. Fernando Costa',
      rating: 4.9,
      students: 6200,
      preview: 'Vídeo de abertura: "Líder Visionário" - Comando absoluto de equipes',
      bookRecommendations: ['Liderança', 'Good to Great', 'The 7 Habits of Highly Effective People']
    },
    {
      id: 7,
      title: 'E-commerce Master - Império Digital',
      description: 'Baseado em Amazon Seller University, Shopify Academy e Google Commerce',
      duration: '60 dias',
      modules: 35,
      level: 'Iniciante a Avançado',
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      locked: true,
      category: 'E-commerce',
      instructor: 'Prof. Diego Martins',
      rating: 4.9,
      students: 8900,
      preview: 'Vídeo de abertura: "Império E-commerce" - Do zero aos R$ 100k/mês',
      bookRecommendations: ['E-commerce do Zero', 'Dropshipping Success', 'Amazon FBA Bible']
    },
    {
      id: 8,
      title: 'Influencer Elite - Viral Marketing',
      description: 'Baseado em estratégias de MrBeast, Gary Vaynerchuk e Neil Patel',
      duration: '30 dias',
      modules: 22,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      locked: true,
      category: 'Marketing',
      instructor: 'Influencer Sarah Costa',
      rating: 4.8,
      students: 11200,
      preview: 'Vídeo de abertura: "Viral Revolution" - Milhões de views garantidos',
      bookRecommendations: ['Crush It!', 'Jab, Jab, Jab, Right Hook', 'Platform']
    },
    {
      id: 9,
      title: 'Nutrição Elite - Alimentação Inteligente',
      description: 'Baseado em Harvard Nutrition, Mayo Clinic e American Dietetic Association',
      duration: '28 dias',
      modules: 16,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop',
      locked: true,
      category: 'Nutrição',
      instructor: 'Dra. Nutricionista Carla Reis',
      rating: 4.9,
      students: 14300,
      preview: 'Vídeo de abertura: "Combustível Elite" - Alimentação para campeões',
      bookRecommendations: ['Como Não Morrer', 'The China Study', 'Nutrição Comportamental']
    },
    // Novos 31 cursos para completar 40
    {
      id: 10,
      title: 'Criptomoedas Elite - Revolução Digital',
      description: 'Baseado em MIT Blockchain Lab e Stanford Crypto Research',
      duration: '35 dias',
      modules: 20,
      level: 'Intermediário',
      thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop',
      locked: true,
      category: 'Cripto',
      instructor: 'Prof. Bitcoin Master',
      rating: 4.7,
      students: 8500,
      preview: 'Vídeo de abertura: "Revolução Crypto Elite" - Dominando o futuro digital',
      bookRecommendations: ['Mastering Bitcoin', 'The Bitcoin Standard', 'Blockchain Revolution']
    },
    {
      id: 11,
      title: 'Oratória de Impacto - Comunicação Elite',
      description: 'Baseado em TED Talks methodology e Harvard Communication',
      duration: '25 dias',
      modules: 15,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop',
      locked: true,
      category: 'Comunicação',
      instructor: 'Speaker Elite João',
      rating: 4.8,
      students: 9200,
      preview: 'Vídeo de abertura: "Voz que Transforma" - Comunicação magnética',
      bookRecommendations: ['Talk Like TED', 'Made to Stick', 'The Presentation Secrets of Steve Jobs']
    },
    {
      id: 12,
      title: 'Relacionamentos Elite - Inteligência Emocional',
      description: 'Baseado em Yale Emotional Intelligence e Harvard Psychology',
      duration: '30 dias',
      modules: 18,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
      locked: true,
      category: 'Relacionamentos',
      instructor: 'Dra. Amor Elite',
      rating: 4.9,
      students: 12800,
      preview: 'Vídeo de abertura: "Conexões Profundas" - Relacionamentos transformadores',
      bookRecommendations: ['Inteligência Emocional', 'Os 5 Linguagens do Amor', 'Attached']
    },
    {
      id: 13,
      title: 'Vendas Elite - Persuasão Magnética',
      description: 'Baseado em Cialdini Psychology e Sandler Sales Institute',
      duration: '40 dias',
      modules: 25,
      level: 'Intermediário',
      thumbnail: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop',
      locked: true,
      category: 'Vendas',
      instructor: 'Master Vendedor Pro',
      rating: 4.8,
      students: 10500,
      preview: 'Vídeo de abertura: "Vendedor Magnético" - Persuasão irresistível',
      bookRecommendations: ['As Armas da Persuasão', 'SPIN Selling', 'The Psychology of Selling']
    },
    {
      id: 14,
      title: 'Yoga Elite - Flexibilidade Total',
      description: 'Baseado em Iyengar Institute e Ashtanga Yoga Research',
      duration: '60 dias',
      modules: 30,
      level: 'Iniciante a Avançado',
      thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
      locked: true,
      category: 'Bem-estar',
      instructor: 'Yogi Master Elite',
      rating: 4.9,
      students: 7800,
      preview: 'Vídeo de abertura: "Flexibilidade Suprema" - Corpo e mente em harmonia',
      bookRecommendations: ['Light on Yoga', 'The Science of Yoga', 'Yoga Body']
    },
    {
      id: 15,
      title: 'Meditação Elite - Mente Zen',
      description: 'Baseado em Mindfulness Research e Buddhist Psychology',
      duration: '21 dias',
      modules: 21,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      locked: true,
      category: 'Mindfulness',
      instructor: 'Mestre Zen Elite',
      rating: 4.8,
      students: 15200,
      preview: 'Vídeo de abertura: "Paz Interior Elite" - Meditação transformadora',
      bookRecommendations: ['Wherever You Go, There You Are', 'The Power of Now', '10% Happier']
    },
    {
      id: 16,
      title: 'Fotografia Elite - Arte Visual',
      description: 'Baseado em National Geographic e Magnum Photos techniques',
      duration: '45 dias',
      modules: 28,
      level: 'Iniciante a Avançado',
      thumbnail: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
      locked: true,
      category: 'Arte',
      instructor: 'Fotógrafo Elite Pro',
      rating: 4.7,
      students: 6500,
      preview: 'Vídeo de abertura: "Olhar Elite" - Capturando momentos únicos',
      bookRecommendations: ['Understanding Exposure', 'The Art of Photography', 'Magnum Contact Sheets']
    },
    {
      id: 17,
      title: 'Culinária Elite - Chef Profissional',
      description: 'Baseado em Le Cordon Bleu e Culinary Institute of America',
      duration: '50 dias',
      modules: 35,
      level: 'Iniciante a Avançado',
      thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      locked: true,
      category: 'Culinária',
      instructor: 'Chef Elite Master',
      rating: 4.9,
      students: 8900,
      preview: 'Vídeo de abertura: "Sabores Elite" - Culinária de alto nível',
      bookRecommendations: ['On Food and Cooking', 'The Professional Chef', 'Salt Fat Acid Heat']
    },
    {
      id: 18,
      title: 'Design Elite - Criatividade Visual',
      description: 'Baseado em IDEO Design Thinking e Bauhaus principles',
      duration: '40 dias',
      modules: 24,
      level: 'Intermediário',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      locked: true,
      category: 'Design',
      instructor: 'Designer Elite Pro',
      rating: 4.8,
      students: 7200,
      preview: 'Vídeo de abertura: "Visão Elite" - Design que impacta',
      bookRecommendations: ['The Design of Everyday Things', 'Thinking with Type', 'Universal Principles of Design']
    },
    {
      id: 19,
      title: 'Programação Elite - Código Profissional',
      description: 'Baseado em MIT Computer Science e Google Engineering',
      duration: '90 dias',
      modules: 45,
      level: 'Iniciante a Avançado',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      locked: true,
      category: 'Tecnologia',
      instructor: 'Dev Elite Master',
      rating: 4.9,
      students: 11500,
      preview: 'Vídeo de abertura: "Código Elite" - Programação de alto nível',
      bookRecommendations: ['Clean Code', 'The Pragmatic Programmer', 'Design Patterns']
    },
    {
      id: 20,
      title: 'Música Elite - Composição Profissional',
      description: 'Baseado em Berklee College of Music e Juilliard School',
      duration: '60 dias',
      modules: 30,
      level: 'Intermediário',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      locked: true,
      category: 'Música',
      instructor: 'Maestro Elite',
      rating: 4.8,
      students: 5800,
      preview: 'Vídeo de abertura: "Harmonia Elite" - Música que emociona',
      bookRecommendations: ['How Music Works', 'The Jazz Theory Book', 'Composing Music']
    },
    {
      id: 21,
      title: 'Escrita Elite - Storytelling Magnético',
      description: 'Baseado em Columbia Journalism e Harvard Writing',
      duration: '35 dias',
      modules: 20,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
      locked: true,
      category: 'Escrita',
      instructor: 'Escritor Elite Pro',
      rating: 4.7,
      students: 9800,
      preview: 'Vídeo de abertura: "Palavras Elite" - Escrita que transforma',
      bookRecommendations: ['On Writing', 'Bird by Bird', 'The Elements of Style']
    },
    {
      id: 22,
      title: 'Imóveis Elite - Investimento Inteligente',
      description: 'Baseado em Real Estate Investment Trusts e Property Analysis',
      duration: '45 dias',
      modules: 25,
      level: 'Intermediário',
      thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
      locked: true,
      category: 'Imóveis',
      instructor: 'Corretor Elite Master',
      rating: 4.8,
      students: 6700,
      preview: 'Vídeo de abertura: "Patrimônio Elite" - Riqueza através de imóveis',
      bookRecommendations: ['Rich Dad Poor Dad', 'The Millionaire Real Estate Investor', 'Real Estate Investing']
    },
    {
      id: 23,
      title: 'Automação Elite - Sistemas Inteligentes',
      description: 'Baseado em MIT Automation Lab e Industry 4.0 principles',
      duration: '40 dias',
      modules: 22,
      level: 'Avançado',
      thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
      locked: true,
      category: 'Automação',
      instructor: 'Automation Elite Pro',
      rating: 4.9,
      students: 4200,
      preview: 'Vídeo de abertura: "Futuro Elite" - Automação que liberta',
      bookRecommendations: ['The Second Machine Age', 'Automate This', 'The Fourth Industrial Revolution']
    },
    {
      id: 24,
      title: 'Psicologia Elite - Mente Humana',
      description: 'Baseado em Stanford Psychology e Harvard Behavioral Science',
      duration: '50 dias',
      modules: 30,
      level: 'Intermediário',
      thumbnail: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      locked: true,
      category: 'Psicologia',
      instructor: 'Psicólogo Elite PhD',
      rating: 4.8,
      students: 8900,
      preview: 'Vídeo de abertura: "Mente Elite" - Compreendendo o comportamento',
      bookRecommendations: ['Thinking, Fast and Slow', 'Influence', 'The Social Animal']
    },
    {
      id: 25,
      title: 'Idiomas Elite - Fluência Acelerada',
      description: 'Baseado em Polyglot Institute e Language Acquisition Research',
      duration: '120 dias',
      modules: 60,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
      locked: true,
      category: 'Idiomas',
      instructor: 'Poliglota Elite',
      rating: 4.7,
      students: 12300,
      preview: 'Vídeo de abertura: "Fluência Elite" - Dominando idiomas rapidamente',
      bookRecommendations: ['Fluent Forever', 'The Polyglot Project', 'How to Learn Any Language']
    },
    {
      id: 26,
      title: 'Viagem Elite - Nomadismo Digital',
      description: 'Baseado em Digital Nomad Community e Travel Hacking',
      duration: '30 dias',
      modules: 18,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
      locked: true,
      category: 'Lifestyle',
      instructor: 'Nômade Elite',
      rating: 4.8,
      students: 7500,
      preview: 'Vídeo de abertura: "Liberdade Elite" - Trabalhando de qualquer lugar',
      bookRecommendations: ['The 4-Hour Workweek', 'Remote', 'Digital Nomad Handbook']
    },
    {
      id: 27,
      title: 'Sustentabilidade Elite - Futuro Verde',
      description: 'Baseado em MIT Sustainability Lab e UN Environmental Goals',
      duration: '35 dias',
      modules: 20,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      locked: true,
      category: 'Sustentabilidade',
      instructor: 'Eco Elite Master',
      rating: 4.9,
      students: 5600,
      preview: 'Vídeo de abertura: "Planeta Elite" - Sustentabilidade lucrativa',
      bookRecommendations: ['Cradle to Cradle', 'The Sixth Extinction', 'Biomimicry']
    },
    {
      id: 28,
      title: 'Moda Elite - Estilo Pessoal',
      description: 'Baseado em Parsons School of Design e Fashion Institute',
      duration: '25 dias',
      modules: 15,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
      locked: true,
      category: 'Moda',
      instructor: 'Stylist Elite',
      rating: 4.7,
      students: 8200,
      preview: 'Vídeo de abertura: "Estilo Elite" - Imagem que impacta',
      bookRecommendations: ['The Little Black Book of Style', 'Style and the Man', 'Dress for Success']
    },
    {
      id: 29,
      title: 'Esportes Elite - Performance Máxima',
      description: 'Baseado em Olympic Training Center e Sports Science Institute',
      duration: '60 dias',
      modules: 35,
      level: 'Intermediário a Avançado',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      locked: true,
      category: 'Esportes',
      instructor: 'Atleta Elite Pro',
      rating: 4.9,
      students: 9500,
      preview: 'Vídeo de abertura: "Campeão Elite" - Performance de atleta',
      bookRecommendations: ['Peak Performance', 'The Champion\'s Mind', 'Mindset of a Champion']
    },
    {
      id: 30,
      title: 'Parentalidade Elite - Educação Transformadora',
      description: 'Baseado em Child Development Research e Montessori Method',
      duration: '40 dias',
      modules: 24,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=400&h=300&fit=crop',
      locked: true,
      category: 'Família',
      instructor: 'Educador Elite',
      rating: 4.8,
      students: 11200,
      preview: 'Vídeo de abertura: "Filhos Elite" - Educação que transforma',
      bookRecommendations: ['The Whole-Brain Child', 'How to Talk So Kids Will Listen', 'Montessori Method']
    },
    {
      id: 31,
      title: 'Envelhecimento Elite - Longevidade Ativa',
      description: 'Baseado em Harvard Longevity Research e Blue Zones studies',
      duration: '45 dias',
      modules: 25,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      locked: true,
      category: 'Longevidade',
      instructor: 'Dr. Longevidade Elite',
      rating: 4.9,
      students: 6800,
      preview: 'Vídeo de abertura: "Juventude Elite" - Envelhecendo com saúde',
      bookRecommendations: ['The Blue Zones', 'Lifespan', 'Healthy Aging']
    },
    {
      id: 32,
      title: 'Terapia Elite - Bem-estar Mental',
      description: 'Baseado em Cognitive Behavioral Therapy e Positive Psychology',
      duration: '35 dias',
      modules: 20,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
      locked: true,
      category: 'Terapia',
      instructor: 'Terapeuta Elite',
      rating: 4.8,
      students: 7900,
      preview: 'Vídeo de abertura: "Cura Elite" - Saúde mental em primeiro lugar',
      bookRecommendations: ['Feeling Good', 'The Happiness Hypothesis', 'Man\'s Search for Meaning']
    },
    {
      id: 33,
      title: 'Energia Elite - Vitalidade Total',
      description: 'Baseado em Mitochondrial Research e Energy Medicine',
      duration: '30 dias',
      modules: 18,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      locked: true,
      category: 'Energia',
      instructor: 'Energy Elite Master',
      rating: 4.7,
      students: 8700,
      preview: 'Vídeo de abertura: "Energia Elite" - Vitalidade sem limites',
      bookRecommendations: ['The Energy Bus', 'Power vs. Force', 'The Body Electric']
    },
    {
      id: 34,
      title: 'Sono Elite - Recuperação Profunda',
      description: 'Baseado em Sleep Research Institute e Circadian Biology',
      duration: '21 dias',
      modules: 14,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=300&fit=crop',
      locked: true,
      category: 'Sono',
      instructor: 'Sleep Elite Doctor',
      rating: 4.9,
      students: 10200,
      preview: 'Vídeo de abertura: "Sono Elite" - Recuperação que transforma',
      bookRecommendations: ['Why We Sleep', 'The Sleep Solution', 'Sleep Smarter']
    },
    {
      id: 35,
      title: 'Memória Elite - Mente Fotográfica',
      description: 'Baseado em Memory Palace techniques e Neuroscience Research',
      duration: '28 dias',
      modules: 16,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      locked: true,
      category: 'Memória',
      instructor: 'Memory Elite Champion',
      rating: 4.8,
      students: 9100,
      preview: 'Vídeo de abertura: "Memória Elite" - Nunca mais esqueça',
      bookRecommendations: ['Moonwalking with Einstein', 'The Art of Memory', 'Peak']
    },
    {
      id: 36,
      title: 'Criatividade Elite - Inovação Constante',
      description: 'Baseado em IDEO Innovation Lab e Creative Thinking Research',
      duration: '35 dias',
      modules: 20,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      locked: true,
      category: 'Criatividade',
      instructor: 'Creative Elite Genius',
      rating: 4.7,
      students: 7400,
      preview: 'Vídeo de abertura: "Criatividade Elite" - Inovação sem limites',
      bookRecommendations: ['The Creative Act', 'Big Magic', 'Steal Like an Artist']
    },
    {
      id: 37,
      title: 'Negociação Elite - Acordos Vencedores',
      description: 'Baseado em Harvard Negotiation Project e FBI Negotiation',
      duration: '30 dias',
      modules: 18,
      level: 'Intermediário',
      thumbnail: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop',
      locked: true,
      category: 'Negociação',
      instructor: 'Negotiator Elite Pro',
      rating: 4.9,
      students: 6300,
      preview: 'Vídeo de abertura: "Negociação Elite" - Sempre saia ganhando',
      bookRecommendations: ['Getting to Yes', 'Never Split the Difference', 'The Art of the Deal']
    },
    {
      id: 38,
      title: 'Disciplina Elite - Autocontrole Total',
      description: 'Baseado em Willpower Research e Self-Control Studies',
      duration: '40 dias',
      modules: 22,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      locked: true,
      category: 'Disciplina',
      instructor: 'Discipline Elite Master',
      rating: 4.8,
      students: 11800,
      preview: 'Vídeo de abertura: "Disciplina Elite" - Autocontrole inquebrantável',
      bookRecommendations: ['Willpower', 'The Power of Habit', 'Discipline Equals Freedom']
    },
    {
      id: 39,
      title: 'Intuição Elite - Sexto Sentido',
      description: 'Baseado em Intuitive Decision Making e Neuroscience of Gut Feelings',
      duration: '25 dias',
      modules: 15,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      locked: true,
      category: 'Intuição',
      instructor: 'Intuition Elite Guide',
      rating: 4.7,
      students: 5900,
      preview: 'Vídeo de abertura: "Intuição Elite" - Confie no seu instinto',
      bookRecommendations: ['Blink', 'The Gift of Fear', 'Intuition']
    },
    {
      id: 40,
      title: 'Propósito Elite - Missão de Vida',
      description: 'Baseado em Existential Psychology e Purpose-Driven Life Research',
      duration: '50 dias',
      modules: 30,
      level: 'Todos os níveis',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      locked: true,
      category: 'Propósito',
      instructor: 'Purpose Elite Coach',
      rating: 4.9,
      students: 8600,
      preview: 'Vídeo de abertura: "Propósito Elite" - Encontre sua missão',
      bookRecommendations: ['Man\'s Search for Meaning', 'The Purpose Driven Life', 'Drive']
    }
  ]

  const handleQuizStart = () => {
    setShowQuiz(true)
    setCurrentQuestion(0)
    setAnswers({})
  }

  const handleFormSubmit = (formData: any) => {
    setAnswers(prev => ({ ...prev, personal_info: formData }))
    setUserProfile(formData)
    setCurrentQuestion(prev => prev + 1)
  }

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      // Quiz completo - fazer login automático
      setTimeout(() => {
        setIsLoggedIn(true)
        setShowQuiz(false)
        setShowWelcomeScreen(true)
      }, 500)
    }
  }

  const generateCoupon = () => {
    if (couponUsed) {
      alert('Você já gerou seu cupom! Cada afiliado pode gerar apenas 1 cupom.')
      return
    }
    
    const couponCode = `ELITE${Math.random().toString(36).substr(2, 6).toUpperCase()}`
    setGeneratedCoupon(couponCode)
    setCouponUsed(true)
  }

  const copyCoupon = () => {
    navigator.clipboard.writeText(generatedCoupon)
    alert('Cupom copiado! Compartilhe com seus contatos para eles ganharem 5% de desconto.')
  }

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName)
    setShowPreview(true)
  }

  const handleFreeTest = () => {
    // Ir direto para planos em vez de cursos
    setShowPreview(true)
    setSelectedPlan('Teste Grátis')
  }

  const handlePurchase = () => {
    setShowPreview(false)
    setShowPayment(true)
  }

  const handlePaymentComplete = () => {
    setShowPayment(false)
    setShowSuccessVideo(true)
    
    // Simular vídeo de sucesso
    setTimeout(() => {
      setShowSuccessVideo(false)
      setIsLoggedIn(true)
      setShowWelcomeScreen(true)
    }, 5000)
  }

  const sendChatMessage = () => {
    if (!chatInput.trim()) return
    
    const userMessage = chatInput
    setChatMessages(prev => [...prev, { type: 'user', message: userMessage }])
    setChatInput('')
    
    // IA avançada melhorada com conhecimento completo da plataforma
    setTimeout(() => {
      let aiResponse = ''
      const message = userMessage.toLowerCase()
      
      if (message.includes('e-commerce') || message.includes('vender online') || message.includes('mercado livre') || message.includes('amazon')) {
        aiResponse = 'Nossa trilha E-commerce Master ensina tudo sobre vendas online! Inclui: Mercado Livre (como ser Top Seller), Amazon (FBA e FBM), Shopee, Casas Bahia marketplace, tráfego pago (Google Ads, Facebook Ads), copywriting para vendas, logística e muito mais. Você aprende do zero aos R$ 100k/mês. Quer que eu te mostre o plano completo?'
      } else if (message.includes('influencer') || message.includes('viral') || message.includes('conteúdo') || message.includes('instagram') || message.includes('tiktok')) {
        aiResponse = 'Perfeito! Nossa trilha Influencer Elite + IA de conteúdo viral é revolucionária! A IA analisa trends atuais do seu nicho e gera um plano semanal completo com ideias de vídeos virais, hashtags, horários ideais para postar, scripts prontos e estratégias de engajamento. Já temos influencers que saíram de 1k para 100k+ seguidores em 90 dias! Quer ver como funciona?'
      } else if (message.includes('nutrição') || message.includes('dieta') || message.includes('calorias') || message.includes('peso') || message.includes('emagrecer')) {
        aiResponse = 'Nossa trilha Nutrição Elite + tracker inteligente é baseada nos melhores nutricionistas do mundo! O app calcula automaticamente suas necessidades de água, calorias, proteínas, carboidratos e fibras baseado no seu perfil. Você registra o que come e o sistema gera relatórios semanais profissionais com ajustes personalizados. Inclui planos de dieta para emagrecimento, ganho de massa e performance. Quer que eu calcule suas necessidades agora?'
      } else if (message.includes('agenda') || message.includes('calendário') || message.includes('rotina') || message.includes('lembrete')) {
        aiResponse = 'Sua agenda Elite é 100% editável e inteligente! Tem metas recomendadas baseadas em ciência (marcadas como "Recomendado") mas você pode personalizar tudo. O sistema envia lembretes 30 minutos antes de cada atividade via email. Você pode adicionar, editar e remover tarefas. As metas da semana são atualizadas automaticamente. Quer que eu te ajude a otimizar sua rotina?'
      } else if (message.includes('afiliado') || message.includes('ganhar') || message.includes('comissão') || message.includes('cupom')) {
        aiResponse = 'Como afiliado Elite, você ganha 20% na primeira venda e 15% recorrente! Pode gerar 1 cupom único de 5% (você não pode usar o seu próprio). Nosso novo bônus Elite é R$ 250 quando você vender R$ 3.500! Temos materiais profissionais, treinamento completo e saque via PIX. Nossos top afiliados faturam R$ 15k-50k/mês. O ranking mostra os melhores performers. Quer que eu te explique o sistema completo?'
      } else if (message.includes('curso') || message.includes('trilha') || message.includes('video')) {
        aiResponse = 'Temos 40 trilhas completas: Corpo de Elite, Mente Milionária, Fortuna Digital, Networking Elite, Produtividade Máxima, Liderança Executiva, E-commerce Master, Influencer Elite, Nutrição Elite, Criptomoedas, Oratória, Relacionamentos, Vendas, Yoga, Meditação, Fotografia, Culinária, Design, Programação, Música, Escrita, Imóveis, Automação, Psicologia, Idiomas, Viagem, Sustentabilidade, Moda, Esportes, Parentalidade, Longevidade, Terapia, Energia, Sono, Memória, Criatividade, Negociação, Disciplina, Intuição e Propósito. Cada curso tem vídeos de abertura gerados por IA com nossa logo e música inspiracional. Todos baseados nos melhores estudos do mundo (Harvard, Stanford, MIT, etc.). Qual área te interessa mais?'
      } else if (message.includes('comunidade') || message.includes('chat') || message.includes('outros')) {
        aiResponse = 'Nossa comunidade VIP tem chat integrado onde membros compartilham resultados reais! Você pode postar seu progresso, ver transformações de outros membros, trocar dicas e se motivar. Temos mais de 75.000 membros ativos. O ambiente é super positivo e inspirador. Quer que eu te mostre como acessar?'
      } else if (message.includes('planilha') || message.includes('imprimir') || message.includes('atividade') || message.includes('pdf')) {
        aiResponse = 'Temos planilhas exclusivas para imprimir sobre: Finanças (controle de gastos, metas de investimento), Saúde (acompanhamento médico, exames), Cuidado Pessoal (rotina de beleza, autocuidado) e Fitness (treinos, medidas corporais). Todas são profissionais e podem ser baixadas em PDF. Quer que eu te mostre todas disponíveis?'
      } else if (message.includes('ranking') || message.includes('medalha') || message.includes('nível')) {
        aiResponse = 'Temos um sistema de medalhas e ranking completo! Você ganha pontos por atividades concluídas e sobe de nível (Bronze, Prata, Ouro, Platina, Diamond Elite). O ranking de afiliados mostra os top performers em tempo real. Sua medalha atual aparece no seu perfil. Quanto mais ativo, maior seu status na comunidade!'
      } else if (message.includes('plano') || message.includes('preço') || message.includes('assinar')) {
        aiResponse = 'Temos 5 planos: Starter (GRÁTIS - acesso básico), PRO Elite (R$ 49,90/mês), Anual VIP (R$ 329,90/ano - economia de 4 meses), Influencer Hub (R$ 119,90/mês - com IA viral) e PRO Plus Elite (R$ 79,90/mês - tudo incluído). Todos com carteira inteligente e garantia de resultados. Qual se encaixa melhor no seu perfil?'
      } else if (message.includes('garantia') || message.includes('dinheiro de volta')) {
        aiResponse = 'Temos garantia de 30 dias ou dinheiro de volta! Se você não ver resultados reais seguindo nosso método, devolvemos 100% do valor. Nossa taxa de sucesso é de 98% - confiamos totalmente no sistema. Além disso, temos suporte 24/7 para garantir seu sucesso!'
      } else if (message.includes('básico') || message.includes('teste grátis') || message.includes('gratuito')) {
        aiResponse = 'No plano básico você tem: agenda editável com limitações (sem IA), acesso a 1 curso completo, controle de nutrição diário (água, calorias, etc), 1 relatório nutricional, suporte AI básico, e pode gerar 1 cupom de afiliado. É perfeito para conhecer a plataforma! Depois aparece a opção de assinar para ter acesso completo.'
      } else if (message.includes('idioma') || message.includes('língua') || message.includes('traduzir')) {
        aiResponse = 'O EliteLife está disponível em múltiplos idiomas: Português, Inglês, Espanhol e Francês! Você pode mudar o idioma a qualquer momento clicando no ícone de idiomas no menu. Todos os cursos, interface e conteúdos são traduzidos profissionalmente. Isso permite que pessoas do mundo todo tenham acesso à transformação Elite!'
      } else {
        aiResponse = 'Como seu Coach IA Elite avançado, posso te ajudar com: todas as 40 trilhas de cursos, agenda inteligente editável, sistema de nutrição com tracker, e-commerce completo (Mercado Livre, Amazon, etc.), marketing de influencer com IA viral, programa de afiliados, comunidade VIP, planilhas para imprimir, ranking e medalhas, carteira inteligente, suporte multilíngue e muito mais! Seja mais específico sobre o que precisa e vou te dar uma resposta detalhada!'
      }
      
      setChatMessages(prev => [...prev, { type: 'ai', message: aiResponse }])
    }, 1000)
  }

  const toggleTaskComplete = (id: number) => {
    setAgendaItems(prev => prev.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  const startEditing = (id: number) => {
    const item = agendaItems.find(item => item.id === id)
    if (item && item.editable) {
      setEditingItem(id)
      setNewTask(item.task)
    }
  }

  const saveEdit = (id: number) => {
    if (newTask.trim()) {
      setAgendaItems(prev => prev.map(item => 
        item.id === id ? { ...item, task: newTask, recommended: false } : item
      ))
    }
    setEditingItem(null)
    setNewTask('')
  }

  const addNewTask = () => {
    if (newTask.trim()) {
      const newId = Math.max(...agendaItems.map(item => item.id)) + 1
      setAgendaItems(prev => [...prev, {
        id: newId,
        time: '00:00',
        task: newTask,
        completed: false,
        editable: true,
        recommended: false
      }])
      setNewTask('')
    }
  }

  const deleteTask = (id: number) => {
    setAgendaItems(prev => prev.filter(item => item.id !== id))
  }

  const updateNutrition = (type: string, value: number) => {
    setDailyNutrition(prev => ({ ...prev, [type]: Math.max(0, prev[type as keyof typeof prev] + value) }))
  }

  const generateWeeklyReport = () => {
    const report = `
RELATÓRIO SEMANAL PROFISSIONAL - NUTRIÇÃO ELITE

📊 RESUMO DA SEMANA:
• Água: ${((dailyNutrition.water / nutritionGoals.water) * 100).toFixed(1)}% da meta
• Calorias: ${((dailyNutrition.calories / nutritionGoals.calories) * 100).toFixed(1)}% da meta
• Proteínas: ${((dailyNutrition.protein / nutritionGoals.protein) * 100).toFixed(1)}% da meta
• Carboidratos: ${((dailyNutrition.carbs / nutritionGoals.carbs) * 100).toFixed(1)}% da meta
• Fibras: ${((dailyNutrition.fiber / nutritionGoals.fiber) * 100).toFixed(1)}% da meta
• Exercícios: ${((dailyNutrition.exercise / nutritionGoals.exercise) * 100).toFixed(1)}% da meta

🎯 RECOMENDAÇÕES PARA PRÓXIMA SEMANA:
${dailyNutrition.water < nutritionGoals.water * 0.8 ? '• PRIORIDADE: Aumentar consumo de água - configure lembretes a cada 2h\n' : ''}
${dailyNutrition.protein < nutritionGoals.protein * 0.8 ? '• Incluir mais proteínas: ovos no café, whey pós-treino, carnes magras\n' : ''}
${dailyNutrition.fiber < nutritionGoals.fiber * 0.8 ? '• Aumentar fibras: frutas com casca, vegetais, aveia, chia\n' : ''}
${dailyNutrition.exercise < nutritionGoals.exercise * 0.8 ? '• Intensificar exercícios: 30min diários mínimo, incluir HIIT\n' : ''}

✅ PONTOS FORTES:
• Consistência no acompanhamento
• Uso correto do tracker Elite
• Comprometimento com as metas

📈 META PRÓXIMA SEMANA:
Atingir 90%+ em todas as categorias para otimização máxima dos resultados.

Relatório gerado pelo sistema EliteLife - Nutrição Inteligente
    `
    setWeeklyReport(report)
    alert('Relatório semanal gerado! Verifique a seção de relatórios.')
  }

  // Tela de Boas-vindas pós-pagamento
  if (showWelcomeScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-full mb-8 shadow-2xl shadow-yellow-500/50 animate-pulse">
              <Diamond className="w-16 h-16 text-black" />
            </div>
            <h1 className="text-6xl font-black text-white mb-4">
              Bem-vindo à Elite<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600">Life</span>!
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Cupom de Afiliado */}
            <div className="bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-3xl p-8 border border-green-500/30">
              <h2 className="text-3xl font-bold text-green-400 mb-4">🎁 Seu Cupom de 5%</h2>
              <p className="text-white mb-6">Compartilhe com amigos e ganhe comissões!</p>
              
              <div className="bg-black/40 rounded-2xl p-4 mb-4">
                <p className="text-green-400 font-bold text-2xl">ELITE{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
                <p className="text-gray-300 text-sm">Cupom único - 5% de desconto</p>
              </div>
              
              <button
                onClick={() => {
                  const code = `ELITE${Math.random().toString(36).substr(2, 6).toUpperCase()}`
                  navigator.clipboard.writeText(code)
                  alert('Cupom copiado!')
                }}
                className="bg-green-500 text-black font-bold px-6 py-3 rounded-2xl hover:bg-green-400 transition-all duration-300"
              >
                <Copy className="w-4 h-4 inline mr-2" />
                COPIAR CUPOM
              </button>
            </div>
            
            {/* Oportunidade de Afiliado */}
            <div className="bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-3xl p-8 border border-yellow-500/30">
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">💰 Seja um Afiliado Elite</h2>
              <p className="text-white mb-6">Ganhe 20% + 15% recorrente para sempre!</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                  <span className="text-sm">Comissão de 20% na primeira venda</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                  <span className="text-sm">15% recorrente para sempre</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                  <span className="text-sm">Bônus Elite: R$ 250 por R$ 3.500 vendidos</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                  <span className="text-sm">Saque via PIX instantâneo</span>
                </div>
              </div>
              
              <button
                onClick={() => {
                  setShowWelcomeScreen(false)
                  setCurrentView('affiliate')
                }}
                className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-2xl hover:bg-yellow-400 transition-all duration-300"
              >
                <Users className="w-4 h-4 inline mr-2" />
                QUERO SER AFILIADO
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-2xl text-white font-bold">🚀 Sua transformação começa agora!</p>
            <p className="text-gray-300">Acesse todos os cursos, agenda inteligente, IA Coach e muito mais.</p>
            
            <button
              onClick={() => {
                setShowWelcomeScreen(false)
                setCurrentView('home')
              }}
              className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-black font-bold text-xl px-12 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-green-500/50"
            >
              COMEÇAR JORNADA ELITE
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Vídeo de sucesso pós-pagamento
  if (showSuccessVideo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-full mb-8 shadow-2xl shadow-yellow-500/50 animate-pulse">
              <Diamond className="w-16 h-16 text-black" />
            </div>
            <h1 className="text-6xl font-black text-white mb-4">
              Elite<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600">Life</span>
            </h1>
          </div>
          
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-3xl p-8 border border-green-500/30">
              <h2 className="text-4xl font-bold text-green-400 mb-4">🎉 Pagamento Confirmado!</h2>
              <p className="text-2xl text-white mb-6">Bem-vindo à Elite Global!</p>
              
              <div className="space-y-4 text-xl text-gray-200">
                <p className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
                  ✨ <strong className="text-yellow-400">Sua transformação total começa agora</strong>
                </p>
                <p className="animate-fade-in-up" style={{ animationDelay: '2s' }}>
                  🚀 <strong className="text-blue-400">Você agora faz parte da elite mundial</strong>
                </p>
                <p className="animate-fade-in-up" style={{ animationDelay: '3s' }}>
                  💎 <strong className="text-purple-400">Corpo + Mente + Dinheiro em 90 dias</strong>
                </p>
                <p className="animate-fade-in-up" style={{ animationDelay: '4s' }}>
                  🏆 <strong className="text-green-400">Seu futuro milionário está garantido</strong>
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Music className="w-8 h-8 text-yellow-400 mx-auto animate-bounce" />
            <p className="text-gray-400 mt-2">♪ "Rise to Elite" - Música inspiracional exclusiva ♪</p>
          </div>
        </div>
      </div>
    )
  }

  // Página de Pagamento
  if (showPayment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">💳 Finalizar Compra</h1>
            <p className="text-gray-300">Plano selecionado: <strong className="text-yellow-400">{selectedPlan}</strong></p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulário de Pagamento */}
            <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/30">
              <h2 className="text-2xl font-bold text-white mb-6">Dados de Pagamento</h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-white font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    value={userProfile?.email || ''}
                    disabled
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white"
                  />
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <input type="checkbox" id="newsletter-payment" className="w-4 h-4" defaultChecked={userProfile?.newsletter} />
                  <label htmlFor="newsletter-payment" className="text-gray-300 text-sm">
                    Desejo receber emails e novidades do EliteLife
                  </label>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Nome Completo</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                {/* Opções de Pagamento */}
                <div>
                  <label className="block text-white font-semibold mb-4">Forma de Pagamento</label>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 bg-white/5 rounded-xl p-4 cursor-pointer hover:bg-white/10 transition-colors">
                      <input type="radio" name="payment" value="pix" className="w-4 h-4" defaultChecked />
                      <span className="text-white font-semibold">PIX</span>
                      <span className="text-green-400 text-sm ml-auto">Aprovação instantânea</span>
                    </label>
                    <label className="flex items-center space-x-3 bg-white/5 rounded-xl p-4 cursor-pointer hover:bg-white/10 transition-colors">
                      <input type="radio" name="payment" value="credit" className="w-4 h-4" />
                      <span className="text-white font-semibold">Cartão de Crédito</span>
                      <span className="text-blue-400 text-sm ml-auto">Parcelamento disponível</span>
                    </label>
                    <label className="flex items-center space-x-3 bg-white/5 rounded-xl p-4 cursor-pointer hover:bg-white/10 transition-colors">
                      <input type="radio" name="payment" value="debit" className="w-4 h-4" />
                      <span className="text-white font-semibold">Cartão de Débito</span>
                      <span className="text-purple-400 text-sm ml-auto">Desconto à vista</span>
                    </label>
                  </div>
                </div>
                
                {/* Cupom de Desconto */}
                <div>
                  <label className="block text-white font-semibold mb-2">Cupom de Desconto (Opcional)</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400"
                    placeholder="Digite seu cupom de 5%"
                  />
                </div>
              </form>
            </div>
            
            {/* Resumo do Pedido */}
            <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-green-500/30">
              <h2 className="text-2xl font-bold text-white mb-6">Resumo do Pedido</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-300">Plano {selectedPlan}</span>
                  <span className="text-white font-bold">
                    {selectedPlan === 'PRO Elite' ? 'R$ 49,90' : 
                     selectedPlan === 'Anual VIP' ? 'R$ 329,90' : 
                     selectedPlan === 'Influencer Hub' ? 'R$ 119,90' : 'R$ 79,90'}
                  </span>
                </div>
                <div className="flex justify-between text-green-400">
                  <span>Desconto (5%)</span>
                  <span>- R$ 2,50</span>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-green-400">
                      {selectedPlan === 'PRO Elite' ? 'R$ 47,40' : 
                       selectedPlan === 'Anual VIP' ? 'R$ 313,40' : 
                       selectedPlan === 'Influencer Hub' ? 'R$ 113,90' : 'R$ 75,90'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={handlePaymentComplete}
                  className="w-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-black font-bold py-4 rounded-2xl hover:scale-105 transition-all duration-300"
                >
                  💳 FINALIZAR PAGAMENTO
                </button>
                <button
                  onClick={() => setShowPayment(false)}
                  className="w-full bg-gray-600 text-white font-bold py-3 rounded-2xl hover:bg-gray-500 transition-all duration-300"
                >
                  <Home className="w-4 h-4 inline mr-2" />
                  Voltar ao Início
                </button>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  🔒 Pagamento 100% seguro<br/>
                  ✅ Garantia de 30 dias<br/>
                  🏆 Certificado SSL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Interface de Membros (Logado)
  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Header de Navegação */}
        <header className="bg-black/40 backdrop-blur-sm border-b border-yellow-500/20 p-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center">
                <Diamond className="w-6 h-6 text-black" />
              </div>
              <h1 className="text-2xl font-bold text-white">
                Elite<span className="text-yellow-400">Life</span>
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <button
                onClick={() => setCurrentView('home')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
                  currentView === 'home' ? 'bg-yellow-500/20 text-yellow-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>{t.home}</span>
              </button>
              <button
                onClick={() => setCurrentView('courses')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
                  currentView === 'courses' ? 'bg-yellow-500/20 text-yellow-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>{t.courses}</span>
              </button>
              <button
                onClick={() => setCurrentView('agenda')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
                  currentView === 'agenda' ? 'bg-yellow-500/20 text-yellow-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>{t.agenda}</span>
              </button>
              <button
                onClick={() => setCurrentView('nutrition')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
                  currentView === 'nutrition' ? 'bg-yellow-500/20 text-yellow-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                <Apple className="w-4 h-4" />
                <span>{t.nutrition}</span>
              </button>
              <button
                onClick={() => setCurrentView('ecommerce')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
                  currentView === 'ecommerce' ? 'bg-yellow-500/20 text-yellow-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>E-commerce</span>
              </button>
              <button
                onClick={() => setCurrentView('influencer')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
                  currentView === 'influencer' ? 'bg-yellow-500/20 text-yellow-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                <Megaphone className="w-4 h-4" />
                <span>Influencer</span>
              </button>
              <button
                onClick={() => setCurrentView('wallet')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
                  currentView === 'wallet' ? 'bg-yellow-500/20 text-yellow-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                <Wallet className="w-4 h-4" />
                <span>{t.wallet}</span>
              </button>
            </nav>
            
            {/* Seletor de Idioma */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className="flex items-center space-x-2 bg-white/10 rounded-xl px-3 py-2 hover:bg-white/20 transition-all"
                >
                  <Languages className="w-4 h-4 text-gray-400" />
                  <span className="text-white text-sm font-semibold">
                    {currentLanguage.toUpperCase()}
                  </span>
                </button>
                
                {showLanguageMenu && (
                  <div className="absolute right-0 top-full mt-2 w-40 bg-black/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl z-50">
                    <div className="p-2">
                      {[
                        { code: 'pt', name: 'Português', flag: '🇧🇷' },
                        { code: 'en', name: 'English', flag: '🇺🇸' },
                        { code: 'es', name: 'Español', flag: '🇪🇸' },
                        { code: 'fr', name: 'Français', flag: '🇫🇷' }
                      ].map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setCurrentLanguage(lang.code)
                            setShowLanguageMenu(false)
                          }}
                          className={`w-full flex items-center space-x-2 px-3 py-2 rounded-xl transition-all ${
                            currentLanguage === lang.code 
                              ? 'bg-yellow-500/20 text-yellow-400' 
                              : 'text-gray-300 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <span>{lang.flag}</span>
                          <span className="text-sm">{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Perfil do Usuário */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 bg-white/10 rounded-xl px-4 py-2 hover:bg-white/20 transition-all"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                    {userProfile?.email?.[0]?.toUpperCase() || 'U'}
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-white font-semibold text-sm">
                      {userProfile?.email?.split('@')[0] || 'Usuário'}
                    </p>
                    <p className="text-yellow-400 text-xs">🏆 Elite Diamond</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-black/90 backdrop-blur-sm rounded-2xl border border-yellow-500/30 shadow-2xl z-50">
                    <div className="p-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                          {userProfile?.email?.[0]?.toUpperCase() || 'U'}
                        </div>
                        <div>
                          <p className="text-white font-semibold">{userProfile?.email?.split('@')[0] || 'Usuário'}</p>
                          <p className="text-yellow-400 text-sm">🏆 Elite Diamond</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <button
                          onClick={() => {
                            setCurrentView('profile')
                            setShowUserMenu(false)
                          }}
                          className="w-full flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                        >
                          <User className="w-4 h-4" />
                          <span>Meu Perfil</span>
                        </button>
                        <button
                          onClick={() => {
                            setCurrentView('upgrade')
                            setShowUserMenu(false)
                          }}
                          className="w-full flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                        >
                          <Crown className="w-4 h-4" />
                          <span>Aprimorar Plano</span>
                        </button>
                        <button
                          onClick={() => {
                            setShowRanking(true)
                            setShowUserMenu(false)
                          }}
                          className="w-full flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                        >
                          <Trophy className="w-4 h-4" />
                          <span>Ranking</span>
                        </button>
                        <button
                          onClick={() => {
                            setIsLoggedIn(false)
                            setCurrentView('home')
                            setShowUserMenu(false)
                          }}
                          className="w-full flex items-center space-x-2 px-3 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sair</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Conteúdo Principal */}
        <main className="container mx-auto p-6">
          {/* Conteúdo baseado na view atual */}
          {currentView === 'courses' && (
            <div>
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">🎓 Seus Cursos Elite</h1>
                <p className="text-gray-300">40 trilhas baseadas nos melhores estudos do mundo</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <div key={course.id} className="bg-black/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-yellow-500/30 transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={course.thumbnail} 
                        alt={course.title}
                        className="w-full h-48 object-cover"
                      />
                      {course.locked && (
                        <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                          <div className="text-center">
                            <Lock className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
                            <p className="text-yellow-400 font-bold">PREMIUM</p>
                            <p className="text-gray-300 text-sm">Assine para desbloquear</p>
                          </div>
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                          {course.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-white text-xs font-bold">{course.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{course.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                        <span>📅 {course.duration}</span>
                        <span>📚 {course.modules} módulos</span>
                        <span>👥 {course.students.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-400 text-sm">Por {course.instructor}</span>
                        <span className="text-yellow-400 text-sm font-bold">{course.level}</span>
                      </div>
                      
                      {/* Recomendações de Livros */}
                      {course.bookRecommendations && (
                        <div className="mb-4 bg-blue-500/10 rounded-xl p-3 border border-blue-500/30">
                          <h4 className="text-blue-400 font-bold text-sm mb-2 flex items-center">
                            <BookOpen className="w-3 h-3 mr-1" />
                            Livros Recomendados:
                          </h4>
                          <ul className="space-y-1">
                            {course.bookRecommendations.map((book, index) => (
                              <li key={index} className="text-gray-300 text-xs">• {book}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Seção de Avaliações */}
                      <div className="mb-4 bg-green-500/10 rounded-xl p-3 border border-green-500/30">
                        <h4 className="text-green-400 font-bold text-sm mb-2">💬 Avaliações dos Alunos:</h4>
                        <div className="space-y-2">
                          <div className="text-xs">
                            <p className="text-gray-300">"Curso transformador! Mudou minha vida completamente." - ⭐⭐⭐⭐⭐</p>
                          </div>
                          <div className="text-xs">
                            <p className="text-gray-300">"Metodologia incrível, resultados em 30 dias!" - ⭐⭐⭐⭐⭐</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <button
                          onClick={() => alert(course.locked ? 'Assine um plano premium para acessar este curso!' : 'Abrindo curso...')}
                          className={`w-full font-bold py-3 rounded-2xl transition-all duration-300 ${
                            course.locked 
                              ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                              : 'bg-gradient-to-r from-green-400 to-emerald-500 text-black hover:scale-105'
                          }`}
                          disabled={course.locked}
                        >
                          {course.locked ? (
                            <>
                              <Lock className="w-4 h-4 inline mr-2" />
                              ASSINAR PARA ACESSAR
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 inline mr-2" />
                              COMEÇAR CURSO
                            </>
                          )}
                        </button>
                        
                        <button
                          onClick={() => alert(`🎬 ${course.preview}\n\n"Bem-vindo ao EliteLife! Você está prestes a iniciar uma jornada de transformação total. Este curso foi desenvolvido com base nos melhores estudos do mundo e vai revolucionar sua vida!"`)}
                          className="w-full bg-blue-600 text-white font-bold py-2 rounded-xl hover:bg-blue-500 transition-all duration-300"
                        >
                          <Video className="w-4 h-4 inline mr-2" />
                          VER PREVIEW
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Seção de E-books */}
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">📚 E-books Exclusivos</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { title: 'Manual do Milionário', pages: 120, locked: true },
                    { title: 'Guia de Investimentos Elite', pages: 95, locked: true },
                    { title: 'Rotina dos Campeões', pages: 80, locked: true },
                    { title: 'Networking de Alto Nível', pages: 110, locked: true }
                  ].map((ebook, index) => (
                    <div key={index} className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                      <BookOpen className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-white mb-2">{ebook.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{ebook.pages} páginas</p>
                      {ebook.locked && (
                        <div className="flex items-center justify-center mb-4">
                          <Lock className="w-4 h-4 text-yellow-400 mr-2" />
                          <span className="text-yellow-400 text-sm font-bold">PREMIUM</span>
                        </div>
                      )}
                      <button
                        onClick={() => alert(ebook.locked ? 'Assine um plano premium para acessar este e-book!' : 'Abrindo e-book...')}
                        className={`w-full font-bold py-2 rounded-xl transition-all duration-300 ${
                          ebook.locked 
                            ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:scale-105'
                        }`}
                        disabled={ebook.locked}
                      >
                        {ebook.locked ? 'ASSINAR' : 'LER AGORA'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentView === 'agenda' && (
            <div>
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">📅 Sua Agenda Elite Inteligente</h1>
                <p className="text-gray-300">
                  Agenda 100% editável com metas recomendadas e lembretes automáticos
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Agenda do Dia */}
                <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-yellow-500/30">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white flex items-center">
                      <Calendar className="w-6 h-6 text-yellow-400 mr-2" />
                      Hoje - {new Date().toLocaleDateString('pt-BR')}
                    </h2>
                    <button
                      onClick={() => {
                        setNewTask('')
                        setEditingItem(-1)
                      }}
                      className="bg-green-500 text-white p-2 rounded-xl hover:bg-green-400 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {agendaItems.map((item) => (
                      <div key={item.id} className={`flex items-center justify-between rounded-xl p-4 ${
                        item.recommended ? 'bg-blue-500/10 border border-blue-500/30' : 'bg-white/5'
                      }`}>
                        <div className="flex items-center flex-1">
                          <span className="text-yellow-400 font-bold mr-4 min-w-[60px]">{item.time}</span>
                          {editingItem === item.id ? (
                            <input
                              type="text"
                              value={newTask}
                              onChange={(e) => setNewTask(e.target.value)}
                              className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white"
                              onKeyPress={(e) => e.key === 'Enter' && saveEdit(item.id)}
                            />
                          ) : (
                            <div className="flex-1">
                              <span className={`${item.completed ? 'line-through text-gray-500' : 'text-white'}`}>
                                {item.task}
                              </span>
                              {item.recommended && (
                                <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                                  Recomendado
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {editingItem === item.id ? (
                            <>
                              <button
                                onClick={() => saveEdit(item.id)}
                                className="text-green-400 hover:text-green-300"
                              >
                                <Save className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => setEditingItem(null)}
                                className="text-gray-400 hover:text-gray-300"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={() => toggleTaskComplete(item.id)}
                                className={`w-5 h-5 transition-colors ${
                                  item.completed ? 'text-green-400' : 'text-gray-500 hover:text-green-400'
                                }`}
                              >
                                <CheckCircle className="w-5 h-5" />
                              </button>
                              <button
                                onClick={() => startEditing(item.id)}
                                className="text-blue-400 hover:text-blue-300"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => deleteTask(item.id)}
                                className="text-red-400 hover:text-red-300"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                              <Bell className="w-4 h-4 text-yellow-400" title="Lembrete 30min antes" />
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                    
                    {/* Adicionar nova tarefa */}
                    {editingItem === -1 && (
                      <div className="flex items-center space-x-2 bg-white/5 rounded-xl p-4">
                        <input
                          type="text"
                          value={newTask}
                          onChange={(e) => setNewTask(e.target.value)}
                          placeholder="Nova tarefa..."
                          className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400"
                          onKeyPress={(e) => e.key === 'Enter' && addNewTask()}
                        />
                        <button
                          onClick={addNewTask}
                          className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-400 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setEditingItem(null)}
                          className="bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-400 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Metas da Semana */}
                <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-green-500/30">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Target className="w-6 h-6 text-green-400 mr-2" />
                    Metas da Semana
                  </h2>
                  
                  <div className="space-y-4">
                    {[
                      { goal: 'Treinar 5x na semana (Recomendado)', progress: 2, total: 5, recommended: true },
                      { goal: 'Ler 2 artigos sobre investimentos (Recomendado)', progress: 1, total: 2, recommended: true },
                      { goal: 'Economizar R$ 200 (Recomendado)', progress: 150, total: 200, recommended: true },
                      { goal: 'Completar 1 curso (Recomendado)', progress: 0, total: 1, recommended: true }
                    ].map((goal, index) => (
                      <div key={index} className={`rounded-xl p-4 ${
                        goal.recommended ? 'bg-green-500/10 border border-green-500/30' : 'bg-white/5'
                      }`}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-semibold">{goal.goal}</span>
                          <span className="text-green-400">{goal.progress}/{goal.total}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-green-400 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(goal.progress / goal.total) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/30">
                    <h3 className="text-yellow-400 font-bold mb-2 flex items-center">
                      <Bell className="w-4 h-4 mr-2" />
                      Sistema de Lembretes
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Você receberá lembretes por email 30 minutos antes de cada atividade agendada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentView === 'nutrition' && (
            <div>
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">🍎 Nutrição Elite Inteligente</h1>
                <p className="text-gray-300">Planejamento nutricional avançado baseado nos melhores nutricionistas do mundo</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Tracker Diário */}
                <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-blue-500/30">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Activity className="w-6 h-6 text-blue-400 mr-2" />
                    Tracker Diário
                  </h2>
                  
                  <div className="space-y-4">
                    {[
                      { key: 'water', icon: Droplets, label: 'Água (ml)', color: 'blue', unit: 'ml' },
                      { key: 'calories', icon: Flame, label: 'Calorias', color: 'red', unit: 'kcal' },
                      { key: 'protein', icon: Beef, label: 'Proteínas (g)', color: 'purple', unit: 'g' },
                      { key: 'carbs', icon: Wheat, label: 'Carboidratos (g)', color: 'yellow', unit: 'g' },
                      { key: 'fiber', icon: Salad, label: 'Fibras (g)', color: 'green', unit: 'g' },
                      { key: 'exercise', icon: Dumbbell, label: 'Exercício (min)', color: 'orange', unit: 'min' }
                    ].map((item) => (
                      <div key={item.key} className="bg-white/5 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <item.icon className={`w-5 h-5 text-${item.color}-400 mr-2`} />
                            <span className="text-white font-semibold text-sm">{item.label}</span>
                          </div>
                          <span className={`text-${item.color}-400 font-bold`}>
                            {dailyNutrition[item.key as keyof typeof dailyNutrition]}/{nutritionGoals[item.key as keyof typeof nutritionGoals]} {item.unit}
                          </span>
                        </div>
                        
                        <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                          <div 
                            className={`bg-${item.color}-400 h-2 rounded-full transition-all duration-300`}
                            style={{ 
                              width: `${Math.min(100, (dailyNutrition[item.key as keyof typeof dailyNutrition] / nutritionGoals[item.key as keyof typeof nutritionGoals]) * 100)}%` 
                            }}
                          ></div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button
                            onClick={() => updateNutrition(item.key, item.key === 'water' ? 250 : item.key === 'calories' ? 100 : item.key === 'exercise' ? 15 : 10)}
                            className={`flex-1 bg-${item.color}-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-${item.color}-400 transition-colors`}
                          >
                            + {item.key === 'water' ? '250ml' : item.key === 'calories' ? '100kcal' : item.key === 'exercise' ? '15min' : '10g'}
                          </button>
                          <button
                            onClick={() => updateNutrition(item.key, -(item.key === 'water' ? 250 : item.key === 'calories' ? 100 : item.key === 'exercise' ? 15 : 10))}
                            className="bg-gray-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-500 transition-colors"
                          >
                            -
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Plano Nutricional */}
                <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-green-500/30">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Apple className="w-6 h-6 text-green-400 mr-2" />
                    Plano Personalizado
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="bg-green-500/20 rounded-xl p-4 border border-green-500/30">
                      <h3 className="text-green-400 font-bold mb-2">🎯 Suas Metas Diárias</h3>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-300">💧 Água: {nutritionGoals.water}ml</p>
                        <p className="text-gray-300">🔥 Calorias: {nutritionGoals.calories}kcal</p>
                        <p className="text-gray-300">🥩 Proteínas: {nutritionGoals.protein}g</p>
                        <p className="text-gray-300">🌾 Carboidratos: {nutritionGoals.carbs}g</p>
                        <p className="text-gray-300">🥬 Fibras: {nutritionGoals.fiber}g</p>
                        <p className="text-gray-300">💪 Exercício: {nutritionGoals.exercise}min</p>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/30">
                      <h3 className="text-yellow-400 font-bold mb-2">📋 Refeições Sugeridas</h3>
                      <div className="space-y-2 text-sm text-gray-300">
                        <p><strong>Café:</strong> Ovos + Aveia + Frutas</p>
                        <p><strong>Almoço:</strong> Frango + Arroz + Salada</p>
                        <p><strong>Lanche:</strong> Whey + Banana</p>
                        <p><strong>Jantar:</strong> Peixe + Batata + Vegetais</p>
                      </div>
                    </div>
                    
                    <button
                      onClick={generateWeeklyReport}
                      className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold py-3 rounded-2xl hover:scale-105 transition-all duration-300"
                    >
                      📊 GERAR RELATÓRIO SEMANAL
                    </button>
                  </div>
                </div>
                
                {/* Relatório Semanal */}
                <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-purple-500/30">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <BarChart3 className="w-6 h-6 text-purple-400 mr-2" />
                    Relatório Profissional
                  </h2>
                  
                  {weeklyReport ? (
                    <div className="bg-purple-500/20 rounded-xl p-4 border border-purple-500/30 max-h-96 overflow-y-auto">
                      <pre className="text-xs text-gray-300 whitespace-pre-wrap">{weeklyReport}</pre>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <PieChart className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                      <p className="text-gray-300 mb-4">Complete uma semana de tracking para gerar seu relatório profissional</p>
                      <div className="space-y-2 text-sm text-gray-400">
                        <p>✅ Análise completa dos nutrientes</p>
                        <p>✅ Recomendações personalizadas</p>
                        <p>✅ Metas para próxima semana</p>
                        <p>✅ Insights baseados em IA</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Quiz Nutricional Avançado */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/30">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">🧬 Quiz Nutricional Elite</h2>
                <p className="text-gray-300 text-center mb-8">Baseado nos melhores nutricionistas do mundo: Harvard T.H. Chan, Mayo Clinic, Johns Hopkins</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-blue-400">Perguntas Avançadas:</h3>
                    <div className="space-y-3 text-sm text-gray-300">
                      <p>• Qual seu tipo metabólico predominante?</p>
                      <p>• Você tem intolerâncias alimentares?</p>
                      <p>• Qual seu nível de atividade física?</p>
                      <p>• Objetivos: emagrecimento, ganho de massa ou manutenção?</p>
                      <p>• Histórico familiar de doenças?</p>
                      <p>• Preferências alimentares e restrições?</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-green-400">Resultado Personalizado:</h3>
                    <div className="space-y-3 text-sm text-gray-300">
                      <p>• Plano nutricional de 28 dias</p>
                      <p>• Cálculo exato de macronutrientes</p>
                      <p>• Lista de compras otimizada</p>
                      <p>• Receitas personalizadas</p>
                      <p>• Suplementação recomendada</p>
                      <p>• Cronograma de refeições</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <button
                    onClick={() => alert('Quiz nutricional avançado em desenvolvimento! Em breve você terá acesso ao plano mais personalizado do mundo.')}
                    className="bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold px-8 py-3 rounded-2xl hover:scale-105 transition-all duration-300"
                  >
                    FAZER QUIZ AVANÇADO
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentView === 'wallet' && (
            <div>
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">💰 Carteira Elite Inteligente</h1>
                <p className="text-gray-300">Gerencie suas metas financeiras e acompanhe seu progresso</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { title: 'Reserva de Emergência', current: 2500, goal: 10000, color: 'blue' },
                  { title: 'Investimentos', current: 5200, goal: 20000, color: 'green' },
                  { title: 'Renda Extra', current: 800, goal: 2000, color: 'yellow' },
                  { title: 'Dívidas', current: 1200, goal: 0, color: 'red', reverse: true }
                ].map((wallet, index) => (
                  <div key={index} className={`bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-${wallet.color}-500/30`}>
                    <h3 className={`text-lg font-bold text-${wallet.color}-400 mb-4`}>{wallet.title}</h3>
                    <div className="text-center mb-4">
                      <p className="text-2xl font-bold text-white">
                        R$ {wallet.current.toLocaleString()}
                      </p>
                      <p className="text-gray-400 text-sm">
                        Meta: R$ {wallet.goal.toLocaleString()}
                      </p>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`bg-${wallet.color}-400 h-2 rounded-full transition-all duration-300`}
                        style={{ 
                          width: `${wallet.reverse 
                            ? Math.max(0, 100 - (wallet.current / wallet.goal) * 100)
                            : (wallet.current / wallet.goal) * 100}%` 
                        }}
                      ></div>
                    </div>
                    <p className={`text-${wallet.color}-400 text-sm mt-2 text-center`}>
                      {wallet.reverse 
                        ? `${Math.round((1 - wallet.current / wallet.goal) * 100)}% quitado`
                        : `${Math.round((wallet.current / wallet.goal) * 100)}% da meta`
                      }
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Transações Recentes */}
                <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-6">📊 Transações Recentes</h2>
                  <div className="space-y-4">
                    {[
                      { type: 'income', desc: 'Comissão Afiliados - Bônus Elite', value: 250, date: 'Hoje' },
                      { type: 'expense', desc: 'Investimento CDB', value: -1000, date: 'Ontem' },
                      { type: 'income', desc: 'Freelance', value: 800, date: '2 dias' },
                      { type: 'expense', desc: 'Curso Online', value: -200, date: '3 dias' }
                    ].map((transaction, index) => (
                      <div key={index} className="flex items-center justify-between bg-white/5 rounded-xl p-4">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                            transaction.type === 'income' ? 'bg-green-500/20' : 'bg-red-500/20'
                          }`}>
                            {transaction.type === 'income' ? 
                              <TrendingUp className="w-5 h-5 text-green-400" /> :
                              <TrendingUp className="w-5 h-5 text-red-400 rotate-180" />
                            }
                          </div>
                          <div>
                            <p className="text-white font-semibold">{transaction.desc}</p>
                            <p className="text-gray-400 text-sm">{transaction.date}</p>
                          </div>
                        </div>
                        <span className={`font-bold ${
                          transaction.type === 'income' ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {transaction.type === 'income' ? '+' : ''}R$ {Math.abs(transaction.value)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Gráfico de Progresso */}
                <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-6">📈 Progresso Mensal</h2>
                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-400">+R$ 3.850</p>
                      <p className="text-gray-400">Crescimento este mês</p>
                      <p className="text-yellow-400 text-sm">Incluindo bônus Elite de R$ 250</p>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { month: 'Janeiro', value: 85 },
                        { month: 'Fevereiro', value: 92 },
                        { month: 'Março', value: 78 },
                        { month: 'Abril', value: 95 }
                      ].map((month, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-gray-300">{month.month}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-32 bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${month.value}%` }}
                              ></div>
                            </div>
                            <span className="text-green-400 font-bold text-sm">{month.value}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentView === 'home' && (
            <div>
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Bem-vindo de volta, <span className="text-yellow-400">{userProfile?.email?.split('@')[0] || 'Elite'}!</span>
                </h1>
                <p className="text-xl text-gray-300">Sua jornada de transformação continua</p>
              </div>
              
              {/* Dashboard Cards */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl p-6 border border-blue-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <BookOpen className="w-8 h-8 text-blue-400" />
                    <span className="text-blue-400 font-bold">3/40</span>
                  </div>
                  <h3 className="text-white font-bold">Cursos Concluídos</h3>
                  <p className="text-gray-300 text-sm">7.5% do seu plano</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-3xl p-6 border border-green-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <Target className="w-8 h-8 text-green-400" />
                    <span className="text-green-400 font-bold">12</span>
                  </div>
                  <h3 className="text-white font-bold">Dias de Streak</h3>
                  <p className="text-gray-300 text-sm">Continue assim!</p>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-3xl p-6 border border-yellow-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <DollarSign className="w-8 h-8 text-yellow-400" />
                    <span className="text-yellow-400 font-bold">R$ 1.8k</span>
                  </div>
                  <h3 className="text-white font-bold">Ganhos Afiliados</h3>
                  <p className="text-gray-300 text-sm">Este mês + bônus</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-3xl p-6 border border-purple-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <Trophy className="w-8 h-8 text-purple-400" />
                    <span className="text-purple-400 font-bold">Diamond</span>
                  </div>
                  <h3 className="text-white font-bold">Nível Atual</h3>
                  <p className="text-gray-300 text-sm">Top 1% da comunidade</p>
                </div>
              </div>
              
              {/* Ações Rápidas */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <button
                  onClick={() => setShowCommunityChat(true)}
                  className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 text-left"
                >
                  <Users className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Chat da Comunidade</h3>
                  <p className="text-gray-300 text-sm">Compartilhe resultados e se inspire com outros membros Elite</p>
                </button>
                
                <button
                  onClick={() => setShowPrintableWorksheets(true)}
                  className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 text-left"
                >
                  <Printer className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Planilhas para Imprimir</h3>
                  <p className="text-gray-300 text-sm">Baixe planilhas profissionais de finanças, saúde e fitness</p>
                </button>
                
                <button
                  onClick={() => setCurrentView('nutrition')}
                  className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-3xl p-6 border border-red-500/30 hover:border-red-400/50 transition-all duration-300 text-left"
                >
                  <Apple className="w-8 h-8 text-red-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Tracker Nutricional</h3>
                  <p className="text-gray-300 text-sm">Acompanhe calorias, água, proteínas e gere relatórios semanais</p>
                </button>
              </div>
              
              {/* Próximas Ações */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-yellow-500/30">
                  <h2 className="text-2xl font-bold text-white mb-6">🎯 Próximas Ações</h2>
                  <div className="space-y-4">
                    {[
                      { action: 'Completar módulo 4 - E-commerce Master', time: '45 min', priority: 'alta' },
                      { action: 'Atualizar tracker nutricional', time: '5 min', priority: 'média' },
                      { action: 'Revisar carteira de investimentos', time: '20 min', priority: 'baixa' },
                      { action: 'Compartilhar progresso na comunidade', time: '10 min', priority: 'média' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between bg-white/5 rounded-xl p-4">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-3 ${
                            item.priority === 'alta' ? 'bg-red-400' :
                            item.priority === 'média' ? 'bg-yellow-400' : 'bg-green-400'
                          }`}></div>
                          <div>
                            <p className="text-white font-semibold">{item.action}</p>
                            <p className="text-gray-400 text-sm">{item.time}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-green-500/30">
                  <h2 className="text-2xl font-bold text-white mb-6">🏆 Conquistas Recentes</h2>
                  <div className="space-y-4">
                    {[
                      { achievement: 'Bônus Elite de R$ 250 conquistado!', date: 'Hoje', icon: '💰' },
                      { achievement: 'Segunda semana completa!', date: 'Há 2 dias', icon: '🎉' },
                      { achievement: 'Meta de nutrição atingida', date: 'Há 5 dias', icon: '🍎' },
                      { achievement: 'Curso de E-commerce iniciado', date: 'Há 1 semana', icon: '🛒' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center bg-white/5 rounded-xl p-4">
                        <span className="text-2xl mr-4">{item.icon}</span>
                        <div>
                          <p className="text-white font-semibold">{item.achievement}</p>
                          <p className="text-gray-400 text-sm">{item.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Chat AI Fixo Melhorado */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-black/90 backdrop-blur-sm rounded-3xl p-4 border border-yellow-500/30 w-80 max-h-96 flex flex-col shadow-2xl shadow-yellow-500/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mr-2">
                  <Bot className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Elite AI Coach</h3>
                  <p className="text-gray-400 text-xs">Especialista em tudo sobre EliteLife</p>
                </div>
              </div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            <div className="flex-1 space-y-3 max-h-48 overflow-y-auto mb-4">
              {chatMessages.slice(-3).map((chat, index) => (
                <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-3 py-2 rounded-2xl text-sm ${
                    chat.type === 'user' 
                      ? 'bg-yellow-500 text-black font-semibold' 
                      : 'bg-white/10 text-white border border-white/20'
                  }`}>
                    {chat.message}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                placeholder="Pergunte sobre cursos, nutrição, afiliados..." 
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white placeholder-gray-400 text-sm"
              />
              <button 
                onClick={sendChatMessage}
                className="bg-yellow-500 text-black p-2 rounded-xl hover:bg-yellow-400 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Página de Cursos (Teste Grátis)
  if (showCourses) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">🎓 Cursos e E-books Elite</h1>
            <p className="text-gray-300">Conteúdo premium baseado nos melhores estudos do mundo</p>
            <div className="mt-4 bg-yellow-500/20 border border-yellow-500/50 rounded-2xl p-4 max-w-2xl mx-auto">
              <p className="text-yellow-400 font-bold">⚠️ TESTE GRÁTIS ATIVO</p>
              <p className="text-gray-300 text-sm">Assine um plano premium para desbloquear todo o conteúdo</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {courses.slice(0, 9).map((course) => (
              <div key={course.id} className="bg-black/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10">
                <div className="relative">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                    <div className="text-center">
                      <Lock className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                      <p className="text-yellow-400 font-bold text-xl">PREMIUM</p>
                      <p className="text-gray-300">Assine para desbloquear</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      {course.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                    <span>📅 {course.duration}</span>
                    <span>📚 {course.modules} módulos</span>
                  </div>
                  
                  <button
                    onClick={() => alert('🔒 Este curso é premium! Assine um plano para ter acesso completo a todos os cursos, e-books e funcionalidades exclusivas.')}
                    className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-3 rounded-2xl hover:scale-105 transition-all duration-300"
                  >
                    <Crown className="w-4 h-4 inline mr-2" />
                    ASSINAR PARA ACESSAR
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => setShowCourses(false)}
              className="bg-gray-600 text-white font-bold px-8 py-3 rounded-2xl hover:bg-gray-500 transition-all duration-300 mr-4"
            >
              <Home className="w-4 h-4 inline mr-2" />
              Voltar ao Início
            </button>
            <button 
              onClick={() => {
                setShowCourses(false)
                setShowPreview(true)
                setSelectedPlan('Planos Premium')
              }}
              className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-black font-bold px-8 py-3 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              VER PLANOS PREMIUM
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (showPreview) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">👑 Preview: {selectedPlan}</h1>
            <p className="text-gray-300">Veja o que está incluído no seu plano escolhido</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Trilhas Incluídas */}
            <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-yellow-500/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <BookOpen className="w-5 h-5 text-yellow-400 mr-2" />
                40 Trilhas Incluídas
              </h2>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {[
                  'Corpo de Elite (21 dias)',
                  'Mente Milionária (30 dias)',
                  'Fortuna Digital (45 dias)',
                  'Networking Elite (14 dias)',
                  'Produtividade Máxima (21 dias)',
                  'Liderança Executiva (30 dias)',
                  'E-commerce Master (60 dias)',
                  'Influencer Elite (30 dias)',
                  'Nutrição Elite (28 dias)',
                  'Criptomoedas Elite (35 dias)',
                  'Oratória de Impacto (25 dias)',
                  'Relacionamentos Elite (30 dias)',
                  'Vendas Elite (40 dias)',
                  'Yoga Elite (60 dias)',
                  'Meditação Elite (21 dias)',
                  'Fotografia Elite (45 dias)',
                  'Culinária Elite (50 dias)',
                  'Design Elite (40 dias)',
                  'Programação Elite (90 dias)',
                  'Música Elite (60 dias)',
                  'Escrita Elite (35 dias)',
                  'Imóveis Elite (45 dias)',
                  'Automação Elite (40 dias)',
                  'Psicologia Elite (50 dias)',
                  'Idiomas Elite (120 dias)',
                  'Viagem Elite (30 dias)',
                  'Sustentabilidade Elite (35 dias)',
                  'Moda Elite (25 dias)',
                  'Esportes Elite (60 dias)',
                  'Parentalidade Elite (40 dias)',
                  'Envelhecimento Elite (45 dias)',
                  'Terapia Elite (35 dias)',
                  'Energia Elite (30 dias)',
                  'Sono Elite (21 dias)',
                  'Memória Elite (28 dias)',
                  'Criatividade Elite (35 dias)',
                  'Negociação Elite (30 dias)',
                  'Disciplina Elite (40 dias)',
                  'Intuição Elite (25 dias)',
                  'Propósito Elite (50 dias)'
                ].map((trilha, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <Play className="w-4 h-4 text-green-400 mr-2" />
                    {trilha}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Recursos Premium */}
            <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-blue-500/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Gem className="w-5 h-5 text-blue-400 mr-2" />
                Recursos Premium
              </h2>
              <div className="space-y-3">
                {[
                  'IA Coach 24/7 Avançado',
                  'Agenda Editável Inteligente',
                  'Tracker Nutricional Completo',
                  'E-commerce Hub Completo',
                  'Influencer IA Viral',
                  'Carteira Digital Inteligente',
                  'Certificados Oficiais',
                  'Comunidade VIP',
                  'Planilhas para Imprimir',
                  'Ranking e Medalhas',
                  'Suporte Prioritário',
                  'E-books Exclusivos',
                  'Suporte Multilíngue',
                  'Lembretes Automáticos',
                  'Relatórios Semanais'
                ].map((recurso, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
                    {recurso}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Potencial de Ganhos */}
            <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-green-500/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <DollarSign className="w-5 h-5 text-green-400 mr-2" />
                Potencial de Ganhos
              </h2>
              <div className="space-y-3">
                {[
                  'Comissão: 20% primeira venda',
                  'Recorrente: 15% para sempre',
                  'Bônus Elite: R$ 250 por R$ 3.500',
                  'Saque via PIX instantâneo',
                  'Materiais profissionais',
                  'Treinamento completo',
                  'Cupom único de 5%',
                  'Ranking de afiliados',
                  'Suporte especializado'
                ].map((ganho, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                    {ganho}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Preview de Conteúdo */}
          <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-3xl p-8 border border-purple-500/30 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">🎬 Preview dos Conteúdos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Vídeos de Abertura Exclusivos</h3>
                <div className="bg-gray-800 rounded-xl p-4 mb-4 text-center">
                  <Video className="w-16 h-16 text-yellow-400 mx-auto mb-2" />
                  <p className="text-white font-bold">EliteLife - Revolução Total</p>
                  <p className="text-gray-400 text-sm">Vídeos gerados por IA com logo e música inspiracional</p>
                </div>
                <p className="text-gray-300 text-sm">
                  "Bem-vindo ao EliteLife! Você está prestes a iniciar uma jornada que vai transformar 
                  completamente sua vida. Prepare-se para se tornar a melhor versão de si mesmo!"
                </p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Conteúdo Exclusivo</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">800+ vídeos em HD</span>
                  </div>
                  <div className="flex items-center">
                    <Download className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">200+ e-books para download</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-yellow-400 mr-3" />
                    <span className="text-gray-300">Certificados oficiais</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Acesso à comunidade VIP</span>
                  </div>
                  <div className="flex items-center">
                    <Apple className="w-5 h-5 text-red-400 mr-3" />
                    <span className="text-gray-300">Tracker nutricional inteligente</span>
                  </div>
                  <div className="flex items-center">
                    <ShoppingCart className="w-5 h-5 text-orange-400 mr-3" />
                    <span className="text-gray-300">E-commerce Hub completo</span>
                  </div>
                  <div className="flex items-center">
                    <Megaphone className="w-5 h-5 text-pink-400 mr-3" />
                    <span className="text-gray-300">Influencer IA viral</span>
                  </div>
                  <div className="flex items-center">
                    <Printer className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="text-gray-300">Planilhas profissionais</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Botões de Ação */}
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setShowPreview(false)}
              className="bg-gray-600 text-white font-bold px-8 py-3 rounded-2xl hover:bg-gray-500 transition-all duration-300"
            >
              <Home className="w-4 h-4 inline mr-2" />
              Voltar ao Início
            </button>
            <button 
              onClick={handlePurchase}
              className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-black font-bold px-8 py-3 rounded-2xl hover:scale-105 transition-all duration-300 flex items-center"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              FINALIZAR COMPRA
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header/Capa Premium */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/30 via-amber-500/20 to-yellow-600/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/40"></div>
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-3xl mb-8 shadow-2xl shadow-yellow-500/50">
              <Diamond className="w-12 h-12 text-black" />
            </div>
            <h1 className="text-7xl font-black text-white mb-6 tracking-tight">
              {t.title}
            </h1>
            <p className="text-3xl text-gray-200 mb-8 max-w-4xl mx-auto font-light">
              {t.subtitle}
            </p>
            <div className="text-xl text-yellow-300 font-semibold tracking-wide">
              APRESENTAÇÃO EXECUTIVA PREMIUM • 2024
            </div>
          </div>
          
          {/* Botão de Teste Grátis */}
          <div className="mt-8">
            <button 
              onClick={handleFreeTest}
              className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-black font-bold text-xl px-12 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-green-500/50 mr-4"
            >
              {t.freeTest}
            </button>
            <button 
              onClick={handleQuizStart}
              className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black font-bold text-xl px-12 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-yellow-500/50"
            >
              {t.completeQuiz}
            </button>
          </div>
        </div>
      </section>

      {/* Quiz de Cadastro Melhorado */}
      <section className="py-20 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 backdrop-blur-sm border-y border-yellow-500/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-6">🎯 Quiz Exclusivo de Perfil Elite</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Descubra seu <strong className="text-yellow-400">potencial milionário</strong> e receba um plano personalizado por IA
            </p>
          </div>
          
          {!showQuiz ? (
            <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/30 shadow-2xl shadow-yellow-500/20">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {[
                  {
                    icon: Dumbbell,
                    title: "Perfil Físico Elite",
                    questions: [
                      "Idade, peso, altura e telefone",
                      "Nível de condicionamento atual",
                      "Objetivos nutricionais específicos",
                      "Tempo disponível para treinos"
                    ]
                  },
                  {
                    icon: Brain,
                    title: "Mentalidade de Sucesso",
                    questions: [
                      "Desafios pessoais atuais",
                      "Metas de estilo de vida",
                      "Interesse em criar conteúdo",
                      "Preferências de aprendizado"
                    ]
                  },
                  {
                    icon: DollarSign,
                    title: "Potencial Financeiro",
                    questions: [
                      "Renda mensal atual",
                      "Experiência com investimentos",
                      "Interesse em e-commerce",
                      "Objetivos de renda passiva"
                    ]
                  }
                ].map((section, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <section.icon className="w-12 h-12 text-yellow-400 mb-4 mx-auto" />
                    <h3 className="text-xl font-bold text-white mb-4 text-center">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.questions.map((question, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                          {question}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-2xl p-6 mb-6">
                  <h4 className="text-2xl font-bold text-black mb-2">🎁 RESULTADO PERSONALIZADO</h4>
                  <p className="text-black font-semibold">
                    Plano de 30 dias + Trilha personalizada + Potencial de ganhos como afiliado + Acesso à área de membros
                  </p>
                </div>
                <button 
                  onClick={handleQuizStart}
                  className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black font-bold text-xl px-12 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-yellow-500/50"
                >
                  {t.completeQuiz}
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/30 shadow-2xl shadow-yellow-500/20">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-yellow-400 font-semibold">Pergunta {currentQuestion + 1} de {quizQuestions.length}</span>
                  <div className="bg-yellow-500/20 rounded-full px-3 py-1">
                    <span className="text-yellow-400 text-sm font-bold">
                      {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-yellow-400 to-amber-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {quizQuestions[currentQuestion].question}
                </h3>
                
                {quizQuestions[currentQuestion].type === 'form' ? (
                  <form onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.target as HTMLFormElement)
                    const data: any = {}
                    quizQuestions[currentQuestion].fields?.forEach(field => {
                      if (field.type === 'checkbox') {
                        data[field.name] = formData.get(field.name) === 'on'
                      } else {
                        data[field.name] = formData.get(field.name)
                      }
                    })
                    handleFormSubmit(data)
                  }} className="space-y-4">
                    {quizQuestions[currentQuestion].fields?.map((field, index) => (
                      <div key={index} className="text-left">
                        <label className="block text-white font-semibold mb-2">{field.label}</label>
                        {field.type === 'checkbox' ? (
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              name={field.name}
                              className="mr-2 w-4 h-4"
                            />
                            <span className="text-gray-300">{field.label}</span>
                          </div>
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            required={field.required}
                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400"
                            placeholder={field.label}
                          />
                        )}
                      </div>
                    ))}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-3 rounded-2xl hover:scale-105 transition-all duration-300"
                    >
                      CONTINUAR
                    </button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    {quizQuestions[currentQuestion].options?.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(quizQuestions[currentQuestion].id, option.value)}
                        className="w-full bg-white/5 hover:bg-yellow-500/20 border border-white/10 hover:border-yellow-500/50 rounded-2xl p-4 text-left transition-all duration-300 group"
                      >
                        <span className="text-white group-hover:text-yellow-400 font-semibold">
                          {option.label}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Gerador de Cupons para Afiliados Melhorado */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 backdrop-blur-sm border-y border-green-500/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-6">🎁 Gerador de Cupons Elite</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              <strong className="text-green-400">Afiliados Elite</strong> podem gerar <strong className="text-red-400">APENAS 1 CUPOM</strong> de <strong className="text-green-400">5% de desconto</strong> para compartilhar
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-green-500/30 shadow-2xl shadow-green-500/20">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Gerador de Cupom */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-center mb-6">
                  <Gift className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Gerar Cupom Único</h3>
                  <p className="text-gray-300">Cada afiliado pode gerar apenas 1 cupom</p>
                  <p className="text-red-400 text-sm font-bold">⚠️ VOCÊ NÃO PODE USAR SEU PRÓPRIO CUPOM</p>
                </div>
                
                <div className="space-y-4">
                  <button
                    onClick={generateCoupon}
                    disabled={couponUsed}
                    className={`w-full font-bold text-lg px-6 py-3 rounded-2xl transition-all duration-300 ${
                      couponUsed 
                        ? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-black hover:scale-105 shadow-xl shadow-green-500/30'
                    }`}
                  >
                    {couponUsed ? 'CUPOM JÁ GERADO' : 'GERAR CUPOM DE 5%'}
                  </button>
                  
                  {generatedCoupon && (
                    <div className="bg-green-500/20 border border-green-500/50 rounded-2xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-green-400 font-bold text-lg">{generatedCoupon}</p>
                          <p className="text-gray-300 text-sm">5% de desconto - Uso único por pessoa</p>
                          <p className="text-yellow-400 text-xs font-bold">Você ganha 20% de comissão por venda!</p>
                        </div>
                        <button
                          onClick={copyCoupon}
                          className="bg-green-500 text-black p-2 rounded-xl hover:bg-green-400 transition-colors"
                        >
                          <Copy className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Instruções para Afiliados */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">📋 Regras do Sistema</h3>
                <ul className="space-y-3">
                  {[
                    "Cada afiliado gera APENAS 1 cupom",
                    "Cupom só funciona para outras pessoas",
                    "Você NÃO pode usar seu próprio cupom",
                    "Cada cupom só pode ser usado 1x por pessoa",
                    "Você ganha 20% de comissão por venda",
                    "Bônus Elite: R$ 250 por R$ 3.500 vendidos",
                    "Saque via PIX instantâneo"
                  ].map((step, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-2xl p-4 border border-green-500/30">
                  <p className="text-green-400 font-bold text-center text-sm">
                    💰 GANHE ATÉ R$ 15,98 POR VENDA PRO PLUS
                  </p>
                  <p className="text-gray-300 text-center text-xs mt-1">
                    Comissão de 20% sobre R$ 79,90
                  </p>
                </div>
              </div>
            </div>
            
            {/* Exemplo de Mensagem para Compartilhar */}
            {generatedCoupon && (
              <div className="mt-8 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-2xl p-6 border border-yellow-500/30">
                <h4 className="text-lg font-bold text-white mb-3">📱 Mensagem Pronta para Compartilhar:</h4>
                <div className="bg-black/30 rounded-xl p-4 border border-white/10">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    🔥 <strong className="text-yellow-400">OPORTUNIDADE ÚNICA!</strong><br/>
                    Descobri o EliteLife - a plataforma que está transformando pessoas em milionários saudáveis!<br/><br/>
                    
                    ✅ Corpo de atleta + Mente milionária<br/>
                    ✅ 40 trilhas baseadas em Harvard e Stanford<br/>
                    ✅ Sistema de renda passiva integrado<br/>
                    ✅ IA Coach personalizada 24/7<br/>
                    ✅ Tracker nutricional inteligente<br/>
                    ✅ E-commerce + Influencer completo<br/><br/>
                    
                    🎁 Use meu cupom <strong className="text-green-400">{generatedCoupon}</strong> e ganhe <strong className="text-green-400">5% de desconto</strong>!<br/>
                    ⚠️ Cupom de uso único - aproveite agora!<br/><br/>
                    
                    Link: [Seu link de afiliado aqui]
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Suporte AI Funcional */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-6">🤖 Suporte AI Elite 24/7</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Assistente pessoal com inteligência artificial avançada que entende tudo sobre a plataforma e te acompanha em cada passo
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Chat AI Funcional */}
            <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/30">
              <div className="bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-2xl p-4 mb-6">
                <div className="flex items-center mb-4">
                  <Bot className="w-8 h-8 text-yellow-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Elite AI Coach</h3>
                    <p className="text-gray-400 text-sm">Especialista em tudo sobre EliteLife</p>
                  </div>
                  <div className="ml-auto w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="space-y-4 max-h-96 overflow-y-auto mb-4">
                {chatMessages.map((chat, index) => (
                  <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs px-4 py-2 rounded-2xl ${ 
                      chat.type === 'user' 
                        ? 'bg-yellow-500 text-black font-semibold' 
                        : 'bg-white/10 text-white border border-white/20'
                    }`}>
                      {chat.message}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center space-x-2">
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                  placeholder="Pergunte sobre cursos, nutrição, e-commerce, afiliados..." 
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-gray-400"
                />
                <button 
                  onClick={sendChatMessage}
                  className="bg-yellow-500 text-black p-2 rounded-xl hover:bg-yellow-400 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Recursos do AI */}
            <div className="space-y-6">
              {[
                {
                  icon: Brain,
                  title: "Conhecimento Total da Plataforma",
                  desc: "Entende todos os 40 cursos, funcionalidades, planos e pode responder qualquer dúvida sobre o EliteLife."
                },
                {
                  icon: Target,
                  title: "Análise Personalizada",
                  desc: "Analisa seu perfil do quiz e sugere trilhas, metas e estratégias personalizadas para seus objetivos."
                },
                {
                  icon: TrendingUp,
                  title: "Consultoria Financeira e E-commerce",
                  desc: "Orienta sobre investimentos, renda passiva, estratégias de afiliados e vendas online baseado em seu perfil."
                },
                {
                  icon: Apple,
                  title: "Coach Nutricional Inteligente",
                  desc: "Ajuda com planejamento alimentar, cálculo de macros e interpretação de relatórios semanais."
                },
                {
                  icon: Video,
                  title: "Estratégias de Conteúdo Viral",
                  desc: "Gera ideias para influencers, analisa trends e cria planos semanais de conteúdo viral."
                },
                {
                  icon: Shield,
                  title: "Suporte Técnico Avançado",
                  desc: "Resolve dúvidas sobre agenda, cursos, pagamentos e funcionalidades de forma instantânea 24/7."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-yellow-500/30 transition-all duration-300">
                  <feature.icon className="w-10 h-10 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planos Premium com Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-white text-center mb-12">💎 Planos de Membros Elite</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { 
                plan: "Starter", 
                price: "GRÁTIS", 
                features: [
                  "Quiz de perfil completo",
                  "Agenda editável com limitações",
                  "1 curso completo liberado",
                  "Controle nutricional básico",
                  "1 relatório nutricional",
                  "Chat AI básico",
                  "1 cupom de afiliado"
                ], 
                color: "from-gray-500 to-gray-600",
                popular: false,
                badge: "TESTE"
              },
              { 
                plan: "PRO Elite", 
                price: "R$ 49,90/mês", 
                features: [
                  "Todas as 40 trilhas premium",
                  "IA Coach pessoal avançado",
                  "Agenda editável completa",
                  "Tracker nutricional completo",
                  "Carteira inteligente",
                  "Certificados oficiais",
                  "Comunidade VIP",
                  "E-books para download",
                  "Suporte multilíngue"
                ], 
                color: "from-purple-500 to-purple-600",
                popular: true,
                badge: "MAIS POPULAR"
              },
              { 
                plan: "Anual VIP", 
                price: "R$ 329,90/ano", 
                features: [
                  "Tudo do PRO Elite",
                  "4 meses GRÁTIS",
                  "Certificados premium",
                  "Acesso vitalício garantido",
                  "Masterclasses exclusivas",
                  "Networking presencial",
                  "Material físico incluso",
                  "Desconto em eventos"
                ], 
                color: "from-blue-500 to-blue-600",
                popular: false,
                badge: "ECONOMIA"
              },
              { 
                plan: "Influencer Hub", 
                price: "R$ 119,90/mês", 
                features: [
                  "Tudo do PRO Elite",
                  "IA de conteúdo viral",
                  "Planos semanais automáticos",
                  "Análise de trends",
                  "Calendários fitness/nutrição",
                  "Hashtags otimizadas",
                  "Scripts prontos",
                  "Suporte para creators",
                  "Editor de thumbnails"
                ], 
                color: "from-pink-500 to-rose-600",
                popular: false,
                badge: "CREATORS"
              },
              { 
                plan: "PRO Plus Elite", 
                price: "R$ 79,90/mês", 
                features: [
                  "TUDO incluído",
                  "E-commerce Hub completo",
                  "Influencer IA viral",
                  "Mentoria 1:1 semanal",
                  "Consultoria personalizada",
                  "Acesso antecipado",
                  "Eventos exclusivos",
                  "Rede de contatos bilionários",
                  "Suporte 24/7 VIP",
                  "Garantia de resultados",
                  "Programa de afiliados PRO"
                ], 
                color: "from-yellow-400 to-amber-500",
                popular: false,
                badge: "ELITE MÁXIMO"
              }
            ].map((item, index) => (
              <div key={index} className={`bg-black/40 backdrop-blur-sm rounded-3xl p-6 border-2 relative hover:scale-105 transition-all duration-300 ${
                item.popular ? 'border-purple-400 shadow-2xl shadow-purple-500/30' : 
                item.plan === 'PRO Plus Elite' ? 'border-yellow-400 shadow-2xl shadow-yellow-500/30' : 
                item.plan === 'Influencer Hub' ? 'border-pink-400 shadow-2xl shadow-pink-500/30' :
                'border-white/20'
              }`}>
                {item.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.popular ? 'bg-purple-500 text-white' :
                      item.plan === 'PRO Plus Elite' ? 'bg-yellow-400 text-black' :
                      item.plan === 'Influencer Hub' ? 'bg-pink-500 text-white' :
                      'bg-gray-600 text-white'
                    }`}>
                      {item.badge}
                    </span>
                  </div>
                )}
                <div className={`w-full h-3 bg-gradient-to-r ${item.color} rounded-full mb-6`}></div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{item.plan}</h3>
                <p className={`text-2xl font-bold mb-6 text-center ${
                  item.plan === 'PRO Plus Elite' ? 'text-yellow-400' :
                  item.plan === 'Influencer Hub' ? 'text-pink-400' :
                  item.popular ? 'text-purple-400' : 'text-gray-300'
                }`}>{item.price}</p>
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <CheckCircle className={`w-4 h-4 mr-2 flex-shrink-0 mt-0.5 ${
                        item.plan === 'PRO Plus Elite' ? 'text-yellow-400' :
                        item.plan === 'Influencer Hub' ? 'text-pink-400' :
                        item.popular ? 'text-purple-400' : 'text-green-400'
                      }`} />
                      <span className="text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Botões de Ação */}
                <div className="space-y-2">
                  <button 
                    onClick={() => handlePlanSelect(item.plan)}
                    className={`w-full font-bold py-2 rounded-xl transition-all duration-300 text-sm ${
                      item.plan === 'PRO Plus Elite' ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:scale-105' :
                      item.plan === 'Influencer Hub' ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:scale-105' :
                      item.popular ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:scale-105' :
                      'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:bg-gray-500'
                    }`}
                  >
                    <Eye className="w-3 h-3 inline mr-1" />
                    VER PREVIEW
                  </button>
                  
                  {item.plan !== 'Starter' && (
                    <button 
                      onClick={() => handlePlanSelect(item.plan)}
                      className="w-full bg-green-500 text-white font-bold py-2 rounded-xl hover:bg-green-400 transition-all duration-300 text-sm"
                    >
                      <CreditCard className="w-3 h-3 inline mr-1" />
                      ASSINAR
                    </button>
                  )}
                </div>
                
                {item.plan === 'PRO Plus Elite' && (
                  <div className="mt-4 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-xl p-3 border border-yellow-500/30">
                    <p className="text-yellow-400 font-bold text-center text-xs">
                      🏆 GARANTIA DE RESULTADOS
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-2xl text-green-400 font-bold mb-2">
              💰 Sistema de Afiliados: 20% primeira venda + 15% recorrente
            </p>
            <p className="text-gray-300">
              Membros Elite podem ganhar <strong className="text-yellow-400">R$ 5.000 - R$ 50.000/mês</strong> como afiliados
            </p>
            <p className="text-yellow-400 font-bold mt-2">
              🎯 Bônus Elite: R$ 250 por cada R$ 3.500 vendidos!
            </p>
          </div>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="py-16 bg-black/40 backdrop-blur-sm border-t border-yellow-500/20">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-3xl mb-6 shadow-2xl shadow-yellow-500/50">
            <Diamond className="w-10 h-10 text-black" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">EliteLife</h3>
          <p className="text-gray-400 mb-4">
            Apresentação Executiva Premium • 2024
          </p>
          <p className="text-gray-500 text-sm">
            A plataforma exclusiva para a elite global • Transformando vidas • Gerando riqueza
          </p>
          <div className="mt-8 flex justify-center space-x-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-400">4.98★</p>
              <p className="text-gray-400 text-sm">Avaliação</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-400">75K+</p>
              <p className="text-gray-400 text-sm">Membros Elite</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-400">98%</p>
              <p className="text-gray-400 text-sm">Taxa de Sucesso</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}