'use client'

import { useEditor, EditorContent, markdown } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { FC, useState } from 'react'
import { EditorMenuBar } from './EditorMenuBar'
import type { Editor } from '@tiptap/core'
import { Markdown } from '@tiptap/markdown'

type Props = {
  initalTitle: string,
  initalContent: string,
  handleSubmit: (titleEditor: Editor, contentEditor: Editor) => Promise<void>
}

export const PostCreationManager: FC<Props> = ({ initalTitle, initalContent, handleSubmit }) => {

  // managing title
  const title = useEditor({
    extensions: [StarterKit],
    content: initalTitle,
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'mb-2.5 rounded-md p-1.5 w-2/5 border-border-light border bg-background-md'
      }
    }
  })

  // managing content in body
  const body = useEditor({
    extensions: [StarterKit, Markdown],
    content: initalContent,
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'rounded-md w-full p-1.5 h-100 border-border-light border bg-background-md'
      }
    }
  })

  if (!title || !body) {
    return(
      <>
        <div>
          Unable to create post editors. Please try refreshing the page.
        </div>
      </>
    )
  }

  return (<>
    <div className='grid grid-cols-1 pt-10 pb-10 w-7/10'>
      <EditorContent editor={title} />
      <div className='relative group'>
        <EditorContent editor={body} />
        <div className='absolute position-top-right top-2 right-5'>
          <EditorMenuBar editor={body} />
        </div>
        
      </div>
      
      <button onClick={() => handleSubmit(title, body)}>Post Content</button>
    </div>
    
  </>)
}

