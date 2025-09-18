import Link from "next/link";
import Image from "next/image";
import { Brain, Microscope, LayoutDashboard } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 border-t border-gray-100/50 dark:border-gray-700/50">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center md:items-start gap-4 mb-6">
                            <Image src="./logo.svg" width={40} height={40} alt="light Logo" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain transform group-hover:scale-110 transition-transform duration-300"/>
                            <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-600 via-blue-500 to-teal-500 bg-clip-text text-transparent">
                                <span className="hidden sm:inline" >PennyPilot</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md text-center md:text-left">
                                Intelligent financial management powered by AI. Track your
                                expenses, manage your budget, and gain insights into your spending
                                patterns.
                            </p>
                        </div>
                        <div className="text-center md:text-left mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                                Quick Links
                            </h3>
                            <div className="flex flex-col space-y-3">
                                <Link href='/' className="group inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-medium transition-colors duration-200">
                                   <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                   Home
                                </Link>
                                <Link href='/about' className="group inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-medium transition-colors duration-200">
                                   <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                   About
                                </Link>
                                <Link href='/contact' className="group inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-medium transition-colors duration-200">
                                   <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                   Contect
                                </Link>
                            </div>
                        </div>

                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                               Features
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                                    <div className="w-5 h-5 bg-gradient-to-br from-emerald-500 rounded-md flex items-center justify-center shadow-sm">
                                        <span className="text-white text-xs"><Microscope /></span>
                                    </div>
                                    AI-Powered Insights
                                </div>
                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                                    <div className="w-5 h-5 bg-gradient-to-br from-emerald-500 rounded-md flex items-center justify-center shadow-sm">
                                        <span className="text-white text-xs"><Brain /></span>
                                    </div>
                                    Smart Categorization
                                </div>
                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                                    <div className="w-5 h-5 bg-gradient-to-br from-emerald-500 rounded-md flex items-center justify-center shadow-sm">
                                        <span className="text-white text-xs"><LayoutDashboard /></span>
                                    </div>
                                    Analytics Dashboard
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mb-8"></div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                               © {new Date().getFullYear()} PennyPilot AI. All rights reserved.
                               PennyPilot AI™ is a proprietary financial tracking and management platform. Unauthorized reproduction, distribution, or modification of any content, design, or functionality is strictly prohibited. All trademarks, service marks, and logos are the property of PennyPilot AI and its affiliates.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-300 px-5 py-3 rounded-full text-xs font-medium">
                                <span className="w-1.5 h-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-medium"></span>
                                <span className="font-bold text-blue-600 dark:text-blue-400">Made by Md Shahadat Hossain</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;