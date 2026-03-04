import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Fish, Book, Settings, Play, Square, Plus, Trash2, 
  Award, Image as ImageIcon, Link as LinkIcon, 
  Dumbbell, Zap, Timer, Flame, Footprints 
} from 'lucide-react';

// --- SVG Fish Components ---
const FishRenderer = ({ type, color, className, imageUrl, isAdult }) => {
  if (isAdult && imageUrl) {
    return (
      <div className={`${className} flex items-center justify-center w-full h-full`}>
        <img 
          src={imageUrl} 
          alt="Fish" 
          className="max-w-full max-h-full object-contain rounded-[2rem] shadow-md bg-white/40 p-1"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150?text=No+Image";
          }}
        />
      </div>
    );
  }

  // 魚の種類に応じたSVG描画ロジック
  switch (type) {
    case 'round':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M20,50 Q20,20 50,20 Q80,20 80,50 Q80,80 50,80 Q20,80 20,50" fill={color} />
          <path d="M75,50 L95,30 L95,70 Z" fill={color} opacity="0.8" />
          <circle cx="35" cy="40" r="4" fill="white" /><circle cx="35" cy="40" r="2" fill="black" />
          <path d="M45,20 Q55,5 65,20" fill={color} opacity="0.6" />
        </svg>
      );
    case 'long':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M10,50 Q10,35 50,35 Q85,35 85,50 Q85,65 50,65 Q10,65 10,50" fill={color} />
          <path d="M80,50 L95,40 L95,60 Z" fill={color} opacity="0.8" />
          <circle cx="25" cy="45" r="3" fill="white" /><circle cx="25" cy="45" r="1.5" fill="black" />
          <path d="M40,35 Q50,25 60,35" fill={color} opacity="0.6" />
        </svg>
      );
    case 'triangle':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M15,50 L50,15 L80,50 L50,85 Z" fill={color} />
          <path d="M75,50 L95,35 L95,65 Z" fill={color} opacity="0.8" />
          <circle cx="35" cy="45" r="4" fill="white" /><circle cx="35" cy="45" r="2" fill="black" />
          <path d="M50,15 L55,5 L45,5 Z" fill={color} opacity="0.6" />
        </svg>
      );
    case 'shark':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M10,60 Q10,40 40,35 Q60,30 90,50 Q60,70 10,60" fill={color} />
          <path d="M40,35 L50,15 L60,32 Z" fill={color} />
          <path d="M85,50 L98,35 L98,65 Z" fill={color} opacity="0.8" />
          <circle cx="25" cy="48" r="3" fill="white" /><circle cx="25" cy="48" r="1.5" fill="black" />
        </svg>
      );
    case 'dolphin':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M10,60 Q20,30 60,35 Q90,40 95,55 Q70,65 10,60" fill={color} />
          <path d="M50,35 Q55,20 65,36 Z" fill={color} />
          <path d="M90,55 L98,65 L82,65 Z" fill={color} opacity="0.8" />
          <circle cx="30" cy="48" r="3" fill="white" /><circle cx="30" cy="48" r="1.5" fill="black" />
        </svg>
      );
    case 'whale':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M10,60 Q10,25 60,25 Q90,25 90,60 Q90,75 50,75 Q10,75 10,60" fill={color} />
          <path d="M85,60 L98,50 L98,70 Z" fill={color} opacity="0.8" />
          <path d="M45,25 Q50,10 55,25 Z" fill={color} opacity="0.4" />
          <circle cx="30" cy="45" r="5" fill="white" /><circle cx="30" cy="45" r="2.5" fill="black" />
        </svg>
      );
    case 'seal':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M20,60 Q20,30 45,30 Q65,30 80,50 Q85,75 40,75 Q20,75 20,60" fill={color} />
          <path d="M50,65 Q65,85 80,70" fill={color} opacity="0.7" />
          <path d="M75,50 L95,45 L95,55 Z" fill={color} opacity="0.8" />
          <circle cx="35" cy="45" r="4" fill="white" /><circle cx="35" cy="45" r="2" fill="black" />
        </svg>
      );
    case 'penguin':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <ellipse cx="50" cy="55" rx="25" ry="35" fill={color} />
          <ellipse cx="50" cy="60" rx="15" ry="25" fill="white" opacity="0.9" />
          <path d="M45,45 L55,45 L50,55 Z" fill="#fbbf24" />
          <circle cx="42" cy="40" r="3" fill="white" /><circle cx="42" cy="40" r="1.5" fill="black" />
          <circle cx="58" cy="40" r="3" fill="white" /><circle cx="58" cy="40" r="1.5" fill="black" />
          <path d="M40,85 L30,90 L45,92 Z" fill="#fbbf24" />
          <path d="M60,85 L70,90 L55,92 Z" fill="#fbbf24" />
        </svg>
      );
    case 'egg':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <ellipse cx="50" cy="55" rx="30" ry="35" fill="#fef3c7" stroke="#fbbf24" strokeWidth="2" />
          <circle cx="45" cy="45" r="8" fill="white" opacity="0.5" />
        </svg>
      );
    case 'baby':
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M30,50 Q30,40 60,40 Q80,40 80,50 Q80,60 60,60 Q30,60 30,50" fill={color} opacity="0.7" />
          <path d="M75,50 L85,45 L85,55 Z" fill={color} />
          <circle cx="40" cy="48" r="2" fill="black" />
        </svg>
      );
    default:
      return null;
  }
};

const App = () => {
  // --- State ---
  const [activeTab, setActiveTab] = useState('home');
  const [isGrowing, setIsGrowing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [currentFishType, setCurrentFishType] = useState(null);
  const [dailySteps, setDailySteps] = useState(0);
  
  const [fishTypes, setFishTypes] = useState([
    { id: 1, name: 'ジョギングフィッシュ', speed: 7200, color: '#10b981', bodyType: 'long', imageUrl: '' },
    { id: 2, name: 'マッスルキンギョ', speed: 21600, color: '#f59e0b', bodyType: 'round', imageUrl: '' },
    { id: 4, name: 'パワフルシャーク', speed: 43200, color: '#3b82f6', bodyType: 'shark', imageUrl: '' },
  ]);

  const [collection, setCollection] = useState([]);
  const [newFishName, setNewFishName] = useState('');
  const [newFishSpeed, setNewFishSpeed] = useState(3600);
  const [newFishColor, setNewFishColor] = useState('#ec4899');
  const [newFishBody, setNewFishBody] = useState('round');
  const [newFishImageUrl, setNewFishImageUrl] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const timerRef = useRef(null);

  useEffect(() => {
    if (!currentFishType) setCurrentFishType(fishTypes[0]);
  }, [fishTypes, currentFishType]);

  // --- Logic: Step Bonus ---
  const growthMultiplier = useMemo(() => {
    return 1 + (Number(dailySteps) / 10000);
  }, [dailySteps]);

  // 成長処理
  useEffect(() => {
    if (isGrowing && progress < 100) {
      const interval = 1000;
      const increment = (100 / currentFishType.speed) * growthMultiplier;
      
      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          const next = prev + increment;
          return next >= 100 ? 100 : next;
        });
      }, interval);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isGrowing, currentFishType, progress, growthMultiplier]);

  const handleStart = () => {
    setStartTime(new Date().toLocaleString('ja-JP'));
    setIsGrowing(true);
  };

  const handleStop = () => {
    if (progress >= 100) {
      const newEntry = {
        id: Date.now(),
        name: currentFishType.name,
        color: currentFishType.color,
        bodyType: currentFishType.bodyType,
        imageUrl: currentFishType.imageUrl,
        startDate: startTime,
        endDate: new Date().toLocaleString('ja-JP'),
        steps: dailySteps,
      };
      setCollection([newEntry, ...collection]);
      setShowSuccessModal(true);
    }
    setIsGrowing(false);
    setProgress(0);
    setStartTime(null);
  };

  const addFishType = () => {
    if (newFishName.trim() === '') return;
    const newType = {
      id: Date.now(),
      name: newFishName,
      speed: Number(newFishSpeed),
      color: newFishColor,
      bodyType: newFishBody,
      imageUrl: newFishImageUrl,
    };
    setFishTypes([...fishTypes, newType]);
    setNewFishName('');
    setNewFishImageUrl('');
  };

  const deleteFishType = (id) => {
    setFishTypes(fishTypes.filter(f => f.id !== id));
  };

  const getStage = () => {
    if (progress < 30) return { label: 'たまご', type: 'egg', isAdult: false };
    if (progress < 75) return { label: '赤ちゃん', type: 'baby', isAdult: false };
    return { label: 'おとな', type: currentFishType?.bodyType, isAdult: true };
  };

  const stage = getStage();

  const bodyOptions = [
    { id: 'round', label: '丸' }, { id: 'long', label: '長' },
    { id: 'triangle', label: '三' }, { id: 'shark', label: 'サメ' },
    { id: 'dolphin', label: 'イルカ' }, { id: 'whale', label: 'クジラ' },
    { id: 'seal', label: 'オトセ' }, { id: 'penguin', label: 'ペン' },
  ];

  const formatSeconds = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    return h > 0 ? `${h}時間${m > 0 ? m + '分' : ''}` : `${m}分`;
  };

  return (
    <div className="min-h-screen bg-[#fff7ed] flex flex-col text-[#451a03] font-rounded">
      
      <header className="bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white p-6 shadow-md flex justify-between items-center rounded-b-[2.5rem]">
        <h1 className="text-2xl font-black flex items-center gap-3 tracking-wider">
          <Dumbbell className="w-8 h-8" /> AQUAGYM
        </h1>
        <div className="text-sm px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full font-bold">
          {isGrowing ? 'トレーニング中！🔥' : '休憩中...☕'}
        </div>
      </header>

      <main className="flex-grow p-6 overflow-y-auto pb-32">
        {activeTab === 'home' && (
          <div className="flex flex-col items-center gap-6 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            <div className="w-full max-w-sm bg-white p-6 rounded-[2.5rem] shadow-lg border-2 border-orange-100 flex items-center gap-4 group">
              <div className="bg-orange-100 p-4 rounded-[1.5rem] text-orange-600 group-hover:scale-110 transition-transform">
                <Footprints size={32} />
              </div>
              <div className="flex-grow">
                <label className="text-xs font-black text-slate-400 ml-1 mb-1 block">今日の歩数を入力</label>
                <div className="flex items-center gap-2">
                  <input 
                    type="number" 
                    value={dailySteps}
                    onChange={(e) => setDailySteps(Math.max(0, e.target.value))}
                    className="w-full p-2 text-2xl font-black text-orange-600 outline-none"
                    placeholder="0"
                  />
                  <span className="font-black text-slate-400">歩</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="block text-[10px] font-black text-slate-400 uppercase">成長倍率</span>
                <span className="text-xl font-black text-emerald-500">x{growthMultiplier.toFixed(2)}</span>
              </div>
            </div>

            <div className="relative w-80 h-80 bg-gradient-to-b from-[#fdba74] to-[#fb923c] rounded-[4rem] shadow-2xl flex items-center justify-center border-[12px] border-white overflow-hidden ring-4 ring-orange-100">
              <div className={`w-56 h-56 z-10 transition-all duration-1000 ${isGrowing ? 'scale-110' : 'scale-100'}`}>
                <FishRenderer 
                  type={stage.type} 
                  color={currentFishType?.color} 
                  imageUrl={currentFishType?.imageUrl}
                  isAdult={stage.isAdult}
                  className={isGrowing ? "animate-wiggle" : "animate-float"}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#fed7aa]/60 blur-md"></div>
              {isGrowing && (
                <div className="absolute top-6 right-6 text-white animate-pulse">
                  <Flame size={40} fill="currentColor" />
                </div>
              )}
            </div>

            <div className="text-center w-full max-w-sm px-4">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-3xl font-black text-[#7c2d12]">
                  {isGrowing ? currentFishType?.name : '一緒に運動する？'}
                </h2>
                <span className="text-orange-600 font-black bg-white px-5 py-2 rounded-full shadow-md text-lg border-2 border-orange-100">
                  {stage.label}
                </span>
              </div>
              
              <div className="w-full bg-slate-200/50 rounded-full h-10 p-2 shadow-inner mb-3 border-2 border-white overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-[#f97316] to-[#ea580c] h-full rounded-full transition-all duration-1000 ease-linear flex items-center justify-end px-4 shadow-sm"
                  style={{ width: `${progress}%` }}
                >
                  {progress > 20 && <span className="text-sm text-white font-black">{Math.floor(progress)}%</span>}
                </div>
              </div>
              {isGrowing && (
                <p className="text-orange-600 font-black flex items-center justify-center gap-2 animate-pulse text-sm">
                   <Zap size={14} /> 歩数ボーナス適用中！ (x{growthMultiplier.toFixed(2)})
                </p>
              )}
            </div>

            {!isGrowing ? (
              <div className="flex flex-col items-center gap-6 w-full max-w-xs">
                <div className="text-center w-full bg-white p-4 rounded-3xl shadow-sm border-2 border-orange-100">
                  <p className="text-sm font-bold text-slate-500 mb-2 flex items-center justify-center gap-2">
                    <Timer size={16} /> トレーニングを選んでね
                  </p>
                  <select 
                    className="w-full p-4 border-2 border-orange-50 rounded-[1.5rem] bg-orange-50/50 shadow-inner font-black text-xl text-orange-800 outline-none appearance-none text-center cursor-pointer"
                    onChange={(e) => setCurrentFishType(fishTypes.find(f => f.id === Number(e.target.value)))}
                    value={currentFishType?.id}
                  >
                    {fishTypes.map(fish => (
                      <option key={fish.id} value={fish.id}>{fish.name} ({formatSeconds(fish.speed)})</option>
                    ))}
                  </select>
                </div>

                <button 
                  onClick={handleStart}
                  className="w-full bg-[#10b981] hover:bg-[#059669] text-white py-6 rounded-[2.5rem] font-black text-2xl flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all transform border-b-8 border-[#047857]"
                >
                  <Play fill="currentColor" size={32} /> トレーニング開始！
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 w-full max-w-xs">
                <button 
                  onClick={handleStop}
                  className={`w-full py-6 rounded-[2.5rem] font-black text-2xl flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all transform border-b-8 ${progress >= 100 ? 'bg-[#f59e0b] border-[#b45309] animate-pulse' : 'bg-[#ef4444] border-[#b91c1c]' } text-white`}
                >
                  {progress >= 100 ? <><Award size={32} /> 図鑑に記録する！</> : <><Square fill="currentColor" size={24} /> 終了</>}
                </button>
              </div>
            )}
          </div>
        )}

        {/* --- 図鑑 (Tab: collection) --- */}
        {activeTab === 'collection' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-3xl font-black text-[#7c2d12] flex items-center gap-3">
              <Book className="w-8 h-8 text-orange-600" /> トレーニング図鑑 <span className="text-base font-bold bg-orange-200 px-4 py-1 rounded-full">{collection.length}匹</span>
            </h2>
            {collection.length === 0 ? (
              <div className="bg-white/70 p-16 rounded-[3rem] text-center text-slate-400 border-4 border-dashed border-orange-200">
                <p className="text-xl font-bold mb-2 text-slate-500">まだ記録がありません</p>
                <p className="text-sm">トレーニングを完走して、仲間を増やそう！</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {collection.map(item => (
                  <div key={item.id} className="bg-white p-6 rounded-[2.5rem] shadow-lg border-2 border-orange-50 flex items-center gap-6 group">
                    <div className="w-24 h-24 bg-orange-50 rounded-[2rem] overflow-hidden shrink-0 flex items-center justify-center border-2 border-orange-100 shadow-inner group-hover:scale-110 transition-transform">
                      <FishRenderer type={item.bodyType} color={item.color} imageUrl={item.imageUrl} isAdult={true} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-black text-2xl text-[#7c2d12]">{item.name}</h3>
                      <div className="text-xs text-slate-500 mt-2 space-y-1 font-bold">
                        <p className="flex items-center gap-2 text-emerald-600 font-black"><Award size={14} /> 完了：{item.endDate}</p>
                        {item.steps > 0 && <p className="flex items-center gap-2 text-orange-500"><Footprints size={14} /> {item.steps}歩</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* --- 設定 (Tab: settings) --- */}
        {activeTab === 'settings' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-3xl font-black text-slate-800 flex items-center gap-3">
              <Settings className="w-8 h-8 text-slate-400" /> トレーニング設定
            </h2>
            
            <div className="bg-white p-8 rounded-[3rem] shadow-xl border-4 border-white space-y-6">
              <h3 className="font-black text-[#7c2d12] text-xl flex items-center gap-3">
                <Plus size={24} className="bg-orange-100 p-1 rounded-lg text-orange-600" /> 新メニューを作成
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="text-base font-black text-slate-500 ml-2 mb-2 block">メニュー名</label>
                  <input 
                    type="text" 
                    value={newFishName}
                    onChange={(e) => setNewFishName(e.target.value)}
                    placeholder="例：30分スクワット"
                    className="w-full p-5 border-4 border-slate-50 rounded-[2rem] focus:border-orange-300 outline-none font-bold text-lg bg-slate-50 shadow-inner"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-base font-black text-slate-500 ml-2 mb-2 block">目標時間(秒)</label>
                    <input 
                      type="number" 
                      value={newFishSpeed}
                      onChange={(e) => setNewFishSpeed(e.target.value)}
                      className="w-full p-5 border-4 border-slate-50 rounded-[2rem] focus:border-orange-300 outline-none font-bold text-lg bg-slate-50 shadow-inner"
                    />
                  </div>
                  <div>
                    <label className="text-base font-black text-slate-500 ml-2 mb-2 block">カラー</label>
                    <input 
                      type="color" 
                      value={newFishColor}
                      onChange={(e) => setNewFishColor(e.target.value)}
                      className="w-full h-[72px] p-2 border-4 border-slate-50 rounded-[2rem] cursor-pointer bg-slate-50 shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-base font-black text-slate-500 ml-2 mb-3 block">魚のフォルム</label>
                  <div className="grid grid-cols-4 gap-3">
                    {bodyOptions.map(option => (
                      <button 
                        key={option.id}
                        onClick={() => setNewFishBody(option.id)}
                        className={`p-2 border-4 rounded-[2rem] flex flex-col items-center justify-center transition-all ${newFishBody === option.id ? 'border-orange-500 bg-orange-50' : 'border-slate-50 bg-slate-50'}`}
                      >
                        <div className="w-10 h-10">
                          <FishRenderer type={option.id} color={newFishColor} isAdult={false} />
                        </div>
                        <span className="text-[10px] font-black mt-2 text-slate-600">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={addFishType}
                  className="w-full bg-[#451a03] text-white p-6 rounded-[2.5rem] font-black text-2xl shadow-xl border-b-8 border-[#2c1202] active:scale-95"
                >
                  メニューを保存！
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-[#451a03]/60 backdrop-blur-md flex items-center justify-center p-8 z-50">
          <div className="bg-white rounded-[4rem] p-10 max-w-sm w-full text-center animate-in zoom-in duration-300 border-[10px] border-[#10b981]">
            <div className="w-40 h-40 mx-auto mb-6 flex items-center justify-center">
              <FishRenderer 
                type={currentFishType.bodyType} 
                color={currentFishType.color} 
                imageUrl={currentFishType.imageUrl}
                isAdult={true}
                className="animate-bounce" 
              />
            </div>
            <h3 className="text-4xl font-black text-[#7c2d12] mb-3">ナイス！</h3>
            <p className="text-slate-600 mb-8 font-black text-lg">
              運動の成果で <span className="text-[#10b981]">{currentFishType.name}</span> が完成！
            </p>
            <button 
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-[#10b981] text-white py-6 rounded-[2.5rem] font-black text-2xl shadow-xl border-b-8 border-[#047857] active:scale-95"
            >
              次も頑張る！
            </button>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t-2 border-orange-50 p-4 pb-8 flex justify-around items-center z-40 rounded-t-[3rem] shadow-lg">
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-2 transition-all ${activeTab === 'home' ? 'text-orange-600 scale-110' : 'text-slate-400'}`}>
          <div className={`p-4 rounded-[2rem] ${activeTab === 'home' ? 'bg-orange-100' : ''}`}>
            <Dumbbell size={32} />
          </div>
          <span className="text-sm font-black">運動</span>
        </button>
        <button onClick={() => setActiveTab('collection')} className={`flex flex-col items-center gap-2 transition-all ${activeTab === 'collection' ? 'text-orange-600 scale-110' : 'text-slate-400'}`}>
          <div className={`p-4 rounded-[2rem] ${activeTab === 'collection' ? 'bg-orange-100' : ''}`}>
            <Book size={32} />
          </div>
          <span className="text-sm font-black">ずかん</span>
        </button>
        <button onClick={() => setActiveTab('settings')} className={`flex flex-col items-center gap-2 transition-all ${activeTab === 'settings' ? 'text-orange-600 scale-110' : 'text-slate-400'}`}>
          <div className={`p-4 rounded-[2rem] ${activeTab === 'settings' ? 'bg-orange-100' : ''}`}>
            <Settings size={32} />
          </div>
          <span className="text-sm font-black">せってい</span>
        </button>
      </nav>
    </div>
  );
};

export default App;
