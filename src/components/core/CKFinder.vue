<template>
    <div id="app">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    data() {
        return {
            editor: ClassicEditor,
            editorData: '<p>Rich-text editor content.</p>',
            editorConfig: {
                toolbar: [
                    'ckfinder',
                    '|',
                    'heading',
                    '|',
                    'bold',
                    'italic',
                    '|',
                    'numberedList',
                    'bulletedList',
                    '|',
                    'link',
                    'blockQuote',
                    'imageUpload',
                    'insertTable',
                    'mediaEmbed',
                    '|',
                    'undo',
                    'redo'
                ]
            }
        };
    }
};
</script>
