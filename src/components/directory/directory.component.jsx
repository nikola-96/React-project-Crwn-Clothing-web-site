import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
import { connect } from 'react-redux';
import { selectDirectorySection } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            {
                sections.map(({ id, ...section }) => ( //iskopirali smo sve podatke iz sekcije na ovaj nacin 
                    <MenuItem key={id} {...section} />
                ))
            }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
}
)

export default connect(mapStateToProps)(Directory)