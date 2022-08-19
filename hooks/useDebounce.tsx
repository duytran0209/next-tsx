import { useEffect, useState } from "react";

export default function useDebounce() {
  const [typingTimeout, setTypingTimeout] = useState<string>("");
  function debounce(func: () => void, wait = 1000) {
    clearTimeout(typingTimeout);
    const timeout = setTimeout(() => {
      func();
    }, wait);
    setTypingTimeout("timeout");
  }
  return debounce;
}
