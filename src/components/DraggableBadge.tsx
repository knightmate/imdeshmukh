import React, { useRef } from 'react';
import { RigidBody } from '@react-three/cannon';
import { Box } from '@react-three/drei';

const DraggableBadge: React.FC = () => {
  const badgeRef = useRef<any>(null);

  const handlePointerDown = (event: any) => {
    // Handle pointer down event
  };

  const handlePointerUp = (event: any) => {
    // Handle pointer up event
  };

  const handlePointerMove = (event: any) => {
    // Handle pointer move event
  };

  return (
    <RigidBody
      ref={badgeRef}
      type="kinematicPosition"
      colliders="hull"
      position={currentPosition}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerUp}
    >
      {scene ? (
        <primitive object={scene} scale={[3, 3, 3]} />
      ) : (
        <Box args={[1, 1, 1]} scale={[3, 3, 3]}>
          <meshStandardMaterial color="hotpink" />
        </Box>
      )}
    </RigidBody>
  );
};

export default DraggableBadge; 