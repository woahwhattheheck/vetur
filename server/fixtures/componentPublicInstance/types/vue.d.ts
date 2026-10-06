/**
 * Props-relevant slice of Vue 3.2.47
 * packages/runtime-core/src/componentPublicInstance.ts
 * `export type ComponentPublicInstance` (parameter order and `$props`).
 *
 * P is parameter 0. PublicProps is parameter 6 and defaults to P.
 * Defaults is parameter 7. `$props` is `P & PublicProps` unless
 * MakeDefaultsOptional is true, in which case it is
 * `Partial<Defaults> & Omit<P & PublicProps, keyof Defaults>`.
 */
export type ComponentPublicInstance<
  P = {},
  B = {},
  D = {},
  C = {},
  M = {},
  E = {},
  PublicProps = P,
  Defaults = {},
  MakeDefaultsOptional extends boolean = false,
  Options = {},
  I = {}
> = {
  $data: D;
  $props: MakeDefaultsOptional extends true
    ? Partial<Defaults> & Omit<P & PublicProps, keyof Defaults>
    : P & PublicProps;
  $options: Options;
  $emit: (event: E, ...args: any[]) => void;
} & P;

/**
 * Props-relevant slice of Vue 2.6/2.7 `CombinedVueInstance`.
 * Props remains parameter 4; Vue 2.7 only appends setup/mixin parameters.
 */
export type CombinedVueInstance<
  Instance = {},
  Data = {},
  Methods = {},
  Computed = {},
  Props = {},
  SetupBindings = {}
> = Data & Methods & Computed & Props & Instance & SetupBindings;
