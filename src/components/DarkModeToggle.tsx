import { useEffect, useState } from 'preact/hooks'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showIcon, setShowIcon] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = savedTheme === 'dark' || !savedTheme

    setTimeout(() => {
      setIsDark(prefersDark)
      updateTheme(prefersDark)
      setTimeout(() => setShowIcon(true), 100)
    }, 300)
  }, [])

  const updateTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const toggleTheme = () => {
    if (isDark === null) return

    setIsTransitioning(true)
    const newIsDark = !isDark

    setShowIcon(false)
    setTimeout(() => {
      setIsDark(newIsDark)
      updateTheme(newIsDark)
      setTimeout(() => {
        setIsTransitioning(false)
        setShowIcon(true)
      }, 100)
    }, 150)
  }

  return (
    <button
      onClick={toggleTheme}
      disabled={isDark === null || isTransitioning}
      className="hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg p-2 transition-all duration-200 disabled:opacity-50"
      aria-label={isDark === null ? 'Loading theme...' : isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
      <div className="relative h-5 w-5">
        {/* Loading/transition icon */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isDark === null || isTransitioning ? 'opacity-100' : 'opacity-0'
          }`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" className="animate-spin">
            <path d="M21 12a9 9 0 11-6.219-8.56" />
          </svg>
        </div>

        {/* Actual theme icon */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${showIcon && !isTransitioning ? 'opacity-100' : 'opacity-0'}`}>
          {isDark !== null &&
            (isDark ? (
              // Sun icon for switching to light mode
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              // Moon icon for switching to dark mode
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ))}
        </div>
      </div>
    </button>
  )
}
