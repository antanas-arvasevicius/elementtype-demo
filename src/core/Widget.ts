///<reference path='Component.ts'/>
module core {
    export abstract class Widget<T extends core.Layout<any>> extends Component<T> {
        constructor() {
            super(() => {
                return this.createLayout();
            }, (layout) => {
                this.onInit(layout);
            });
        }

        protected abstract createLayout(): T;

        protected abstract onInit(layout: T);
    }
}
