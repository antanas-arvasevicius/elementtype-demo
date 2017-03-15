module layout {
    export class MainLayout extends core.MultiPage<core.Layout<isc.IVLayout>> {

        private menuHeader: isc.IHLayout;
        private languageDynamicForm: isc.IDynamicForm;

        constructor() {
            super();
        }

        protected onInit(layout: core.Layout<isc.IVLayout>) {
            this.showLoggedUser('Demo User');
        }

        public createLayout(): core.Layout<isc.IVLayout> {
            const currentUser = <Canvas width={200} backgroundColor="#FFFFFF"/>;
            const contentBlock = <Canvas width="*" backgroundColor="#FFFFFF"/>;

            this.setUserBlock(new core.InlineLayout(currentUser));
            this.setContentLayout(new core.InlineLayout(contentBlock));

            return new core.InlineLayout(
                <VLayout
                    width="100%" height="100%"
                    layoutLeftMargin={20} layoutRightMargin={20}
                    overflow="hidden"
                >
                    <VLayout height={50}>
                        {this.menuHeader = <HLayout>
                            {currentUser}
                            {this.languageDynamicForm = <DynamicForm titleOrientation="top">
                                <FormFieldItem
                                    name="language"
                                    title="Language"
                                    showTitle={false}
                                    editorType="SelectItem"
                                    valueMap={{ENG:"English", LTL:"Lithuania"}}
                                />
                            </DynamicForm> as isc.IDynamicForm}
                        </HLayout> as isc.IHLayout}
                    </VLayout>
                    <HLayout height="*" backgroundColor="#FFFFFF">{contentBlock}</HLayout>
                    <VLayout
                        height={25}
                        layoutLeftMargin={5} layoutRightMargin={5} layoutTopMargin={5} layoutBottomMargin={0}
                        border="1px solid #C8C8C8"
                    >
                        <HLayout>
                            <HTMLPane
                                contents="Demo system (c) 2017"/>
                            <VLayout>
                                <HTMLPane autoFit overflow={isc.Canvas.HIDDEN}
                                          contents={'<span style="color: red">__DEPLOYMENT_TIMESTAMP__</span>'}/>
                            </VLayout>
                        </HLayout>
                    </VLayout>
                </VLayout> as isc.IVLayout
            );
        }

        public showLoggedUser(username: string): void {
            this.assertInitialized();

            const logoutButton = isc.Button.create({
                width: 80,
                height: 20,
                title: 'Log Out',
                click: () => {
                    isc.warn('Log out clicked');
                }
            });

            const hello = isc.MenuButton.create({
                autoDraw: false,
                title: username,
                width: 150,
                height: 25,
                showMenuOnRollOver: true,
                align: "left",
            });

            const userBlock = isc.HLayout.create({
                height: 35,
                backgroundColor: '#FFFFFF',
                members: [
                    hello,
                    logoutButton
                ]
            });

            this.userBlock().sc.addChild(userBlock);
        }
    }
}