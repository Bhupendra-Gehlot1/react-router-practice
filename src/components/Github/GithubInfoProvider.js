
const GithubInfoProvider = async() =>{
    const response = await fetch('https://api.github.com/users/bhupendra-gehlot1')
    return response.json();
}

export default GithubInfoProvider