import { connect } from 'react-redux';
import Link from '../Link';
import { setFilter } from '../../redux/actions';

/*
mapState.. adds a piece of the state to the props of the current component
So in this example "active" becomes a property for link
 */
const mapStateToProps = (state, props) => {
    return {
        active: props.filter === state.visibilityFilter
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        /*
        Link is expecting a property called onClick()
         */
        onClick: () => {
            dispatch(setFilter(props.filter));
        }
    };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;