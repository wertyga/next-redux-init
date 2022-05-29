import { useContext, useEffect, useRef } from "react";
import { WebWorkerContext } from "./WebWorkerProvider/WebWorkerProvider";

export const useWorker = () => useContext(WebWorkerContext);

export const useWorkerSubscribe = (
  type: string,
  callback: (data: any) => any,
  initialState?: any
) => {
  const state = useRef<any>(initialState);
  const { getWorker } = useWorker();

  const handleMessage = ({ data: { type: messageType, ...props } }) => {
    if (messageType !== type) return;
    state.current =
      callback({ ...props, state: state.current }) || state.current;
  };

  useEffect(() => {
    state.current = initialState;
  }, [initialState]);

  useEffect(() => {
    if (!type) return;
    setTimeout(() => {
      if (!getWorker()) return;
      getWorker().addEventListener("message", handleMessage);
    }, 0);
    return () => {
      getWorker().removeEventListener("message", handleMessage);
    };
  }, []);
};
