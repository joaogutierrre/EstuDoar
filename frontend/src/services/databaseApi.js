export async function getBrazilUFs() {
    try{
        const response = await fetch('https://estudoar-ts-api.herokuapp.com/api/ufs');
        const ufs = await response.json();
        return ufs;
    }catch (error) {
        console.log('error to fetch API and get UFs', error)
    }
}

export async function getBrazilCitiesByUF(ufId) {
    try{
        const response = await fetch(`https://estudoar-ts-api.herokuapp.com/api/cities/${ufId}`);
        const cities = await response.json();
        return cities;
    } catch (error) {
        console.log('error to fetch API and get cities', error)
    }
}

export async function getSchoolSupplyCategories() {
    try{
        const response = await fetch('https://estudoar-ts-api.herokuapp.com/api/category');
        const categories = await response.json();
        return categories;
    } catch(error) {
        console.log('error to fetch API and get School Supply Categories', error)
    }
}

export async function getStudents(accessToken) {
    const myHeaders = new Headers();

    myHeaders.append("x-access-token", accessToken);

    const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    try{
        const response = await fetch("https://estudoar-ts-api.herokuapp.com/api/students", requestOptions);
        if(response.status !== 204)
        {
            const students = await response.json();
            return students;
        }
        
    } catch(error) {
        console.log('error to fetch API and GET students', error)
    }
}

export async function setStudent(student, accessToken) {
    const myHeaders = new Headers();
    myHeaders.append("x-access-token", accessToken);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(student);

    const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    try{
        const response = await fetch("https://estudoar-ts-api.herokuapp.com/api/students", requestOptions);
        const result = await response.json();
        return result;
    } catch(error){
        console.log('error add students', error)
    }
}

export async function handleLogin(email, password) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        email,
        password
    });

    const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    try{
        const response = await fetch("https://estudoar-ts-api.herokuapp.com/api/login", requestOptions)
        const accessToken = await response.json();
        return accessToken;
    } catch (error) {
        console.log('error, Login', error)
    }
}

export async function getFeed(filters) {
    let endpoint = "https://estudoar-ts-api.herokuapp.com/api/feed/students";
    if(filters.length !== 0) {
        endpoint = filters.reduce((acc, currentFilter) => acc = `${acc}/${currentFilter}`, endpoint);
    }
        try{
            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
              const response = await fetch(endpoint, requestOptions);
              const students = await response.json();
              return students; 
        } catch (error) {
            console.log("error get feed", error);
        } 
}
