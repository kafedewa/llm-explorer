  // function takes in the completion and the target node and returns an array of strings 
const getSelectedResponse = (selectedId, node) => {

    if(node.attributes.id == selectedId){
    return [node.name];
    }
    else if (node.children.length > 0){
    for (let child in node.children) {
        let result = getSelectedResponse(selectedId, node.children[child]);
        console.log("result is ", result);
        if (result) {
            return [node.name, ...result];
        }
    }
    }
    else{
        return;
    }

}

export default getSelectedResponse