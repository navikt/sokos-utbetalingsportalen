import '@testing-library/jest-dom';

// Mock window.location for testing
Object.defineProperty(window, 'location', {
  value: {
    href: 'http://localhost:3000',
  },
  writable: true,
});