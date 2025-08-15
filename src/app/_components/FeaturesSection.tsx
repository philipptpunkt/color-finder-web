'use client'

import { cn } from "@/utils/cn"

export function FeaturesSection() {
  const features = [
    {
      title: "Accessibility First",
      description: "Built-in WCAG compliance checking ensures your colors work for everyone, including users with visual impairments.",
      icon: "♿",
      stats: "99.9% Compliant",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Multiple Export Formats",
      description: "Export your palettes as CSS variables, Sass, JSON, or design tokens for seamless integration.",
      icon: "📤",
      stats: "8+ Formats",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Real-time Preview",
      description: "See your colors in action with live previews of common UI components and layouts.",
      icon: "👁️",
      stats: "Instant Updates",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Smart Algorithms",
      description: "Advanced color theory algorithms generate harmonious palettes that follow design principles.",
      icon: "🧠",
      stats: "AI-Powered",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Team Collaboration",
      description: "Share palettes with your team, get feedback, and maintain consistency across projects.",
      icon: "👥",
      stats: "Unlimited Teams",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Dark Mode Support",
      description: "Automatically generate dark mode variants or create custom themes for any lighting condition.",
      icon: "🌙",
      stats: "Auto-Generated",
      color: "from-slate-500 to-gray-600"
    }
  ]

  return (
    <section className={cn([
      'relative',
      'py-24',
      'px-4',
      'bg-gradient-to-br',
      'from-background',
      'via-background-secondary',
      'to-background-tertiary',
      'overflow-hidden'
    ])}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={cn([
          'absolute',
          'top-1/4',
          'left-1/4',
          'w-96',
          'h-96',
          'bg-primary-500/5',
          'rounded-full',
          'blur-3xl',
          'animate-pulse'
        ])} />
        <div className={cn([
          'absolute',
          'bottom-1/4',
          'right-1/4',
          'w-80',
          'h-80',
          'bg-secondary-500/5',
          'rounded-full',
          'blur-3xl',
          'animate-pulse'
        ])} style={{ animationDelay: '2s' }} />
      </div>

      <div className={cn([
        'relative',
        'max-w-7xl',
        'mx-auto'
      ])}>
        {/* Section Header */}
        <div className="text-center space-y-8 mb-20">
          <div className="relative">
            <h2 className={cn([
              'text-4xl',
              'md:text-5xl',
              'lg:text-6xl',
              'font-bold',
              'text-text',
              'tracking-tight'
            ])}>
              Why Choose
              <span className={cn([
                'block',
                'bg-gradient-to-r',
                'from-primary-500',
                'via-secondary-500',
                'to-primary-600',
                'bg-clip-text',
                'text-transparent',
                'mt-2'
              ])}>
                ColorFinder?
              </span>
            </h2>
            
            {/* Decorative line */}
            <div className={cn([
              'absolute',
              'top-1/2',
              'left-1/2',
              'transform',
              '-translate-x-1/2',
              '-translate-y-1/2',
              'w-32',
              'h-px',
              'bg-gradient-to-r',
              'from-transparent',
              'via-primary-500/50',
              'to-transparent',
              '-z-10'
            ])} />
          </div>
          
          <p className={cn([
            'text-xl',
            'text-text-secondary',
            'max-w-3xl',
            'mx-auto',
            'leading-relaxed'
          ])}>
            Professional-grade features designed to streamline your design workflow 
            and ensure your color choices are both beautiful and accessible.
          </p>
        </div>

        {/* Features Grid */}
        <div className={cn([
          'grid',
          'grid-cols-1',
          'md:grid-cols-2',
          'lg:grid-cols-3',
          'gap-8'
        ])}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn([
                'group',
                'relative',
                'bg-surface/60',
                'backdrop-blur-sm',
                'rounded-3xl',
                'p-8',
                'border',
                'border-border/30',
                'hover:border-primary-500/30',
                'transition-all',
                'duration-500',
                'hover:scale-105',
                'hover:shadow-2xl',
                'overflow-hidden'
              ])}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'slideInUp 0.8s ease-out forwards'
              }}
            >
              {/* Gradient overlay */}
              <div className={cn([
                'absolute',
                'inset-0',
                'bg-gradient-to-br',
                feature.color,
                'opacity-0',
                'group-hover:opacity-5',
                'transition-opacity',
                'duration-500',
                'rounded-3xl'
              ])} />
              
              {/* Floating orb */}
              <div className={cn([
                'absolute',
                '-top-4',
                '-right-4',
                'w-24',
                'h-24',
                'bg-gradient-to-br',
                feature.color,
                'rounded-full',
                'opacity-10',
                'group-hover:opacity-20',
                'group-hover:scale-110',
                'transition-all',
                'duration-500',
                'blur-xl'
              ])} />
              
              <div className="relative z-10 space-y-6">
                {/* Icon and Stats */}
                <div className="flex items-start justify-between">
                  <div className={cn([
                    'text-5xl',
                    'group-hover:scale-110',
                    'transition-transform',
                    'duration-300'
                  ])}>
                    {feature.icon}
                  </div>
                  
                  <div className={cn([
                    'px-3',
                    'py-1',
                    'bg-gradient-to-r',
                    feature.color,
                    'text-white',
                    'rounded-full',
                    'text-xs',
                    'font-bold',
                    'opacity-80',
                    'group-hover:opacity-100',
                    'transition-opacity',
                    'duration-300'
                  ])}>
                    {feature.stats}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className={cn([
                  'text-2xl',
                  'font-bold',
                  'text-text',
                  'group-hover:text-primary-500',
                  'transition-colors',
                  'duration-300'
                ])}>
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className={cn([
                  'text-text-secondary',
                  'leading-relaxed',
                  'text-lg',
                  'group-hover:text-text',
                  'transition-colors',
                  'duration-300'
                ])}>
                  {feature.description}
                </p>
                
                {/* Progress bar animation */}
                <div className="relative">
                  <div className={cn([
                    'w-full',
                    'h-1',
                    'bg-border',
                    'rounded-full',
                    'overflow-hidden'
                  ])}>
                    <div className={cn([
                      'h-full',
                      'bg-gradient-to-r',
                      feature.color,
                      'rounded-full',
                      'transform',
                      'scale-x-0',
                      'group-hover:scale-x-100',
                      'transition-transform',
                      'duration-1000',
                      'origin-left'
                    ])} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className={cn([
            'inline-flex',
            'items-center',
            'gap-4',
            'px-8',
            'py-4',
            'bg-surface/80',
            'backdrop-blur-sm',
            'rounded-2xl',
            'border',
            'border-border/50',
            'hover:border-primary-500/50',
            'transition-all',
            'duration-300',
            'group'
          ])}>
            <span className="text-text-secondary text-lg">
              Ready to transform your design workflow?
            </span>
            <button className={cn([
              'px-6',
              'py-2',
              'bg-gradient-to-r',
              'from-primary-500',
              'to-primary-600',
              'text-white',
              'rounded-xl',
              'font-semibold',
              'hover:shadow-lg',
              'group-hover:scale-105',
              'transition-all',
              'duration-300'
            ])}>
              Get Started Free
            </button>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}