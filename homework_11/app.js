let rootNode = document.getElementById("root");

function createTree(arrObj) {
  let ul = document.createElement('ul');
  for (let i = 0; i < arrObj.length; i++) {
    let li = document.createElement('li');
    if (arrObj[i].folder) {
      li.innerHTML = `<p><i class="material-icons orange">folder</i> ${arrObj[i].title}</p>`;
      li.firstChild.classList.add('folder');
      if (arrObj[i].children) {
        let childUl = createTree(arrObj[i].children);
        li.appendChild(childUl);
      } else {
        li.innerHTML += "<ul><i>Folder is empty</i></ul>";
      }
    } else {
      li.innerHTML = `<p><i class="material-icons grey">insert_drive_file</i> ${arrObj[i].title}</p>`;
    }
    ul.appendChild(li);
  }
  return ul;
}

rootNode.appendChild(createTree(structure));