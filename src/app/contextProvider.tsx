'use client';

import { ReactNode } from "react"
import { DependenciesContext } from "./dependencies.context"
import { dependencies } from "./dependencies/dependencies"

type ContextProviderProps = {
    children: ReactNode
}
export const ContextProvider = ({children}: ContextProviderProps) => {
    return <DependenciesContext.Provider value={dependencies}>{children}</DependenciesContext.Provider>
}