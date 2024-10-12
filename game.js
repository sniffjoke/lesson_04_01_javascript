export class Game {

    #status = GAME_STATUSES.PENDING
    #googlePosition = null
    #settings

    // post
    start() {
        this.#status = GAME_STATUSES.PENDING;
        this.#googlePosition = {x: 0, y: 0};
        this.#settings = {gridSize: { columnsCount: 1 }}
    }

    // getter
    get status() {
        return this.#status
    }

    get settings() {
        return {}
    }

    set settings(settings) {
        this.#settings = settings
    }

    get googlePosition() {
        return this.#googlePosition
    }

}

export const GAME_STATUSES = {
    PENDING: 'pending',
    IN_PROGRESS: 'in_progress',
    COMPLETED: 'completed'
}
