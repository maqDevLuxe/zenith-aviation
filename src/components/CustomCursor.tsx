import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    document.body.classList.add("custom-cursor");
    setIsVisible(true);

    const move = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    const handleOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, [role=button]")) setIsHovering(true);
    };
    const handleOut = () => setIsHovering(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);
    return () => {
      document.body.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{ x: position.x - 4, y: position.y - 4, scale: isHovering ? 2.5 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="w-2 h-2 rounded-full bg-foreground" />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        animate={{ x: position.x - 20, y: position.y - 20, scale: isHovering ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.8 }}
      >
        <div className="w-10 h-10 rounded-full border border-silver/40" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
