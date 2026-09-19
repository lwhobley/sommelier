import React, { useState, useEffect } from 'react';
import { 
  Wine, Grape, Sparkles, Award, Music, BookOpen, CheckCircle, 
  ChevronRight, Play, RotateCcw, Trophy, Volume2, VolumeX,
  Compass, Flame, Shield, ArrowRight, Heart, Share2, Star
} from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('intro'); // intro, hub, lesson, game, song, trivia
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [montageStage, setMontageStage] = useState(0);
  const [activeModule, setActiveModule] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);

  // Seed to Wine Montage stages
  const montageSteps = [
    { title: "The Seed", subtitle: "Dormant potential resting in deep mineral soils of Burgundy", image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=1200&auto=format&fit=crop", color: "from-amber-900/80 to-[#120D0E]" },
    { title: "The Living Vine", subtitle: "Spring budburst awakening under golden dawn sunlight", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop", color: "from-emerald-950/80 to-[#120D0E]" },
    { title: "The Orchard & Canopy", subtitle: "Verdant rows dancing in the Mediterranean breeze", image: "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?q=80&w=1200&auto=format&fit=crop", color: "from-green-900/80 to-[#120D0E]" },
    { title: "The Harvest (Vendange)", subtitle: "Hand-selected clusters gathered at peak diurnal temperature", image: "https://images.unsplash.com/photo-1599813336302-3b68019053cc?q=80&w=1200&auto=format&fit=crop", color: "from-purple-950/80 to-[#120D0E]" },
    { title: "The Crush & Ferment", subtitle: "Stainless steel & concrete vessels unlocking liquid alchemy", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop", color: "from-[#722F37]/80 to-[#120D0E]" },
    { title: "The Oak Barrel Age", subtitle: "French oak imparting whispers of vanilla, cedar, and velvety tannins", image: "https://images.unsplash.com/photo-1568224972572-5645517db32d?q=80&w=1200&auto=format&fit=crop", color: "from-amber-950/80 to-[#120D0E]" },
    { title: "Grand Cru Bottling", subtitle: "A masterpiece born from earth, time, and human mastery", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop", color: "from-[#722F37] to-[#120D0E]" }
  ];

  useEffect(() => {
    if (currentScreen === 'intro') {
      const timer = setInterval(() => {
        setMontageStage((prev) => {
          if (prev < montageSteps.length - 1) return prev + 1;
          clearInterval(timer);
          return prev;
        });
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [currentScreen]);

  const modules = [
    { id: 1, level: "Novice", title: "Botanical Genesis & Viticulture", desc: "Climates, soils, terroir, and vine physiology from seed to pruning.", icon: Grape, color: "border-rose-900/50 bg-gradient-to-br from-[#1a1215] to-[#120D0E]" },
    { id: 2, level: "Intermediate", title: "Vinification & Cellar Architecture", desc: "Maceration, oak aging, malolactic fermentation, and bottle conditioning.", icon: Wine, color: "border-amber-900/50 bg-gradient-to-br from-[#1a1512] to-[#120D0E]" },
    { id: 3, level: "Advanced", title: "Old World Masterclass: France & Italy", desc: "Bordeaux, Burgundy, Piedmont, and Tuscany classification systems.", icon: Compass, color: "border-purple-900/50 bg-gradient-to-br from-[#18121a] to-[#120D0E]" },
    { id: 4, level: "Master / Certified", title: "Blind Tasting Analytics & Service", desc: "Deductive tasting grid, service ritual, decanting, and vintage pairing.", icon: Award, color: "border-yellow-700/50 bg-gradient-to-br from-[#1c1912] to-[#120D0E]" },
  ];

  const triviaQuestions = [
    {
      q: "In Bordeaux blending, which grape provides the velvety backbone and lush plum notes?",
      options: ["Cabernet Sauvignon", "Merlot", "Petit Verdot", "Cabernet Franc"],
      answer: 1,
      explanation: "Merlot ripens earlier and provides lushness, round body, and black cherry/plum fruit depth."
    },
    {
      q: "What geological soil profile is famously characteristic of Champagne's Côte des Blancs?",
      options: ["Granite", "Kimmeridgian Limestone", "Chalk (Belemnite)", "Schist"],
      answer: 2,
      explanation: "Pure chalk subsoil provides exceptional drainage and imparts the signature razor-sharp mineral tension in Chardonnay."
    },
    {
      q: "What causes 'cork taint' (TCA - 2,4,6-Trichloroanisole)?",
      options: ["Oxidation in the bottle", "Interaction of chlorine sanitizers with natural mold in cork bark", "Excess sulfur dioxide at bottling", "Premature yeast autolysis"],
      answer: 1,
      explanation: "TCA forms when airborne or cleansing phenols interact with molds present in natural cork processing."
    }
  ];

  return (
    <div className="min-h-screen bg-[#120D0E] text-[#F5EBE0] flex flex-col selection:bg-[#722F37] selection:text-white relative overflow-hidden">
      {/* Ambient glowing artistic background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#722F37]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-900/15 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Top Header */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-[#3B2226]/40 backdrop-blur-md sticky top-0 z-50 bg-[#120D0E]/80">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentScreen('intro')}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#722F37] to-amber-700 flex items-center justify-center shadow-lg shadow-rose-950/50">
            <Wine className="w-5 h-5 text-[#F5EBE0]" />
          </div>
          <div>
            <h1 className="font-serif-luxury text-xl font-bold tracking-wider text-[#F5EBE0]">GRAND CRU</h1>
            <p className="text-[10px] uppercase tracking-widest text-amber-200/60 font-semibold">Sommelier Master Academy</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-full bg-[#241719] hover:bg-[#3B2226] text-amber-200/80 transition-all border border-[#3B2226]"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
          {currentScreen !== 'intro' && (
            <button 
              onClick={() => setCurrentScreen('intro')}
              className="text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-rose-900/50 hover:bg-[#722F37]/30 transition-all text-amber-100"
            >
              Seed Montage
            </button>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {currentScreen === 'intro' && (
          <div className="flex-1 flex flex-col relative">
            {/* Background montage image */}
            <div className="absolute inset-0 z-0">
              <img 
                src={montageSteps[montageStage].image} 
                alt={montageSteps[montageStage].title}
                className="w-full h-full object-cover opacity-40 transition-all duration-1000 scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${montageSteps[montageStage].color}`}></div>
            </div>

            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto py-12">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#722F37]/40 border border-rose-800/50 text-amber-200 text-xs uppercase tracking-widest mb-6 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Cinematic Genesis Journey</span>
              </div>

              <h2 className="font-serif-luxury text-5xl md:text-7xl font-bold text-[#F5EBE0] mb-4 tracking-tight drop-shadow-md">
                {montageSteps[montageStage].title}
              </h2>
              <p className="text-lg md:text-xl text-amber-100/80 max-w-2xl font-light mb-12">
                {montageSteps[montageStage].subtitle}
              </p>

              {/* Progress indicator pips */}
              <div className="flex space-x-2 mb-12">
                {montageSteps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMontageStage(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${montageStage === idx ? 'w-10 bg-amber-400' : 'w-2 bg-white/20'}`}
                  />
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => setCurrentScreen('hub')}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#722F37] to-amber-800 hover:from-[#8a3842] hover:to-amber-700 text-white font-medium tracking-wide shadow-xl shadow-rose-950/60 transition-all flex items-center space-x-3 group border border-rose-700/30"
                >
                  <span>Enter Academy Curriculum</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                {montageStage < montageSteps.length - 1 ? (
                  <button
                    onClick={() => setMontageStage(prev => prev + 1)}
                    className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-amber-100 text-sm tracking-wide transition-all border border-white/10"
                  >
                    Next Stage ({montageStage + 1}/{montageSteps.length})
                  </button>
                ) : (
                  <button
                    onClick={() => setMontageStage(0)}
                    className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-amber-100 text-sm tracking-wide transition-all flex items-center space-x-2 border border-white/10"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Replay Genesis</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {currentScreen === 'hub' && (
          <div className="flex-1 max-w-6xl w-full mx-auto px-6 py-12">
            <div className="mb-12 text-center">
              <h2 className="font-serif-luxury text-4xl md:text-5xl font-bold mb-3 text-[#F5EBE0]">Sommelier Certification Pathway</h2>
              <p className="text-amber-200/70 max-w-xl mx-auto text-sm">
                An art-forward curriculum engineered to make you overprepared for official CMS and WSET Diploma standards through interactive pedagogy, blind-tasting minigames, and sommelier anthems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {modules.map((m) => {
                const IconComponent = m.icon;
                return (
                  <div 
                    key={m.id}
                    onClick={() => { setActiveModule(m); setCurrentScreen('lesson'); }}
                    className={`p-8 rounded-2xl border ${m.color} backdrop-blur-md hover:border-amber-500/50 transition-all duration-300 cursor-pointer group shadow-xl`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300">
                        {m.level}
                      </span>
                    </div>
                    <h3 className="font-serif-luxury text-2xl font-bold mb-2 text-[#F5EBE0] group-hover:text-amber-200 transition-colors">
                      {m.title}
                    </h3>
                    <p className="text-sm text-amber-100/70 mb-6 font-light leading-relaxed">
                      {m.desc}
                    </p>
                    <div className="flex items-center text-xs uppercase tracking-wider text-amber-400 font-semibold space-x-2">
                      <span>Begin Module</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Extras Hub (Games, Songs, Trivia) */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-[#211518] to-[#161012] border border-[#3B2226] shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-serif-luxury text-2xl font-bold mb-2 text-[#F5EBE0]">Interactive Sommelier Arcades</h3>
                  <p className="text-sm text-amber-100/70">Test your sensory memory with blind tasting simulators, sommelier rhyme songs, and master-level trivia.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={() => setCurrentScreen('trivia')}
                    className="px-6 py-3 rounded-full bg-[#722F37] hover:bg-[#85353f] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-lg flex items-center space-x-2"
                  >
                    <Trophy className="w-4 h-4" />
                    <span>Master Trivia</span>
                  </button>
                  <button 
                    onClick={() => setCurrentScreen('song')}
                    className="px-6 py-3 rounded-full bg-amber-950/80 hover:bg-amber-900 text-amber-200 text-xs uppercase tracking-widest font-semibold transition-all border border-amber-800/40 flex items-center space-x-2"
                  >
                    <Music className="w-4 h-4" />
                    <span>Sommelier Anthems</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentScreen === 'lesson' && activeModule && (
          <div className="flex-1 max-w-4xl w-full mx-auto px-6 py-12">
            <button 
              onClick={() => setCurrentScreen('hub')}
              className="text-xs uppercase tracking-widest text-amber-300 hover:underline mb-8 inline-flex items-center space-x-2"
            >
              <span>← Return to Curriculum Hub</span>
            </button>

            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#1c1416] to-[#120D0E] border border-rose-900/40 shadow-2xl">
              <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-[#722F37]/30 border border-rose-800/40 text-amber-300 mb-4 inline-block">
                {activeModule.level} Certification Module
              </span>
              <h2 className="font-serif-luxury text-4xl md:text-5xl font-bold mb-6 text-[#F5EBE0]">
                {activeModule.title}
              </h2>
              
              <div className="prose prose-invert max-w-none text-amber-100/80 space-y-6 font-light leading-relaxed mb-12">
                <p className="text-lg">
                  Welcome to the foundational core of {activeModule.title}. In this interactive session, we dissect structural components, regional legislation, and sensory identification matrices.
                </p>
                <div className="p-6 rounded-2xl bg-black/30 border border-white/5">
                  <h4 className="font-serif-luxury text-xl font-bold text-amber-200 mb-2">Key Diagnostic Focus:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Diurnal temperature variance and impact on malic vs tartaric acid retention.</li>
                    <li>Denominazione di Origine Controllata e Garantita (DOCG) aging mandates.</li>
                    <li>Aroma compounds: Pyrazines (green bell pepper) vs Rotundone (peppery Syrah notes).</li>
                  </ul>
                </div>
                <p>
                  Take your time exploring these concepts. There are no countdown timers or cram schedules—mastery is built through deep, mindful tasting and rigorous analysis.
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <button 
                  onClick={() => setCurrentScreen('trivia')}
                  className="px-6 py-3 rounded-full bg-[#722F37] hover:bg-[#85353f] text-white text-xs uppercase tracking-widest font-semibold transition-all flex items-center space-x-2"
                >
                  <span>Test Knowledge with Trivia</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {currentScreen === 'trivia' && (
          <div className="flex-1 max-w-3xl w-full mx-auto px-6 py-12 flex flex-col justify-center">
            <button 
              onClick={() => setCurrentScreen('hub')}
              className="text-xs uppercase tracking-widest text-amber-300 hover:underline mb-8 inline-flex items-center space-x-2"
            >
              <span>← Return to Curriculum Hub</span>
            </button>

            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#1c1416] to-[#120D0E] border border-rose-900/40 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-widest text-amber-400">
                  Question {currentQuestionIdx + 1} of {triviaQuestions.length}
                </span>
                <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-[#722F37]/30 text-amber-200">
                  Score: {quizScore}
                </span>
              </div>

              <h3 className="font-serif-luxury text-2xl md:text-3xl font-bold mb-8 text-[#F5EBE0]">
                {triviaQuestions[currentQuestionIdx].q}
              </h3>

              <div className="space-y-4 mb-8">
                {triviaQuestions[currentQuestionIdx].options.map((opt, idx) => {
                  let btnStyle = "bg-white/5 border-white/10 hover:bg-white/10 text-amber-100";
                  if (selectedAnswer !== null) {
                    if (idx === triviaQuestions[currentQuestionIdx].answer) {
                      btnStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200";
                    } else if (idx === selectedAnswer) {
                      btnStyle = "bg-rose-950/80 border-rose-500 text-rose-200";
                    }
                  }
                  return (
                    <button
                      key={idx}
                      disabled={selectedAnswer !== null}
                      onClick={() => {
                        setSelectedAnswer(idx);
                        if (idx === triviaQuestions[currentQuestionIdx].answer) {
                          setQuizScore(prev => prev + 1);
                        }
                      }}
                      className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {selectedAnswer !== null && idx === triviaQuestions[currentQuestionIdx].answer && (
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      )}
                    </button>
                  );
                })}
              </div>

              {selectedAnswer !== null && (
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 mb-8 text-sm text-amber-200/90 font-light">
                  <strong className="text-amber-300 font-semibold block mb-1">Sommelier Insight:</strong>
                  {triviaQuestions[currentQuestionIdx].explanation}
                </div>
              )}

              {selectedAnswer !== null && (
                <button
                  onClick={() => {
                    setSelectedAnswer(null);
                    if (currentQuestionIdx < triviaQuestions.length - 1) {
                      setCurrentQuestionIdx(prev => prev + 1);
                    } else {
                      setCurrentQuestionIdx(0);
                      setQuizScore(0);
                      setCurrentScreen('hub');
                    }
                  }}
                  className="w-full py-4 rounded-full bg-[#722F37] hover:bg-[#85353f] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-lg"
                >
                  {currentQuestionIdx < triviaQuestions.length - 1 ? "Next Question" : "Complete Master Quiz & Return"}
                </button>
              )}
            </div>
          </div>
        )}

        {currentScreen === 'song' && (
          <div className="flex-1 max-w-3xl w-full mx-auto px-6 py-12 flex flex-col justify-center">
            <button 
              onClick={() => setCurrentScreen('hub')}
              className="text-xs uppercase tracking-widest text-amber-300 hover:underline mb-8 inline-flex items-center space-x-2"
            >
              <span>← Return to Curriculum Hub</span>
            </button>

            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#221518] to-[#120D0E] border border-amber-900/40 shadow-2xl text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#722F37]/40 border border-rose-800/50 flex items-center justify-center mx-auto mb-6 text-amber-300">
                <Music className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/50 text-amber-300 mb-4 inline-block">
                Sommelier Rhyme & Rhythm Anthem
              </span>
              <h2 className="font-serif-luxury text-3xl md:text-4xl font-bold mb-6 text-[#F5EBE0]">
                "The Oenophile's Anthem: From Seed to Glass"
              </h2>

              <div className="font-serif-luxury text-lg italic text-amber-100/90 space-y-4 mb-8 leading-relaxed max-w-xl mx-auto">
                <p>🎵 In the limestone clay where the roots run deep,</p>
                <p>The dormant seed wakes from its wintry sleep.</p>
                <p>With sun-kissed canopies and morning dew,</p>
                <p>The harvest is called when the skies are true.</p>
                <p className="font-bold text-amber-300 not-italic pt-4">Chorus:</p>
                <p>Pour the Grand Cru, let the tannins breathe,</p>
                <p>Unlock the secrets that the vines bequeath!</p>
                <p>From oak to bottle, through glass we gleam,</p>
                <p>The sommelier's journey, the ultimate dream.</p>
              </div>

              <button
                onClick={() => setCurrentScreen('hub')}
                className="px-8 py-4 rounded-full bg-[#722F37] hover:bg-[#85353f] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-xl"
              >
                Return to Academy
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-amber-200/40 border-t border-[#3B2226]/40">
        Grand Cru Sommelier Academy • Art-Forward React & Expo Architecture
      </footer>
    </div>
  );
}
