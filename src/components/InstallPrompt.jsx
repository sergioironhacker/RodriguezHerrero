import { useState, useEffect } from 'react';

function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault(); // evita que Chrome muestre el banner por defecto
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt(); // muestra el popup nativo
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuario instaló la PWA ✅');
      } else {
        console.log('Usuario rechazó la instalación ❌');
      }
      setDeferredPrompt(null);
      setShowPrompt(false);
    });
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg flex justify-between items-center z-50">
      <span>¡Añade nuestra web a tu pantalla de inicio!</span>
      <button
        onClick={handleInstallClick}
        className="bg-white text-blue-600 px-4 py-2 rounded ml-2"
      >
        Instalar
      </button>
    </div>
  );
}

export default InstallPrompt;
