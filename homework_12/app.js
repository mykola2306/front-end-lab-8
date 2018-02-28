// Your code goes here
let rootNode = document.getElementById("root");
let pageHeading = document.createElement('h1');
let page = document.createElement('div')
let tanksList = document.createElement('div');

function tankPreviewPage(arrTankObj) {
  pageHeading.innerHTML = `Most popular tanks`;
  page.classList.add("thumbnails");
  page.appendChild(pageHeading);
  tanksList.classList.add('tanksList');
  for (let i = 0; i < arrTankObj.length; i++) {
    let tankItemLink = document.createElement('a');
    let tankItem = document.createElement('div');
    tankItem.classList.add("ellipsis");
    tankItem.setAttribute("title", "Click for details");
    let tankImg = document.createElement('img');
    tankImg.setAttribute("alt", arrTankObj[i].model)
    let tankName = document.createElement('p');
    let tankFlag = document.createElement('span');
    tankName.classList.add("tooltipImg")
    tankFlag.classList.add("tooltipImg")
    if (arrTankObj[i].model) {
      console.log('model: ', arrTankObj[i].model);
      tankItemLink.setAttribute('href', `#${arrTankObj[i].model}`.replace(/\s+/g, '-').toLowerCase());
      tankImg.setAttribute("src", arrTankObj[i].preview);
      tankImg.classList.add("imgBlock");
      // tankFlag.innerHTML = `heloo`
      // tankName.innerHTML = `atext`
      tankFlag.innerHTML = `
        <span class="tooltipImgText">${arrTankObj[i].country}</span>
        <img alt="${arrTankObj[i].country}" class="imgAutoWidth" src="${arrTankObj[i].country_image}">`;
      tankName.innerHTML = `
      <span class="tooltipName">${arrTankObj[i].model}</span>
      <span>${arrTankObj[i].level}</span> ${arrTankObj[i].model}`;

      // tankItem.innerHTML = arrTankObj[i].model;
      tankItem.appendChild(tankImg);
      tankItem.appendChild(tankFlag);
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

