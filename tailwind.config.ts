import type { Config } from "tailwindcss";

import tailwindcss_animate from "tailwindcss-animate";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				brand: {
					"100": "#0F870F",
					"200": "#b5bfcc",
					DEFAULT: "#ABB6C5",
				},
				red: "#ff0000",
				gold: "#c49839",
				green: "#0F870F",
				grey:{
					"100":"#9c9898",
					"200":"#e3e3e3"
				},
				blue: "#006C6C",
				light: {
					"100": "#F0F0F0",
					"200": "#E2E2E2",
					"300": "#F2F5F9",
					"400": "#F2F4F8",
				},
				dark: {
					"100": "#04050C",
					"200": "#131524",
				},
				background: "#F0F0F0",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",

			},
			fontFamily: {
				poppins: ["var(--font-poppins)"],
			},
			boxShadow: {
				"drop-1": "0px 10px 30px 0px rgba(66, 71, 97, 0.1)",
				"drop-2": "0 8px 30px 0 rgba(65, 89, 214, 0.3)",
				"drop-3": "0 8px 30px 0 rgba(65, 89, 214, 0.1)",
			},
			screens:{
				xs:'480px',
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"caret-blink": {
					"0%,70%,100%": {
						opacity: "1",
					},
					"20%,50%": {
						opacity: "0",
					},
				},
			},
			screen: {
				xs:'480px',
			},
			animation: {
				"caret-blink": "caret-blink 1.25s ease-out infinite",
			},
		},
	},
	plugins: [tailwindcss_animate],
};
export default config;
