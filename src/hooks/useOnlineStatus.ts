import { useDebugValue, useState } from "react";

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(false);

  const toggleStatus = () => {
    setIsOnline((prev) => !prev);
  };

  useDebugValue(isOnline ? "Online" : "Offline");

  return { isOnline, toggleStatus };
}
