'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { FC } from 'react'

export const Tiptap: FC = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  })

  return <EditorContent editor={editor} />
}

