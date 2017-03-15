module bootstrap {
    export function initialize() {
        setupSmartClient();

        const mainLayout = new layout.MainLayout();
        const mainApplication = new core.MainApplication(mainLayout);

        mainApplication.run();

        const demoPage = new page.demo.DemoPage();

        mainApplication.setPage(demoPage);
    }

    function setupSmartClient() {
        isc.Canvas.resizeControls(6);
        isc.Canvas.resizeFonts(3);

        // Disable automatic drawing for all items.
        isc.setAutoDraw(false);

        isc.Page.setAppImgDir('img/');
    }
}