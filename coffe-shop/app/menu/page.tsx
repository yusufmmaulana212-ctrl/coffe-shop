"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Plus, 
  Search, 
  Filter, 
  Edit3, 
  Trash2, 
  AlertCircle, 
  CheckCircle2,
  MoreVertical
} from 'lucide-react';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Top Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 px-8 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="p-2 hover:bg-slate-100 rounded-xl transition-all">
              <ArrowLeft className="w-6 h-6 text-slate-600" />
            </Link>
            <div className="h-6 w-[1px] bg-slate-200"></div>
            <h1 className="text-2xl font-black tracking-tighter uppercase">Katalog Menu & Stok</h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Cari menu..." 
                className="pl-11 pr-4 py-2.5 bg-slate-100 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 rounded-2xl text-sm font-bold transition-all outline-none w-64"
              />
            </div>
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-2xl font-black text-sm flex items-center hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
              <Plus className="w-4 h-4 mr-2" /> Tambah Item
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-8">
        {/* AI Inventory Intelligence Banner */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 mb-10 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-3xl flex items-center justify-center border border-blue-500/30">
                <AlertCircle className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 italic">AI Stock Forecasting</h3>
                <p className="text-slate-400 text-sm max-w-md">
                  "Bahan baku **Susu UHT** dan **Biji Kopi Gayo** diprediksi menipis sebelum jam sibuk sore ini. Segera lakukan restock untuk menjaga profit."
                </p>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-black text-sm transition-all whitespace-nowrap">
              Restock Otomatis via AI
            </button>
          </div>
          <div className="absolute right-[-5%] top-[-20%] w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
        </div>

        {/* Category Filter */}
        <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
          {['Semua', 'Minuman', 'Makanan', 'Snack', 'Bahan Baku'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                activeCategory === cat 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                : 'bg-white text-slate-400 border border-slate-100 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MenuCard 
            name="Es Kopi Gula Aren" 
            category="Minuman"
            price="22.000" 
            stock={85} 
            status="Aman"
            img="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500"
          />
          <MenuCard 
            name="Matcha Latte Premium" 
            category="Minuman"
            price="28.000" 
            stock={15} 
            status="Kritis"
            isLow={true}
            img="https://images.unsplash.com/photo-1552611052-33e04de081de?w=500"
          />
          <MenuCard 
            name="Ayam Geprek Sambal Matah" 
            category="Makanan"
            price="25.000" 
            stock={40} 
            status="Menengah"
            img="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500"
          />
        </div>
      </main>
    </div>
  );
}

function MenuCard({ name, category, price, stock, status, img, isLow = false }: any) {
  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
      <div className="h-56 relative overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase text-slate-800">
            {category}
          </span>
          {isLow && (
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase animate-pulse">
              Low Stock
            </span>
          )}
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreVertical className="w-4 h-4 text-slate-600" />
        </button>
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 leading-tight mb-1">{name}</h3>
            <p className="text-blue-600 font-black text-sm uppercase tracking-tighter">Rp {price}</p>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <span>Level Stok Bahan</span>
            <span className={isLow ? 'text-red-500' : 'text-green-500'}>{stock}% ({status})</span>
          </div>
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ${isLow ? 'bg-red-500' : 'bg-blue-600'}`} 
              style={{ width: `${stock}%` }}
            ></div>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center">
            <Edit3 className="w-3.5 h-3.5 mr-2" /> Edit
          </button>
          <button className={`p-3 rounded-2xl border transition-all ${isLow ? 'bg-red-50 border-red-100 text-red-500 hover:bg-red-500 hover:text-white' : 'bg-slate-50 border-slate-100 text-slate-400 hover:bg-slate-900 hover:text-white'}`}>
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}