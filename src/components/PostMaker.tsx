'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { FC } from 'react'
import { EditorMenuBar } from './EditorMenuBar'

export const Tiptap: FC = () => {
  function handleClick() {
    console.log(title?.getText());
    console.log(body?.getText());
  }

  // managing title
  const title = useEditor({
    extensions: [StarterKit],
    content: 'This is a title',
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'm-5 rounded-md p-1.5 w-2/5 border-border-light border bg-background-md'
      }
    }
  })

  // managing content in body
  const body = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'm-5 rounded-md p-1.5 w-full h-100 border-border-light border bg-background-md'
      }
    }
  })

  return (<>
    <div className='grid grid-cols-1 pt-10 w-6/10'>
      <EditorContent editor={title} />
      <div><EditorContent editor={body} /></div>
      <EditorMenuBar editor={body} />
      <button onClick={() => handleClick()}>Post Content</button>
    </div>
    
 
      

    
  </>)
}

