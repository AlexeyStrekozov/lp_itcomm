import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { CityService } from "@/services/CityService";

const initialState = {
  currentCity: "Астана",
  currentLanguage: "Ру",
};

export type AppState = typeof initialState;
type IAppContext = {
  appState: AppState;
  updateState: (state: Partial<AppState>) => void;
};

const AppContext = createContext<IAppContext>(null);

export const AppGlobalStateProvider = ({ children }) => {
  const [_GlobalAppState, _setGlobalAppState] =
    useState<AppState>(initialState);

  const updateState = (state: Partial<AppState>) => {
    _setGlobalAppState((_state) => ({ ..._state, ...state }));
  };

  const contextValue = useMemo<IAppContext>(() => {
    return {
      appState: _GlobalAppState,
      updateState,
    };
  }, [_GlobalAppState, updateState]);

  useEffect(() => {
    if (CityService.getSelectedCity()) {
      updateState({
        currentCity: CityService.getSelectedCity(),
      });
    }
  }, []);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useGlobalAppContext = () => useContext(AppContext);
