const posts = [
    {title: 'post one', body:'this is post one'},
    {title: 'post two', body:'this is post two'}
];

function getposts(){
    setTimeout( ()=>{
        let output='';
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000)
}
function createPost(post){      //instead of callback we use promises to return 
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post);    
            
            const error= false;  // for error set it to true

            if(!error){
                resolve();
            }else{
                reject('Error');
            }
        },2000); 
    });
                      
}
// createPost({title:'post three', body:'this is three post'})
// .then(getposts)
// .catch(err => console.log(err));  // this line to catch uncaugth error

function deletePost(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(posts.length >0){
                resolve(posts.pop());
            }else{
                reject('Array is empty');
            }
        },1000);
    });
}

createPost({title:'post three', body:'this is three post'})
.then(() =>{
    getposts();
     deletePost().then(() =>{
        getposts();
        deletePost().then(()=>{
            getposts();
            deletePost().then(()=>{
                getposts();
                deletePost().then(()=>{})
                .catch((err)=>{
                    console.log('inside block', err)
                })

                })
            })
       })
    })
