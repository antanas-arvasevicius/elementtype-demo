module core {
    /**
     * Class which is used to create SmartClient UI view
     * You must extends this class and override init() method
     * Init method should use SmartClient API to create UI interface, init method must return SmartClient component.
     */
    export interface Layout<T extends isc.ICanvas> {
        readonly sc: T;
    }
}