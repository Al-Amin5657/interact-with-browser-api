// alert('How are you?')

const showAlert = () => {
    alert('Dosto taka dhar dite parbi, matro 500?')
}

const lendMoney = () => {
    const result = confirm('Will you lend me 500 taka?')
    console.log(result);
    if (result === true) {
        alert('Tui amr janer dosto');
    }
    else (
        alert('DGM..... Tore ajk block maira dimu')
    )
}

const getInfo = () => {
    const name = prompt('Tor nam ki?')
    console.log(name);
    if (name === null) {
        alert('Name na dile kam nai, ja fooooot!!!')
    }
    else {
        console.log(name, 'welcome to this world!!!')
    }
}