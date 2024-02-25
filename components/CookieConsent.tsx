import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent !== 'given') {
      setVisible(true);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem('cookieConsent', 'given');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white text-gray-800 shadow-md">
      <p>We use cookies to improve your experience. By continuing to use our site, you accept our use of cookies.</p>
      <button onClick={handleConsent} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
