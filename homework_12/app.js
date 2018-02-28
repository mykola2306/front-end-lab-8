// Your code goes here
let rootNode = document.getElementById("root");

function tankPreviewPage(arrTankObj) {
  let page = document.createElement('div')
  let pageHeading = document.createElement('h1');
  pageHeading.innerHTML = `Most popular tanks`;
  page.appendChild(pageHeading);
  let tanksList = document.createElement('div');
  for (let i = 0; i < arrTankObj.length; i++) {
    let tankItemLink = document.createElement('a');
    let tankItem = document.createElement('div');
    let tankImg = document.createElement('img');
    let tankName = document.createElement('p');
    if (arrTankObj[i].model) {
      console.log('model: ', arrTankObj[i].model);
      tankItemLink.setAttribute('href', `#${arrTankObj[i].model}`.replace(/\s+/g, '-').toLowerCase());
      tankImg.setAttribute("src", arrTankObj[i].preview);
      tankImg.setAttribute("alt", arrTankObj[i].model);
      tankName.innerHTML = `<img alt="${arrTankObj[i].country}" class="imgAutoWidth" src="${arrTankObj[i].country_image}"> <span>${arrTankObj[i].level}</span> ${arrTankObj[i].model}`;
      // tankItem.innerHTML = arrTankObj[i].model;
      tankItem.appendChild(tankImg);
      tankItem.appendChild(tankName);
      tankItemLink.appendChild(tankItem);
      tanksList.appendChild(tankItemLink);

      // li.innerHTML = `<p><i class="material-icons orange">folder</i> ${arrTankObj[i].title}</p>`;
      // li.firstChild.classList.add('folder');
      if (arrTankObj[i].children) {
        // let childUl = tankPreviewPage(arrTankObj[i].children);
        // li.appendChild(childUl);
      } else {
        // li.innerHTML += "<ul><i>Folder is empty</i></ul>";
      }
    } else {
      // li.innerHTML = `<p><i class="material-icons grey">insert_drive_file</i> ${arrTankObj[i].title}</p>`;
    }
    // ul.appendChild(li);
  }
  page.appendChild(tanksList);
  return page;
}
rootNode.appendChild(tankPreviewPage(tanks));

window.addEventListener("hashchange", myFunction);

function myFunction() {
  console.log('The anchor part has changed!');
  console.log(location.hash);
}