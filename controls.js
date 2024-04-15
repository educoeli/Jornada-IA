export default{
    jumo: new KeyboardEvent('keydown', {key: 'Space', keyCode: 32}),
    dispatch(event) {
        document.dispatchEvent(this[event]);
    }
}