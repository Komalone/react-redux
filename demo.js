const posts = [
    {title: 'post one', body:'this is post one', createAt: new Date().getTime()},
    {title: 'post two', body:'this is post two', createAt: new Date().getTime()}
];

function getposts(){
    setTimeout( ()=>{
        let output='';
        posts.forEach((post)=>{
            output += `<li>${post.title} = last updated ${(new Date().getTime() - post.createAt)/1000} second ago</li>`;
        });
        document.body.innerHTML=output;
    },1000)
}
function createPost(post, callback){
    setTimeout(()=>{
        posts.push({...post, createAt: new Date().getTime()}); 
        callback();        
    },5000);                   // this will not work bcz createpost took longer than getpost, this is where we use callback
}

function create4thPost(post, createPost){
    setTimeout(()=>{
        posts.push({...post, createAt: new Date().getTime()}); 
        createPost();        
    },7000);   
}

getposts();
createPost({title:'post three', body:'this is post three'}, getposts);
create4thPost({title:'Post four', body:'this is post four'}, getposts)