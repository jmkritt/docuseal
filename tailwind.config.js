module.exports = {
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        docuseal: {
          'color-scheme': 'dark',
          primary: '#D4A84B',
          'primary-content': '#0A0A0A',
          secondary: '#1C1C1C',
          'secondary-content': '#FAFAFA',
          accent: '#E8C77B',
          'accent-content': '#0A0A0A',
          neutral: '#1C1C1C',
          'neutral-content': '#FAFAFA',
          'base-100': '#0A0A0A',
          'base-200': '#1C1C1C',
          'base-300': '#2C2C2C',
          'base-content': '#FAFAFA',
          info: '#D4A84B',
          success: '#86C26C',
          warning: '#E8C77B',
          error: '#D85A5A',
          '--rounded-btn': '0.5rem',
          '--tab-border': '2px',
          '--tab-radius': '.5rem'
        }
      }
    ]
  }
}
