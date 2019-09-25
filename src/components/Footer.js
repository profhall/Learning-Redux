import React from 'react';
import FilterLink from './container_comps/FilterLink';
import { VISIBILITY_FILTERS } from '../constants';

const Footer = () => (
    <p>
        Show: <FilterLink filter={VISIBILITY_FILTERS.ALL}>All</FilterLink>
        <FilterLink filter={VISIBILITY_FILTERS.INCOMPLETE}>Active</FilterLink>
        <FilterLink filter={VISIBILITY_FILTERS.COMPLETED}>Completed</FilterLink>
    </p>
);

export default Footer;