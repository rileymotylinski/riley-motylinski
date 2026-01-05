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
            <div className="w-20 rounded-md border border-border-light p-1 bg-background-md flex opacity-0 hover:bg-background-light group-hover:opacity-100 transition-opacity duration-150">
                <button onClick={() => editor.chain().focus().toggleBold().run()} className="border border-white"><b>B</b></button>
            </div>   
        </>
    )
}