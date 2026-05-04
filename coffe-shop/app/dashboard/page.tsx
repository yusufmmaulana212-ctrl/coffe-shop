"use client";
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  UtensilsCrossed, 
  Megaphone, 
  Wallet, 
  TrendingUp, 
  ShoppingCart, 
  Star,
  Bot,
  Zap,
  Bell
} from 'lucide-react';

export default function Dashboard() {
  const [omzet] = useState("3.450.000");

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      {/* Sidebar - Fix Navigation */}
      <aside className="w-64 bg-slate-900 text-white hidden md:block p-6 shadow-2xl">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-blue-400 tracking-tighter">NEXA-Sphere</h1>
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black">AI Powered UMKM</p>
        </div>
        
        <nav className="space-y-2">
          <button className="flex items-center w-full py-3.5 px-4 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-900/50 transition-all">
            <LayoutDashboard className="mr-3 w-5 h-5" /> 
            <span className="font-semibold text-sm">Dashboard</span>
          </button>
          <button className="flex items-center w-full py-3.5 px-4 text-slate-400 hover:text-white hover:bg-slate-800 rounded-2xl transition-all group">
            <UtensilsCrossed className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" /> 
            <span className="font-semibold text-sm">Menu & Stok</span>
          </button>
          <button className="flex items-center w-full py-3.5 px-4 text-slate-400 hover:text-white hover:bg-slate-800 rounded-2xl transition-all group">
            <Megaphone className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" /> 
            <span className="font-semibold text-sm">AI Marketing</span>
          </button>
          <button className="flex items-center w-full py-3.5 px-4 text-slate-400 hover:text-white hover:bg-slate-800 rounded-2xl transition-all group">
            <Wallet className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" /> 
            <span className="font-semibold text-sm">Keuangan</span>
          </button>
        </nav>

        <div className="mt-auto pt-10">
            <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                <p className="text-[10px] text-slate-400 mb-2 uppercase">Status Server</p>
                <div className="flex items-center text-xs font-bold text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    Python API Connected
                </div>
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-start mb-10">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Kedai Kopi Yusuf</h2>
            <p className="text-slate-500 mt-1 font-medium flex items-center">
                <Bot className="w-4 h-4 mr-2 text-blue-600" /> AI Insight: Stok susu tipis, aman buat 3 jam lagi.
            </p>
          </div>
          <div className="flex items-center space-x-4">
             <button className="p-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition relative">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
             </button>
             <div className="flex items-center p-1.5 bg-white border border-slate-200 rounded-3xl pr-4">
                <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full mr-3 shadow-md border-2 border-white"></div>
                <div className="text-left">
                    <p className="text-xs font-black text-slate-900">Yusuf M.</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Owner</p>
                </div>
             </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <StatCard title="Omzet Hari Ini" value={`Rp ${omzet}`} trend="+12.5%" isUp={true} icon={<TrendingUp />} />
          <StatCard title="Pesanan Aktif" value="42" trend="0%" isUp={null} icon={<ShoppingCart />} />
          <StatCard title="Sentimen AI" value="98%" trend="+2%" isUp={true} icon={<Star />} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* AI Intelligence Card */}
          <div className="lg:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden border border-slate-800 shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center mb-6 text-blue-400 font-black uppercase text-xs tracking-widest">
                <Zap className="w-4 h-4 mr-2 fill-current" /> Next-Gen Intelligence
              </div>
              <h3 className="text-3xl font-bold mb-6 leading-tight">Prediksi Penjualan & <br/>Otomasi Suplai</h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10">
                Besok diprediksi hujan petir jam 15.00. AI menyarankan promo <strong>"Kopi Anget Delivery"</strong> untuk menjaga stabilitas omzet.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-sm hover:bg-blue-50 transition-all shadow-xl">
                  Aktifkan Promo Otomatis
                </button>
                <button className="bg-slate-800 text-slate-300 border border-slate-700 px-8 py-4 rounded-2xl font-black text-sm hover:bg-slate-700 transition-all">
                  Lihat Grafik Tren
                </button>
              </div>
            </div>
            {/* AI Glow Effect */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20"></div>
            <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-purple-600 rounded-full blur-[120px] opacity-10"></div>
          </div>

          {/* AI Content Studio */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 flex flex-col">
             <div className="flex items-center justify-between mb-8">
                <h3 className="font-black text-slate-900 uppercase text-sm tracking-tight">AI Content Hub</h3>
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
             </div>
             <div className="flex-1 aspect-square bg-slate-50 rounded-[2rem] mb-6 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center p-6 group cursor-pointer hover:border-blue-400 transition-colors">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-purple-500" />
                </div>
                <p className="text-xs font-bold text-slate-400 leading-relaxed uppercase tracking-tighter">Klik untuk generate konten Instagram otomatis</p>
             </div>
             <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-sm hover:bg-slate-800 transition-all shadow-lg">
                Generate Visual Promo
             </button>
          </div>
        </div>
      </main>
    </div>
  );
}

interface StatCardProps {
    title: string;
    value: string;
    trend: string;
    isUp: boolean | null;
    icon: React.ReactNode;
}

function StatCard({ title, value, trend, isUp, icon }: StatCardProps) {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-between items-start mb-6">
        <div className="p-4 bg-slate-50 rounded-2xl text-blue-600">{icon}</div>
        <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
            isUp === true ? 'bg-green-100 text-green-600' : 
            isUp === false ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'
        }`}>
            {trend}
        </div>
      </div>
      <p className="text-slate-400 text-xs font-black uppercase tracking-widest">{title}</p>
      <h3 className="text-3xl font-bold text-slate-900 mt-2 tracking-tight">{value}</h3>
    </div>
  );
}