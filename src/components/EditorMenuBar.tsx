;
import { Editor } from "@tiptap/react";
import { FC } from "react";

type Props = {
    editor: Editor | null
}

export const EditorMenuBar: FC<Props> = ({ editor }) => {
    if (!editor) return null;
    return (
        <>
            <button onClick={() => editor.chain().focus().toggleBold().run()}>Bold</button>
        </>
    )
}