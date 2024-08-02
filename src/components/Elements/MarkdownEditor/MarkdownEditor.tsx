import MDEditor, { MDEditorProps } from '@uiw/react-md-editor';

type MarkdownEditorProps = { colorMode?: string } & MDEditorProps;

export default function MarkdownEditor({
  colorMode,
  ...props
}: MarkdownEditorProps) {
  return (
    <>
      <MDEditor
        preview={props.preview || 'edit'}
        data-color-mode={colorMode === 'light' ? 'light' : 'dark'}
        {...props}
      />
    </>
  );
}
