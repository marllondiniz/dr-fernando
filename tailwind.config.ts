import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#E2B8AF", // Pêssego/rosado suave
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#E2B8AF", // Pêssego/rosado suave - MESMA COR DO PRIMARY
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Cores personalizadas da paleta elegante
        champagne: {
          50: "#FDFCFB",
          100: "#F9F6F3",
          300: "#F0E8E0",
          400: "#E8DCCF",
          500: "#DFD0C0",
          600: "#D4C2B0",
          700: "#C7B29E",
          800: "#B8A08C",
          900: "#A68E78",
        },
        peach: {
          50: "#FDF7F5",
          100: "#FAEDEA",
          200: "#F5E0DB",
          300: "#E2B8AF", // Pêssego/rosado principal
          400: "#D4A59A",
          500: "#C69285",
          600: "#B87F70",
          700: "#A86C5B",
          800: "#985946",
          900: "#884631",
        },
        charcoal: {
          50: "#F7F7F7",
          100: "#EEEEEE",
          200: "#DDDDDD",
          300: "#CCCCCC",
          400: "#BBBBBB",
          500: "#999999",
          600: "#777777",
          700: "#555555",
          800: "#333333",
          900: "#232323", // Texto escuro principal
        },
        // Cor personalizada para o botão
        coral: {
          DEFAULT: "rgb(231, 99, 83)", // Coral vermelho
        },
        // Cor teal para o header
        teal: {
          800: "#2D5A5A", // Teal escuro para texto
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}

export default config
