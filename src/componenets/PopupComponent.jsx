import React from 'react'
import Dialog from '@mui/material/Dialog';
import { CancelOutlined, CloseOutlined } from '@mui/icons-material';

const PopupComponent = ({ title, handleClose, open, body }) => {
    return (
        <Dialog onClose={handleClose} open={open}>
            <div className='p-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h6 className="m-0 ml-3 fw-bold text-success">{title || "Title"}</h6>

                    <div className='text-secondary cursor-pointer' onClick={handleClose}>
                        <CloseOutlined fontSize='small' />
                    </div>
                </div>

                <div className='px-3'>
                    {body}
                </div>
            </div>

        </Dialog>
    )
}

export default PopupComponent