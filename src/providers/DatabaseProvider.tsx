import React, { useState, useEffect, useContext, createContext, FunctionComponent, ReactNode } from 'react'
import { SQLiteDatabase } from 'react-native-sqlite-storage'
import { closeDB, initDB } from '../utils/db'

// Define the type for the database context
type DatabaseContextType = SQLiteDatabase | null

// Create the context with a default null value
const DatabaseContext = createContext<DatabaseContextType>(null)

// Custom hook to use the database context
export const useDatabase = () => useContext(DatabaseContext)

// DatabaseProvider component

type DatabaseProviderProps = {
  children: ReactNode
}
export const DatabaseProvider: React.FC<DatabaseProviderProps> = ({ children }) => {
  const [database, setDatabase] = useState<SQLiteDatabase | null>(null)

  useEffect(() => {
    let dbInstance: SQLiteDatabase

    const initializeDB = async () => {
      dbInstance = await initDB()
      setDatabase(dbInstance)
    }

    initializeDB()

    return () => {
      if (dbInstance) {
        closeDB(dbInstance)
      }
    }
  }, [])

  return <DatabaseContext.Provider value={database}>{children}</DatabaseContext.Provider>
}
