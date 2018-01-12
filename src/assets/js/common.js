const setStorage = (key, value) => {
    localStorage.setItem(key, value);
}

const getStorage = (key) => localStorage.getItem(key);

export {setStorage, getStorage}