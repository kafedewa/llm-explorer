const addNode = (parentId, newChildren, node) => {
      if (node.attributes.id == parentId) {
        return {
          ...node,
          attributes: {
            ...node.attributes,
            chosen: true
          },
          children: newChildren
        };
      }
      else if (node.children.length > 0) {
        return {
          ...node, children: node.children.map((child) => {
            return addNode(parentId, newChildren, child);
          })
        }
      }
      return node;
}

  export default addNode;