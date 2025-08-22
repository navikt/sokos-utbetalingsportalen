interface MicrofrontendConfig {
  name: string;
  title: string;
  description: string;
  color?: string;
}

export function generateMicrofrontend(config: MicrofrontendConfig): string {
  const { name, title, description, color = "#0067C5" } = config;

  return `
// Mock microfrontend for ${name}
import React from 'react';

// Mock microfrontend component
const MockMicrofrontend = () => {
  return React.createElement('div', {
    style: {
      padding: '2rem',
      textAlign: 'center',
      border: \`3px solid ${color}\`,
      borderRadius: '8px',
      backgroundColor: '#f8f9fa',
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '600px',
      margin: '2rem auto'
    }
  }, [
    React.createElement('h1', {
      key: 'title',
      style: {
        color: '${color}',
        marginBottom: '1rem',
        fontSize: '2rem'
      }
    }, '${title}'),
    React.createElement('p', {
      key: 'description',
      style: {
        color: '#666',
        fontSize: '1.1rem',
        marginBottom: '2rem'
      }
    }, '${description}'),
    React.createElement('div', {
      key: 'badge',
      style: {
        backgroundColor: '${color}',
        color: 'white',
        padding: '1rem',
        borderRadius: '4px',
        marginBottom: '1rem'
      }
    }, \`Mock implementation av \${${JSON.stringify(name)}}\`),
    React.createElement('p', {
      key: 'subtitle',
      style: {
        fontSize: '0.9rem',
        color: '#888',
        fontStyle: 'italic'
      }
    }, 'Dette er en mock microfrontend for lokal utvikling')
  ]);
};

// Export the component as default
export default MockMicrofrontend;
`.trim();
}
