///<reference path='Layout.ts'/>
module core {

    /**
     * Use InlineLayout class where you don`t want create external Layout class for simple UI layouts.
     */
    export class InlineLayout<T extends isc.ICanvas> implements Layout<T> {
        readonly sc: T;

        public static create<T extends isc.ICanvas>(content: T): InlineLayout<T> {
            return new InlineLayout(content);
        }

        constructor(content: T) {
            this.sc = content;
        }
    }
}