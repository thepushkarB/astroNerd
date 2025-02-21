import React, { createContext, useContext } from "react";

export const InfoContext = createContext();

export const InfoProvider = InfoContext.Provider;

export const useInfo = () => {
    return useContext(InfoContext);
}