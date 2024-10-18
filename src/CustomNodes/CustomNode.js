import React from 'react';
import { Handle } from 'reactflow';
import './customNode.css';

const CustomNode = ({ data }) => {
  return (
    <div className="custom-node">
      <strong className="custom-node-label">{data.label}</strong>
      {data.image && (
        <img 
          src={data.image} 
          alt={data.label} 
          className="custom-node-image" 
        />
      )}
      {data.description && <p className="custom-node-description">{data.description}</p>}
      {data.notes && <p className="custom-node-notes">{data.notes}</p>}

      {/* Aggiungi punti di connessione in base al tipo di nodo */}
      {data.nodeType === 'input' && (
        <Handle type="source" position="bottom" />
      )}
      {data.nodeType === 'output' && (
        <Handle type="target" position="top" />
      )}
      {data.nodeType === 'default' && (
        <>
          <Handle type="target" position="top" />
          <Handle type="source" position="bottom" />
        </>
      )}
    </div>
  );
};

export default CustomNode;
