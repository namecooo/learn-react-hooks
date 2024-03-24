import { useMemo, useState } from "react";
import { getFilteredTodos } from "../lib/filters";

export function NgTodoList({ todo, limit }: { todo: string[]; limit: number }) {
  const [text, setText] = useState("");

  console.log("NGTodoList: Rendered!");

  console.time("filter array");

  // ! getFilteredTodos() の計算コストが高い場合、useMemo を利用すると良い
  // NG:
  // const visibleTodos = getFilteredTodos(todo, limit);

  const visibleTodos = useMemo(
    () => getFilteredTodos(todo, limit),
    [todo, limit]
  );

  console.timeEnd("filter array");

  return (
    <>
      <div style={{ margin: 10 }}>
        TEXT:{" "}
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <ul>
        {visibleTodos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}
