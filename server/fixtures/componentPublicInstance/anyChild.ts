import { ComponentPublicInstance } from 'vue';

export interface ChildProps {
  title: string;
  count?: number;
}

declare const PublicInstanceCtor: {
  new (): ComponentPublicInstance<ChildProps, {}, {}, {}, {}, {}, any>;
};

export default class AnyChild extends PublicInstanceCtor {}
