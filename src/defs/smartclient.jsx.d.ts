declare module JSX {
    export interface IntrinsicElements {
    }

    interface Element extends isc.ICanvas {

    }

    interface ElementClass extends Component<any, any> {

    }
    interface HtmlElementInstance extends ElementClass {

    }
    interface ElementAttributesProperty {
        __bogusProps;
    }

    interface ElementTypeProperty {
        __elementType;
    }
}
