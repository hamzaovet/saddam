
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Branch
 * 
 */
export type Branch = $Result.DefaultSelection<Prisma.$BranchPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Specialist
 * 
 */
export type Specialist = $Result.DefaultSelection<Prisma.$SpecialistPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model SpecialistLedger
 * 
 */
export type SpecialistLedger = $Result.DefaultSelection<Prisma.$SpecialistLedgerPayload>
/**
 * Model SystemSettings
 * 
 */
export type SystemSettings = $Result.DefaultSelection<Prisma.$SystemSettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Branches
 * const branches = await prisma.branch.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Branches
   * const branches = await prisma.branch.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branch.findMany()
    * ```
    */
  get branch(): Prisma.BranchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specialist`: Exposes CRUD operations for the **Specialist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specialists
    * const specialists = await prisma.specialist.findMany()
    * ```
    */
  get specialist(): Prisma.SpecialistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specialistLedger`: Exposes CRUD operations for the **SpecialistLedger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpecialistLedgers
    * const specialistLedgers = await prisma.specialistLedger.findMany()
    * ```
    */
  get specialistLedger(): Prisma.SpecialistLedgerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemSettings`: Exposes CRUD operations for the **SystemSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemSettings
    * const systemSettings = await prisma.systemSettings.findMany()
    * ```
    */
  get systemSettings(): Prisma.SystemSettingsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Branch: 'Branch',
    User: 'User',
    Specialist: 'Specialist',
    Service: 'Service',
    Customer: 'Customer',
    Booking: 'Booking',
    Ticket: 'Ticket',
    Product: 'Product',
    SpecialistLedger: 'SpecialistLedger',
    SystemSettings: 'SystemSettings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "branch" | "user" | "specialist" | "service" | "customer" | "booking" | "ticket" | "product" | "specialistLedger" | "systemSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Branch: {
        payload: Prisma.$BranchPayload<ExtArgs>
        fields: Prisma.BranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findFirst: {
            args: Prisma.BranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findMany: {
            args: Prisma.BranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          create: {
            args: Prisma.BranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          createMany: {
            args: Prisma.BranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BranchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          delete: {
            args: Prisma.BranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          update: {
            args: Prisma.BranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          deleteMany: {
            args: Prisma.BranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BranchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          upsert: {
            args: Prisma.BranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          aggregate: {
            args: Prisma.BranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranch>
          }
          groupBy: {
            args: Prisma.BranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchCountArgs<ExtArgs>
            result: $Utils.Optional<BranchCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Specialist: {
        payload: Prisma.$SpecialistPayload<ExtArgs>
        fields: Prisma.SpecialistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>
          }
          findFirst: {
            args: Prisma.SpecialistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>
          }
          findMany: {
            args: Prisma.SpecialistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>[]
          }
          create: {
            args: Prisma.SpecialistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>
          }
          createMany: {
            args: Prisma.SpecialistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecialistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>[]
          }
          delete: {
            args: Prisma.SpecialistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>
          }
          update: {
            args: Prisma.SpecialistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>
          }
          deleteMany: {
            args: Prisma.SpecialistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecialistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>[]
          }
          upsert: {
            args: Prisma.SpecialistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistPayload>
          }
          aggregate: {
            args: Prisma.SpecialistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialist>
          }
          groupBy: {
            args: Prisma.SpecialistGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialistGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialistCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialistCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      SpecialistLedger: {
        payload: Prisma.$SpecialistLedgerPayload<ExtArgs>
        fields: Prisma.SpecialistLedgerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialistLedgerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistLedgerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialistLedgerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistLedgerPayload>
          }
          findFirst: {
            args: Prisma.SpecialistLedgerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistLedgerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialistLedgerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistLedgerPayload>
          }
          findMany: {
            args: Prisma.SpecialistLedgerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistLedgerPayload>[]
          }
          create: {
            args: Prisma.SpecialistLedgerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistLedgerPayload>
          }
          createMany: {
            args: Prisma.SpecialistLedgerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecialistLedgerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistLedgerPayload>[]
          }
          delete: {
            args: Prisma.SpecialistLedgerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistLedgerPayload>
          }
          update: {
            args: Prisma.SpecialistLedgerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistLedgerPayload>
          }
          deleteMany: {
            args: Prisma.SpecialistLedgerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialistLedgerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecialistLedgerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistLedgerPayload>[]
          }
          upsert: {
            args: Prisma.SpecialistLedgerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialistLedgerPayload>
          }
          aggregate: {
            args: Prisma.SpecialistLedgerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialistLedger>
          }
          groupBy: {
            args: Prisma.SpecialistLedgerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialistLedgerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialistLedgerCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialistLedgerCountAggregateOutputType> | number
          }
        }
      }
      SystemSettings: {
        payload: Prisma.$SystemSettingsPayload<ExtArgs>
        fields: Prisma.SystemSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          findFirst: {
            args: Prisma.SystemSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          findMany: {
            args: Prisma.SystemSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          create: {
            args: Prisma.SystemSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          createMany: {
            args: Prisma.SystemSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          delete: {
            args: Prisma.SystemSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          update: {
            args: Prisma.SystemSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          deleteMany: {
            args: Prisma.SystemSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          upsert: {
            args: Prisma.SystemSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          aggregate: {
            args: Prisma.SystemSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemSettings>
          }
          groupBy: {
            args: Prisma.SystemSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    branch?: BranchOmit
    user?: UserOmit
    specialist?: SpecialistOmit
    service?: ServiceOmit
    customer?: CustomerOmit
    booking?: BookingOmit
    ticket?: TicketOmit
    product?: ProductOmit
    specialistLedger?: SpecialistLedgerOmit
    systemSettings?: SystemSettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BranchCountOutputType
   */

  export type BranchCountOutputType = {
    users: number
    specialists: number
    bookings: number
    tickets: number
    products: number
    ledgers: number
  }

  export type BranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | BranchCountOutputTypeCountUsersArgs
    specialists?: boolean | BranchCountOutputTypeCountSpecialistsArgs
    bookings?: boolean | BranchCountOutputTypeCountBookingsArgs
    tickets?: boolean | BranchCountOutputTypeCountTicketsArgs
    products?: boolean | BranchCountOutputTypeCountProductsArgs
    ledgers?: boolean | BranchCountOutputTypeCountLedgersArgs
  }

  // Custom InputTypes
  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchCountOutputType
     */
    select?: BranchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountSpecialistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialistWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountLedgersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialistLedgerWhereInput
  }


  /**
   * Count Type SpecialistCountOutputType
   */

  export type SpecialistCountOutputType = {
    bookings: number
    tickets: number
    ledgers: number
  }

  export type SpecialistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | SpecialistCountOutputTypeCountBookingsArgs
    tickets?: boolean | SpecialistCountOutputTypeCountTicketsArgs
    ledgers?: boolean | SpecialistCountOutputTypeCountLedgersArgs
  }

  // Custom InputTypes
  /**
   * SpecialistCountOutputType without action
   */
  export type SpecialistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistCountOutputType
     */
    select?: SpecialistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialistCountOutputType without action
   */
  export type SpecialistCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * SpecialistCountOutputType without action
   */
  export type SpecialistCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * SpecialistCountOutputType without action
   */
  export type SpecialistCountOutputTypeCountLedgersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialistLedgerWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    bookings: number
    tickets: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | CustomerCountOutputTypeCountBookingsArgs
    tickets?: boolean | CustomerCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Branch
   */

  export type AggregateBranch = {
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  export type BranchMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    address: string | null
    phone: string | null
    whatsapp: string | null
    googleMapsUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type BranchMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    address: string | null
    phone: string | null
    whatsapp: string | null
    googleMapsUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    name: number
    code: number
    address: number
    phone: number
    whatsapp: number
    googleMapsUrl: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type BranchMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    address?: true
    phone?: true
    whatsapp?: true
    googleMapsUrl?: true
    isActive?: true
    createdAt?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    address?: true
    phone?: true
    whatsapp?: true
    googleMapsUrl?: true
    isActive?: true
    createdAt?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    address?: true
    phone?: true
    whatsapp?: true
    googleMapsUrl?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type BranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branch to aggregate.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchMaxAggregateInputType
  }

  export type GetBranchAggregateType<T extends BranchAggregateArgs> = {
        [P in keyof T & keyof AggregateBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranch[P]>
      : GetScalarType<T[P], AggregateBranch[P]>
  }




  export type BranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithAggregationInput | BranchOrderByWithAggregationInput[]
    by: BranchScalarFieldEnum[] | BranchScalarFieldEnum
    having?: BranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchCountAggregateInputType | true
    _min?: BranchMinAggregateInputType
    _max?: BranchMaxAggregateInputType
  }

  export type BranchGroupByOutputType = {
    id: string
    name: string
    code: string
    address: string
    phone: string
    whatsapp: string | null
    googleMapsUrl: string | null
    isActive: boolean
    createdAt: Date
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  type GetBranchGroupByPayload<T extends BranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchGroupByOutputType[P]>
            : GetScalarType<T[P], BranchGroupByOutputType[P]>
        }
      >
    >


  export type BranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    address?: boolean
    phone?: boolean
    whatsapp?: boolean
    googleMapsUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    users?: boolean | Branch$usersArgs<ExtArgs>
    specialists?: boolean | Branch$specialistsArgs<ExtArgs>
    bookings?: boolean | Branch$bookingsArgs<ExtArgs>
    tickets?: boolean | Branch$ticketsArgs<ExtArgs>
    products?: boolean | Branch$productsArgs<ExtArgs>
    ledgers?: boolean | Branch$ledgersArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    address?: boolean
    phone?: boolean
    whatsapp?: boolean
    googleMapsUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    address?: boolean
    phone?: boolean
    whatsapp?: boolean
    googleMapsUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    address?: boolean
    phone?: boolean
    whatsapp?: boolean
    googleMapsUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type BranchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "address" | "phone" | "whatsapp" | "googleMapsUrl" | "isActive" | "createdAt", ExtArgs["result"]["branch"]>
  export type BranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Branch$usersArgs<ExtArgs>
    specialists?: boolean | Branch$specialistsArgs<ExtArgs>
    bookings?: boolean | Branch$bookingsArgs<ExtArgs>
    tickets?: boolean | Branch$ticketsArgs<ExtArgs>
    products?: boolean | Branch$productsArgs<ExtArgs>
    ledgers?: boolean | Branch$ledgersArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BranchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BranchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branch"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      specialists: Prisma.$SpecialistPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      ledgers: Prisma.$SpecialistLedgerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      address: string
      phone: string
      whatsapp: string | null
      googleMapsUrl: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }

  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BranchCountAggregateInputType | true
    }

  export interface BranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branch'], meta: { name: 'Branch' } }
    /**
     * Find zero or one Branch that matches the filter.
     * @param {BranchFindUniqueArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchFindUniqueArgs>(args: SelectSubset<T, BranchFindUniqueArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Branch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BranchFindUniqueOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchFindFirstArgs>(args?: SelectSubset<T, BranchFindFirstArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branch.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchWithIdOnly = await prisma.branch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchFindManyArgs>(args?: SelectSubset<T, BranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Branch.
     * @param {BranchCreateArgs} args - Arguments to create a Branch.
     * @example
     * // Create one Branch
     * const Branch = await prisma.branch.create({
     *   data: {
     *     // ... data to create a Branch
     *   }
     * })
     * 
     */
    create<T extends BranchCreateArgs>(args: SelectSubset<T, BranchCreateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Branches.
     * @param {BranchCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchCreateManyArgs>(args?: SelectSubset<T, BranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Branches and returns the data saved in the database.
     * @param {BranchCreateManyAndReturnArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BranchCreateManyAndReturnArgs>(args?: SelectSubset<T, BranchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Branch.
     * @param {BranchDeleteArgs} args - Arguments to delete one Branch.
     * @example
     * // Delete one Branch
     * const Branch = await prisma.branch.delete({
     *   where: {
     *     // ... filter to delete one Branch
     *   }
     * })
     * 
     */
    delete<T extends BranchDeleteArgs>(args: SelectSubset<T, BranchDeleteArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Branch.
     * @param {BranchUpdateArgs} args - Arguments to update one Branch.
     * @example
     * // Update one Branch
     * const branch = await prisma.branch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchUpdateArgs>(args: SelectSubset<T, BranchUpdateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Branches.
     * @param {BranchDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchDeleteManyArgs>(args?: SelectSubset<T, BranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchUpdateManyArgs>(args: SelectSubset<T, BranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches and returns the data updated in the database.
     * @param {BranchUpdateManyAndReturnArgs} args - Arguments to update many Branches.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BranchUpdateManyAndReturnArgs>(args: SelectSubset<T, BranchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Branch.
     * @param {BranchUpsertArgs} args - Arguments to update or create a Branch.
     * @example
     * // Update or create a Branch
     * const branch = await prisma.branch.upsert({
     *   create: {
     *     // ... data to create a Branch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branch we want to update
     *   }
     * })
     */
    upsert<T extends BranchUpsertArgs>(args: SelectSubset<T, BranchUpsertArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branch.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchCountArgs>(
      args?: Subset<T, BranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BranchAggregateArgs>(args: Subset<T, BranchAggregateArgs>): Prisma.PrismaPromise<GetBranchAggregateType<T>>

    /**
     * Group by Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchGroupByArgs} args - Group by arguments.
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
      T extends BranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchGroupByArgs['orderBy'] }
        : { orderBy?: BranchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branch model
   */
  readonly fields: BranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Branch$usersArgs<ExtArgs> = {}>(args?: Subset<T, Branch$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    specialists<T extends Branch$specialistsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$specialistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Branch$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Branch$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Branch$productsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ledgers<T extends Branch$ledgersArgs<ExtArgs> = {}>(args?: Subset<T, Branch$ledgersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialistLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Branch model
   */
  interface BranchFieldRefs {
    readonly id: FieldRef<"Branch", 'String'>
    readonly name: FieldRef<"Branch", 'String'>
    readonly code: FieldRef<"Branch", 'String'>
    readonly address: FieldRef<"Branch", 'String'>
    readonly phone: FieldRef<"Branch", 'String'>
    readonly whatsapp: FieldRef<"Branch", 'String'>
    readonly googleMapsUrl: FieldRef<"Branch", 'String'>
    readonly isActive: FieldRef<"Branch", 'Boolean'>
    readonly createdAt: FieldRef<"Branch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Branch findUnique
   */
  export type BranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findUniqueOrThrow
   */
  export type BranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findFirst
   */
  export type BranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findFirstOrThrow
   */
  export type BranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findMany
   */
  export type BranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch create
   */
  export type BranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to create a Branch.
     */
    data: XOR<BranchCreateInput, BranchUncheckedCreateInput>
  }

  /**
   * Branch createMany
   */
  export type BranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch createManyAndReturn
   */
  export type BranchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch update
   */
  export type BranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to update a Branch.
     */
    data: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    /**
     * Choose, which Branch to update.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch updateMany
   */
  export type BranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
  }

  /**
   * Branch updateManyAndReturn
   */
  export type BranchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
  }

  /**
   * Branch upsert
   */
  export type BranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The filter to search for the Branch to update in case it exists.
     */
    where: BranchWhereUniqueInput
    /**
     * In case the Branch found by the `where` argument doesn't exist, create a new Branch with this data.
     */
    create: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    /**
     * In case the Branch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
  }

  /**
   * Branch delete
   */
  export type BranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter which Branch to delete.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch deleteMany
   */
  export type BranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to delete.
     */
    limit?: number
  }

  /**
   * Branch.users
   */
  export type Branch$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Branch.specialists
   */
  export type Branch$specialistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    where?: SpecialistWhereInput
    orderBy?: SpecialistOrderByWithRelationInput | SpecialistOrderByWithRelationInput[]
    cursor?: SpecialistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecialistScalarFieldEnum | SpecialistScalarFieldEnum[]
  }

  /**
   * Branch.bookings
   */
  export type Branch$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Branch.tickets
   */
  export type Branch$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Branch.products
   */
  export type Branch$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Branch.ledgers
   */
  export type Branch$ledgersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistLedger
     */
    select?: SpecialistLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistLedger
     */
    omit?: SpecialistLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistLedgerInclude<ExtArgs> | null
    where?: SpecialistLedgerWhereInput
    orderBy?: SpecialistLedgerOrderByWithRelationInput | SpecialistLedgerOrderByWithRelationInput[]
    cursor?: SpecialistLedgerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecialistLedgerScalarFieldEnum | SpecialistLedgerScalarFieldEnum[]
  }

  /**
   * Branch without action
   */
  export type BranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    passwordHash: string | null
    pin: string | null
    phone: string | null
    role: string | null
    branchId: string | null
    permissions: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    passwordHash: string | null
    pin: string | null
    phone: string | null
    role: string | null
    branchId: string | null
    permissions: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    passwordHash: number
    pin: number
    phone: number
    role: number
    branchId: number
    permissions: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    passwordHash?: true
    pin?: true
    phone?: true
    role?: true
    branchId?: true
    permissions?: true
    isActive?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    passwordHash?: true
    pin?: true
    phone?: true
    role?: true
    branchId?: true
    permissions?: true
    isActive?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    passwordHash?: true
    pin?: true
    phone?: true
    role?: true
    branchId?: true
    permissions?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    username: string
    passwordHash: string
    pin: string
    phone: string | null
    role: string
    branchId: string | null
    permissions: string | null
    isActive: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    passwordHash?: boolean
    pin?: boolean
    phone?: boolean
    role?: boolean
    branchId?: boolean
    permissions?: boolean
    isActive?: boolean
    createdAt?: boolean
    branch?: boolean | User$branchArgs<ExtArgs>
    specialistProfile?: boolean | User$specialistProfileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    passwordHash?: boolean
    pin?: boolean
    phone?: boolean
    role?: boolean
    branchId?: boolean
    permissions?: boolean
    isActive?: boolean
    createdAt?: boolean
    branch?: boolean | User$branchArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    passwordHash?: boolean
    pin?: boolean
    phone?: boolean
    role?: boolean
    branchId?: boolean
    permissions?: boolean
    isActive?: boolean
    createdAt?: boolean
    branch?: boolean | User$branchArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    passwordHash?: boolean
    pin?: boolean
    phone?: boolean
    role?: boolean
    branchId?: boolean
    permissions?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "passwordHash" | "pin" | "phone" | "role" | "branchId" | "permissions" | "isActive" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | User$branchArgs<ExtArgs>
    specialistProfile?: boolean | User$specialistProfileArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | User$branchArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | User$branchArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs> | null
      specialistProfile: Prisma.$SpecialistPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      username: string
      passwordHash: string
      pin: string
      phone: string | null
      role: string
      branchId: string | null
      permissions: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends User$branchArgs<ExtArgs> = {}>(args?: Subset<T, User$branchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    specialistProfile<T extends User$specialistProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$specialistProfileArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly pin: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly branchId: FieldRef<"User", 'String'>
    readonly permissions: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.branch
   */
  export type User$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }

  /**
   * User.specialistProfile
   */
  export type User$specialistProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    where?: SpecialistWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Specialist
   */

  export type AggregateSpecialist = {
    _count: SpecialistCountAggregateOutputType | null
    _avg: SpecialistAvgAggregateOutputType | null
    _sum: SpecialistSumAggregateOutputType | null
    _min: SpecialistMinAggregateOutputType | null
    _max: SpecialistMaxAggregateOutputType | null
  }

  export type SpecialistAvgAggregateOutputType = {
    chairNumber: number | null
    rating: number | null
    baseSalary: number | null
    commissionRate: number | null
  }

  export type SpecialistSumAggregateOutputType = {
    chairNumber: number | null
    rating: number | null
    baseSalary: number | null
    commissionRate: number | null
  }

  export type SpecialistMinAggregateOutputType = {
    id: string | null
    userId: string | null
    branchId: string | null
    name: string | null
    phone: string | null
    photo: string | null
    title: string | null
    chairNumber: number | null
    status: string | null
    rating: number | null
    payType: string | null
    baseSalary: number | null
    commissionRate: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type SpecialistMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    branchId: string | null
    name: string | null
    phone: string | null
    photo: string | null
    title: string | null
    chairNumber: number | null
    status: string | null
    rating: number | null
    payType: string | null
    baseSalary: number | null
    commissionRate: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type SpecialistCountAggregateOutputType = {
    id: number
    userId: number
    branchId: number
    name: number
    phone: number
    photo: number
    title: number
    chairNumber: number
    status: number
    rating: number
    payType: number
    baseSalary: number
    commissionRate: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type SpecialistAvgAggregateInputType = {
    chairNumber?: true
    rating?: true
    baseSalary?: true
    commissionRate?: true
  }

  export type SpecialistSumAggregateInputType = {
    chairNumber?: true
    rating?: true
    baseSalary?: true
    commissionRate?: true
  }

  export type SpecialistMinAggregateInputType = {
    id?: true
    userId?: true
    branchId?: true
    name?: true
    phone?: true
    photo?: true
    title?: true
    chairNumber?: true
    status?: true
    rating?: true
    payType?: true
    baseSalary?: true
    commissionRate?: true
    isActive?: true
    createdAt?: true
  }

  export type SpecialistMaxAggregateInputType = {
    id?: true
    userId?: true
    branchId?: true
    name?: true
    phone?: true
    photo?: true
    title?: true
    chairNumber?: true
    status?: true
    rating?: true
    payType?: true
    baseSalary?: true
    commissionRate?: true
    isActive?: true
    createdAt?: true
  }

  export type SpecialistCountAggregateInputType = {
    id?: true
    userId?: true
    branchId?: true
    name?: true
    phone?: true
    photo?: true
    title?: true
    chairNumber?: true
    status?: true
    rating?: true
    payType?: true
    baseSalary?: true
    commissionRate?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type SpecialistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialist to aggregate.
     */
    where?: SpecialistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialists to fetch.
     */
    orderBy?: SpecialistOrderByWithRelationInput | SpecialistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Specialists
    **/
    _count?: true | SpecialistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecialistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecialistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialistMaxAggregateInputType
  }

  export type GetSpecialistAggregateType<T extends SpecialistAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialist[P]>
      : GetScalarType<T[P], AggregateSpecialist[P]>
  }




  export type SpecialistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialistWhereInput
    orderBy?: SpecialistOrderByWithAggregationInput | SpecialistOrderByWithAggregationInput[]
    by: SpecialistScalarFieldEnum[] | SpecialistScalarFieldEnum
    having?: SpecialistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialistCountAggregateInputType | true
    _avg?: SpecialistAvgAggregateInputType
    _sum?: SpecialistSumAggregateInputType
    _min?: SpecialistMinAggregateInputType
    _max?: SpecialistMaxAggregateInputType
  }

  export type SpecialistGroupByOutputType = {
    id: string
    userId: string | null
    branchId: string
    name: string
    phone: string | null
    photo: string | null
    title: string
    chairNumber: number
    status: string
    rating: number
    payType: string
    baseSalary: number
    commissionRate: number
    isActive: boolean
    createdAt: Date
    _count: SpecialistCountAggregateOutputType | null
    _avg: SpecialistAvgAggregateOutputType | null
    _sum: SpecialistSumAggregateOutputType | null
    _min: SpecialistMinAggregateOutputType | null
    _max: SpecialistMaxAggregateOutputType | null
  }

  type GetSpecialistGroupByPayload<T extends SpecialistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialistGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialistGroupByOutputType[P]>
        }
      >
    >


  export type SpecialistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    branchId?: boolean
    name?: boolean
    phone?: boolean
    photo?: boolean
    title?: boolean
    chairNumber?: boolean
    status?: boolean
    rating?: boolean
    payType?: boolean
    baseSalary?: boolean
    commissionRate?: boolean
    isActive?: boolean
    createdAt?: boolean
    user?: boolean | Specialist$userArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    bookings?: boolean | Specialist$bookingsArgs<ExtArgs>
    tickets?: boolean | Specialist$ticketsArgs<ExtArgs>
    ledgers?: boolean | Specialist$ledgersArgs<ExtArgs>
    _count?: boolean | SpecialistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialist"]>

  export type SpecialistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    branchId?: boolean
    name?: boolean
    phone?: boolean
    photo?: boolean
    title?: boolean
    chairNumber?: boolean
    status?: boolean
    rating?: boolean
    payType?: boolean
    baseSalary?: boolean
    commissionRate?: boolean
    isActive?: boolean
    createdAt?: boolean
    user?: boolean | Specialist$userArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialist"]>

  export type SpecialistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    branchId?: boolean
    name?: boolean
    phone?: boolean
    photo?: boolean
    title?: boolean
    chairNumber?: boolean
    status?: boolean
    rating?: boolean
    payType?: boolean
    baseSalary?: boolean
    commissionRate?: boolean
    isActive?: boolean
    createdAt?: boolean
    user?: boolean | Specialist$userArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialist"]>

  export type SpecialistSelectScalar = {
    id?: boolean
    userId?: boolean
    branchId?: boolean
    name?: boolean
    phone?: boolean
    photo?: boolean
    title?: boolean
    chairNumber?: boolean
    status?: boolean
    rating?: boolean
    payType?: boolean
    baseSalary?: boolean
    commissionRate?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type SpecialistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "branchId" | "name" | "phone" | "photo" | "title" | "chairNumber" | "status" | "rating" | "payType" | "baseSalary" | "commissionRate" | "isActive" | "createdAt", ExtArgs["result"]["specialist"]>
  export type SpecialistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Specialist$userArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    bookings?: boolean | Specialist$bookingsArgs<ExtArgs>
    tickets?: boolean | Specialist$ticketsArgs<ExtArgs>
    ledgers?: boolean | Specialist$ledgersArgs<ExtArgs>
    _count?: boolean | SpecialistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpecialistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Specialist$userArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type SpecialistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Specialist$userArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }

  export type $SpecialistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Specialist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      branch: Prisma.$BranchPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      ledgers: Prisma.$SpecialistLedgerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      branchId: string
      name: string
      phone: string | null
      photo: string | null
      title: string
      chairNumber: number
      status: string
      rating: number
      payType: string
      baseSalary: number
      commissionRate: number
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["specialist"]>
    composites: {}
  }

  type SpecialistGetPayload<S extends boolean | null | undefined | SpecialistDefaultArgs> = $Result.GetResult<Prisma.$SpecialistPayload, S>

  type SpecialistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecialistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialistCountAggregateInputType | true
    }

  export interface SpecialistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Specialist'], meta: { name: 'Specialist' } }
    /**
     * Find zero or one Specialist that matches the filter.
     * @param {SpecialistFindUniqueArgs} args - Arguments to find a Specialist
     * @example
     * // Get one Specialist
     * const specialist = await prisma.specialist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialistFindUniqueArgs>(args: SelectSubset<T, SpecialistFindUniqueArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Specialist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecialistFindUniqueOrThrowArgs} args - Arguments to find a Specialist
     * @example
     * // Get one Specialist
     * const specialist = await prisma.specialist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialistFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistFindFirstArgs} args - Arguments to find a Specialist
     * @example
     * // Get one Specialist
     * const specialist = await prisma.specialist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialistFindFirstArgs>(args?: SelectSubset<T, SpecialistFindFirstArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistFindFirstOrThrowArgs} args - Arguments to find a Specialist
     * @example
     * // Get one Specialist
     * const specialist = await prisma.specialist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialistFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialistFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Specialists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specialists
     * const specialists = await prisma.specialist.findMany()
     * 
     * // Get first 10 Specialists
     * const specialists = await prisma.specialist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialistWithIdOnly = await prisma.specialist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecialistFindManyArgs>(args?: SelectSubset<T, SpecialistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Specialist.
     * @param {SpecialistCreateArgs} args - Arguments to create a Specialist.
     * @example
     * // Create one Specialist
     * const Specialist = await prisma.specialist.create({
     *   data: {
     *     // ... data to create a Specialist
     *   }
     * })
     * 
     */
    create<T extends SpecialistCreateArgs>(args: SelectSubset<T, SpecialistCreateArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Specialists.
     * @param {SpecialistCreateManyArgs} args - Arguments to create many Specialists.
     * @example
     * // Create many Specialists
     * const specialist = await prisma.specialist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialistCreateManyArgs>(args?: SelectSubset<T, SpecialistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Specialists and returns the data saved in the database.
     * @param {SpecialistCreateManyAndReturnArgs} args - Arguments to create many Specialists.
     * @example
     * // Create many Specialists
     * const specialist = await prisma.specialist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Specialists and only return the `id`
     * const specialistWithIdOnly = await prisma.specialist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecialistCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecialistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Specialist.
     * @param {SpecialistDeleteArgs} args - Arguments to delete one Specialist.
     * @example
     * // Delete one Specialist
     * const Specialist = await prisma.specialist.delete({
     *   where: {
     *     // ... filter to delete one Specialist
     *   }
     * })
     * 
     */
    delete<T extends SpecialistDeleteArgs>(args: SelectSubset<T, SpecialistDeleteArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Specialist.
     * @param {SpecialistUpdateArgs} args - Arguments to update one Specialist.
     * @example
     * // Update one Specialist
     * const specialist = await prisma.specialist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialistUpdateArgs>(args: SelectSubset<T, SpecialistUpdateArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Specialists.
     * @param {SpecialistDeleteManyArgs} args - Arguments to filter Specialists to delete.
     * @example
     * // Delete a few Specialists
     * const { count } = await prisma.specialist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialistDeleteManyArgs>(args?: SelectSubset<T, SpecialistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specialists
     * const specialist = await prisma.specialist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialistUpdateManyArgs>(args: SelectSubset<T, SpecialistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialists and returns the data updated in the database.
     * @param {SpecialistUpdateManyAndReturnArgs} args - Arguments to update many Specialists.
     * @example
     * // Update many Specialists
     * const specialist = await prisma.specialist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Specialists and only return the `id`
     * const specialistWithIdOnly = await prisma.specialist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpecialistUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecialistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Specialist.
     * @param {SpecialistUpsertArgs} args - Arguments to update or create a Specialist.
     * @example
     * // Update or create a Specialist
     * const specialist = await prisma.specialist.upsert({
     *   create: {
     *     // ... data to create a Specialist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specialist we want to update
     *   }
     * })
     */
    upsert<T extends SpecialistUpsertArgs>(args: SelectSubset<T, SpecialistUpsertArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Specialists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistCountArgs} args - Arguments to filter Specialists to count.
     * @example
     * // Count the number of Specialists
     * const count = await prisma.specialist.count({
     *   where: {
     *     // ... the filter for the Specialists we want to count
     *   }
     * })
    **/
    count<T extends SpecialistCountArgs>(
      args?: Subset<T, SpecialistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specialist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpecialistAggregateArgs>(args: Subset<T, SpecialistAggregateArgs>): Prisma.PrismaPromise<GetSpecialistAggregateType<T>>

    /**
     * Group by Specialist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistGroupByArgs} args - Group by arguments.
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
      T extends SpecialistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialistGroupByArgs['orderBy'] }
        : { orderBy?: SpecialistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SpecialistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Specialist model
   */
  readonly fields: SpecialistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Specialist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Specialist$userArgs<ExtArgs> = {}>(args?: Subset<T, Specialist$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Specialist$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Specialist$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Specialist$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Specialist$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ledgers<T extends Specialist$ledgersArgs<ExtArgs> = {}>(args?: Subset<T, Specialist$ledgersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialistLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Specialist model
   */
  interface SpecialistFieldRefs {
    readonly id: FieldRef<"Specialist", 'String'>
    readonly userId: FieldRef<"Specialist", 'String'>
    readonly branchId: FieldRef<"Specialist", 'String'>
    readonly name: FieldRef<"Specialist", 'String'>
    readonly phone: FieldRef<"Specialist", 'String'>
    readonly photo: FieldRef<"Specialist", 'String'>
    readonly title: FieldRef<"Specialist", 'String'>
    readonly chairNumber: FieldRef<"Specialist", 'Int'>
    readonly status: FieldRef<"Specialist", 'String'>
    readonly rating: FieldRef<"Specialist", 'Float'>
    readonly payType: FieldRef<"Specialist", 'String'>
    readonly baseSalary: FieldRef<"Specialist", 'Float'>
    readonly commissionRate: FieldRef<"Specialist", 'Float'>
    readonly isActive: FieldRef<"Specialist", 'Boolean'>
    readonly createdAt: FieldRef<"Specialist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Specialist findUnique
   */
  export type SpecialistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    /**
     * Filter, which Specialist to fetch.
     */
    where: SpecialistWhereUniqueInput
  }

  /**
   * Specialist findUniqueOrThrow
   */
  export type SpecialistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    /**
     * Filter, which Specialist to fetch.
     */
    where: SpecialistWhereUniqueInput
  }

  /**
   * Specialist findFirst
   */
  export type SpecialistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    /**
     * Filter, which Specialist to fetch.
     */
    where?: SpecialistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialists to fetch.
     */
    orderBy?: SpecialistOrderByWithRelationInput | SpecialistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialists.
     */
    cursor?: SpecialistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialists.
     */
    distinct?: SpecialistScalarFieldEnum | SpecialistScalarFieldEnum[]
  }

  /**
   * Specialist findFirstOrThrow
   */
  export type SpecialistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    /**
     * Filter, which Specialist to fetch.
     */
    where?: SpecialistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialists to fetch.
     */
    orderBy?: SpecialistOrderByWithRelationInput | SpecialistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialists.
     */
    cursor?: SpecialistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialists.
     */
    distinct?: SpecialistScalarFieldEnum | SpecialistScalarFieldEnum[]
  }

  /**
   * Specialist findMany
   */
  export type SpecialistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    /**
     * Filter, which Specialists to fetch.
     */
    where?: SpecialistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialists to fetch.
     */
    orderBy?: SpecialistOrderByWithRelationInput | SpecialistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Specialists.
     */
    cursor?: SpecialistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialists.
     */
    distinct?: SpecialistScalarFieldEnum | SpecialistScalarFieldEnum[]
  }

  /**
   * Specialist create
   */
  export type SpecialistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    /**
     * The data needed to create a Specialist.
     */
    data: XOR<SpecialistCreateInput, SpecialistUncheckedCreateInput>
  }

  /**
   * Specialist createMany
   */
  export type SpecialistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Specialists.
     */
    data: SpecialistCreateManyInput | SpecialistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specialist createManyAndReturn
   */
  export type SpecialistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null
    /**
     * The data used to create many Specialists.
     */
    data: SpecialistCreateManyInput | SpecialistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Specialist update
   */
  export type SpecialistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    /**
     * The data needed to update a Specialist.
     */
    data: XOR<SpecialistUpdateInput, SpecialistUncheckedUpdateInput>
    /**
     * Choose, which Specialist to update.
     */
    where: SpecialistWhereUniqueInput
  }

  /**
   * Specialist updateMany
   */
  export type SpecialistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Specialists.
     */
    data: XOR<SpecialistUpdateManyMutationInput, SpecialistUncheckedUpdateManyInput>
    /**
     * Filter which Specialists to update
     */
    where?: SpecialistWhereInput
    /**
     * Limit how many Specialists to update.
     */
    limit?: number
  }

  /**
   * Specialist updateManyAndReturn
   */
  export type SpecialistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null
    /**
     * The data used to update Specialists.
     */
    data: XOR<SpecialistUpdateManyMutationInput, SpecialistUncheckedUpdateManyInput>
    /**
     * Filter which Specialists to update
     */
    where?: SpecialistWhereInput
    /**
     * Limit how many Specialists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Specialist upsert
   */
  export type SpecialistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    /**
     * The filter to search for the Specialist to update in case it exists.
     */
    where: SpecialistWhereUniqueInput
    /**
     * In case the Specialist found by the `where` argument doesn't exist, create a new Specialist with this data.
     */
    create: XOR<SpecialistCreateInput, SpecialistUncheckedCreateInput>
    /**
     * In case the Specialist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialistUpdateInput, SpecialistUncheckedUpdateInput>
  }

  /**
   * Specialist delete
   */
  export type SpecialistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    /**
     * Filter which Specialist to delete.
     */
    where: SpecialistWhereUniqueInput
  }

  /**
   * Specialist deleteMany
   */
  export type SpecialistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialists to delete
     */
    where?: SpecialistWhereInput
    /**
     * Limit how many Specialists to delete.
     */
    limit?: number
  }

  /**
   * Specialist.user
   */
  export type Specialist$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Specialist.bookings
   */
  export type Specialist$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Specialist.tickets
   */
  export type Specialist$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Specialist.ledgers
   */
  export type Specialist$ledgersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistLedger
     */
    select?: SpecialistLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistLedger
     */
    omit?: SpecialistLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistLedgerInclude<ExtArgs> | null
    where?: SpecialistLedgerWhereInput
    orderBy?: SpecialistLedgerOrderByWithRelationInput | SpecialistLedgerOrderByWithRelationInput[]
    cursor?: SpecialistLedgerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecialistLedgerScalarFieldEnum | SpecialistLedgerScalarFieldEnum[]
  }

  /**
   * Specialist without action
   */
  export type SpecialistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    price: number | null
    durationMinutes: number | null
    sortOrder: number | null
  }

  export type ServiceSumAggregateOutputType = {
    price: number | null
    durationMinutes: number | null
    sortOrder: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    nameAr: string | null
    nameEn: string | null
    category: string | null
    price: number | null
    durationMinutes: number | null
    description: string | null
    image: string | null
    sortOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    nameAr: string | null
    nameEn: string | null
    category: string | null
    price: number | null
    durationMinutes: number | null
    description: string | null
    image: string | null
    sortOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    nameAr: number
    nameEn: number
    category: number
    price: number
    durationMinutes: number
    description: number
    image: number
    sortOrder: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    price?: true
    durationMinutes?: true
    sortOrder?: true
  }

  export type ServiceSumAggregateInputType = {
    price?: true
    durationMinutes?: true
    sortOrder?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    nameAr?: true
    nameEn?: true
    category?: true
    price?: true
    durationMinutes?: true
    description?: true
    image?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    nameAr?: true
    nameEn?: true
    category?: true
    price?: true
    durationMinutes?: true
    description?: true
    image?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    nameAr?: true
    nameEn?: true
    category?: true
    price?: true
    durationMinutes?: true
    description?: true
    image?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    nameAr: string
    nameEn: string | null
    category: string
    price: number
    durationMinutes: number
    description: string | null
    image: string | null
    sortOrder: number
    isActive: boolean
    createdAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameAr?: boolean
    nameEn?: boolean
    category?: boolean
    price?: boolean
    durationMinutes?: boolean
    description?: boolean
    image?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameAr?: boolean
    nameEn?: boolean
    category?: boolean
    price?: boolean
    durationMinutes?: boolean
    description?: boolean
    image?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameAr?: boolean
    nameEn?: boolean
    category?: boolean
    price?: boolean
    durationMinutes?: boolean
    description?: boolean
    image?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    nameAr?: boolean
    nameEn?: boolean
    category?: boolean
    price?: boolean
    durationMinutes?: boolean
    description?: boolean
    image?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameAr" | "nameEn" | "category" | "price" | "durationMinutes" | "description" | "image" | "sortOrder" | "isActive" | "createdAt", ExtArgs["result"]["service"]>

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameAr: string
      nameEn: string | null
      category: string
      price: number
      durationMinutes: number
      description: string | null
      image: string | null
      sortOrder: number
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly nameAr: FieldRef<"Service", 'String'>
    readonly nameEn: FieldRef<"Service", 'String'>
    readonly category: FieldRef<"Service", 'String'>
    readonly price: FieldRef<"Service", 'Float'>
    readonly durationMinutes: FieldRef<"Service", 'Int'>
    readonly description: FieldRef<"Service", 'String'>
    readonly image: FieldRef<"Service", 'String'>
    readonly sortOrder: FieldRef<"Service", 'Int'>
    readonly isActive: FieldRef<"Service", 'Boolean'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    totalVisits: number | null
    totalSpent: number | null
  }

  export type CustomerSumAggregateOutputType = {
    totalVisits: number | null
    totalSpent: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    passwordHash: string | null
    isVerified: boolean | null
    verificationCode: string | null
    avatar: string | null
    notes: string | null
    vipLevel: string | null
    totalVisits: number | null
    totalSpent: number | null
    createdAt: Date | null
    lastVisitAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    passwordHash: string | null
    isVerified: boolean | null
    verificationCode: string | null
    avatar: string | null
    notes: string | null
    vipLevel: string | null
    totalVisits: number | null
    totalSpent: number | null
    createdAt: Date | null
    lastVisitAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    passwordHash: number
    isVerified: number
    verificationCode: number
    avatar: number
    notes: number
    vipLevel: number
    totalVisits: number
    totalSpent: number
    createdAt: number
    lastVisitAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    totalVisits?: true
    totalSpent?: true
  }

  export type CustomerSumAggregateInputType = {
    totalVisits?: true
    totalSpent?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    passwordHash?: true
    isVerified?: true
    verificationCode?: true
    avatar?: true
    notes?: true
    vipLevel?: true
    totalVisits?: true
    totalSpent?: true
    createdAt?: true
    lastVisitAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    passwordHash?: true
    isVerified?: true
    verificationCode?: true
    avatar?: true
    notes?: true
    vipLevel?: true
    totalVisits?: true
    totalSpent?: true
    createdAt?: true
    lastVisitAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    passwordHash?: true
    isVerified?: true
    verificationCode?: true
    avatar?: true
    notes?: true
    vipLevel?: true
    totalVisits?: true
    totalSpent?: true
    createdAt?: true
    lastVisitAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    phone: string
    email: string | null
    passwordHash: string | null
    isVerified: boolean
    verificationCode: string | null
    avatar: string | null
    notes: string | null
    vipLevel: string
    totalVisits: number
    totalSpent: number
    createdAt: Date
    lastVisitAt: Date | null
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    passwordHash?: boolean
    isVerified?: boolean
    verificationCode?: boolean
    avatar?: boolean
    notes?: boolean
    vipLevel?: boolean
    totalVisits?: boolean
    totalSpent?: boolean
    createdAt?: boolean
    lastVisitAt?: boolean
    bookings?: boolean | Customer$bookingsArgs<ExtArgs>
    tickets?: boolean | Customer$ticketsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    passwordHash?: boolean
    isVerified?: boolean
    verificationCode?: boolean
    avatar?: boolean
    notes?: boolean
    vipLevel?: boolean
    totalVisits?: boolean
    totalSpent?: boolean
    createdAt?: boolean
    lastVisitAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    passwordHash?: boolean
    isVerified?: boolean
    verificationCode?: boolean
    avatar?: boolean
    notes?: boolean
    vipLevel?: boolean
    totalVisits?: boolean
    totalSpent?: boolean
    createdAt?: boolean
    lastVisitAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    passwordHash?: boolean
    isVerified?: boolean
    verificationCode?: boolean
    avatar?: boolean
    notes?: boolean
    vipLevel?: boolean
    totalVisits?: boolean
    totalSpent?: boolean
    createdAt?: boolean
    lastVisitAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "passwordHash" | "isVerified" | "verificationCode" | "avatar" | "notes" | "vipLevel" | "totalVisits" | "totalSpent" | "createdAt" | "lastVisitAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Customer$bookingsArgs<ExtArgs>
    tickets?: boolean | Customer$ticketsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      email: string | null
      passwordHash: string | null
      isVerified: boolean
      verificationCode: string | null
      avatar: string | null
      notes: string | null
      vipLevel: string
      totalVisits: number
      totalSpent: number
      createdAt: Date
      lastVisitAt: Date | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Customer$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Customer$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly passwordHash: FieldRef<"Customer", 'String'>
    readonly isVerified: FieldRef<"Customer", 'Boolean'>
    readonly verificationCode: FieldRef<"Customer", 'String'>
    readonly avatar: FieldRef<"Customer", 'String'>
    readonly notes: FieldRef<"Customer", 'String'>
    readonly vipLevel: FieldRef<"Customer", 'String'>
    readonly totalVisits: FieldRef<"Customer", 'Int'>
    readonly totalSpent: FieldRef<"Customer", 'Float'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly lastVisitAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.bookings
   */
  export type Customer$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Customer.tickets
   */
  export type Customer$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    totalAmount: number | null
  }

  export type BookingSumAggregateOutputType = {
    totalAmount: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    bookingNumber: string | null
    customerId: string | null
    branchId: string | null
    specialistId: string | null
    serviceIds: string | null
    bookingDate: string | null
    timeSlot: string | null
    status: string | null
    notes: string | null
    totalAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    bookingNumber: string | null
    customerId: string | null
    branchId: string | null
    specialistId: string | null
    serviceIds: string | null
    bookingDate: string | null
    timeSlot: string | null
    status: string | null
    notes: string | null
    totalAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    bookingNumber: number
    customerId: number
    branchId: number
    specialistId: number
    serviceIds: number
    bookingDate: number
    timeSlot: number
    status: number
    notes: number
    totalAmount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    totalAmount?: true
  }

  export type BookingSumAggregateInputType = {
    totalAmount?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    bookingNumber?: true
    customerId?: true
    branchId?: true
    specialistId?: true
    serviceIds?: true
    bookingDate?: true
    timeSlot?: true
    status?: true
    notes?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    bookingNumber?: true
    customerId?: true
    branchId?: true
    specialistId?: true
    serviceIds?: true
    bookingDate?: true
    timeSlot?: true
    status?: true
    notes?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    bookingNumber?: true
    customerId?: true
    branchId?: true
    specialistId?: true
    serviceIds?: true
    bookingDate?: true
    timeSlot?: true
    status?: true
    notes?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    bookingNumber: string
    customerId: string
    branchId: string
    specialistId: string | null
    serviceIds: string
    bookingDate: string
    timeSlot: string
    status: string
    notes: string | null
    totalAmount: number
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingNumber?: boolean
    customerId?: boolean
    branchId?: boolean
    specialistId?: boolean
    serviceIds?: boolean
    bookingDate?: boolean
    timeSlot?: boolean
    status?: boolean
    notes?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    specialist?: boolean | Booking$specialistArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingNumber?: boolean
    customerId?: boolean
    branchId?: boolean
    specialistId?: boolean
    serviceIds?: boolean
    bookingDate?: boolean
    timeSlot?: boolean
    status?: boolean
    notes?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    specialist?: boolean | Booking$specialistArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingNumber?: boolean
    customerId?: boolean
    branchId?: boolean
    specialistId?: boolean
    serviceIds?: boolean
    bookingDate?: boolean
    timeSlot?: boolean
    status?: boolean
    notes?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    specialist?: boolean | Booking$specialistArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    bookingNumber?: boolean
    customerId?: boolean
    branchId?: boolean
    specialistId?: boolean
    serviceIds?: boolean
    bookingDate?: boolean
    timeSlot?: boolean
    status?: boolean
    notes?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingNumber" | "customerId" | "branchId" | "specialistId" | "serviceIds" | "bookingDate" | "timeSlot" | "status" | "notes" | "totalAmount" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    specialist?: boolean | Booking$specialistArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    specialist?: boolean | Booking$specialistArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    specialist?: boolean | Booking$specialistArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      branch: Prisma.$BranchPayload<ExtArgs>
      specialist: Prisma.$SpecialistPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingNumber: string
      customerId: string
      branchId: string
      specialistId: string | null
      serviceIds: string
      bookingDate: string
      timeSlot: string
      status: string
      notes: string | null
      totalAmount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    specialist<T extends Booking$specialistArgs<ExtArgs> = {}>(args?: Subset<T, Booking$specialistArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly bookingNumber: FieldRef<"Booking", 'String'>
    readonly customerId: FieldRef<"Booking", 'String'>
    readonly branchId: FieldRef<"Booking", 'String'>
    readonly specialistId: FieldRef<"Booking", 'String'>
    readonly serviceIds: FieldRef<"Booking", 'String'>
    readonly bookingDate: FieldRef<"Booking", 'String'>
    readonly timeSlot: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'String'>
    readonly notes: FieldRef<"Booking", 'String'>
    readonly totalAmount: FieldRef<"Booking", 'Float'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.specialist
   */
  export type Booking$specialistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialist
     */
    select?: SpecialistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialist
     */
    omit?: SpecialistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistInclude<ExtArgs> | null
    where?: SpecialistWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    chairNumber: number | null
    servicesTotal: number | null
    retailTotal: number | null
    discount: number | null
    tipAmount: number | null
    finalAmount: number | null
    durationMinutes: number | null
  }

  export type TicketSumAggregateOutputType = {
    chairNumber: number | null
    servicesTotal: number | null
    retailTotal: number | null
    discount: number | null
    tipAmount: number | null
    finalAmount: number | null
    durationMinutes: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    ticketNumber: string | null
    branchId: string | null
    specialistId: string | null
    customerId: string | null
    customerName: string | null
    customerPhone: string | null
    chairNumber: number | null
    status: string | null
    services: string | null
    retailItems: string | null
    servicesTotal: number | null
    retailTotal: number | null
    discount: number | null
    tipAmount: number | null
    finalAmount: number | null
    paymentMethod: string | null
    startTime: Date | null
    endTime: Date | null
    durationMinutes: number | null
    cashierName: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    ticketNumber: string | null
    branchId: string | null
    specialistId: string | null
    customerId: string | null
    customerName: string | null
    customerPhone: string | null
    chairNumber: number | null
    status: string | null
    services: string | null
    retailItems: string | null
    servicesTotal: number | null
    retailTotal: number | null
    discount: number | null
    tipAmount: number | null
    finalAmount: number | null
    paymentMethod: string | null
    startTime: Date | null
    endTime: Date | null
    durationMinutes: number | null
    cashierName: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    ticketNumber: number
    branchId: number
    specialistId: number
    customerId: number
    customerName: number
    customerPhone: number
    chairNumber: number
    status: number
    services: number
    retailItems: number
    servicesTotal: number
    retailTotal: number
    discount: number
    tipAmount: number
    finalAmount: number
    paymentMethod: number
    startTime: number
    endTime: number
    durationMinutes: number
    cashierName: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    chairNumber?: true
    servicesTotal?: true
    retailTotal?: true
    discount?: true
    tipAmount?: true
    finalAmount?: true
    durationMinutes?: true
  }

  export type TicketSumAggregateInputType = {
    chairNumber?: true
    servicesTotal?: true
    retailTotal?: true
    discount?: true
    tipAmount?: true
    finalAmount?: true
    durationMinutes?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    ticketNumber?: true
    branchId?: true
    specialistId?: true
    customerId?: true
    customerName?: true
    customerPhone?: true
    chairNumber?: true
    status?: true
    services?: true
    retailItems?: true
    servicesTotal?: true
    retailTotal?: true
    discount?: true
    tipAmount?: true
    finalAmount?: true
    paymentMethod?: true
    startTime?: true
    endTime?: true
    durationMinutes?: true
    cashierName?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    ticketNumber?: true
    branchId?: true
    specialistId?: true
    customerId?: true
    customerName?: true
    customerPhone?: true
    chairNumber?: true
    status?: true
    services?: true
    retailItems?: true
    servicesTotal?: true
    retailTotal?: true
    discount?: true
    tipAmount?: true
    finalAmount?: true
    paymentMethod?: true
    startTime?: true
    endTime?: true
    durationMinutes?: true
    cashierName?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    ticketNumber?: true
    branchId?: true
    specialistId?: true
    customerId?: true
    customerName?: true
    customerPhone?: true
    chairNumber?: true
    status?: true
    services?: true
    retailItems?: true
    servicesTotal?: true
    retailTotal?: true
    discount?: true
    tipAmount?: true
    finalAmount?: true
    paymentMethod?: true
    startTime?: true
    endTime?: true
    durationMinutes?: true
    cashierName?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    ticketNumber: string
    branchId: string
    specialistId: string
    customerId: string | null
    customerName: string
    customerPhone: string | null
    chairNumber: number
    status: string
    services: string
    retailItems: string
    servicesTotal: number
    retailTotal: number
    discount: number
    tipAmount: number
    finalAmount: number
    paymentMethod: string
    startTime: Date
    endTime: Date | null
    durationMinutes: number | null
    cashierName: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketNumber?: boolean
    branchId?: boolean
    specialistId?: boolean
    customerId?: boolean
    customerName?: boolean
    customerPhone?: boolean
    chairNumber?: boolean
    status?: boolean
    services?: boolean
    retailItems?: boolean
    servicesTotal?: boolean
    retailTotal?: boolean
    discount?: boolean
    tipAmount?: boolean
    finalAmount?: boolean
    paymentMethod?: boolean
    startTime?: boolean
    endTime?: boolean
    durationMinutes?: boolean
    cashierName?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>
    customer?: boolean | Ticket$customerArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketNumber?: boolean
    branchId?: boolean
    specialistId?: boolean
    customerId?: boolean
    customerName?: boolean
    customerPhone?: boolean
    chairNumber?: boolean
    status?: boolean
    services?: boolean
    retailItems?: boolean
    servicesTotal?: boolean
    retailTotal?: boolean
    discount?: boolean
    tipAmount?: boolean
    finalAmount?: boolean
    paymentMethod?: boolean
    startTime?: boolean
    endTime?: boolean
    durationMinutes?: boolean
    cashierName?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>
    customer?: boolean | Ticket$customerArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketNumber?: boolean
    branchId?: boolean
    specialistId?: boolean
    customerId?: boolean
    customerName?: boolean
    customerPhone?: boolean
    chairNumber?: boolean
    status?: boolean
    services?: boolean
    retailItems?: boolean
    servicesTotal?: boolean
    retailTotal?: boolean
    discount?: boolean
    tipAmount?: boolean
    finalAmount?: boolean
    paymentMethod?: boolean
    startTime?: boolean
    endTime?: boolean
    durationMinutes?: boolean
    cashierName?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>
    customer?: boolean | Ticket$customerArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    ticketNumber?: boolean
    branchId?: boolean
    specialistId?: boolean
    customerId?: boolean
    customerName?: boolean
    customerPhone?: boolean
    chairNumber?: boolean
    status?: boolean
    services?: boolean
    retailItems?: boolean
    servicesTotal?: boolean
    retailTotal?: boolean
    discount?: boolean
    tipAmount?: boolean
    finalAmount?: boolean
    paymentMethod?: boolean
    startTime?: boolean
    endTime?: boolean
    durationMinutes?: boolean
    cashierName?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketNumber" | "branchId" | "specialistId" | "customerId" | "customerName" | "customerPhone" | "chairNumber" | "status" | "services" | "retailItems" | "servicesTotal" | "retailTotal" | "discount" | "tipAmount" | "finalAmount" | "paymentMethod" | "startTime" | "endTime" | "durationMinutes" | "cashierName" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>
    customer?: boolean | Ticket$customerArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>
    customer?: boolean | Ticket$customerArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>
    customer?: boolean | Ticket$customerArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>
      specialist: Prisma.$SpecialistPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketNumber: string
      branchId: string
      specialistId: string
      customerId: string | null
      customerName: string
      customerPhone: string | null
      chairNumber: number
      status: string
      services: string
      retailItems: string
      servicesTotal: number
      retailTotal: number
      discount: number
      tipAmount: number
      finalAmount: number
      paymentMethod: string
      startTime: Date
      endTime: Date | null
      durationMinutes: number | null
      cashierName: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    specialist<T extends SpecialistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecialistDefaultArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends Ticket$customerArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly ticketNumber: FieldRef<"Ticket", 'String'>
    readonly branchId: FieldRef<"Ticket", 'String'>
    readonly specialistId: FieldRef<"Ticket", 'String'>
    readonly customerId: FieldRef<"Ticket", 'String'>
    readonly customerName: FieldRef<"Ticket", 'String'>
    readonly customerPhone: FieldRef<"Ticket", 'String'>
    readonly chairNumber: FieldRef<"Ticket", 'Int'>
    readonly status: FieldRef<"Ticket", 'String'>
    readonly services: FieldRef<"Ticket", 'String'>
    readonly retailItems: FieldRef<"Ticket", 'String'>
    readonly servicesTotal: FieldRef<"Ticket", 'Float'>
    readonly retailTotal: FieldRef<"Ticket", 'Float'>
    readonly discount: FieldRef<"Ticket", 'Float'>
    readonly tipAmount: FieldRef<"Ticket", 'Float'>
    readonly finalAmount: FieldRef<"Ticket", 'Float'>
    readonly paymentMethod: FieldRef<"Ticket", 'String'>
    readonly startTime: FieldRef<"Ticket", 'DateTime'>
    readonly endTime: FieldRef<"Ticket", 'DateTime'>
    readonly durationMinutes: FieldRef<"Ticket", 'Int'>
    readonly cashierName: FieldRef<"Ticket", 'String'>
    readonly notes: FieldRef<"Ticket", 'String'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.customer
   */
  export type Ticket$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
    costPrice: number | null
    stockQty: number | null
    minStockAlert: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
    costPrice: number | null
    stockQty: number | null
    minStockAlert: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    branchId: string | null
    nameAr: string | null
    category: string | null
    price: number | null
    costPrice: number | null
    stockQty: number | null
    minStockAlert: number | null
    image: string | null
    barcode: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    branchId: string | null
    nameAr: string | null
    category: string | null
    price: number | null
    costPrice: number | null
    stockQty: number | null
    minStockAlert: number | null
    image: string | null
    barcode: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    branchId: number
    nameAr: number
    category: number
    price: number
    costPrice: number
    stockQty: number
    minStockAlert: number
    image: number
    barcode: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    costPrice?: true
    stockQty?: true
    minStockAlert?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    costPrice?: true
    stockQty?: true
    minStockAlert?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    branchId?: true
    nameAr?: true
    category?: true
    price?: true
    costPrice?: true
    stockQty?: true
    minStockAlert?: true
    image?: true
    barcode?: true
    isActive?: true
    createdAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    branchId?: true
    nameAr?: true
    category?: true
    price?: true
    costPrice?: true
    stockQty?: true
    minStockAlert?: true
    image?: true
    barcode?: true
    isActive?: true
    createdAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    branchId?: true
    nameAr?: true
    category?: true
    price?: true
    costPrice?: true
    stockQty?: true
    minStockAlert?: true
    image?: true
    barcode?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    branchId: string | null
    nameAr: string
    category: string
    price: number
    costPrice: number
    stockQty: number
    minStockAlert: number
    image: string | null
    barcode: string | null
    isActive: boolean
    createdAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    nameAr?: boolean
    category?: boolean
    price?: boolean
    costPrice?: boolean
    stockQty?: boolean
    minStockAlert?: boolean
    image?: boolean
    barcode?: boolean
    isActive?: boolean
    createdAt?: boolean
    branch?: boolean | Product$branchArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    nameAr?: boolean
    category?: boolean
    price?: boolean
    costPrice?: boolean
    stockQty?: boolean
    minStockAlert?: boolean
    image?: boolean
    barcode?: boolean
    isActive?: boolean
    createdAt?: boolean
    branch?: boolean | Product$branchArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    nameAr?: boolean
    category?: boolean
    price?: boolean
    costPrice?: boolean
    stockQty?: boolean
    minStockAlert?: boolean
    image?: boolean
    barcode?: boolean
    isActive?: boolean
    createdAt?: boolean
    branch?: boolean | Product$branchArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    branchId?: boolean
    nameAr?: boolean
    category?: boolean
    price?: boolean
    costPrice?: boolean
    stockQty?: boolean
    minStockAlert?: boolean
    image?: boolean
    barcode?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "branchId" | "nameAr" | "category" | "price" | "costPrice" | "stockQty" | "minStockAlert" | "image" | "barcode" | "isActive" | "createdAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | Product$branchArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | Product$branchArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | Product$branchArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      branchId: string | null
      nameAr: string
      category: string
      price: number
      costPrice: number
      stockQty: number
      minStockAlert: number
      image: string | null
      barcode: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends Product$branchArgs<ExtArgs> = {}>(args?: Subset<T, Product$branchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly branchId: FieldRef<"Product", 'String'>
    readonly nameAr: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly costPrice: FieldRef<"Product", 'Float'>
    readonly stockQty: FieldRef<"Product", 'Int'>
    readonly minStockAlert: FieldRef<"Product", 'Int'>
    readonly image: FieldRef<"Product", 'String'>
    readonly barcode: FieldRef<"Product", 'String'>
    readonly isActive: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.branch
   */
  export type Product$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model SpecialistLedger
   */

  export type AggregateSpecialistLedger = {
    _count: SpecialistLedgerCountAggregateOutputType | null
    _avg: SpecialistLedgerAvgAggregateOutputType | null
    _sum: SpecialistLedgerSumAggregateOutputType | null
    _min: SpecialistLedgerMinAggregateOutputType | null
    _max: SpecialistLedgerMaxAggregateOutputType | null
  }

  export type SpecialistLedgerAvgAggregateOutputType = {
    amount: number | null
  }

  export type SpecialistLedgerSumAggregateOutputType = {
    amount: number | null
  }

  export type SpecialistLedgerMinAggregateOutputType = {
    id: string | null
    specialistId: string | null
    branchId: string | null
    type: string | null
    amount: number | null
    notes: string | null
    date: Date | null
    recordedBy: string | null
    createdAt: Date | null
  }

  export type SpecialistLedgerMaxAggregateOutputType = {
    id: string | null
    specialistId: string | null
    branchId: string | null
    type: string | null
    amount: number | null
    notes: string | null
    date: Date | null
    recordedBy: string | null
    createdAt: Date | null
  }

  export type SpecialistLedgerCountAggregateOutputType = {
    id: number
    specialistId: number
    branchId: number
    type: number
    amount: number
    notes: number
    date: number
    recordedBy: number
    createdAt: number
    _all: number
  }


  export type SpecialistLedgerAvgAggregateInputType = {
    amount?: true
  }

  export type SpecialistLedgerSumAggregateInputType = {
    amount?: true
  }

  export type SpecialistLedgerMinAggregateInputType = {
    id?: true
    specialistId?: true
    branchId?: true
    type?: true
    amount?: true
    notes?: true
    date?: true
    recordedBy?: true
    createdAt?: true
  }

  export type SpecialistLedgerMaxAggregateInputType = {
    id?: true
    specialistId?: true
    branchId?: true
    type?: true
    amount?: true
    notes?: true
    date?: true
    recordedBy?: true
    createdAt?: true
  }

  export type SpecialistLedgerCountAggregateInputType = {
    id?: true
    specialistId?: true
    branchId?: true
    type?: true
    amount?: true
    notes?: true
    date?: true
    recordedBy?: true
    createdAt?: true
    _all?: true
  }

  export type SpecialistLedgerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecialistLedger to aggregate.
     */
    where?: SpecialistLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialistLedgers to fetch.
     */
    orderBy?: SpecialistLedgerOrderByWithRelationInput | SpecialistLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialistLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialistLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialistLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpecialistLedgers
    **/
    _count?: true | SpecialistLedgerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecialistLedgerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecialistLedgerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialistLedgerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialistLedgerMaxAggregateInputType
  }

  export type GetSpecialistLedgerAggregateType<T extends SpecialistLedgerAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialistLedger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialistLedger[P]>
      : GetScalarType<T[P], AggregateSpecialistLedger[P]>
  }




  export type SpecialistLedgerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialistLedgerWhereInput
    orderBy?: SpecialistLedgerOrderByWithAggregationInput | SpecialistLedgerOrderByWithAggregationInput[]
    by: SpecialistLedgerScalarFieldEnum[] | SpecialistLedgerScalarFieldEnum
    having?: SpecialistLedgerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialistLedgerCountAggregateInputType | true
    _avg?: SpecialistLedgerAvgAggregateInputType
    _sum?: SpecialistLedgerSumAggregateInputType
    _min?: SpecialistLedgerMinAggregateInputType
    _max?: SpecialistLedgerMaxAggregateInputType
  }

  export type SpecialistLedgerGroupByOutputType = {
    id: string
    specialistId: string
    branchId: string
    type: string
    amount: number
    notes: string | null
    date: Date
    recordedBy: string
    createdAt: Date
    _count: SpecialistLedgerCountAggregateOutputType | null
    _avg: SpecialistLedgerAvgAggregateOutputType | null
    _sum: SpecialistLedgerSumAggregateOutputType | null
    _min: SpecialistLedgerMinAggregateOutputType | null
    _max: SpecialistLedgerMaxAggregateOutputType | null
  }

  type GetSpecialistLedgerGroupByPayload<T extends SpecialistLedgerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialistLedgerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialistLedgerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialistLedgerGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialistLedgerGroupByOutputType[P]>
        }
      >
    >


  export type SpecialistLedgerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    specialistId?: boolean
    branchId?: boolean
    type?: boolean
    amount?: boolean
    notes?: boolean
    date?: boolean
    recordedBy?: boolean
    createdAt?: boolean
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialistLedger"]>

  export type SpecialistLedgerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    specialistId?: boolean
    branchId?: boolean
    type?: boolean
    amount?: boolean
    notes?: boolean
    date?: boolean
    recordedBy?: boolean
    createdAt?: boolean
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialistLedger"]>

  export type SpecialistLedgerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    specialistId?: boolean
    branchId?: boolean
    type?: boolean
    amount?: boolean
    notes?: boolean
    date?: boolean
    recordedBy?: boolean
    createdAt?: boolean
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialistLedger"]>

  export type SpecialistLedgerSelectScalar = {
    id?: boolean
    specialistId?: boolean
    branchId?: boolean
    type?: boolean
    amount?: boolean
    notes?: boolean
    date?: boolean
    recordedBy?: boolean
    createdAt?: boolean
  }

  export type SpecialistLedgerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "specialistId" | "branchId" | "type" | "amount" | "notes" | "date" | "recordedBy" | "createdAt", ExtArgs["result"]["specialistLedger"]>
  export type SpecialistLedgerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type SpecialistLedgerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type SpecialistLedgerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialist?: boolean | SpecialistDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }

  export type $SpecialistLedgerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpecialistLedger"
    objects: {
      specialist: Prisma.$SpecialistPayload<ExtArgs>
      branch: Prisma.$BranchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      specialistId: string
      branchId: string
      type: string
      amount: number
      notes: string | null
      date: Date
      recordedBy: string
      createdAt: Date
    }, ExtArgs["result"]["specialistLedger"]>
    composites: {}
  }

  type SpecialistLedgerGetPayload<S extends boolean | null | undefined | SpecialistLedgerDefaultArgs> = $Result.GetResult<Prisma.$SpecialistLedgerPayload, S>

  type SpecialistLedgerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecialistLedgerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialistLedgerCountAggregateInputType | true
    }

  export interface SpecialistLedgerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpecialistLedger'], meta: { name: 'SpecialistLedger' } }
    /**
     * Find zero or one SpecialistLedger that matches the filter.
     * @param {SpecialistLedgerFindUniqueArgs} args - Arguments to find a SpecialistLedger
     * @example
     * // Get one SpecialistLedger
     * const specialistLedger = await prisma.specialistLedger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialistLedgerFindUniqueArgs>(args: SelectSubset<T, SpecialistLedgerFindUniqueArgs<ExtArgs>>): Prisma__SpecialistLedgerClient<$Result.GetResult<Prisma.$SpecialistLedgerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpecialistLedger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecialistLedgerFindUniqueOrThrowArgs} args - Arguments to find a SpecialistLedger
     * @example
     * // Get one SpecialistLedger
     * const specialistLedger = await prisma.specialistLedger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialistLedgerFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialistLedgerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialistLedgerClient<$Result.GetResult<Prisma.$SpecialistLedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpecialistLedger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistLedgerFindFirstArgs} args - Arguments to find a SpecialistLedger
     * @example
     * // Get one SpecialistLedger
     * const specialistLedger = await prisma.specialistLedger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialistLedgerFindFirstArgs>(args?: SelectSubset<T, SpecialistLedgerFindFirstArgs<ExtArgs>>): Prisma__SpecialistLedgerClient<$Result.GetResult<Prisma.$SpecialistLedgerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpecialistLedger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistLedgerFindFirstOrThrowArgs} args - Arguments to find a SpecialistLedger
     * @example
     * // Get one SpecialistLedger
     * const specialistLedger = await prisma.specialistLedger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialistLedgerFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialistLedgerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialistLedgerClient<$Result.GetResult<Prisma.$SpecialistLedgerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpecialistLedgers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistLedgerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpecialistLedgers
     * const specialistLedgers = await prisma.specialistLedger.findMany()
     * 
     * // Get first 10 SpecialistLedgers
     * const specialistLedgers = await prisma.specialistLedger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialistLedgerWithIdOnly = await prisma.specialistLedger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecialistLedgerFindManyArgs>(args?: SelectSubset<T, SpecialistLedgerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialistLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpecialistLedger.
     * @param {SpecialistLedgerCreateArgs} args - Arguments to create a SpecialistLedger.
     * @example
     * // Create one SpecialistLedger
     * const SpecialistLedger = await prisma.specialistLedger.create({
     *   data: {
     *     // ... data to create a SpecialistLedger
     *   }
     * })
     * 
     */
    create<T extends SpecialistLedgerCreateArgs>(args: SelectSubset<T, SpecialistLedgerCreateArgs<ExtArgs>>): Prisma__SpecialistLedgerClient<$Result.GetResult<Prisma.$SpecialistLedgerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpecialistLedgers.
     * @param {SpecialistLedgerCreateManyArgs} args - Arguments to create many SpecialistLedgers.
     * @example
     * // Create many SpecialistLedgers
     * const specialistLedger = await prisma.specialistLedger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialistLedgerCreateManyArgs>(args?: SelectSubset<T, SpecialistLedgerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpecialistLedgers and returns the data saved in the database.
     * @param {SpecialistLedgerCreateManyAndReturnArgs} args - Arguments to create many SpecialistLedgers.
     * @example
     * // Create many SpecialistLedgers
     * const specialistLedger = await prisma.specialistLedger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpecialistLedgers and only return the `id`
     * const specialistLedgerWithIdOnly = await prisma.specialistLedger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecialistLedgerCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecialistLedgerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialistLedgerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SpecialistLedger.
     * @param {SpecialistLedgerDeleteArgs} args - Arguments to delete one SpecialistLedger.
     * @example
     * // Delete one SpecialistLedger
     * const SpecialistLedger = await prisma.specialistLedger.delete({
     *   where: {
     *     // ... filter to delete one SpecialistLedger
     *   }
     * })
     * 
     */
    delete<T extends SpecialistLedgerDeleteArgs>(args: SelectSubset<T, SpecialistLedgerDeleteArgs<ExtArgs>>): Prisma__SpecialistLedgerClient<$Result.GetResult<Prisma.$SpecialistLedgerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpecialistLedger.
     * @param {SpecialistLedgerUpdateArgs} args - Arguments to update one SpecialistLedger.
     * @example
     * // Update one SpecialistLedger
     * const specialistLedger = await prisma.specialistLedger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialistLedgerUpdateArgs>(args: SelectSubset<T, SpecialistLedgerUpdateArgs<ExtArgs>>): Prisma__SpecialistLedgerClient<$Result.GetResult<Prisma.$SpecialistLedgerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpecialistLedgers.
     * @param {SpecialistLedgerDeleteManyArgs} args - Arguments to filter SpecialistLedgers to delete.
     * @example
     * // Delete a few SpecialistLedgers
     * const { count } = await prisma.specialistLedger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialistLedgerDeleteManyArgs>(args?: SelectSubset<T, SpecialistLedgerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecialistLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistLedgerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpecialistLedgers
     * const specialistLedger = await prisma.specialistLedger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialistLedgerUpdateManyArgs>(args: SelectSubset<T, SpecialistLedgerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecialistLedgers and returns the data updated in the database.
     * @param {SpecialistLedgerUpdateManyAndReturnArgs} args - Arguments to update many SpecialistLedgers.
     * @example
     * // Update many SpecialistLedgers
     * const specialistLedger = await prisma.specialistLedger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpecialistLedgers and only return the `id`
     * const specialistLedgerWithIdOnly = await prisma.specialistLedger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpecialistLedgerUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecialistLedgerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialistLedgerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SpecialistLedger.
     * @param {SpecialistLedgerUpsertArgs} args - Arguments to update or create a SpecialistLedger.
     * @example
     * // Update or create a SpecialistLedger
     * const specialistLedger = await prisma.specialistLedger.upsert({
     *   create: {
     *     // ... data to create a SpecialistLedger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpecialistLedger we want to update
     *   }
     * })
     */
    upsert<T extends SpecialistLedgerUpsertArgs>(args: SelectSubset<T, SpecialistLedgerUpsertArgs<ExtArgs>>): Prisma__SpecialistLedgerClient<$Result.GetResult<Prisma.$SpecialistLedgerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpecialistLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistLedgerCountArgs} args - Arguments to filter SpecialistLedgers to count.
     * @example
     * // Count the number of SpecialistLedgers
     * const count = await prisma.specialistLedger.count({
     *   where: {
     *     // ... the filter for the SpecialistLedgers we want to count
     *   }
     * })
    **/
    count<T extends SpecialistLedgerCountArgs>(
      args?: Subset<T, SpecialistLedgerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialistLedgerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpecialistLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistLedgerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpecialistLedgerAggregateArgs>(args: Subset<T, SpecialistLedgerAggregateArgs>): Prisma.PrismaPromise<GetSpecialistLedgerAggregateType<T>>

    /**
     * Group by SpecialistLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialistLedgerGroupByArgs} args - Group by arguments.
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
      T extends SpecialistLedgerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialistLedgerGroupByArgs['orderBy'] }
        : { orderBy?: SpecialistLedgerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SpecialistLedgerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialistLedgerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpecialistLedger model
   */
  readonly fields: SpecialistLedgerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpecialistLedger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialistLedgerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    specialist<T extends SpecialistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecialistDefaultArgs<ExtArgs>>): Prisma__SpecialistClient<$Result.GetResult<Prisma.$SpecialistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SpecialistLedger model
   */
  interface SpecialistLedgerFieldRefs {
    readonly id: FieldRef<"SpecialistLedger", 'String'>
    readonly specialistId: FieldRef<"SpecialistLedger", 'String'>
    readonly branchId: FieldRef<"SpecialistLedger", 'String'>
    readonly type: FieldRef<"SpecialistLedger", 'String'>
    readonly amount: FieldRef<"SpecialistLedger", 'Float'>
    readonly notes: FieldRef<"SpecialistLedger", 'String'>
    readonly date: FieldRef<"SpecialistLedger", 'DateTime'>
    readonly recordedBy: FieldRef<"SpecialistLedger", 'String'>
    readonly createdAt: FieldRef<"SpecialistLedger", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpecialistLedger findUnique
   */
  export type SpecialistLedgerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistLedger
     */
    select?: SpecialistLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistLedger
     */
    omit?: SpecialistLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistLedgerInclude<ExtArgs> | null
    /**
     * Filter, which SpecialistLedger to fetch.
     */
    where: SpecialistLedgerWhereUniqueInput
  }

  /**
   * SpecialistLedger findUniqueOrThrow
   */
  export type SpecialistLedgerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistLedger
     */
    select?: SpecialistLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistLedger
     */
    omit?: SpecialistLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistLedgerInclude<ExtArgs> | null
    /**
     * Filter, which SpecialistLedger to fetch.
     */
    where: SpecialistLedgerWhereUniqueInput
  }

  /**
   * SpecialistLedger findFirst
   */
  export type SpecialistLedgerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistLedger
     */
    select?: SpecialistLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistLedger
     */
    omit?: SpecialistLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistLedgerInclude<ExtArgs> | null
    /**
     * Filter, which SpecialistLedger to fetch.
     */
    where?: SpecialistLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialistLedgers to fetch.
     */
    orderBy?: SpecialistLedgerOrderByWithRelationInput | SpecialistLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecialistLedgers.
     */
    cursor?: SpecialistLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialistLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialistLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecialistLedgers.
     */
    distinct?: SpecialistLedgerScalarFieldEnum | SpecialistLedgerScalarFieldEnum[]
  }

  /**
   * SpecialistLedger findFirstOrThrow
   */
  export type SpecialistLedgerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistLedger
     */
    select?: SpecialistLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistLedger
     */
    omit?: SpecialistLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistLedgerInclude<ExtArgs> | null
    /**
     * Filter, which SpecialistLedger to fetch.
     */
    where?: SpecialistLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialistLedgers to fetch.
     */
    orderBy?: SpecialistLedgerOrderByWithRelationInput | SpecialistLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecialistLedgers.
     */
    cursor?: SpecialistLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialistLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialistLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecialistLedgers.
     */
    distinct?: SpecialistLedgerScalarFieldEnum | SpecialistLedgerScalarFieldEnum[]
  }

  /**
   * SpecialistLedger findMany
   */
  export type SpecialistLedgerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistLedger
     */
    select?: SpecialistLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistLedger
     */
    omit?: SpecialistLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistLedgerInclude<ExtArgs> | null
    /**
     * Filter, which SpecialistLedgers to fetch.
     */
    where?: SpecialistLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialistLedgers to fetch.
     */
    orderBy?: SpecialistLedgerOrderByWithRelationInput | SpecialistLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpecialistLedgers.
     */
    cursor?: SpecialistLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialistLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialistLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecialistLedgers.
     */
    distinct?: SpecialistLedgerScalarFieldEnum | SpecialistLedgerScalarFieldEnum[]
  }

  /**
   * SpecialistLedger create
   */
  export type SpecialistLedgerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistLedger
     */
    select?: SpecialistLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistLedger
     */
    omit?: SpecialistLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistLedgerInclude<ExtArgs> | null
    /**
     * The data needed to create a SpecialistLedger.
     */
    data: XOR<SpecialistLedgerCreateInput, SpecialistLedgerUncheckedCreateInput>
  }

  /**
   * SpecialistLedger createMany
   */
  export type SpecialistLedgerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpecialistLedgers.
     */
    data: SpecialistLedgerCreateManyInput | SpecialistLedgerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpecialistLedger createManyAndReturn
   */
  export type SpecialistLedgerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistLedger
     */
    select?: SpecialistLedgerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistLedger
     */
    omit?: SpecialistLedgerOmit<ExtArgs> | null
    /**
     * The data used to create many SpecialistLedgers.
     */
    data: SpecialistLedgerCreateManyInput | SpecialistLedgerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistLedgerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpecialistLedger update
   */
  export type SpecialistLedgerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistLedger
     */
    select?: SpecialistLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistLedger
     */
    omit?: SpecialistLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistLedgerInclude<ExtArgs> | null
    /**
     * The data needed to update a SpecialistLedger.
     */
    data: XOR<SpecialistLedgerUpdateInput, SpecialistLedgerUncheckedUpdateInput>
    /**
     * Choose, which SpecialistLedger to update.
     */
    where: SpecialistLedgerWhereUniqueInput
  }

  /**
   * SpecialistLedger updateMany
   */
  export type SpecialistLedgerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpecialistLedgers.
     */
    data: XOR<SpecialistLedgerUpdateManyMutationInput, SpecialistLedgerUncheckedUpdateManyInput>
    /**
     * Filter which SpecialistLedgers to update
     */
    where?: SpecialistLedgerWhereInput
    /**
     * Limit how many SpecialistLedgers to update.
     */
    limit?: number
  }

  /**
   * SpecialistLedger updateManyAndReturn
   */
  export type SpecialistLedgerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistLedger
     */
    select?: SpecialistLedgerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistLedger
     */
    omit?: SpecialistLedgerOmit<ExtArgs> | null
    /**
     * The data used to update SpecialistLedgers.
     */
    data: XOR<SpecialistLedgerUpdateManyMutationInput, SpecialistLedgerUncheckedUpdateManyInput>
    /**
     * Filter which SpecialistLedgers to update
     */
    where?: SpecialistLedgerWhereInput
    /**
     * Limit how many SpecialistLedgers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistLedgerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpecialistLedger upsert
   */
  export type SpecialistLedgerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistLedger
     */
    select?: SpecialistLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistLedger
     */
    omit?: SpecialistLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistLedgerInclude<ExtArgs> | null
    /**
     * The filter to search for the SpecialistLedger to update in case it exists.
     */
    where: SpecialistLedgerWhereUniqueInput
    /**
     * In case the SpecialistLedger found by the `where` argument doesn't exist, create a new SpecialistLedger with this data.
     */
    create: XOR<SpecialistLedgerCreateInput, SpecialistLedgerUncheckedCreateInput>
    /**
     * In case the SpecialistLedger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialistLedgerUpdateInput, SpecialistLedgerUncheckedUpdateInput>
  }

  /**
   * SpecialistLedger delete
   */
  export type SpecialistLedgerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistLedger
     */
    select?: SpecialistLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistLedger
     */
    omit?: SpecialistLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistLedgerInclude<ExtArgs> | null
    /**
     * Filter which SpecialistLedger to delete.
     */
    where: SpecialistLedgerWhereUniqueInput
  }

  /**
   * SpecialistLedger deleteMany
   */
  export type SpecialistLedgerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecialistLedgers to delete
     */
    where?: SpecialistLedgerWhereInput
    /**
     * Limit how many SpecialistLedgers to delete.
     */
    limit?: number
  }

  /**
   * SpecialistLedger without action
   */
  export type SpecialistLedgerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialistLedger
     */
    select?: SpecialistLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialistLedger
     */
    omit?: SpecialistLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialistLedgerInclude<ExtArgs> | null
  }


  /**
   * Model SystemSettings
   */

  export type AggregateSystemSettings = {
    _count: SystemSettingsCountAggregateOutputType | null
    _min: SystemSettingsMinAggregateOutputType | null
    _max: SystemSettingsMaxAggregateOutputType | null
  }

  export type SystemSettingsMinAggregateOutputType = {
    id: string | null
    salonNameAr: string | null
    salonNameEn: string | null
    logoUrl: string | null
    systemLocked: boolean | null
    lockMessage: string | null
    hadayekPhone: string | null
    nasrCityPhone: string | null
    hotline: string | null
    whatsappNumber: string | null
    facebookUrl: string | null
    instagramUrl: string | null
    defaultOpenHour: string | null
    defaultCloseHour: string | null
    updatedAt: Date | null
  }

  export type SystemSettingsMaxAggregateOutputType = {
    id: string | null
    salonNameAr: string | null
    salonNameEn: string | null
    logoUrl: string | null
    systemLocked: boolean | null
    lockMessage: string | null
    hadayekPhone: string | null
    nasrCityPhone: string | null
    hotline: string | null
    whatsappNumber: string | null
    facebookUrl: string | null
    instagramUrl: string | null
    defaultOpenHour: string | null
    defaultCloseHour: string | null
    updatedAt: Date | null
  }

  export type SystemSettingsCountAggregateOutputType = {
    id: number
    salonNameAr: number
    salonNameEn: number
    logoUrl: number
    systemLocked: number
    lockMessage: number
    hadayekPhone: number
    nasrCityPhone: number
    hotline: number
    whatsappNumber: number
    facebookUrl: number
    instagramUrl: number
    defaultOpenHour: number
    defaultCloseHour: number
    updatedAt: number
    _all: number
  }


  export type SystemSettingsMinAggregateInputType = {
    id?: true
    salonNameAr?: true
    salonNameEn?: true
    logoUrl?: true
    systemLocked?: true
    lockMessage?: true
    hadayekPhone?: true
    nasrCityPhone?: true
    hotline?: true
    whatsappNumber?: true
    facebookUrl?: true
    instagramUrl?: true
    defaultOpenHour?: true
    defaultCloseHour?: true
    updatedAt?: true
  }

  export type SystemSettingsMaxAggregateInputType = {
    id?: true
    salonNameAr?: true
    salonNameEn?: true
    logoUrl?: true
    systemLocked?: true
    lockMessage?: true
    hadayekPhone?: true
    nasrCityPhone?: true
    hotline?: true
    whatsappNumber?: true
    facebookUrl?: true
    instagramUrl?: true
    defaultOpenHour?: true
    defaultCloseHour?: true
    updatedAt?: true
  }

  export type SystemSettingsCountAggregateInputType = {
    id?: true
    salonNameAr?: true
    salonNameEn?: true
    logoUrl?: true
    systemLocked?: true
    lockMessage?: true
    hadayekPhone?: true
    nasrCityPhone?: true
    hotline?: true
    whatsappNumber?: true
    facebookUrl?: true
    instagramUrl?: true
    defaultOpenHour?: true
    defaultCloseHour?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to aggregate.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemSettings
    **/
    _count?: true | SystemSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemSettingsMaxAggregateInputType
  }

  export type GetSystemSettingsAggregateType<T extends SystemSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemSettings[P]>
      : GetScalarType<T[P], AggregateSystemSettings[P]>
  }




  export type SystemSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemSettingsWhereInput
    orderBy?: SystemSettingsOrderByWithAggregationInput | SystemSettingsOrderByWithAggregationInput[]
    by: SystemSettingsScalarFieldEnum[] | SystemSettingsScalarFieldEnum
    having?: SystemSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemSettingsCountAggregateInputType | true
    _min?: SystemSettingsMinAggregateInputType
    _max?: SystemSettingsMaxAggregateInputType
  }

  export type SystemSettingsGroupByOutputType = {
    id: string
    salonNameAr: string
    salonNameEn: string
    logoUrl: string
    systemLocked: boolean
    lockMessage: string
    hadayekPhone: string
    nasrCityPhone: string
    hotline: string
    whatsappNumber: string
    facebookUrl: string
    instagramUrl: string | null
    defaultOpenHour: string
    defaultCloseHour: string
    updatedAt: Date
    _count: SystemSettingsCountAggregateOutputType | null
    _min: SystemSettingsMinAggregateOutputType | null
    _max: SystemSettingsMaxAggregateOutputType | null
  }

  type GetSystemSettingsGroupByPayload<T extends SystemSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SystemSettingsGroupByOutputType[P]>
        }
      >
    >


  export type SystemSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonNameAr?: boolean
    salonNameEn?: boolean
    logoUrl?: boolean
    systemLocked?: boolean
    lockMessage?: boolean
    hadayekPhone?: boolean
    nasrCityPhone?: boolean
    hotline?: boolean
    whatsappNumber?: boolean
    facebookUrl?: boolean
    instagramUrl?: boolean
    defaultOpenHour?: boolean
    defaultCloseHour?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonNameAr?: boolean
    salonNameEn?: boolean
    logoUrl?: boolean
    systemLocked?: boolean
    lockMessage?: boolean
    hadayekPhone?: boolean
    nasrCityPhone?: boolean
    hotline?: boolean
    whatsappNumber?: boolean
    facebookUrl?: boolean
    instagramUrl?: boolean
    defaultOpenHour?: boolean
    defaultCloseHour?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonNameAr?: boolean
    salonNameEn?: boolean
    logoUrl?: boolean
    systemLocked?: boolean
    lockMessage?: boolean
    hadayekPhone?: boolean
    nasrCityPhone?: boolean
    hotline?: boolean
    whatsappNumber?: boolean
    facebookUrl?: boolean
    instagramUrl?: boolean
    defaultOpenHour?: boolean
    defaultCloseHour?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectScalar = {
    id?: boolean
    salonNameAr?: boolean
    salonNameEn?: boolean
    logoUrl?: boolean
    systemLocked?: boolean
    lockMessage?: boolean
    hadayekPhone?: boolean
    nasrCityPhone?: boolean
    hotline?: boolean
    whatsappNumber?: boolean
    facebookUrl?: boolean
    instagramUrl?: boolean
    defaultOpenHour?: boolean
    defaultCloseHour?: boolean
    updatedAt?: boolean
  }

  export type SystemSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "salonNameAr" | "salonNameEn" | "logoUrl" | "systemLocked" | "lockMessage" | "hadayekPhone" | "nasrCityPhone" | "hotline" | "whatsappNumber" | "facebookUrl" | "instagramUrl" | "defaultOpenHour" | "defaultCloseHour" | "updatedAt", ExtArgs["result"]["systemSettings"]>

  export type $SystemSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      salonNameAr: string
      salonNameEn: string
      logoUrl: string
      systemLocked: boolean
      lockMessage: string
      hadayekPhone: string
      nasrCityPhone: string
      hotline: string
      whatsappNumber: string
      facebookUrl: string
      instagramUrl: string | null
      defaultOpenHour: string
      defaultCloseHour: string
      updatedAt: Date
    }, ExtArgs["result"]["systemSettings"]>
    composites: {}
  }

  type SystemSettingsGetPayload<S extends boolean | null | undefined | SystemSettingsDefaultArgs> = $Result.GetResult<Prisma.$SystemSettingsPayload, S>

  type SystemSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemSettingsCountAggregateInputType | true
    }

  export interface SystemSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemSettings'], meta: { name: 'SystemSettings' } }
    /**
     * Find zero or one SystemSettings that matches the filter.
     * @param {SystemSettingsFindUniqueArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemSettingsFindUniqueArgs>(args: SelectSubset<T, SystemSettingsFindUniqueArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemSettingsFindUniqueOrThrowArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindFirstArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemSettingsFindFirstArgs>(args?: SelectSubset<T, SystemSettingsFindFirstArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindFirstOrThrowArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemSettings
     * const systemSettings = await prisma.systemSettings.findMany()
     * 
     * // Get first 10 SystemSettings
     * const systemSettings = await prisma.systemSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemSettingsFindManyArgs>(args?: SelectSubset<T, SystemSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemSettings.
     * @param {SystemSettingsCreateArgs} args - Arguments to create a SystemSettings.
     * @example
     * // Create one SystemSettings
     * const SystemSettings = await prisma.systemSettings.create({
     *   data: {
     *     // ... data to create a SystemSettings
     *   }
     * })
     * 
     */
    create<T extends SystemSettingsCreateArgs>(args: SelectSubset<T, SystemSettingsCreateArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemSettings.
     * @param {SystemSettingsCreateManyArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSettings = await prisma.systemSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemSettingsCreateManyArgs>(args?: SelectSubset<T, SystemSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemSettings and returns the data saved in the database.
     * @param {SystemSettingsCreateManyAndReturnArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSettings = await prisma.systemSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemSettings and only return the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemSettings.
     * @param {SystemSettingsDeleteArgs} args - Arguments to delete one SystemSettings.
     * @example
     * // Delete one SystemSettings
     * const SystemSettings = await prisma.systemSettings.delete({
     *   where: {
     *     // ... filter to delete one SystemSettings
     *   }
     * })
     * 
     */
    delete<T extends SystemSettingsDeleteArgs>(args: SelectSubset<T, SystemSettingsDeleteArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemSettings.
     * @param {SystemSettingsUpdateArgs} args - Arguments to update one SystemSettings.
     * @example
     * // Update one SystemSettings
     * const systemSettings = await prisma.systemSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemSettingsUpdateArgs>(args: SelectSubset<T, SystemSettingsUpdateArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemSettings.
     * @param {SystemSettingsDeleteManyArgs} args - Arguments to filter SystemSettings to delete.
     * @example
     * // Delete a few SystemSettings
     * const { count } = await prisma.systemSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemSettingsDeleteManyArgs>(args?: SelectSubset<T, SystemSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemSettings
     * const systemSettings = await prisma.systemSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemSettingsUpdateManyArgs>(args: SelectSubset<T, SystemSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings and returns the data updated in the database.
     * @param {SystemSettingsUpdateManyAndReturnArgs} args - Arguments to update many SystemSettings.
     * @example
     * // Update many SystemSettings
     * const systemSettings = await prisma.systemSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemSettings and only return the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemSettings.
     * @param {SystemSettingsUpsertArgs} args - Arguments to update or create a SystemSettings.
     * @example
     * // Update or create a SystemSettings
     * const systemSettings = await prisma.systemSettings.upsert({
     *   create: {
     *     // ... data to create a SystemSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemSettings we want to update
     *   }
     * })
     */
    upsert<T extends SystemSettingsUpsertArgs>(args: SelectSubset<T, SystemSettingsUpsertArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsCountArgs} args - Arguments to filter SystemSettings to count.
     * @example
     * // Count the number of SystemSettings
     * const count = await prisma.systemSettings.count({
     *   where: {
     *     // ... the filter for the SystemSettings we want to count
     *   }
     * })
    **/
    count<T extends SystemSettingsCountArgs>(
      args?: Subset<T, SystemSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemSettingsAggregateArgs>(args: Subset<T, SystemSettingsAggregateArgs>): Prisma.PrismaPromise<GetSystemSettingsAggregateType<T>>

    /**
     * Group by SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsGroupByArgs} args - Group by arguments.
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
      T extends SystemSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemSettingsGroupByArgs['orderBy'] }
        : { orderBy?: SystemSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SystemSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemSettings model
   */
  readonly fields: SystemSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemSettings model
   */
  interface SystemSettingsFieldRefs {
    readonly id: FieldRef<"SystemSettings", 'String'>
    readonly salonNameAr: FieldRef<"SystemSettings", 'String'>
    readonly salonNameEn: FieldRef<"SystemSettings", 'String'>
    readonly logoUrl: FieldRef<"SystemSettings", 'String'>
    readonly systemLocked: FieldRef<"SystemSettings", 'Boolean'>
    readonly lockMessage: FieldRef<"SystemSettings", 'String'>
    readonly hadayekPhone: FieldRef<"SystemSettings", 'String'>
    readonly nasrCityPhone: FieldRef<"SystemSettings", 'String'>
    readonly hotline: FieldRef<"SystemSettings", 'String'>
    readonly whatsappNumber: FieldRef<"SystemSettings", 'String'>
    readonly facebookUrl: FieldRef<"SystemSettings", 'String'>
    readonly instagramUrl: FieldRef<"SystemSettings", 'String'>
    readonly defaultOpenHour: FieldRef<"SystemSettings", 'String'>
    readonly defaultCloseHour: FieldRef<"SystemSettings", 'String'>
    readonly updatedAt: FieldRef<"SystemSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemSettings findUnique
   */
  export type SystemSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings findUniqueOrThrow
   */
  export type SystemSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings findFirst
   */
  export type SystemSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings findFirstOrThrow
   */
  export type SystemSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings findMany
   */
  export type SystemSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings create
   */
  export type SystemSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemSettings.
     */
    data: XOR<SystemSettingsCreateInput, SystemSettingsUncheckedCreateInput>
  }

  /**
   * SystemSettings createMany
   */
  export type SystemSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingsCreateManyInput | SystemSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSettings createManyAndReturn
   */
  export type SystemSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingsCreateManyInput | SystemSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSettings update
   */
  export type SystemSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemSettings.
     */
    data: XOR<SystemSettingsUpdateInput, SystemSettingsUncheckedUpdateInput>
    /**
     * Choose, which SystemSettings to update.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings updateMany
   */
  export type SystemSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingsUpdateManyMutationInput, SystemSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSettings updateManyAndReturn
   */
  export type SystemSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingsUpdateManyMutationInput, SystemSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSettings upsert
   */
  export type SystemSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemSettings to update in case it exists.
     */
    where: SystemSettingsWhereUniqueInput
    /**
     * In case the SystemSettings found by the `where` argument doesn't exist, create a new SystemSettings with this data.
     */
    create: XOR<SystemSettingsCreateInput, SystemSettingsUncheckedCreateInput>
    /**
     * In case the SystemSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemSettingsUpdateInput, SystemSettingsUncheckedUpdateInput>
  }

  /**
   * SystemSettings delete
   */
  export type SystemSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter which SystemSettings to delete.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings deleteMany
   */
  export type SystemSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to delete
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to delete.
     */
    limit?: number
  }

  /**
   * SystemSettings without action
   */
  export type SystemSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BranchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    address: 'address',
    phone: 'phone',
    whatsapp: 'whatsapp',
    googleMapsUrl: 'googleMapsUrl',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    passwordHash: 'passwordHash',
    pin: 'pin',
    phone: 'phone',
    role: 'role',
    branchId: 'branchId',
    permissions: 'permissions',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SpecialistScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    branchId: 'branchId',
    name: 'name',
    phone: 'phone',
    photo: 'photo',
    title: 'title',
    chairNumber: 'chairNumber',
    status: 'status',
    rating: 'rating',
    payType: 'payType',
    baseSalary: 'baseSalary',
    commissionRate: 'commissionRate',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type SpecialistScalarFieldEnum = (typeof SpecialistScalarFieldEnum)[keyof typeof SpecialistScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    nameAr: 'nameAr',
    nameEn: 'nameEn',
    category: 'category',
    price: 'price',
    durationMinutes: 'durationMinutes',
    description: 'description',
    image: 'image',
    sortOrder: 'sortOrder',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    passwordHash: 'passwordHash',
    isVerified: 'isVerified',
    verificationCode: 'verificationCode',
    avatar: 'avatar',
    notes: 'notes',
    vipLevel: 'vipLevel',
    totalVisits: 'totalVisits',
    totalSpent: 'totalSpent',
    createdAt: 'createdAt',
    lastVisitAt: 'lastVisitAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    bookingNumber: 'bookingNumber',
    customerId: 'customerId',
    branchId: 'branchId',
    specialistId: 'specialistId',
    serviceIds: 'serviceIds',
    bookingDate: 'bookingDate',
    timeSlot: 'timeSlot',
    status: 'status',
    notes: 'notes',
    totalAmount: 'totalAmount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    ticketNumber: 'ticketNumber',
    branchId: 'branchId',
    specialistId: 'specialistId',
    customerId: 'customerId',
    customerName: 'customerName',
    customerPhone: 'customerPhone',
    chairNumber: 'chairNumber',
    status: 'status',
    services: 'services',
    retailItems: 'retailItems',
    servicesTotal: 'servicesTotal',
    retailTotal: 'retailTotal',
    discount: 'discount',
    tipAmount: 'tipAmount',
    finalAmount: 'finalAmount',
    paymentMethod: 'paymentMethod',
    startTime: 'startTime',
    endTime: 'endTime',
    durationMinutes: 'durationMinutes',
    cashierName: 'cashierName',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    branchId: 'branchId',
    nameAr: 'nameAr',
    category: 'category',
    price: 'price',
    costPrice: 'costPrice',
    stockQty: 'stockQty',
    minStockAlert: 'minStockAlert',
    image: 'image',
    barcode: 'barcode',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SpecialistLedgerScalarFieldEnum: {
    id: 'id',
    specialistId: 'specialistId',
    branchId: 'branchId',
    type: 'type',
    amount: 'amount',
    notes: 'notes',
    date: 'date',
    recordedBy: 'recordedBy',
    createdAt: 'createdAt'
  };

  export type SpecialistLedgerScalarFieldEnum = (typeof SpecialistLedgerScalarFieldEnum)[keyof typeof SpecialistLedgerScalarFieldEnum]


  export const SystemSettingsScalarFieldEnum: {
    id: 'id',
    salonNameAr: 'salonNameAr',
    salonNameEn: 'salonNameEn',
    logoUrl: 'logoUrl',
    systemLocked: 'systemLocked',
    lockMessage: 'lockMessage',
    hadayekPhone: 'hadayekPhone',
    nasrCityPhone: 'nasrCityPhone',
    hotline: 'hotline',
    whatsappNumber: 'whatsappNumber',
    facebookUrl: 'facebookUrl',
    instagramUrl: 'instagramUrl',
    defaultOpenHour: 'defaultOpenHour',
    defaultCloseHour: 'defaultCloseHour',
    updatedAt: 'updatedAt'
  };

  export type SystemSettingsScalarFieldEnum = (typeof SystemSettingsScalarFieldEnum)[keyof typeof SystemSettingsScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: StringFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    code?: StringFilter<"Branch"> | string
    address?: StringFilter<"Branch"> | string
    phone?: StringFilter<"Branch"> | string
    whatsapp?: StringNullableFilter<"Branch"> | string | null
    googleMapsUrl?: StringNullableFilter<"Branch"> | string | null
    isActive?: BoolFilter<"Branch"> | boolean
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    users?: UserListRelationFilter
    specialists?: SpecialistListRelationFilter
    bookings?: BookingListRelationFilter
    tickets?: TicketListRelationFilter
    products?: ProductListRelationFilter
    ledgers?: SpecialistLedgerListRelationFilter
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrderInput | SortOrder
    googleMapsUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    specialists?: SpecialistOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    ledgers?: SpecialistLedgerOrderByRelationAggregateInput
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    name?: StringFilter<"Branch"> | string
    address?: StringFilter<"Branch"> | string
    phone?: StringFilter<"Branch"> | string
    whatsapp?: StringNullableFilter<"Branch"> | string | null
    googleMapsUrl?: StringNullableFilter<"Branch"> | string | null
    isActive?: BoolFilter<"Branch"> | boolean
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    users?: UserListRelationFilter
    specialists?: SpecialistListRelationFilter
    bookings?: BookingListRelationFilter
    tickets?: TicketListRelationFilter
    products?: ProductListRelationFilter
    ledgers?: SpecialistLedgerListRelationFilter
  }, "id" | "code">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrderInput | SortOrder
    googleMapsUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: BranchCountOrderByAggregateInput
    _max?: BranchMaxOrderByAggregateInput
    _min?: BranchMinOrderByAggregateInput
  }

  export type BranchScalarWhereWithAggregatesInput = {
    AND?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    OR?: BranchScalarWhereWithAggregatesInput[]
    NOT?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Branch"> | string
    name?: StringWithAggregatesFilter<"Branch"> | string
    code?: StringWithAggregatesFilter<"Branch"> | string
    address?: StringWithAggregatesFilter<"Branch"> | string
    phone?: StringWithAggregatesFilter<"Branch"> | string
    whatsapp?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    googleMapsUrl?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    isActive?: BoolWithAggregatesFilter<"Branch"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    pin?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    branchId?: StringNullableFilter<"User"> | string | null
    permissions?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
    specialistProfile?: XOR<SpecialistNullableScalarRelationFilter, SpecialistWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    pin?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    branchId?: SortOrderInput | SortOrder
    permissions?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
    specialistProfile?: SpecialistOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    pin?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    branchId?: StringNullableFilter<"User"> | string | null
    permissions?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
    specialistProfile?: XOR<SpecialistNullableScalarRelationFilter, SpecialistWhereInput> | null
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    pin?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    branchId?: SortOrderInput | SortOrder
    permissions?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    pin?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    branchId?: StringNullableWithAggregatesFilter<"User"> | string | null
    permissions?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SpecialistWhereInput = {
    AND?: SpecialistWhereInput | SpecialistWhereInput[]
    OR?: SpecialistWhereInput[]
    NOT?: SpecialistWhereInput | SpecialistWhereInput[]
    id?: StringFilter<"Specialist"> | string
    userId?: StringNullableFilter<"Specialist"> | string | null
    branchId?: StringFilter<"Specialist"> | string
    name?: StringFilter<"Specialist"> | string
    phone?: StringNullableFilter<"Specialist"> | string | null
    photo?: StringNullableFilter<"Specialist"> | string | null
    title?: StringFilter<"Specialist"> | string
    chairNumber?: IntFilter<"Specialist"> | number
    status?: StringFilter<"Specialist"> | string
    rating?: FloatFilter<"Specialist"> | number
    payType?: StringFilter<"Specialist"> | string
    baseSalary?: FloatFilter<"Specialist"> | number
    commissionRate?: FloatFilter<"Specialist"> | number
    isActive?: BoolFilter<"Specialist"> | boolean
    createdAt?: DateTimeFilter<"Specialist"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    bookings?: BookingListRelationFilter
    tickets?: TicketListRelationFilter
    ledgers?: SpecialistLedgerListRelationFilter
  }

  export type SpecialistOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    branchId?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    title?: SortOrder
    chairNumber?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    payType?: SortOrder
    baseSalary?: SortOrder
    commissionRate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    ledgers?: SpecialistLedgerOrderByRelationAggregateInput
  }

  export type SpecialistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SpecialistWhereInput | SpecialistWhereInput[]
    OR?: SpecialistWhereInput[]
    NOT?: SpecialistWhereInput | SpecialistWhereInput[]
    branchId?: StringFilter<"Specialist"> | string
    name?: StringFilter<"Specialist"> | string
    phone?: StringNullableFilter<"Specialist"> | string | null
    photo?: StringNullableFilter<"Specialist"> | string | null
    title?: StringFilter<"Specialist"> | string
    chairNumber?: IntFilter<"Specialist"> | number
    status?: StringFilter<"Specialist"> | string
    rating?: FloatFilter<"Specialist"> | number
    payType?: StringFilter<"Specialist"> | string
    baseSalary?: FloatFilter<"Specialist"> | number
    commissionRate?: FloatFilter<"Specialist"> | number
    isActive?: BoolFilter<"Specialist"> | boolean
    createdAt?: DateTimeFilter<"Specialist"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    bookings?: BookingListRelationFilter
    tickets?: TicketListRelationFilter
    ledgers?: SpecialistLedgerListRelationFilter
  }, "id" | "userId">

  export type SpecialistOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    branchId?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    title?: SortOrder
    chairNumber?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    payType?: SortOrder
    baseSalary?: SortOrder
    commissionRate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: SpecialistCountOrderByAggregateInput
    _avg?: SpecialistAvgOrderByAggregateInput
    _max?: SpecialistMaxOrderByAggregateInput
    _min?: SpecialistMinOrderByAggregateInput
    _sum?: SpecialistSumOrderByAggregateInput
  }

  export type SpecialistScalarWhereWithAggregatesInput = {
    AND?: SpecialistScalarWhereWithAggregatesInput | SpecialistScalarWhereWithAggregatesInput[]
    OR?: SpecialistScalarWhereWithAggregatesInput[]
    NOT?: SpecialistScalarWhereWithAggregatesInput | SpecialistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Specialist"> | string
    userId?: StringNullableWithAggregatesFilter<"Specialist"> | string | null
    branchId?: StringWithAggregatesFilter<"Specialist"> | string
    name?: StringWithAggregatesFilter<"Specialist"> | string
    phone?: StringNullableWithAggregatesFilter<"Specialist"> | string | null
    photo?: StringNullableWithAggregatesFilter<"Specialist"> | string | null
    title?: StringWithAggregatesFilter<"Specialist"> | string
    chairNumber?: IntWithAggregatesFilter<"Specialist"> | number
    status?: StringWithAggregatesFilter<"Specialist"> | string
    rating?: FloatWithAggregatesFilter<"Specialist"> | number
    payType?: StringWithAggregatesFilter<"Specialist"> | string
    baseSalary?: FloatWithAggregatesFilter<"Specialist"> | number
    commissionRate?: FloatWithAggregatesFilter<"Specialist"> | number
    isActive?: BoolWithAggregatesFilter<"Specialist"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Specialist"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    nameAr?: StringFilter<"Service"> | string
    nameEn?: StringNullableFilter<"Service"> | string | null
    category?: StringFilter<"Service"> | string
    price?: FloatFilter<"Service"> | number
    durationMinutes?: IntFilter<"Service"> | number
    description?: StringNullableFilter<"Service"> | string | null
    image?: StringNullableFilter<"Service"> | string | null
    sortOrder?: IntFilter<"Service"> | number
    isActive?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    nameAr?: SortOrder
    nameEn?: SortOrderInput | SortOrder
    category?: SortOrder
    price?: SortOrder
    durationMinutes?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    nameAr?: StringFilter<"Service"> | string
    nameEn?: StringNullableFilter<"Service"> | string | null
    category?: StringFilter<"Service"> | string
    price?: FloatFilter<"Service"> | number
    durationMinutes?: IntFilter<"Service"> | number
    description?: StringNullableFilter<"Service"> | string | null
    image?: StringNullableFilter<"Service"> | string | null
    sortOrder?: IntFilter<"Service"> | number
    isActive?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    nameAr?: SortOrder
    nameEn?: SortOrderInput | SortOrder
    category?: SortOrder
    price?: SortOrder
    durationMinutes?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    nameAr?: StringWithAggregatesFilter<"Service"> | string
    nameEn?: StringNullableWithAggregatesFilter<"Service"> | string | null
    category?: StringWithAggregatesFilter<"Service"> | string
    price?: FloatWithAggregatesFilter<"Service"> | number
    durationMinutes?: IntWithAggregatesFilter<"Service"> | number
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    image?: StringNullableWithAggregatesFilter<"Service"> | string | null
    sortOrder?: IntWithAggregatesFilter<"Service"> | number
    isActive?: BoolWithAggregatesFilter<"Service"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    passwordHash?: StringNullableFilter<"Customer"> | string | null
    isVerified?: BoolFilter<"Customer"> | boolean
    verificationCode?: StringNullableFilter<"Customer"> | string | null
    avatar?: StringNullableFilter<"Customer"> | string | null
    notes?: StringNullableFilter<"Customer"> | string | null
    vipLevel?: StringFilter<"Customer"> | string
    totalVisits?: IntFilter<"Customer"> | number
    totalSpent?: FloatFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    lastVisitAt?: DateTimeNullableFilter<"Customer"> | Date | string | null
    bookings?: BookingListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    verificationCode?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    vipLevel?: SortOrder
    totalVisits?: SortOrder
    totalSpent?: SortOrder
    createdAt?: SortOrder
    lastVisitAt?: SortOrderInput | SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    passwordHash?: StringNullableFilter<"Customer"> | string | null
    isVerified?: BoolFilter<"Customer"> | boolean
    verificationCode?: StringNullableFilter<"Customer"> | string | null
    avatar?: StringNullableFilter<"Customer"> | string | null
    notes?: StringNullableFilter<"Customer"> | string | null
    vipLevel?: StringFilter<"Customer"> | string
    totalVisits?: IntFilter<"Customer"> | number
    totalSpent?: FloatFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    lastVisitAt?: DateTimeNullableFilter<"Customer"> | Date | string | null
    bookings?: BookingListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id" | "phone">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    verificationCode?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    vipLevel?: SortOrder
    totalVisits?: SortOrder
    totalSpent?: SortOrder
    createdAt?: SortOrder
    lastVisitAt?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    isVerified?: BoolWithAggregatesFilter<"Customer"> | boolean
    verificationCode?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    vipLevel?: StringWithAggregatesFilter<"Customer"> | string
    totalVisits?: IntWithAggregatesFilter<"Customer"> | number
    totalSpent?: FloatWithAggregatesFilter<"Customer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    lastVisitAt?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    bookingNumber?: StringFilter<"Booking"> | string
    customerId?: StringFilter<"Booking"> | string
    branchId?: StringFilter<"Booking"> | string
    specialistId?: StringNullableFilter<"Booking"> | string | null
    serviceIds?: StringFilter<"Booking"> | string
    bookingDate?: StringFilter<"Booking"> | string
    timeSlot?: StringFilter<"Booking"> | string
    status?: StringFilter<"Booking"> | string
    notes?: StringNullableFilter<"Booking"> | string | null
    totalAmount?: FloatFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    specialist?: XOR<SpecialistNullableScalarRelationFilter, SpecialistWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    bookingNumber?: SortOrder
    customerId?: SortOrder
    branchId?: SortOrder
    specialistId?: SortOrderInput | SortOrder
    serviceIds?: SortOrder
    bookingDate?: SortOrder
    timeSlot?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
    specialist?: SpecialistOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingNumber?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    customerId?: StringFilter<"Booking"> | string
    branchId?: StringFilter<"Booking"> | string
    specialistId?: StringNullableFilter<"Booking"> | string | null
    serviceIds?: StringFilter<"Booking"> | string
    bookingDate?: StringFilter<"Booking"> | string
    timeSlot?: StringFilter<"Booking"> | string
    status?: StringFilter<"Booking"> | string
    notes?: StringNullableFilter<"Booking"> | string | null
    totalAmount?: FloatFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    specialist?: XOR<SpecialistNullableScalarRelationFilter, SpecialistWhereInput> | null
  }, "id" | "bookingNumber">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    bookingNumber?: SortOrder
    customerId?: SortOrder
    branchId?: SortOrder
    specialistId?: SortOrderInput | SortOrder
    serviceIds?: SortOrder
    bookingDate?: SortOrder
    timeSlot?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    bookingNumber?: StringWithAggregatesFilter<"Booking"> | string
    customerId?: StringWithAggregatesFilter<"Booking"> | string
    branchId?: StringWithAggregatesFilter<"Booking"> | string
    specialistId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    serviceIds?: StringWithAggregatesFilter<"Booking"> | string
    bookingDate?: StringWithAggregatesFilter<"Booking"> | string
    timeSlot?: StringWithAggregatesFilter<"Booking"> | string
    status?: StringWithAggregatesFilter<"Booking"> | string
    notes?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    totalAmount?: FloatWithAggregatesFilter<"Booking"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    ticketNumber?: StringFilter<"Ticket"> | string
    branchId?: StringFilter<"Ticket"> | string
    specialistId?: StringFilter<"Ticket"> | string
    customerId?: StringNullableFilter<"Ticket"> | string | null
    customerName?: StringFilter<"Ticket"> | string
    customerPhone?: StringNullableFilter<"Ticket"> | string | null
    chairNumber?: IntFilter<"Ticket"> | number
    status?: StringFilter<"Ticket"> | string
    services?: StringFilter<"Ticket"> | string
    retailItems?: StringFilter<"Ticket"> | string
    servicesTotal?: FloatFilter<"Ticket"> | number
    retailTotal?: FloatFilter<"Ticket"> | number
    discount?: FloatFilter<"Ticket"> | number
    tipAmount?: FloatFilter<"Ticket"> | number
    finalAmount?: FloatFilter<"Ticket"> | number
    paymentMethod?: StringFilter<"Ticket"> | string
    startTime?: DateTimeFilter<"Ticket"> | Date | string
    endTime?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    durationMinutes?: IntNullableFilter<"Ticket"> | number | null
    cashierName?: StringNullableFilter<"Ticket"> | string | null
    notes?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    specialist?: XOR<SpecialistScalarRelationFilter, SpecialistWhereInput>
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    branchId?: SortOrder
    specialistId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrderInput | SortOrder
    chairNumber?: SortOrder
    status?: SortOrder
    services?: SortOrder
    retailItems?: SortOrder
    servicesTotal?: SortOrder
    retailTotal?: SortOrder
    discount?: SortOrder
    tipAmount?: SortOrder
    finalAmount?: SortOrder
    paymentMethod?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    durationMinutes?: SortOrderInput | SortOrder
    cashierName?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
    specialist?: SpecialistOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ticketNumber?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    branchId?: StringFilter<"Ticket"> | string
    specialistId?: StringFilter<"Ticket"> | string
    customerId?: StringNullableFilter<"Ticket"> | string | null
    customerName?: StringFilter<"Ticket"> | string
    customerPhone?: StringNullableFilter<"Ticket"> | string | null
    chairNumber?: IntFilter<"Ticket"> | number
    status?: StringFilter<"Ticket"> | string
    services?: StringFilter<"Ticket"> | string
    retailItems?: StringFilter<"Ticket"> | string
    servicesTotal?: FloatFilter<"Ticket"> | number
    retailTotal?: FloatFilter<"Ticket"> | number
    discount?: FloatFilter<"Ticket"> | number
    tipAmount?: FloatFilter<"Ticket"> | number
    finalAmount?: FloatFilter<"Ticket"> | number
    paymentMethod?: StringFilter<"Ticket"> | string
    startTime?: DateTimeFilter<"Ticket"> | Date | string
    endTime?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    durationMinutes?: IntNullableFilter<"Ticket"> | number | null
    cashierName?: StringNullableFilter<"Ticket"> | string | null
    notes?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    specialist?: XOR<SpecialistScalarRelationFilter, SpecialistWhereInput>
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }, "id" | "ticketNumber">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    branchId?: SortOrder
    specialistId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrderInput | SortOrder
    chairNumber?: SortOrder
    status?: SortOrder
    services?: SortOrder
    retailItems?: SortOrder
    servicesTotal?: SortOrder
    retailTotal?: SortOrder
    discount?: SortOrder
    tipAmount?: SortOrder
    finalAmount?: SortOrder
    paymentMethod?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    durationMinutes?: SortOrderInput | SortOrder
    cashierName?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    ticketNumber?: StringWithAggregatesFilter<"Ticket"> | string
    branchId?: StringWithAggregatesFilter<"Ticket"> | string
    specialistId?: StringWithAggregatesFilter<"Ticket"> | string
    customerId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    customerName?: StringWithAggregatesFilter<"Ticket"> | string
    customerPhone?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    chairNumber?: IntWithAggregatesFilter<"Ticket"> | number
    status?: StringWithAggregatesFilter<"Ticket"> | string
    services?: StringWithAggregatesFilter<"Ticket"> | string
    retailItems?: StringWithAggregatesFilter<"Ticket"> | string
    servicesTotal?: FloatWithAggregatesFilter<"Ticket"> | number
    retailTotal?: FloatWithAggregatesFilter<"Ticket"> | number
    discount?: FloatWithAggregatesFilter<"Ticket"> | number
    tipAmount?: FloatWithAggregatesFilter<"Ticket"> | number
    finalAmount?: FloatWithAggregatesFilter<"Ticket"> | number
    paymentMethod?: StringWithAggregatesFilter<"Ticket"> | string
    startTime?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    durationMinutes?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
    cashierName?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    branchId?: StringNullableFilter<"Product"> | string | null
    nameAr?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    costPrice?: FloatFilter<"Product"> | number
    stockQty?: IntFilter<"Product"> | number
    minStockAlert?: IntFilter<"Product"> | number
    image?: StringNullableFilter<"Product"> | string | null
    barcode?: StringNullableFilter<"Product"> | string | null
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    branchId?: SortOrderInput | SortOrder
    nameAr?: SortOrder
    category?: SortOrder
    price?: SortOrder
    costPrice?: SortOrder
    stockQty?: SortOrder
    minStockAlert?: SortOrder
    image?: SortOrderInput | SortOrder
    barcode?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    branchId?: StringNullableFilter<"Product"> | string | null
    nameAr?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    costPrice?: FloatFilter<"Product"> | number
    stockQty?: IntFilter<"Product"> | number
    minStockAlert?: IntFilter<"Product"> | number
    image?: StringNullableFilter<"Product"> | string | null
    barcode?: StringNullableFilter<"Product"> | string | null
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    branchId?: SortOrderInput | SortOrder
    nameAr?: SortOrder
    category?: SortOrder
    price?: SortOrder
    costPrice?: SortOrder
    stockQty?: SortOrder
    minStockAlert?: SortOrder
    image?: SortOrderInput | SortOrder
    barcode?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    branchId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    nameAr?: StringWithAggregatesFilter<"Product"> | string
    category?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    costPrice?: FloatWithAggregatesFilter<"Product"> | number
    stockQty?: IntWithAggregatesFilter<"Product"> | number
    minStockAlert?: IntWithAggregatesFilter<"Product"> | number
    image?: StringNullableWithAggregatesFilter<"Product"> | string | null
    barcode?: StringNullableWithAggregatesFilter<"Product"> | string | null
    isActive?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type SpecialistLedgerWhereInput = {
    AND?: SpecialistLedgerWhereInput | SpecialistLedgerWhereInput[]
    OR?: SpecialistLedgerWhereInput[]
    NOT?: SpecialistLedgerWhereInput | SpecialistLedgerWhereInput[]
    id?: StringFilter<"SpecialistLedger"> | string
    specialistId?: StringFilter<"SpecialistLedger"> | string
    branchId?: StringFilter<"SpecialistLedger"> | string
    type?: StringFilter<"SpecialistLedger"> | string
    amount?: FloatFilter<"SpecialistLedger"> | number
    notes?: StringNullableFilter<"SpecialistLedger"> | string | null
    date?: DateTimeFilter<"SpecialistLedger"> | Date | string
    recordedBy?: StringFilter<"SpecialistLedger"> | string
    createdAt?: DateTimeFilter<"SpecialistLedger"> | Date | string
    specialist?: XOR<SpecialistScalarRelationFilter, SpecialistWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
  }

  export type SpecialistLedgerOrderByWithRelationInput = {
    id?: SortOrder
    specialistId?: SortOrder
    branchId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    notes?: SortOrderInput | SortOrder
    date?: SortOrder
    recordedBy?: SortOrder
    createdAt?: SortOrder
    specialist?: SpecialistOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
  }

  export type SpecialistLedgerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpecialistLedgerWhereInput | SpecialistLedgerWhereInput[]
    OR?: SpecialistLedgerWhereInput[]
    NOT?: SpecialistLedgerWhereInput | SpecialistLedgerWhereInput[]
    specialistId?: StringFilter<"SpecialistLedger"> | string
    branchId?: StringFilter<"SpecialistLedger"> | string
    type?: StringFilter<"SpecialistLedger"> | string
    amount?: FloatFilter<"SpecialistLedger"> | number
    notes?: StringNullableFilter<"SpecialistLedger"> | string | null
    date?: DateTimeFilter<"SpecialistLedger"> | Date | string
    recordedBy?: StringFilter<"SpecialistLedger"> | string
    createdAt?: DateTimeFilter<"SpecialistLedger"> | Date | string
    specialist?: XOR<SpecialistScalarRelationFilter, SpecialistWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
  }, "id">

  export type SpecialistLedgerOrderByWithAggregationInput = {
    id?: SortOrder
    specialistId?: SortOrder
    branchId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    notes?: SortOrderInput | SortOrder
    date?: SortOrder
    recordedBy?: SortOrder
    createdAt?: SortOrder
    _count?: SpecialistLedgerCountOrderByAggregateInput
    _avg?: SpecialistLedgerAvgOrderByAggregateInput
    _max?: SpecialistLedgerMaxOrderByAggregateInput
    _min?: SpecialistLedgerMinOrderByAggregateInput
    _sum?: SpecialistLedgerSumOrderByAggregateInput
  }

  export type SpecialistLedgerScalarWhereWithAggregatesInput = {
    AND?: SpecialistLedgerScalarWhereWithAggregatesInput | SpecialistLedgerScalarWhereWithAggregatesInput[]
    OR?: SpecialistLedgerScalarWhereWithAggregatesInput[]
    NOT?: SpecialistLedgerScalarWhereWithAggregatesInput | SpecialistLedgerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpecialistLedger"> | string
    specialistId?: StringWithAggregatesFilter<"SpecialistLedger"> | string
    branchId?: StringWithAggregatesFilter<"SpecialistLedger"> | string
    type?: StringWithAggregatesFilter<"SpecialistLedger"> | string
    amount?: FloatWithAggregatesFilter<"SpecialistLedger"> | number
    notes?: StringNullableWithAggregatesFilter<"SpecialistLedger"> | string | null
    date?: DateTimeWithAggregatesFilter<"SpecialistLedger"> | Date | string
    recordedBy?: StringWithAggregatesFilter<"SpecialistLedger"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SpecialistLedger"> | Date | string
  }

  export type SystemSettingsWhereInput = {
    AND?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    OR?: SystemSettingsWhereInput[]
    NOT?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    id?: StringFilter<"SystemSettings"> | string
    salonNameAr?: StringFilter<"SystemSettings"> | string
    salonNameEn?: StringFilter<"SystemSettings"> | string
    logoUrl?: StringFilter<"SystemSettings"> | string
    systemLocked?: BoolFilter<"SystemSettings"> | boolean
    lockMessage?: StringFilter<"SystemSettings"> | string
    hadayekPhone?: StringFilter<"SystemSettings"> | string
    nasrCityPhone?: StringFilter<"SystemSettings"> | string
    hotline?: StringFilter<"SystemSettings"> | string
    whatsappNumber?: StringFilter<"SystemSettings"> | string
    facebookUrl?: StringFilter<"SystemSettings"> | string
    instagramUrl?: StringNullableFilter<"SystemSettings"> | string | null
    defaultOpenHour?: StringFilter<"SystemSettings"> | string
    defaultCloseHour?: StringFilter<"SystemSettings"> | string
    updatedAt?: DateTimeFilter<"SystemSettings"> | Date | string
  }

  export type SystemSettingsOrderByWithRelationInput = {
    id?: SortOrder
    salonNameAr?: SortOrder
    salonNameEn?: SortOrder
    logoUrl?: SortOrder
    systemLocked?: SortOrder
    lockMessage?: SortOrder
    hadayekPhone?: SortOrder
    nasrCityPhone?: SortOrder
    hotline?: SortOrder
    whatsappNumber?: SortOrder
    facebookUrl?: SortOrder
    instagramUrl?: SortOrderInput | SortOrder
    defaultOpenHour?: SortOrder
    defaultCloseHour?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    OR?: SystemSettingsWhereInput[]
    NOT?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    salonNameAr?: StringFilter<"SystemSettings"> | string
    salonNameEn?: StringFilter<"SystemSettings"> | string
    logoUrl?: StringFilter<"SystemSettings"> | string
    systemLocked?: BoolFilter<"SystemSettings"> | boolean
    lockMessage?: StringFilter<"SystemSettings"> | string
    hadayekPhone?: StringFilter<"SystemSettings"> | string
    nasrCityPhone?: StringFilter<"SystemSettings"> | string
    hotline?: StringFilter<"SystemSettings"> | string
    whatsappNumber?: StringFilter<"SystemSettings"> | string
    facebookUrl?: StringFilter<"SystemSettings"> | string
    instagramUrl?: StringNullableFilter<"SystemSettings"> | string | null
    defaultOpenHour?: StringFilter<"SystemSettings"> | string
    defaultCloseHour?: StringFilter<"SystemSettings"> | string
    updatedAt?: DateTimeFilter<"SystemSettings"> | Date | string
  }, "id">

  export type SystemSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    salonNameAr?: SortOrder
    salonNameEn?: SortOrder
    logoUrl?: SortOrder
    systemLocked?: SortOrder
    lockMessage?: SortOrder
    hadayekPhone?: SortOrder
    nasrCityPhone?: SortOrder
    hotline?: SortOrder
    whatsappNumber?: SortOrder
    facebookUrl?: SortOrder
    instagramUrl?: SortOrderInput | SortOrder
    defaultOpenHour?: SortOrder
    defaultCloseHour?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemSettingsCountOrderByAggregateInput
    _max?: SystemSettingsMaxOrderByAggregateInput
    _min?: SystemSettingsMinOrderByAggregateInput
  }

  export type SystemSettingsScalarWhereWithAggregatesInput = {
    AND?: SystemSettingsScalarWhereWithAggregatesInput | SystemSettingsScalarWhereWithAggregatesInput[]
    OR?: SystemSettingsScalarWhereWithAggregatesInput[]
    NOT?: SystemSettingsScalarWhereWithAggregatesInput | SystemSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemSettings"> | string
    salonNameAr?: StringWithAggregatesFilter<"SystemSettings"> | string
    salonNameEn?: StringWithAggregatesFilter<"SystemSettings"> | string
    logoUrl?: StringWithAggregatesFilter<"SystemSettings"> | string
    systemLocked?: BoolWithAggregatesFilter<"SystemSettings"> | boolean
    lockMessage?: StringWithAggregatesFilter<"SystemSettings"> | string
    hadayekPhone?: StringWithAggregatesFilter<"SystemSettings"> | string
    nasrCityPhone?: StringWithAggregatesFilter<"SystemSettings"> | string
    hotline?: StringWithAggregatesFilter<"SystemSettings"> | string
    whatsappNumber?: StringWithAggregatesFilter<"SystemSettings"> | string
    facebookUrl?: StringWithAggregatesFilter<"SystemSettings"> | string
    instagramUrl?: StringNullableWithAggregatesFilter<"SystemSettings"> | string | null
    defaultOpenHour?: StringWithAggregatesFilter<"SystemSettings"> | string
    defaultCloseHour?: StringWithAggregatesFilter<"SystemSettings"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemSettings"> | Date | string
  }

  export type BranchCreateInput = {
    id?: string
    name: string
    code: string
    address: string
    phone: string
    whatsapp?: string | null
    googleMapsUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutBranchInput
    specialists?: SpecialistCreateNestedManyWithoutBranchInput
    bookings?: BookingCreateNestedManyWithoutBranchInput
    tickets?: TicketCreateNestedManyWithoutBranchInput
    products?: ProductCreateNestedManyWithoutBranchInput
    ledgers?: SpecialistLedgerCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    address: string
    phone: string
    whatsapp?: string | null
    googleMapsUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    specialists?: SpecialistUncheckedCreateNestedManyWithoutBranchInput
    bookings?: BookingUncheckedCreateNestedManyWithoutBranchInput
    tickets?: TicketUncheckedCreateNestedManyWithoutBranchInput
    products?: ProductUncheckedCreateNestedManyWithoutBranchInput
    ledgers?: SpecialistLedgerUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBranchNestedInput
    specialists?: SpecialistUpdateManyWithoutBranchNestedInput
    bookings?: BookingUpdateManyWithoutBranchNestedInput
    tickets?: TicketUpdateManyWithoutBranchNestedInput
    products?: ProductUpdateManyWithoutBranchNestedInput
    ledgers?: SpecialistLedgerUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    specialists?: SpecialistUncheckedUpdateManyWithoutBranchNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutBranchNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutBranchNestedInput
    products?: ProductUncheckedUpdateManyWithoutBranchNestedInput
    ledgers?: SpecialistLedgerUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateManyInput = {
    id?: string
    name: string
    code: string
    address: string
    phone: string
    whatsapp?: string | null
    googleMapsUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type BranchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    username: string
    passwordHash: string
    pin?: string
    phone?: string | null
    role?: string
    permissions?: string | null
    isActive?: boolean
    createdAt?: Date | string
    branch?: BranchCreateNestedOneWithoutUsersInput
    specialistProfile?: SpecialistCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    username: string
    passwordHash: string
    pin?: string
    phone?: string | null
    role?: string
    branchId?: string | null
    permissions?: string | null
    isActive?: boolean
    createdAt?: Date | string
    specialistProfile?: SpecialistUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutUsersNestedInput
    specialistProfile?: SpecialistUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialistProfile?: SpecialistUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    username: string
    passwordHash: string
    pin?: string
    phone?: string | null
    role?: string
    branchId?: string | null
    permissions?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialistCreateInput = {
    id?: string
    name: string
    phone?: string | null
    photo?: string | null
    title?: string
    chairNumber?: number
    status?: string
    rating?: number
    payType?: string
    baseSalary?: number
    commissionRate?: number
    isActive?: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutSpecialistProfileInput
    branch: BranchCreateNestedOneWithoutSpecialistsInput
    bookings?: BookingCreateNestedManyWithoutSpecialistInput
    tickets?: TicketCreateNestedManyWithoutSpecialistInput
    ledgers?: SpecialistLedgerCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistUncheckedCreateInput = {
    id?: string
    userId?: string | null
    branchId: string
    name: string
    phone?: string | null
    photo?: string | null
    title?: string
    chairNumber?: number
    status?: string
    rating?: number
    payType?: string
    baseSalary?: number
    commissionRate?: number
    isActive?: boolean
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutSpecialistInput
    tickets?: TicketUncheckedCreateNestedManyWithoutSpecialistInput
    ledgers?: SpecialistLedgerUncheckedCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    payType?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    commissionRate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSpecialistProfileNestedInput
    branch?: BranchUpdateOneRequiredWithoutSpecialistsNestedInput
    bookings?: BookingUpdateManyWithoutSpecialistNestedInput
    tickets?: TicketUpdateManyWithoutSpecialistNestedInput
    ledgers?: SpecialistLedgerUpdateManyWithoutSpecialistNestedInput
  }

  export type SpecialistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    payType?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    commissionRate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutSpecialistNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutSpecialistNestedInput
    ledgers?: SpecialistLedgerUncheckedUpdateManyWithoutSpecialistNestedInput
  }

  export type SpecialistCreateManyInput = {
    id?: string
    userId?: string | null
    branchId: string
    name: string
    phone?: string | null
    photo?: string | null
    title?: string
    chairNumber?: number
    status?: string
    rating?: number
    payType?: string
    baseSalary?: number
    commissionRate?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SpecialistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    payType?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    commissionRate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    payType?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    commissionRate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    nameAr: string
    nameEn?: string | null
    category?: string
    price: number
    durationMinutes?: number
    description?: string | null
    image?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    nameAr: string
    nameEn?: string | null
    category?: string
    price: number
    durationMinutes?: number
    description?: string | null
    image?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateManyInput = {
    id?: string
    nameAr: string
    nameEn?: string | null
    category?: string
    price: number
    durationMinutes?: number
    description?: string | null
    image?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    durationMinutes?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    passwordHash?: string | null
    isVerified?: boolean
    verificationCode?: string | null
    avatar?: string | null
    notes?: string | null
    vipLevel?: string
    totalVisits?: number
    totalSpent?: number
    createdAt?: Date | string
    lastVisitAt?: Date | string | null
    bookings?: BookingCreateNestedManyWithoutCustomerInput
    tickets?: TicketCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    passwordHash?: string | null
    isVerified?: boolean
    verificationCode?: string | null
    avatar?: string | null
    notes?: string | null
    vipLevel?: string
    totalVisits?: number
    totalSpent?: number
    createdAt?: Date | string
    lastVisitAt?: Date | string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
    tickets?: TicketUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    vipLevel?: StringFieldUpdateOperationsInput | string
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
    tickets?: TicketUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    vipLevel?: StringFieldUpdateOperationsInput | string
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    passwordHash?: string | null
    isVerified?: boolean
    verificationCode?: string | null
    avatar?: string | null
    notes?: string | null
    vipLevel?: string
    totalVisits?: number
    totalSpent?: number
    createdAt?: Date | string
    lastVisitAt?: Date | string | null
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    vipLevel?: StringFieldUpdateOperationsInput | string
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    vipLevel?: StringFieldUpdateOperationsInput | string
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookingCreateInput = {
    id?: string
    bookingNumber: string
    serviceIds: string
    bookingDate: string
    timeSlot: string
    status?: string
    notes?: string | null
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutBookingsInput
    branch: BranchCreateNestedOneWithoutBookingsInput
    specialist?: SpecialistCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    bookingNumber: string
    customerId: string
    branchId: string
    specialistId?: string | null
    serviceIds: string
    bookingDate: string
    timeSlot: string
    status?: string
    notes?: string | null
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingNumber?: StringFieldUpdateOperationsInput | string
    serviceIds?: StringFieldUpdateOperationsInput | string
    bookingDate?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
    branch?: BranchUpdateOneRequiredWithoutBookingsNestedInput
    specialist?: SpecialistUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    specialistId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceIds?: StringFieldUpdateOperationsInput | string
    bookingDate?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: string
    bookingNumber: string
    customerId: string
    branchId: string
    specialistId?: string | null
    serviceIds: string
    bookingDate: string
    timeSlot: string
    status?: string
    notes?: string | null
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingNumber?: StringFieldUpdateOperationsInput | string
    serviceIds?: StringFieldUpdateOperationsInput | string
    bookingDate?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    specialistId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceIds?: StringFieldUpdateOperationsInput | string
    bookingDate?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    id?: string
    ticketNumber: string
    customerName: string
    customerPhone?: string | null
    chairNumber?: number
    status?: string
    services?: string
    retailItems?: string
    servicesTotal?: number
    retailTotal?: number
    discount?: number
    tipAmount?: number
    finalAmount?: number
    paymentMethod?: string
    startTime?: Date | string
    endTime?: Date | string | null
    durationMinutes?: number | null
    cashierName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutTicketsInput
    specialist: SpecialistCreateNestedOneWithoutTicketsInput
    customer?: CustomerCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    ticketNumber: string
    branchId: string
    specialistId: string
    customerId?: string | null
    customerName: string
    customerPhone?: string | null
    chairNumber?: number
    status?: string
    services?: string
    retailItems?: string
    servicesTotal?: number
    retailTotal?: number
    discount?: number
    tipAmount?: number
    finalAmount?: number
    paymentMethod?: string
    startTime?: Date | string
    endTime?: Date | string | null
    durationMinutes?: number | null
    cashierName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    retailItems?: StringFieldUpdateOperationsInput | string
    servicesTotal?: FloatFieldUpdateOperationsInput | number
    retailTotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    tipAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cashierName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutTicketsNestedInput
    specialist?: SpecialistUpdateOneRequiredWithoutTicketsNestedInput
    customer?: CustomerUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    specialistId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    retailItems?: StringFieldUpdateOperationsInput | string
    servicesTotal?: FloatFieldUpdateOperationsInput | number
    retailTotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    tipAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cashierName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyInput = {
    id?: string
    ticketNumber: string
    branchId: string
    specialistId: string
    customerId?: string | null
    customerName: string
    customerPhone?: string | null
    chairNumber?: number
    status?: string
    services?: string
    retailItems?: string
    servicesTotal?: number
    retailTotal?: number
    discount?: number
    tipAmount?: number
    finalAmount?: number
    paymentMethod?: string
    startTime?: Date | string
    endTime?: Date | string | null
    durationMinutes?: number | null
    cashierName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    retailItems?: StringFieldUpdateOperationsInput | string
    servicesTotal?: FloatFieldUpdateOperationsInput | number
    retailTotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    tipAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cashierName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    specialistId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    retailItems?: StringFieldUpdateOperationsInput | string
    servicesTotal?: FloatFieldUpdateOperationsInput | number
    retailTotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    tipAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cashierName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    nameAr: string
    category?: string
    price: number
    costPrice?: number
    stockQty?: number
    minStockAlert?: number
    image?: string | null
    barcode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    branch?: BranchCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    branchId?: string | null
    nameAr: string
    category?: string
    price: number
    costPrice?: number
    stockQty?: number
    minStockAlert?: number
    image?: string | null
    barcode?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stockQty?: IntFieldUpdateOperationsInput | number
    minStockAlert?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    nameAr?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stockQty?: IntFieldUpdateOperationsInput | number
    minStockAlert?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyInput = {
    id?: string
    branchId?: string | null
    nameAr: string
    category?: string
    price: number
    costPrice?: number
    stockQty?: number
    minStockAlert?: number
    image?: string | null
    barcode?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stockQty?: IntFieldUpdateOperationsInput | number
    minStockAlert?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    nameAr?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stockQty?: IntFieldUpdateOperationsInput | number
    minStockAlert?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialistLedgerCreateInput = {
    id?: string
    type: string
    amount: number
    notes?: string | null
    date?: Date | string
    recordedBy?: string
    createdAt?: Date | string
    specialist: SpecialistCreateNestedOneWithoutLedgersInput
    branch: BranchCreateNestedOneWithoutLedgersInput
  }

  export type SpecialistLedgerUncheckedCreateInput = {
    id?: string
    specialistId: string
    branchId: string
    type: string
    amount: number
    notes?: string | null
    date?: Date | string
    recordedBy?: string
    createdAt?: Date | string
  }

  export type SpecialistLedgerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    recordedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialist?: SpecialistUpdateOneRequiredWithoutLedgersNestedInput
    branch?: BranchUpdateOneRequiredWithoutLedgersNestedInput
  }

  export type SpecialistLedgerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialistId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    recordedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialistLedgerCreateManyInput = {
    id?: string
    specialistId: string
    branchId: string
    type: string
    amount: number
    notes?: string | null
    date?: Date | string
    recordedBy?: string
    createdAt?: Date | string
  }

  export type SpecialistLedgerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    recordedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialistLedgerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialistId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    recordedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsCreateInput = {
    id?: string
    salonNameAr?: string
    salonNameEn?: string
    logoUrl?: string
    systemLocked?: boolean
    lockMessage?: string
    hadayekPhone?: string
    nasrCityPhone?: string
    hotline?: string
    whatsappNumber?: string
    facebookUrl?: string
    instagramUrl?: string | null
    defaultOpenHour?: string
    defaultCloseHour?: string
    updatedAt?: Date | string
  }

  export type SystemSettingsUncheckedCreateInput = {
    id?: string
    salonNameAr?: string
    salonNameEn?: string
    logoUrl?: string
    systemLocked?: boolean
    lockMessage?: string
    hadayekPhone?: string
    nasrCityPhone?: string
    hotline?: string
    whatsappNumber?: string
    facebookUrl?: string
    instagramUrl?: string | null
    defaultOpenHour?: string
    defaultCloseHour?: string
    updatedAt?: Date | string
  }

  export type SystemSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonNameAr?: StringFieldUpdateOperationsInput | string
    salonNameEn?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    systemLocked?: BoolFieldUpdateOperationsInput | boolean
    lockMessage?: StringFieldUpdateOperationsInput | string
    hadayekPhone?: StringFieldUpdateOperationsInput | string
    nasrCityPhone?: StringFieldUpdateOperationsInput | string
    hotline?: StringFieldUpdateOperationsInput | string
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    facebookUrl?: StringFieldUpdateOperationsInput | string
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    defaultOpenHour?: StringFieldUpdateOperationsInput | string
    defaultCloseHour?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonNameAr?: StringFieldUpdateOperationsInput | string
    salonNameEn?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    systemLocked?: BoolFieldUpdateOperationsInput | boolean
    lockMessage?: StringFieldUpdateOperationsInput | string
    hadayekPhone?: StringFieldUpdateOperationsInput | string
    nasrCityPhone?: StringFieldUpdateOperationsInput | string
    hotline?: StringFieldUpdateOperationsInput | string
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    facebookUrl?: StringFieldUpdateOperationsInput | string
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    defaultOpenHour?: StringFieldUpdateOperationsInput | string
    defaultCloseHour?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsCreateManyInput = {
    id?: string
    salonNameAr?: string
    salonNameEn?: string
    logoUrl?: string
    systemLocked?: boolean
    lockMessage?: string
    hadayekPhone?: string
    nasrCityPhone?: string
    hotline?: string
    whatsappNumber?: string
    facebookUrl?: string
    instagramUrl?: string | null
    defaultOpenHour?: string
    defaultCloseHour?: string
    updatedAt?: Date | string
  }

  export type SystemSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonNameAr?: StringFieldUpdateOperationsInput | string
    salonNameEn?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    systemLocked?: BoolFieldUpdateOperationsInput | boolean
    lockMessage?: StringFieldUpdateOperationsInput | string
    hadayekPhone?: StringFieldUpdateOperationsInput | string
    nasrCityPhone?: StringFieldUpdateOperationsInput | string
    hotline?: StringFieldUpdateOperationsInput | string
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    facebookUrl?: StringFieldUpdateOperationsInput | string
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    defaultOpenHour?: StringFieldUpdateOperationsInput | string
    defaultCloseHour?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    salonNameAr?: StringFieldUpdateOperationsInput | string
    salonNameEn?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    systemLocked?: BoolFieldUpdateOperationsInput | boolean
    lockMessage?: StringFieldUpdateOperationsInput | string
    hadayekPhone?: StringFieldUpdateOperationsInput | string
    nasrCityPhone?: StringFieldUpdateOperationsInput | string
    hotline?: StringFieldUpdateOperationsInput | string
    whatsappNumber?: StringFieldUpdateOperationsInput | string
    facebookUrl?: StringFieldUpdateOperationsInput | string
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    defaultOpenHour?: StringFieldUpdateOperationsInput | string
    defaultCloseHour?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SpecialistListRelationFilter = {
    every?: SpecialistWhereInput
    some?: SpecialistWhereInput
    none?: SpecialistWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SpecialistLedgerListRelationFilter = {
    every?: SpecialistLedgerWhereInput
    some?: SpecialistLedgerWhereInput
    none?: SpecialistLedgerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecialistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecialistLedgerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BranchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    googleMapsUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    googleMapsUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    googleMapsUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BranchNullableScalarRelationFilter = {
    is?: BranchWhereInput | null
    isNot?: BranchWhereInput | null
  }

  export type SpecialistNullableScalarRelationFilter = {
    is?: SpecialistWhereInput | null
    isNot?: SpecialistWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    pin?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    branchId?: SortOrder
    permissions?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    pin?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    branchId?: SortOrder
    permissions?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    pin?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    branchId?: SortOrder
    permissions?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BranchScalarRelationFilter = {
    is?: BranchWhereInput
    isNot?: BranchWhereInput
  }

  export type SpecialistCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    branchId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    photo?: SortOrder
    title?: SortOrder
    chairNumber?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    payType?: SortOrder
    baseSalary?: SortOrder
    commissionRate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type SpecialistAvgOrderByAggregateInput = {
    chairNumber?: SortOrder
    rating?: SortOrder
    baseSalary?: SortOrder
    commissionRate?: SortOrder
  }

  export type SpecialistMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    branchId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    photo?: SortOrder
    title?: SortOrder
    chairNumber?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    payType?: SortOrder
    baseSalary?: SortOrder
    commissionRate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type SpecialistMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    branchId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    photo?: SortOrder
    title?: SortOrder
    chairNumber?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    payType?: SortOrder
    baseSalary?: SortOrder
    commissionRate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type SpecialistSumOrderByAggregateInput = {
    chairNumber?: SortOrder
    rating?: SortOrder
    baseSalary?: SortOrder
    commissionRate?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    nameAr?: SortOrder
    nameEn?: SortOrder
    category?: SortOrder
    price?: SortOrder
    durationMinutes?: SortOrder
    description?: SortOrder
    image?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    price?: SortOrder
    durationMinutes?: SortOrder
    sortOrder?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    nameAr?: SortOrder
    nameEn?: SortOrder
    category?: SortOrder
    price?: SortOrder
    durationMinutes?: SortOrder
    description?: SortOrder
    image?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    nameAr?: SortOrder
    nameEn?: SortOrder
    category?: SortOrder
    price?: SortOrder
    durationMinutes?: SortOrder
    description?: SortOrder
    image?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    price?: SortOrder
    durationMinutes?: SortOrder
    sortOrder?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isVerified?: SortOrder
    verificationCode?: SortOrder
    avatar?: SortOrder
    notes?: SortOrder
    vipLevel?: SortOrder
    totalVisits?: SortOrder
    totalSpent?: SortOrder
    createdAt?: SortOrder
    lastVisitAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    totalVisits?: SortOrder
    totalSpent?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isVerified?: SortOrder
    verificationCode?: SortOrder
    avatar?: SortOrder
    notes?: SortOrder
    vipLevel?: SortOrder
    totalVisits?: SortOrder
    totalSpent?: SortOrder
    createdAt?: SortOrder
    lastVisitAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isVerified?: SortOrder
    verificationCode?: SortOrder
    avatar?: SortOrder
    notes?: SortOrder
    vipLevel?: SortOrder
    totalVisits?: SortOrder
    totalSpent?: SortOrder
    createdAt?: SortOrder
    lastVisitAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    totalVisits?: SortOrder
    totalSpent?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    bookingNumber?: SortOrder
    customerId?: SortOrder
    branchId?: SortOrder
    specialistId?: SortOrder
    serviceIds?: SortOrder
    bookingDate?: SortOrder
    timeSlot?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingNumber?: SortOrder
    customerId?: SortOrder
    branchId?: SortOrder
    specialistId?: SortOrder
    serviceIds?: SortOrder
    bookingDate?: SortOrder
    timeSlot?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    bookingNumber?: SortOrder
    customerId?: SortOrder
    branchId?: SortOrder
    specialistId?: SortOrder
    serviceIds?: SortOrder
    bookingDate?: SortOrder
    timeSlot?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SpecialistScalarRelationFilter = {
    is?: SpecialistWhereInput
    isNot?: SpecialistWhereInput
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    branchId?: SortOrder
    specialistId?: SortOrder
    customerId?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    chairNumber?: SortOrder
    status?: SortOrder
    services?: SortOrder
    retailItems?: SortOrder
    servicesTotal?: SortOrder
    retailTotal?: SortOrder
    discount?: SortOrder
    tipAmount?: SortOrder
    finalAmount?: SortOrder
    paymentMethod?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationMinutes?: SortOrder
    cashierName?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    chairNumber?: SortOrder
    servicesTotal?: SortOrder
    retailTotal?: SortOrder
    discount?: SortOrder
    tipAmount?: SortOrder
    finalAmount?: SortOrder
    durationMinutes?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    branchId?: SortOrder
    specialistId?: SortOrder
    customerId?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    chairNumber?: SortOrder
    status?: SortOrder
    services?: SortOrder
    retailItems?: SortOrder
    servicesTotal?: SortOrder
    retailTotal?: SortOrder
    discount?: SortOrder
    tipAmount?: SortOrder
    finalAmount?: SortOrder
    paymentMethod?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationMinutes?: SortOrder
    cashierName?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    branchId?: SortOrder
    specialistId?: SortOrder
    customerId?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    chairNumber?: SortOrder
    status?: SortOrder
    services?: SortOrder
    retailItems?: SortOrder
    servicesTotal?: SortOrder
    retailTotal?: SortOrder
    discount?: SortOrder
    tipAmount?: SortOrder
    finalAmount?: SortOrder
    paymentMethod?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    durationMinutes?: SortOrder
    cashierName?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    chairNumber?: SortOrder
    servicesTotal?: SortOrder
    retailTotal?: SortOrder
    discount?: SortOrder
    tipAmount?: SortOrder
    finalAmount?: SortOrder
    durationMinutes?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    nameAr?: SortOrder
    category?: SortOrder
    price?: SortOrder
    costPrice?: SortOrder
    stockQty?: SortOrder
    minStockAlert?: SortOrder
    image?: SortOrder
    barcode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    costPrice?: SortOrder
    stockQty?: SortOrder
    minStockAlert?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    nameAr?: SortOrder
    category?: SortOrder
    price?: SortOrder
    costPrice?: SortOrder
    stockQty?: SortOrder
    minStockAlert?: SortOrder
    image?: SortOrder
    barcode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    nameAr?: SortOrder
    category?: SortOrder
    price?: SortOrder
    costPrice?: SortOrder
    stockQty?: SortOrder
    minStockAlert?: SortOrder
    image?: SortOrder
    barcode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    costPrice?: SortOrder
    stockQty?: SortOrder
    minStockAlert?: SortOrder
  }

  export type SpecialistLedgerCountOrderByAggregateInput = {
    id?: SortOrder
    specialistId?: SortOrder
    branchId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    recordedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type SpecialistLedgerAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SpecialistLedgerMaxOrderByAggregateInput = {
    id?: SortOrder
    specialistId?: SortOrder
    branchId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    recordedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type SpecialistLedgerMinOrderByAggregateInput = {
    id?: SortOrder
    specialistId?: SortOrder
    branchId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    notes?: SortOrder
    date?: SortOrder
    recordedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type SpecialistLedgerSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SystemSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    salonNameAr?: SortOrder
    salonNameEn?: SortOrder
    logoUrl?: SortOrder
    systemLocked?: SortOrder
    lockMessage?: SortOrder
    hadayekPhone?: SortOrder
    nasrCityPhone?: SortOrder
    hotline?: SortOrder
    whatsappNumber?: SortOrder
    facebookUrl?: SortOrder
    instagramUrl?: SortOrder
    defaultOpenHour?: SortOrder
    defaultCloseHour?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    salonNameAr?: SortOrder
    salonNameEn?: SortOrder
    logoUrl?: SortOrder
    systemLocked?: SortOrder
    lockMessage?: SortOrder
    hadayekPhone?: SortOrder
    nasrCityPhone?: SortOrder
    hotline?: SortOrder
    whatsappNumber?: SortOrder
    facebookUrl?: SortOrder
    instagramUrl?: SortOrder
    defaultOpenHour?: SortOrder
    defaultCloseHour?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    salonNameAr?: SortOrder
    salonNameEn?: SortOrder
    logoUrl?: SortOrder
    systemLocked?: SortOrder
    lockMessage?: SortOrder
    hadayekPhone?: SortOrder
    nasrCityPhone?: SortOrder
    hotline?: SortOrder
    whatsappNumber?: SortOrder
    facebookUrl?: SortOrder
    instagramUrl?: SortOrder
    defaultOpenHour?: SortOrder
    defaultCloseHour?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateNestedManyWithoutBranchInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SpecialistCreateNestedManyWithoutBranchInput = {
    create?: XOR<SpecialistCreateWithoutBranchInput, SpecialistUncheckedCreateWithoutBranchInput> | SpecialistCreateWithoutBranchInput[] | SpecialistUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: SpecialistCreateOrConnectWithoutBranchInput | SpecialistCreateOrConnectWithoutBranchInput[]
    createMany?: SpecialistCreateManyBranchInputEnvelope
    connect?: SpecialistWhereUniqueInput | SpecialistWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutBranchInput = {
    create?: XOR<BookingCreateWithoutBranchInput, BookingUncheckedCreateWithoutBranchInput> | BookingCreateWithoutBranchInput[] | BookingUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBranchInput | BookingCreateOrConnectWithoutBranchInput[]
    createMany?: BookingCreateManyBranchInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutBranchInput = {
    create?: XOR<TicketCreateWithoutBranchInput, TicketUncheckedCreateWithoutBranchInput> | TicketCreateWithoutBranchInput[] | TicketUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBranchInput | TicketCreateOrConnectWithoutBranchInput[]
    createMany?: TicketCreateManyBranchInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutBranchInput = {
    create?: XOR<ProductCreateWithoutBranchInput, ProductUncheckedCreateWithoutBranchInput> | ProductCreateWithoutBranchInput[] | ProductUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBranchInput | ProductCreateOrConnectWithoutBranchInput[]
    createMany?: ProductCreateManyBranchInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SpecialistLedgerCreateNestedManyWithoutBranchInput = {
    create?: XOR<SpecialistLedgerCreateWithoutBranchInput, SpecialistLedgerUncheckedCreateWithoutBranchInput> | SpecialistLedgerCreateWithoutBranchInput[] | SpecialistLedgerUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: SpecialistLedgerCreateOrConnectWithoutBranchInput | SpecialistLedgerCreateOrConnectWithoutBranchInput[]
    createMany?: SpecialistLedgerCreateManyBranchInputEnvelope
    connect?: SpecialistLedgerWhereUniqueInput | SpecialistLedgerWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SpecialistUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<SpecialistCreateWithoutBranchInput, SpecialistUncheckedCreateWithoutBranchInput> | SpecialistCreateWithoutBranchInput[] | SpecialistUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: SpecialistCreateOrConnectWithoutBranchInput | SpecialistCreateOrConnectWithoutBranchInput[]
    createMany?: SpecialistCreateManyBranchInputEnvelope
    connect?: SpecialistWhereUniqueInput | SpecialistWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<BookingCreateWithoutBranchInput, BookingUncheckedCreateWithoutBranchInput> | BookingCreateWithoutBranchInput[] | BookingUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBranchInput | BookingCreateOrConnectWithoutBranchInput[]
    createMany?: BookingCreateManyBranchInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<TicketCreateWithoutBranchInput, TicketUncheckedCreateWithoutBranchInput> | TicketCreateWithoutBranchInput[] | TicketUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBranchInput | TicketCreateOrConnectWithoutBranchInput[]
    createMany?: TicketCreateManyBranchInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<ProductCreateWithoutBranchInput, ProductUncheckedCreateWithoutBranchInput> | ProductCreateWithoutBranchInput[] | ProductUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBranchInput | ProductCreateOrConnectWithoutBranchInput[]
    createMany?: ProductCreateManyBranchInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SpecialistLedgerUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<SpecialistLedgerCreateWithoutBranchInput, SpecialistLedgerUncheckedCreateWithoutBranchInput> | SpecialistLedgerCreateWithoutBranchInput[] | SpecialistLedgerUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: SpecialistLedgerCreateOrConnectWithoutBranchInput | SpecialistLedgerCreateOrConnectWithoutBranchInput[]
    createMany?: SpecialistLedgerCreateManyBranchInputEnvelope
    connect?: SpecialistLedgerWhereUniqueInput | SpecialistLedgerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutBranchNestedInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBranchInput | UserUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBranchInput | UserUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBranchInput | UserUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SpecialistUpdateManyWithoutBranchNestedInput = {
    create?: XOR<SpecialistCreateWithoutBranchInput, SpecialistUncheckedCreateWithoutBranchInput> | SpecialistCreateWithoutBranchInput[] | SpecialistUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: SpecialistCreateOrConnectWithoutBranchInput | SpecialistCreateOrConnectWithoutBranchInput[]
    upsert?: SpecialistUpsertWithWhereUniqueWithoutBranchInput | SpecialistUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: SpecialistCreateManyBranchInputEnvelope
    set?: SpecialistWhereUniqueInput | SpecialistWhereUniqueInput[]
    disconnect?: SpecialistWhereUniqueInput | SpecialistWhereUniqueInput[]
    delete?: SpecialistWhereUniqueInput | SpecialistWhereUniqueInput[]
    connect?: SpecialistWhereUniqueInput | SpecialistWhereUniqueInput[]
    update?: SpecialistUpdateWithWhereUniqueWithoutBranchInput | SpecialistUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: SpecialistUpdateManyWithWhereWithoutBranchInput | SpecialistUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: SpecialistScalarWhereInput | SpecialistScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutBranchNestedInput = {
    create?: XOR<BookingCreateWithoutBranchInput, BookingUncheckedCreateWithoutBranchInput> | BookingCreateWithoutBranchInput[] | BookingUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBranchInput | BookingCreateOrConnectWithoutBranchInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutBranchInput | BookingUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: BookingCreateManyBranchInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutBranchInput | BookingUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutBranchInput | BookingUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutBranchNestedInput = {
    create?: XOR<TicketCreateWithoutBranchInput, TicketUncheckedCreateWithoutBranchInput> | TicketCreateWithoutBranchInput[] | TicketUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBranchInput | TicketCreateOrConnectWithoutBranchInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutBranchInput | TicketUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: TicketCreateManyBranchInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutBranchInput | TicketUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutBranchInput | TicketUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutBranchNestedInput = {
    create?: XOR<ProductCreateWithoutBranchInput, ProductUncheckedCreateWithoutBranchInput> | ProductCreateWithoutBranchInput[] | ProductUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBranchInput | ProductCreateOrConnectWithoutBranchInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBranchInput | ProductUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: ProductCreateManyBranchInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBranchInput | ProductUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBranchInput | ProductUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SpecialistLedgerUpdateManyWithoutBranchNestedInput = {
    create?: XOR<SpecialistLedgerCreateWithoutBranchInput, SpecialistLedgerUncheckedCreateWithoutBranchInput> | SpecialistLedgerCreateWithoutBranchInput[] | SpecialistLedgerUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: SpecialistLedgerCreateOrConnectWithoutBranchInput | SpecialistLedgerCreateOrConnectWithoutBranchInput[]
    upsert?: SpecialistLedgerUpsertWithWhereUniqueWithoutBranchInput | SpecialistLedgerUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: SpecialistLedgerCreateManyBranchInputEnvelope
    set?: SpecialistLedgerWhereUniqueInput | SpecialistLedgerWhereUniqueInput[]
    disconnect?: SpecialistLedgerWhereUniqueInput | SpecialistLedgerWhereUniqueInput[]
    delete?: SpecialistLedgerWhereUniqueInput | SpecialistLedgerWhereUniqueInput[]
    connect?: SpecialistLedgerWhereUniqueInput | SpecialistLedgerWhereUniqueInput[]
    update?: SpecialistLedgerUpdateWithWhereUniqueWithoutBranchInput | SpecialistLedgerUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: SpecialistLedgerUpdateManyWithWhereWithoutBranchInput | SpecialistLedgerUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: SpecialistLedgerScalarWhereInput | SpecialistLedgerScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBranchInput | UserUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBranchInput | UserUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBranchInput | UserUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SpecialistUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<SpecialistCreateWithoutBranchInput, SpecialistUncheckedCreateWithoutBranchInput> | SpecialistCreateWithoutBranchInput[] | SpecialistUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: SpecialistCreateOrConnectWithoutBranchInput | SpecialistCreateOrConnectWithoutBranchInput[]
    upsert?: SpecialistUpsertWithWhereUniqueWithoutBranchInput | SpecialistUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: SpecialistCreateManyBranchInputEnvelope
    set?: SpecialistWhereUniqueInput | SpecialistWhereUniqueInput[]
    disconnect?: SpecialistWhereUniqueInput | SpecialistWhereUniqueInput[]
    delete?: SpecialistWhereUniqueInput | SpecialistWhereUniqueInput[]
    connect?: SpecialistWhereUniqueInput | SpecialistWhereUniqueInput[]
    update?: SpecialistUpdateWithWhereUniqueWithoutBranchInput | SpecialistUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: SpecialistUpdateManyWithWhereWithoutBranchInput | SpecialistUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: SpecialistScalarWhereInput | SpecialistScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<BookingCreateWithoutBranchInput, BookingUncheckedCreateWithoutBranchInput> | BookingCreateWithoutBranchInput[] | BookingUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBranchInput | BookingCreateOrConnectWithoutBranchInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutBranchInput | BookingUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: BookingCreateManyBranchInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutBranchInput | BookingUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutBranchInput | BookingUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<TicketCreateWithoutBranchInput, TicketUncheckedCreateWithoutBranchInput> | TicketCreateWithoutBranchInput[] | TicketUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBranchInput | TicketCreateOrConnectWithoutBranchInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutBranchInput | TicketUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: TicketCreateManyBranchInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutBranchInput | TicketUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutBranchInput | TicketUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<ProductCreateWithoutBranchInput, ProductUncheckedCreateWithoutBranchInput> | ProductCreateWithoutBranchInput[] | ProductUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBranchInput | ProductCreateOrConnectWithoutBranchInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBranchInput | ProductUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: ProductCreateManyBranchInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBranchInput | ProductUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBranchInput | ProductUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SpecialistLedgerUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<SpecialistLedgerCreateWithoutBranchInput, SpecialistLedgerUncheckedCreateWithoutBranchInput> | SpecialistLedgerCreateWithoutBranchInput[] | SpecialistLedgerUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: SpecialistLedgerCreateOrConnectWithoutBranchInput | SpecialistLedgerCreateOrConnectWithoutBranchInput[]
    upsert?: SpecialistLedgerUpsertWithWhereUniqueWithoutBranchInput | SpecialistLedgerUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: SpecialistLedgerCreateManyBranchInputEnvelope
    set?: SpecialistLedgerWhereUniqueInput | SpecialistLedgerWhereUniqueInput[]
    disconnect?: SpecialistLedgerWhereUniqueInput | SpecialistLedgerWhereUniqueInput[]
    delete?: SpecialistLedgerWhereUniqueInput | SpecialistLedgerWhereUniqueInput[]
    connect?: SpecialistLedgerWhereUniqueInput | SpecialistLedgerWhereUniqueInput[]
    update?: SpecialistLedgerUpdateWithWhereUniqueWithoutBranchInput | SpecialistLedgerUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: SpecialistLedgerUpdateManyWithWhereWithoutBranchInput | SpecialistLedgerUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: SpecialistLedgerScalarWhereInput | SpecialistLedgerScalarWhereInput[]
  }

  export type BranchCreateNestedOneWithoutUsersInput = {
    create?: XOR<BranchCreateWithoutUsersInput, BranchUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BranchCreateOrConnectWithoutUsersInput
    connect?: BranchWhereUniqueInput
  }

  export type SpecialistCreateNestedOneWithoutUserInput = {
    create?: XOR<SpecialistCreateWithoutUserInput, SpecialistUncheckedCreateWithoutUserInput>
    connectOrCreate?: SpecialistCreateOrConnectWithoutUserInput
    connect?: SpecialistWhereUniqueInput
  }

  export type SpecialistUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SpecialistCreateWithoutUserInput, SpecialistUncheckedCreateWithoutUserInput>
    connectOrCreate?: SpecialistCreateOrConnectWithoutUserInput
    connect?: SpecialistWhereUniqueInput
  }

  export type BranchUpdateOneWithoutUsersNestedInput = {
    create?: XOR<BranchCreateWithoutUsersInput, BranchUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BranchCreateOrConnectWithoutUsersInput
    upsert?: BranchUpsertWithoutUsersInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutUsersInput, BranchUpdateWithoutUsersInput>, BranchUncheckedUpdateWithoutUsersInput>
  }

  export type SpecialistUpdateOneWithoutUserNestedInput = {
    create?: XOR<SpecialistCreateWithoutUserInput, SpecialistUncheckedCreateWithoutUserInput>
    connectOrCreate?: SpecialistCreateOrConnectWithoutUserInput
    upsert?: SpecialistUpsertWithoutUserInput
    disconnect?: SpecialistWhereInput | boolean
    delete?: SpecialistWhereInput | boolean
    connect?: SpecialistWhereUniqueInput
    update?: XOR<XOR<SpecialistUpdateToOneWithWhereWithoutUserInput, SpecialistUpdateWithoutUserInput>, SpecialistUncheckedUpdateWithoutUserInput>
  }

  export type SpecialistUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SpecialistCreateWithoutUserInput, SpecialistUncheckedCreateWithoutUserInput>
    connectOrCreate?: SpecialistCreateOrConnectWithoutUserInput
    upsert?: SpecialistUpsertWithoutUserInput
    disconnect?: SpecialistWhereInput | boolean
    delete?: SpecialistWhereInput | boolean
    connect?: SpecialistWhereUniqueInput
    update?: XOR<XOR<SpecialistUpdateToOneWithWhereWithoutUserInput, SpecialistUpdateWithoutUserInput>, SpecialistUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutSpecialistProfileInput = {
    create?: XOR<UserCreateWithoutSpecialistProfileInput, UserUncheckedCreateWithoutSpecialistProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpecialistProfileInput
    connect?: UserWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutSpecialistsInput = {
    create?: XOR<BranchCreateWithoutSpecialistsInput, BranchUncheckedCreateWithoutSpecialistsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutSpecialistsInput
    connect?: BranchWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutSpecialistInput = {
    create?: XOR<BookingCreateWithoutSpecialistInput, BookingUncheckedCreateWithoutSpecialistInput> | BookingCreateWithoutSpecialistInput[] | BookingUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSpecialistInput | BookingCreateOrConnectWithoutSpecialistInput[]
    createMany?: BookingCreateManySpecialistInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutSpecialistInput = {
    create?: XOR<TicketCreateWithoutSpecialistInput, TicketUncheckedCreateWithoutSpecialistInput> | TicketCreateWithoutSpecialistInput[] | TicketUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSpecialistInput | TicketCreateOrConnectWithoutSpecialistInput[]
    createMany?: TicketCreateManySpecialistInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type SpecialistLedgerCreateNestedManyWithoutSpecialistInput = {
    create?: XOR<SpecialistLedgerCreateWithoutSpecialistInput, SpecialistLedgerUncheckedCreateWithoutSpecialistInput> | SpecialistLedgerCreateWithoutSpecialistInput[] | SpecialistLedgerUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: SpecialistLedgerCreateOrConnectWithoutSpecialistInput | SpecialistLedgerCreateOrConnectWithoutSpecialistInput[]
    createMany?: SpecialistLedgerCreateManySpecialistInputEnvelope
    connect?: SpecialistLedgerWhereUniqueInput | SpecialistLedgerWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutSpecialistInput = {
    create?: XOR<BookingCreateWithoutSpecialistInput, BookingUncheckedCreateWithoutSpecialistInput> | BookingCreateWithoutSpecialistInput[] | BookingUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSpecialistInput | BookingCreateOrConnectWithoutSpecialistInput[]
    createMany?: BookingCreateManySpecialistInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutSpecialistInput = {
    create?: XOR<TicketCreateWithoutSpecialistInput, TicketUncheckedCreateWithoutSpecialistInput> | TicketCreateWithoutSpecialistInput[] | TicketUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSpecialistInput | TicketCreateOrConnectWithoutSpecialistInput[]
    createMany?: TicketCreateManySpecialistInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type SpecialistLedgerUncheckedCreateNestedManyWithoutSpecialistInput = {
    create?: XOR<SpecialistLedgerCreateWithoutSpecialistInput, SpecialistLedgerUncheckedCreateWithoutSpecialistInput> | SpecialistLedgerCreateWithoutSpecialistInput[] | SpecialistLedgerUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: SpecialistLedgerCreateOrConnectWithoutSpecialistInput | SpecialistLedgerCreateOrConnectWithoutSpecialistInput[]
    createMany?: SpecialistLedgerCreateManySpecialistInputEnvelope
    connect?: SpecialistLedgerWhereUniqueInput | SpecialistLedgerWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutSpecialistProfileNestedInput = {
    create?: XOR<UserCreateWithoutSpecialistProfileInput, UserUncheckedCreateWithoutSpecialistProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpecialistProfileInput
    upsert?: UserUpsertWithoutSpecialistProfileInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSpecialistProfileInput, UserUpdateWithoutSpecialistProfileInput>, UserUncheckedUpdateWithoutSpecialistProfileInput>
  }

  export type BranchUpdateOneRequiredWithoutSpecialistsNestedInput = {
    create?: XOR<BranchCreateWithoutSpecialistsInput, BranchUncheckedCreateWithoutSpecialistsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutSpecialistsInput
    upsert?: BranchUpsertWithoutSpecialistsInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutSpecialistsInput, BranchUpdateWithoutSpecialistsInput>, BranchUncheckedUpdateWithoutSpecialistsInput>
  }

  export type BookingUpdateManyWithoutSpecialistNestedInput = {
    create?: XOR<BookingCreateWithoutSpecialistInput, BookingUncheckedCreateWithoutSpecialistInput> | BookingCreateWithoutSpecialistInput[] | BookingUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSpecialistInput | BookingCreateOrConnectWithoutSpecialistInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutSpecialistInput | BookingUpsertWithWhereUniqueWithoutSpecialistInput[]
    createMany?: BookingCreateManySpecialistInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutSpecialistInput | BookingUpdateWithWhereUniqueWithoutSpecialistInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutSpecialistInput | BookingUpdateManyWithWhereWithoutSpecialistInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutSpecialistNestedInput = {
    create?: XOR<TicketCreateWithoutSpecialistInput, TicketUncheckedCreateWithoutSpecialistInput> | TicketCreateWithoutSpecialistInput[] | TicketUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSpecialistInput | TicketCreateOrConnectWithoutSpecialistInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutSpecialistInput | TicketUpsertWithWhereUniqueWithoutSpecialistInput[]
    createMany?: TicketCreateManySpecialistInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutSpecialistInput | TicketUpdateWithWhereUniqueWithoutSpecialistInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutSpecialistInput | TicketUpdateManyWithWhereWithoutSpecialistInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type SpecialistLedgerUpdateManyWithoutSpecialistNestedInput = {
    create?: XOR<SpecialistLedgerCreateWithoutSpecialistInput, SpecialistLedgerUncheckedCreateWithoutSpecialistInput> | SpecialistLedgerCreateWithoutSpecialistInput[] | SpecialistLedgerUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: SpecialistLedgerCreateOrConnectWithoutSpecialistInput | SpecialistLedgerCreateOrConnectWithoutSpecialistInput[]
    upsert?: SpecialistLedgerUpsertWithWhereUniqueWithoutSpecialistInput | SpecialistLedgerUpsertWithWhereUniqueWithoutSpecialistInput[]
    createMany?: SpecialistLedgerCreateManySpecialistInputEnvelope
    set?: SpecialistLedgerWhereUniqueInput | SpecialistLedgerWhereUniqueInput[]
    disconnect?: SpecialistLedgerWhereUniqueInput | SpecialistLedgerWhereUniqueInput[]
    delete?: SpecialistLedgerWhereUniqueInput | SpecialistLedgerWhereUniqueInput[]
    connect?: SpecialistLedgerWhereUniqueInput | SpecialistLedgerWhereUniqueInput[]
    update?: SpecialistLedgerUpdateWithWhereUniqueWithoutSpecialistInput | SpecialistLedgerUpdateWithWhereUniqueWithoutSpecialistInput[]
    updateMany?: SpecialistLedgerUpdateManyWithWhereWithoutSpecialistInput | SpecialistLedgerUpdateManyWithWhereWithoutSpecialistInput[]
    deleteMany?: SpecialistLedgerScalarWhereInput | SpecialistLedgerScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutSpecialistNestedInput = {
    create?: XOR<BookingCreateWithoutSpecialistInput, BookingUncheckedCreateWithoutSpecialistInput> | BookingCreateWithoutSpecialistInput[] | BookingUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSpecialistInput | BookingCreateOrConnectWithoutSpecialistInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutSpecialistInput | BookingUpsertWithWhereUniqueWithoutSpecialistInput[]
    createMany?: BookingCreateManySpecialistInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutSpecialistInput | BookingUpdateWithWhereUniqueWithoutSpecialistInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutSpecialistInput | BookingUpdateManyWithWhereWithoutSpecialistInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutSpecialistNestedInput = {
    create?: XOR<TicketCreateWithoutSpecialistInput, TicketUncheckedCreateWithoutSpecialistInput> | TicketCreateWithoutSpecialistInput[] | TicketUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSpecialistInput | TicketCreateOrConnectWithoutSpecialistInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutSpecialistInput | TicketUpsertWithWhereUniqueWithoutSpecialistInput[]
    createMany?: TicketCreateManySpecialistInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutSpecialistInput | TicketUpdateWithWhereUniqueWithoutSpecialistInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutSpecialistInput | TicketUpdateManyWithWhereWithoutSpecialistInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type SpecialistLedgerUncheckedUpdateManyWithoutSpecialistNestedInput = {
    create?: XOR<SpecialistLedgerCreateWithoutSpecialistInput, SpecialistLedgerUncheckedCreateWithoutSpecialistInput> | SpecialistLedgerCreateWithoutSpecialistInput[] | SpecialistLedgerUncheckedCreateWithoutSpecialistInput[]
    connectOrCreate?: SpecialistLedgerCreateOrConnectWithoutSpecialistInput | SpecialistLedgerCreateOrConnectWithoutSpecialistInput[]
    upsert?: SpecialistLedgerUpsertWithWhereUniqueWithoutSpecialistInput | SpecialistLedgerUpsertWithWhereUniqueWithoutSpecialistInput[]
    createMany?: SpecialistLedgerCreateManySpecialistInputEnvelope
    set?: SpecialistLedgerWhereUniqueInput | SpecialistLedgerWhereUniqueInput[]
    disconnect?: SpecialistLedgerWhereUniqueInput | SpecialistLedgerWhereUniqueInput[]
    delete?: SpecialistLedgerWhereUniqueInput | SpecialistLedgerWhereUniqueInput[]
    connect?: SpecialistLedgerWhereUniqueInput | SpecialistLedgerWhereUniqueInput[]
    update?: SpecialistLedgerUpdateWithWhereUniqueWithoutSpecialistInput | SpecialistLedgerUpdateWithWhereUniqueWithoutSpecialistInput[]
    updateMany?: SpecialistLedgerUpdateManyWithWhereWithoutSpecialistInput | SpecialistLedgerUpdateManyWithWhereWithoutSpecialistInput[]
    deleteMany?: SpecialistLedgerScalarWhereInput | SpecialistLedgerScalarWhereInput[]
  }

  export type BookingCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput> | TicketCreateWithoutCustomerInput[] | TicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCustomerInput | TicketCreateOrConnectWithoutCustomerInput[]
    createMany?: TicketCreateManyCustomerInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput> | TicketCreateWithoutCustomerInput[] | TicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCustomerInput | TicketCreateOrConnectWithoutCustomerInput[]
    createMany?: TicketCreateManyCustomerInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BookingUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCustomerInput | BookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCustomerInput | BookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCustomerInput | BookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput> | TicketCreateWithoutCustomerInput[] | TicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCustomerInput | TicketCreateOrConnectWithoutCustomerInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCustomerInput | TicketUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TicketCreateManyCustomerInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCustomerInput | TicketUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCustomerInput | TicketUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCustomerInput | BookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCustomerInput | BookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCustomerInput | BookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput> | TicketCreateWithoutCustomerInput[] | TicketUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCustomerInput | TicketCreateOrConnectWithoutCustomerInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCustomerInput | TicketUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TicketCreateManyCustomerInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCustomerInput | TicketUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCustomerInput | TicketUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutBookingsInput = {
    create?: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBookingsInput
    connect?: CustomerWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutBookingsInput = {
    create?: XOR<BranchCreateWithoutBookingsInput, BranchUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutBookingsInput
    connect?: BranchWhereUniqueInput
  }

  export type SpecialistCreateNestedOneWithoutBookingsInput = {
    create?: XOR<SpecialistCreateWithoutBookingsInput, SpecialistUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: SpecialistCreateOrConnectWithoutBookingsInput
    connect?: SpecialistWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBookingsInput
    upsert?: CustomerUpsertWithoutBookingsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutBookingsInput, CustomerUpdateWithoutBookingsInput>, CustomerUncheckedUpdateWithoutBookingsInput>
  }

  export type BranchUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<BranchCreateWithoutBookingsInput, BranchUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutBookingsInput
    upsert?: BranchUpsertWithoutBookingsInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutBookingsInput, BranchUpdateWithoutBookingsInput>, BranchUncheckedUpdateWithoutBookingsInput>
  }

  export type SpecialistUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<SpecialistCreateWithoutBookingsInput, SpecialistUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: SpecialistCreateOrConnectWithoutBookingsInput
    upsert?: SpecialistUpsertWithoutBookingsInput
    disconnect?: SpecialistWhereInput | boolean
    delete?: SpecialistWhereInput | boolean
    connect?: SpecialistWhereUniqueInput
    update?: XOR<XOR<SpecialistUpdateToOneWithWhereWithoutBookingsInput, SpecialistUpdateWithoutBookingsInput>, SpecialistUncheckedUpdateWithoutBookingsInput>
  }

  export type BranchCreateNestedOneWithoutTicketsInput = {
    create?: XOR<BranchCreateWithoutTicketsInput, BranchUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutTicketsInput
    connect?: BranchWhereUniqueInput
  }

  export type SpecialistCreateNestedOneWithoutTicketsInput = {
    create?: XOR<SpecialistCreateWithoutTicketsInput, SpecialistUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: SpecialistCreateOrConnectWithoutTicketsInput
    connect?: SpecialistWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutTicketsInput = {
    create?: XOR<CustomerCreateWithoutTicketsInput, CustomerUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTicketsInput
    connect?: CustomerWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BranchUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<BranchCreateWithoutTicketsInput, BranchUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutTicketsInput
    upsert?: BranchUpsertWithoutTicketsInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutTicketsInput, BranchUpdateWithoutTicketsInput>, BranchUncheckedUpdateWithoutTicketsInput>
  }

  export type SpecialistUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<SpecialistCreateWithoutTicketsInput, SpecialistUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: SpecialistCreateOrConnectWithoutTicketsInput
    upsert?: SpecialistUpsertWithoutTicketsInput
    connect?: SpecialistWhereUniqueInput
    update?: XOR<XOR<SpecialistUpdateToOneWithWhereWithoutTicketsInput, SpecialistUpdateWithoutTicketsInput>, SpecialistUncheckedUpdateWithoutTicketsInput>
  }

  export type CustomerUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<CustomerCreateWithoutTicketsInput, CustomerUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTicketsInput
    upsert?: CustomerUpsertWithoutTicketsInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutTicketsInput, CustomerUpdateWithoutTicketsInput>, CustomerUncheckedUpdateWithoutTicketsInput>
  }

  export type BranchCreateNestedOneWithoutProductsInput = {
    create?: XOR<BranchCreateWithoutProductsInput, BranchUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutProductsInput
    connect?: BranchWhereUniqueInput
  }

  export type BranchUpdateOneWithoutProductsNestedInput = {
    create?: XOR<BranchCreateWithoutProductsInput, BranchUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutProductsInput
    upsert?: BranchUpsertWithoutProductsInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutProductsInput, BranchUpdateWithoutProductsInput>, BranchUncheckedUpdateWithoutProductsInput>
  }

  export type SpecialistCreateNestedOneWithoutLedgersInput = {
    create?: XOR<SpecialistCreateWithoutLedgersInput, SpecialistUncheckedCreateWithoutLedgersInput>
    connectOrCreate?: SpecialistCreateOrConnectWithoutLedgersInput
    connect?: SpecialistWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutLedgersInput = {
    create?: XOR<BranchCreateWithoutLedgersInput, BranchUncheckedCreateWithoutLedgersInput>
    connectOrCreate?: BranchCreateOrConnectWithoutLedgersInput
    connect?: BranchWhereUniqueInput
  }

  export type SpecialistUpdateOneRequiredWithoutLedgersNestedInput = {
    create?: XOR<SpecialistCreateWithoutLedgersInput, SpecialistUncheckedCreateWithoutLedgersInput>
    connectOrCreate?: SpecialistCreateOrConnectWithoutLedgersInput
    upsert?: SpecialistUpsertWithoutLedgersInput
    connect?: SpecialistWhereUniqueInput
    update?: XOR<XOR<SpecialistUpdateToOneWithWhereWithoutLedgersInput, SpecialistUpdateWithoutLedgersInput>, SpecialistUncheckedUpdateWithoutLedgersInput>
  }

  export type BranchUpdateOneRequiredWithoutLedgersNestedInput = {
    create?: XOR<BranchCreateWithoutLedgersInput, BranchUncheckedCreateWithoutLedgersInput>
    connectOrCreate?: BranchCreateOrConnectWithoutLedgersInput
    upsert?: BranchUpsertWithoutLedgersInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutLedgersInput, BranchUpdateWithoutLedgersInput>, BranchUncheckedUpdateWithoutLedgersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserCreateWithoutBranchInput = {
    id?: string
    name: string
    username: string
    passwordHash: string
    pin?: string
    phone?: string | null
    role?: string
    permissions?: string | null
    isActive?: boolean
    createdAt?: Date | string
    specialistProfile?: SpecialistCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBranchInput = {
    id?: string
    name: string
    username: string
    passwordHash: string
    pin?: string
    phone?: string | null
    role?: string
    permissions?: string | null
    isActive?: boolean
    createdAt?: Date | string
    specialistProfile?: SpecialistUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBranchInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput>
  }

  export type UserCreateManyBranchInputEnvelope = {
    data: UserCreateManyBranchInput | UserCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type SpecialistCreateWithoutBranchInput = {
    id?: string
    name: string
    phone?: string | null
    photo?: string | null
    title?: string
    chairNumber?: number
    status?: string
    rating?: number
    payType?: string
    baseSalary?: number
    commissionRate?: number
    isActive?: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutSpecialistProfileInput
    bookings?: BookingCreateNestedManyWithoutSpecialistInput
    tickets?: TicketCreateNestedManyWithoutSpecialistInput
    ledgers?: SpecialistLedgerCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistUncheckedCreateWithoutBranchInput = {
    id?: string
    userId?: string | null
    name: string
    phone?: string | null
    photo?: string | null
    title?: string
    chairNumber?: number
    status?: string
    rating?: number
    payType?: string
    baseSalary?: number
    commissionRate?: number
    isActive?: boolean
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutSpecialistInput
    tickets?: TicketUncheckedCreateNestedManyWithoutSpecialistInput
    ledgers?: SpecialistLedgerUncheckedCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistCreateOrConnectWithoutBranchInput = {
    where: SpecialistWhereUniqueInput
    create: XOR<SpecialistCreateWithoutBranchInput, SpecialistUncheckedCreateWithoutBranchInput>
  }

  export type SpecialistCreateManyBranchInputEnvelope = {
    data: SpecialistCreateManyBranchInput | SpecialistCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutBranchInput = {
    id?: string
    bookingNumber: string
    serviceIds: string
    bookingDate: string
    timeSlot: string
    status?: string
    notes?: string | null
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutBookingsInput
    specialist?: SpecialistCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutBranchInput = {
    id?: string
    bookingNumber: string
    customerId: string
    specialistId?: string | null
    serviceIds: string
    bookingDate: string
    timeSlot: string
    status?: string
    notes?: string | null
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutBranchInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutBranchInput, BookingUncheckedCreateWithoutBranchInput>
  }

  export type BookingCreateManyBranchInputEnvelope = {
    data: BookingCreateManyBranchInput | BookingCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutBranchInput = {
    id?: string
    ticketNumber: string
    customerName: string
    customerPhone?: string | null
    chairNumber?: number
    status?: string
    services?: string
    retailItems?: string
    servicesTotal?: number
    retailTotal?: number
    discount?: number
    tipAmount?: number
    finalAmount?: number
    paymentMethod?: string
    startTime?: Date | string
    endTime?: Date | string | null
    durationMinutes?: number | null
    cashierName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    specialist: SpecialistCreateNestedOneWithoutTicketsInput
    customer?: CustomerCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutBranchInput = {
    id?: string
    ticketNumber: string
    specialistId: string
    customerId?: string | null
    customerName: string
    customerPhone?: string | null
    chairNumber?: number
    status?: string
    services?: string
    retailItems?: string
    servicesTotal?: number
    retailTotal?: number
    discount?: number
    tipAmount?: number
    finalAmount?: number
    paymentMethod?: string
    startTime?: Date | string
    endTime?: Date | string | null
    durationMinutes?: number | null
    cashierName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutBranchInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutBranchInput, TicketUncheckedCreateWithoutBranchInput>
  }

  export type TicketCreateManyBranchInputEnvelope = {
    data: TicketCreateManyBranchInput | TicketCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutBranchInput = {
    id?: string
    nameAr: string
    category?: string
    price: number
    costPrice?: number
    stockQty?: number
    minStockAlert?: number
    image?: string | null
    barcode?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ProductUncheckedCreateWithoutBranchInput = {
    id?: string
    nameAr: string
    category?: string
    price: number
    costPrice?: number
    stockQty?: number
    minStockAlert?: number
    image?: string | null
    barcode?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutBranchInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBranchInput, ProductUncheckedCreateWithoutBranchInput>
  }

  export type ProductCreateManyBranchInputEnvelope = {
    data: ProductCreateManyBranchInput | ProductCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type SpecialistLedgerCreateWithoutBranchInput = {
    id?: string
    type: string
    amount: number
    notes?: string | null
    date?: Date | string
    recordedBy?: string
    createdAt?: Date | string
    specialist: SpecialistCreateNestedOneWithoutLedgersInput
  }

  export type SpecialistLedgerUncheckedCreateWithoutBranchInput = {
    id?: string
    specialistId: string
    type: string
    amount: number
    notes?: string | null
    date?: Date | string
    recordedBy?: string
    createdAt?: Date | string
  }

  export type SpecialistLedgerCreateOrConnectWithoutBranchInput = {
    where: SpecialistLedgerWhereUniqueInput
    create: XOR<SpecialistLedgerCreateWithoutBranchInput, SpecialistLedgerUncheckedCreateWithoutBranchInput>
  }

  export type SpecialistLedgerCreateManyBranchInputEnvelope = {
    data: SpecialistLedgerCreateManyBranchInput | SpecialistLedgerCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutBranchInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBranchInput, UserUncheckedUpdateWithoutBranchInput>
    create: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBranchInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBranchInput, UserUncheckedUpdateWithoutBranchInput>
  }

  export type UserUpdateManyWithWhereWithoutBranchInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBranchInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    pin?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    branchId?: StringNullableFilter<"User"> | string | null
    permissions?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type SpecialistUpsertWithWhereUniqueWithoutBranchInput = {
    where: SpecialistWhereUniqueInput
    update: XOR<SpecialistUpdateWithoutBranchInput, SpecialistUncheckedUpdateWithoutBranchInput>
    create: XOR<SpecialistCreateWithoutBranchInput, SpecialistUncheckedCreateWithoutBranchInput>
  }

  export type SpecialistUpdateWithWhereUniqueWithoutBranchInput = {
    where: SpecialistWhereUniqueInput
    data: XOR<SpecialistUpdateWithoutBranchInput, SpecialistUncheckedUpdateWithoutBranchInput>
  }

  export type SpecialistUpdateManyWithWhereWithoutBranchInput = {
    where: SpecialistScalarWhereInput
    data: XOR<SpecialistUpdateManyMutationInput, SpecialistUncheckedUpdateManyWithoutBranchInput>
  }

  export type SpecialistScalarWhereInput = {
    AND?: SpecialistScalarWhereInput | SpecialistScalarWhereInput[]
    OR?: SpecialistScalarWhereInput[]
    NOT?: SpecialistScalarWhereInput | SpecialistScalarWhereInput[]
    id?: StringFilter<"Specialist"> | string
    userId?: StringNullableFilter<"Specialist"> | string | null
    branchId?: StringFilter<"Specialist"> | string
    name?: StringFilter<"Specialist"> | string
    phone?: StringNullableFilter<"Specialist"> | string | null
    photo?: StringNullableFilter<"Specialist"> | string | null
    title?: StringFilter<"Specialist"> | string
    chairNumber?: IntFilter<"Specialist"> | number
    status?: StringFilter<"Specialist"> | string
    rating?: FloatFilter<"Specialist"> | number
    payType?: StringFilter<"Specialist"> | string
    baseSalary?: FloatFilter<"Specialist"> | number
    commissionRate?: FloatFilter<"Specialist"> | number
    isActive?: BoolFilter<"Specialist"> | boolean
    createdAt?: DateTimeFilter<"Specialist"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutBranchInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutBranchInput, BookingUncheckedUpdateWithoutBranchInput>
    create: XOR<BookingCreateWithoutBranchInput, BookingUncheckedCreateWithoutBranchInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutBranchInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutBranchInput, BookingUncheckedUpdateWithoutBranchInput>
  }

  export type BookingUpdateManyWithWhereWithoutBranchInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutBranchInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    bookingNumber?: StringFilter<"Booking"> | string
    customerId?: StringFilter<"Booking"> | string
    branchId?: StringFilter<"Booking"> | string
    specialistId?: StringNullableFilter<"Booking"> | string | null
    serviceIds?: StringFilter<"Booking"> | string
    bookingDate?: StringFilter<"Booking"> | string
    timeSlot?: StringFilter<"Booking"> | string
    status?: StringFilter<"Booking"> | string
    notes?: StringNullableFilter<"Booking"> | string | null
    totalAmount?: FloatFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutBranchInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutBranchInput, TicketUncheckedUpdateWithoutBranchInput>
    create: XOR<TicketCreateWithoutBranchInput, TicketUncheckedCreateWithoutBranchInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutBranchInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutBranchInput, TicketUncheckedUpdateWithoutBranchInput>
  }

  export type TicketUpdateManyWithWhereWithoutBranchInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutBranchInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    ticketNumber?: StringFilter<"Ticket"> | string
    branchId?: StringFilter<"Ticket"> | string
    specialistId?: StringFilter<"Ticket"> | string
    customerId?: StringNullableFilter<"Ticket"> | string | null
    customerName?: StringFilter<"Ticket"> | string
    customerPhone?: StringNullableFilter<"Ticket"> | string | null
    chairNumber?: IntFilter<"Ticket"> | number
    status?: StringFilter<"Ticket"> | string
    services?: StringFilter<"Ticket"> | string
    retailItems?: StringFilter<"Ticket"> | string
    servicesTotal?: FloatFilter<"Ticket"> | number
    retailTotal?: FloatFilter<"Ticket"> | number
    discount?: FloatFilter<"Ticket"> | number
    tipAmount?: FloatFilter<"Ticket"> | number
    finalAmount?: FloatFilter<"Ticket"> | number
    paymentMethod?: StringFilter<"Ticket"> | string
    startTime?: DateTimeFilter<"Ticket"> | Date | string
    endTime?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    durationMinutes?: IntNullableFilter<"Ticket"> | number | null
    cashierName?: StringNullableFilter<"Ticket"> | string | null
    notes?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutBranchInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBranchInput, ProductUncheckedUpdateWithoutBranchInput>
    create: XOR<ProductCreateWithoutBranchInput, ProductUncheckedCreateWithoutBranchInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBranchInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBranchInput, ProductUncheckedUpdateWithoutBranchInput>
  }

  export type ProductUpdateManyWithWhereWithoutBranchInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBranchInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    branchId?: StringNullableFilter<"Product"> | string | null
    nameAr?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    costPrice?: FloatFilter<"Product"> | number
    stockQty?: IntFilter<"Product"> | number
    minStockAlert?: IntFilter<"Product"> | number
    image?: StringNullableFilter<"Product"> | string | null
    barcode?: StringNullableFilter<"Product"> | string | null
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type SpecialistLedgerUpsertWithWhereUniqueWithoutBranchInput = {
    where: SpecialistLedgerWhereUniqueInput
    update: XOR<SpecialistLedgerUpdateWithoutBranchInput, SpecialistLedgerUncheckedUpdateWithoutBranchInput>
    create: XOR<SpecialistLedgerCreateWithoutBranchInput, SpecialistLedgerUncheckedCreateWithoutBranchInput>
  }

  export type SpecialistLedgerUpdateWithWhereUniqueWithoutBranchInput = {
    where: SpecialistLedgerWhereUniqueInput
    data: XOR<SpecialistLedgerUpdateWithoutBranchInput, SpecialistLedgerUncheckedUpdateWithoutBranchInput>
  }

  export type SpecialistLedgerUpdateManyWithWhereWithoutBranchInput = {
    where: SpecialistLedgerScalarWhereInput
    data: XOR<SpecialistLedgerUpdateManyMutationInput, SpecialistLedgerUncheckedUpdateManyWithoutBranchInput>
  }

  export type SpecialistLedgerScalarWhereInput = {
    AND?: SpecialistLedgerScalarWhereInput | SpecialistLedgerScalarWhereInput[]
    OR?: SpecialistLedgerScalarWhereInput[]
    NOT?: SpecialistLedgerScalarWhereInput | SpecialistLedgerScalarWhereInput[]
    id?: StringFilter<"SpecialistLedger"> | string
    specialistId?: StringFilter<"SpecialistLedger"> | string
    branchId?: StringFilter<"SpecialistLedger"> | string
    type?: StringFilter<"SpecialistLedger"> | string
    amount?: FloatFilter<"SpecialistLedger"> | number
    notes?: StringNullableFilter<"SpecialistLedger"> | string | null
    date?: DateTimeFilter<"SpecialistLedger"> | Date | string
    recordedBy?: StringFilter<"SpecialistLedger"> | string
    createdAt?: DateTimeFilter<"SpecialistLedger"> | Date | string
  }

  export type BranchCreateWithoutUsersInput = {
    id?: string
    name: string
    code: string
    address: string
    phone: string
    whatsapp?: string | null
    googleMapsUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    specialists?: SpecialistCreateNestedManyWithoutBranchInput
    bookings?: BookingCreateNestedManyWithoutBranchInput
    tickets?: TicketCreateNestedManyWithoutBranchInput
    products?: ProductCreateNestedManyWithoutBranchInput
    ledgers?: SpecialistLedgerCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    code: string
    address: string
    phone: string
    whatsapp?: string | null
    googleMapsUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    specialists?: SpecialistUncheckedCreateNestedManyWithoutBranchInput
    bookings?: BookingUncheckedCreateNestedManyWithoutBranchInput
    tickets?: TicketUncheckedCreateNestedManyWithoutBranchInput
    products?: ProductUncheckedCreateNestedManyWithoutBranchInput
    ledgers?: SpecialistLedgerUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutUsersInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutUsersInput, BranchUncheckedCreateWithoutUsersInput>
  }

  export type SpecialistCreateWithoutUserInput = {
    id?: string
    name: string
    phone?: string | null
    photo?: string | null
    title?: string
    chairNumber?: number
    status?: string
    rating?: number
    payType?: string
    baseSalary?: number
    commissionRate?: number
    isActive?: boolean
    createdAt?: Date | string
    branch: BranchCreateNestedOneWithoutSpecialistsInput
    bookings?: BookingCreateNestedManyWithoutSpecialistInput
    tickets?: TicketCreateNestedManyWithoutSpecialistInput
    ledgers?: SpecialistLedgerCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistUncheckedCreateWithoutUserInput = {
    id?: string
    branchId: string
    name: string
    phone?: string | null
    photo?: string | null
    title?: string
    chairNumber?: number
    status?: string
    rating?: number
    payType?: string
    baseSalary?: number
    commissionRate?: number
    isActive?: boolean
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutSpecialistInput
    tickets?: TicketUncheckedCreateNestedManyWithoutSpecialistInput
    ledgers?: SpecialistLedgerUncheckedCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistCreateOrConnectWithoutUserInput = {
    where: SpecialistWhereUniqueInput
    create: XOR<SpecialistCreateWithoutUserInput, SpecialistUncheckedCreateWithoutUserInput>
  }

  export type BranchUpsertWithoutUsersInput = {
    update: XOR<BranchUpdateWithoutUsersInput, BranchUncheckedUpdateWithoutUsersInput>
    create: XOR<BranchCreateWithoutUsersInput, BranchUncheckedCreateWithoutUsersInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutUsersInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutUsersInput, BranchUncheckedUpdateWithoutUsersInput>
  }

  export type BranchUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialists?: SpecialistUpdateManyWithoutBranchNestedInput
    bookings?: BookingUpdateManyWithoutBranchNestedInput
    tickets?: TicketUpdateManyWithoutBranchNestedInput
    products?: ProductUpdateManyWithoutBranchNestedInput
    ledgers?: SpecialistLedgerUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialists?: SpecialistUncheckedUpdateManyWithoutBranchNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutBranchNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutBranchNestedInput
    products?: ProductUncheckedUpdateManyWithoutBranchNestedInput
    ledgers?: SpecialistLedgerUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type SpecialistUpsertWithoutUserInput = {
    update: XOR<SpecialistUpdateWithoutUserInput, SpecialistUncheckedUpdateWithoutUserInput>
    create: XOR<SpecialistCreateWithoutUserInput, SpecialistUncheckedCreateWithoutUserInput>
    where?: SpecialistWhereInput
  }

  export type SpecialistUpdateToOneWithWhereWithoutUserInput = {
    where?: SpecialistWhereInput
    data: XOR<SpecialistUpdateWithoutUserInput, SpecialistUncheckedUpdateWithoutUserInput>
  }

  export type SpecialistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    payType?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    commissionRate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutSpecialistsNestedInput
    bookings?: BookingUpdateManyWithoutSpecialistNestedInput
    tickets?: TicketUpdateManyWithoutSpecialistNestedInput
    ledgers?: SpecialistLedgerUpdateManyWithoutSpecialistNestedInput
  }

  export type SpecialistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    payType?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    commissionRate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutSpecialistNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutSpecialistNestedInput
    ledgers?: SpecialistLedgerUncheckedUpdateManyWithoutSpecialistNestedInput
  }

  export type UserCreateWithoutSpecialistProfileInput = {
    id?: string
    name: string
    username: string
    passwordHash: string
    pin?: string
    phone?: string | null
    role?: string
    permissions?: string | null
    isActive?: boolean
    createdAt?: Date | string
    branch?: BranchCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutSpecialistProfileInput = {
    id?: string
    name: string
    username: string
    passwordHash: string
    pin?: string
    phone?: string | null
    role?: string
    branchId?: string | null
    permissions?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutSpecialistProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpecialistProfileInput, UserUncheckedCreateWithoutSpecialistProfileInput>
  }

  export type BranchCreateWithoutSpecialistsInput = {
    id?: string
    name: string
    code: string
    address: string
    phone: string
    whatsapp?: string | null
    googleMapsUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutBranchInput
    bookings?: BookingCreateNestedManyWithoutBranchInput
    tickets?: TicketCreateNestedManyWithoutBranchInput
    products?: ProductCreateNestedManyWithoutBranchInput
    ledgers?: SpecialistLedgerCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutSpecialistsInput = {
    id?: string
    name: string
    code: string
    address: string
    phone: string
    whatsapp?: string | null
    googleMapsUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    bookings?: BookingUncheckedCreateNestedManyWithoutBranchInput
    tickets?: TicketUncheckedCreateNestedManyWithoutBranchInput
    products?: ProductUncheckedCreateNestedManyWithoutBranchInput
    ledgers?: SpecialistLedgerUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutSpecialistsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutSpecialistsInput, BranchUncheckedCreateWithoutSpecialistsInput>
  }

  export type BookingCreateWithoutSpecialistInput = {
    id?: string
    bookingNumber: string
    serviceIds: string
    bookingDate: string
    timeSlot: string
    status?: string
    notes?: string | null
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutBookingsInput
    branch: BranchCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutSpecialistInput = {
    id?: string
    bookingNumber: string
    customerId: string
    branchId: string
    serviceIds: string
    bookingDate: string
    timeSlot: string
    status?: string
    notes?: string | null
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutSpecialistInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutSpecialistInput, BookingUncheckedCreateWithoutSpecialistInput>
  }

  export type BookingCreateManySpecialistInputEnvelope = {
    data: BookingCreateManySpecialistInput | BookingCreateManySpecialistInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutSpecialistInput = {
    id?: string
    ticketNumber: string
    customerName: string
    customerPhone?: string | null
    chairNumber?: number
    status?: string
    services?: string
    retailItems?: string
    servicesTotal?: number
    retailTotal?: number
    discount?: number
    tipAmount?: number
    finalAmount?: number
    paymentMethod?: string
    startTime?: Date | string
    endTime?: Date | string | null
    durationMinutes?: number | null
    cashierName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutTicketsInput
    customer?: CustomerCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutSpecialistInput = {
    id?: string
    ticketNumber: string
    branchId: string
    customerId?: string | null
    customerName: string
    customerPhone?: string | null
    chairNumber?: number
    status?: string
    services?: string
    retailItems?: string
    servicesTotal?: number
    retailTotal?: number
    discount?: number
    tipAmount?: number
    finalAmount?: number
    paymentMethod?: string
    startTime?: Date | string
    endTime?: Date | string | null
    durationMinutes?: number | null
    cashierName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutSpecialistInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutSpecialistInput, TicketUncheckedCreateWithoutSpecialistInput>
  }

  export type TicketCreateManySpecialistInputEnvelope = {
    data: TicketCreateManySpecialistInput | TicketCreateManySpecialistInput[]
    skipDuplicates?: boolean
  }

  export type SpecialistLedgerCreateWithoutSpecialistInput = {
    id?: string
    type: string
    amount: number
    notes?: string | null
    date?: Date | string
    recordedBy?: string
    createdAt?: Date | string
    branch: BranchCreateNestedOneWithoutLedgersInput
  }

  export type SpecialistLedgerUncheckedCreateWithoutSpecialistInput = {
    id?: string
    branchId: string
    type: string
    amount: number
    notes?: string | null
    date?: Date | string
    recordedBy?: string
    createdAt?: Date | string
  }

  export type SpecialistLedgerCreateOrConnectWithoutSpecialistInput = {
    where: SpecialistLedgerWhereUniqueInput
    create: XOR<SpecialistLedgerCreateWithoutSpecialistInput, SpecialistLedgerUncheckedCreateWithoutSpecialistInput>
  }

  export type SpecialistLedgerCreateManySpecialistInputEnvelope = {
    data: SpecialistLedgerCreateManySpecialistInput | SpecialistLedgerCreateManySpecialistInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSpecialistProfileInput = {
    update: XOR<UserUpdateWithoutSpecialistProfileInput, UserUncheckedUpdateWithoutSpecialistProfileInput>
    create: XOR<UserCreateWithoutSpecialistProfileInput, UserUncheckedCreateWithoutSpecialistProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSpecialistProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSpecialistProfileInput, UserUncheckedUpdateWithoutSpecialistProfileInput>
  }

  export type UserUpdateWithoutSpecialistProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutSpecialistProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchUpsertWithoutSpecialistsInput = {
    update: XOR<BranchUpdateWithoutSpecialistsInput, BranchUncheckedUpdateWithoutSpecialistsInput>
    create: XOR<BranchCreateWithoutSpecialistsInput, BranchUncheckedCreateWithoutSpecialistsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutSpecialistsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutSpecialistsInput, BranchUncheckedUpdateWithoutSpecialistsInput>
  }

  export type BranchUpdateWithoutSpecialistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBranchNestedInput
    bookings?: BookingUpdateManyWithoutBranchNestedInput
    tickets?: TicketUpdateManyWithoutBranchNestedInput
    products?: ProductUpdateManyWithoutBranchNestedInput
    ledgers?: SpecialistLedgerUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutSpecialistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutBranchNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutBranchNestedInput
    products?: ProductUncheckedUpdateManyWithoutBranchNestedInput
    ledgers?: SpecialistLedgerUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutSpecialistInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutSpecialistInput, BookingUncheckedUpdateWithoutSpecialistInput>
    create: XOR<BookingCreateWithoutSpecialistInput, BookingUncheckedCreateWithoutSpecialistInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutSpecialistInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutSpecialistInput, BookingUncheckedUpdateWithoutSpecialistInput>
  }

  export type BookingUpdateManyWithWhereWithoutSpecialistInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutSpecialistInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutSpecialistInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutSpecialistInput, TicketUncheckedUpdateWithoutSpecialistInput>
    create: XOR<TicketCreateWithoutSpecialistInput, TicketUncheckedCreateWithoutSpecialistInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutSpecialistInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutSpecialistInput, TicketUncheckedUpdateWithoutSpecialistInput>
  }

  export type TicketUpdateManyWithWhereWithoutSpecialistInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutSpecialistInput>
  }

  export type SpecialistLedgerUpsertWithWhereUniqueWithoutSpecialistInput = {
    where: SpecialistLedgerWhereUniqueInput
    update: XOR<SpecialistLedgerUpdateWithoutSpecialistInput, SpecialistLedgerUncheckedUpdateWithoutSpecialistInput>
    create: XOR<SpecialistLedgerCreateWithoutSpecialistInput, SpecialistLedgerUncheckedCreateWithoutSpecialistInput>
  }

  export type SpecialistLedgerUpdateWithWhereUniqueWithoutSpecialistInput = {
    where: SpecialistLedgerWhereUniqueInput
    data: XOR<SpecialistLedgerUpdateWithoutSpecialistInput, SpecialistLedgerUncheckedUpdateWithoutSpecialistInput>
  }

  export type SpecialistLedgerUpdateManyWithWhereWithoutSpecialistInput = {
    where: SpecialistLedgerScalarWhereInput
    data: XOR<SpecialistLedgerUpdateManyMutationInput, SpecialistLedgerUncheckedUpdateManyWithoutSpecialistInput>
  }

  export type BookingCreateWithoutCustomerInput = {
    id?: string
    bookingNumber: string
    serviceIds: string
    bookingDate: string
    timeSlot: string
    status?: string
    notes?: string | null
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutBookingsInput
    specialist?: SpecialistCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutCustomerInput = {
    id?: string
    bookingNumber: string
    branchId: string
    specialistId?: string | null
    serviceIds: string
    bookingDate: string
    timeSlot: string
    status?: string
    notes?: string | null
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput>
  }

  export type BookingCreateManyCustomerInputEnvelope = {
    data: BookingCreateManyCustomerInput | BookingCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutCustomerInput = {
    id?: string
    ticketNumber: string
    customerName: string
    customerPhone?: string | null
    chairNumber?: number
    status?: string
    services?: string
    retailItems?: string
    servicesTotal?: number
    retailTotal?: number
    discount?: number
    tipAmount?: number
    finalAmount?: number
    paymentMethod?: string
    startTime?: Date | string
    endTime?: Date | string | null
    durationMinutes?: number | null
    cashierName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutTicketsInput
    specialist: SpecialistCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutCustomerInput = {
    id?: string
    ticketNumber: string
    branchId: string
    specialistId: string
    customerName: string
    customerPhone?: string | null
    chairNumber?: number
    status?: string
    services?: string
    retailItems?: string
    servicesTotal?: number
    retailTotal?: number
    discount?: number
    tipAmount?: number
    finalAmount?: number
    paymentMethod?: string
    startTime?: Date | string
    endTime?: Date | string | null
    durationMinutes?: number | null
    cashierName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutCustomerInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput>
  }

  export type TicketCreateManyCustomerInputEnvelope = {
    data: TicketCreateManyCustomerInput | TicketCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutCustomerInput, BookingUncheckedUpdateWithoutCustomerInput>
    create: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutCustomerInput, BookingUncheckedUpdateWithoutCustomerInput>
  }

  export type BookingUpdateManyWithWhereWithoutCustomerInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutCustomerInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutCustomerInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutCustomerInput, TicketUncheckedUpdateWithoutCustomerInput>
    create: XOR<TicketCreateWithoutCustomerInput, TicketUncheckedCreateWithoutCustomerInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutCustomerInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutCustomerInput, TicketUncheckedUpdateWithoutCustomerInput>
  }

  export type TicketUpdateManyWithWhereWithoutCustomerInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerCreateWithoutBookingsInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    passwordHash?: string | null
    isVerified?: boolean
    verificationCode?: string | null
    avatar?: string | null
    notes?: string | null
    vipLevel?: string
    totalVisits?: number
    totalSpent?: number
    createdAt?: Date | string
    lastVisitAt?: Date | string | null
    tickets?: TicketCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    passwordHash?: string | null
    isVerified?: boolean
    verificationCode?: string | null
    avatar?: string | null
    notes?: string | null
    vipLevel?: string
    totalVisits?: number
    totalSpent?: number
    createdAt?: Date | string
    lastVisitAt?: Date | string | null
    tickets?: TicketUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutBookingsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
  }

  export type BranchCreateWithoutBookingsInput = {
    id?: string
    name: string
    code: string
    address: string
    phone: string
    whatsapp?: string | null
    googleMapsUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutBranchInput
    specialists?: SpecialistCreateNestedManyWithoutBranchInput
    tickets?: TicketCreateNestedManyWithoutBranchInput
    products?: ProductCreateNestedManyWithoutBranchInput
    ledgers?: SpecialistLedgerCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    code: string
    address: string
    phone: string
    whatsapp?: string | null
    googleMapsUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    specialists?: SpecialistUncheckedCreateNestedManyWithoutBranchInput
    tickets?: TicketUncheckedCreateNestedManyWithoutBranchInput
    products?: ProductUncheckedCreateNestedManyWithoutBranchInput
    ledgers?: SpecialistLedgerUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutBookingsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutBookingsInput, BranchUncheckedCreateWithoutBookingsInput>
  }

  export type SpecialistCreateWithoutBookingsInput = {
    id?: string
    name: string
    phone?: string | null
    photo?: string | null
    title?: string
    chairNumber?: number
    status?: string
    rating?: number
    payType?: string
    baseSalary?: number
    commissionRate?: number
    isActive?: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutSpecialistProfileInput
    branch: BranchCreateNestedOneWithoutSpecialistsInput
    tickets?: TicketCreateNestedManyWithoutSpecialistInput
    ledgers?: SpecialistLedgerCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistUncheckedCreateWithoutBookingsInput = {
    id?: string
    userId?: string | null
    branchId: string
    name: string
    phone?: string | null
    photo?: string | null
    title?: string
    chairNumber?: number
    status?: string
    rating?: number
    payType?: string
    baseSalary?: number
    commissionRate?: number
    isActive?: boolean
    createdAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutSpecialistInput
    ledgers?: SpecialistLedgerUncheckedCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistCreateOrConnectWithoutBookingsInput = {
    where: SpecialistWhereUniqueInput
    create: XOR<SpecialistCreateWithoutBookingsInput, SpecialistUncheckedCreateWithoutBookingsInput>
  }

  export type CustomerUpsertWithoutBookingsInput = {
    update: XOR<CustomerUpdateWithoutBookingsInput, CustomerUncheckedUpdateWithoutBookingsInput>
    create: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutBookingsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutBookingsInput, CustomerUncheckedUpdateWithoutBookingsInput>
  }

  export type CustomerUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    vipLevel?: StringFieldUpdateOperationsInput | string
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: TicketUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    vipLevel?: StringFieldUpdateOperationsInput | string
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tickets?: TicketUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type BranchUpsertWithoutBookingsInput = {
    update: XOR<BranchUpdateWithoutBookingsInput, BranchUncheckedUpdateWithoutBookingsInput>
    create: XOR<BranchCreateWithoutBookingsInput, BranchUncheckedCreateWithoutBookingsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutBookingsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutBookingsInput, BranchUncheckedUpdateWithoutBookingsInput>
  }

  export type BranchUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBranchNestedInput
    specialists?: SpecialistUpdateManyWithoutBranchNestedInput
    tickets?: TicketUpdateManyWithoutBranchNestedInput
    products?: ProductUpdateManyWithoutBranchNestedInput
    ledgers?: SpecialistLedgerUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    specialists?: SpecialistUncheckedUpdateManyWithoutBranchNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutBranchNestedInput
    products?: ProductUncheckedUpdateManyWithoutBranchNestedInput
    ledgers?: SpecialistLedgerUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type SpecialistUpsertWithoutBookingsInput = {
    update: XOR<SpecialistUpdateWithoutBookingsInput, SpecialistUncheckedUpdateWithoutBookingsInput>
    create: XOR<SpecialistCreateWithoutBookingsInput, SpecialistUncheckedCreateWithoutBookingsInput>
    where?: SpecialistWhereInput
  }

  export type SpecialistUpdateToOneWithWhereWithoutBookingsInput = {
    where?: SpecialistWhereInput
    data: XOR<SpecialistUpdateWithoutBookingsInput, SpecialistUncheckedUpdateWithoutBookingsInput>
  }

  export type SpecialistUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    payType?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    commissionRate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSpecialistProfileNestedInput
    branch?: BranchUpdateOneRequiredWithoutSpecialistsNestedInput
    tickets?: TicketUpdateManyWithoutSpecialistNestedInput
    ledgers?: SpecialistLedgerUpdateManyWithoutSpecialistNestedInput
  }

  export type SpecialistUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    payType?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    commissionRate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutSpecialistNestedInput
    ledgers?: SpecialistLedgerUncheckedUpdateManyWithoutSpecialistNestedInput
  }

  export type BranchCreateWithoutTicketsInput = {
    id?: string
    name: string
    code: string
    address: string
    phone: string
    whatsapp?: string | null
    googleMapsUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutBranchInput
    specialists?: SpecialistCreateNestedManyWithoutBranchInput
    bookings?: BookingCreateNestedManyWithoutBranchInput
    products?: ProductCreateNestedManyWithoutBranchInput
    ledgers?: SpecialistLedgerCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutTicketsInput = {
    id?: string
    name: string
    code: string
    address: string
    phone: string
    whatsapp?: string | null
    googleMapsUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    specialists?: SpecialistUncheckedCreateNestedManyWithoutBranchInput
    bookings?: BookingUncheckedCreateNestedManyWithoutBranchInput
    products?: ProductUncheckedCreateNestedManyWithoutBranchInput
    ledgers?: SpecialistLedgerUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutTicketsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutTicketsInput, BranchUncheckedCreateWithoutTicketsInput>
  }

  export type SpecialistCreateWithoutTicketsInput = {
    id?: string
    name: string
    phone?: string | null
    photo?: string | null
    title?: string
    chairNumber?: number
    status?: string
    rating?: number
    payType?: string
    baseSalary?: number
    commissionRate?: number
    isActive?: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutSpecialistProfileInput
    branch: BranchCreateNestedOneWithoutSpecialistsInput
    bookings?: BookingCreateNestedManyWithoutSpecialistInput
    ledgers?: SpecialistLedgerCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistUncheckedCreateWithoutTicketsInput = {
    id?: string
    userId?: string | null
    branchId: string
    name: string
    phone?: string | null
    photo?: string | null
    title?: string
    chairNumber?: number
    status?: string
    rating?: number
    payType?: string
    baseSalary?: number
    commissionRate?: number
    isActive?: boolean
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutSpecialistInput
    ledgers?: SpecialistLedgerUncheckedCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistCreateOrConnectWithoutTicketsInput = {
    where: SpecialistWhereUniqueInput
    create: XOR<SpecialistCreateWithoutTicketsInput, SpecialistUncheckedCreateWithoutTicketsInput>
  }

  export type CustomerCreateWithoutTicketsInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    passwordHash?: string | null
    isVerified?: boolean
    verificationCode?: string | null
    avatar?: string | null
    notes?: string | null
    vipLevel?: string
    totalVisits?: number
    totalSpent?: number
    createdAt?: Date | string
    lastVisitAt?: Date | string | null
    bookings?: BookingCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutTicketsInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    passwordHash?: string | null
    isVerified?: boolean
    verificationCode?: string | null
    avatar?: string | null
    notes?: string | null
    vipLevel?: string
    totalVisits?: number
    totalSpent?: number
    createdAt?: Date | string
    lastVisitAt?: Date | string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutTicketsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutTicketsInput, CustomerUncheckedCreateWithoutTicketsInput>
  }

  export type BranchUpsertWithoutTicketsInput = {
    update: XOR<BranchUpdateWithoutTicketsInput, BranchUncheckedUpdateWithoutTicketsInput>
    create: XOR<BranchCreateWithoutTicketsInput, BranchUncheckedCreateWithoutTicketsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutTicketsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutTicketsInput, BranchUncheckedUpdateWithoutTicketsInput>
  }

  export type BranchUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBranchNestedInput
    specialists?: SpecialistUpdateManyWithoutBranchNestedInput
    bookings?: BookingUpdateManyWithoutBranchNestedInput
    products?: ProductUpdateManyWithoutBranchNestedInput
    ledgers?: SpecialistLedgerUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    specialists?: SpecialistUncheckedUpdateManyWithoutBranchNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutBranchNestedInput
    products?: ProductUncheckedUpdateManyWithoutBranchNestedInput
    ledgers?: SpecialistLedgerUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type SpecialistUpsertWithoutTicketsInput = {
    update: XOR<SpecialistUpdateWithoutTicketsInput, SpecialistUncheckedUpdateWithoutTicketsInput>
    create: XOR<SpecialistCreateWithoutTicketsInput, SpecialistUncheckedCreateWithoutTicketsInput>
    where?: SpecialistWhereInput
  }

  export type SpecialistUpdateToOneWithWhereWithoutTicketsInput = {
    where?: SpecialistWhereInput
    data: XOR<SpecialistUpdateWithoutTicketsInput, SpecialistUncheckedUpdateWithoutTicketsInput>
  }

  export type SpecialistUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    payType?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    commissionRate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSpecialistProfileNestedInput
    branch?: BranchUpdateOneRequiredWithoutSpecialistsNestedInput
    bookings?: BookingUpdateManyWithoutSpecialistNestedInput
    ledgers?: SpecialistLedgerUpdateManyWithoutSpecialistNestedInput
  }

  export type SpecialistUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    payType?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    commissionRate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutSpecialistNestedInput
    ledgers?: SpecialistLedgerUncheckedUpdateManyWithoutSpecialistNestedInput
  }

  export type CustomerUpsertWithoutTicketsInput = {
    update: XOR<CustomerUpdateWithoutTicketsInput, CustomerUncheckedUpdateWithoutTicketsInput>
    create: XOR<CustomerCreateWithoutTicketsInput, CustomerUncheckedCreateWithoutTicketsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutTicketsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutTicketsInput, CustomerUncheckedUpdateWithoutTicketsInput>
  }

  export type CustomerUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    vipLevel?: StringFieldUpdateOperationsInput | string
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    vipLevel?: StringFieldUpdateOperationsInput | string
    totalVisits?: IntFieldUpdateOperationsInput | number
    totalSpent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVisitAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type BranchCreateWithoutProductsInput = {
    id?: string
    name: string
    code: string
    address: string
    phone: string
    whatsapp?: string | null
    googleMapsUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutBranchInput
    specialists?: SpecialistCreateNestedManyWithoutBranchInput
    bookings?: BookingCreateNestedManyWithoutBranchInput
    tickets?: TicketCreateNestedManyWithoutBranchInput
    ledgers?: SpecialistLedgerCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    code: string
    address: string
    phone: string
    whatsapp?: string | null
    googleMapsUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    specialists?: SpecialistUncheckedCreateNestedManyWithoutBranchInput
    bookings?: BookingUncheckedCreateNestedManyWithoutBranchInput
    tickets?: TicketUncheckedCreateNestedManyWithoutBranchInput
    ledgers?: SpecialistLedgerUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutProductsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutProductsInput, BranchUncheckedCreateWithoutProductsInput>
  }

  export type BranchUpsertWithoutProductsInput = {
    update: XOR<BranchUpdateWithoutProductsInput, BranchUncheckedUpdateWithoutProductsInput>
    create: XOR<BranchCreateWithoutProductsInput, BranchUncheckedCreateWithoutProductsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutProductsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutProductsInput, BranchUncheckedUpdateWithoutProductsInput>
  }

  export type BranchUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBranchNestedInput
    specialists?: SpecialistUpdateManyWithoutBranchNestedInput
    bookings?: BookingUpdateManyWithoutBranchNestedInput
    tickets?: TicketUpdateManyWithoutBranchNestedInput
    ledgers?: SpecialistLedgerUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    specialists?: SpecialistUncheckedUpdateManyWithoutBranchNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutBranchNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutBranchNestedInput
    ledgers?: SpecialistLedgerUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type SpecialistCreateWithoutLedgersInput = {
    id?: string
    name: string
    phone?: string | null
    photo?: string | null
    title?: string
    chairNumber?: number
    status?: string
    rating?: number
    payType?: string
    baseSalary?: number
    commissionRate?: number
    isActive?: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutSpecialistProfileInput
    branch: BranchCreateNestedOneWithoutSpecialistsInput
    bookings?: BookingCreateNestedManyWithoutSpecialistInput
    tickets?: TicketCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistUncheckedCreateWithoutLedgersInput = {
    id?: string
    userId?: string | null
    branchId: string
    name: string
    phone?: string | null
    photo?: string | null
    title?: string
    chairNumber?: number
    status?: string
    rating?: number
    payType?: string
    baseSalary?: number
    commissionRate?: number
    isActive?: boolean
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutSpecialistInput
    tickets?: TicketUncheckedCreateNestedManyWithoutSpecialistInput
  }

  export type SpecialistCreateOrConnectWithoutLedgersInput = {
    where: SpecialistWhereUniqueInput
    create: XOR<SpecialistCreateWithoutLedgersInput, SpecialistUncheckedCreateWithoutLedgersInput>
  }

  export type BranchCreateWithoutLedgersInput = {
    id?: string
    name: string
    code: string
    address: string
    phone: string
    whatsapp?: string | null
    googleMapsUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutBranchInput
    specialists?: SpecialistCreateNestedManyWithoutBranchInput
    bookings?: BookingCreateNestedManyWithoutBranchInput
    tickets?: TicketCreateNestedManyWithoutBranchInput
    products?: ProductCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutLedgersInput = {
    id?: string
    name: string
    code: string
    address: string
    phone: string
    whatsapp?: string | null
    googleMapsUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    specialists?: SpecialistUncheckedCreateNestedManyWithoutBranchInput
    bookings?: BookingUncheckedCreateNestedManyWithoutBranchInput
    tickets?: TicketUncheckedCreateNestedManyWithoutBranchInput
    products?: ProductUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutLedgersInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutLedgersInput, BranchUncheckedCreateWithoutLedgersInput>
  }

  export type SpecialistUpsertWithoutLedgersInput = {
    update: XOR<SpecialistUpdateWithoutLedgersInput, SpecialistUncheckedUpdateWithoutLedgersInput>
    create: XOR<SpecialistCreateWithoutLedgersInput, SpecialistUncheckedCreateWithoutLedgersInput>
    where?: SpecialistWhereInput
  }

  export type SpecialistUpdateToOneWithWhereWithoutLedgersInput = {
    where?: SpecialistWhereInput
    data: XOR<SpecialistUpdateWithoutLedgersInput, SpecialistUncheckedUpdateWithoutLedgersInput>
  }

  export type SpecialistUpdateWithoutLedgersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    payType?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    commissionRate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSpecialistProfileNestedInput
    branch?: BranchUpdateOneRequiredWithoutSpecialistsNestedInput
    bookings?: BookingUpdateManyWithoutSpecialistNestedInput
    tickets?: TicketUpdateManyWithoutSpecialistNestedInput
  }

  export type SpecialistUncheckedUpdateWithoutLedgersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    payType?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    commissionRate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutSpecialistNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutSpecialistNestedInput
  }

  export type BranchUpsertWithoutLedgersInput = {
    update: XOR<BranchUpdateWithoutLedgersInput, BranchUncheckedUpdateWithoutLedgersInput>
    create: XOR<BranchCreateWithoutLedgersInput, BranchUncheckedCreateWithoutLedgersInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutLedgersInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutLedgersInput, BranchUncheckedUpdateWithoutLedgersInput>
  }

  export type BranchUpdateWithoutLedgersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBranchNestedInput
    specialists?: SpecialistUpdateManyWithoutBranchNestedInput
    bookings?: BookingUpdateManyWithoutBranchNestedInput
    tickets?: TicketUpdateManyWithoutBranchNestedInput
    products?: ProductUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutLedgersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    specialists?: SpecialistUncheckedUpdateManyWithoutBranchNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutBranchNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutBranchNestedInput
    products?: ProductUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type UserCreateManyBranchInput = {
    id?: string
    name: string
    username: string
    passwordHash: string
    pin?: string
    phone?: string | null
    role?: string
    permissions?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SpecialistCreateManyBranchInput = {
    id?: string
    userId?: string | null
    name: string
    phone?: string | null
    photo?: string | null
    title?: string
    chairNumber?: number
    status?: string
    rating?: number
    payType?: string
    baseSalary?: number
    commissionRate?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type BookingCreateManyBranchInput = {
    id?: string
    bookingNumber: string
    customerId: string
    specialistId?: string | null
    serviceIds: string
    bookingDate: string
    timeSlot: string
    status?: string
    notes?: string | null
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateManyBranchInput = {
    id?: string
    ticketNumber: string
    specialistId: string
    customerId?: string | null
    customerName: string
    customerPhone?: string | null
    chairNumber?: number
    status?: string
    services?: string
    retailItems?: string
    servicesTotal?: number
    retailTotal?: number
    discount?: number
    tipAmount?: number
    finalAmount?: number
    paymentMethod?: string
    startTime?: Date | string
    endTime?: Date | string | null
    durationMinutes?: number | null
    cashierName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateManyBranchInput = {
    id?: string
    nameAr: string
    category?: string
    price: number
    costPrice?: number
    stockQty?: number
    minStockAlert?: number
    image?: string | null
    barcode?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SpecialistLedgerCreateManyBranchInput = {
    id?: string
    specialistId: string
    type: string
    amount: number
    notes?: string | null
    date?: Date | string
    recordedBy?: string
    createdAt?: Date | string
  }

  export type UserUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialistProfile?: SpecialistUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialistProfile?: SpecialistUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    permissions?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialistUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    payType?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    commissionRate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSpecialistProfileNestedInput
    bookings?: BookingUpdateManyWithoutSpecialistNestedInput
    tickets?: TicketUpdateManyWithoutSpecialistNestedInput
    ledgers?: SpecialistLedgerUpdateManyWithoutSpecialistNestedInput
  }

  export type SpecialistUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    payType?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    commissionRate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutSpecialistNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutSpecialistNestedInput
    ledgers?: SpecialistLedgerUncheckedUpdateManyWithoutSpecialistNestedInput
  }

  export type SpecialistUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    payType?: StringFieldUpdateOperationsInput | string
    baseSalary?: FloatFieldUpdateOperationsInput | number
    commissionRate?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingNumber?: StringFieldUpdateOperationsInput | string
    serviceIds?: StringFieldUpdateOperationsInput | string
    bookingDate?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
    specialist?: SpecialistUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    specialistId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceIds?: StringFieldUpdateOperationsInput | string
    bookingDate?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    specialistId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceIds?: StringFieldUpdateOperationsInput | string
    bookingDate?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    retailItems?: StringFieldUpdateOperationsInput | string
    servicesTotal?: FloatFieldUpdateOperationsInput | number
    retailTotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    tipAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cashierName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialist?: SpecialistUpdateOneRequiredWithoutTicketsNestedInput
    customer?: CustomerUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    specialistId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    retailItems?: StringFieldUpdateOperationsInput | string
    servicesTotal?: FloatFieldUpdateOperationsInput | number
    retailTotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    tipAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cashierName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    specialistId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    retailItems?: StringFieldUpdateOperationsInput | string
    servicesTotal?: FloatFieldUpdateOperationsInput | number
    retailTotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    tipAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cashierName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stockQty?: IntFieldUpdateOperationsInput | number
    minStockAlert?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stockQty?: IntFieldUpdateOperationsInput | number
    minStockAlert?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stockQty?: IntFieldUpdateOperationsInput | number
    minStockAlert?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialistLedgerUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    recordedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialist?: SpecialistUpdateOneRequiredWithoutLedgersNestedInput
  }

  export type SpecialistLedgerUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialistId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    recordedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialistLedgerUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialistId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    recordedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManySpecialistInput = {
    id?: string
    bookingNumber: string
    customerId: string
    branchId: string
    serviceIds: string
    bookingDate: string
    timeSlot: string
    status?: string
    notes?: string | null
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateManySpecialistInput = {
    id?: string
    ticketNumber: string
    branchId: string
    customerId?: string | null
    customerName: string
    customerPhone?: string | null
    chairNumber?: number
    status?: string
    services?: string
    retailItems?: string
    servicesTotal?: number
    retailTotal?: number
    discount?: number
    tipAmount?: number
    finalAmount?: number
    paymentMethod?: string
    startTime?: Date | string
    endTime?: Date | string | null
    durationMinutes?: number | null
    cashierName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecialistLedgerCreateManySpecialistInput = {
    id?: string
    branchId: string
    type: string
    amount: number
    notes?: string | null
    date?: Date | string
    recordedBy?: string
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutSpecialistInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingNumber?: StringFieldUpdateOperationsInput | string
    serviceIds?: StringFieldUpdateOperationsInput | string
    bookingDate?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
    branch?: BranchUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutSpecialistInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    serviceIds?: StringFieldUpdateOperationsInput | string
    bookingDate?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutSpecialistInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    serviceIds?: StringFieldUpdateOperationsInput | string
    bookingDate?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutSpecialistInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    retailItems?: StringFieldUpdateOperationsInput | string
    servicesTotal?: FloatFieldUpdateOperationsInput | number
    retailTotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    tipAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cashierName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutTicketsNestedInput
    customer?: CustomerUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutSpecialistInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    retailItems?: StringFieldUpdateOperationsInput | string
    servicesTotal?: FloatFieldUpdateOperationsInput | number
    retailTotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    tipAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cashierName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutSpecialistInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    retailItems?: StringFieldUpdateOperationsInput | string
    servicesTotal?: FloatFieldUpdateOperationsInput | number
    retailTotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    tipAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cashierName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialistLedgerUpdateWithoutSpecialistInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    recordedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutLedgersNestedInput
  }

  export type SpecialistLedgerUncheckedUpdateWithoutSpecialistInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    recordedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialistLedgerUncheckedUpdateManyWithoutSpecialistInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    recordedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyCustomerInput = {
    id?: string
    bookingNumber: string
    branchId: string
    specialistId?: string | null
    serviceIds: string
    bookingDate: string
    timeSlot: string
    status?: string
    notes?: string | null
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateManyCustomerInput = {
    id?: string
    ticketNumber: string
    branchId: string
    specialistId: string
    customerName: string
    customerPhone?: string | null
    chairNumber?: number
    status?: string
    services?: string
    retailItems?: string
    servicesTotal?: number
    retailTotal?: number
    discount?: number
    tipAmount?: number
    finalAmount?: number
    paymentMethod?: string
    startTime?: Date | string
    endTime?: Date | string | null
    durationMinutes?: number | null
    cashierName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingNumber?: StringFieldUpdateOperationsInput | string
    serviceIds?: StringFieldUpdateOperationsInput | string
    bookingDate?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutBookingsNestedInput
    specialist?: SpecialistUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingNumber?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    specialistId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceIds?: StringFieldUpdateOperationsInput | string
    bookingDate?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingNumber?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    specialistId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceIds?: StringFieldUpdateOperationsInput | string
    bookingDate?: StringFieldUpdateOperationsInput | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    retailItems?: StringFieldUpdateOperationsInput | string
    servicesTotal?: FloatFieldUpdateOperationsInput | number
    retailTotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    tipAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cashierName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutTicketsNestedInput
    specialist?: SpecialistUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    specialistId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    retailItems?: StringFieldUpdateOperationsInput | string
    servicesTotal?: FloatFieldUpdateOperationsInput | number
    retailTotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    tipAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cashierName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    specialistId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    chairNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    retailItems?: StringFieldUpdateOperationsInput | string
    servicesTotal?: FloatFieldUpdateOperationsInput | number
    retailTotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    tipAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cashierName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export const dmmf: runtime.BaseDMMF
}