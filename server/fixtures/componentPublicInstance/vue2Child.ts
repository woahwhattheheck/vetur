import { CombinedVueInstance } from 'vue';

export interface ChildProps {
  value: string;
  count?: number;
}

declare const Vue2Ctor: {
  new (): CombinedVueInstance<{}, {}, {}, {}, ChildProps>;
};

export default class Vue2Child extends Vue2Ctor {}
