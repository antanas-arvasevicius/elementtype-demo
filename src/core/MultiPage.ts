///<reference path='Page.ts'/>
///<reference path='Layout.ts'/>
module core {
    /**
     * Extend these class only for main application page which must include headers, left side menus and other elements.
     * This class has a `contentLayout` property which will refer to content area where other pages will be rendered.
     *
     *
     * You need to override public method createLayout()  and call method setContentLayout() to set which content block
     * will be used for other pages.
     */
    export abstract class MultiPage<T extends core.Layout<isc.ICanvas>> extends Page<T> {
        private _contentBlock: core.Layout<any>;
        private _userBlock: core.Layout<any>;

        /**
         * You must call this method manually in createLayout() method to set a content block which will be used
         * as rendering area for other page
         */
        public setContentLayout(contentBlock: core.Layout<any>): void {
            this._contentBlock = contentBlock;
        }

        /**
         * Method returns content layout which will be used as rendering area for other pages
         */
        public contentLayout(): core.Layout<any> {
            return this._contentBlock;
        }

        public setUserBlock(userBlock: core.Layout<any>): void {
            this._userBlock = userBlock;
        }

        public userBlock(): core.Layout<any> {
            return this._userBlock;
        }
    }
}