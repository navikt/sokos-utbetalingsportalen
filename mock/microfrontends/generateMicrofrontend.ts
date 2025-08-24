import { type MicroFrontend } from "../../src/microfrontend";

export function generateMicrofrontend(config: MicroFrontend): string {
  const { app, title, description } = config;
  const defaultColor = "#0067C5";

  return `
import React from 'react';

const MockMicrofrontend = () => {
  return React.createElement('div', {
    style: {
      padding: '2rem',
      textAlign: 'center',
      border: \`3px solid ${defaultColor}\`,
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
        color: '${defaultColor}',
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
        backgroundColor: '${defaultColor}',
        color: 'white',
        padding: '1rem',
        borderRadius: '4px',
        marginBottom: '1rem'
      }
    }, \`Mock implementasjon av \${${JSON.stringify(app)}}\`),
  ]);
};

export default MockMicrofrontend;
`.trim();
}
