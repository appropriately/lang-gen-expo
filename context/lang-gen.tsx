import { LangGenApiClient } from "@/services/lang-gen";
import { Language, Model } from "@/services/lang-gen/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Alert } from "react-native";

interface LangGenContextValue {
  client: LangGenApiClient;
  languages?: Language[];
  models?: Model[];
}

const LangGenContext = createContext<LangGenContextValue | undefined>(
  undefined,
);

interface LangGenProviderProps {
  children: ReactNode;
}

export function LangGenProvider({ children }: LangGenProviderProps) {
  const client = useMemo(() => {
    return new LangGenApiClient();
  }, []);

  const [languages, setLanguages] = useState<Language[]>();
  const [models, setModels] = useState<Model[]>();

  useEffect(() => {
    Promise.all([client.getLanguages(), client.getModels()])
      .then(([languages, models]) => {
        setLanguages(languages);
        setModels(models);
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  }, [client]);

  const value = useMemo(
    () => ({
      client: client,
      languages,
      models,
    }),
    [client, languages, models],
  );

  return (
    <LangGenContext.Provider value={value}>{children}</LangGenContext.Provider>
  );
}

export function useLangGen() {
  const context = useContext(LangGenContext);
  if (context === undefined) {
    throw new Error("useLangGen must be used within a LangGenProvider");
  }

  return context;
}
