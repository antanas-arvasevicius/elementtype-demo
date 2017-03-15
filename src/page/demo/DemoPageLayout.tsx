module page.demo {
    export class DemoPageLayout implements core.Layout<isc.IVLayout> {

        private _messagesArea: any;

        readonly listGrid: isc.IListGrid;
        readonly sc: isc.IVLayout;

        readonly buttonAddNew: isc.IButton;

        public constructor() {
            this.listGrid =
                <ListGrid canRemoveRecords
                          dataProperties={{useClientFiltering: false, useClientSorting: false}}
                          fields={
                              [
                                  { name: 'id' },
                                  { name: 'title' },
                                  { name: 'description' }
                              ]
                          }
                /> as isc.IListGrid;

            this.sc =
                <VLayout width="100%" height="100%" minMemberSize="18" overflow="auto" defaultLayoutAlign="center">
                    <HLayout border="1px solid #C8C8C8" height="30" width="100%" defaultLayoutAlign="left">
                        <HLayout height="100%" width="100%" align="left" defaultLayoutAlign="center">
                            {this.buttonAddNew = <Button name="buttonAddNew" title="Add new Record"/> as isc.IButton}
                            <Button name="testHistory" title="Test History"/>
                            <Button name="reload" title="Reload ListGrid"/>
                            {this._messagesArea = <HTMLFlow padding={5} width="100%" height="100%"/>}
                        </HLayout>
                    </HLayout>
                    {this.listGrid}
                </VLayout> as isc.IVLayout;
        }
    }
}