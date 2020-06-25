import { createSelector } from 'reselect'

export const directorySelector = state => state.directory;

export const selectDirectorySection = createSelector(
    [directorySelector],
    directory => directory.sections
)