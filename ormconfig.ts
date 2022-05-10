const config: any = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'metajob',
  entities: ['dist/src/entities/*.js'],
  migrations: ['dist/src/migrations/*.js'],
  migrationsTableName: 'migrations',
  migrationsRun: false,
  synchronize: false,
  cli: {
    migrationsDir: 'src/migrations'
  }
}

export default config
