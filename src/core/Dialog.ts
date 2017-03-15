///<reference path='Widget.ts'/>
///<reference path="../utils/Callback.ts"/>
module core {
    export abstract class Dialog<T extends core.Layout<isc.IWindow>> extends Component<T> {

        private _onCloseClicked = utils.Callback();
        readonly onCloseClicked = this._onCloseClicked.callback;

        constructor() {
            super(() => {
                return this.createLayout();
            }, (layout) => {
                this.onInit(layout);

                layout.sc.onCloseClick = () => {
                    this._onCloseClicked.fire();
                    return false;
                }
            });
        }

        protected abstract createLayout(): T;

        protected abstract onInit<T extends isc.ICanvas>(layout:core.Layout<T>);

        public show(): void {
            this.layout.sc.show();
        }

        public hide(): void {
            this.layout.sc.hide();
        }

        public destroy(): void {
            this.layout.sc.destroy();
        }
    }
}


