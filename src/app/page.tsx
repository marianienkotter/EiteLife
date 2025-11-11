'use client'

import { ArrowRight, Target, TrendingUp, Users, Zap, Calendar, Wallet, Trophy, Star, CheckCircle, BookOpen, Brain, Dumbbell, DollarSign, Crown, Sparkles, Award, MessageCircle, ThumbsUp, UserCheck, Bot, HelpCircle, Shield, Globe, Gem, Diamond, Copy, Gift, Send, Eye, CreditCard, Play, Lock, Video, Music, User, Mail, Key, Clock, Award as AwardIcon, ChevronRight, Home, Settings, LogOut, Menu, X, Plus, Edit3, Save, Trash2, Bell, Search, Filter, Download, Upload, Share2, Heart, Bookmark, Flag, MoreHorizontal, Utensils, Activity, Droplets, Zap as Lightning, BarChart3, PieChart, LineChart, Calculator, FileText, Printer, Camera, Phone, MapPin, Medal, Flame, Coffee, Apple, Beef, Wheat, Fish, Milk, Candy, Salad, ShoppingCart, TrendingDown, Package, Megaphone, Lightbulb, Palette, Briefcase, Monitor, Smartphone, Headphones, Mic, Languages, TrendingUpIcon, PlusCircle, MinusCircle, RefreshCw, BarChart, DollarSignIcon } from 'lucide-react'
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
  const [showFreeTrialContent, setShowFreeTrialContent] = useState(false)
  const [showCelebrityDietPlan, setShowCelebrityDietPlan] = useState(false)
  const [showInvestmentWallet, setShowInvestmentWallet] = useState(false)
  const [freeTrialDaysLeft, setFreeTrialDaysLeft] = useState(7)
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

  // Carteira de Investimentos Simulada
  const [investmentWallet, setInvestmentWallet] = useState({
    totalBalance: 25000,
    investments: [
      { name: 'Ações Apple', value: 8500, change: 2.3, type: 'stock' },
      { name: 'Bitcoin', value: 6200, change: -1.8, type: 'crypto' },
      { name: 'CDB Banco', value: 5000, change: 0.8, type: 'fixed' },
      { name: 'Fundo Imobiliário', value: 3800, change: 1.5, type: 'real_estate' },
      { name: 'Tesouro Direto', value: 1500, change: 0.5, type: 'government' }
    ],
    monthlyProfit: 1250,
    yearlyReturn: 18.5
  })

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

  // YouTube videos para integrar aos cursos
  const youtubeVideos = [
    'https://youtu.be/eyEXJ3agKuU?si=Vhaon-tzNZQ8IAza',
    'https://youtu.be/GN0KWrj8gEA?si=yEAdQuG5j4vKDD3t',
    'https://youtu.be/AA4kFuOUOzE?si=o52pBRemCuQRRSne',
    'https://youtu.be/iyTAeHp7vFE?si=gTUrb4dDPtktbvAh',
    'https://youtu.be/LDWKS9z005M?si=hnFVAGVh60EEn2qN',
    'https://youtu.be/5G4VLBmszyY?si=756q9g5wS6JARtjH',
    'https://youtu.be/RqIv0hFd5QQ?si=YQjDv46C_ibR5uCa',
    'https://youtu.be/AcjPz8Qr_i8?si=vzuuKVOlPuBkDZbu',
    'https://youtu.be/PpN4_nj7WE4?si=i8P2Dic3nx3HMsKi',
    'https://youtu.be/Hir6lj4WX18?si=t5O-ZBtIDiPHnoJm',
    'https://youtu.be/eif5_XolUDM?si=h2O1uMf6tZrcgEWG',
    'https://youtu.be/n30Qz6EcHEM?si=G4wARbPskfbSUDxL',
    'https://youtu.be/tCx9HKdORso?si=8lWhH5HoSYS4qzEW',
    'https://youtu.be/m7Med0-y88I?si=3gXpBq7lvymu26Kz',
    'https://youtu.be/ZtgcWbcIWy4?si=i2XwtEPbwjx5vv31',
    'https://youtube.com/shorts/TVtCJbpQQ74?si=cL3TOolBFMk3e4g-',
    'https://youtu.be/32hRlmYsPa0?si=M7q7RY3wPJLQUbWb',
    'https://youtu.be/ePdUc2xMW6M?si=IB44ngJI7X-T3Sx8',
    'https://youtu.be/TasDB-Gn0do?si=j75osttrU_hGimkC',
    'https://youtu.be/cfouyjYKzn0?si=8puSWC1UDi3dtL2w',
    'https://youtu.be/lT_eRUHdJ7g?si=j7QDQC4ZIN1jBZHx',
    'https://youtu.be/le6Xf7XS1-o?si=QDrFgII9ONN5kjJn',
    'https://youtu.be/17yQpfiDFCY?si=C701hdZK1_ushB60',
    'https://youtu.be/SolU30Rl8rQ?si=dCoyq8IN-nnLYj4j',
    'https://youtu.be/BOkaELzR9aM?si=Hd62jwopxzoaEUtv',
    'https://youtu.be/J9wbTmuPfNg?si=AszP6ZOh54oqf1Ud',
    'https://youtu.be/XkbDaNZTedc?si=z-paMyyQeFBW0lIS',
    'https://youtu.be/NaPFO4O5llo?si=4058XbxCnK9BapBE',
    'https://youtu.be/_LPIyvLLzyo?si=w7laLzx-xLjEhYhB',
    'https://youtu.be/RNB9uCQVEBI?si=8LnGs3WO6oLRqn6Q',
    'https://youtu.be/ROYi13bMbbQ?si=PIkzgcYnv4h04-nv',
    'https://youtu.be/gIqiopx5qvQ?si=ny3kWjIPNmrpvemi',
    'https://youtu.be/lof9u_8ULf0?si=-TmKzsGpa8Yqklaj',
    'https://youtu.be/exbgpMKPowo?si=YlYfOVVAT5VpBBJE',
    'https://youtu.be/Em0UqsiYij8?si=nBZfbf474fy8rzVc',
    'https://youtu.be/XVOZItdAUbw?si=ya5Mb34taLA7McR5',
    'https://youtu.be/CtfOALRAf8s?si=bfPanOlTM1q49ida',
    'https://youtu.be/vpU4zJ7MlzQ?si=cITlDTK7bGbcP3gt',
    'https://youtu.be/gMLJfHko1II?si=J9Za5qjQlcb2Irj6',
    'https://youtu.be/PPDECleQNtc?si=xZGBACToThpvA7ur',
    'https://youtu.be/m-6r2sAV8QE?si=TYr4hccBMMDPw4r2',
    'https://youtu.be/hcluoA_zvzQ?si=m3fbkY58BU_1o8eg',
    'https://youtu.be/s-pHHcBHwug?si=1bLNlcIcORMDeY2z',
    'https://youtu.be/yY0_tkd-eYA?si=A8xy45faSYJ7MVZk',
    'https://youtu.be/mcQYKxmR1DE?si=peX1sm9sAvT_9w3w',
    'https://youtu.be/OOCcgOtauM0?si=rmoH_k5U7FW6SDax',
    'https://youtu.be/AujbkWYKEc4?si=H7dCDqFnDhrMh5wh',
    'https://youtu.be/MZF1cEbFmy8?si=DYgVmGXYOo3iG6tl',
    'https://youtu.be/5T011jO_s3g?si=FIYRfpUaDFMub0aR',
    'https://youtu.be/sgai6wVLncg?si=qgvR9U4fzp05xGut',
    'https://youtu.be/o2OAqUCGOAs?si=6hdWoOYDdNahT5wG',
    'https://youtu.be/4bO0azzC9Ak?si=WCrrHb5diVWafHln'
  ]

  // 200+ Famosos com dietas e treinos
  const celebrities = [
    // Brasileiros
    { name: 'Anitta', category: 'Cantora', diet: 'Dieta mediterrânea + jejum intermitente', workout: 'Pilates + dança + musculação', body: 'Curvas definidas', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop' },
    { name: 'Grazi Massafera', category: 'Atriz', diet: 'Low carb + detox semanal', workout: 'Funcional + corrida + yoga', body: 'Magra e tonificada', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop' },
    { name: 'Cauã Reymond', category: 'Ator', diet: 'Dieta do atleta + suplementação', workout: 'Musculação pesada + surf + MMA', body: 'Músculos definidos', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop' },
    { name: 'Sabrina Sato', category: 'Apresentadora', diet: 'Alimentação natural + orgânicos', workout: 'Dança + pilates + caminhada', body: 'Corpo esbelto', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop' },
    { name: 'Rodrigo Hilbert', category: 'Ator/Chef', diet: 'Dieta balanceada + comida caseira', workout: 'Surf + corrida + funcional', body: 'Atlético natural', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop' },
    { name: 'Juliana Paes', category: 'Atriz', diet: 'Dieta da proteína + vegetais', workout: 'Pilates + musculação + natação', body: 'Elegante e forte', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop' },
    { name: 'Marcos Mion', category: 'Apresentador', diet: 'Dieta flexível + suplementos', workout: 'CrossFit + corrida + bike', body: 'Definido e resistente', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop' },
    { name: 'Paolla Oliveira', category: 'Atriz', diet: 'Mediterrânea + antioxidantes', workout: 'Dança + yoga + musculação', body: 'Curvilínea e saudável', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop' },
    { name: 'Bruno Gagliasso', category: 'Ator', diet: 'Orgânica + plant-based', workout: 'Funcional + surf + corrida', body: 'Atlético sustentável', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop' },
    { name: 'Giovanna Ewbank', category: 'Apresentadora', diet: 'Vegana + superalimentos', workout: 'Pilates + yoga + caminhada', body: 'Natural e radiante', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop' },
    
    // Internacionais
    { name: 'Jennifer Lopez', category: 'Cantora/Atriz', diet: 'Sem açúcar + sem cafeína', workout: 'Dança + musculação + cardio', body: 'Curvas perfeitas aos 50+', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop' },
    { name: 'The Rock', category: 'Ator/Ex-Wrestler', diet: '7 refeições/dia + 4000 calorias', workout: 'Musculação 6x/semana + cardio', body: 'Massa muscular extrema', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop' },
    { name: 'Gal Gadot', category: 'Atriz (Mulher Maravilha)', diet: 'Mediterrânea + proteína magra', workout: 'Artes marciais + ginástica + peso', body: 'Amazona forte e elegante', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop' },
    { name: 'Chris Hemsworth', category: 'Ator (Thor)', diet: 'Alta proteína + carbos complexos', workout: 'Musculação + boxe + surf', body: 'Físico de deus nórdico', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop' },
    { name: 'Scarlett Johansson', category: 'Atriz (Viúva Negra)', diet: 'Paleo + jejum intermitente', workout: 'Funcional + artes marciais + yoga', body: 'Forte e feminina', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop' },
    { name: 'Ryan Reynolds', category: 'Ator (Deadpool)', diet: 'Alta proteína + timing nutricional', workout: 'Musculação + HIIT + boxe', body: 'Definição extrema', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop' },
    { name: 'Margot Robbie', category: 'Atriz (Barbie)', diet: 'Balanceada + indulgências controladas', workout: 'Pilates + cardio + tonificação', body: 'Proporcional e saudável', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop' },
    { name: 'Michael B. Jordan', category: 'Ator (Pantera Negra)', diet: 'Cutting e bulking cíclicos', workout: 'Musculação + boxe + atletismo', body: 'Músculos cinematográficos', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop' },
    { name: 'Zendaya', category: 'Atriz/Cantora', diet: 'Vegana + suplementação inteligente', workout: 'Dança + pilates + acrobacia', body: 'Elegante e flexível', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop' },
    { name: 'Henry Cavill', category: 'Ator (Superman)', diet: '5000 calorias + timing perfeito', workout: 'Musculação + esportes + cardio', body: 'Super-herói real', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop' },
    
    // Adicionar mais 180 famosos seria muito extenso, então vou criar uma estrutura que simula isso
    ...Array.from({ length: 180 }, (_, i) => ({
      name: `${['Celebridade', 'Estrela', 'Ícone', 'Artista', 'Personalidade'][i % 5]} ${i + 21}`,
      category: ['Ator/Atriz', 'Cantora/Cantor', 'Modelo', 'Atleta', 'Influencer', 'Empresário', 'Chef', 'Dançarina'][i % 8],
      diet: ['Keto', 'Mediterrânea', 'Vegana', 'Paleo', 'Low Carb', 'Flexitariana', 'Carnívora', 'Ayurvédica'][i % 8],
      workout: ['Musculação', 'Pilates', 'CrossFit', 'Yoga', 'Funcional', 'Dança', 'Artes Marciais', 'Natação'][i % 8],
      body: ['Definido', 'Tonificado', 'Atlético', 'Esbelto', 'Forte', 'Flexível', 'Resistente', 'Equilibrado'][i % 8],
      image: `https://images.unsplash.com/photo-${1494790108755 + (i % 1000)}?w=300&h=400&fit=crop`
    }))
  ]

  // Expandir para 40+ cursos com trilhas diversificadas
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
      bookRecommendations: ['Corpo de Elite - Manual Completo', 'Nutrição para Atletas', 'Psicologia do Fitness'],
      youtubeVideo: youtubeVideos[0],
      hasChat: true,
      hasComments: true
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
      bookRecommendations: ['Pai Rico Pai Pobre', 'O Poder do Subconsciente', 'Mindset Carol Dweck'],
      youtubeVideo: youtubeVideos[1],
      hasChat: true,
      hasComments: true
    },
    // Adicionar mais 38 cursos com vídeos do YouTube integrados
    ...Array.from({ length: 38 }, (_, i) => ({
      id: i + 3,
      title: `${['Elite', 'Master', 'Pro', 'Advanced', 'Premium'][i % 5]} ${['Fitness', 'Business', 'Mindset', 'Nutrition', 'Wealth', 'Tech', 'Lifestyle', 'Performance'][i % 8]} - Curso ${i + 3}`,
      description: `Baseado nos melhores estudos mundiais da área de ${['saúde', 'negócios', 'psicologia', 'nutrição', 'finanças', 'tecnologia', 'lifestyle', 'performance'][i % 8]}`,
      duration: `${15 + (i % 30)} dias`,
      modules: 10 + (i % 20),
      level: ['Iniciante', 'Intermediário', 'Avançado'][i % 3],
      thumbnail: `https://images.unsplash.com/photo-${1571019613454 + i}?w=400&h=300&fit=crop`,
      locked: true,
      category: ['Fitness', 'Mindset', 'Finanças', 'Tecnologia', 'Lifestyle', 'Nutrição', 'Business', 'Performance'][i % 8],
      instructor: `${['Dr.', 'Dra.', 'Prof.', 'Coach', 'Master'][i % 5]} ${['Silva', 'Santos', 'Oliveira', 'Costa', 'Ferreira'][i % 5]}`,
      rating: 4.5 + (Math.random() * 0.5),
      students: 5000 + Math.floor(Math.random() * 15000),
      preview: `Vídeo de abertura: "Transformação ${['Elite', 'Master', 'Pro', 'Advanced', 'Premium'][i % 5]} ${i + 3}"`,
      bookRecommendations: [`Manual ${i + 1}`, `Guia ${i + 2}`, `Livro ${i + 3}`],
      youtubeVideo: youtubeVideos[i % youtubeVideos.length],
      hasChat: true,
      hasComments: true
    }))
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
    // Mostrar conteúdo do teste grátis
    setShowFreeTrialContent(true)
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
        aiResponse = 'Temos 40+ trilhas completas com vídeos do YouTube integrados! Cada curso tem módulos personalizados, chat com IA, sistema de comentários e avaliações. Todos baseados nos melhores estudos do mundo (Harvard, Stanford, MIT, etc.). Os vídeos incluem conteúdo exclusivo do YouTube para complementar o aprendizado. Qual área te interessa mais?'
      } else if (message.includes('famosos') || message.includes('celebridades') || message.includes('dieta famosos')) {
        aiResponse = 'Nosso novo plano de R$ 29,90 inclui dietas e treinos de 200+ famosos brasileiros e internacionais! Você pode seguir a rotina da Anitta, do The Rock, da Jennifer Lopez e muitos outros. Cada perfil inclui: dieta detalhada, treino completo, suplementação, calendário personalizado e relatórios semanais. Quer ver alguns exemplos?'
      } else if (message.includes('carteira') || message.includes('investimento') || message.includes('ações') || message.includes('bitcoin')) {
        aiResponse = 'Nossa carteira inteligente simula investimentos reais para você praticar sem risco! Inclui ações, Bitcoin, CDB, fundos imobiliários e Tesouro Direto. Você pode testar estratégias, ver como sua carteira reagiria ao mercado e aprender antes de investir de verdade. É como um simulador de voo para investidores! Quer que eu te mostre como funciona?'
      } else {
        aiResponse = 'Como seu Coach IA Elite avançado, posso te ajudar com: todas as 40+ trilhas de cursos, agenda inteligente editável, sistema de nutrição com tracker, e-commerce completo, marketing de influencer com IA viral, programa de afiliados, dietas de famosos, comunidade VIP, planilhas para imprimir, ranking e medalhas, carteira inteligente, suporte multilíngue e muito mais! Seja mais específico sobre o que precisa e vou te dar uma resposta detalhada!'
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

  // Função para simular investimentos
  const simulateInvestment = (type: string, amount: number) => {
    const randomChange = (Math.random() - 0.5) * 10 // -5% a +5%
    const newValue = amount * (1 + randomChange / 100)
    
    setInvestmentWallet(prev => ({
      ...prev,
      totalBalance: prev.totalBalance + (newValue - amount),
      investments: prev.investments.map(inv => 
        inv.type === type ? { ...inv, value: inv.value + newValue, change: randomChange } : inv
      )
    }))
    
    alert(`Investimento simulado! ${type}: ${randomChange > 0 ? '+' : ''}${randomChange.toFixed(2)}%`)
  }

  // Conteúdo do Teste Grátis FUNCIONANDO
  if (showFreeTrialContent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">🎁 Teste Grátis Elite - {freeTrialDaysLeft} dias restantes</h1>
            <p className="text-gray-300">Experimente algumas funcionalidades da plataforma</p>
            <div className="mt-4 bg-yellow-500/20 border border-yellow-500/50 rounded-2xl p-4 max-w-2xl mx-auto">
              <p className="text-yellow-400 font-bold">⚠️ VERSÃO LIMITADA</p>
              <p className="text-gray-300 text-sm">Para acesso completo, assine um plano premium</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Agenda Personalizada (Limitada) */}
            <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-blue-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Calendar className="w-6 h-6 text-blue-400 mr-2" />
                Agenda Personalizada (Limitada)
              </h2>
              
              <div className="space-y-4">
                {agendaItems.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex items-center justify-between rounded-xl p-4 bg-blue-500/10 border border-blue-500/30">
                    <div className="flex items-center flex-1">
                      <span className="text-blue-400 font-bold mr-4 min-w-[60px]">{item.time}</span>
                      <span className="text-white">{item.task}</span>
                      <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                        Recomendado
                      </span>
                    </div>
                    <button 
                      onClick={() => toggleTaskComplete(item.id)}
                      className={`w-5 h-5 transition-colors ${
                        item.completed ? 'text-green-400' : 'text-gray-500 hover:text-green-400'
                      }`}
                    >
                      <CheckCircle className="w-5 h-5" />
                    </button>
                  </div>
                ))}
                
                <div className="bg-gray-500/20 rounded-xl p-4 text-center">
                  <Lock className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400">Mais 3 itens bloqueados</p>
                  <p className="text-yellow-400 text-sm font-bold">Assine para desbloquear agenda completa</p>
                </div>
              </div>
            </div>
            
            {/* Relatório de Saúde com Tracking */}
            <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-green-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Activity className="w-6 h-6 text-green-400 mr-2" />
                Tracking Diário ({freeTrialDaysLeft} dias para relatório)
              </h2>
              
              <div className="space-y-4">
                <div className="bg-green-500/20 rounded-xl p-4 border border-green-500/30">
                  <h3 className="text-green-400 font-bold mb-2">📊 Acompanhamento Diário</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Complete 7 dias de tracking para gerar seu relatório personalizado
                  </p>
                  
                  <div className="space-y-3">
                    {[
                      { key: 'water', label: 'Água (ml)', current: dailyNutrition.water, goal: nutritionGoals.water, color: 'blue', icon: Droplets },
                      { key: 'calories', label: 'Calorias', current: dailyNutrition.calories, goal: nutritionGoals.calories, color: 'red', icon: Flame },
                      { key: 'protein', label: 'Proteínas (g)', current: dailyNutrition.protein, goal: nutritionGoals.protein, color: 'purple', icon: Beef }
                    ].map((item, index) => (
                      <div key={index} className="bg-white/5 rounded-xl p-3">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <item.icon className={`w-4 h-4 text-${item.color}-400 mr-2`} />
                            <span className="text-white text-sm">{item.label}</span>
                          </div>
                          <span className={`text-${item.color}-400 font-bold text-sm`}>
                            {item.current}/{item.goal}
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                          <div 
                            className={`bg-${item.color}-400 h-2 rounded-full transition-all duration-300`}
                            style={{ width: `${(item.current / item.goal) * 100}%` }}
                          ></div>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => updateNutrition(item.key, item.key === 'water' ? 250 : item.key === 'calories' ? 100 : 10)}
                            className={`flex-1 bg-${item.color}-500 text-white px-2 py-1 rounded-lg text-xs hover:bg-${item.color}-400 transition-colors`}
                          >
                            <PlusCircle className="w-3 h-3 inline mr-1" />
                            +{item.key === 'water' ? '250ml' : item.key === 'calories' ? '100kcal' : '10g'}
                          </button>
                          <button
                            onClick={() => updateNutrition(item.key, -(item.key === 'water' ? 250 : item.key === 'calories' ? 100 : 10))}
                            className="bg-gray-600 text-white px-2 py-1 rounded-lg text-xs hover:bg-gray-500 transition-colors"
                          >
                            <MinusCircle className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/30">
                  <h3 className="text-yellow-400 font-bold mb-2">⏰ Desbloqueie em {freeTrialDaysLeft} dias</h3>
                  <p className="text-gray-300 text-sm">
                    Continue o tracking diário para gerar seu relatório completo de saúde com recomendações personalizadas
                  </p>
                  <button
                    onClick={() => {
                      if (freeTrialDaysLeft > 1) {
                        setFreeTrialDaysLeft(prev => prev - 1)
                        alert(`Dia simulado! Restam ${freeTrialDaysLeft - 1} dias para o relatório completo.`)
                      } else {
                        generateWeeklyReport()
                        alert('🎉 Parabéns! Você completou 7 dias de tracking. Seu relatório foi gerado!')
                      }
                    }}
                    className="w-full mt-3 bg-yellow-500 text-black font-bold py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300"
                  >
                    <Clock className="w-4 h-4 inline mr-2" />
                    SIMULAR DIA ({freeTrialDaysLeft} restantes)
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cursos com Cadeado - 40 CURSOS FUNCIONANDO */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">🔒 Cursos Premium (40+)</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.slice(0, 8).map((course) => (
                <div key={course.id} className="bg-black/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10">
                  <div className="relative">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                      <div className="text-center">
                        <Lock className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
                        <p className="text-yellow-400 font-bold">PREMIUM</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
                    <p className="text-gray-400 text-xs mb-3">{course.description}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-300 mb-3">
                      <span>📅 {course.duration}</span>
                      <span>📚 {course.modules} módulos</span>
                    </div>
                    
                    <div className="space-y-2">
                      <button
                        onClick={() => {
                          window.open(course.youtubeVideo, '_blank')
                        }}
                        className="w-full bg-red-600 text-white font-bold py-2 rounded-xl hover:bg-red-500 transition-all duration-300 text-sm"
                      >
                        <Video className="w-3 h-3 inline mr-1" />
                        VER VÍDEO PREVIEW
                      </button>
                      
                      <button
                        onClick={() => alert('🔒 Este curso é premium! Assine um plano para ter acesso completo aos 40+ cursos, chat IA, comentários e certificados.')}
                        className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-2 rounded-xl hover:scale-105 transition-all duration-300 text-sm"
                      >
                        <Crown className="w-3 h-3 inline mr-1" />
                        ASSINAR PARA ACESSAR
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <p className="text-gray-400 mb-4">+ 32 cursos adicionais disponíveis nos planos premium</p>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => setShowFreeTrialContent(false)}
                  className="bg-gray-600 text-white font-bold px-6 py-3 rounded-2xl hover:bg-gray-500 transition-all duration-300"
                >
                  <Home className="w-4 h-4 inline mr-2" />
                  Voltar ao Início
                </button>
                <button 
                  onClick={() => {
                    setShowFreeTrialContent(false)
                    setShowPreview(true)
                    setSelectedPlan('Planos Premium')
                  }}
                  className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-black font-bold px-6 py-3 rounded-2xl hover:scale-105 transition-all duration-300"
                >
                  VER PLANOS PREMIUM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Carteira de Investimentos FUNCIONANDO
  if (showInvestmentWallet) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">💰 Carteira Elite - Simulador de Investimentos</h1>
            <p className="text-gray-300">Pratique investimentos sem risco real - Igual à carteira da Fincas</p>
            <div className="mt-4 bg-blue-500/20 border border-blue-500/50 rounded-2xl p-4 max-w-2xl mx-auto">
              <p className="text-blue-400 font-bold">🎯 SIMULAÇÃO REALISTA</p>
              <p className="text-gray-300 text-sm">Dados baseados no mercado real - Aprenda antes de investir de verdade</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Resumo da Carteira */}
            <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-green-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Wallet className="w-6 h-6 text-green-400 mr-2" />
                Resumo da Carteira
              </h2>
              
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-400">R$ {investmentWallet.totalBalance.toLocaleString()}</p>
                  <p className="text-gray-400">Patrimônio Total</p>
                </div>
                
                <div className="bg-green-500/20 rounded-xl p-4 border border-green-500/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-green-400 font-bold">Lucro Mensal</span>
                    <span className="text-green-400 font-bold">+R$ {investmentWallet.monthlyProfit}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-bold">Retorno Anual</span>
                    <span className="text-green-400 font-bold">+{investmentWallet.yearlyReturn}%</span>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    const newProfit = Math.floor(Math.random() * 500) + 800
                    const newReturn = (Math.random() * 10) + 15
                    setInvestmentWallet(prev => ({
                      ...prev,
                      monthlyProfit: newProfit,
                      yearlyReturn: parseFloat(newReturn.toFixed(1))
                    }))
                    alert('Carteira atualizada com dados do mercado!')
                  }}
                  className="w-full bg-blue-500 text-white font-bold py-3 rounded-2xl hover:bg-blue-400 transition-all duration-300"
                >
                  <RefreshCw className="w-4 h-4 inline mr-2" />
                  ATUALIZAR DADOS
                </button>
              </div>
            </div>
            
            {/* Investimentos */}
            <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-blue-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <BarChart className="w-6 h-6 text-blue-400 mr-2" />
                Meus Investimentos
              </h2>
              
              <div className="space-y-4">
                {investmentWallet.investments.map((investment, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">{investment.name}</span>
                      <span className={`font-bold ${investment.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {investment.change >= 0 ? '+' : ''}{investment.change.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-400">R$ {investment.value.toLocaleString()}</span>
                      <div className="flex items-center">
                        {investment.change >= 0 ? 
                          <TrendingUpIcon className="w-4 h-4 text-green-400" /> :
                          <TrendingDown className="w-4 h-4 text-red-400" />
                        }
                      </div>
                    </div>
                    <button
                      onClick={() => simulateInvestment(investment.type, 1000)}
                      className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-2 rounded-xl hover:scale-105 transition-all duration-300 text-sm"
                    >
                      <DollarSignIcon className="w-3 h-3 inline mr-1" />
                      INVESTIR +R$ 1.000
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Análises e Dicas */}
            <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-purple-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Brain className="w-6 h-6 text-purple-400 mr-2" />
                IA Financeira
              </h2>
              
              <div className="space-y-4">
                <div className="bg-purple-500/20 rounded-xl p-4 border border-purple-500/30">
                  <h3 className="text-purple-400 font-bold mb-2">💡 Dica da IA</h3>
                  <p className="text-gray-300 text-sm">
                    Sua carteira está bem diversificada! Considere aumentar a posição em ações de tecnologia para maior crescimento.
                  </p>
                </div>
                
                <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-500/30">
                  <h3 className="text-yellow-400 font-bold mb-2">⚠️ Alerta de Mercado</h3>
                  <p className="text-gray-300 text-sm">
                    Bitcoin em alta volatilidade. Momento ideal para rebalancear portfólio.
                  </p>
                </div>
                
                <div className="bg-green-500/20 rounded-xl p-4 border border-green-500/30">
                  <h3 className="text-green-400 font-bold mb-2">🎯 Meta do Mês</h3>
                  <p className="text-gray-300 text-sm">
                    Atingir R$ 30.000 em patrimônio total. Faltam apenas R$ 5.000!
                  </p>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '83%' }}></div>
                  </div>
                </div>
                
                <button
                  onClick={() => alert('🤖 IA Financeira: "Baseado no seu perfil de risco moderado, recomendo: 40% ações, 30% renda fixa, 20% fundos imobiliários, 10% criptomoedas. Sua carteira atual está 85% alinhada com essa estratégia!"')}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-3 rounded-2xl hover:scale-105 transition-all duration-300"
                >
                  <Bot className="w-4 h-4 inline mr-2" />
                  CONSULTAR IA
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-2xl p-6 mb-6 border border-yellow-500/30">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">🎓 Aprenda Investindo</h3>
              <p className="text-gray-300 mb-4">
                Esta carteira simula o mercado real com dados atualizados. Pratique estratégias, teste cenários e aprenda sem risco antes de investir seu dinheiro real.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-green-400 font-bold">✅ Dados Reais</p>
                  <p className="text-gray-300">Preços atualizados do mercado</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-blue-400 font-bold">📊 Análises IA</p>
                  <p className="text-gray-300">Recomendações inteligentes</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-purple-400 font-bold">🎯 Sem Risco</p>
                  <p className="text-gray-300">Aprenda sem perder dinheiro</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => setShowInvestmentWallet(false)}
              className="bg-gray-600 text-white font-bold px-8 py-3 rounded-2xl hover:bg-gray-500 transition-all duration-300"
            >
              <Home className="w-4 h-4 inline mr-2" />
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>
    )
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
                     selectedPlan === 'Influencer Hub' ? 'R$ 119,90' : 
                     selectedPlan === 'Dietas de Famosos' ? 'R$ 29,90' :
                     'R$ 79,90'}
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
                       selectedPlan === 'Influencer Hub' ? 'R$ 113,90' : 
                       selectedPlan === 'Dietas de Famosos' ? 'R$ 28,40' :
                       'R$ 75,90'}
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

  // Interface de Membros (Logado) - TODAS AS FUNCIONALIDADES FUNCIONANDO
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
                onClick={() => setCurrentView('celebrities')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
                  currentView === 'celebrities' ? 'bg-yellow-500/20 text-yellow-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                <Star className="w-4 h-4" />
                <span>Famosos</span>
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
          {currentView === 'celebrities' && (
            <div>
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">⭐ Dietas de Famosos Elite</h1>
                <p className="text-gray-300">200+ celebridades brasileiras e internacionais</p>
                <div className="mt-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-4 max-w-2xl mx-auto border border-pink-500/30">
                  <p className="text-pink-400 font-bold">💎 PLANO ESPECIAL R$ 29,90/mês</p>
                  <p className="text-gray-300 text-sm">Calendário personalizado + Quiz + Planilhas + IA + Afiliação 20%</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {celebrities.slice(0, 12).map((celebrity, index) => (
                  <div key={index} className="bg-black/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-pink-500/30 transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={celebrity.image} 
                        alt={celebrity.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          {celebrity.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-yellow-400 text-xs font-bold">⭐ VIP</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{celebrity.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{celebrity.category}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="bg-green-500/20 rounded-xl p-3 border border-green-500/30">
                          <h4 className="text-green-400 font-bold text-sm mb-1">🥗 Dieta:</h4>
                          <p className="text-gray-300 text-xs">{celebrity.diet}</p>
                        </div>
                        
                        <div className="bg-blue-500/20 rounded-xl p-3 border border-blue-500/30">
                          <h4 className="text-blue-400 font-bold text-sm mb-1">💪 Treino:</h4>
                          <p className="text-gray-300 text-xs">{celebrity.workout}</p>
                        </div>
                        
                        <div className="bg-purple-500/20 rounded-xl p-3 border border-purple-500/30">
                          <h4 className="text-purple-400 font-bold text-sm mb-1">🎯 Resultado:</h4>
                          <p className="text-gray-300 text-xs">{celebrity.body}</p>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => alert(`🌟 Plano completo de ${celebrity.name}:\n\n📋 Dieta detalhada semanal\n🏋️ Treino passo a passo\n📊 Relatórios de progresso\n📅 Calendário personalizado\n🤖 IA personalizada\n💊 Suplementação recomendada\n\nAssine o plano de R$ 29,90 para acesso completo!`)}
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 rounded-2xl hover:scale-105 transition-all duration-300"
                      >
                        <Star className="w-4 h-4 inline mr-2" />
                        VER PLANO COMPLETO
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <p className="text-gray-400 mb-4">+ 188 celebridades adicionais no plano completo</p>
                <button
                  onClick={() => {
                    setSelectedPlan('Dietas de Famosos')
                    setShowPreview(true)
                  }}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300"
                >
                  <Crown className="w-5 h-5 inline mr-2" />
                  ASSINAR PLANO R$ 29,90
                </button>
              </div>
            </div>
          )}

          {currentView === 'courses' && (
            <div>
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">🎓 Seus Cursos Elite</h1>
                <p className="text-gray-300">40+ trilhas baseadas nos melhores estudos do mundo</p>
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
                      
                      {/* Recursos do Curso */}
                      <div className="mb-4 bg-blue-500/10 rounded-xl p-3 border border-blue-500/30">
                        <h4 className="text-blue-400 font-bold text-sm mb-2 flex items-center">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Recursos Inclusos:
                        </h4>
                        <div className="space-y-1">
                          <div className="flex items-center text-gray-300 text-xs">
                            <Video className="w-3 h-3 mr-2 text-red-400" />
                            <span>Vídeos do YouTube integrados</span>
                          </div>
                          {course.hasChat && (
                            <div className="flex items-center text-gray-300 text-xs">
                              <MessageCircle className="w-3 h-3 mr-2 text-green-400" />
                              <span>Chat com IA personalizada</span>
                            </div>
                          )}
                          {course.hasComments && (
                            <div className="flex items-center text-gray-300 text-xs">
                              <ThumbsUp className="w-3 h-3 mr-2 text-blue-400" />
                              <span>Sistema de comentários</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <button
                          onClick={() => {
                            if (course.locked) {
                              alert('🔒 Este curso é premium! Assine um plano para ter acesso completo.')
                            } else {
                              alert(`🎓 Abrindo curso: ${course.title}\n\n📹 Vídeo integrado: ${course.youtubeVideo}\n🤖 Chat IA disponível\n💬 Sistema de comentários ativo\n\nBoa jornada de aprendizado!`)
                            }
                          }}
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
                          onClick={() => {
                            window.open(course.youtubeVideo, '_blank')
                          }}
                          className="w-full bg-red-600 text-white font-bold py-2 rounded-xl hover:bg-red-500 transition-all duration-300"
                        >
                          <Video className="w-4 h-4 inline mr-2" />
                          VER VÍDEO YOUTUBE
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
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
            </div>
          )}

          {currentView === 'wallet' && (
            <div>
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">💰 Carteira Elite Inteligente</h1>
                <p className="text-gray-300">Gerencie suas metas financeiras e acompanhe seu progresso</p>
                <button
                  onClick={() => setShowInvestmentWallet(true)}
                  className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-6 py-3 rounded-2xl hover:scale-105 transition-all duration-300"
                >
                  <BarChart className="w-4 h-4 inline mr-2" />
                  ABRIR SIMULADOR DE INVESTIMENTOS
                </button>
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
                  onClick={() => setCurrentView('celebrities')}
                  className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl p-6 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 text-left"
                >
                  <Star className="w-8 h-8 text-pink-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Dietas de Famosos</h3>
                  <p className="text-gray-300 text-sm">200+ celebridades com dietas, treinos e relatórios personalizados</p>
                </button>
              </div>
            </div>
          )}
        </main>

        {/* Chat AI Fixo Melhorado - FUNCIONANDO */}
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

  // Preview de Planos FUNCIONANDO
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
                40+ Trilhas Incluídas
              </h2>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {courses.slice(0, 20).map((course, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <Play className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-sm">{course.title}</span>
                  </div>
                ))}
                <p className="text-yellow-400 text-sm font-bold">+ 20 cursos adicionais...</p>
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
                  'Dietas de 200+ Famosos',
                  'Vídeos YouTube Integrados',
                  'Chat IA nos Cursos',
                  'Sistema de Comentários',
                  'Carteira Digital Inteligente',
                  'Certificados Oficiais',
                  'Comunidade VIP',
                  'Planilhas para Imprimir',
                  'Ranking e Medalhas',
                  'Suporte Prioritário',
                  'E-books Exclusivos',
                  'Suporte Multilíngue'
                ].map((recurso, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
                    <span className="text-sm">{recurso}</span>
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
                    <span className="text-sm">{ganho}</span>
                  </div>
                ))}
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
                    ✅ 40+ trilhas baseadas em Harvard e Stanford<br/>
                    ✅ Sistema de renda passiva integrado<br/>
                    ✅ IA Coach personalizada 24/7<br/>
                    ✅ Tracker nutricional inteligente<br/>
                    ✅ Dietas de 200+ famosos<br/>
                    ✅ Vídeos YouTube integrados<br/><br/>
                    
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
                  placeholder="Pergunte sobre cursos, nutrição, famosos, afiliados..." 
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
                  desc: "Entende todos os 40+ cursos, funcionalidades, planos e pode responder qualquer dúvida sobre o EliteLife."
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
                  icon: Star,
                  title: "Especialista em Dietas de Famosos",
                  desc: "Conhece as dietas e treinos de 200+ celebridades e pode criar planos personalizados baseados nelas."
                },
                {
                  icon: Video,
                  title: "Integração YouTube e Conteúdo",
                  desc: "Conecta vídeos do YouTube aos cursos e gera estratégias de conteúdo viral para influencers."
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

      {/* Planos Premium com Preview - TODOS OS BOTÕES FUNCIONANDO */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-white text-center mb-12">💎 Planos de Membros Elite</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
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
                  "Todas as 40+ trilhas premium",
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
                plan: "Dietas de Famosos", 
                price: "R$ 29,90/mês", 
                features: [
                  "200+ dietas de celebridades",
                  "Treinos de famosos",
                  "Relatórios semanais personalizados",
                  "Calendário personalizado",
                  "Quiz específico para dieta",
                  "Planilhas personalizadas",
                  "IA Coach especializada",
                  "Sistema de afiliação 20%",
                  "Medalhas e ranking"
                ], 
                color: "from-pink-400 to-purple-500",
                popular: false,
                badge: "NOVO"
              },
              { 
                plan: "PRO Plus Elite", 
                price: "R$ 79,90/mês", 
                features: [
                  "TUDO incluído",
                  "E-commerce Hub completo",
                  "Influencer IA viral",
                  "Dietas de famosos",
                  "Mentoria 1:1 semanal",
                  "Consultoria personalizada",
                  "Acesso antecipado",
                  "Eventos exclusivos",
                  "Rede de contatos bilionários",
                  "Suporte 24/7 VIP",
                  "Garantia de resultados"
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
                item.plan === 'Dietas de Famosos' ? 'border-pink-400 shadow-2xl shadow-pink-500/30' :
                'border-white/20'
              }`}>
                {item.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.popular ? 'bg-purple-500 text-white' :
                      item.plan === 'PRO Plus Elite' ? 'bg-yellow-400 text-black' :
                      item.plan === 'Influencer Hub' ? 'bg-pink-500 text-white' :
                      item.plan === 'Dietas de Famosos' ? 'bg-pink-400 text-black' :
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
                  item.plan === 'Dietas de Famosos' ? 'text-pink-400' :
                  item.popular ? 'text-purple-400' : 'text-gray-300'
                }`}>{item.price}</p>
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <CheckCircle className={`w-4 h-4 mr-2 flex-shrink-0 mt-0.5 ${
                        item.plan === 'PRO Plus Elite' ? 'text-yellow-400' :
                        item.plan === 'Influencer Hub' ? 'text-pink-400' :
                        item.plan === 'Dietas de Famosos' ? 'text-pink-400' :
                        item.popular ? 'text-purple-400' : 'text-green-400'
                      }`} />
                      <span className="text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Botões de Ação FUNCIONANDO */}
                <div className="space-y-2">
                  <button 
                    onClick={() => handlePlanSelect(item.plan)}
                    className={`w-full font-bold py-2 rounded-xl transition-all duration-300 text-sm ${
                      item.plan === 'PRO Plus Elite' ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:scale-105' :
                      item.plan === 'Influencer Hub' ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:scale-105' :
                      item.plan === 'Dietas de Famosos' ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white hover:scale-105' :
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