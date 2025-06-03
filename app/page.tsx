'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Code,
  Coffee,
  Database,
  ExternalLink,
  Mail,
  Menu,
  Moon,
  Server,
  Sun,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const skills = [
    { name: 'Java', level: 90, icon: <Coffee className="w-5 h-5" /> },
    { name: 'Spring Boot', level: 85, icon: <Server className="w-5 h-5" /> },
    { name: 'MySQL', level: 80, icon: <Database className="w-5 h-5" /> },
    { name: 'PostgreSQL', level: 75, icon: <Database className="w-5 h-5" /> },
    { name: 'RESTful API', level: 88, icon: <Code className="w-5 h-5" /> },
    { name: 'Microservices', level: 82, icon: <Server className="w-5 h-5" /> },
  ];

  const projects = [
    {
      title: '個案彙管系統',
      description: '企業級個案管理平台，提供完整的案件追蹤、狀態管理和報表功能',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Redis'],
      features: [
        '案件生命週期管理',
        '多角色權限控制',
        '即時通知系統',
        '數據分析報表',
      ],
    },
    {
      title: '知識管理平台',
      description: '企業內部知識分享與管理系統，支援文檔管理、搜索和協作功能',
      tech: ['Java', 'Spring Boot', 'Elasticsearch', 'PostgreSQL'],
      features: ['全文檢索', '版本控制', '協作編輯', '權限管理'],
    },
    {
      title: 'API Gateway 服務',
      description: '微服務架構下的統一 API 閘道，提供路由、認證、限流等功能',
      tech: ['Java', 'Spring Cloud', 'Redis', 'Docker'],
      features: ['服務路由', 'JWT 認證', '流量控制', '監控告警'],
    },
    {
      title: '數據同步服務',
      description: '高效能的數據同步解決方案，支援多數據源間的實時同步',
      tech: ['Java', 'Apache Kafka', 'MySQL', 'MongoDB'],
      features: ['實時同步', '錯誤重試', '數據校驗', '性能監控'],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              Leonard Lai
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#home"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                首頁
              </Link>
              <Link
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                關於我
              </Link>
              <Link
                href="#skills"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                技能
              </Link>
              <Link
                href="#projects"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                作品
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                聯絡
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-300"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-300"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-300"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-4">
                <Link
                  href="#home"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  首頁
                </Link>
                <Link
                  href="#about"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  關於我
                </Link>
                <Link
                  href="#skills"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  技能
                </Link>
                <Link
                  href="#projects"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  作品
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  聯絡
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">L</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Leonard Lai
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              前端工程師 | Java 專家
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              專注於企業級應用開發，擁有豐富的系統架構設計和後端開發經驗
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link href="#projects" className="flex items-center">
                  查看作品
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 dark:border-gray-600"
              >
                <Link href="#contact" className="flex items-center">
                  聯絡我
                  <Mail className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              關於我
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              熱愛技術創新，致力於打造高效能、可擴展的後端系統
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                專業經驗
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  作為一名資深後端工程師，我專精於 Java
                  生態系統的開發，擁有豐富的企業級應用開發經驗。
                </p>
                <p>
                  我曾參與開發多個大型專案，包括個案彙管系統和知識管理平台，這些經驗讓我深刻理解了系統架構設計的重要性。
                </p>
                <p>
                  我熱衷於學習新技術，持續關注業界最佳實踐，並將其應用到實際專案中，以提供更好的解決方案。
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-900 dark:text-white">
                    <Code className="mr-2 w-5 h-5 text-blue-600" />
                    核心專長
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Java 企業級應用開發</li>
                    <li>• Spring Boot 微服務架構</li>
                    <li>• 資料庫設計與優化</li>
                    <li>• RESTful API 設計</li>
                    <li>• 系統架構規劃</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              技能專長
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              持續精進的技術能力
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-blue-600 dark:text-blue-400 mr-3">
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {skill.level}%
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              專案作品
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              精選開發專案展示
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      技術棧：
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      主要功能：
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              聯絡方式
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              歡迎與我聯繫討論合作機會
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-gray-200 dark:border-gray-700">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      電子郵件
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      歡迎透過電子郵件與我聯繫
                    </p>
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() =>
                        (window.location.href =
                          'mailto:egroup.leonard@gmail.com')
                      }
                    >
                      <Mail className="mr-2 w-4 h-4" />
                      egroup.leonard@gmail.com
                    </Button>
                  </div>

                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      通常會在 24 小時內回覆您的訊息
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Leonard Lai. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
