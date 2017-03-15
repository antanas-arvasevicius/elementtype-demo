abstract class Component<T, M> {
    /** A bogus type-system-only property. */
    private __bogusProps: T;

    private __elementType: M;

    static create(params: any[], children) {
    }
}


class Canvas extends Component<isc.ICanvasOptions, isc.ICanvas> {
    static create(params, children) {
        return isc.Canvas.create({
            ...<any>params,
            children: params.children ? [...params.children, ...children] : children
        });
    }
}

class WindowDialog extends Component<isc.IWindowOptions, isc.IWindow> {
    static create(params, children) {
        return isc.Window.create({...<any>params, items: children});
    }
}

class VLayout extends Component<isc.IVLayoutOptions, isc.IVLayout> {
    static create(params, children) {
        return isc.VLayout.create({...<any>params, members: children});
    }
}

class HLayout extends Component<isc.IHLayoutOptions, isc.IHLayout> {
    static create(params, children) {
        return isc.HLayout.create({...<any>params, members: children});
    }
}

class ListGrid extends Component<isc.IListGridOptions, isc.IListGrid> {
    static create(params, children) {
        return isc.ListGrid.create({
            ...<any>params,
            fields: params.fields ? [...params.fields, ...children] : children
        });
    }
}

class ListGridField extends Component<isc.IListGridFieldOptions, isc.IListGridField> {
    static create(params) {
        return {...params};
    }
}

class DynamicForm extends Component<isc.IDynamicFormOptions, isc.IDynamicForm> {
    static create(params, children) {
        return isc.DynamicForm.create({
            ...<any>params,
            fields: params.fields ? [...params.fields, ...children] : children
        });
    }
}

class FormFieldItem extends Component<isc.IDynamicFormFieldOptions, isc.IDynamicFormField> {
    static create(params) {
        return {...params};
    }
}

class TabSet extends Component<isc.ITabSetOptions, isc.ITabSet> {
    static create(params, children) {
        return isc.TabSet.create({...<any>params, tabs: params.tabs ? [...params.tabs, ...children] : children});
    }
}

class Tab extends Component<isc.ITabOptions, isc.ITab> {
    static create(params) {
        return {...params};
    }
}

class Button extends Component<isc.IButtonOptions, isc.IButton> {
    static create(params) {
        return isc.Button.create(params);
    }
}

class HTMLFlow extends Component<isc.IHTMLFlowOptions, isc.IHTMLFlow> {
    static create(params) {
        return isc.HTMLFlow.create(params);
    }
}

class HTMLPane extends Component<isc.IHTMLPaneOptions, isc.IHTMLPane> {
    static create(params) {
        return isc.HTMLPane.create(params);
    }
}

namespace SmartClientJSX {
    export function createElement<P extends Component<T, M>, T, M>(elementClass: {new (...args: any[]): P}, props: T, ...children: Component<any, any>[]):M {
        return (<any>elementClass).create(props !== null ? props : {}, children);
    }
}
