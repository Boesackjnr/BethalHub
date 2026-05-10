import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, ArrowRight, ShieldCheck, Github, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex justify-center items-center space-x-2 mb-8">
          <div className="w-12 h-12 bg-brand-blue rounded-2xl flex items-center justify-center shadow-xl shadow-brand-blue/20">
            <span className="text-white font-bold text-2xl">B</span>
          </div>
          <span className="text-brand-blue font-display font-bold text-3xl">BethalHub</span>
        </Link>
        <h2 className="text-center text-3xl font-display font-bold text-slate-900 tracking-tight">
          {isLogin ? 'Sign in to your account' : 'Create your local account'}
        </h2>
        <p className="mt-4 text-center text-slate-500 font-medium">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-brand-blue font-bold hover:underline"
          >
            {isLogin ? 'Register now' : 'Log in here'}
          </button>
        </p>
      </div>

      <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
           layout
           className="bg-white py-12 px-8 shadow-2xl shadow-slate-200 sm:rounded-[3rem] border border-slate-100"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
              >
                <label className="block text-sm font-bold text-slate-700 mb-2 px-1 uppercase tracking-widest">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    required
                    className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-medium"
                    placeholder="Enter your name"
                  />
                </div>
              </motion.div>
            )}

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 px-1 uppercase tracking-widest">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-medium"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 px-1 uppercase tracking-widest">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-medium"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-brand-blue rounded border-slate-300 focus:ring-brand-blue"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-500 font-medium">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-bold text-brand-blue hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center space-x-3 py-5 px-4 bg-brand-blue text-white rounded-3xl font-black uppercase tracking-[0.2em] shadow-xl shadow-brand-blue/20 hover:bg-slate-800 hover:-translate-y-0.5 transition-all active:translate-y-0"
              >
                <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </form>

          <div className="mt-10">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-slate-400 font-medium uppercase tracking-widest text-[10px]">Or continue with</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center py-4 border border-slate-100 rounded-2xl text-slate-600 hover:bg-slate-50 transition-all font-bold space-x-2">
                <Chrome size={20} className="text-rose-500" />
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center py-4 border border-slate-100 rounded-2xl text-slate-600 hover:bg-slate-50 transition-all font-bold space-x-2">
                <Github size={20} className="text-slate-900" />
                <span>Github</span>
              </button>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-slate-50 text-center">
             <div className="inline-flex items-center space-x-2 text-slate-400 text-xs font-semibold">
                <ShieldCheck size={14} className="text-brand-accent" />
                <span>Your data is encrypted and secure.</span>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
