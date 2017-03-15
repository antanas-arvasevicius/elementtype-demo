///<reference path="../../core/Dialog.ts"/>
module page.demo {
    export class Dialog extends core.Dialog<core.Layout<isc.IWindow>> {

        public createLayout(): core.Layout<isc.IWindow> {

            return new core.InlineLayout(
                <WindowDialog title="Demo" width="900" height="680" autoSize={false} autoCenter isModal showModalMask>
                    <VLayout>
                        <HTMLFlow contents="some html text. Hello"/>
                    </VLayout>
                </WindowDialog> as isc.IWindow
            );
        }

        public onInit(layout: core.Layout<isc.IWindow>) {
            this.onCloseClicked.add(() => {
                this.hide();
            })
        }

    }
}
