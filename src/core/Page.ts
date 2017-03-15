///<reference path='Component.ts'/>
///<reference path="Layout.ts"/>
module core {
    export abstract class Page<T extends core.Layout<any>> extends Component<T> {

        constructor() {
            super(() => {
                return this.createLayout();
            }, (layout) => {
                this.onInit(layout);
            });
        }

        protected abstract createLayout(): T;

        protected abstract onInit(layout: T);

        public show(): void {
            this.onShow();
        }

        public hide(): void {
            this.onHide();
        }

        protected onShow() {
        }

        protected onHide() {
        }
    }
}