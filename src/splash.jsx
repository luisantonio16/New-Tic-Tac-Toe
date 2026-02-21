import { useEffect, useState } from "react";
import "./App.css";

export default function SplashScreen({ children }) {
  const [isStandalone, setIsStandalone] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;

    if (standalone) {
      setIsStandalone(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 2500);

      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, []);

  if (!visible) return children;

  if (!isStandalone) return children;

  return (
    <div className="splash-container">
      <div className="logo-wrapper">
        <img src="../src/assets/react.png" alt="logo" className="logo" />
      </div>
      <p className="app-name">Mi App</p>
    </div>
  );
}