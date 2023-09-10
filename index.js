const imageForm=document.querySelector("#imageForm")
const imageInput=document.querySelector("#imageInput")

imageForm.addEventListener("submit",async event=>{
    event.preventDefault()
    const file=imageInput.files[0]

    //get secure url from server
    const { url } = await fetch("http://localhost:5500/s3url").then((res) => res.json())


    console.log(url)
    //post image directly to s3 bucket
    // await fetch({
    //     method: "PUT",
    //     headers: {
    //         "Content-Type": "multipart/form-data"
    //     },
    //     body: file
    // })

    // const imageUrl=url.split('?')[0]
    // console.log(imageUrl)

    const imageUrl = url.split('?')[0];
const response = await fetch(imageUrl, {
  method: 'PUT',
  body: file, // Set the file as the request body
});

// Check if the upload was successful
if (response.ok) {
  console.log('Image uploaded successfully.');
} else {
  console.error('Image upload failed.');
}
})