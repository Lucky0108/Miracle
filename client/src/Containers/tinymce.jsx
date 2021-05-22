import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import PageTitle from '../Components/UI/PageTitle'
import { api } from '../urlConfig';
const axios = require('axios');

/**
* @author
* @function TinyMce
**/

const TinyMce = (props) => {
    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };

    // ToDO: return not working
    // ToDo: Upload Images in User Id And Show Them in a Modal So user can see and delete past uploaded Images just like wordpress

    const imagesUploadHandler = (blobInfo, success, failure) => {
        const uploadLink = `${api}/blog/images/60a4d44f1b25d52b44ab483d`;
        let formData = new FormData();
        formData.append('image', blobInfo.blob(), blobInfo.filename());
        
        return axios.post( uploadLink, formData, {
            headers: {
                'Content-Type': "multipart/form-data",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE0ZDQ0ZjFiMjVkNTJiNDRhYjQ4M2QiLCJpYXQiOjE2MjE2ODY0NjMsImV4cCI6MTYyMTc3Mjg2M30.Mz6EH9okdn-OL4BP9o-7GGiXlo9bs874RwpzZOVC9wc"
            }
        })
        .then((response) => {
            return response;
        })
        .then((res) => {
            success(res.data.location)
            // console.log(res);
        })
        .catch((err) => failure(err.response.data.error))
    }

    return (
      <>
      <PageTitle title="Testimonials" para="This is where you can see what our clients has to say about our services." />
        <div className="section-padding">
        <Editor
          apiKey='kz7vwl0v3gpu9rqz46cpe6o5oqulyefd5qcumyy3afidif2f'
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            images_upload_handler: imagesUploadHandler,
            height: 500,
            // menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'insertfile undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | link image | ' +
            'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
        <button onClick={log}>Log editor content</button>
        </div>
      </>
    );
  }


export default TinyMce