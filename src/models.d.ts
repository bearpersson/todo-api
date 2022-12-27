/* eslint-disable @typescript-eslint/no-unused-vars */

namespace Models {
    export interface Todo {
        id: string;
        text: string;
        completed: boolean;
    }
}

namespace Api {
    export interface Create {
        text: string;
    }

    export interface Update {
        text: string;
        completed: boolean;
    }
}
