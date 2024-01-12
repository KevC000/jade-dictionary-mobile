import { SQLiteDatabase } from "react-native-sqlite-storage"
import { Word } from "../models/Word"

export const searchWordsByDefinition = (db: SQLiteDatabase, searchTerm: string): Promise<Word[]> => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM words_table WHERE definition = ? UNION 
                   SELECT * FROM words_table WHERE definition LIKE ? UNION
                   SELECT * FROM words_table WHERE definition LIKE ?`

    db.transaction((tx) => {
      tx.executeSql(
        query,
        [searchTerm, `%${searchTerm}%`, `%${searchTerm}%`],
        (_, results) => {
          const words: Word[] = []
          for (let i = 0; i < results.rows.length; i++) {
            words.push(results.rows.item(i))
          }
          resolve(words)
        },
        (error) => {
          reject(error)
          return false // To stop transaction
        }
      )
    })
  })
}
