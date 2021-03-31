export async function getBrazilUFs() {
    try{
        const response = await fetch('https://estudoar-ts-api.herokuapp.com/api/ufs');
        const ufs = await response.json();
        return ufs;
    }catch (error) {
        throw new Error('Failed to fetch API and get UFs');
    }
}

export async function getBrazilCitiesByUF(ufId) {
    try{
        const response = await fetch(`https://estudoar-ts-api.herokuapp.com/api/cities/${ufId}`);
        const cities = await response.json();
        return cities;
    } catch (error) {
        throw new Error('Failed to fetch API and get cities');
    }
}

export async function getSchoolSupplyCategories() {
    try{
        const response = await fetch('https://estudoar-ts-api.herokuapp.com/api/category');
        const categories = await response.json();
        return categories;
    } catch(error) {
        throw new Error('Failed to fetch API and get School Supply Categories');
    }
}

export async function getStudents(accessToken) {
    var myHeaders = new Headers();

    myHeaders.append("x-access-token", accessToken);

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    try{
        const response = await fetch("https://estudoar-ts-api.herokuapp.com/api/students", requestOptions);
        const students = await response.json();
        return students;
    } catch(error) {
        throw new Error('Failed to fetch API and get GET students');
    }
}

export async function handleLogin(email, password) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        email,
        password
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    try{
        const response = await fetch("https://estudoar-ts-api.herokuapp.com/api/login", requestOptions)
        const accessToken = await response.json();
        return accessToken;
    } catch (Error) {
        throw new Error('Login Failed');
    }
}
