import SQLite, { SQLiteDatabase } from 'react-native-sqlite-storage'
import { Platform } from 'react-native'


SQLite.DEBUG(true)
SQLite.enablePromise(true)

const database_name = 'words.db'
const database_location = Platform.OS === 'ios' ? 'Library' : 'default'

export const initDB = (): Promise<SQLiteDatabase> => {
  return SQLite.openDatabase({
    name: database_name,
    readOnly: true,
    location: database_location,
  })
    .then((db: SQLiteDatabase) => {
      console.log('Database opened')
      return db
    })
    .catch((error: any) => {
      console.error(error)
      throw error
    })
}

export const closeDB = (db: SQLiteDatabase): Promise<void> => {
  if (db) {
    console.log('Closing DB')
    return db
      .close()
      .then(() => console.log('Database CLOSED'))
      .catch((error: any) => {
        console.error(error)
        throw error
      })
  } else {
    console.log('Database was not OPENED')
    return Promise.resolve()
  }
}
