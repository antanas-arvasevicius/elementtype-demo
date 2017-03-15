module utils {

    type CallbackFunc<T> = (value: T) => void;
    type CallbackWithZeroArguments = () => void;

    export interface Callback {
        add(f: CallbackWithZeroArguments): void;
    }

    export interface CallbackT<T> {
        add(f: CallbackFunc<T>): void;
    }

    export function Callback(): CallbackZeroArgumentsImpl {
        return <CallbackZeroArgumentsImpl>new CallbackImpl<void>();
    }

    export function CallbackT<T>(): CallbackTImpl<T> {
        return new CallbackImpl<T>();
    }

    interface CallbackZeroArgumentsImpl extends CallbackImpl<void> {
        fire(): void;
        callback: Callback;
    }

    interface CallbackTImpl<T> extends CallbackImpl<T> {
    }

    class CallbackImpl<T> {

        private callbacks: CallbackFunc<T>[] = [];

        private _callbackObject: CallbackT<T>;

        constructor() {
            this._callbackObject = {
                add: this.add.bind(this)
            }
        }

        public get callback(): CallbackT<T> {
            return this._callbackObject;
        }

        public add(f: CallbackFunc<T>): void {
            this.callbacks.push(f);
        }

        public fire(value: T): void {
            this.callbacks.forEach((callback) => callback.call(this, value));
        }

        public has(f: CallbackFunc<T>): boolean {
            return this.callbacks.some((_) => _ === f);
        }

        public removeListeners(): void {
            this.callbacks = [];
        }

    }
}