export type MessageItem = {
    from: Author,
    message: MessageData,
}

export type MessageData = {
    id: string,
    type: string,
    time: string,
    text?: string,

};

export type Author = {
    name: string,
}
