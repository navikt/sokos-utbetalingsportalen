export function createLocalApp(
	microfrontendName: string,
	localUrl: string,
): string {
	return `import React from 'react';

const LocalMicrofrontendIframe = () => {
  console.log('Lokal MF lastet via iframe:', '${localUrl}');

  return React.createElement('iframe', {
    src: '${localUrl}',
    style: { 
      width: '100%', 
      height: '100vh', 
      border: 'none',
      display: 'block'
    },
    title: '${microfrontendName} - Lokal utvikling',
  });
};

export default LocalMicrofrontendIframe;`;
}
