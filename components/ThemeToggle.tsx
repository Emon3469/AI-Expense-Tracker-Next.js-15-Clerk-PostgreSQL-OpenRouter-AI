'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon} from 'lucide-react'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted){
        return (
            <div className='relative w-14 h-8 bg-gradient-to-r from-emerald-200/80 to-blue-200/80 dark:from-emerald-900/80 backdrop-blur-sm rounded-full shadow-lg border border-emerald-200/50 dark:border-emerald-700/50'>
                <div className='absolute top-0.5 left-0.5 w-7 h-7 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center transition-all duration-300'>
                    <span className='text-sm'><MoonIcon /></span>
                </div>
            </div>
        )
    }

    return (
        <button
         onClick={toggleTheme}
         className='relative w-14 h-8 bg-gradient-to-r from-emerald-200/80 to-blue-200/80 dark:from-emerald-900/80 dark:to-blue-900/80 backdrop-blur-sm rounded-full shadow-lg border border-emerald-200/50 dark:border-emerald-700/50'
         title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
         >
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-50/30 to-blue-50/30 dark:to-blue-950/30'></div>
            <div className={`absolute top-0.5 w-7 h-7 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 
                ${theme === 'light' ? 'left-0.5 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700' : 'left-6 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-gray-700 dark:to-gray-800'}`}>
                <span>
                    {theme === 'light' ? <SunIcon /> : <MoonIcon />}
                </span>
            </div>
            <div className='absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none'>
                <span className={`text-xs transition-opacity duration-300 ${theme === 'light' ? 'opacity-0' : 'opacity-40'}`}>
                    <SunIcon />
                </span>
                <span className={`text-xs transition-opacity duration-300 ${theme === 'light' ? 'opacity-40' : 'opacity-0'}`}>
                    <MoonIcon />
                </span>
            </div>
        </button>
    )
}