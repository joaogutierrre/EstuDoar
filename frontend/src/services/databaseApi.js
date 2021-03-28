export async function getBrazilUFs() {
    try{
        const response = await fetch('http://localhost:5050/api/ufs');
        const brazilUFs = await response.json();
        return brazilUFs;
    }catch (error){
        throw new Error('Failed to fetch API and get UFs');
    }
}