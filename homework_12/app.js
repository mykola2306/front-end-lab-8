location.hash = "";
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
    tankItem.setAttribute("aria-label", "Click for details");
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

function tankDetails(tank) {
  console.log(tank);
  console.log(tank.model);
  page.classList.remove("thumbnails");
  page.classList.add("tank-details");
  document.querySelector(".tanksList").innerHTML = ``;
  pageHeading.innerHTML = `<span class="tooltipImg"><span class="tooltipImgText">${tank.country}</span><img src="${tank.country_image}"></span> ${tank.model} (<span>level ${tank.level}</span>)`;
  let detailsImg = document.createElement('div');
  detailsImg.classList.add("detailsImg");
  detailsImg.innerHTML = `<h2>Preview</h2><img src="${tank.preview}" alt="${tank.model}">`;
  let detailsTable = document.createElement('div');
  detailsTable.classList.add("detailsTable");
  detailsTable.innerHTML = `<h2>Characteristic</h2>`;
  detailsTable.appendChild(buildTable(tank.details));
  let returnToThumbnails = document.createElement('div');
  returnToThumbnails.innerHTML = `<a aria-label="services for cars" href="#">Back to list view</a>`;
  tanksList.appendChild(detailsImg);
  tanksList.appendChild(detailsTable);
  tanksList.appendChild(returnToThumbnails);
}

function buildTable(table) {
  console.log(table);
  let tableBuild = document.createElement('table');
  for (var key in table) {
    // console.log(key + " -> " + table[key]);
    let row = document.createElement('tr');
    let tdName = document.createElement('td');
    tdName.innerText = key.replace(/_/g, ' ');;
    let tdValue = document.createElement('td');
    tdValue.innerText = table[key];
    row.appendChild(tdName);
    row.appendChild(tdValue);
    tableBuild.appendChild(row);
  }
  return tableBuild;
}

rootNode.appendChild(tankPreviewPage(tanks));
// tankDetails(tanks[2]);
window.addEventListener("hashchange", function () {
  console.log('The anchor part has changed!');
  for (let i = 0; i < tanks.length; i++) {
    if (location.hash === `#${tanks[i].model}`.replace(/\s+/g, '-').toLowerCase()) {
      tankDetails(tanks[i]);
      return;
    }
  }
  if(location.hash = "#"){
    console.log("YES CHANGE!!!!");
    tanksList.innerHTML = "";
    page.classList.remove("tank-details");
    page.classList.add("thumbnails");
    rootNode.appendChild(tankPreviewPage(tanks));
  }
});

