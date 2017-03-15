///<reference path='MultiPage.ts'/>
///<reference path="Page.ts"/>
module core {
    import MainLayout = layout.MainLayout;

    export class MainApplication {
        private _mainPage: MainLayout;
        private mainWindow: any;
        private page: core.Page<any>;
        private _userBlock: any;

        constructor(mainPage: MainLayout) {
            this._mainPage = mainPage;
        }

        public mainPage(): MainLayout {
            return this._mainPage;
        }

        public userBlock(): any {
            return this._userBlock;
        }

        public setUserBlock(block: any) {
            this._userBlock = block;
        }

        public run(): void {
            this.mainWindow = window['isc'].Canvas.create({
                autoDraw: true,
                height: "100%",
                overflow: "hidden",
                width: "100%"
            });

            const layout: core.Layout<any> = this._mainPage.layout;

            this.mainWindow.addChild(layout.sc);
        }

        public setPage<T extends core.Layout<any>>(page: core.Page<T>): void {
            if (this.page) {
                this.page.hide();
                this.mainPage().contentLayout().sc.removeChild(this.page.layout.sc);
            }

            if (page) {
                this.mainPage().contentLayout().sc.addChild(page.layout.sc);
                page.show();
                this.page = page;
            }
        }
    }
}
