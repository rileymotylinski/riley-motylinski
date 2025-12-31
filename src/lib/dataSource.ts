import { DataSource } from 'typeorm'
import { Post } from "@/src/entities/Post"

let dataSource: DataSource | null = null

export const AppDataSource = async () => {
  if (dataSource && dataSource.isInitialized) {
    return dataSource
  }

  dataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [Post],
    synchronize: false, 
    logging: false,
  })

  await dataSource.initialize()
  return dataSource
}