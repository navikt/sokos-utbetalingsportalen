export function createLocalIframeBundle(
	microfrontendName: string,
	localUrl: string,
): string {
	return `import React from 'react';

const LocalMicrofrontendIframe = () => {
  console.log('Lokal MF lastet via iframe:', ${JSON.stringify(localUrl)});

  return React.createElement('iframe', {
    src: ${JSON.stringify(localUrl)},
    style: { 
      width: '100%', 
      height: '100vh', 
      border: 'none',
      display: 'block'
    },
    title: ${JSON.stringify(`${microfrontendName} - Lokal utvikling`)},
  });
};

export default LocalMicrofrontendIframe;`;
}
