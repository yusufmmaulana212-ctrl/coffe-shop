"use client";
import React from 'react';
import Link from 'next/link';
import { Bot, Zap, ArrowRight, Coffee, ShieldCheck, BarChart3 } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      {/* Navbar Minimalis */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
            <Zap className="text-blue-400 w-6 h-6 fill-current" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase">NEXA-Sphere</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest text-slate-500">
          <a href="#" className="hover:text-slate-900 transition">Features</a>
          <a href="#" className="hover:text-slate-900 transition">AI Engine</a>
          <a href="#" className="hover:text-slate-900 transition">Pricing</a>
        </div>
        <Link 
          href="/dashboard" 
          className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-200"
        >
          Masuk ke System
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 pt-20 pb-32 text-center">
        <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-full mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Version 2.0 AI Integrated</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tightest leading-[0.9] mb-8">
          UMKM NAIK KELAS <br/> 
          <span className="text-blue-600">PAKE INTELLIGENCE.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-12">
          Platform manajemen bisnis F&B pertama yang bisa memprediksi stok, otomatisasi konten marketing, dan analisis finansial secara real-time.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link 
            href="/dashboard" 
            className="w-full md:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all flex items-center justify-center group shadow-2xl shadow-blue-200"
          >
            Mulai Sekarang <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="w-full md:w-auto bg-white border-2 border-slate-100 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all">
            Lihat Demo Video
          </button>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-slate-50 py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard 
              icon={<Bot className="w-8 h-8" />} 
              title="AI Prediction" 
              desc="Prediksi lonjakan pembeli berdasarkan cuaca, tren sosial media, dan event lokal di sekitar outlet."
            />
            <FeatureCard 
              icon={<BarChart3 className="w-8 h-8" />} 
              title="Smart Finance" 
              desc="Laporan laba rugi otomatis yang membantu Anda mengambil keputusan bisnis lebih cepat."
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8" />} 
              title="Cloud Integration" 
              desc="Data tersinkronisasi aman dengan enkripsi tingkat tinggi, dapat diakses dari mana saja."
            />
          </div>
        </div>
      </section>

      {/* Footer Minimalis */}
      <footer className="py-12 text-center border-t border-slate-100">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          © 2026 NEXA-Sphere Solution — Developed by Yusuf Maulana
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="group cursor-default">
      <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}