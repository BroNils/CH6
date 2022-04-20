
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model user_game
 * 
 */
export type user_game = {
  id: number
  username: string
  password: string
  email: string
}

/**
 * Model user_game_biodata
 * 
 */
export type user_game_biodata = {
  id: number
  user_id: number
  first_name: string
  last_name: string
  age: number
  about: string
}

/**
 * Model user_game_history
 * 
 */
export type user_game_history = {
  id: number
  user_id: number
  game: string
  score: number
  created_at: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more User_games
 * const user_games = await prisma.user_game.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more User_games
   * const user_games = await prisma.user_game.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user_game`: Exposes CRUD operations for the **user_game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_games
    * const user_games = await prisma.user_game.findMany()
    * ```
    */
  get user_game(): Prisma.user_gameDelegate<GlobalReject>;

  /**
   * `prisma.user_game_biodata`: Exposes CRUD operations for the **user_game_biodata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_game_biodata
    * const user_game_biodata = await prisma.user_game_biodata.findMany()
    * ```
    */
  get user_game_biodata(): Prisma.user_game_biodataDelegate<GlobalReject>;

  /**
   * `prisma.user_game_history`: Exposes CRUD operations for the **user_game_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_game_histories
    * const user_game_histories = await prisma.user_game_history.findMany()
    * ```
    */
  get user_game_history(): Prisma.user_game_historyDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.12.0
   * Query Engine version: 22b822189f46ef0dc5c5b503368d1bee01213980
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    user_game: 'user_game',
    user_game_biodata: 'user_game_biodata',
    user_game_history: 'user_game_history'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type User_gameCountOutputType
   */


  export type User_gameCountOutputType = {
    user_game_biodata: number
    user_game_history: number
  }

  export type User_gameCountOutputTypeSelect = {
    user_game_biodata?: boolean
    user_game_history?: boolean
  }

  export type User_gameCountOutputTypeGetPayload<
    S extends boolean | null | undefined | User_gameCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? User_gameCountOutputType
    : S extends undefined
    ? never
    : S extends User_gameCountOutputTypeArgs
    ?'include' extends U
    ? User_gameCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof User_gameCountOutputType ? User_gameCountOutputType[P] : never
  } 
    : User_gameCountOutputType
  : User_gameCountOutputType




  // Custom InputTypes

  /**
   * User_gameCountOutputType without action
   */
  export type User_gameCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the User_gameCountOutputType
     * 
    **/
    select?: User_gameCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model user_game
   */


  export type AggregateUser_game = {
    _count: User_gameCountAggregateOutputType | null
    _avg: User_gameAvgAggregateOutputType | null
    _sum: User_gameSumAggregateOutputType | null
    _min: User_gameMinAggregateOutputType | null
    _max: User_gameMaxAggregateOutputType | null
  }

  export type User_gameAvgAggregateOutputType = {
    id: number | null
  }

  export type User_gameSumAggregateOutputType = {
    id: number | null
  }

  export type User_gameMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
  }

  export type User_gameMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
  }

  export type User_gameCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    _all: number
  }


  export type User_gameAvgAggregateInputType = {
    id?: true
  }

  export type User_gameSumAggregateInputType = {
    id?: true
  }

  export type User_gameMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
  }

  export type User_gameMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
  }

  export type User_gameCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    _all?: true
  }

  export type User_gameAggregateArgs = {
    /**
     * Filter which user_game to aggregate.
     * 
    **/
    where?: user_gameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_games to fetch.
     * 
    **/
    orderBy?: Enumerable<user_gameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: user_gameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_games.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_games
    **/
    _count?: true | User_gameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_gameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_gameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_gameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_gameMaxAggregateInputType
  }

  export type GetUser_gameAggregateType<T extends User_gameAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_game]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_game[P]>
      : GetScalarType<T[P], AggregateUser_game[P]>
  }




  export type User_gameGroupByArgs = {
    where?: user_gameWhereInput
    orderBy?: Enumerable<user_gameOrderByWithAggregationInput>
    by: Array<User_gameScalarFieldEnum>
    having?: user_gameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_gameCountAggregateInputType | true
    _avg?: User_gameAvgAggregateInputType
    _sum?: User_gameSumAggregateInputType
    _min?: User_gameMinAggregateInputType
    _max?: User_gameMaxAggregateInputType
  }


  export type User_gameGroupByOutputType = {
    id: number
    username: string
    password: string
    email: string
    _count: User_gameCountAggregateOutputType | null
    _avg: User_gameAvgAggregateOutputType | null
    _sum: User_gameSumAggregateOutputType | null
    _min: User_gameMinAggregateOutputType | null
    _max: User_gameMaxAggregateOutputType | null
  }

  type GetUser_gameGroupByPayload<T extends User_gameGroupByArgs> = PrismaPromise<
    Array<
      PickArray<User_gameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_gameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_gameGroupByOutputType[P]>
            : GetScalarType<T[P], User_gameGroupByOutputType[P]>
        }
      >
    >


  export type user_gameSelect = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    user_game_biodata?: boolean | user_game_biodataFindManyArgs
    user_game_history?: boolean | user_game_historyFindManyArgs
    _count?: boolean | User_gameCountOutputTypeArgs
  }

  export type user_gameInclude = {
    user_game_biodata?: boolean | user_game_biodataFindManyArgs
    user_game_history?: boolean | user_game_historyFindManyArgs
    _count?: boolean | User_gameCountOutputTypeArgs
  }

  export type user_gameGetPayload<
    S extends boolean | null | undefined | user_gameArgs,
    U = keyof S
      > = S extends true
        ? user_game
    : S extends undefined
    ? never
    : S extends user_gameArgs | user_gameFindManyArgs
    ?'include' extends U
    ? user_game  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user_game_biodata' ? Array < user_game_biodataGetPayload<S['include'][P]>>  :
        P extends 'user_game_history' ? Array < user_game_historyGetPayload<S['include'][P]>>  :
        P extends '_count' ? User_gameCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user_game_biodata' ? Array < user_game_biodataGetPayload<S['select'][P]>>  :
        P extends 'user_game_history' ? Array < user_game_historyGetPayload<S['select'][P]>>  :
        P extends '_count' ? User_gameCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof user_game ? user_game[P] : never
  } 
    : user_game
  : user_game


  type user_gameCountArgs = Merge<
    Omit<user_gameFindManyArgs, 'select' | 'include'> & {
      select?: User_gameCountAggregateInputType | true
    }
  >

  export interface user_gameDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User_game that matches the filter.
     * @param {user_gameFindUniqueArgs} args - Arguments to find a User_game
     * @example
     * // Get one User_game
     * const user_game = await prisma.user_game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_gameFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, user_gameFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user_game'> extends True ? CheckSelect<T, Prisma__user_gameClient<user_game>, Prisma__user_gameClient<user_gameGetPayload<T>>> : CheckSelect<T, Prisma__user_gameClient<user_game | null >, Prisma__user_gameClient<user_gameGetPayload<T> | null >>

    /**
     * Find the first User_game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_gameFindFirstArgs} args - Arguments to find a User_game
     * @example
     * // Get one User_game
     * const user_game = await prisma.user_game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_gameFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, user_gameFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user_game'> extends True ? CheckSelect<T, Prisma__user_gameClient<user_game>, Prisma__user_gameClient<user_gameGetPayload<T>>> : CheckSelect<T, Prisma__user_gameClient<user_game | null >, Prisma__user_gameClient<user_gameGetPayload<T> | null >>

    /**
     * Find zero or more User_games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_gameFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_games
     * const user_games = await prisma.user_game.findMany()
     * 
     * // Get first 10 User_games
     * const user_games = await prisma.user_game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_gameWithIdOnly = await prisma.user_game.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends user_gameFindManyArgs>(
      args?: SelectSubset<T, user_gameFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<user_game>>, PrismaPromise<Array<user_gameGetPayload<T>>>>

    /**
     * Create a User_game.
     * @param {user_gameCreateArgs} args - Arguments to create a User_game.
     * @example
     * // Create one User_game
     * const User_game = await prisma.user_game.create({
     *   data: {
     *     // ... data to create a User_game
     *   }
     * })
     * 
    **/
    create<T extends user_gameCreateArgs>(
      args: SelectSubset<T, user_gameCreateArgs>
    ): CheckSelect<T, Prisma__user_gameClient<user_game>, Prisma__user_gameClient<user_gameGetPayload<T>>>

    /**
     * Create many User_games.
     *     @param {user_gameCreateManyArgs} args - Arguments to create many User_games.
     *     @example
     *     // Create many User_games
     *     const user_game = await prisma.user_game.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends user_gameCreateManyArgs>(
      args?: SelectSubset<T, user_gameCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User_game.
     * @param {user_gameDeleteArgs} args - Arguments to delete one User_game.
     * @example
     * // Delete one User_game
     * const User_game = await prisma.user_game.delete({
     *   where: {
     *     // ... filter to delete one User_game
     *   }
     * })
     * 
    **/
    delete<T extends user_gameDeleteArgs>(
      args: SelectSubset<T, user_gameDeleteArgs>
    ): CheckSelect<T, Prisma__user_gameClient<user_game>, Prisma__user_gameClient<user_gameGetPayload<T>>>

    /**
     * Update one User_game.
     * @param {user_gameUpdateArgs} args - Arguments to update one User_game.
     * @example
     * // Update one User_game
     * const user_game = await prisma.user_game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_gameUpdateArgs>(
      args: SelectSubset<T, user_gameUpdateArgs>
    ): CheckSelect<T, Prisma__user_gameClient<user_game>, Prisma__user_gameClient<user_gameGetPayload<T>>>

    /**
     * Delete zero or more User_games.
     * @param {user_gameDeleteManyArgs} args - Arguments to filter User_games to delete.
     * @example
     * // Delete a few User_games
     * const { count } = await prisma.user_game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_gameDeleteManyArgs>(
      args?: SelectSubset<T, user_gameDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_gameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_games
     * const user_game = await prisma.user_game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_gameUpdateManyArgs>(
      args: SelectSubset<T, user_gameUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User_game.
     * @param {user_gameUpsertArgs} args - Arguments to update or create a User_game.
     * @example
     * // Update or create a User_game
     * const user_game = await prisma.user_game.upsert({
     *   create: {
     *     // ... data to create a User_game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_game we want to update
     *   }
     * })
    **/
    upsert<T extends user_gameUpsertArgs>(
      args: SelectSubset<T, user_gameUpsertArgs>
    ): CheckSelect<T, Prisma__user_gameClient<user_game>, Prisma__user_gameClient<user_gameGetPayload<T>>>

    /**
     * Count the number of User_games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_gameCountArgs} args - Arguments to filter User_games to count.
     * @example
     * // Count the number of User_games
     * const count = await prisma.user_game.count({
     *   where: {
     *     // ... the filter for the User_games we want to count
     *   }
     * })
    **/
    count<T extends user_gameCountArgs>(
      args?: Subset<T, user_gameCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_gameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_gameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_gameAggregateArgs>(args: Subset<T, User_gameAggregateArgs>): PrismaPromise<GetUser_gameAggregateType<T>>

    /**
     * Group by User_game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_gameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_gameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_gameGroupByArgs['orderBy'] }
        : { orderBy?: User_gameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_gameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_gameGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__user_gameClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user_game_biodata<T extends user_game_biodataFindManyArgs = {}>(args?: Subset<T, user_game_biodataFindManyArgs>): CheckSelect<T, PrismaPromise<Array<user_game_biodata>>, PrismaPromise<Array<user_game_biodataGetPayload<T>>>>;

    user_game_history<T extends user_game_historyFindManyArgs = {}>(args?: Subset<T, user_game_historyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<user_game_history>>, PrismaPromise<Array<user_game_historyGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * user_game findUnique
   */
  export type user_gameFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the user_game
     * 
    **/
    select?: user_gameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_gameInclude | null
    /**
     * Throw an Error if a user_game can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which user_game to fetch.
     * 
    **/
    where: user_gameWhereUniqueInput
  }


  /**
   * user_game findFirst
   */
  export type user_gameFindFirstArgs = {
    /**
     * Select specific fields to fetch from the user_game
     * 
    **/
    select?: user_gameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_gameInclude | null
    /**
     * Throw an Error if a user_game can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which user_game to fetch.
     * 
    **/
    where?: user_gameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_games to fetch.
     * 
    **/
    orderBy?: Enumerable<user_gameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_games.
     * 
    **/
    cursor?: user_gameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_games.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_games.
     * 
    **/
    distinct?: Enumerable<User_gameScalarFieldEnum>
  }


  /**
   * user_game findMany
   */
  export type user_gameFindManyArgs = {
    /**
     * Select specific fields to fetch from the user_game
     * 
    **/
    select?: user_gameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_gameInclude | null
    /**
     * Filter, which user_games to fetch.
     * 
    **/
    where?: user_gameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_games to fetch.
     * 
    **/
    orderBy?: Enumerable<user_gameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_games.
     * 
    **/
    cursor?: user_gameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_games.
     * 
    **/
    skip?: number
    distinct?: Enumerable<User_gameScalarFieldEnum>
  }


  /**
   * user_game create
   */
  export type user_gameCreateArgs = {
    /**
     * Select specific fields to fetch from the user_game
     * 
    **/
    select?: user_gameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_gameInclude | null
    /**
     * The data needed to create a user_game.
     * 
    **/
    data: XOR<user_gameCreateInput, user_gameUncheckedCreateInput>
  }


  /**
   * user_game createMany
   */
  export type user_gameCreateManyArgs = {
    /**
     * The data used to create many user_games.
     * 
    **/
    data: Enumerable<user_gameCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * user_game update
   */
  export type user_gameUpdateArgs = {
    /**
     * Select specific fields to fetch from the user_game
     * 
    **/
    select?: user_gameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_gameInclude | null
    /**
     * The data needed to update a user_game.
     * 
    **/
    data: XOR<user_gameUpdateInput, user_gameUncheckedUpdateInput>
    /**
     * Choose, which user_game to update.
     * 
    **/
    where: user_gameWhereUniqueInput
  }


  /**
   * user_game updateMany
   */
  export type user_gameUpdateManyArgs = {
    /**
     * The data used to update user_games.
     * 
    **/
    data: XOR<user_gameUpdateManyMutationInput, user_gameUncheckedUpdateManyInput>
    /**
     * Filter which user_games to update
     * 
    **/
    where?: user_gameWhereInput
  }


  /**
   * user_game upsert
   */
  export type user_gameUpsertArgs = {
    /**
     * Select specific fields to fetch from the user_game
     * 
    **/
    select?: user_gameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_gameInclude | null
    /**
     * The filter to search for the user_game to update in case it exists.
     * 
    **/
    where: user_gameWhereUniqueInput
    /**
     * In case the user_game found by the `where` argument doesn't exist, create a new user_game with this data.
     * 
    **/
    create: XOR<user_gameCreateInput, user_gameUncheckedCreateInput>
    /**
     * In case the user_game was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<user_gameUpdateInput, user_gameUncheckedUpdateInput>
  }


  /**
   * user_game delete
   */
  export type user_gameDeleteArgs = {
    /**
     * Select specific fields to fetch from the user_game
     * 
    **/
    select?: user_gameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_gameInclude | null
    /**
     * Filter which user_game to delete.
     * 
    **/
    where: user_gameWhereUniqueInput
  }


  /**
   * user_game deleteMany
   */
  export type user_gameDeleteManyArgs = {
    /**
     * Filter which user_games to delete
     * 
    **/
    where?: user_gameWhereInput
  }


  /**
   * user_game without action
   */
  export type user_gameArgs = {
    /**
     * Select specific fields to fetch from the user_game
     * 
    **/
    select?: user_gameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_gameInclude | null
  }



  /**
   * Model user_game_biodata
   */


  export type AggregateUser_game_biodata = {
    _count: User_game_biodataCountAggregateOutputType | null
    _avg: User_game_biodataAvgAggregateOutputType | null
    _sum: User_game_biodataSumAggregateOutputType | null
    _min: User_game_biodataMinAggregateOutputType | null
    _max: User_game_biodataMaxAggregateOutputType | null
  }

  export type User_game_biodataAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    age: number | null
  }

  export type User_game_biodataSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    age: number | null
  }

  export type User_game_biodataMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    first_name: string | null
    last_name: string | null
    age: number | null
    about: string | null
  }

  export type User_game_biodataMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    first_name: string | null
    last_name: string | null
    age: number | null
    about: string | null
  }

  export type User_game_biodataCountAggregateOutputType = {
    id: number
    user_id: number
    first_name: number
    last_name: number
    age: number
    about: number
    _all: number
  }


  export type User_game_biodataAvgAggregateInputType = {
    id?: true
    user_id?: true
    age?: true
  }

  export type User_game_biodataSumAggregateInputType = {
    id?: true
    user_id?: true
    age?: true
  }

  export type User_game_biodataMinAggregateInputType = {
    id?: true
    user_id?: true
    first_name?: true
    last_name?: true
    age?: true
    about?: true
  }

  export type User_game_biodataMaxAggregateInputType = {
    id?: true
    user_id?: true
    first_name?: true
    last_name?: true
    age?: true
    about?: true
  }

  export type User_game_biodataCountAggregateInputType = {
    id?: true
    user_id?: true
    first_name?: true
    last_name?: true
    age?: true
    about?: true
    _all?: true
  }

  export type User_game_biodataAggregateArgs = {
    /**
     * Filter which user_game_biodata to aggregate.
     * 
    **/
    where?: user_game_biodataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_game_biodata to fetch.
     * 
    **/
    orderBy?: Enumerable<user_game_biodataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: user_game_biodataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_game_biodata from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_game_biodata.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_game_biodata
    **/
    _count?: true | User_game_biodataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_game_biodataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_game_biodataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_game_biodataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_game_biodataMaxAggregateInputType
  }

  export type GetUser_game_biodataAggregateType<T extends User_game_biodataAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_game_biodata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_game_biodata[P]>
      : GetScalarType<T[P], AggregateUser_game_biodata[P]>
  }




  export type User_game_biodataGroupByArgs = {
    where?: user_game_biodataWhereInput
    orderBy?: Enumerable<user_game_biodataOrderByWithAggregationInput>
    by: Array<User_game_biodataScalarFieldEnum>
    having?: user_game_biodataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_game_biodataCountAggregateInputType | true
    _avg?: User_game_biodataAvgAggregateInputType
    _sum?: User_game_biodataSumAggregateInputType
    _min?: User_game_biodataMinAggregateInputType
    _max?: User_game_biodataMaxAggregateInputType
  }


  export type User_game_biodataGroupByOutputType = {
    id: number
    user_id: number
    first_name: string
    last_name: string
    age: number
    about: string
    _count: User_game_biodataCountAggregateOutputType | null
    _avg: User_game_biodataAvgAggregateOutputType | null
    _sum: User_game_biodataSumAggregateOutputType | null
    _min: User_game_biodataMinAggregateOutputType | null
    _max: User_game_biodataMaxAggregateOutputType | null
  }

  type GetUser_game_biodataGroupByPayload<T extends User_game_biodataGroupByArgs> = PrismaPromise<
    Array<
      PickArray<User_game_biodataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_game_biodataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_game_biodataGroupByOutputType[P]>
            : GetScalarType<T[P], User_game_biodataGroupByOutputType[P]>
        }
      >
    >


  export type user_game_biodataSelect = {
    id?: boolean
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    age?: boolean
    about?: boolean
    user_game?: boolean | user_gameArgs
  }

  export type user_game_biodataInclude = {
    user_game?: boolean | user_gameArgs
  }

  export type user_game_biodataGetPayload<
    S extends boolean | null | undefined | user_game_biodataArgs,
    U = keyof S
      > = S extends true
        ? user_game_biodata
    : S extends undefined
    ? never
    : S extends user_game_biodataArgs | user_game_biodataFindManyArgs
    ?'include' extends U
    ? user_game_biodata  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user_game' ? user_gameGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user_game' ? user_gameGetPayload<S['select'][P]> :  P extends keyof user_game_biodata ? user_game_biodata[P] : never
  } 
    : user_game_biodata
  : user_game_biodata


  type user_game_biodataCountArgs = Merge<
    Omit<user_game_biodataFindManyArgs, 'select' | 'include'> & {
      select?: User_game_biodataCountAggregateInputType | true
    }
  >

  export interface user_game_biodataDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User_game_biodata that matches the filter.
     * @param {user_game_biodataFindUniqueArgs} args - Arguments to find a User_game_biodata
     * @example
     * // Get one User_game_biodata
     * const user_game_biodata = await prisma.user_game_biodata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_game_biodataFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, user_game_biodataFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user_game_biodata'> extends True ? CheckSelect<T, Prisma__user_game_biodataClient<user_game_biodata>, Prisma__user_game_biodataClient<user_game_biodataGetPayload<T>>> : CheckSelect<T, Prisma__user_game_biodataClient<user_game_biodata | null >, Prisma__user_game_biodataClient<user_game_biodataGetPayload<T> | null >>

    /**
     * Find the first User_game_biodata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_game_biodataFindFirstArgs} args - Arguments to find a User_game_biodata
     * @example
     * // Get one User_game_biodata
     * const user_game_biodata = await prisma.user_game_biodata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_game_biodataFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, user_game_biodataFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user_game_biodata'> extends True ? CheckSelect<T, Prisma__user_game_biodataClient<user_game_biodata>, Prisma__user_game_biodataClient<user_game_biodataGetPayload<T>>> : CheckSelect<T, Prisma__user_game_biodataClient<user_game_biodata | null >, Prisma__user_game_biodataClient<user_game_biodataGetPayload<T> | null >>

    /**
     * Find zero or more User_game_biodata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_game_biodataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_game_biodata
     * const user_game_biodata = await prisma.user_game_biodata.findMany()
     * 
     * // Get first 10 User_game_biodata
     * const user_game_biodata = await prisma.user_game_biodata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_game_biodataWithIdOnly = await prisma.user_game_biodata.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends user_game_biodataFindManyArgs>(
      args?: SelectSubset<T, user_game_biodataFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<user_game_biodata>>, PrismaPromise<Array<user_game_biodataGetPayload<T>>>>

    /**
     * Create a User_game_biodata.
     * @param {user_game_biodataCreateArgs} args - Arguments to create a User_game_biodata.
     * @example
     * // Create one User_game_biodata
     * const User_game_biodata = await prisma.user_game_biodata.create({
     *   data: {
     *     // ... data to create a User_game_biodata
     *   }
     * })
     * 
    **/
    create<T extends user_game_biodataCreateArgs>(
      args: SelectSubset<T, user_game_biodataCreateArgs>
    ): CheckSelect<T, Prisma__user_game_biodataClient<user_game_biodata>, Prisma__user_game_biodataClient<user_game_biodataGetPayload<T>>>

    /**
     * Create many User_game_biodata.
     *     @param {user_game_biodataCreateManyArgs} args - Arguments to create many User_game_biodata.
     *     @example
     *     // Create many User_game_biodata
     *     const user_game_biodata = await prisma.user_game_biodata.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends user_game_biodataCreateManyArgs>(
      args?: SelectSubset<T, user_game_biodataCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User_game_biodata.
     * @param {user_game_biodataDeleteArgs} args - Arguments to delete one User_game_biodata.
     * @example
     * // Delete one User_game_biodata
     * const User_game_biodata = await prisma.user_game_biodata.delete({
     *   where: {
     *     // ... filter to delete one User_game_biodata
     *   }
     * })
     * 
    **/
    delete<T extends user_game_biodataDeleteArgs>(
      args: SelectSubset<T, user_game_biodataDeleteArgs>
    ): CheckSelect<T, Prisma__user_game_biodataClient<user_game_biodata>, Prisma__user_game_biodataClient<user_game_biodataGetPayload<T>>>

    /**
     * Update one User_game_biodata.
     * @param {user_game_biodataUpdateArgs} args - Arguments to update one User_game_biodata.
     * @example
     * // Update one User_game_biodata
     * const user_game_biodata = await prisma.user_game_biodata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_game_biodataUpdateArgs>(
      args: SelectSubset<T, user_game_biodataUpdateArgs>
    ): CheckSelect<T, Prisma__user_game_biodataClient<user_game_biodata>, Prisma__user_game_biodataClient<user_game_biodataGetPayload<T>>>

    /**
     * Delete zero or more User_game_biodata.
     * @param {user_game_biodataDeleteManyArgs} args - Arguments to filter User_game_biodata to delete.
     * @example
     * // Delete a few User_game_biodata
     * const { count } = await prisma.user_game_biodata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_game_biodataDeleteManyArgs>(
      args?: SelectSubset<T, user_game_biodataDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_game_biodata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_game_biodataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_game_biodata
     * const user_game_biodata = await prisma.user_game_biodata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_game_biodataUpdateManyArgs>(
      args: SelectSubset<T, user_game_biodataUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User_game_biodata.
     * @param {user_game_biodataUpsertArgs} args - Arguments to update or create a User_game_biodata.
     * @example
     * // Update or create a User_game_biodata
     * const user_game_biodata = await prisma.user_game_biodata.upsert({
     *   create: {
     *     // ... data to create a User_game_biodata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_game_biodata we want to update
     *   }
     * })
    **/
    upsert<T extends user_game_biodataUpsertArgs>(
      args: SelectSubset<T, user_game_biodataUpsertArgs>
    ): CheckSelect<T, Prisma__user_game_biodataClient<user_game_biodata>, Prisma__user_game_biodataClient<user_game_biodataGetPayload<T>>>

    /**
     * Count the number of User_game_biodata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_game_biodataCountArgs} args - Arguments to filter User_game_biodata to count.
     * @example
     * // Count the number of User_game_biodata
     * const count = await prisma.user_game_biodata.count({
     *   where: {
     *     // ... the filter for the User_game_biodata we want to count
     *   }
     * })
    **/
    count<T extends user_game_biodataCountArgs>(
      args?: Subset<T, user_game_biodataCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_game_biodataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_game_biodata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_game_biodataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_game_biodataAggregateArgs>(args: Subset<T, User_game_biodataAggregateArgs>): PrismaPromise<GetUser_game_biodataAggregateType<T>>

    /**
     * Group by User_game_biodata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_game_biodataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_game_biodataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_game_biodataGroupByArgs['orderBy'] }
        : { orderBy?: User_game_biodataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_game_biodataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_game_biodataGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_game_biodata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__user_game_biodataClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user_game<T extends user_gameArgs = {}>(args?: Subset<T, user_gameArgs>): CheckSelect<T, Prisma__user_gameClient<user_game | null >, Prisma__user_gameClient<user_gameGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * user_game_biodata findUnique
   */
  export type user_game_biodataFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the user_game_biodata
     * 
    **/
    select?: user_game_biodataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_game_biodataInclude | null
    /**
     * Throw an Error if a user_game_biodata can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which user_game_biodata to fetch.
     * 
    **/
    where: user_game_biodataWhereUniqueInput
  }


  /**
   * user_game_biodata findFirst
   */
  export type user_game_biodataFindFirstArgs = {
    /**
     * Select specific fields to fetch from the user_game_biodata
     * 
    **/
    select?: user_game_biodataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_game_biodataInclude | null
    /**
     * Throw an Error if a user_game_biodata can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which user_game_biodata to fetch.
     * 
    **/
    where?: user_game_biodataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_game_biodata to fetch.
     * 
    **/
    orderBy?: Enumerable<user_game_biodataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_game_biodata.
     * 
    **/
    cursor?: user_game_biodataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_game_biodata from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_game_biodata.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_game_biodata.
     * 
    **/
    distinct?: Enumerable<User_game_biodataScalarFieldEnum>
  }


  /**
   * user_game_biodata findMany
   */
  export type user_game_biodataFindManyArgs = {
    /**
     * Select specific fields to fetch from the user_game_biodata
     * 
    **/
    select?: user_game_biodataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_game_biodataInclude | null
    /**
     * Filter, which user_game_biodata to fetch.
     * 
    **/
    where?: user_game_biodataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_game_biodata to fetch.
     * 
    **/
    orderBy?: Enumerable<user_game_biodataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_game_biodata.
     * 
    **/
    cursor?: user_game_biodataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_game_biodata from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_game_biodata.
     * 
    **/
    skip?: number
    distinct?: Enumerable<User_game_biodataScalarFieldEnum>
  }


  /**
   * user_game_biodata create
   */
  export type user_game_biodataCreateArgs = {
    /**
     * Select specific fields to fetch from the user_game_biodata
     * 
    **/
    select?: user_game_biodataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_game_biodataInclude | null
    /**
     * The data needed to create a user_game_biodata.
     * 
    **/
    data: XOR<user_game_biodataCreateInput, user_game_biodataUncheckedCreateInput>
  }


  /**
   * user_game_biodata createMany
   */
  export type user_game_biodataCreateManyArgs = {
    /**
     * The data used to create many user_game_biodata.
     * 
    **/
    data: Enumerable<user_game_biodataCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * user_game_biodata update
   */
  export type user_game_biodataUpdateArgs = {
    /**
     * Select specific fields to fetch from the user_game_biodata
     * 
    **/
    select?: user_game_biodataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_game_biodataInclude | null
    /**
     * The data needed to update a user_game_biodata.
     * 
    **/
    data: XOR<user_game_biodataUpdateInput, user_game_biodataUncheckedUpdateInput>
    /**
     * Choose, which user_game_biodata to update.
     * 
    **/
    where: user_game_biodataWhereUniqueInput
  }


  /**
   * user_game_biodata updateMany
   */
  export type user_game_biodataUpdateManyArgs = {
    /**
     * The data used to update user_game_biodata.
     * 
    **/
    data: XOR<user_game_biodataUpdateManyMutationInput, user_game_biodataUncheckedUpdateManyInput>
    /**
     * Filter which user_game_biodata to update
     * 
    **/
    where?: user_game_biodataWhereInput
  }


  /**
   * user_game_biodata upsert
   */
  export type user_game_biodataUpsertArgs = {
    /**
     * Select specific fields to fetch from the user_game_biodata
     * 
    **/
    select?: user_game_biodataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_game_biodataInclude | null
    /**
     * The filter to search for the user_game_biodata to update in case it exists.
     * 
    **/
    where: user_game_biodataWhereUniqueInput
    /**
     * In case the user_game_biodata found by the `where` argument doesn't exist, create a new user_game_biodata with this data.
     * 
    **/
    create: XOR<user_game_biodataCreateInput, user_game_biodataUncheckedCreateInput>
    /**
     * In case the user_game_biodata was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<user_game_biodataUpdateInput, user_game_biodataUncheckedUpdateInput>
  }


  /**
   * user_game_biodata delete
   */
  export type user_game_biodataDeleteArgs = {
    /**
     * Select specific fields to fetch from the user_game_biodata
     * 
    **/
    select?: user_game_biodataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_game_biodataInclude | null
    /**
     * Filter which user_game_biodata to delete.
     * 
    **/
    where: user_game_biodataWhereUniqueInput
  }


  /**
   * user_game_biodata deleteMany
   */
  export type user_game_biodataDeleteManyArgs = {
    /**
     * Filter which user_game_biodata to delete
     * 
    **/
    where?: user_game_biodataWhereInput
  }


  /**
   * user_game_biodata without action
   */
  export type user_game_biodataArgs = {
    /**
     * Select specific fields to fetch from the user_game_biodata
     * 
    **/
    select?: user_game_biodataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_game_biodataInclude | null
  }



  /**
   * Model user_game_history
   */


  export type AggregateUser_game_history = {
    _count: User_game_historyCountAggregateOutputType | null
    _avg: User_game_historyAvgAggregateOutputType | null
    _sum: User_game_historySumAggregateOutputType | null
    _min: User_game_historyMinAggregateOutputType | null
    _max: User_game_historyMaxAggregateOutputType | null
  }

  export type User_game_historyAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    score: number | null
  }

  export type User_game_historySumAggregateOutputType = {
    id: number | null
    user_id: number | null
    score: number | null
  }

  export type User_game_historyMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    game: string | null
    score: number | null
    created_at: Date | null
  }

  export type User_game_historyMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    game: string | null
    score: number | null
    created_at: Date | null
  }

  export type User_game_historyCountAggregateOutputType = {
    id: number
    user_id: number
    game: number
    score: number
    created_at: number
    _all: number
  }


  export type User_game_historyAvgAggregateInputType = {
    id?: true
    user_id?: true
    score?: true
  }

  export type User_game_historySumAggregateInputType = {
    id?: true
    user_id?: true
    score?: true
  }

  export type User_game_historyMinAggregateInputType = {
    id?: true
    user_id?: true
    game?: true
    score?: true
    created_at?: true
  }

  export type User_game_historyMaxAggregateInputType = {
    id?: true
    user_id?: true
    game?: true
    score?: true
    created_at?: true
  }

  export type User_game_historyCountAggregateInputType = {
    id?: true
    user_id?: true
    game?: true
    score?: true
    created_at?: true
    _all?: true
  }

  export type User_game_historyAggregateArgs = {
    /**
     * Filter which user_game_history to aggregate.
     * 
    **/
    where?: user_game_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_game_histories to fetch.
     * 
    **/
    orderBy?: Enumerable<user_game_historyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: user_game_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_game_histories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_game_histories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_game_histories
    **/
    _count?: true | User_game_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_game_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_game_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_game_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_game_historyMaxAggregateInputType
  }

  export type GetUser_game_historyAggregateType<T extends User_game_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_game_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_game_history[P]>
      : GetScalarType<T[P], AggregateUser_game_history[P]>
  }




  export type User_game_historyGroupByArgs = {
    where?: user_game_historyWhereInput
    orderBy?: Enumerable<user_game_historyOrderByWithAggregationInput>
    by: Array<User_game_historyScalarFieldEnum>
    having?: user_game_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_game_historyCountAggregateInputType | true
    _avg?: User_game_historyAvgAggregateInputType
    _sum?: User_game_historySumAggregateInputType
    _min?: User_game_historyMinAggregateInputType
    _max?: User_game_historyMaxAggregateInputType
  }


  export type User_game_historyGroupByOutputType = {
    id: number
    user_id: number
    game: string
    score: number
    created_at: Date
    _count: User_game_historyCountAggregateOutputType | null
    _avg: User_game_historyAvgAggregateOutputType | null
    _sum: User_game_historySumAggregateOutputType | null
    _min: User_game_historyMinAggregateOutputType | null
    _max: User_game_historyMaxAggregateOutputType | null
  }

  type GetUser_game_historyGroupByPayload<T extends User_game_historyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<User_game_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_game_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_game_historyGroupByOutputType[P]>
            : GetScalarType<T[P], User_game_historyGroupByOutputType[P]>
        }
      >
    >


  export type user_game_historySelect = {
    id?: boolean
    user_id?: boolean
    game?: boolean
    score?: boolean
    created_at?: boolean
    user_game?: boolean | user_gameArgs
  }

  export type user_game_historyInclude = {
    user_game?: boolean | user_gameArgs
  }

  export type user_game_historyGetPayload<
    S extends boolean | null | undefined | user_game_historyArgs,
    U = keyof S
      > = S extends true
        ? user_game_history
    : S extends undefined
    ? never
    : S extends user_game_historyArgs | user_game_historyFindManyArgs
    ?'include' extends U
    ? user_game_history  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user_game' ? user_gameGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user_game' ? user_gameGetPayload<S['select'][P]> :  P extends keyof user_game_history ? user_game_history[P] : never
  } 
    : user_game_history
  : user_game_history


  type user_game_historyCountArgs = Merge<
    Omit<user_game_historyFindManyArgs, 'select' | 'include'> & {
      select?: User_game_historyCountAggregateInputType | true
    }
  >

  export interface user_game_historyDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User_game_history that matches the filter.
     * @param {user_game_historyFindUniqueArgs} args - Arguments to find a User_game_history
     * @example
     * // Get one User_game_history
     * const user_game_history = await prisma.user_game_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_game_historyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, user_game_historyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user_game_history'> extends True ? CheckSelect<T, Prisma__user_game_historyClient<user_game_history>, Prisma__user_game_historyClient<user_game_historyGetPayload<T>>> : CheckSelect<T, Prisma__user_game_historyClient<user_game_history | null >, Prisma__user_game_historyClient<user_game_historyGetPayload<T> | null >>

    /**
     * Find the first User_game_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_game_historyFindFirstArgs} args - Arguments to find a User_game_history
     * @example
     * // Get one User_game_history
     * const user_game_history = await prisma.user_game_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_game_historyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, user_game_historyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user_game_history'> extends True ? CheckSelect<T, Prisma__user_game_historyClient<user_game_history>, Prisma__user_game_historyClient<user_game_historyGetPayload<T>>> : CheckSelect<T, Prisma__user_game_historyClient<user_game_history | null >, Prisma__user_game_historyClient<user_game_historyGetPayload<T> | null >>

    /**
     * Find zero or more User_game_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_game_historyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_game_histories
     * const user_game_histories = await prisma.user_game_history.findMany()
     * 
     * // Get first 10 User_game_histories
     * const user_game_histories = await prisma.user_game_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_game_historyWithIdOnly = await prisma.user_game_history.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends user_game_historyFindManyArgs>(
      args?: SelectSubset<T, user_game_historyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<user_game_history>>, PrismaPromise<Array<user_game_historyGetPayload<T>>>>

    /**
     * Create a User_game_history.
     * @param {user_game_historyCreateArgs} args - Arguments to create a User_game_history.
     * @example
     * // Create one User_game_history
     * const User_game_history = await prisma.user_game_history.create({
     *   data: {
     *     // ... data to create a User_game_history
     *   }
     * })
     * 
    **/
    create<T extends user_game_historyCreateArgs>(
      args: SelectSubset<T, user_game_historyCreateArgs>
    ): CheckSelect<T, Prisma__user_game_historyClient<user_game_history>, Prisma__user_game_historyClient<user_game_historyGetPayload<T>>>

    /**
     * Create many User_game_histories.
     *     @param {user_game_historyCreateManyArgs} args - Arguments to create many User_game_histories.
     *     @example
     *     // Create many User_game_histories
     *     const user_game_history = await prisma.user_game_history.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends user_game_historyCreateManyArgs>(
      args?: SelectSubset<T, user_game_historyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User_game_history.
     * @param {user_game_historyDeleteArgs} args - Arguments to delete one User_game_history.
     * @example
     * // Delete one User_game_history
     * const User_game_history = await prisma.user_game_history.delete({
     *   where: {
     *     // ... filter to delete one User_game_history
     *   }
     * })
     * 
    **/
    delete<T extends user_game_historyDeleteArgs>(
      args: SelectSubset<T, user_game_historyDeleteArgs>
    ): CheckSelect<T, Prisma__user_game_historyClient<user_game_history>, Prisma__user_game_historyClient<user_game_historyGetPayload<T>>>

    /**
     * Update one User_game_history.
     * @param {user_game_historyUpdateArgs} args - Arguments to update one User_game_history.
     * @example
     * // Update one User_game_history
     * const user_game_history = await prisma.user_game_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_game_historyUpdateArgs>(
      args: SelectSubset<T, user_game_historyUpdateArgs>
    ): CheckSelect<T, Prisma__user_game_historyClient<user_game_history>, Prisma__user_game_historyClient<user_game_historyGetPayload<T>>>

    /**
     * Delete zero or more User_game_histories.
     * @param {user_game_historyDeleteManyArgs} args - Arguments to filter User_game_histories to delete.
     * @example
     * // Delete a few User_game_histories
     * const { count } = await prisma.user_game_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_game_historyDeleteManyArgs>(
      args?: SelectSubset<T, user_game_historyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_game_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_game_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_game_histories
     * const user_game_history = await prisma.user_game_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_game_historyUpdateManyArgs>(
      args: SelectSubset<T, user_game_historyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User_game_history.
     * @param {user_game_historyUpsertArgs} args - Arguments to update or create a User_game_history.
     * @example
     * // Update or create a User_game_history
     * const user_game_history = await prisma.user_game_history.upsert({
     *   create: {
     *     // ... data to create a User_game_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_game_history we want to update
     *   }
     * })
    **/
    upsert<T extends user_game_historyUpsertArgs>(
      args: SelectSubset<T, user_game_historyUpsertArgs>
    ): CheckSelect<T, Prisma__user_game_historyClient<user_game_history>, Prisma__user_game_historyClient<user_game_historyGetPayload<T>>>

    /**
     * Count the number of User_game_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_game_historyCountArgs} args - Arguments to filter User_game_histories to count.
     * @example
     * // Count the number of User_game_histories
     * const count = await prisma.user_game_history.count({
     *   where: {
     *     // ... the filter for the User_game_histories we want to count
     *   }
     * })
    **/
    count<T extends user_game_historyCountArgs>(
      args?: Subset<T, user_game_historyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_game_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_game_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_game_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_game_historyAggregateArgs>(args: Subset<T, User_game_historyAggregateArgs>): PrismaPromise<GetUser_game_historyAggregateType<T>>

    /**
     * Group by User_game_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_game_historyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_game_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_game_historyGroupByArgs['orderBy'] }
        : { orderBy?: User_game_historyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_game_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_game_historyGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_game_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__user_game_historyClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user_game<T extends user_gameArgs = {}>(args?: Subset<T, user_gameArgs>): CheckSelect<T, Prisma__user_gameClient<user_game | null >, Prisma__user_gameClient<user_gameGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * user_game_history findUnique
   */
  export type user_game_historyFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the user_game_history
     * 
    **/
    select?: user_game_historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_game_historyInclude | null
    /**
     * Throw an Error if a user_game_history can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which user_game_history to fetch.
     * 
    **/
    where: user_game_historyWhereUniqueInput
  }


  /**
   * user_game_history findFirst
   */
  export type user_game_historyFindFirstArgs = {
    /**
     * Select specific fields to fetch from the user_game_history
     * 
    **/
    select?: user_game_historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_game_historyInclude | null
    /**
     * Throw an Error if a user_game_history can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which user_game_history to fetch.
     * 
    **/
    where?: user_game_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_game_histories to fetch.
     * 
    **/
    orderBy?: Enumerable<user_game_historyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_game_histories.
     * 
    **/
    cursor?: user_game_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_game_histories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_game_histories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_game_histories.
     * 
    **/
    distinct?: Enumerable<User_game_historyScalarFieldEnum>
  }


  /**
   * user_game_history findMany
   */
  export type user_game_historyFindManyArgs = {
    /**
     * Select specific fields to fetch from the user_game_history
     * 
    **/
    select?: user_game_historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_game_historyInclude | null
    /**
     * Filter, which user_game_histories to fetch.
     * 
    **/
    where?: user_game_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_game_histories to fetch.
     * 
    **/
    orderBy?: Enumerable<user_game_historyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_game_histories.
     * 
    **/
    cursor?: user_game_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_game_histories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_game_histories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<User_game_historyScalarFieldEnum>
  }


  /**
   * user_game_history create
   */
  export type user_game_historyCreateArgs = {
    /**
     * Select specific fields to fetch from the user_game_history
     * 
    **/
    select?: user_game_historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_game_historyInclude | null
    /**
     * The data needed to create a user_game_history.
     * 
    **/
    data: XOR<user_game_historyCreateInput, user_game_historyUncheckedCreateInput>
  }


  /**
   * user_game_history createMany
   */
  export type user_game_historyCreateManyArgs = {
    /**
     * The data used to create many user_game_histories.
     * 
    **/
    data: Enumerable<user_game_historyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * user_game_history update
   */
  export type user_game_historyUpdateArgs = {
    /**
     * Select specific fields to fetch from the user_game_history
     * 
    **/
    select?: user_game_historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_game_historyInclude | null
    /**
     * The data needed to update a user_game_history.
     * 
    **/
    data: XOR<user_game_historyUpdateInput, user_game_historyUncheckedUpdateInput>
    /**
     * Choose, which user_game_history to update.
     * 
    **/
    where: user_game_historyWhereUniqueInput
  }


  /**
   * user_game_history updateMany
   */
  export type user_game_historyUpdateManyArgs = {
    /**
     * The data used to update user_game_histories.
     * 
    **/
    data: XOR<user_game_historyUpdateManyMutationInput, user_game_historyUncheckedUpdateManyInput>
    /**
     * Filter which user_game_histories to update
     * 
    **/
    where?: user_game_historyWhereInput
  }


  /**
   * user_game_history upsert
   */
  export type user_game_historyUpsertArgs = {
    /**
     * Select specific fields to fetch from the user_game_history
     * 
    **/
    select?: user_game_historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_game_historyInclude | null
    /**
     * The filter to search for the user_game_history to update in case it exists.
     * 
    **/
    where: user_game_historyWhereUniqueInput
    /**
     * In case the user_game_history found by the `where` argument doesn't exist, create a new user_game_history with this data.
     * 
    **/
    create: XOR<user_game_historyCreateInput, user_game_historyUncheckedCreateInput>
    /**
     * In case the user_game_history was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<user_game_historyUpdateInput, user_game_historyUncheckedUpdateInput>
  }


  /**
   * user_game_history delete
   */
  export type user_game_historyDeleteArgs = {
    /**
     * Select specific fields to fetch from the user_game_history
     * 
    **/
    select?: user_game_historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_game_historyInclude | null
    /**
     * Filter which user_game_history to delete.
     * 
    **/
    where: user_game_historyWhereUniqueInput
  }


  /**
   * user_game_history deleteMany
   */
  export type user_game_historyDeleteManyArgs = {
    /**
     * Filter which user_game_histories to delete
     * 
    **/
    where?: user_game_historyWhereInput
  }


  /**
   * user_game_history without action
   */
  export type user_game_historyArgs = {
    /**
     * Select specific fields to fetch from the user_game_history
     * 
    **/
    select?: user_game_historySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: user_game_historyInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const User_gameScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email'
  };

  export type User_gameScalarFieldEnum = (typeof User_gameScalarFieldEnum)[keyof typeof User_gameScalarFieldEnum]


  export const User_game_biodataScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    first_name: 'first_name',
    last_name: 'last_name',
    age: 'age',
    about: 'about'
  };

  export type User_game_biodataScalarFieldEnum = (typeof User_game_biodataScalarFieldEnum)[keyof typeof User_game_biodataScalarFieldEnum]


  export const User_game_historyScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    game: 'game',
    score: 'score',
    created_at: 'created_at'
  };

  export type User_game_historyScalarFieldEnum = (typeof User_game_historyScalarFieldEnum)[keyof typeof User_game_historyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type user_gameWhereInput = {
    AND?: Enumerable<user_gameWhereInput>
    OR?: Enumerable<user_gameWhereInput>
    NOT?: Enumerable<user_gameWhereInput>
    id?: IntFilter | number
    username?: StringFilter | string
    password?: StringFilter | string
    email?: StringFilter | string
    user_game_biodata?: User_game_biodataListRelationFilter
    user_game_history?: User_game_historyListRelationFilter
  }

  export type user_gameOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    user_game_biodata?: user_game_biodataOrderByRelationAggregateInput
    user_game_history?: user_game_historyOrderByRelationAggregateInput
  }

  export type user_gameWhereUniqueInput = {
    id?: number
    username?: string
    email?: string
  }

  export type user_gameOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    _count?: user_gameCountOrderByAggregateInput
    _avg?: user_gameAvgOrderByAggregateInput
    _max?: user_gameMaxOrderByAggregateInput
    _min?: user_gameMinOrderByAggregateInput
    _sum?: user_gameSumOrderByAggregateInput
  }

  export type user_gameScalarWhereWithAggregatesInput = {
    AND?: Enumerable<user_gameScalarWhereWithAggregatesInput>
    OR?: Enumerable<user_gameScalarWhereWithAggregatesInput>
    NOT?: Enumerable<user_gameScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    username?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
  }

  export type user_game_biodataWhereInput = {
    AND?: Enumerable<user_game_biodataWhereInput>
    OR?: Enumerable<user_game_biodataWhereInput>
    NOT?: Enumerable<user_game_biodataWhereInput>
    id?: IntFilter | number
    user_id?: IntFilter | number
    first_name?: StringFilter | string
    last_name?: StringFilter | string
    age?: IntFilter | number
    about?: StringFilter | string
    user_game?: XOR<User_gameRelationFilter, user_gameWhereInput>
  }

  export type user_game_biodataOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    about?: SortOrder
    user_game?: user_gameOrderByWithRelationInput
  }

  export type user_game_biodataWhereUniqueInput = {
    id?: number
  }

  export type user_game_biodataOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    about?: SortOrder
    _count?: user_game_biodataCountOrderByAggregateInput
    _avg?: user_game_biodataAvgOrderByAggregateInput
    _max?: user_game_biodataMaxOrderByAggregateInput
    _min?: user_game_biodataMinOrderByAggregateInput
    _sum?: user_game_biodataSumOrderByAggregateInput
  }

  export type user_game_biodataScalarWhereWithAggregatesInput = {
    AND?: Enumerable<user_game_biodataScalarWhereWithAggregatesInput>
    OR?: Enumerable<user_game_biodataScalarWhereWithAggregatesInput>
    NOT?: Enumerable<user_game_biodataScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    user_id?: IntWithAggregatesFilter | number
    first_name?: StringWithAggregatesFilter | string
    last_name?: StringWithAggregatesFilter | string
    age?: IntWithAggregatesFilter | number
    about?: StringWithAggregatesFilter | string
  }

  export type user_game_historyWhereInput = {
    AND?: Enumerable<user_game_historyWhereInput>
    OR?: Enumerable<user_game_historyWhereInput>
    NOT?: Enumerable<user_game_historyWhereInput>
    id?: IntFilter | number
    user_id?: IntFilter | number
    game?: StringFilter | string
    score?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    user_game?: XOR<User_gameRelationFilter, user_gameWhereInput>
  }

  export type user_game_historyOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    game?: SortOrder
    score?: SortOrder
    created_at?: SortOrder
    user_game?: user_gameOrderByWithRelationInput
  }

  export type user_game_historyWhereUniqueInput = {
    id?: number
  }

  export type user_game_historyOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    game?: SortOrder
    score?: SortOrder
    created_at?: SortOrder
    _count?: user_game_historyCountOrderByAggregateInput
    _avg?: user_game_historyAvgOrderByAggregateInput
    _max?: user_game_historyMaxOrderByAggregateInput
    _min?: user_game_historyMinOrderByAggregateInput
    _sum?: user_game_historySumOrderByAggregateInput
  }

  export type user_game_historyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<user_game_historyScalarWhereWithAggregatesInput>
    OR?: Enumerable<user_game_historyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<user_game_historyScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    user_id?: IntWithAggregatesFilter | number
    game?: StringWithAggregatesFilter | string
    score?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type user_gameCreateInput = {
    username: string
    password: string
    email: string
    user_game_biodata?: user_game_biodataCreateNestedManyWithoutUser_gameInput
    user_game_history?: user_game_historyCreateNestedManyWithoutUser_gameInput
  }

  export type user_gameUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    email: string
    user_game_biodata?: user_game_biodataUncheckedCreateNestedManyWithoutUser_gameInput
    user_game_history?: user_game_historyUncheckedCreateNestedManyWithoutUser_gameInput
  }

  export type user_gameUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_game_biodata?: user_game_biodataUpdateManyWithoutUser_gameInput
    user_game_history?: user_game_historyUpdateManyWithoutUser_gameInput
  }

  export type user_gameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_game_biodata?: user_game_biodataUncheckedUpdateManyWithoutUser_gameInput
    user_game_history?: user_game_historyUncheckedUpdateManyWithoutUser_gameInput
  }

  export type user_gameCreateManyInput = {
    id?: number
    username: string
    password: string
    email: string
  }

  export type user_gameUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type user_gameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type user_game_biodataCreateInput = {
    first_name: string
    last_name: string
    age: number
    about: string
    user_game: user_gameCreateNestedOneWithoutUser_game_biodataInput
  }

  export type user_game_biodataUncheckedCreateInput = {
    id?: number
    user_id: number
    first_name: string
    last_name: string
    age: number
    about: string
  }

  export type user_game_biodataUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    about?: StringFieldUpdateOperationsInput | string
    user_game?: user_gameUpdateOneRequiredWithoutUser_game_biodataInput
  }

  export type user_game_biodataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    about?: StringFieldUpdateOperationsInput | string
  }

  export type user_game_biodataCreateManyInput = {
    id?: number
    user_id: number
    first_name: string
    last_name: string
    age: number
    about: string
  }

  export type user_game_biodataUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    about?: StringFieldUpdateOperationsInput | string
  }

  export type user_game_biodataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    about?: StringFieldUpdateOperationsInput | string
  }

  export type user_game_historyCreateInput = {
    game: string
    score: number
    created_at: Date | string
    user_game: user_gameCreateNestedOneWithoutUser_game_historyInput
  }

  export type user_game_historyUncheckedCreateInput = {
    id?: number
    user_id: number
    game: string
    score: number
    created_at: Date | string
  }

  export type user_game_historyUpdateInput = {
    game?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_game?: user_gameUpdateOneRequiredWithoutUser_game_historyInput
  }

  export type user_game_historyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    game?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_game_historyCreateManyInput = {
    id?: number
    user_id: number
    game: string
    score: number
    created_at: Date | string
  }

  export type user_game_historyUpdateManyMutationInput = {
    game?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_game_historyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    game?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type User_game_biodataListRelationFilter = {
    every?: user_game_biodataWhereInput
    some?: user_game_biodataWhereInput
    none?: user_game_biodataWhereInput
  }

  export type User_game_historyListRelationFilter = {
    every?: user_game_historyWhereInput
    some?: user_game_historyWhereInput
    none?: user_game_historyWhereInput
  }

  export type user_game_biodataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_game_historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_gameCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
  }

  export type user_gameAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type user_gameMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
  }

  export type user_gameMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
  }

  export type user_gameSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type User_gameRelationFilter = {
    is?: user_gameWhereInput
    isNot?: user_gameWhereInput
  }

  export type user_game_biodataCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    about?: SortOrder
  }

  export type user_game_biodataAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    age?: SortOrder
  }

  export type user_game_biodataMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    about?: SortOrder
  }

  export type user_game_biodataMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    age?: SortOrder
    about?: SortOrder
  }

  export type user_game_biodataSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    age?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type user_game_historyCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    game?: SortOrder
    score?: SortOrder
    created_at?: SortOrder
  }

  export type user_game_historyAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    score?: SortOrder
  }

  export type user_game_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    game?: SortOrder
    score?: SortOrder
    created_at?: SortOrder
  }

  export type user_game_historyMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    game?: SortOrder
    score?: SortOrder
    created_at?: SortOrder
  }

  export type user_game_historySumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    score?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type user_game_biodataCreateNestedManyWithoutUser_gameInput = {
    create?: XOR<Enumerable<user_game_biodataCreateWithoutUser_gameInput>, Enumerable<user_game_biodataUncheckedCreateWithoutUser_gameInput>>
    connectOrCreate?: Enumerable<user_game_biodataCreateOrConnectWithoutUser_gameInput>
    createMany?: user_game_biodataCreateManyUser_gameInputEnvelope
    connect?: Enumerable<user_game_biodataWhereUniqueInput>
  }

  export type user_game_historyCreateNestedManyWithoutUser_gameInput = {
    create?: XOR<Enumerable<user_game_historyCreateWithoutUser_gameInput>, Enumerable<user_game_historyUncheckedCreateWithoutUser_gameInput>>
    connectOrCreate?: Enumerable<user_game_historyCreateOrConnectWithoutUser_gameInput>
    createMany?: user_game_historyCreateManyUser_gameInputEnvelope
    connect?: Enumerable<user_game_historyWhereUniqueInput>
  }

  export type user_game_biodataUncheckedCreateNestedManyWithoutUser_gameInput = {
    create?: XOR<Enumerable<user_game_biodataCreateWithoutUser_gameInput>, Enumerable<user_game_biodataUncheckedCreateWithoutUser_gameInput>>
    connectOrCreate?: Enumerable<user_game_biodataCreateOrConnectWithoutUser_gameInput>
    createMany?: user_game_biodataCreateManyUser_gameInputEnvelope
    connect?: Enumerable<user_game_biodataWhereUniqueInput>
  }

  export type user_game_historyUncheckedCreateNestedManyWithoutUser_gameInput = {
    create?: XOR<Enumerable<user_game_historyCreateWithoutUser_gameInput>, Enumerable<user_game_historyUncheckedCreateWithoutUser_gameInput>>
    connectOrCreate?: Enumerable<user_game_historyCreateOrConnectWithoutUser_gameInput>
    createMany?: user_game_historyCreateManyUser_gameInputEnvelope
    connect?: Enumerable<user_game_historyWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type user_game_biodataUpdateManyWithoutUser_gameInput = {
    create?: XOR<Enumerable<user_game_biodataCreateWithoutUser_gameInput>, Enumerable<user_game_biodataUncheckedCreateWithoutUser_gameInput>>
    connectOrCreate?: Enumerable<user_game_biodataCreateOrConnectWithoutUser_gameInput>
    upsert?: Enumerable<user_game_biodataUpsertWithWhereUniqueWithoutUser_gameInput>
    createMany?: user_game_biodataCreateManyUser_gameInputEnvelope
    set?: Enumerable<user_game_biodataWhereUniqueInput>
    disconnect?: Enumerable<user_game_biodataWhereUniqueInput>
    delete?: Enumerable<user_game_biodataWhereUniqueInput>
    connect?: Enumerable<user_game_biodataWhereUniqueInput>
    update?: Enumerable<user_game_biodataUpdateWithWhereUniqueWithoutUser_gameInput>
    updateMany?: Enumerable<user_game_biodataUpdateManyWithWhereWithoutUser_gameInput>
    deleteMany?: Enumerable<user_game_biodataScalarWhereInput>
  }

  export type user_game_historyUpdateManyWithoutUser_gameInput = {
    create?: XOR<Enumerable<user_game_historyCreateWithoutUser_gameInput>, Enumerable<user_game_historyUncheckedCreateWithoutUser_gameInput>>
    connectOrCreate?: Enumerable<user_game_historyCreateOrConnectWithoutUser_gameInput>
    upsert?: Enumerable<user_game_historyUpsertWithWhereUniqueWithoutUser_gameInput>
    createMany?: user_game_historyCreateManyUser_gameInputEnvelope
    set?: Enumerable<user_game_historyWhereUniqueInput>
    disconnect?: Enumerable<user_game_historyWhereUniqueInput>
    delete?: Enumerable<user_game_historyWhereUniqueInput>
    connect?: Enumerable<user_game_historyWhereUniqueInput>
    update?: Enumerable<user_game_historyUpdateWithWhereUniqueWithoutUser_gameInput>
    updateMany?: Enumerable<user_game_historyUpdateManyWithWhereWithoutUser_gameInput>
    deleteMany?: Enumerable<user_game_historyScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type user_game_biodataUncheckedUpdateManyWithoutUser_gameInput = {
    create?: XOR<Enumerable<user_game_biodataCreateWithoutUser_gameInput>, Enumerable<user_game_biodataUncheckedCreateWithoutUser_gameInput>>
    connectOrCreate?: Enumerable<user_game_biodataCreateOrConnectWithoutUser_gameInput>
    upsert?: Enumerable<user_game_biodataUpsertWithWhereUniqueWithoutUser_gameInput>
    createMany?: user_game_biodataCreateManyUser_gameInputEnvelope
    set?: Enumerable<user_game_biodataWhereUniqueInput>
    disconnect?: Enumerable<user_game_biodataWhereUniqueInput>
    delete?: Enumerable<user_game_biodataWhereUniqueInput>
    connect?: Enumerable<user_game_biodataWhereUniqueInput>
    update?: Enumerable<user_game_biodataUpdateWithWhereUniqueWithoutUser_gameInput>
    updateMany?: Enumerable<user_game_biodataUpdateManyWithWhereWithoutUser_gameInput>
    deleteMany?: Enumerable<user_game_biodataScalarWhereInput>
  }

  export type user_game_historyUncheckedUpdateManyWithoutUser_gameInput = {
    create?: XOR<Enumerable<user_game_historyCreateWithoutUser_gameInput>, Enumerable<user_game_historyUncheckedCreateWithoutUser_gameInput>>
    connectOrCreate?: Enumerable<user_game_historyCreateOrConnectWithoutUser_gameInput>
    upsert?: Enumerable<user_game_historyUpsertWithWhereUniqueWithoutUser_gameInput>
    createMany?: user_game_historyCreateManyUser_gameInputEnvelope
    set?: Enumerable<user_game_historyWhereUniqueInput>
    disconnect?: Enumerable<user_game_historyWhereUniqueInput>
    delete?: Enumerable<user_game_historyWhereUniqueInput>
    connect?: Enumerable<user_game_historyWhereUniqueInput>
    update?: Enumerable<user_game_historyUpdateWithWhereUniqueWithoutUser_gameInput>
    updateMany?: Enumerable<user_game_historyUpdateManyWithWhereWithoutUser_gameInput>
    deleteMany?: Enumerable<user_game_historyScalarWhereInput>
  }

  export type user_gameCreateNestedOneWithoutUser_game_biodataInput = {
    create?: XOR<user_gameCreateWithoutUser_game_biodataInput, user_gameUncheckedCreateWithoutUser_game_biodataInput>
    connectOrCreate?: user_gameCreateOrConnectWithoutUser_game_biodataInput
    connect?: user_gameWhereUniqueInput
  }

  export type user_gameUpdateOneRequiredWithoutUser_game_biodataInput = {
    create?: XOR<user_gameCreateWithoutUser_game_biodataInput, user_gameUncheckedCreateWithoutUser_game_biodataInput>
    connectOrCreate?: user_gameCreateOrConnectWithoutUser_game_biodataInput
    upsert?: user_gameUpsertWithoutUser_game_biodataInput
    connect?: user_gameWhereUniqueInput
    update?: XOR<user_gameUpdateWithoutUser_game_biodataInput, user_gameUncheckedUpdateWithoutUser_game_biodataInput>
  }

  export type user_gameCreateNestedOneWithoutUser_game_historyInput = {
    create?: XOR<user_gameCreateWithoutUser_game_historyInput, user_gameUncheckedCreateWithoutUser_game_historyInput>
    connectOrCreate?: user_gameCreateOrConnectWithoutUser_game_historyInput
    connect?: user_gameWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type user_gameUpdateOneRequiredWithoutUser_game_historyInput = {
    create?: XOR<user_gameCreateWithoutUser_game_historyInput, user_gameUncheckedCreateWithoutUser_game_historyInput>
    connectOrCreate?: user_gameCreateOrConnectWithoutUser_game_historyInput
    upsert?: user_gameUpsertWithoutUser_game_historyInput
    connect?: user_gameWhereUniqueInput
    update?: XOR<user_gameUpdateWithoutUser_game_historyInput, user_gameUncheckedUpdateWithoutUser_game_historyInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type user_game_biodataCreateWithoutUser_gameInput = {
    first_name: string
    last_name: string
    age: number
    about: string
  }

  export type user_game_biodataUncheckedCreateWithoutUser_gameInput = {
    id?: number
    first_name: string
    last_name: string
    age: number
    about: string
  }

  export type user_game_biodataCreateOrConnectWithoutUser_gameInput = {
    where: user_game_biodataWhereUniqueInput
    create: XOR<user_game_biodataCreateWithoutUser_gameInput, user_game_biodataUncheckedCreateWithoutUser_gameInput>
  }

  export type user_game_biodataCreateManyUser_gameInputEnvelope = {
    data: Enumerable<user_game_biodataCreateManyUser_gameInput>
    skipDuplicates?: boolean
  }

  export type user_game_historyCreateWithoutUser_gameInput = {
    game: string
    score: number
    created_at: Date | string
  }

  export type user_game_historyUncheckedCreateWithoutUser_gameInput = {
    id?: number
    game: string
    score: number
    created_at: Date | string
  }

  export type user_game_historyCreateOrConnectWithoutUser_gameInput = {
    where: user_game_historyWhereUniqueInput
    create: XOR<user_game_historyCreateWithoutUser_gameInput, user_game_historyUncheckedCreateWithoutUser_gameInput>
  }

  export type user_game_historyCreateManyUser_gameInputEnvelope = {
    data: Enumerable<user_game_historyCreateManyUser_gameInput>
    skipDuplicates?: boolean
  }

  export type user_game_biodataUpsertWithWhereUniqueWithoutUser_gameInput = {
    where: user_game_biodataWhereUniqueInput
    update: XOR<user_game_biodataUpdateWithoutUser_gameInput, user_game_biodataUncheckedUpdateWithoutUser_gameInput>
    create: XOR<user_game_biodataCreateWithoutUser_gameInput, user_game_biodataUncheckedCreateWithoutUser_gameInput>
  }

  export type user_game_biodataUpdateWithWhereUniqueWithoutUser_gameInput = {
    where: user_game_biodataWhereUniqueInput
    data: XOR<user_game_biodataUpdateWithoutUser_gameInput, user_game_biodataUncheckedUpdateWithoutUser_gameInput>
  }

  export type user_game_biodataUpdateManyWithWhereWithoutUser_gameInput = {
    where: user_game_biodataScalarWhereInput
    data: XOR<user_game_biodataUpdateManyMutationInput, user_game_biodataUncheckedUpdateManyWithoutUser_game_biodataInput>
  }

  export type user_game_biodataScalarWhereInput = {
    AND?: Enumerable<user_game_biodataScalarWhereInput>
    OR?: Enumerable<user_game_biodataScalarWhereInput>
    NOT?: Enumerable<user_game_biodataScalarWhereInput>
    id?: IntFilter | number
    user_id?: IntFilter | number
    first_name?: StringFilter | string
    last_name?: StringFilter | string
    age?: IntFilter | number
    about?: StringFilter | string
  }

  export type user_game_historyUpsertWithWhereUniqueWithoutUser_gameInput = {
    where: user_game_historyWhereUniqueInput
    update: XOR<user_game_historyUpdateWithoutUser_gameInput, user_game_historyUncheckedUpdateWithoutUser_gameInput>
    create: XOR<user_game_historyCreateWithoutUser_gameInput, user_game_historyUncheckedCreateWithoutUser_gameInput>
  }

  export type user_game_historyUpdateWithWhereUniqueWithoutUser_gameInput = {
    where: user_game_historyWhereUniqueInput
    data: XOR<user_game_historyUpdateWithoutUser_gameInput, user_game_historyUncheckedUpdateWithoutUser_gameInput>
  }

  export type user_game_historyUpdateManyWithWhereWithoutUser_gameInput = {
    where: user_game_historyScalarWhereInput
    data: XOR<user_game_historyUpdateManyMutationInput, user_game_historyUncheckedUpdateManyWithoutUser_game_historyInput>
  }

  export type user_game_historyScalarWhereInput = {
    AND?: Enumerable<user_game_historyScalarWhereInput>
    OR?: Enumerable<user_game_historyScalarWhereInput>
    NOT?: Enumerable<user_game_historyScalarWhereInput>
    id?: IntFilter | number
    user_id?: IntFilter | number
    game?: StringFilter | string
    score?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
  }

  export type user_gameCreateWithoutUser_game_biodataInput = {
    username: string
    password: string
    email: string
    user_game_history?: user_game_historyCreateNestedManyWithoutUser_gameInput
  }

  export type user_gameUncheckedCreateWithoutUser_game_biodataInput = {
    id?: number
    username: string
    password: string
    email: string
    user_game_history?: user_game_historyUncheckedCreateNestedManyWithoutUser_gameInput
  }

  export type user_gameCreateOrConnectWithoutUser_game_biodataInput = {
    where: user_gameWhereUniqueInput
    create: XOR<user_gameCreateWithoutUser_game_biodataInput, user_gameUncheckedCreateWithoutUser_game_biodataInput>
  }

  export type user_gameUpsertWithoutUser_game_biodataInput = {
    update: XOR<user_gameUpdateWithoutUser_game_biodataInput, user_gameUncheckedUpdateWithoutUser_game_biodataInput>
    create: XOR<user_gameCreateWithoutUser_game_biodataInput, user_gameUncheckedCreateWithoutUser_game_biodataInput>
  }

  export type user_gameUpdateWithoutUser_game_biodataInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_game_history?: user_game_historyUpdateManyWithoutUser_gameInput
  }

  export type user_gameUncheckedUpdateWithoutUser_game_biodataInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_game_history?: user_game_historyUncheckedUpdateManyWithoutUser_gameInput
  }

  export type user_gameCreateWithoutUser_game_historyInput = {
    username: string
    password: string
    email: string
    user_game_biodata?: user_game_biodataCreateNestedManyWithoutUser_gameInput
  }

  export type user_gameUncheckedCreateWithoutUser_game_historyInput = {
    id?: number
    username: string
    password: string
    email: string
    user_game_biodata?: user_game_biodataUncheckedCreateNestedManyWithoutUser_gameInput
  }

  export type user_gameCreateOrConnectWithoutUser_game_historyInput = {
    where: user_gameWhereUniqueInput
    create: XOR<user_gameCreateWithoutUser_game_historyInput, user_gameUncheckedCreateWithoutUser_game_historyInput>
  }

  export type user_gameUpsertWithoutUser_game_historyInput = {
    update: XOR<user_gameUpdateWithoutUser_game_historyInput, user_gameUncheckedUpdateWithoutUser_game_historyInput>
    create: XOR<user_gameCreateWithoutUser_game_historyInput, user_gameUncheckedCreateWithoutUser_game_historyInput>
  }

  export type user_gameUpdateWithoutUser_game_historyInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_game_biodata?: user_game_biodataUpdateManyWithoutUser_gameInput
  }

  export type user_gameUncheckedUpdateWithoutUser_game_historyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user_game_biodata?: user_game_biodataUncheckedUpdateManyWithoutUser_gameInput
  }

  export type user_game_biodataCreateManyUser_gameInput = {
    id?: number
    first_name: string
    last_name: string
    age: number
    about: string
  }

  export type user_game_historyCreateManyUser_gameInput = {
    id?: number
    game: string
    score: number
    created_at: Date | string
  }

  export type user_game_biodataUpdateWithoutUser_gameInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    about?: StringFieldUpdateOperationsInput | string
  }

  export type user_game_biodataUncheckedUpdateWithoutUser_gameInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    about?: StringFieldUpdateOperationsInput | string
  }

  export type user_game_biodataUncheckedUpdateManyWithoutUser_game_biodataInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    about?: StringFieldUpdateOperationsInput | string
  }

  export type user_game_historyUpdateWithoutUser_gameInput = {
    game?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_game_historyUncheckedUpdateWithoutUser_gameInput = {
    id?: IntFieldUpdateOperationsInput | number
    game?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_game_historyUncheckedUpdateManyWithoutUser_game_historyInput = {
    id?: IntFieldUpdateOperationsInput | number
    game?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}