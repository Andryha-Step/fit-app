import { useEffect, useState } from "react"
import exampleAvatar1 from '../../assets/images/example-avatar-5.png'
import exampleAvatar2 from '../../assets/images/example-avatar-6.png'
import exampleAvatar3 from '../../assets/images/example-avatar-7.png'
import { ChatContact } from "../../types/Chat"

interface useChatContactsHook {
    loading?: boolean
}

export default function useChatContacts(): ChatContact[] | null {

    const [contacts, setContacts] = useState<ChatContact[] | null>(null)

    useEffect(() => {
        new Promise<ChatContact[]>((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {
                        id: '1',
                        type: 'dialog',
                        title: 'Coach',
                        unread: 2,
                        avatarUrl: exampleAvatar1,
                        lastMessage: {
                            text: 'Hello!',
                            time: new Date().setHours(23, 17),
                            status: 'read',
                        }
                    },
                    {
                        id: '2',
                        type: 'group',
                        title: 'Nutrition 101 by Coach',
                        unread: 147,
                        contactColor: '#9BFFB1',
                        participants: 20,
                    },
                    {
                        id: '3',
                        type: 'group',
                        title: 'General Group Chat',
                        unread: 147,
                        contactColor: '#F2994A',
                        participants: 20,
                        // avatarUrl: exampleAvatar1,
                    }
                ])
            }, 0)
        }).then((req) => {
            setContacts(req)
        })
    }, [])

    return contacts
}