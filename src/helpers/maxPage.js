const handleMaxPage = (data) => {
    let num = data/10
    const type = num && num % 1 === 0 ? 'int' : 'float'
    if(type === 'float') {
        num = Math.ceil(num) 
    }
    return num
  }

  export { handleMaxPage }