"use client";
import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Image as ImageIcon, 
  Type, 
  Share2, 
  BrainCircuit, 
  ArrowLeft,
  Wand2,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';

export default function AIPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState('content');

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 3000); // Simulasi AI berpikir
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Header Navigation */}
      <nav className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="p-2 hover:bg-slate-100 rounded-xl transition">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="h-6 w-[1px] bg-slate-200"></div>
          <div className="flex items-center space-x-2">
            <Bot className="w-6 h-6 text-blue-600" />
            <span className="font-black uppercase tracking-tighter">AI Command Center</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="text-xs font-bold px-4 py-2 bg-slate-100 rounded-lg">Token: 4,850</button>
          <button className="text-xs font-bold px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg shadow-blue-200">Upgrade Pro</button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Sidebar Tools */}
          <div className="space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">AI Tools</h3>
            <ToolButton 
              active={activeTab === 'content'} 
              onClick={() => setActiveTab('content')}
              icon={<Sparkles className="w-5 h-5" />} 
              label="Marketing Content" 
              desc="Buat caption & desain promo"
            />
            <ToolButton 
              active={activeTab === 'prediction'} 
              onClick={() => setActiveTab('prediction')}
              icon={<BrainCircuit className="w-5 h-5" />} 
              label="Business Prediction" 
              desc="Prediksi tren pasar"
            />
            <ToolButton 
              active={activeTab === 'chat'} 
              onClick={() => setActiveTab('chat')}
              icon={<MessageSquare className="w-5 h-5" />} 
              label="Chat Business Mentor" 
              desc="Konsultasi strategi UMKM"
            />
          </div>

          {/* Main AI Workspace */}
          <div className="lg:col-span-2 space-y-8">
            
            {activeTab === 'content' && (
              <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-200">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                    <Type className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Content Generator</h2>
                    <p className="text-slate-500 text-sm font-medium">Bikin promo viral dalam hitungan detik.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-black uppercase text-slate-400 mb-2 block tracking-widest">Produk yang ingin dipromosikan</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 font-bold focus:ring-2 focus:ring-blue-500 outline-none transition">
                      <option>Es Kopi Gula Aren</option>
                      <option>Matcha Latte Premium</option>
                      <option>Rice Bowl Ayam Geprek</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase text-slate-400 mb-2 block tracking-widest">Tone Suara (Gaya Bahasa)</label>
                    <div className="grid grid-cols-3 gap-3">
                      <ToneOption label="Gaul/Santai" active />
                      <ToneOption label="Formal" />
                      <ToneOption label="Puitis" />
                    </div>
                  </div>

                  <button 
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className={`w-full py-5 rounded-[2rem] font-black text-lg flex items-center justify-center transition-all shadow-xl ${isGenerating ? 'bg-slate-200 text-slate-400' : 'bg-slate-900 text-white hover:bg-blue-600 shadow-blue-100'}`}
                  >
                    {isGenerating ? (
                      <span className="flex items-center italic tracking-widest">
                        <Wand2 className="w-5 h-5 mr-3 animate-spin" /> AI sedang berpikir...
                      </span>
                    ) : (
                      <span className="flex items-center uppercase tracking-tighter">
                        Generate Konten <Sparkles className="ml-3 w-5 h-5" />
                      </span>
                    )}
                  </button>
                </div>

                {/* AI Output Placeholder */}
                {!isGenerating && (
                  <div className="mt-10 p-8 bg-slate-50 rounded-[2rem] border border-dashed border-slate-300 relative overflow-hidden group">
                    <div className="relative z-10">
                       <p className="text-slate-400 text-sm font-medium italic">Hasil generate akan muncul di sini...</p>
                    </div>
                    <div className="absolute right-[-20px] bottom-[-20px] opacity-5 group-hover:opacity-10 transition-opacity">
                        <Bot className="w-40 h-40" />
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'prediction' && (
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-8">
                    <TrendingUp className="text-blue-400 w-8 h-8" />
                    <h2 className="text-2xl font-bold italic tracking-tight">Market Forecasting 2026</h2>
                  </div>
                  <div className="space-y-6">
                    <div className="p-6 bg-slate-800/50 rounded-3xl border border-slate-700">
                      <p className="text-sm text-slate-400 mb-2 font-black uppercase">Saran Strategi Mingguan</p>
                      <p className="text-lg text-slate-200 leading-relaxed">
                        "Minggu depan suhu rata-rata di Jakarta Timur naik 2°C. Permintaan minuman dingin diprediksi meningkat 15%. **Rekomendasi:** Stok Cup Large 16oz diperbanyak."
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-6 bg-blue-600/20 rounded-3xl border border-blue-500/30">
                          <p className="text-[10px] uppercase font-black mb-1">Confidence Score</p>
                          <h4 className="text-3xl font-bold">92%</h4>
                       </div>
                       <div className="p-6 bg-purple-600/20 rounded-3xl border border-purple-500/30">
                          <p className="text-[10px] uppercase font-black mb-1">Target Profit</p>
                          <h4 className="text-3xl font-bold">+2.4jt</h4>
                       </div>
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}

function ToolButton({ icon, label, desc, active, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`w-full p-4 rounded-3xl text-left transition-all duration-300 border ${active ? 'bg-white border-blue-200 shadow-md translate-x-2' : 'bg-transparent border-transparent hover:bg-white hover:shadow-sm'}`}
    >
      <div className="flex items-center">
        <div className={`p-3 rounded-2xl mr-4 ${active ? 'bg-blue-600 text-white' : 'bg-white shadow-sm text-slate-400'}`}>
          {icon}
        </div>
        <div>
          <h4 className={`text-sm font-bold ${active ? 'text-slate-900' : 'text-slate-600'}`}>{label}</h4>
          <p className="text-[10px] text-slate-400 font-medium">{desc}</p>
        </div>
      </div>
    </button>
  );
}

function ToneOption({ label, active = false }: { label: string, active?: boolean }) {
  return (
    <button className={`py-3 px-4 rounded-xl text-xs font-bold transition-all border ${active ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-white border-slate-100 text-slate-500 hover:border-slate-300'}`}>
      {label}
    </button>
  );
}