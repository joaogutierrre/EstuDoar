export async function getBrazilUFs() {
    try{
        const response = await fetch('http://localhost:5050/api/ufs');
        const ufs = await response.json();
        return ufs;
    }catch (error) {
        throw new Error('Failed to fetch API and get UFs');
    }
}

export async function getBrazilCitiesByUF(ufId) {
    try{
        const response = await fetch(`http://localhost:5050/api/cities/${ufId}`);
        const cities = await response.json();
        return cities;
    } catch (error) {
        throw new Error('Failed to fetch API and get cities');
    }
}