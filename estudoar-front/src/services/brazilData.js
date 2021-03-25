export async function fetchBrazilData() {
  try {
    const response = await fetch(
      'https://parseapi.back4app.com/classes/StateProvince?count=1&limit=10&order=name&keys=name',
      {
        headers: {
          'X-Parse-Application-Id': 'fYzlRsd8SQNB2PE8AQw6CItJvqbS34BsKeCGgWED', // This is the fake app's application id
          'X-Parse-Master-Key': 'lvEumoJGgkmjOPcWICZpnfm2a8UqfyHDVJiWipMX', // This is the fake app's readonly master key
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to feth Brazil Data API');
  }
}

export async function getStates() {
  try{
    const response = await fetchBrazilData();
    const { results } = response;
    const states = results.reduce((states, actualState) => states = [...states, actualState.name], []);
    return states;
  } catch (error) {
    throw new Error('Failed to get states from API');
  }
}
