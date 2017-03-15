///<reference path='Layout.ts'/>
module core {
    export module Component {
        export type LayoutConstructor<T> = () => T;
        export type Layout = {sc: isc.ICanvas};
    }

    export class Component<T extends Component.Layout> {
        private layoutConstructor: core.Component.LayoutConstructor<T>;

        constructor(layoutConstructor: Component.LayoutConstructor<T>, init: (layout: T) => void) {
            this.layoutConstructor = _.once(() => {
                const layout = layoutConstructor();
                init(layout);
                return layout;
            });
        }

        protected assertInitialized() {
            this.layoutConstructor();
        }

        public get layout(): T {
            return this.layoutConstructor();
        }

        public get sc(): isc.ICanvas {
            return this.layoutConstructor().sc;
        }
    }
}