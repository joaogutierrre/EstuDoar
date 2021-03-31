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

export async function getSchoolSupplyCategories(){
    try{
        const response = await fetch('https://estudoar-ts-api.herokuapp.com/api/category');
        const categories = await response.json();
        return categories;
    } catch(error) {
        throw new Error('Failed to fetch API and get School Supply Categories');
    }
}