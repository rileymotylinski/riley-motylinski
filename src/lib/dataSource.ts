import { DataSource } from 'typeorm'
import { Post } from "@/src/entities/Post"

let dataSource: DataSource | null = null

export const AppDataSource = async () => {
  if (dataSource && dataSource.isInitialized) {
    return dataSource
  }

  dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.NEXT_PUBLIC_POSTGRES_USER,
    password: process.env.NEXT_PUBLIC_POSTGRES_PASSWORD,
    database: "postgres",
    synchronize: false,
    logging: false,
    entities: [Post],
    subscribers: [],
    migrations: [],
  })

  await dataSource.initialize()
  return dataSource
}