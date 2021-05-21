import { isTupleTypeNode } from 'typescript';

type IsString<T> = T extends string ? true : false;

type A = IsString<string>;
type B = IsString<number>;

type SomeArr<T> = T extends (infer U)[] ? U : T;
type C = SomeArr<string[]>;
type D = SomeArr<number[]>;

type SecondArg<F> = F extends (argA: any, argB: infer U) => any ? U : never;

type F = typeof Array['prototype']['slice'];
type Arg = SecondArg<F>;
