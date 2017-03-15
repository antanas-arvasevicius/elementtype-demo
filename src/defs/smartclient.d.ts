declare module isc {


    interface IDataBoundComponentOptions {
    }

    interface IDataBoundComponent extends IDataBoundComponentOptions {
    }

    interface IDataSourceRecord {

    }

    interface IDataSourceOptions {

    }

    interface IDataSource extends IClass, IDataSourceOptions {
    }

    interface IListGridFieldOptions extends IFormItemOptions {
        name: string;

        minWidth?: number;
        maxWidth?: number;
        autoFitWidth?: boolean;

        canFilter?: boolean;
        canEdit?: boolean;
        canSort?: boolean;
        canEditFormula?: boolean;
        canEditSummary?: boolean;
        editorEnter?: (record: any, value: any, rowNum: number, colNum: number, grid: IListGrid) => any;
        editorExit?: (editCompletionEvent: any, record: any, value: any, rowNum: number, colNum: number, grid: IListGrid) => any;
        editorIconHeight?: number|string;
        editorIconWidth?: number|string;
        editorValueIconHeight?: number|string;
        editorValueIconWidth?: number|string;
        editorImageURLPrefix?: string;
        editorImageURLSuffix?: string;
        editorProperties?: IFormItemOptions;
        filterEditorProperties?: IFormItemOptions;
        editorType?: string;
        filterEditorType?: string;
        editorValueIcons?: Array<string>;
        editorValueMap?: Array<any>;
        enterKeyEditAction?: any;
        escapeKeyEditAction?: any;
        filterEditorValueMap?: any;
        formatEditorValue?: (value: any, record: any, rowNum: number, colNum: number, grid: IListGrid) => any;
        getEditorValueMap?: (values: any, field: any, grid: IListGrid) => any;
        parseEditorValue?: (value: any, record: any, rowNum: number, colNum: number, grid: IListGrid) => any;
        showTitle?: boolean;
        summaryFunction?: string;
        showGridSummary?: boolean;
        getGridSummary?: (records, summaryField) => any;
    }

    interface IListGridField extends IListGridFieldOptions {
    }

    type SortDirection = "ascending" | "descending";
    type SortSpecifier = {property: string; direction: SortDirection};

    interface IListGridOptions extends ICanvasOptions, IVLayoutOptions, IDataBoundComponentOptions {

        id?: string;
        /**
         * Set auto draw property
         */
        autoDraw?: boolean;
        autoFetchData?: boolean;
        dataSource?: IDataSource;
        summaryRowDataSource?: IDataSource;
        canEdit?: boolean;
        canDelete?: boolean;
        canDragRecordsOut?: boolean;
        canAcceptDroppedRecords?: boolean;
        canReorderRecords?: boolean;
        dragDataAction?: string;
        dropValues?: any;
        autoSaveEdits?: boolean;
        editOnFocus?: boolean;
        confirmCancelEditing?: boolean;
        confirmDiscardEdits?: boolean;
        showRecordComponentsByCell?: boolean;
        showRecordComponents?: boolean;
        canRemoveRecords?: boolean;
        showFilterEditor?: boolean;
        warnOnRemoval?: boolean;
        showCellContextMenus?: boolean;
        alwaysShowEditors?: boolean;
        initialSort?: SortSpecifier[];
        initialCriteria?: any;
        sortField?: string,
        sortDirection?: string,
        recordCanRemoveProperty?: string,
        editByCell?: boolean;
        editComplete?: (rowNum, colNum, newValues, oldValues, editCompletionEvent, response) => void;
        dragComplete?: () => void;
        rowDoubleClick?: (record: any, rowNum: number, colNum: number) => void;
        dataProperties?: {
            useClientFiltering?: boolean;
            useClientSorting?: boolean;
        };
        alternateRecordStyles?: boolean;
        emptyMessage?: string;
        useAllDataSourceFields?: boolean;
        createRecordComponent?: (record?: any, colNum?: number) => ICanvas|any;
        fields?: Array<IListGridFieldOptions>;
        recordDoubleClick?: (viewer?: any, record?: any, recordNum?: any, field?: any, fieldNum?: any, value?: any, rawValue?: any) => any;
        cellDoubleClick?: (record?: any, rowNum?: number, colNum?: number) => any;
        showRollOverCanvas?: boolean;
        rollOverCanvasConstructor?: any;
        rollOverCanvasProperties?: any;
        selectionType?: string;
        selectionAppearance?: string;
        recordCanSelectProperty?: string;
        expansionMode?: string;
        canExpandRecords?: boolean;
        header?: ILayout|any;
        cellChanged?: (record: any, newValue: any, oldValue: any, rowNum: number, colNum: number, grid: IListGrid) => any;
        editorExit?: (editCompletionEvent, record, newValue, rowNum, colNum) => any;
        updateData?: (updatedRecord: any|IDataSourceRecord, callback?: (dsResponse: any, data: any, dsRequest: any) => any, requestProperties?: any) => any;
        getCellCSSText?: (record: any, rowNum: number, colNum: number) => any;
        dataArrived?: (startRow: number, endRow: number) => void;
        dataChanged?: () => void;
        summaryRowFetchComplete?: (response, data, request) => void;
        canAutoFitFields?: boolean;
        instantScrollTrackRedraw?: boolean;
        scrollWheelRedrawDelay?: number;
        quickDrawAheadRatio?: number;
        dataFetchDelay?: number;
        canExport?: boolean;
        exportHeader?: string;
        enableRealTimeSupport?: boolean;
        canMultiSort?: boolean;
        groupStartOpen?: string;
        groupByField?: string | Array<string>;
        groupByMaxRecords?: number;
        canMultiGroup?: boolean;
        cellClick?: (record, rowNum, colNum) => void;
        recordClick?: (viewer?: IListGrid, record?: any, recordNum?: number, field?: IListGridField, fieldNum?: number, value?: any, rawValue?: any) => boolean|void;
        handleFilterEditorSubmit?: () => void;
        selectionChanged?: (record: IDataSourceRecord|any, state?: boolean) => void;
        selectionUpdated?: (record: IDataSourceRecord|any, recordList?: any) => void;
        autoFitData?: string;
        autoFitMaxRecords?: number;
        hideTotalCount?: boolean;
        getCellHoverComponent?: (record?: any, rowNum?: number, colNum?: number) => ICanvas;
        canHover?: boolean;
        showHover?: boolean;
        showHoverComponents?: boolean;
        _delaySingleClick?: boolean;
        showGridSummary?: boolean;
        showGroupSummary?: boolean;
        transferSelectedData?: (source: isc.IDataBoundComponent, index?: number, callback?: (any?: any) => any) => any;
        handleEditCellEvent?: (recordNum, fieldNum, event, newValue) => any;
        rowContextClick?: (record: any, rowNum: number, colNum: number) => boolean;
        saveByCell?: boolean;
        validateByCell?: boolean;
        validateOnChange?: boolean;
        recordEnabledProperty?: string;
        recordEditProperty?: string;
        autoFitFieldWidths?: boolean;
        autoFitFieldsFillViewport?: boolean;
        autoFitExpandField?: string;
        autoFitWidthApproach?: "value" | "title" | "both";
        cellPadding?: number;
    }

    interface IListGrid extends ICanvas, IVLayout, IDataBoundComponent, IListGridOptions {
        create(options?: IListGridOptions): IListGrid;
        selection: any;
        refreshFields();
        createRecordComponent();
        updateRecordComponent();
        getRecordIndex(str: any): number;
        removeRecordClick(index: number);
        startEditingNew(newValues?: any|IDataSourceRecord, suppressFocus?: boolean);
        cellHasChanges(rowNum: number, colNum: number): boolean;
        discardAllEdits(): void;
        discardEdits(rowNum: number, colNum?: number, dontHideEditor?: boolean): void;
        getFilterEditor(): any;
        setFilterValues(filterValues?: any);
        hasChanges(): boolean;
        fields: Array<IListGridField>;
        markRecordsRemoved(records: Array<IDataSourceRecord|any>);
        unmarkRecordRemoved(rowNum: number);
        markRecordRemoved(rowNum: number);
        rowHasChanges(rowNum: number): boolean;
        getRowNum(record: IDataSourceRecord|any): number;
        startEditing(rowNum?: number, colNum?: number, suppressFocus?: boolean);
        recordMarkedAsRemoved(rowNum: number): boolean;
        selectRecord(record: IDataSourceRecord|any, newState?: boolean);
        deselectRecord(record: IDataSourceRecord|any): void;
        isSelected(record: IDataSourceRecord|any): boolean;
        getSelection(): Array<IDataSourceRecord>;
        saveAllEdits(rows?: Array<number>, saveSuccessCallback?: () => any): boolean;
        fetchData(criteria?: any, callback?: (dsResponse: any, data: any, dsRequest: any) => any, requestProperties?: any);
        fetchData2(criteria?: any);
        addData(record: IDataSourceRecord|any, callback: (dsResponse: any, data: any, dsRequest: any) => any, requestProperties?: any);
        getFieldName(field: string|number): string;
        getRecord(recordNum: number): any;
        getData(): any;
        fieldIsVisible(field: string): boolean;
        showField(field: string, suppressRelayout?: boolean);
        invalidateCache();
        filterData(criteria?: any, callback?: any, requestProperties?: any);
        exportClientData(requestProperties?: any, callback?: (any?: any) => any);
        exportData(requestProperties?: any, callback?: (any?: any) => any);
        setFieldState(state?: any);
        getEditForm(): isc.IDynamicForm;
        endEditing(): void;
        getDataSource();
        getCriteria();
        willFetchData(newCriteria?: any): boolean;
        setCriteria(newCriteria?: any);
        getSort();
        setProperty(propertyName, newValue);
        getSelectedRecord(): IDataSourceRecord;
        getSelectedRecords(): Array<IDataSourceRecord>;
        setCanEdit(canEdit: boolean): void;
        getEditedRecord(valuesID: number|any): any;
        data: any;
        setEditValue(rowNum: number, colNum: number|string, value: any): void;
        getAllEditRows(): Array<number>;
        validateRow(rowNum: number): boolean;
        getTotalRows(): number;

        // some constants:
        PROGRAMMATIC: "programmatic";
    }

    interface IDynamicFormFieldOptions extends IFormItemOptions {
        pickListCriteria?: any;
        pickListWidth?: number|string;
        optionCriteria?: any;
    }

    interface IDynamicFormField extends IFormItem, IDynamicFormFieldOptions {
        fetchData(callback?: (request?: any, record?: any) => any);
        setCriterion(criterion: any);
        setOptionDataSource(dataSource: IDataSource);
    }

    interface IDynamicFormOptions extends ICanvasOptions {
        useAllDataSourceFields?: boolean;
        canEdit?: boolean;
        canSubmit?: boolean;
        autoFocus?: boolean;
        colWidths?: Array<string|number>;
        numCols?: number;
        fields?: Array<IDynamicFormFieldOptions>;
        items?: Array<IDynamicFormFieldOptions>;
        name?: string;
        dataSource?: IDataSource;
        wrapItemTitles?: boolean;
        titleOrientation?: "left" | "top" | "right";
        saveOnEnter?: boolean;
        submit?: () => void;
        titleAlign?: string;
        cellPadding?: any;
        members?: Array<any>;
        membersMargin?: number;
        valuesManager?: isc.IValuesManager;
    }


    interface IDynamicFormErrors {
        [fieldName: string]: string|string[];
    }

    interface IDynamicForm extends ICanvas, IDataBoundComponent, IDynamicFormOptions {
        /**
         * Creates DynamicForm
         * @param options
         */
        create(options?: IDynamicFormOptions): IDynamicForm;
        editSelectedData(listGrid: IListGrid): void;
        editRecord(record: any): void;
        editNewRecord(): void;
        focusAtEnd(start: boolean): void;
        isNewRecord(): boolean;
        getErrors(): IDynamicFormErrors;
        clearErrors(): void;
        getField(field: string): IDynamicFormField;
        validate(): boolean;
        getItem(item: string): IDynamicFormField;
        saveData(callback: (request?: any, record?: any) => any);
        addFieldErrors(str: string, str2: string, bool: boolean);
        getData(): any;
        clearValues();
        submit(): void;
        setValue(field: string, value: any): void;
        getValue(field: string): any;
        deselectAllRecords(): void;
        valuesHaveChanged(): boolean;
        getChangedValues(): any;
        setCanEdit(bool: boolean);
        setFields(fields: Array<IFormItem|any>);
        getFields(): Array<IFormItem>;
        getOldValues(): any;
        fields?: Array<IDynamicFormField>;
        items?: Array<IDynamicFormField>;
        setValuesManager(vm?: IValuesManager);
    }

    interface IValuesManager extends IClass, IValuesManagerOptions {
    }

    interface IValuesManagerOptions extends ICanvasOptions {
    }

    interface IWindowOptions extends ILayoutOptions {
        title?: string;
        items?: ICanvas|Array<ICanvas>|string;
        autoDraw?: boolean;
        showModalMask?: boolean;
        showCloseButton?: boolean;
        isModal?: boolean;
        autoCenter?: boolean;
        autoSize?: boolean;
        close?: (event?: any) => any;
        showMaximizeButton?: boolean;
        maximized?: boolean;
        contentLayout?: string;
        canDragReposition?: boolean;
        canDragResize?: boolean;
        dismissOnEscape?: boolean;
        animateMinimize?: boolean;
        showMinimizeButton?: boolean;
        closeClick?: () => void;
        onCloseClick?: () => boolean;
    }

    interface IWindow extends ILayout, IWindowOptions {
        create(options?: IWindowOptions): IWindow;
        setTitle(title: string);
    }

    interface ILayoutOptions extends ICanvasOptions {
        members?: Array<ICanvas|string>|ICanvas;
        defaultLayoutAlign?: string;
        autoFit?: boolean;
        layoutMargin?: string|number;
        layoutLeftMargin?: string|number;
        layoutRightMargin?: string|number;
        layoutTopMargin?: string|number;
        layoutBottomMargin?: string|number;
        membersMargin?: string|number;
        minMemberSize?: string|number;
        resizeBar?: ISplitbar;
        resizeBarClass?: string;
        resizeBarSize?: number;
        defaultResizeBars?: number;
        isGroup?: boolean;
        groupTitle?: string;
    }

    interface IVLayoutOptions extends ILayoutOptions {

    }

    interface IHLayoutOptions extends ILayoutOptions {

    }

    interface ILayout extends ICanvas, ILayoutOptions {
        getMembers(): Array<ICanvas>;
        removeMembers(members: ICanvas[]): void;
        hideMember(member: ICanvas, callback: (n?: any) => any);
        showMember(member: ICanvas, callback: (n?: any) => any);
        getMember(id: string): ICanvas;
        setGroupTitle(newTitle: string);
    }

    interface IVLayout extends ILayout, IVLayoutOptions {
        create(options?: IVLayoutOptions): IVLayout;
    }

    interface IHLayout extends ILayout, IHLayoutOptions {
        create(options?: IHLayoutOptions): IHLayout;
    }

    interface IButtonOptions extends IStatefulCanvasOptions {
        _constructor?: string;
        baseStyle?: string;
        title?: string;
        name?: string;
        actionType?: string;
        iconAlign?: string;
        iconSpacing?: number;
    }

    interface IButton extends IStatefulCanvas, IButtonOptions {
        create(buttonOptions?: IButtonOptions): IButton;
    }

    interface IHTMLPaneOptions extends ICanvasOptions {
        autoFit?: boolean;
        contents?: string;
        contentsURL?: string;
        allowCaching?: boolean;
        evalScriptBlocks?: boolean;
    }

    interface IHTMLPane extends ICanvas, IHTMLPaneOptions {
        create(htmlPaneOptions?: IHTMLPaneOptions): IHTMLPane;
        setContentsURL(url: string);
        setHeight(height: number);
    }

    interface IOperationBindingItem {
        dataProtocol?: string;
    }

    interface IOperationBinding {
        find(str: string, str2: string): IOperationBindingItem;
    }

    interface IRestDataSourceOptions {
    }
    interface IDataSourceField {
    }

    interface IRestDataSource extends IDataSource, IRestDataSourceOptions {
        create(restDataSourceOptions?: IRestDataSourceOptions): IRestDataSource;
        fields: IDataSourceField[];
    }

    interface ILayoutSpacerOptions extends ICanvasOptions {
    }

    interface ILayoutSpacer extends ICanvas, ILayoutSpacerOptions {
        create(layoutSpacerOptions?: ILayoutSpacerOptions): ILayoutSpacer
    }

    interface IClassOptions {
        ID?: string;
    }

    interface IClass extends IClassOptions {
        create(n?: any): IClass;
        destroy(): void;

        observe(object: {}, methodName: string, action: () => any): boolean;
        ignore(object: {}, methodName: string): boolean;

        fireCallback(callback: (n?: any) => any, argNames?, args?, target?, catchErrors?): any;

        parseStrictJSON(responseJson: string): any;

        isA(classname: string): boolean;
        addClassProperties(n?: any): IClass;
        addClassMethods(n?: any): IClass;
        addProperties(n?: any): IClass;
        setInstanceProperty(property: string, value: any);
        getInstanceProperty(property: string): any;
        setProperties(arguments: any);
        addMethods(arguments: any);
        getID(): string;
        fireOnPause(uniqueId: string, callback: () => any, afterMiliseconds: number): void;
        getPrototype(): {[index: string]: any};
    }

    interface IPage extends IClass {
        /**
         *
         * Specify the directory for app-specific images.
         * This becomes the default location where any SmartClient component will load images from unless the special "[SKIN]" prefix is used to indicate that an image is part of a skin.
         *
         * Default is "[APP]images/"
         * @param URL
         */
        setAppImgDir(URL: string);
    }

    interface ICanvasOptions {
        styleName?: string;
        groupTitle?: string;
        groupLabelStyleName?: string;
        groupBorderCSS?: string;
        groupLabelBackgroundColor?: string;
        autoDraw?: boolean;
        isGroup?: boolean;
        wrap?: boolean;
        visibility?: string;
        zIndex?: number;
        align?: string;
        layoutAlign?: string;
        height?: string|number;
        overflow?: string;
        width?: string|number;
        padding?: string|number;
        margin?: string|number;
        maxHeight?: string|number;
        maxWidth?: string|number;
        minHeight?: string|number;
        minWidth?: string|number;
        top?: string|number;
        left?: string|number;
        shadowDepth?: string|number;
        showShadow?: boolean;
        backgroundColor?: string;
        opacity?: string|number;
        ID?: string;
        accessKey?: string;
        disabled?: boolean;
        destroyed?: boolean;
        destroying?: boolean;
        contents?: string;
        tabIndex?: number;
        masterElement?: ICanvas;
        click?: (n1?: any, n2?: any, n3?: any, n4?: any) => any;
        children?: Array<ICanvas>;
        prompt?: string;
        showHover?: boolean;
        border?: string;
        resizeBarTarget?: string;
        showResizeBar?: boolean;
        showEdges?: boolean;
        getBaseStyle?: (record: any, rowNum: number, colNum: number) => string;
        baseStyle?: string;
    }

    interface ICanvas extends IClass, ICanvasOptions {
        HIDDEN: string;
        VISIBLE: string;
        INHERIT: string;

        LEFT: string;
        RIGHT: string;

        create(canvasOptions?: ICanvasOptions): ICanvas;
        addChild(item: any): void;
        removeChild(item: any): void;
        getById(id: string): ICanvas;
        enable();
        clear();
        blur();
        disable();
        focus();
        draw(): void;
        getID(): string;
        isDirty(): boolean;
        intersects(o: ICanvas): boolean;
        isDrawn(): boolean;
        isDisabled(): boolean;
        isVisible(): boolean;
        redraw(reason?: string);
        show():void;
        hide():void;
        markForDestroy();
        markForRedraw(reason?: string);
        setContents(contents?: string);
        getContents(): string;
        setCursor(cursor: string);
        setLeft(left: string|number);
        setTop(left: string|number);
        getCursor(): string;
        bringToFront(): void;
        getById(id: string): ICanvas;
        destroy(): void;
        addMember(member: ICanvas, position?: number);
        imgHTML(url: string);
        setHeight(height: number): void;
        contextMenu: isc.IMenu;
        resizeControls(size: number): void;
        resizeFonts(size: number): void;
    }



    interface ITabOptions {
        disabled?: boolean;
        canClose?: boolean;
        canEditTitle?: boolean;
        canReorder?: boolean;
        name?: string;
        title?: string;
        pane?: string|ICanvas;
        paneMargin?: number;
        icon?: any;
    }

    interface ITab extends ITabOptions {

    }

    interface ITabSetOptions extends ICanvasOptions {
        tabs?: Array<ITabOptions>;
        canCloseTabs?: boolean;
        canEditTabTitles?: boolean;
        canReorderTabs?: boolean;
        showMoreTab?: boolean;
        showTabPicker?: boolean;
        showTabScroller?: boolean;
        tabBarAlign?: string;
        tabBarControls?: Array<IStatefulCanvas>;
        tabBarPosition?: string;
        defaultTabHeight?: number;
        paneMargin?: number;
        tabSelected?: (tabNum?: number, tabPane?: isc.ICanvas, ID?: string, tab?: isc.ITab, name?: string) => void;
        tabDeselected?: (tabNum?: number, tabPane?: isc.ICanvas, ID?: string, tab?: isc.ITab, newTab?: string, name?: string) => void;
    }

    interface ITabSet extends ICanvas, ITabSetOptions {
        create(tabSetOptions?: ITabSetOptions): ITabSet;
        disableTab(tab: string|number|ITab);
        enableTab(tab: string|number|ITab);
        getTab(tab: string|number|ITab);
        getSelectedTabNumber(): number;
        getSelectedTab(): ITab;
        getTabPane(tab: string|number|ITab): isc.ICanvas;
        getTabNumber(tab: string|number|ITab): number;
        removeTab(tab: string|number|ITab|Array<ITab>);
        selectTab(tab: string|number|ITab);
        addTab(tab: ITab, pos?: number);
        addTabs(tab: ITab|Array<ITab>, pos?: number);
        removeTabs(tabs: Array<string|number|ITab|ITabOptions>);
        selectedTab?: number;
        tabs: Array<ITabOptions>;
    }

    interface IMenuItemOptions extends ICanvasOptions {
        title?: string;
        name?: string;
        submenu?: IMenu;
        isSeparator?: boolean;
        icon?: string;
        iconHeight?: number;
        iconWidth?: number;
        disabledIcon?: string;
        enabled?: boolean;
        checked?: boolean;
        action?: (n?: any) => any
    }

    interface IMenuItem extends ICanvas, IMenuItemOptions {

    }

    interface IMenuOptions extends ICanvasOptions {
        data?: Array<IMenuItemOptions>
        cellHeight?: number;
        defaultWidth?: number;
    }

    interface IMenu extends ICanvas, IMenuOptions {
        create(menuButtonOptions: IMenuOptions): IMenu;
        hideAllMenus();
        data?: Array<IMenuItem>
        showContextMenu(listGrid: IListGrid): void;
    }

    interface IMenuButtonOptions extends ICanvasOptions {
        title?: string;
        icon?: string;
        iconSize?: number;
        iconWidth?: number;
        iconHeight?: number;
        menu?: IMenuOptions;
        showMenuButtonImage?: boolean;
        showMenuOnRollOver?: boolean;
        prompt?: string;
    }

    interface IMenuButton extends ICanvas, IMenuButtonOptions {
        create(menuButtonOptions: IMenuButtonOptions): IMenuButton;
        menu?: IMenu;
    }


    interface IToolbarOptions extends ILayoutOptions {
        vertical?: boolean;
        buttons?: Array<ICanvas>;
    }

    interface IToolbar extends ILayout {
        create(options?: IToolbarOptions): IToolbar;
        vertical?: boolean;
        buttons?: Array<ICanvas>;
    }

    // Define ToolStrip
    interface IToolStrip extends ILayout {
        create(options?: IToolStripOptions): IToolStrip;
    }

    interface IToolStripOptions extends ILayoutOptions {
        backgroundImage?: string;
        backgroundColor?: string;
        styleName?: string;
        border?: string;
    }

    // Define ToolStripButton:
    interface IToolStripButton extends IButton {
        create(toolStripButtonOptions?: IToolStripButtonOptions): IToolStripButton;
    }

    interface  IToolStripMenuButton extends IMenuButton {
        create(toolStripMenuButtonOptions?: IToolStripMenuButtonOptions): IToolStripMenuButton;
    }

    interface IToolStripButtonOptions extends IButtonOptions {

    }

    interface IToolStripMenuButtonOptions extends IMenuButtonOptions {

    }

    interface IStatefulCanvasOptions extends ICanvasOptions {
        redrawOnStateChange?: boolean;
        autoFit?: boolean;
        ignoreRTL?: boolean;
        selected?: boolean;
        showDisabled?: boolean;
        showDown?: boolean;
        showFocused?: boolean;
        showRollOver?: boolean;
        align?: string;
        state?: string;
        title?: string;
        valign?: string;
        baseStyle?: string;
        icon?: string;
        iconOrientation?: string;
        iconStyle?: string;
        iconHeight?: number;
        iconWidth?: number;
        iconSize?: number;
        iconSpacing?: number;
        overCanvas?: ICanvas;
        overCanvasConstructor?: string;
    }

    interface IStatefulCanvas extends ICanvas, IStatefulCanvasOptions {
        select();
        deselect();
        getState(): string;
        getTitle(): string;
        setIcon(url: string);
        setState(state: string);
        isSelected(): boolean;
    }

    interface IFormItemIcon {
        name?: string;
    }

    interface IFormItemIconOptions {
        src?: string;
        prompt?: string;
        name?: string;
        neverDisable?: boolean;
        click?: (form, item, icon) => void;
    }

    interface IFormItemOptions extends IClassOptions {
        validators?: Array<any>|Array<String>;
        rowSpan?: number;
        showHint?: boolean;
        wrapTitle?: boolean;
        validateOnExit?: boolean;
        validateOnChange?: boolean;
        showIcons?: boolean;
        showOverIcons?: boolean;
        redrawOnChange?: boolean;
        required?: boolean;
        saveOnEnter?: boolean;
        selectOnClick?: boolean;
        selectOnFocus?: boolean;
        requiredMessage?: string;
        title?: string;
        name?: string;
        titleAlign?: string;
        titleClassName?: string;
        titleStyle?: string;
        type?: string;
        textAlign?: string;
        align?: string;
        vAlign?: string;
        left?: string|number;
        top?: string|number;
        width?: string|number;
        length?: number;
        margin?: string|number;
        height?: string|number;
        canEdit?: boolean;
        canFocus?: boolean;
        canSelectText?: boolean;
        click?: (form: IDynamicForm, item: IFormItem) => any;
        iconClick?: (form: IDynamicForm, item: IFormItem, icon: IFormItemIcon) => any;
        defaultValue?: any;
        value?: any;
        valueMap?: any;
        vertical?: boolean;
        editorType?: IFormItem|string;

        showIf?: string | ((item?, value?, form?, values?) => boolean);
        recordClick?: (viewer, record, recordNum, field, fieldNum, value, rawValue) => void
        change?: (form, item, value, oldValue) => boolean|void;
        changed?: (form?: IDynamicForm, item?, value?) => void;
        createCanvas?: (form: IDynamicForm, item: ICanvasItem) => any;
        displayField?: string;
        disabled?: boolean;
        optionFilterContext?: {[field: string]: any;};
        cachePickListResults?: boolean;
        defaultToFirstOption?: boolean;
        icons?: IFormItemIconOptions[];

        specialValues?: {[field: string]: any;};
        target?: string;
        hidden?: boolean;
        primaryKey?: boolean;
        allowEmptyValue?: boolean;
        foreignKey?: string;
        foreignDisplayField?: string;
        valueField?: string;
        sortField?: string;
        sortDirection?: string;
        translation?: any;
        readOnlyDisplay?: string;
        showTitle?: boolean;
        multiple?: boolean;
        multipleAppearance?: string;
        linkTitle?: string;

        useTextField?: boolean;

        changeOnKeypress?: boolean;

        showLabel?: boolean;
        colSpan?: number;
        textMatchStyle?: string;
        pickListFields?: any;
        filterFields?: any;
        handleChanged?: () => void;
        optionCriteria?: any;
        format?: string;
        filterEditorProperties?: IFormItemOptions;
        pickListProperties?: any;
        titleOrientation?: string;
        textBoxStyle?: string;
        setHint?: (newHint: string) => void;
        canPickFields?: boolean;
        canHide?: boolean;
        emptyCellValue?: string;
        pickListCriteria?: any;
    }

    interface IFormItem extends IClass, IFormItemOptions {
        clearValue();
        disable();
        enable();
        validate();
        isDisabled(): boolean;
        getValue(): any;
        setValue(value: any);
        getValueFieldName(): string;
        storeValue(newValue: any, showValue?: boolean): void;
        setRequired(required: boolean);
        showIcon(icon: string);
        hideIcon(icon: string);
        getSelectedRecord();
        getIcon(name: string);
        setGlobalTabIndex(index: number);
        setDisabled(value: boolean);
        //click();
    }

    interface ICanvasItemOptions extends IFormItemOptions {
        height?: string|number;
        multiple?: boolean;
        overflow?: any;
        shouldSaveValue: boolean;
        prompt: string;
        canvas?: ICanvas;
        createCanvas?: (form: IDynamicForm, item: ICanvasItem) => any;
    }

    interface ICanvasItem extends IFormItem, ICanvasItemOptions {

    }

    interface IToolbarItemOptions extends ICanvasItemOptions {
        buttons?: Array<IClass>;
        vertical?: boolean;
    }

    interface IToolbarItem extends ICanvasItem, IToolbarItemOptions {
        create(options?: IToolbarItemOptions): IToolbarItem;
    }

    interface IImgOptions extends IStatefulCanvasOptions {
        altText?: string;
        imageHeight?: number;
        imageWidth?: number;
        /**
         * "center"    Center (and don't stretch at all) the image if smaller than its enclosing frame.CENTER:"center",
         * "tile"    Tile (repeat) the image if smaller than its enclosing frame.
         * "stretch"    Stretch the image to the size of its enclosing frame.
         * "normal"    Allow the image to have natural size
         */
        imageType?: string;
        name?: string;
        showTitle?: boolean;
        usePNGFix?: boolean;
        size?: number;
        src?: string;
        prompt?: string;
        activeAreaHTML?: string;
    }

    interface IImg extends IStatefulCanvas, IImgOptions {
        create(options?: IImgOptions): IImg;
        resetSrc();
        setImageType(imageType: string);
        setSrc(URL: string);
    }

    interface IImgButtonOptions extends IImgOptions {
        actionType?: string;
        align?: string;
        autoFit?: boolean;
        baseStyle?: string;
        showTitle?: boolean;
        snapTo?: string;
        tileGrid?: any;
        record?: any;
    }

    interface IImgButton extends IImg, IImgButtonOptions {
        create(options?: IImgButtonOptions): IImgButton;
    }

    interface ITextItemOptions extends IFormItemOptions {
        width?: string|number;
        mask?: string;
        keyPressFilter?: string;
        emptyStringValue?: string;
        textBoxStyle?: string;
        browserInputType?: string;
        browserAutoCorrect?: boolean;
        length?: number;
        maskOverwriteMode?: boolean;
        saveOnEnter?: boolean;
        selectOnClick?: boolean;
        maskPadChar?: string;
        maskPromptChar?: string;
    }

    interface ILinkItemOptions extends ITextItemOptions {

    }

    interface ITextItem extends IFormItem, ITextItemOptions {
        create(options?: ITextItemOptions): ITextItem;
        setMask(mask: string);
        selectValue();
        getEnteredValue(): string;
    }

    interface ILinkItem extends ITextItem {
        create(options?: ILinkItemOptions): ILinkItem;
        setMask(mask: string);
        selectValue();
        getEnteredValue(): string;
    }

    interface IHTMLFlowOptions extends IClassOptions {
        allowCaching?: boolean;
        contents?: string;
        contentsType?: string;
        contentsURL?: string;
        contentsURLParams?: any;
        dynamicContents?: boolean;
        loadingMessage?: string;
        contentLoaded?: () => any;
        padding?: number|string;
        width?: number|string;
        height?: number|string;
    }

    interface IHTMLFlow extends ICanvas, IHTMLFlowOptions {
        create(options?: IHTMLFlowOptions): IHTMLFlow;
        setContents(newContents?: string);
        setContentsURL(url?: string, params?: any);
        transformHTML(html: string);
        loadingContent(): boolean;
    }

    interface ILabelOptions extends IButtonOptions {
        align?: string;
        contents?: string;
        styleName?: string;
        valign?: string;
        icon?: string;
        iconHeight?: number;
        iconWidth?: number;
        iconSize?: number;
        iconSpacing?: number;
        iconOrientation?: string;
        iconAlign?: string;
        autoFit?: boolean;
        dynamicContents?: boolean;
        wrap?: boolean;
        autoCenter?: boolean;
    }

    interface ILabel extends IButton, ILabelOptions {
        create(options?: ILabelOptions): ILabel;
    }

    interface IStackOptions extends ILayoutOptions {
        resizeBarSize?: number;
    }

    interface IStack extends ILayout, IStackOptions {
        reflow(reason?: string);
        setLayoutMargin(margin?: number);
    }

    interface IVStack extends IStack, IStackOptions {
        create(options?: IStackOptions): IVStack;
    }

    interface IHStack extends IStack, IStackOptions {
        create(options?: IStackOptions): IHStack;
    }

    interface IStretchImgOptions extends IStatefulCanvasOptions {

    }

    interface IStretchImg extends IStatefulCanvas, IStretchImgOptions {
        create(options?: IStretchImgOptions): IStretchImg;
    }

    interface IProgressbarOptions extends IStretchImgOptions {
        percentDone?: number;
        length?: number;
    }

    interface IProgressbar extends IStretchImg, IProgressbarOptions {
        create(options?: IProgressbarOptions): IProgressbar;
    }

    interface ICommOptions {
        xmlSchemaMode?: boolean;
        sendXmlHttpRequest: any;
    }

    interface IComm extends ICommOptions {

    }

    interface IJSON {
        encode(data?: any, options?: any);
        decode(json: string): any;
    }

    interface ISplitbarOptions extends IStretchImgOptions {
        canCollapse?: boolean;
        canDrag?: boolean;
        showGrip?: boolean;
        target?: ICanvas;
        vertical?: boolean;
    }

    interface ISplitbar extends IStretchImg, ISplitbarOptions {
        create(options?: ISplitbarOptions): ISplitbar;
    }

    interface IImgSplitbarOptions extends IImgOptions {
        target?: ICanvas;
        vertical?: boolean;
    }

    interface IImgSplitbar extends IImg, IImgSplitbarOptions {
        create(options?: IImgSplitbarOptions): IImgSplitbar;
    }

    interface ISnapbarOptions extends ISplitbarOptions {

    }

    interface ISnapbar extends ISplitbar, ISnapbarOptions {
        create(options?: ISnapbarOptions): ISnapbar;
    }

    interface ITileLayoutOptions extends ICanvasOptions {
        tiles?: Array<ICanvas>;
        tileSize?: number;
        tilesPerLine?: number;
        tileWidth?: number;
        tileHeight?: number;
        tileMargin?: number;
    }

    interface ITileLayout extends ICanvas, ITileLayoutOptions {
        create(options?: ITileLayoutOptions): ITileLayout;
    }

    interface IFlowLayoutOptions extends ITileLayoutOptions {
        layoutPolicy?: string;
    }

    interface IFlowLayout extends ITileLayout, IFlowLayoutOptions {
        create(options?: IFlowLayoutOptions): IFlowLayout;
    }

    interface IRichTextItem extends ICanvas {
        create(options?: IRichTextItemOptions): IRichTextItem;
    }

    interface IRichTextItemOptions {

    }

    interface IOffline {
        goOnline(): void;
        goOffline(): void;
        useNativeOfflineDetection(): void;
    }

    interface ISCInterface {

        ask(message: string, callback: (ok: boolean) => void): void;

        clone(o: any): any;
        applyMask(input: any, mask: any): any;

        ListGrid: isc.IListGrid;
        FormItem: isc.IFormItem;
        Window: IWindow;
        DynamicForm: IDynamicForm;
        ValuesManager: IValuesManager;
        HLayout: IHLayout;
        Button: isc.IButton;
        IButton: isc.IButton;
        VLayout: IVLayout;
        HTMLPane: IHTMLPane;
        RestDataSource: IRestDataSource;
        Label: ILabel;
        LayoutSpacer: ILayoutSpacer;
        Page: IPage;
        Canvas: ICanvas;
        DataSource: IDataSource;
        TabSet: ITabSet;
        MenuButton: IMenuButton;
        Img: IImg;
        Menu: IMenu;
        Time: {
            adjustForDST: boolean;
        };
        Toolbar: IToolbar;
        ToolStrip: IToolStrip;
        ToolStripButton: IToolStripButton;
        ToolStripMenuButton: IToolStripMenuButton;
        ToolbarItem: IToolbarItem;
        ImgButton: IImgButton;
        TextItem: ITextItem;
        LinkItem: ILinkItem;
        HTMLFlow: IHTMLFlow;
        TileLayout: ITileLayout;
        VStack: IVStack;
        HStack: IHStack;
        StretchImg: IStretchImg;
        Progressbar: IProgressbar;
        Splitbar: ISplitbar;
        ImgSplitbar: IImgSplitbar;
        Snapbar: ISnapbar;
        FlowLayout: IFlowLayout;
        Comm: IComm;
        JSON: IJSON;
        Offline: IOffline;
        Operators: isc.IClass;
        RichTextItem: isc.IFormItem;

        isAn: {
            Array(o): boolean;
            Object(o): boolean;
        };

        isA: {
            ValuesManager(o): boolean;
            DynamicForm(o): boolean;
            Layout(o): boolean;
            VLayout(o): boolean;
            CanvasItem(o): boolean;
            IButton(o): boolean;
            TabSet(o): boolean;
            SelectItem(o): boolean;
            ComboBoxItem(o): boolean;
            ResultSet(o): boolean;
            ListGrid(o): boolean;
            RestDataSource(o): boolean;
            Label(o): boolean;
            LayoutSpacer(o): boolean;
            Page(o): boolean;
            Canvas(o): boolean;
            RPCManager(o): boolean;
            TabSet(o): boolean;
            FileItem(o): boolean;
            UploadItem(o): boolean;
            Date(o): boolean;
            String(o): boolean;
        };


        Dialog: {
            YES: any;
            NO: any;
            OK: any;
            CANCEL: any;
        };

        Class: IClass;

        confirm(message: string, callback?: (value: boolean) => void, properties?: {}): void;
        say(str: string, callback?: (n?: any) => any): void;
        warn(str: string, callback?: (n?: any) => any): void;
        ask(message: string, callback?: (n?: any) => any, dialogProp?: any): void;
        /**
         *
         * Set the global default setting for Canvas.autoDraw.
         * After calling isc.setAutoDraw(), any newly created Canvas which is not given an explicit setting for autoDraw will follow the new default setting.
         *
         * autoDraw:false is the recommended default setting for most applications since it ensures that extra draws will not occur when developers inadvertently omit the autoDraw:false setting on child components.
         * @param bool
         */
        setAutoDraw(bool: boolean): void;
        addProperties(prop: any, options?: any): any;

        askForValue(message: string, callback: (answer: any) => void, properties?: {}): void;

        confirm(message: string, callback: (value: any, dialog?: any) => any, properties: any): void;
    }
}

declare var isc: isc.ISCInterface;

declare module "smartclient" {
    export = isc;
}
