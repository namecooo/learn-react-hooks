import { memo } from "react";

export const SlowList = memo(function SlowList({ text }: { text: string }) {
  console.log("[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />");

  const items: React.ReactNode[] = [];

  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }

  return <ul>{items}</ul>;
});

function SlowItem({ text }: { text: string }) {
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className="item">Text: {text}</li>;
}
