import { DependenciesContext } from "@/contexts/dependencies.context"
import { Dependencies } from "@/dependencies/dependencies"
import { useContext } from "react"

export const useDependencies = (): Dependencies => {
    const context = useContext(DependenciesContext)
    if (!context) {
        throw new Error("useDependencies must be used within a DependenciesProvider")
    }
    return context
}