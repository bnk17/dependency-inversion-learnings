
import { createContext, useContext } from "react"
import { Dependencies } from "../dependencies/dependencies"

export const DependenciesContext = createContext<Dependencies| null>(null)
