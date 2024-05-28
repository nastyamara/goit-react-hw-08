import { useSelector, useDispatch } from 'react-redux'
import css from './SearchBox.module.css'
import { changeFilter, selectNameFilter } from '../../redux/filters/slice'


export default function SearchBox() {

    const dispatch = useDispatch()
    const filter = useSelector(selectNameFilter)
    const onChange = (e)=> {
        dispatch(changeFilter(e.target.value))
}
    return (
        <div className={css.container}>
            <p>Find contacts by name</p>
            <input type="text" name="" id="" value={filter || ''} onChange={onChange} />
        </div>
    )
}