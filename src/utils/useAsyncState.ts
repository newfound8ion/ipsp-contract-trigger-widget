import { useState, useRef, useCallback, useEffect } from "react";

function useAsyncState<T>(initialState: T) {
  const [state, setState] = useState<T>(initialState);
  const resolveState = useRef<any>();
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (resolveState.current) {
      resolveState.current(state);
    }
  }, [state]);

  const setAsyncState = useCallback(
    (newState: T) =>
      new Promise<T>(resolve => {
        if (isMounted.current) {
          resolveState.current = resolve;
          setState(newState);
        }
      }),
    []
  );

  return [state, setAsyncState];
}

export default useAsyncState;