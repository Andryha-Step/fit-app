export interface ChatMessage {
    text?: string
    time: number,
    status: 'read',
    from: ChatContact,
    my?: boolean
}

export interface LastMessage {
    text?: string
    time: number,
    status: 'read',
    my?: boolean
}

export interface ChatContact {
    id: string | number,
    title: string,
    unread: number,
    type: 'dialog' | 'group',
    participants?: number,
    lastMessage?: LastMessage,
    avatarUrl?: string,
    contactColor?: string,
}