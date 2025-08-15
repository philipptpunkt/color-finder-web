'use client'

import { cn } from "@/utils/cn"

export function CTASection() {
  return (
    <section className={cn([
      'relative',
      'py-32',
      'px-4',
      'overflow-hidden'
    ])}>
      {/* Animated gradient background */}
      <div className={cn([
        'absolute',
        'inset-0',
        'bg-gradient-to-br',
        'from-primary-600',
        'via-primary-500',
        'to-secondary-600',
        'opacity-95'
      ])}>
        {/* Animated mesh pattern */}
        <div className={cn([
          'absolute',
          'inset-0',
          'opacity-20'
        ])} style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)
          `,
          animation: 'float 6s ease-in-out infinite'
        }} />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={cn([
          'absolute',
          'top-20',
          'left-10',
          'w-32',
          'h-32',
          'bg-white/10',
          'rounded-full',
          'blur-xl',
          'animate-bounce'
        ])} style={{ animationDelay: '0s', animationDuration: '3s' }} />
        
        <div className={cn([
          'absolute',
          'top-40',
          'right-20',
          'w-24',
          'h-24',
          'bg-white/15',
          'rounded-lg',
          'blur-lg',
          'animate-bounce'
        ])} style={{ animationDelay: '1s', animationDuration: '4s' }} />
        
        <div className={cn([
          'absolute',
          'bottom-32',
          'left-1/4',
          'w-20',
          'h-20',
          'bg-white/20',
          'rounded-full',
          'blur-lg',
          'animate-bounce'
        ])} style={{ animationDelay: '2s', animationDuration: '5s' }} />
        
        <div className={cn([
          'absolute',
          'bottom-20',
          'right-1/3',
          'w-16',
          'h-16',
          'bg-white/10',
          'rounded-lg',
          'blur-md',
          'animate-bounce'
        ])} style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
      </div>

      <div className={cn([
        'relative',
        'max-w-5xl',
        'mx-auto',
        'text-center',
        'space-y-12'
      ])}>
        {/* Main heading with animated text */}
        <div className="space-y-6">
          <h2 className={cn([
            'text-5xl',
            'md:text-6xl',
            'lg:text-7xl',
            'font-bold',
            'text-white',
            'tracking-tight',
            'leading-tight'
          ])}>
            Ready to Create
            <span className={cn([
              'block',
              'bg-gradient-to-r',
              'from-white',
              'via-yellow-200',
              'to-white',
              'bg-clip-text',
              'text-transparent',
              'mt-2'
            ])}>
              Amazing Colors?
            </span>
          </h2>
          
          <p className={cn([
            'text-xl',
            'md:text-2xl',
            'text-white/90',
            'max-w-3xl',
            'mx-auto',
            'leading-relaxed'
          ])}>
            Join thousands of designers who trust ColorFinder to create 
            stunning, accessible color palettes for their projects.
          </p>
        </div>

        {/* Stats section */}
        <div className={cn([
          'grid',
          'grid-cols-1',
          'md:grid-cols-3',
          'gap-8',
          'py-8'
        ])}>
          {[
            { number: '50K+', label: 'Designers' },
            { number: '1M+', label: 'Palettes Created' },
            { number: '99.9%', label: 'Uptime' }
          ].map((stat, index) => (
            <div
              key={index}
              className={cn([
                'text-center',
                'space-y-2',
                'group'
              ])}
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s forwards`,
                opacity: 0
              }}
            >
              <div className={cn([
                'text-4xl',
                'md:text-5xl',
                'font-bold',
                'text-white',
                'group-hover:scale-110',
                'transition-transform',
                'duration-300'
              ])}>
                {stat.number}
              </div>
              <div className={cn([
                'text-white/80',
                'text-lg',
                'font-medium'
              ])}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className={cn([
          'flex',
          'flex-col',
          'sm:flex-row',
          'gap-6',
          'justify-center',
          'items-center',
          'pt-8'
        ])}>
          <button className={cn([
            'group',
            'relative',
            'px-12',
            'py-4',
            'bg-white',
            'text-primary-600',
            'rounded-2xl',
            'font-bold',
            'text-lg',
            'hover:bg-white/95',
            'transition-all',
            'duration-300',
            'hover:scale-105',
            'hover:shadow-2xl',
            'overflow-hidden'
          ])}>
            {/* Button shine effect */}
            <div className={cn([
              'absolute',
              'inset-0',
              'bg-gradient-to-r',
              'from-transparent',
              'via-white/20',
              'to-transparent',
              'translate-x-[-100%]',
              'group-hover:translate-x-[100%]',
              'transition-transform',
              'duration-700'
            ])} />
            
            <span className="relative z-10 flex items-center gap-3">
              Start Creating Free
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
          
          <button className={cn([
            'group',
            'px-12',
            'py-4',
            'border-2',
            'border-white/30',
            'text-white',
            'rounded-2xl',
            'font-semibold',
            'text-lg',
            'hover:border-white',
            'hover:bg-white/10',
            'transition-all',
            'duration-300',
            'backdrop-blur-sm'
          ])}>
            <span className="flex items-center gap-3">
              Watch Demo
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
        </div>

        {/* Trust indicators */}
        <div className={cn([
          'pt-12',
          'space-y-4'
        ])}>
          <p className={cn([
            'text-white/70',
            'text-sm',
            'font-medium'
          ])}>
            Trusted by teams at
          </p>
          
          <div className={cn([
            'flex',
            'flex-wrap',
            'justify-center',
            'items-center',
            'gap-8',
            'opacity-60',
            'hover:opacity-80',
            'transition-opacity',
            'duration-300'
          ])}>
            {['Google', 'Microsoft', 'Adobe', 'Figma', 'Spotify'].map((company, index) => (
              <div
                key={index}
                className={cn([
                  'text-white',
                  'font-semibold',
                  'text-lg',
                  'hover:scale-110',
                  'transition-transform',
                  'duration-300',
                  'cursor-pointer'
                ])}
                style={{
                  animation: `fadeIn 0.8s ease-out ${index * 0.1 + 1}s forwards`,
                  opacity: 0
                }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
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
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}