import { createSelector } from 'reselect'

const selectDirectory = state => state.directory

export const selectCollections = createSelector(
    [selectDirectory],
    directory => directory.sections
)