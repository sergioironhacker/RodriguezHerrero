import { useState, useEffect } from "react";

function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detectar iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const ios = /iphone|ipad|ipod/.test(userAgent);
    const standalone = window.navigator.standalone;
    setIsIOS(ios && !standalone);

    // Android / Chrome beforeinstallprompt
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        console.log(
          choiceResult.outcome === "accepted"
            ? "Usuario instaló la PWA ✅"
            : "Usuario rechazó la instalación ❌"
        );
        setDeferredPrompt(null);
        setShowPrompt(false);
      });
    }
  };

  const handleClose = () => setShowPrompt(false);

  if (!showPrompt && !isIOS) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg flex flex-col sm:flex-row justify-between items-center z-50 space-y-2 sm:space-y-0">
      {isIOS ? (
        <>
          <span>
            Para agregar esta web a tu pantalla de inicio, pulsa el botón de
            compartir y luego "Añadir a pantalla de inicio".
          </span>
          <button
            onClick={handleClose}
            className="bg-white text-blue-600 px-4 py-2 rounded ml-0 sm:ml-2"
          >
            Cerrar
          </button>
        </>
      ) : (
        <>
          <span>¡Añade nuestra web a tu pantalla de inicio!</span>
          <div className="flex space-x-2">
            <button
              onClick={handleInstallClick}
              className="bg-white text-blue-600 px-4 py-2 rounded"
            >
              Instalar
            </button>
            <button
              onClick={handleClose}
              className="bg-white text-blue-600 px-4 py-2 rounded"
            >
              Cerrar
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default InstallPrompt;
