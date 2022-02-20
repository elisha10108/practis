// for trigger the card you need to  call that like that :
// let x = useSelector(state => state.open.isOpen)
export const TriggerCart = (value) => dispatch => {
        return dispatch({
            type: 'TRIGGER_CART',
            payload: value
        })
}
