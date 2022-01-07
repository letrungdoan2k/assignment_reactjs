import React from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import './confirm.css';

export const submit = (id, onRemove) => {

  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className='custom-ui'>
          <h1>Bạn có chắc?</h1>
          <p>Muốn xóa chứ?</p>
          <button style={{marginRight: '33px', padding: '2px 4px', backgroundColor: '#fdaa00', cursor: 'pointer'}} onClick={onClose}>Không</button>
          <button style={{marginRight: '33px', padding: '2px 4px', backgroundColor: '#ef5050', cursor: 'pointer'}}
            onClick={() => {
              onRemove(id);
              onClose();
            }}
          >
            Xóa luôn và ngay
          </button>
        </div>
      );
    }
  });
  };
