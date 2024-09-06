export const logHandlers = new Set<(message: string) => void>();

export function addLog(message: string) {
  for (const handler of logHandlers) {
    handler(message);
  }
}

export function addLogHandler(handler: (message: string) => void) {
  logHandlers.add(handler);
  return () => {
    logHandlers.delete(handler);
  };
}
