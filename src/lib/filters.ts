export function getFilteredTodos(todos: string[], limit: number) {
  const startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  return todos.filter((todo) => todo.length < limit);
}
