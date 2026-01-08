// app/search/actions.ts
'use server'

import { redirect } from 'next/navigation'
import { getPosts } from '@/src/lib/get/getPosts'

export async function searchPost(formData: FormData) {
  const query = formData.get('post-name') as string

  const result = await getPosts(1, query)

  if (!result?.data?.length) {
    redirect('/not-found')
  }

  redirect(`/post/${result.data[0].guid}`)
}