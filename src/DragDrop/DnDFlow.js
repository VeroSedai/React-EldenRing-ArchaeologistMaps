import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
  Edge,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background
} from 'reactflow';
import 'reactflow/dist/style.css';
import Sidebar from './sidebar'; // Assicurati che questo sia corretto

import './style.css';
import CustomNode from '../CustomNodes/CustomNode';

// Componente per il nodo personalizzato
const nodeTypes = {
  customNode: CustomNode,
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [variant, setVariant] = useState('Lines');
  const [editValue, setEditValue] = useState(nodes.data);
  const [id, setId] = useState();
  const [selectedNodeData, setSelectedNodeData] = useState(null);

  const onNodeClick = (e, val) => {
    setEditValue(val.data.label);
    setId(val.id);
    setSelectedNodeData(val.data);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setEditValue(e.target.value);
  };

  const handleEdit = () => {
    const res = nodes.map((item) => {
      if (item.id === id) {
        item.data = {
          ...item.data,
          label: editValue,
        };
      }
      return item;
    });
    setNodes(res);
    setEditValue('');
  };
  const handleUpdateNode = (updatedNodeData) => {
    const updatedNodes = nodes.map(node => {
      if (node.id === id) { 
        return {
          ...node,
          data: {
            ...node.data,
            label: updatedNodeData.name,
            image: updatedNodeData.image,
            description: updatedNodeData.description,
            notes: updatedNodeData.notes,
            nodeType: updatedNodeData.type,
          },
        };
      }
      return node;
    });
    setNodes(updatedNodes);
  };

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const nodeData = JSON.parse(event.dataTransfer.getData('application/reactflow'));

      // Check if the dropped element is valid
      if (!nodeData) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = {
        id: getId(),
        type: 'customNode', // Usa un tipo di nodo personalizzato
        position,
        data: {
          label: nodeData.name || `${nodeData.type} node`,
          image: nodeData.image,
          notes: nodeData.notes,
          description: nodeData.description,
          nodeType: nodeData.type,
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="dndflow">
    <ReactFlowProvider>
      <div className="reactflow-wrapper" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodeClick={onNodeClick}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          fitView
          nodeTypes={nodeTypes}
        >
          <Background color="#99b3ec" variant={variant} />
          <Controls />
        </ReactFlow>
      </div>
      <Sidebar onUpdateNode={handleUpdateNode} selectedNodeData={selectedNodeData}/> {/* Passa la funzione di aggiornamento */}
    </ReactFlowProvider>
  </div>
  );
};

export default DnDFlow;
