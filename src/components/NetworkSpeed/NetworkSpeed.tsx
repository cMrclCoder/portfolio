/* eslint-disable @typescript-eslint/no-explicit-any */
import "./NetworkSpeed.css";
import { useState, useEffect } from "react";

const NetworkSpeed = () => {
  const [speed, setSpeed] = useState<number | null>(null);

  useEffect(() => {
    const updateSpeed = () => {
      if ("connection" in navigator) {
        const connection = (navigator as any).connection;
        setSpeed(connection.downlink);
      } else {
        setSpeed(null);
      }
    };

    updateSpeed();
    if ("connection" in navigator) {
      (navigator as any).connection.removeEventListener("change", updateSpeed);
    }

    return () => {
      if ("connection" in navigator) {
        (navigator as any).connection.removeEventListener(
          "change",
          updateSpeed
        );
      }
    };
  }, []);

  return (
    <div className="p-1 text-neutral rounded-lg shadown-md w-50">
      {speed !== null ? (
        <p className="text-sm">
          Network Speed:{" "}
          <span className="font-bold text-green-400">
            {speed.toFixed(2)} Mbps
          </span>
        </p>
      ) : (
        <p className="text-red-400">Network information API not supported</p>
      )}
    </div>
  );
};

export default NetworkSpeed;
