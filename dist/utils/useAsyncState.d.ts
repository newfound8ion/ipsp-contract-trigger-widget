declare function useAsyncState<T>(initialState: T): (T | ((newState: T) => Promise<T>))[];
export default useAsyncState;
