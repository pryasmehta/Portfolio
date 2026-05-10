'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, Github, Linkedin, Mail, Menu, X, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      id: 1,
      title: 'CEMEX Digital Transformation',
      subtitle: 'Team Lead & Key Quality Engineer',
      period: 'Mar 2024 - Present',
      description: 'Led end-to-end QA lifecycle for enterprise order management platform across EMEA region (UK, Poland, Spain, Germany, France, CZ, DE, IL, AE, EG). Managed team mentoring, test strategy, and production releases.',
      highlights: ['QA Leadership', 'Test Strategy', 'Team Mentoring', 'Multi-region Support', 'Agile/Scrum'],
      tech: ['Jira', 'Test Management', 'Mobile Testing', 'Web Applications', 'SQL'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Paperless Deliveries Project',
      subtitle: 'Quality Engineer & Team Lead',
      period: 'Jul 2022 - Present',
      description: 'Revolutionized delivery process with digital system eliminating paper-based tickets. Coordinated UAT, SIT, and regression testing across iOS/Android platforms. Award-winning project for Sustainable Development.',
      highlights: ['Mobile Testing', 'UAT Coordination', 'Award-Winning', 'Sustainability Focus', 'Process Automation'],
      tech: ['iOS', 'Android', 'Web Apps', 'SQL', 'Process Design'],
      color: 'from-emerald-500 to-teal-600',
      award: 'Outstanding Project for Sustainable Development'
    },
    {
      id: 3,
      title: 'UK & US Acceleration',
      subtitle: 'Quality Engineer',
      period: 'Jul 2022 - Nov 2023',
      description: 'Digitized order placement and fulfillment across UK and US markets. Designed comprehensive test plans, conducted functional and regression testing for web and mobile platforms.',
      highlights: ['Web & Mobile Testing', 'Test Planning', 'SIT/UAT', 'Multi-market Support', 'Data Validation'],
      tech: ['Web Apps', 'iOS', 'Android', 'SQL', 'Regression Testing'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 4,
      title: 'DHL IT Services - ERP Testing',
      subtitle: 'Quality Engineer',
      period: 'Jan 2022 - Jun 2022',
      description: 'Validated Salesforce CRM integration with SAP systems for DHL internal operations. Led manual and automated testing across multiple modules with team of 8-10 engineers.',
      highlights: ['Salesforce Testing', 'CRM Integration', 'SAP Validation', 'Automated Testing', 'Team Coordination'],
      tech: ['Salesforce', 'SAP', 'qTest', 'Jira', 'SQL'],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const freelanceProjects = [
    {
      title: 'Palisandr.in',
      role: 'Full Stack Developer & Business Consultant',
      description: 'Managed full development lifecycle and served as QA/Quality Control Manager. Direct stakeholder engagement and IT consulting.',
      status: 'Live'
    },
    {
      title: 'Foia.cz',
      role: 'Full Stack Developer',
      description: 'Created complete website for Czech-based association. Professional design and responsive implementation.',
      status: 'Live',
      link: 'https://foia.cz'
    }
  ];

  const skills = {
    'QA & Testing': ['Test Strategy & Planning', 'Functional Testing', 'Regression Testing', 'Mobile Testing (iOS/Android)', 'Web Testing', 'UAT/SIT Coordination', 'SQL Data Validation', 'Risk Management', 'Test Automation'],
    'Leadership & Management': ['Team Leadership', 'Mentoring & Coaching', 'Test Estimation', 'Defect Management', 'Process Improvement', 'Cross-functional Collaboration', 'Stakeholder Management', 'Production Support'],
    'Tools & Technologies': ['Jira', 'Test Management Tools', 'qTest', 'Salesforce', 'SAP', 'Android/iOS Platforms', 'SQL', 'Git', 'Confluence'],
    'Consulting & Development': ['IT Consulting', 'Business Analysis', 'SEO/AEO Strategies', 'Technology Recommendations', 'Database Optimization', 'Full Stack Development', 'Website Development', 'Next.js', 'React']
  };

  const consulting = [
    {
      title: 'IT Consultant',
      company: 'Bishnoi s.r.o. (Czech Republic)',
      period: '2021 - Present',
      services: [
        'Technology consulting and recommendations',
        'Partner website communication strategies',
        'Database optimization and design',
        'AI advancement and implementation',
        'SEO and AEO strategy',
        'Digital transformation guidance'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 opacity-5 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500 opacity-5 blur-3xl rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-500 opacity-5 blur-3xl rounded-full animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['home', 'experience', 'projects', 'consulting', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-all duration-300 font-medium text-sm tracking-wide ${
                  activeSection === item
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-gray-300 hover:text-cyan-300'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20 py-4 px-6">
            {['home', 'experience', 'projects', 'consulting', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left capitalize py-3 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fadeInUp">
              <div className="inline-block">
                <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
                  QA Leader & IT Consultant
                </span>
              </div>
              
              <div className="mb-4">
                <p className="text-cyan-400 font-semibold text-lg">Ing Pryas Mehta</p>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Digital Quality
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  & Innovation Expert
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Leading enterprise QA transformations at CEMEX. Building digital solutions that drive operational efficiency across global markets. IT consultant helping Czech businesses embrace modern technology.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 group"
                >
                  View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border border-cyan-400/50 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Get In Touch
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-cyan-400/20">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">15+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">8</div>
                  <div className="text-sm text-gray-400">Countries Supported</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl border border-cyan-400/20 p-8 h-full flex flex-col justify-between overflow-hidden">
                <div className="space-y-4">
                  <div className="text-sm text-cyan-400 font-mono">
                    &gt; Quality Assurance Leadership
                  </div>
                  <div className="space-y-2">
                    {[
                      'Test Strategy & Planning ✓',
                      'Team Mentoring & Coaching ✓',
                      'Production Support ✓',
                      'Multi-platform Testing ✓',
                      'Process Improvement ✓'
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="text-gray-300 font-mono text-sm opacity-0 animate-fadeInUp"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-xs text-gray-500 font-mono">
                  const quality = 'paramount';
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-cyan-400" size={24} />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>

          <div className="space-y-8">
            {/* Timeline Item 1 */}
            <div className="group relative pl-8 border-l-2 border-cyan-500/50 hover:border-cyan-400 transition-colors">
              <div className="absolute left-[-17px] top-0 w-8 h-8 bg-slate-800 border-2 border-cyan-500 rounded-full group-hover:bg-cyan-500 transition-all duration-300"></div>
              
              <div className="bg-slate-800/50 border border-cyan-400/20 rounded-xl p-8 group-hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Team Lead & Key Quality Engineer</h3>
                    <p className="text-cyan-400 font-semibold">CEMEX - Global Construction Materials</p>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap ml-4">Mar 2024 - Now</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Leading end-to-end QA lifecycle for enterprise digital transformation. Managing test strategy, team mentoring, and production releases across EMEA region (UK, Poland, Spain, Germany, France, CZ, DE, IL, AE, EG).
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Test Strategy', 'Team Leadership', 'Agile/Scrum', 'Mobile Testing', 'Production Support', 'Mentoring'].map((skill) => (
                    <span key={skill} className="text-xs bg-cyan-500/10 border border-cyan-400/30 rounded px-3 py-2 text-cyan-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="group relative pl-8 border-l-2 border-emerald-500/50 hover:border-emerald-400 transition-colors">
              <div className="absolute left-[-17px] top-0 w-8 h-8 bg-slate-800 border-2 border-emerald-500 rounded-full group-hover:bg-emerald-500 transition-all duration-300"></div>
              
              <div className="bg-slate-800/50 border border-emerald-400/20 rounded-xl p-8 group-hover:border-emerald-400/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Quality Engineer & Team Lead</h3>
                    <p className="text-emerald-400 font-semibold">CEMEX - Paperless Deliveries</p>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap ml-4">Jul 2022 - Now</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Award-winning project revolutionizing delivery process with digital system. Coordinated UAT, SIT, and regression testing across iOS/Android platforms.
                </p>
                <div className="mb-4 inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-400/50 rounded text-emerald-300 text-sm font-semibold">
                  🏆 Outstanding Project for Sustainable Development
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['iOS Testing', 'Android Testing', 'UAT', 'Sustainability', 'Process Design', 'SQL'].map((skill) => (
                    <span key={skill} className="text-xs bg-emerald-500/10 border border-emerald-400/30 rounded px-3 py-2 text-emerald-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="group relative pl-8 border-l-2 border-purple-500/50 hover:border-purple-400 transition-colors">
              <div className="absolute left-[-17px] top-0 w-8 h-8 bg-slate-800 border-2 border-purple-500 rounded-full group-hover:bg-purple-500 transition-all duration-300"></div>
              
              <div className="bg-slate-800/50 border border-purple-400/20 rounded-xl p-8 group-hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Quality Engineer</h3>
                    <p className="text-purple-400 font-semibold">CEMEX - UK & US Acceleration</p>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap ml-4">Jul 2022 - Nov 2023</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Digitized order management across UK and US markets. Designed comprehensive test plans and conducted functional/regression testing for web and mobile platforms.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Web Testing', 'Mobile Apps', 'Test Planning', 'SIT/UAT', 'Data Validation', 'Multi-market'].map((skill) => (
                    <span key={skill} className="text-xs bg-purple-500/10 border border-purple-400/30 rounded px-3 py-2 text-purple-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="group relative pl-8 border-l-2 border-orange-500/50 hover:border-orange-400 transition-colors">
              <div className="absolute left-[-17px] top-0 w-8 h-8 bg-slate-800 border-2 border-orange-500 rounded-full group-hover:bg-orange-500 transition-all duration-300"></div>
              
              <div className="bg-slate-800/50 border border-orange-400/20 rounded-xl p-8 group-hover:border-orange-400/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Quality Engineer</h3>
                    <p className="text-orange-400 font-semibold">DHL IT Services - ERP Testing</p>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap ml-4">Jan 2022 - Jun 2022</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Validated Salesforce CRM integration with SAP systems. Led manual and automated testing across multiple modules with team of 8-10 engineers.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Salesforce', 'SAP', 'CRM Testing', 'Automation', 'Team Lead', 'qTest/Jira'].map((skill) => (
                    <span key={skill} className="text-xs bg-orange-500/10 border border-orange-400/30 rounded px-3 py-2 text-orange-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          {/* Enterprise Projects */}
          <div className="space-y-8 mb-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 bg-slate-800/30 hover:bg-slate-800/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="relative p-8 md:p-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-1`}>
                        {project.subtitle}
                      </p>
                      <p className="text-sm text-gray-400">{project.period}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  {project.award && (
                    <div className="mb-6 inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-400/50 rounded-lg text-yellow-300 text-sm font-semibold">
                      🏆 {project.award}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-semibold">Key Highlights</p>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className={`text-xs px-3 py-2 rounded-full bg-gradient-to-r ${project.color} bg-clip-text text-transparent border border-cyan-400/30`}
                          >
                            ✓ {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-semibold">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="text-xs bg-slate-700 border border-cyan-400/20 rounded px-3 py-2 text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Freelance Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-white">Freelance & Personal Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div
                className="group relative overflow-hidden rounded-xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 bg-slate-800/30 p-8 hover:bg-slate-800/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">Palisandr.in</h4>
                  <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/50 rounded-full text-blue-300 text-xs font-semibold">
                    Live
                  </span>
                </div>
                <p className="text-blue-400 font-semibold mb-3">Full Stack Developer & Business Consultant</p>
                <p className="text-gray-300 mb-4">Managed full development lifecycle and served as QA/Quality Control Manager. Direct stakeholder engagement and IT consulting.</p>
                <a
                  href="http://palisandr.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold group"
                >
                  Visit Website <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div
                className="group relative overflow-hidden rounded-xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 bg-slate-800/30 p-8 hover:bg-slate-800/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">Foia.cz</h4>
                  <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/50 rounded-full text-blue-300 text-xs font-semibold">
                    Live
                  </span>
                </div>
                <p className="text-blue-400 font-semibold mb-3">Full Stack Developer</p>
                <p className="text-gray-300 mb-4">Created complete website for Czech-based association. Professional design and responsive implementation with modern technologies.</p>
                <a
                  href="http://foia.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold group"
                >
                  Visit Website <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative z-10 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Expertise & Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="group">
                <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  {category}
                </h3>
                <div className="space-y-3">
                  {skillList.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section id="consulting" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              IT Consulting Services
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {consulting.map((consultant, index) => (
                <div key={index} className="bg-slate-800/50 border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{consultant.title}</h3>
                  <p className="text-cyan-400 font-semibold mb-1">{consultant.company}</p>
                  <p className="text-sm text-gray-400 mb-6">{consultant.period}</p>
                  
                  <div className="space-y-3">
                    {consultant.services.map((service, i) => (
                      <div key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl border border-cyan-400/20 p-10">
                <h4 className="text-xl font-bold text-white mb-6">Why Choose Me?</h4>
                <div className="space-y-4">
                  {[
                    'Deep expertise in QA leadership and enterprise testing',
                    'Proven track record with global companies like CEMEX and DHL',
                    'IT consultant helping Czech businesses modernize',
                    'Full-stack development capabilities',
                    'Award-winning work on sustainable digital solutions',
                    'Direct stakeholder collaboration experience'
                  ].map((reason, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-cyan-400 text-xl">→</span>
                      <span className="text-gray-300">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a
              href="tel:+420774817113"
              className="group relative overflow-hidden rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 bg-slate-800/50 hover:bg-slate-800/70 p-8 transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-4">
                <Mail className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={32} />
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">Phone</p>
                  <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">+420 774 817 113</p>
                </div>
              </div>
            </a>

            <a
              href="mailto:pryasmehta21@gmail.com"
              className="group relative overflow-hidden rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 bg-slate-800/50 hover:bg-slate-800/70 p-8 transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-4">
                <Mail className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={32} />
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">Email</p>
                  <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">pryasmehta21@gmail.com</p>
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ing-pryas-mehta-8537b9163/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 bg-slate-800/50 hover:bg-slate-800/70 p-8 transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-4">
                <Linkedin className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={32} />
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">LinkedIn</p>
                  <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">Ing Pryas Mehta</p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 bg-slate-800/50 hover:bg-slate-800/70 p-8 transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-4">
                <Github className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={32} />
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">GitHub</p>
                  <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">Your Profile</p>
                </div>
              </div>
            </a>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-10 text-center">
            <p className="text-xl text-gray-300 mb-6">
              Ready to elevate your QA processes or transform your digital initiatives?
            </p>
            <p className="text-gray-400">
              I'm available for consulting engagements, contract QA leadership roles, and full-stack development projects. Let's discuss how I can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-400/20 py-8 relative z-10 bg-slate-900/80">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p className="mb-2">© 2024 Ing Pryas Mehta - Professional Portfolio. All Rights Reserved.</p>
          <p className="text-sm">📍 Prague, Czech Republic | QA Leader & IT Consultant</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
