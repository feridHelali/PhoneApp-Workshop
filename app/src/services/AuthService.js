export const login = async (email,password)=>{
    const response = await fetch('http://localhost:3010/user/login',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email,password})
    });
    const json=await response.json();
    console.log(json)
    const token= json.payload.token;
    if(token){
        localStorage.setItem('user',JSON.stringify(json.payload))
    }

    return json.payload;

}

export const isAuthenticated = ()=>{
    const user=localStorage.getItem('user');
    if(!user){
        return null
    }
    return JSON.parse(user)
}

export const logout=async ()=>{
    localStorage.removeItem('user')
}