import type { App } from "../../src/types/App";

type PlaceholderConfig = Pick<App, "app" | "title" | "description">;

export function createPlaceholderBundle(config: PlaceholderConfig): string {
	const { app, title, description } = config;
	const defaultColor = "#0067C5";
	const badgeText = `Mock implementasjon av ${app}`;

	return `
import React from 'react';

const PlaceholderMicrofrontend = () => {
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
    }, ${JSON.stringify(title)}),
    React.createElement('p', {
      key: 'description',
      style: {
        color: '#666',
        fontSize: '1.1rem',
        marginBottom: '2rem'
      }
    }, ${JSON.stringify(description)}),
    React.createElement('div', {
      key: 'badge',
      style: {
        backgroundColor: '${defaultColor}',
        color: 'white',
        padding: '1rem',
        borderRadius: '4px',
        marginBottom: '1rem'
      }
    }, ${JSON.stringify(badgeText)}),
  ]);
};

export default PlaceholderMicrofrontend;
`.trim();
}
