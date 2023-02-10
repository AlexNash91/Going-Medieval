const ranks = async () =>{
    const response = await fetch('/ranks')
    return response.json();
  }
  