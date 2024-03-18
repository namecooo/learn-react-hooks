import { memo, useState } from "react";

export const CountButton = memo(function CountButton(
  { handleClick }: { handleClick: () => void }
) {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount((count) => count + 1);
  }

  console.log('[ARTIFICIALLY SLOW] Rendering <CountButton />');
  const startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  return (
    <div>
      <button onClick={handleCount}>
        count is {count}
      </button>
      <button type="button" onClick={handleClick}>関数実行</button>
    </div>
  )
})