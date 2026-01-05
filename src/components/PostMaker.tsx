'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { FC, useState } from 'react'
import { EditorMenuBar } from './EditorMenuBar'
import { PostData } from '../app/api/posts/[guid]/route'
import { createPost } from '../lib/post/createPost'

export const Tiptap: FC = () => {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleClick() {
    const postTitle = title?.getText();
    const postContent = body?.getText();

    if (!postTitle || !postContent) {
      setErr("missing post content");
      return;
    }

    const post: PostData = {
      guid: crypto.randomUUID(),
      title: postTitle,
      content: postContent,
      tags: ["test-tag"],
      date: new Date().toISOString()
    }
    setLoading(true);
    await createPost(post);
    setLoading(false);
  }

  // managing title
  const title = useEditor({
    extensions: [StarterKit],
    content: 'This is a title',
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
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'rounded-md w-full p-1.5 h-100 border-border-light border bg-background-md'
      }
    }
  })

  if (loading) {
    return <div>loading...</div>
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
      
      <button onClick={() => handleClick()}>Post Content</button>
      <div>{err}</div>
    </div>
    
  </>)
}

