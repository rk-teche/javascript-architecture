declare function greet (greeting: string): void;

greet("hey")

/**
 * GlobalReducerEvent it could be replace in different files as per the need, you just need to write inside `declare global`
 */
declare global {
    interface GlobalReducerEvent { }
}

export type GlobalReducer<TState> = (
    state: TState,
    event: {
        [EventType in keyof GlobalReducerEvent]: { type: EventType; } & GlobalReducerEvent[EventType]
    }[keyof GlobalReducerEvent] // use to create union
) => TState

declare global {
    interface GlobalReducerEvent {
        ADD_TODO: {
            text: string;
        },
        EDIT_TODO: {
            id: string;
        }
    }
}

interface TodoState {
    todos: Array<{ id: string; text: string; }>;
    // ... other state properties
}

const todosReducer: GlobalReducer<TodoState> = (state, event) => {
    if (event.type === "ADD_TODO")
    {
        event.text
    }
    if (event.type === "EDIT_TODO")
    {
        event.id
    }
    return state

}