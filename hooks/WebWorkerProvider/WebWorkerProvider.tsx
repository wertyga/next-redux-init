import {createContext, useRef, useEffect} from "react";
import { initWebWorker } from "./initWebWorker";
import { worker as webWorker } from "./worker";

type PostData = { type: string, [key: string]: any };

export const WebWorkerContext = createContext<{
  getWorker: () => any;
  postMessage: (data: PostData) => void;
}>(
  {
    getWorker: () => {},
    postMessage: () => {},
  }
);

export const WebWorkerProvider = ({ children }) => {
  const worker = useRef(null);

  const getWorker = () => worker.current;

  const postMessage = (data: PostData) => {
    worker.current.postMessage(data);
  };

  useEffect(() => {
    worker.current = initWebWorker(webWorker);
  }, []);

  return (
    <WebWorkerContext.Provider
      value={{
        getWorker,
        postMessage,
      }}
    >
      {children}
    </WebWorkerContext.Provider>
  );
};
