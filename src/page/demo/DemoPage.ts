module page.demo {
    export class DemoPage extends core.Page<DemoPageLayout> {

        public createLayout(): DemoPageLayout {
            return new DemoPageLayout();
        }

        public onInit(layout: DemoPageLayout) {

            layout.buttonAddNew.click = () => {
                const dialog = new Dialog();
                dialog.show();
            };

        }
    }
}