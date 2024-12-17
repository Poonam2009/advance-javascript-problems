const data = [
    { id: 1, parent: 0, text: "Top-level comment 1" },
    { id: 2, parent: 0, text: "Top-level comment 2" },
    { id: 3, parent: 1, text: "Reply to Top-level comment 1" },
    { id: 4, parent: 3, text: "Reply to Reply to Top-level comment 1" },
];

function restructureArray (data) {
    const root = [];
    const dataMap = {};

    data.forEach(item => {
        dataMap[item.id] = {
            ...item,
            children: []
        }
    });

    data.forEach(item => {
        const parent = dataMap[item.parent];
        if (parent){
            parent.children.push(dataMap[item.id])
        } else {
            root.push(dataMap[item.id])
        }
    })

    return root
}

console.log(restructureArray(data))